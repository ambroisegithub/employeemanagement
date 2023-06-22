import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Register from './components/Register/Register.jsx'
import './index.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route  path='/' element={< App/>}/>
      <Route  path="/Register"  element={<Register/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
