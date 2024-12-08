import React from "react";
import "./PageTop.css";

const PageTop = ({PageName}) => {
  return (
    <div className="PageTop-container">
      <div className="pageTopShadow">
        <h1>{PageName}</h1>
      </div>
    </div>
  );
};

export default PageTop;
