import React, { useContext, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {
  const location = useLocation();
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  // Dynamic titles based on the route
  useEffect(() => {
    const Titles = {
      "/": "ScreenVault | Home",
      "/all-movies": "ScreenVault | All Movies",
      "/add-movie": "ScreenVault | Add Movie",
      "/favorites": "ScreenVault | My Favorites",
      "/auth/login": "ScreenVault | Login",
      "/auth/register": "ScreenVault | Register",
      "/extras": "ScreenVault | Extras",
    };

    document.title = Titles[location.pathname] || "ScreenVault | Explore Movies";
  }, [location.pathname]);

  const handleLogout = () => {
    logOut();
    toast.success("Successfully logged out!");
    navigate("/");
  };

  return (
    <nav className="navbar bg-teal-500 text-white max-w-screen-2xl mx-auto shadow-md">
      <Toaster />

      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <button
            tabIndex="0"
            className="btn btn-ghost lg:hidden"
            aria-label="Open navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex="0"
            className="menu menu-sm dropdown-content mt-3 z-[1] w-52 rounded-box bg-white p-2 shadow text-teal-500"
          >
            <li>
              <NavLink to="/" className="hover:text-teal-600">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/all-movies" className="hover:text-teal-600">
                All Movies
              </NavLink>
            </li>
            <li>
              <NavLink to="/extras" className="hover:text-teal-600">
                Extras
              </NavLink>
            </li>
            {user && (
              <>
                <li>
                  <NavLink to="/add-movie" className="hover:text-teal-600">
                    Add Movie
                  </NavLink>
                </li>
                <li>
                  <NavLink to={`/favorites/${user.email}`} className="hover:text-teal-600">
                    My Favorites
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <NavLink
          to="/"
          className="btn btn-ghost normal-case text-2xl font-bold text-white"
        >
          ScreenVault
        </NavLink>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-400 font-bold"
                  : "text-white hover:text-orange-600"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/all-movies"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-400 font-bold"
                  : "text-white hover:text-orange-600"
              }
            >
              All Movies
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/extras"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-400 font-bold"
                  : "text-white hover:text-orange-600"
              }
            >
              Extras
            </NavLink>
          </li>
          {user && (
            <>
              <li>
                <NavLink
                  to="/add-movie"
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-400 font-bold"
                      : "text-white hover:text-orange-600"
                  }
                >
                  Add Movie
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/favorites/${user.email}`}
                  className={({ isActive }) =>
                    isActive
                      ? "text-orange-400 font-bold"
                      : "text-white hover:text-orange-600"
                  }
                >
                  My Favorites
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end flex items-center space-x-4">
        {user ? (
          <>
            <div className="relative group">
              <img
                className="w-10 h-10 rounded-full border-2 border-white cursor-pointer"
                src={user.photoURL || "/user.png"}
                alt="User Avatar"
                title={user.displayName || "User"}
              />
              <div className="absolute left-0 bottom-[-40px] w-max bg-white text-teal-500 text-sm py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {user.displayName || "Guest"}
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="btn btn-sm bg-white text-teal-500 rounded-full hover:bg-teal-600 hover:text-white"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <NavLink
              to="/auth/login"
              className="btn btn-sm bg-white text-teal-500 rounded-full hover:bg-teal-600 hover:text-white"
            >
              Login
            </NavLink>
            <NavLink
              to="/auth/register"
              className="btn btn-sm bg-white text-teal-500 rounded-full hover:bg-teal-600 hover:text-white"
            >
              Register
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
