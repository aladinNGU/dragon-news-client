import React from "react";
import { useLoaderData } from "react-router-dom";
import Staff from "../../../Shared/Staff/Staff";
import { Table } from "react-bootstrap";
import "./Category.css";

const Category = () => {
  const {staff, department_name, camp_name } = useLoaderData(); // Destructure the response

  return (
    <div>
      {/* <h3>The <span className="text-danger fw-bold"> {department_name} {camp_name} </span> department has: {staff.length} staff</h3> */}
      {department_name ? (
        <span>
          <h4>
            The <span className="text-danger fw-bold"> {department_name} </span>
            department has: {staff.length} staff.
          </h4>
        </span>
      ) : (
        <span>
          <h4>
            The <span className="text-danger fw-bold">{camp_name} </span> has:
            {staff.length} staff.
          </h4>
        </span>
      )}
      <Table stripped bordered hover variant="light" size="sm">
        <tbody>
          <tr>
            <td className="col-1 bold-header text-center">Empl. ID </td>
            <td className="col-3 bold-header">Name</td>
            <td className="col-3 bold-header">Position</td>
            <td className="col-1 bold-header">Details</td>
          </tr>
        </tbody>
      </Table>
      {staff.map((staff) => (
        <Staff key={staff.empId} staff={staff}></Staff>
      ))}
    </div>
  );
};

export default Category;
