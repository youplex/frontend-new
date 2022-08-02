import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import Login from './Pages/Login';

function App() {
  return (
   <>
   <Navbar />
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/login' element={<Login />} />
   </Routes>
   <Footer /> 
   </>
  );
}

export default App; 
