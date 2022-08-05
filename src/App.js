import React, { useEffect } from 'react';
import './App.css';
// import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom'
// import Home from './Pages/Home';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import CreatePlaylist from './pages/createPlaylist';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setUser } from './redux/services/authSlice';
import Dashboard from './pages/Dashboard';
import UserHome from './pages/UserHome';
import PlaylistDashboard from './pages/PlaylistDashboard';


function App() {
  const { token } = useSelector((state) => ({ ...state.auth }));
  const dispatch = useDispatch();

  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        const { data } = await axios.get('/user', {
          headers: {
            'x-auth-token': token
          }
        });
        if (data) {
          dispatch(setUser(data));
        }
      } catch (error) {
        console.log(error);
      }
    }
    checkLoggedIn();
  }, [token])

  return (
    <>

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<UserHome />} />
        <Route path='/login' element={<Login />} />
        <Route path='/createplaylist' element={<CreatePlaylist />} />
        <Route path='/PlaylistDashboard' element={<PlaylistDashboard />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/userhome' element={<UserHome />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App; 
