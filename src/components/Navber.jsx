import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navber = () => {
  const { user, handleSignOut } = useContext(AuthContext);

  return (
    <div className="container mx-auto px-3 md:px-5">
      <div>
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <Link to={"/"} className="btn btn-ghost text-xl">
              LOST & FOUND
            </Link>
          </div>

          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link to={"/"}>Home</Link>
              </li>

              <li>
                <Link to={"/lostFound"}>Lost & Found Items </Link>
              </li>
            </ul>
          </div>

          {user?.email ? (
            <div className="flex-none gap-2">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img alt="..." src={user?.photoURL} />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <div className="mb-4 text-white bg-gray-600 rounded-md">
                    <li>
                      <a className="justify-between">{user?.email}</a>
                    </li>
                    <li>
                      <a>{user?.displayName}</a>
                    </li>
                  </div>

                  <li>
                    <Link to="/addItems">Add Lost & Found</Link>
                  </li>
                  <li>
                    <Link to="/allRecovered">All Recovered</Link>
                  </li>
                  <li>
                    <Link className="btn mt-3" onClick={handleSignOut}>
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div>
              <Link to={"/logIn"}>Login</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
