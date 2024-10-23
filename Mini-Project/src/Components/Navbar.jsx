import { useState } from "react";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setDropdownOpen(false);
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <nav className="bg-black px-7 py-4 flex justify-between max-w-full">
      <div className="flex items-center text-xl">
        <span className="text-white font-semibold">My Website</span>
      </div>
      <div className="flex items-center gap-x-5">
        <div className="relative md:w-65">
          <span className="relative md:absolute inset-y-0 left-0 flex items-center pl-2">
            <button className="p-1 focus:outline-none text-white md:text-black">
              <FaSearch />
            </button>
          </span>
          <input
            type="text"
            className="w-full px-4 py-1 pl-12 rounded shadow outline-none hidden md:block"
          />
        </div>
        <div className="text-white">
          <FaBell className="w-6 h-6" />
        </div>
        <div className="relative">
          <div
            className="text-white cursor-pointer group"
            onClick={toggleDropdown}
          >
            <FaUserCircle className="w-7 h-7 mt-1" />
          </div>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 bg-white rounded-lg shadow w-32 z-10">
              <ul className="py-2 text-sm text-gray-950">
                <li>
                  <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                      `block px-4 py-2 ${
                        isActive ? "bg-gray-200 text-black" : "text-gray-950"
                      } hover:bg-gray-200`
                    }
                    onClick={handleLinkClick}
                  >
                    Profile
                  </NavLink>
                </li>
                <li>
                  <button
                    className="block px-4 py-2 text-gray-950 hover:bg-gray-200 w-full text-left"
                    onClick={handleLogout}
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
