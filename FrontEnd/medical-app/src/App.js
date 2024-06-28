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
import PrivateRouter from './components/PrivateRouter.jsx';
import axios from 'axios'
const jwt_decode = require('jwt-decode');


function App() {

  const [user, setUSer] = useState({
    isConnected: false,
    role: "USER"
  })
  const [errors, setErrors] = useState({})
  const [profile, setProfiles] = useState([])
  const [oneProfile, setOneProfiles] = useState({})
  const [refetsch, setRefetch] = useState(false)

  const postRegister = (body, navigate) => {
    axios.post('http://127.0.0.1:5000/api/register', body).then((response) => {
      console.log(response.data)

      navigate('/login')
    }).catch((error) => {
      console.log(error.response.data)
      setErrors(error.response.data)

    })
  }

  const postLogin = (body, navigate) => {
    axios.post('http://127.0.0.1:5000/api/login', body)
      .then((response) => {
        console.log(response.data);
        const { token } = response.data
        localStorage.setItem('jwt', token)
        /*const decode = jwt_decode(token)
        console.log(decode)*/
        setUSer({
          isConnected: true,
          role: "ADMIN"
        })
        navigate('/')

      }).catch((error) => {
        console.log(error.response.data);
        setErrors(error.response.data)
      });
  }

  const postProfile = (body) => {
    axios.post('http://127.0.0.1:5000/api/add', body).then((response) => {
      console.log(response.data)
      setProfiles(response.data)
    }).catch((error) => {
      console.log(error.response.data)
    })
  }

  const getProfile = () => {
    axios.get('http://127.0.0.1:5000/api/getProfile').then((response) => {
      console.log(response.data)
      setProfiles(response.data)
    }).catch((error) => {
      console.log(error.response.data)
    })
  }

  const getOneProfile = (id) => {
    axios.get(`http://127.0.0.1:5000/api/getProfile/${id}`).then((response) => {
      console.log(response.data)
      setOneProfiles(response.data)
    }).catch((error) => {
      console.log(error.response.data)
    })
  }

  const deleteProfile = (id) => {
    axios.delete(`http://127.0.0.1:5000/api/deleteProfile/${id}`).then((response) => {
      console.log(response.data)
      setRefetch(!refetsch)
    }).catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    getProfile()
  }, [refetsch])

  const onChange = (profile) => {
    setOneProfiles(profile)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <div className="bg-light" style={{ height: "150vh" }}>
          <NavBar user={user} />
          <Routes>
            <Route path="/profile" element={<PrivateRouter user={user}><Profile addProfile={postProfile} oneProfile={oneProfile} /></PrivateRouter>}></Route>
            <Route path="/login" element={<Login add={postLogin} errors={errors} />}></Route>
            <Route path="/register" element={<Register add={postRegister} errors={errors} />}></Route>
            <Route path="/admin" element={<PrivateRouter user={user}> <Admin profile={profile} delete={deleteProfile} change={onChange} /></PrivateRouter>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );

}

export default App;

