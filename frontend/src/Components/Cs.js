import React, { useState, useEffect } from "react";

const Cs = () => {
  const [data, setData] = useState("asd");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://127.0.0.1:5000/prot", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((jsonData) => {
        console.log(jsonData);
        setData(jsonData["message"]);
        console.log(data);
      })
      .catch((error) => {
        localStorage.removeItem("accessToken");
        console.log("Error fetching data:", error);
      });
  };

  return <div>hello turf {data}</div>;
};

export default Cs;
