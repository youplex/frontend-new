import { useGoogleLogin } from "@react-oauth/google";
import loginhero from "../assets/loginhero.png";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setToken, setUser, logoutUser } from "../redux/services/authSlice";
import { useNavigate } from "react-router";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => ({ ...state.auth }));

  const handleSuccess = async (res) => {
    try {
      const { data } = await axios.post(
        "/auth/login",
        { code: res.code },
        {
          withCredentials: true,
        }
      );
      dispatch(setToken(data.token));
      dispatch(setUser(data.user));
      navigate("/createplaylist");
    } catch (error) {
      alert("Login error");
      console.log(error);
    }
  };

  const handleError = (res) => {
    console.log("error", res);
    alert("Some Error occured check console");
  };

  const login = useGoogleLogin({
    flow: "auth-code",
    onSuccess: handleSuccess,
    onError: handleError,
    scope: "openid email profile https://www.googleapis.com/auth/calendar",
  });

  const handleLogout = async () => {
    try {
      const { data, status } = await axios.post(
        "/auth/logout",
        {},
        {
          headers: {
            "x-auth-token": token,
          },
          withCredentials: true,
        }
      );
      if (status === 200) {
        dispatch(logoutUser());
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <section className="text-bg">
        <div className="login-container container mx-auto flex px-2 py-10 md:flex-row flex-col items-center">
          <div className="lg:max-w-full lg:w-full md:w-1/2 w-5/6 max-w-2xl">
            <img
              className="object-cover object-center rounded md-w-3/6 
              "
              alt="hero"
              src={loginhero}
            />
          </div>
          <div className="login-action-box lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center sm-mr-16">
            <h1 className="sm:text-5xl md-text-5xl mb-8 font-bold text-bg text-3xl">


              Create Your First &nbsp;

              <br className="hidden lg:inline-block" />
              Distraction Free Playlist
            </h1>
            <div className="flex justify-center">
              {token ? (
                <button
                  onClick={handleLogout}
                  className="p-3 px-6 pt-2 text-white bg-btn rounded-lg baseline hover:bg-blue-700 md:block"
                >
                  Logout
                </button>
              ) : (
                <button
                  id="signInDiv"
                  className="p-3 px-6 pt-2 text-white bg-btn rounded-lg baseline hover:bg-blue-700 md:block"
                  onClick={() => login()}
                >
                  Login with Google
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
