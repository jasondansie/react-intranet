import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Info from './components/Info';
import Login from './components/Login';
import Logout from './components/Logout';
import MyProfile from './components/MyProfile';
import Layout from './pages/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='/myprofile' element={<MyProfile />}> </Route>
          <Route path='/info' element={<Info />}></Route>
          <Route path='/logout' element={<Logout />}></Route>
        </Route>  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
