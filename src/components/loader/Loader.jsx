import React from "react";

const Loader = ({ loadingtxt }) => {
  return (
    <div className="d-flex align-items-center">
      <strong>{loadingtxt}</strong>
      <div
        className="spinner-border ms-auto"
        role="status"
        aria-hidden="true"
      ></div>
    </div>
  );
};

export default Loader;
