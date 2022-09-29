import { LandingFeatures, LandingHeader, LandingNav, Faq } from '../components';
import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../redux/services/authSlice";
import { useNavigate } from "react-router";
import axios from 'axios';

function LandingPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleSuccess = async (res) => {
    try {
      const { data } = await axios.post(
        "/auth/login",
        { code: res.code },
        {
          withCredentials: true,
        }
      );
      if(data?.new){
        navigate("/createplaylist?isNew?true");
      }else{
        navigate('/dashboard');
      }
      dispatch(setUser(data?.user));
      dispatch(setToken(data?.token));
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

    return (
      <main>
        <LandingNav login={login} />
        <LandingHeader login={login} />
        <LandingFeatures />
        <Faq />
      </main>
    );
  }
  
  export default LandingPage ; 
  