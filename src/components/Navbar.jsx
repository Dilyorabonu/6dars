//icons
import { IoMdSunny, IoMdMoon } from "react-icons/io";
import { FaCartShopping, FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { useEffect, useState } from "react";

function themeFromLocalStorage() {
  return localStorage.getItem("theme") || "winter";
}

import { auth } from "../firebase/firebaseConfig";
import { signOut } from "firebase/auth";
import { useGlobalContext } from "../hooks/useGlobalContext";

function Navbar() {
  const { total, user } = useGlobalContext();
  const [theme, setTheme] = useState(themeFromLocalStorage());
  const [isOpen, setIsOpen] = useState(false);

  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        //
      });
  };

  const handleTheme = () => {
    const newTheme = theme == "winter" ? "dracula" : "winter";
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="bg-base-300 mb-10">
      <div className="navbar site-container">
        <div className="navbar-start">
          <Link className="btn btn-secondary font-bold text-2xl" to="/">
            MyStore
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end flex gap-4 lg:gap-10 items-center">
          <div className="dropdown dropdown-end lg:hidden">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBars className="w-7 h-7" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLinks />
            </ul>
          </div>
          <Link to="/cart">
            <div className="indicator btn btn-ghost">
              <span className="indicator-item badge badge-md badge-secondary">
                {total}
              </span>
              <FaCartShopping className="w-7 h-7" />
            </div>
          </Link>
          <label className="btn btn-ghost swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input
              onClick={handleTheme}
              type="checkbox"
              checked={theme == "dracula"}
              readOnly
            />
            {/* sun icon */}
            <IoMdSunny className="swap-on fill-current w-7 h-7" />
            {/* moon icon */}
            <IoMdMoon className="swap-off fill-current w-7 h-7" />
          </label>
          <div className="flex items-center gap-4">
            <p className="hidden lg:block">{user.displayName}</p>
            <div className="avatar">
              <div className="w-12 rounded-full ring ring-secondary ring-offset-base-100 ring-offset-2">
                <img src={user.photoURL} alt="User" />
              </div>
            </div>
            <button onClick={logout} className="btn btn-secondary">
              Log out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
