import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Logout = () => {
  // const location = useLocation();
  // const { myState } = location.state || {};
  useEffect(() => {
    localStorage.removeItem("accessToken");
  }, []);

  return <div>logout</div>;
};

export default Logout;
