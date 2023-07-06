import React from "react";
import Turf from "./Turf";
import { Outlet, Link } from "react-router-dom";

const Initial = () => {
  return (
    <div>
      Here will Be the city that you have to choose
      <ul>
        <Link to="/city/Mumbai">Mumbai</Link>
        <Link to="/city/Nagpur">Nagpur</Link>
      </ul>
      {localStorage.getItem("accessToken") ? <Turf /> : ""}
    </div>
  );
};

export default Initial;
