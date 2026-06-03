import { NavLink } from "react-router-dom";

const Header = () => (
  <header className="flex items-center justify-between px-8 py-6 bg-[#2B2159]">
  <h1 className="text-white font-bold text-2xl">CriptoAPP</h1>
    <nav className="flex gap-8">
         <NavLink
        to="/"
        className={({ isActive }) =>
          `text-white hover:text-gray-300 text-lg font-medium ${isActive ? "underline" : ""}`
        }
      >
        Overview
      </NavLink>
      <NavLink
        to="/watchlist"
        className={({ isActive }) =>
          `text-white hover:text-gray-300 text-lg font-medium ${isActive ? "underline" : ""}`
        }
      >
        Watchlist
      </NavLink>  
    </nav>
  </header>
);

export default Header;
