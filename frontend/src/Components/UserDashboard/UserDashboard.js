import React, { useState, useEffect } from "react";
import axios from "axios";

const UserDashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const storedAccessToken = localStorage.getItem("accessToken");
    if (storedAccessToken) {
      setIsLoggedIn(true);
      setAccessToken(storedAccessToken);
      fetchTransactions(storedAccessToken);
      fetchBookings(storedAccessToken);
    }
  }, []);

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email: "user@example.com",
        password: "password",
      });
      const { access_token } = response.data;
      setIsLoggedIn(true);
      setAccessToken(access_token);
      localStorage.setItem("accessToken", access_token);
      fetchTransactions(access_token);
      fetchBookings(access_token);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTransactions = async (token) => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/transactions",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setTransactions(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchBookings = async (token) => {
    try {
      const response = await axios.get("http://localhost:5000/api/bookings", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setBookings(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setAccessToken("");
    localStorage.removeItem("accessToken");
    setTransactions([]);
    setBookings([]);
  };

  return (
    <div>
      {isLoggedIn ? (
        <>
          <h2>Transactions</h2>
          {transactions.map((transaction) => (
            <div key={transaction._id}>
              <p>Transaction ID: {transaction._id}</p>
              {/* Display other transaction details */}
            </div>
          ))}

          <h2>Bookings</h2>
          {bookings.map((booking) => (
            <div key={booking._id}>
              <p>Booking ID: {booking._id}</p>
              {/* Display other booking details */}
            </div>
          ))}

          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
    </div>
  );
};

export default UserDashboard;
