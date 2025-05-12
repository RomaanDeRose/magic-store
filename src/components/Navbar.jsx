import { NavLink } from 'react-router';
import { FaCartShopping } from "react-icons/fa6";
import logo from '../assets/logo.png';

function Navbar() {
    return (
      <header className="fixed top-0 left-0 z-10 w-full py-2.5 bg-white border-b-1 shadow-md shadow-gray-200/20 border-gray-100/50">
        <nav className="max-w-4xl mx-auto flex justify-between items-center px-4 md:px-2">
          <NavLink to="/">
            <img src={logo} alt="Logo Magic Store" className="size-9" />
          </NavLink>
          <ul className="flex gap-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "bg-blue-600 text-white text-md uppercase font-medium transition-all px-2 py-1 rounded-lg shadow-lg shadow-blue-500/35"
                  : "text-blue-500 text-md uppercase font-medium transition-all px-2 py-1 rounded-lg hover:bg-blue-600 hover:text-white"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/products"
              end
              className={({ isActive }) =>
                isActive
                  ? "bg-blue-600 text-white text-md uppercase font-medium transition-all px-2 py-1 rounded-lg shadow-lg shadow-blue-500/35"
                  : "text-blue-500 text-md uppercase font-medium transition-all px-2 py-1 rounded-lg hover:bg-blue-600 hover:text-white"
              }
            >
              Products
            </NavLink>
          </ul>
          <NavLink to="/cart" className="text-gray-900 font-bold text-lg">
            <FaCartShopping size={25} className="text-blue-500" />
          </NavLink>
        </nav>
      </header>
    );
}  

export default Navbar;