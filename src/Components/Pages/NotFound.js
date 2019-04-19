import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../Navbar/navbar";

const NotFound = () => {
  return (
    <div>
      <Navbar />
      <div className="404" style={{ marginTop: "3.5rem" }}>
        <h1>
            <span>404</span>
          <br />
          Page Not Found
        </h1>
        <div className="bottomFix">
          Your Options
          <div className="flex">
            <Link to="/" className="btn btn-secondary">
              Home
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
