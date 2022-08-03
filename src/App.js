import React, { useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import Login from './Pages/Login';
import CreatePlaylist from './Pages/createPlaylist';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setUser } from './redux/services/authSlice';

function App() {
  const { token } = useSelector((state) => ({...state.auth}));
  const dispatch = useDispatch();

  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
          const { data } = await axios.get('/user', {
            headers: {
              'x-auth-token': token
            }
        });
        if(data){
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
   <Navbar />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/login' element={<Login />} />
    <Route path='/createplaylist' element={<CreatePlaylist />}/>
   </Routes>
   <Footer /> 
   </>
  );
}

export default App; 
