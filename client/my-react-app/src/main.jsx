import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './components/Login/Login.jsx'
import Register from './components/Register/Register.jsx'
import JobApplicationForm from "./components/JobApplicationForm/JobApplicationForm"
import DiscoverJobPosition from "./components/DiscoverJobPosition/DiscoverJobPosition.jsx"
import Dashboard from "./components/Dashboard/Dashboard.jsx"

import './index.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route  path='/' element={< App/>}/>
      <Route  path="/Signup"  element={<Register/>}/>
      <Route  path="/Login"  element={<Login/>}/>
      <Route path='/DiscoverJob' element ={<DiscoverJobPosition/>} />
      <Route path='/JobApplicationForm' element={<JobApplicationForm/>} />
      <Route path='/Dashboard' element={<Dashboard/>} />


      
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
