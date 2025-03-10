import React from "react";
import "./Staff.css";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

const Staff = ({ staff }) => {
  const { empId, name, position } = staff;
  return (
    <Table bordered hover variant="light" size="sm">
      <tbody>
        <tr>
          <td className="col-1 text-center">{empId}</td>
          <td className="col-3">{name}</td>
          <td className="col-3">{position}</td>
          <td className="col-1">
            <Link to={`/staff/${empId}`}>Details</Link>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Staff;
