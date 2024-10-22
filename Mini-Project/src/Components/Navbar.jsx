import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black px-7 py-4  flex justify-between max-w-full">
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

          <button className="text-white group">
            <FaUserCircle className="w-6 h-6 mt-2"/>
            <div className="z-10 hidden absolute bg-white rounde-lg shadow w-32 group-focus:block top-full right-0">
              <ul className="py-2 text-sm text-gray-950">
                <li>
                  <NavLink to="profile">Profile</NavLink>
                </li>
                <li>
                  <NavLink to="/">Log Out</NavLink>
                </li>
              </ul>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
