import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import Axios from "axios";
import fotoo from "../img/boy.png";

const Heroku = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const URL = "https://heroesz-project.herokuapp.com/heroes/get";
    Axios.get(URL).then((res) => {
      const data = res.data.data;
      setData(data);
    });
  }, []);

  const showData = data.map((item, index) => {
    return (
      <tr key={index}>
        <td>{item.name}</td>
        <td>{item.born}</td>
        <td>{item.dead}</td>
        <td>{item.description}</td>
        <td>{item.establishment}</td>
        <td>
          <img src={item.images} style={{ width: "100%", height: "200px" }} />
        </td>
      </tr>
    );
  });

  return (
    <div>
      <h2 className="text-center mt-5 mb-5 p-5"> --- List Of Heroes --- </h2>

      <Container>
        <Table striped bordered hover className="mt-4 text-center">
          <thead>
            <tr>
              <th>Name</th>
              <th>Born</th>
              <th>Dead</th>
              <th>Description</th>
              <th>Establishment</th>
              <th>Images</th>
            </tr>
          </thead>
          <tbody>{showData}</tbody>
        </Table>

        <Col className="pt-5 mt-5 text-center">
          <img src={fotoo} alt="fotoo" style={{ width: "20rem" }} />
          <h3 className="text-center mt-3">Thankyou</h3>
        </Col>
      </Container>
    </div>
  );
};
export default Heroku;
