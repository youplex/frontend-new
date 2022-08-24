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
  PlaylistDashboard,
  SearchPlaylist,
  Error,
  SinglePlaylist,
  VideoCourse,
  VideoNotes,
  Scheduling,
  Privacy
} from "./pages";
import { Footer, PrivateRoute } from "./components";
import { ToastContainer } from 'react-toastify';

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
      <ToastContainer position="top-center" />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<UserHome />} />
        <Route path="/createplaylist" element={<CreatePlaylist />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="/playlistDashboard" element={<PlaylistDashboard />} />
        <Route  path="/search" element={<PrivateRoute><SearchPlaylist /></PrivateRoute>}/>
        <Route path="/schedule" element={<PrivateRoute><Scheduling /></PrivateRoute>} />
        <Route path='/playlist/:playlistId' element={<SinglePlaylist />} />
        <Route path="/video/:videoId" element={<PrivateRoute><VideoCourse /></PrivateRoute>} />
        <Route path="/notes" element={<PrivateRoute><VideoNotes /></PrivateRoute>} />
        <Route path='/privacy' element={<Privacy />}/>
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
