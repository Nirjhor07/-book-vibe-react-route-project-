import React from "react";
import { Link, NavLink } from "react-router";

const Nav = () => {
  const Links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `font-bold mr-2 ${isActive ? "border border-green-500 text-green-300" : ""}`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/listedbooks"
          className={({ isActive }) =>
            `font-bold mr-2 ${isActive ? "border border-green-500 text-green-300" : ""}`
          }
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/pagesToRead"
          className={({ isActive }) =>
            `font-bold mr-2 ${isActive ? "border border-green-500 text-green-300" : ""}`
          }
        >
          Pages to Read
        </NavLink>
      </li>
      {/* <li>
        <NavLink
          to="/signup"
          className={({ isActive }) =>
            `hidden sm:block font-bold mr-2  ${isActive ? "border border-green-500 text-green-300" : ""}`
          }
        >
          Sign Up
        </NavLink>
      </li> */}
    </>
  );
  return (
    <nav className="bg-base-100 shadow-sm">
      <div className="navbar  container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {Links}
              <Link to="/signup">
                <button className="btn btn-primary text-base-200 mt-4 ">
                  Sign Up
                </button>
              </Link>
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl font-extrabold ">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{Links}</ul>
        </div>
        <div className="navbar-end gap-4 ">
          <button className="btn btn-success text-base-200 ">Sign In</button>
          <button className="btn btn-primary text-base-200 hidden md:block">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
