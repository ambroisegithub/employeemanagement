import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './components/Login/Login';
import Forget from './components/Forget/Forget';
import Reset from './components/Forget/Reset';
import Register from './components/Register/Register';
import JobApplicationForm from './components/JobApplicationForm/JobApplicationForm';
import DiscoverJobPosition from './components/DiscoverJobPosition/DiscoverJobPosition';
import Sidebar from './components/Dashboard/SideBar/SideBar';
import About from './components/Dashboard/Pages/About';
import Comment from './components/Dashboard/Pages/Comment';
import Analytics from './components/Dashboard/Pages/Analytics';
import Product from './components/Dashboard/Pages/Product';
import ProductList from './components/Dashboard/Pages/ProductList';
import Blog from './components/Dashboard/Pages/Blog';
import Home from './components/Dashboard/Pages/Home';
import Applyrequest from "./components/Dashboard/Pages/Applyrequest";
import './index.css';
import PropTypes from "prop-types";
const ResetPassword = ({ params }) => {
  const { token } = params;
  // You can pass the reset token to the Reset component here
  return <Reset token={token} />;
};

ResetPassword.propTypes = {
  params: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
};
const NoMatch = () => {
  return <div>404 - Not Found</div>;
};

const Dashboard = () => {
  return (
    <Sidebar>
      <Routes>
        <Route index  element={<Home/>}></Route>
        <Route path="blog" element={<Blog />} />
        <Route path="about" element={<About />} />
        <Route path="comment" element={<Comment />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="product" element={<Product />} />
        <Route path="productList" element={<ProductList />} />
        <Route path="Applyrequest" element={<Applyrequest />} />
      </Routes>
    </Sidebar>
  );
};

export default Dashboard; 
const MainApp = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Signup" element={<Register />} />
          <Route path="/Login" element={<Login />} />
        
          <Route path="/Forget" element={<Forget />} />
          <Route path="/reset-password/:token" element={<Reset />} />
          <Route path="/Reset/:token" element={<ResetPassword />} />
          <Route path="/DiscoverJob" element={<DiscoverJobPosition />} />
          <Route path="/JobApplicationForm" element={<JobApplicationForm />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

ReactDOM.render(<MainApp />, document.getElementById('root'));


// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// // import Appdash  from './Appdash.jsx'
// import Login from './components/Login/Login.jsx'
// import Register from './components/Register/Register.jsx'
// import JobApplicationForm from "./components/JobApplicationForm/JobApplicationForm"
// import DiscoverJobPosition from "./components/DiscoverJobPosition/DiscoverJobPosition.jsx"

// import Dashboard from './components/Dashboard/Dashboard.jsx'


// import About from './components/Dashboard/Pages/About.jsx'
// import Blog from './components/Dashboard/Pages/Blog.jsx'
// import User from './components/Dashboard/Pages/User.jsx'


// import './index.css'
// import { Route, Routes, BrowserRouter } from 'react-router-dom'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <BrowserRouter>
//     <Routes>
//       <Route  path='/' element={< App/>}/>
//       <Route  path="/Signup"  element={<Register/>}/>
//       <Route  path="/Login"  element={<Login/>}/>



//       <Route   path='/dashboard' element={<Dashboard/>}>

//         <Route index element={<About/>}/>
//          <Route path='blog' element={<Blog/>}/>
//          <Route path='user' element={<User/>}/>

//       </Route>



//       {/* <Route  path='/pp' element={<Dashboard />} /> */}
//       {/* <Route  path='/dash' element={<About />} /> */}
//       <Route path='/DiscoverJob' element ={<DiscoverJobPosition/>} />
//       <Route path='/JobApplicationForm' element={<JobApplicationForm/>} />
//     </Routes>
//     </BrowserRouter>
//   </React.StrictMode>
// )

