import React from "react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div>
      <h3>The Terms and Conditions Page</h3>
      <p>
        Go back to: <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default TermsAndConditions;
