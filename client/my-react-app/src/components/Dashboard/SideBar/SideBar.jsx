import  { useState } from 'react';
import PropTypes from 'prop-types';
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      path: "/dashboard/blog",
      name: "Dashboard",
      icon: <FaTh />
    },
    {
      path: "/dashboard/about",
      name: "About",
      icon: <FaUserAlt />
    },
    {
      path: "/dashboard/analytics",
      name: "Analytics",
      icon: <FaRegChartBar />
    },
    {
      path: "/dashboard/comment",
      name: "Comment",
      icon: <FaCommentAlt />
    },
    {
      path: "/dashboard/product",
      name: "Product",
      icon: <FaShoppingBag />
    },
    {
      path: "/dashboard/productList",
      name: "Product List",
      icon: <FaThList />
    }
  ];

  return (
    <div className="container">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">Logo</h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink to={item.path} key={index} className="link" activeClassName="active">
            <div className="icon">{item.icon}</div>
            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

SideBar.propTypes = {
     children: PropTypes.node.isRequired
   };

export default SideBar;
