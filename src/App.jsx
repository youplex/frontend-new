import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "./redux/services/authSlice";
import {
  UserHome,
  Dashboard,
  LandingPage,
  CreatePlaylist,
  Login,
  SearchPlaylist,
  Error,
  SinglePlaylist
} from "./pages";
import { Footer } from "./components";
import PlaylistDashboard from "./pages/PlaylistDashboard";

function App() {
  const { token } = useSelector((state) => ({ ...state.auth }));
  const dispatch = useDispatch();

  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        const { data } = await axios.get("/user", {
          headers: {
            "x-auth-token": token,
          },
        });
        if (data) {
          dispatch(setUser(data));
        }
      } catch (error) {
        console.log(error);
      }
    };
    checkLoggedIn();
  }, [token]);

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<UserHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createplaylist" element={<CreatePlaylist />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/playlistDashboard" element={<PlaylistDashboard />} />
        <Route  path="/search" element={<SearchPlaylist />}/>
        <Route path ="/notes" element={<Error />} />
        <Route path="/schedule" element={<Error />} />
        <Route path='/playlist' element={<SinglePlaylist />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
