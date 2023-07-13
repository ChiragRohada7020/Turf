import Ma from "./Components/Ma";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Login from "./Components/UserDashboard/LoginUser";
import RegisterUser from "./Components/UserDashboard/RegisterUser";

import Initial from "./Components/Home/Initial";
import SelectCity from "./Components/Home/SelectCity";

import City from "./Components/City";
import Turf from "./Components/Turf";
import Cs from "./Components/Cs";

import Logout from "./Components/Logout";
import UserDashboard from "./Components/UserDashboard/UserDashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("accessToken") ? true : false
  );

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar isLoggedIn={isLoggedIn} />}>
            <Route index element={<Initial />} />
            <Route path="city" element={<SelectCity />} />
            <Route path="login" element={<Login handleLogin={handleLogin} />} />
            <Route
              path="logout"
              element={<Logout handleLogout={handleLogout} />}
            />

            <Route path="/city/:id" element={<City />} />
            <Route path="/turf/:id" element={<Turf />} />
            <Route path="/data" element={<Ma />} />
            <Route path="/userdashboard" element={<UserDashboard />} />
            <Route
              path="/book/:id"
              element={
                isLoggedIn ? <Cs /> : <Login handleLogin={handleLogin} />
              }
            />
            <Route path="/Register" element={<RegisterUser />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
