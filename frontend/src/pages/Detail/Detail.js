import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    const URL = "http://localhost:5500/article";
    axios.get(`${URL}/${id}`).then((res) => {
      const data = res.data;
      setData(data);
      console.log(data);
    });
  }, []);

  const showData = (
    <div className="container m-5">
      <div className="row">
        <div className="col">
          <div className="card mt-4">
            <div className="card-body text-center">
              <h4 className="card-title mb-4">{data.destinationName}</h4>
              <hr />
              <h5 className="mb-3">Description</h5>
              <p className="card-text text-justify">{data.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <div className="container">
      <div className="row">{showData}</div>
    </div>
  );
};
export default Detail;
