import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Login = () => {
  const [accessToken, setAccessToken] = useState("");
  // const location = useLocation();
  // const { myState } = location.state || {};

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    // console.log(myState);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      // Make the login request and retrieve the access token
      const response = await fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      const { access_token } = data;

      // Store the access token in localStorage
      localStorage.setItem("accessToken", access_token);

      // Set the access token in component state
      setAccessToken(access_token);

      // console.log(myState);
    } catch (error) {
      console.log("Error logging in:", error);
    }
  };

  return (
    <div>
      <div>
        <h1>Login</h1>
        <div>
          <h1>My Form</h1>
          <form>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </form>
        </div>
        <button onClick={handleSubmit}>Log in</button>
        {accessToken && <p>Access Token: {accessToken}</p>}
      </div>
    </div>
  );
};

export default Login;
