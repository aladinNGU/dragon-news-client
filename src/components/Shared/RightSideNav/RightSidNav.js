import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import "./LeftSideNav.css";

const RightSidNav = () => {
  const [camp, setCamp] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/camp")
      .then((res) => res.json())
      .then((data) => setCamp(data));
  }, []);

  return (
    <div className="dept-list">
      <h3>Camp</h3>
      <div>
        {camp.map((cmp) => (
          <p className="ms-3" key={cmp.camp_id} cmp={cmp}>
            <Link to={`/camp/${cmp.camp_id}`}>{cmp.camp_name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default RightSidNav;
