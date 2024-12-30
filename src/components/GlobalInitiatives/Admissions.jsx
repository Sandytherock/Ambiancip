import React from "react";
import "./Admissions.css"; // Importing the CSS file

const Admissions = () => {
  return (
    <div className="admissionsContainer">
      <div className="admissionsContent">
        <h2>International Student Admissions</h2>
        <div className="admissionsLinks">
          <a href="#undergraduate-admissions">Undergraduate Admissions</a>
          <hr />
          <a href="#graduate-admissions">Graduate Admissions</a>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
