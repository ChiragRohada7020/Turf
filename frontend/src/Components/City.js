import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Turf from "./Turf";
import { Outlet, Link } from "react-router-dom";

const City = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/city/${id}`);
      const json = await response.json();
      console.log(json);
      setData(json);
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      City :-- {id}
      {data.map((item) => (
        <>
          <br></br>
          <Link to={`/turf/${item.id}`}>{item.Name}</Link>
          <br></br>
        </>
      ))}
    </div>
  );
};

export default City;
