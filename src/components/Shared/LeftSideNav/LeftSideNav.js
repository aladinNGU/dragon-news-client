import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./LeftSideNav.css";

const LeftSideNav = () => {
  const [department, setDepartment] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/department")
      .then((res) => res.json())
      .then((data) => setDepartment(data));
  }, []);

  return (
    <div className="dept-list">
      <h3>Departments</h3>
      <div>
        {department.map((dept) => (
          <p className="ms-3" key={dept.department_id} dept={dept}>
            <Link to={`/department/${dept.department_id}`}>
              {dept.department_name}
            </Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;