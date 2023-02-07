import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AdminConsole from './components/AdminConsole';
import Layout from './pages/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Layout />}></Route>
          <Route path='/adminConsole' element={<AdminConsole />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
