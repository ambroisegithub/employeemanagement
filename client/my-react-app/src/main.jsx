import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import Appdash  from './Appdash.jsx'
import Login from './components/Login/Login.jsx'
import Register from './components/Register/Register.jsx'
import JobApplicationForm from "./components/JobApplicationForm/JobApplicationForm"
import DiscoverJobPosition from "./components/DiscoverJobPosition/DiscoverJobPosition.jsx"

import Dashboard from './components/Dashboard/Dashboard.jsx'


import About from './components/Dashboard/Pages/About.jsx'
import Blog from './components/Dashboard/Pages/Blog.jsx'
import User from './components/Dashboard/Pages/User.jsx'


import './index.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route  path='/' element={< App/>}/>
      <Route  path="/Signup"  element={<Register/>}/>
      <Route  path="/Login"  element={<Login/>}/>



      <Route   path='/dashboard' element={<Dashboard/>}>

        <Route index element={<About/>}/>
         <Route path='blog' element={<Blog/>}/>
         <Route path='user' element={<User/>}/>

      </Route>



      {/* <Route  path='/pp' element={<Dashboard />} /> */}
      {/* <Route  path='/dash' element={<About />} /> */}
      <Route path='/DiscoverJob' element ={<DiscoverJobPosition/>} />
      <Route path='/JobApplicationForm' element={<JobApplicationForm/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
