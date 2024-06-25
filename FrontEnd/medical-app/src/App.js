import React, { useState, useEffect } from 'react'
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
import NotFound from './pages/NotFound.jsx';
import NoAccess from './pages/NoAccess.jsx';
import PrivateRouter from './components/PrivateRouter.jsx';
import AdminRouter from './components/AdminRouter.jsx';
import ForceRedirect from './components/ForceRedirect.jsx';

import axios from 'axios'



function App() {

  const postRegister = (body) => {
    axios.post('http://127.0.0.1:5000/api/register', body).then((response) => {
      console.log(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }

  const postLogin = (body) => {
    axios.post('http://127.0.0.1:5000/api/login', body).then((response) => {
      console.log(response.data)
    }).catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {

  },[])

  const user = {
    isConnected: false,
    role: "USER"
  }

  return (
    <div className="App">
      <BrowserRouter>
        <div className="bg-light" style={{ height: "100vh" }}>
          <NavBar />
          <Routes>
            <Route path="/" element={<PrivateRouter user={user}><Profile /></PrivateRouter>}></Route>
            <Route path="/login" element={<ForceRedirect user={user}><Login  add={postLogin}/></ForceRedirect>}></Route>
            <Route path="/register" element={<ForceRedirect user={user}><Register add={postRegister} /></ForceRedirect>}></Route>
            <Route path="/admin" element={<AdminRouter user={user}><Admin /></AdminRouter>}></Route>
            <Route path="*" element={<NotFound />} />
            <Route path="/noaccess" element={<NoAccess />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );

}

export default App;

