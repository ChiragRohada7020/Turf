import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Logout = ({ handleLogout }) => {
  const navigate = useNavigate();

  // const location = useLocation();
  // const { myState } = location.state || {};
  useEffect(() => {
    localStorage.removeItem("accessToken");
    // Navigate to the '/dashboard' route
    handleLogout();
    navigate("/");
  }, []);

  return <div>logout</div>;
};

export default Logout;
