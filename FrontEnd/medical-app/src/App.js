import React from 'react'
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Profile from './pages/Profile.jsx';
import Admin from './pages/Admin.jsx';
import NavBar from './components/NavBar.jsx';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <div className="bg-light" style={{height: "100vh"}}>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Profile />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/admin" element={<Admin/>}></Route>
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );

}

export default App;

