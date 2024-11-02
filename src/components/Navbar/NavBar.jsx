import React from "react";

const NavBar = () => {
  return (
    <header className="py-4">
      <div className="container mx-auto px-3 md:px-5">
        <nav>
          <div>
            <div className="navbar bg-base-100">
              <div className="navbar-start">
                <div className="dropdown">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost lg:hidden"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
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
                  </div>
                </div>
                <a className="btn btn-ghost text-xl">Book Vibe</a>
              </div>
              <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                  <li>
                    <a className="text-[#23BE0A]">Home</a>
                  </li>
                  <li>
                    <a href="">Listed Books</a>
                  </li>
                  <li>
                    <a>Pages to Read</a>
                  </li>
                </ul>
              </div>
              <div className="navbar-end flex gap-6">
                <button className="btn bg-[#23BE0A] text-white">Sign In</button>
                <button className="btn bg-[#59C6D2] text-white">Sign Up</button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
