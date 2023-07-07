import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaTh, FaUserAlt, FaRegChartBar, FaCommentAlt, FaShoppingBag, FaThList } from 'react-icons/fa';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

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
        <div className="navigationContainer" style={{ backgroundColor: 'indigo', width: '100%', color: 'white', height: '100px' }}>
          <div className="top_section">
            <div className="bars">
              {!isSidebarOpen ? (
                <AiOutlineMenu className="bar" onClick={toggleSidebar} />
              ) : (
                <AiOutlineClose className="bar" onClick={toggleSidebar} />
              )}
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
