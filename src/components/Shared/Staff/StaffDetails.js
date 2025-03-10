import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Button } from "react-bootstrap";

const StaffDetails = () => {
  const staff = useLoaderData();
  const { empId, name, position, joiningDate, image, dept_id } = staff;
  const { official } = staff.contacts.emails;
  const { work } = staff.contacts.phones;
  return (
    <Card className="mb-5" style={{ width: "40rem" }}>
      <Card.Img className="w-50 mx-auto d-block" variant="top" src={image} />
      <Card.Body>
        <Card.Title className=" text-center">
          Employee details: <span className="text-danger">{name}</span>
        </Card.Title>
        <Card.Text></Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <div className="d-flex">
          <ListGroup.Item className="col-6">Employee ID: {empId}</ListGroup.Item>
          <ListGroup.Item className="col-6">Position: {position}</ListGroup.Item>
        </div>
        <div className="d-flex">
          <ListGroup.Item className="col-6">Email: {official}</ListGroup.Item>
          <ListGroup.Item className="col-6">Contact: {work}</ListGroup.Item>
        </div>
        <ListGroup.Item>Date of Join: {joiningDate}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        {/* <Card.Link to={`/department/${department_id}`}>Close</Card.Link> */}
        <Link to={`/department/${dept_id}`}>
          <Button variant="primary">Close</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default StaffDetails;
