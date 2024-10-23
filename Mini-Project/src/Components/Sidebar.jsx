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
    <div>
      <div
        style={{ width: isOpen ? "200px" : "50px" }}
        className="bg-black text-white h-screen w-[200px] transition-all duration-500 ease-in-out"
      >
        <div className="items-center p-[20px_15px] flex">
          <h1
            style={{ display: isOpen ? "block" : "none" }}
            className="text-[25px]"
          >
            Dashboard
          </h1>
          <div
            style={{ marginLeft: isOpen ? "30px" : "0px" }}
            className="flex text-[25px] ml-[50px]"
          >
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={({ isActive }) =>
              `flex p-[10px_15px] gap-[15px] transition-all duration-500 ${
                isActive ? "bg-[lightskyblue] text-black" : "text-white hover:bg-[lightskyblue] hover:text-black"
              }`
            }
          >
            <div className="text-[25px] inline-flex items-center">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="text-[20px]"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main className="w-full p-5">{children}</main>
    </div>
  );
};

export default Sidebar;
