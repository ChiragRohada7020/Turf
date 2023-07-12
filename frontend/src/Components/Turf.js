import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

const Turf = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/turf/${id}`);
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
      {data.map((item) => (
        <>
          <br></br>
          {item.Name}
          {item.Location}
          <Link to={`/book/${item.id}`}>
            <button>Book</button>
          </Link>

          <br></br>
        </>
      ))}
    </div>
  );
};

export default Turf;
