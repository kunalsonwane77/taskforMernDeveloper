import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TransactionsTable from "./components/TransactionsTable";
import Statistics from "./components/Statistics";
import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [selectedMonth, setSelectedMonth] = useState(3); // Default to March

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  return (
    <Container>
      <h1 className="my-4">Transaction Dashboard</h1>
      <Row>
        <Col>
          <label>Select Month:</label>
          <select
            className="form-control"
            value={selectedMonth}
            onChange={handleMonthChange}
          >
            {[
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
            ].map((month, index) => (
              <option key={index} value={index + 1}>
                {month}
              </option>
            ))}
          </select>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Statistics month={selectedMonth} />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <TransactionsTable month={selectedMonth} />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={6}>
          <BarChart month={selectedMonth} />
        </Col>
        <Col md={6}>
          <PieChart month={selectedMonth} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;