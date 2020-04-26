import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

const Article = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:5500/article").then((res) => {
      const data = res.data;
      setData(data);
      console.log(data);
    });
  }, []);

  const showData = data.map((item) => (
    <div className="col-4">
      <div className="card mt-4">
        <div className="card-body text-center">
          <img
            src={item.images[0]}
            style={{ width: "100%", height: "250px" }}
          />
          <h5 className="card-title">{item.destinationName}</h5>
          <p className="card-text">{item.address}</p>
          <p className="card-text">{item.city}</p>
          <p className="card-text">{item.province}</p>
          <Link to={`/article/${item.id}`} className="btn btn-primary">
            Read More...
          </Link>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="container">
      <div className="row">{showData}</div>
    </div>
  );
};

export default Article;
