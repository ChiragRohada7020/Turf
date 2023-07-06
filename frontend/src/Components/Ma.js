import React from "react";
import Login from "./login";
import Cs from "./Cs";
const Ma = () => {
  return (
    <div>
      this is future {localStorage.getItem("accessToken") ? <Cs /> : <Login />}
    </div>
  );
};

export default Ma;
