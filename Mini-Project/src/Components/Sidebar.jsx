import { FaHome, FaBars, FaBuilding, FaBed, FaHandshake } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Home",
      icon: <FaHome />,
    },
    {
      path: "/institute",
      name: "Institute",
      icon: <FaBuilding />,
    },
    {
      path: "/lodge",
      name: "Lodge",
      icon: <FaBed />,
    },
    {
      path: "/business",
      name: "Business",
      icon: <FaHandshake />,
    },
  ];
  return (
    <div className="cont">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top-section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
           Dashboard
          </h1>
          <div style={{ marginLeft: isOpen ? "30px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassname="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main className="p">{children}</main>
    </div>
  );
};

export default Sidebar;
