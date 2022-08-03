import { useGoogleLogin } from '@react-oauth/google';
import loginhero from "../assets/loginhero.png";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setToken, setUser } from '../redux/services/authSlice';
import { useNavigate } from 'react-router';

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSuccess = async (res) => {
    try {
      const { data } = await axios.post('/auth/login', { code: res.code }, {
        withCredentials: true,
      });
      dispatch(setToken(data.token));
      dispatch(setUser(data.user));
      navigate('/createplaylist');
    } catch (error) {
      alert('Login error');
      console.log(error);
    }
  }

  const handleError = (res) => {
    console.log('error', res);
    alert('Some Error occured check console')
  }

  const login = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: handleSuccess,
    onError: handleError,
    scope: "openid email profile https://www.googleapis.com/auth/calendar",

  });

  return (
    <div className="App">
      <div className="text-gray-600 body-font">
        <div className="container mx-auto flex md:flex-row flex-col items-center" style={{ width: "90%" }}>
          <div className="lg:max-w-xl lg:w-full md:w-3/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded w-3/4 ml-8"
              alt="hero"
              src={loginhero}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-5xl mb-4 font-bold bg-text text-left -mt-16">
              Create Your First
              <br className="hidden lg:inline-block" />
              Distraction Free Playlist
            </h1>
            <div className="flex justify-center">
              <button id='signInDiv' className='p-3 px-6 pt-2 text-white bg-btn rounded-lg baseline hover:bg-blue-700 md:block' onClick={() => login()}>Login with Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
}

export default Login;
