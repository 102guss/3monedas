import { NavLink } from "react-router-dom";

const Header = () => (
  <header className="flex items-center justify-between px-6 py-4 bg-[#2B2159]">
  <h1 className="text-white font-bold text-xl">CriptoAPP</h1>
    <nav className="flex gap-6">
         <NavLink
        to="/"
        className={({ isActive }) =>
          `text-white hover:text-gray-300 ${isActive ? "underline" : ""}`
        }
      >
        Overview
      </NavLink>
      <NavLink
        to="/watchlist"
        className={({ isActive }) =>
          `text-white hover:text-gray-300 ${isActive ? "underline" : ""}`
        }
      >
        Watchlist
      </NavLink>  
    </nav>
  </header>
);

export default Header;
