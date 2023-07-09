import  { useState } from 'react';
import PropTypes from 'prop-types';
import { FaTh, FaUserAlt, FaRegChartBar, FaCommentAlt, FaShoppingBag, FaThList } from 'react-icons/fa';
import {GrNotification} from 'react-icons/gr';

import { AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import {FaUsers} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import  ProfileImage from "../image/user-profile-icon.png"
const SideBar = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [selectedPath, setSelectedPath] = useState(null);
  const [isCloseBarClicked, setCloseBarClicked] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
    setCloseBarClicked(!isCloseBarClicked);
  };

  const handleMenuItemClick = (path) => {
    setSelectedPath(path);
    setSidebarOpen(false);
  };

  const menuItem = [
    {
      path: '/dashboard/blog',
      name: 'Dashboard',
      icon: <FaTh />,
    },
    {
      path: '/dashboard/about',
      name: 'About',
      icon: <FaUserAlt />,
    },
    {
      path: '/dashboard/analytics',
      name: 'Analytics',
      icon: <FaRegChartBar />,
    },
    {
      path: '/dashboard/comment',
      name: 'Comment',
      icon: <FaCommentAlt />,
    },
    {
      path: '/dashboard/product',
      name: 'Product',
      icon: <FaShoppingBag />,
    },
    {
      path: '/dashboard/productList',
      name: 'Product List',
      icon: <FaThList />,
    },
  ];

  return (
    <>
      <div className="dashboardContainer">
        <div className="navigationContainer" >

          <div className='LogoContainer'  >


          <div className='sectionContainer'>
          <div >
              <NavLink className="LogoEmps">EMS</NavLink>
          </div>
          <div className="top_section">
            <div className="bars">
              {!isSidebarOpen ? (
                <AiOutlineMenu className="bar" onClick={toggleSidebar} />
              ) : (
                <AiOutlineClose className="bar" onClick={toggleSidebar} />
              )}
            </div>
          </div>
          <div className='searchcontainer'>
            <input type="text" placeholder='Search' className='inputSearch'></input>
           
          </div>
          
          </div>


<div style={{width:"50%",height:"auto",paddingTop:"5px"}}>
  <ul style={{display:"flex",flexDirection:"row",listStyle:"none",justifyContent:"space-between"}}>
    
  <li></li>

    <li>
    <ul style={{display:"flex",flexDirection:"row",gap:"20px",paddingTop:"10px"}}>
      <li><button  style={{borderRadius:"100%",border:"1px solid white",padding:"5px"}}><GrNotification /></button></li>
      <li><button style={{borderRadius:"100%",border:"1px solid white",padding:"5px"}}><GrNotification/></button></li>
    </ul>
    </li>
    <li><img src={ProfileImage} alt="" style={{width:"40px",height:"40px",backgroundColor:"white",borderRadius:"100%",border:"1px solid white"}}/></li>

  </ul>
</div>
          </div>
        </div>

        <div className={`container ${isSidebarOpen ? 'sidebarOpen' : ''}`}>
          <div className={`sidebarContainer ${isCloseBarClicked ? 'hideIcons' : ''}`}>
            {menuItem.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                className={`link ${selectedPath === item.path ? 'active' : ''}`}
                onClick={() => handleMenuItemClick(item.path)}
              >
                <div className="icon">{item.icon}</div>
                <div className="link_text">{item.name}</div>
              </NavLink>
            ))}
          </div>

          <main>{children}</main>
        </div>
      </div>
    </>
  );
};

SideBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SideBar;
