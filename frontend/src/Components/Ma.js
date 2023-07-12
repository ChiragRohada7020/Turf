import React from "react";
import Login from "./UserDashboard/LoginUser";
import Cs from "./Cs";
const Ma = () => {
  return (
    <div>
      this is future {localStorage.getItem("accessToken") ? <Cs /> : <Login />}
    </div>
  );
};

export default Ma;
