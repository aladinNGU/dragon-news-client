import React from "react";
import Staff from "../../../Shared/Staff/Staff";
import { Table } from "react-bootstrap";
import "./Home.css";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const sortedStaff = useLoaderData();

  return (
    <div>
      <h3>Total Employees in Cox's Emergency: {sortedStaff.length}</h3>
      <Table stripped bordered hover variant="light" size="sm">
        <tbody>
          <tr>
            <td className="col-1 bold-header text-center">Staff ID </td>
            <td className="col-3 bold-header">Name</td>
            <td className="col-3 bold-header">Position</td>
            <td className="col-1 bold-header">Details</td>
          </tr>
        </tbody>
      </Table>
      {sortedStaff.map((staff) => (
        <Staff key={staff.empId} staff={staff}></Staff>
      ))}
    </div>
  );
};

export default Home;
