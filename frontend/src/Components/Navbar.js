import React, { createContext, useState, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  const [myState, setMyState] = useState("sadasd");

  return (
    <div>
      <ul>
        <Link to="/">Home</Link>

        {localStorage.getItem("accessToken") ? (
          <Link to="/logout" state={"asd"}>
            Logout
          </Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </ul>

      <Outlet />
    </div>
  );
};

export default Navbar;
