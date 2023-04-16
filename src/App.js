import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Info from './components/Info';
import Logout from './components/Logout';
import MyProfile from './components/MyProfile';
import Layout from './pages/Layout';
import AddUser from './components/AddUser';
import Finances from './components/Finances';
import UploadExcel from './components/UploadExcel';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path='/home' element={<Home />}> </Route>
          <Route path='/myprofile' element={<MyProfile />}> </Route>
          <Route path='/info' element={<Info />}></Route>
          <Route path='/adduser' element={<AddUser />}></Route>
          <Route path='/finances' element={<Finances />}></Route>
          <Route path='/uploadexcel' element={<UploadExcel />}></Route>
          <Route path='/logout' element={<Logout />}></Route>
        </Route>  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
