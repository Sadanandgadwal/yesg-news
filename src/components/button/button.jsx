import React from "react";

const Button = ({ buttontxt, handler }) => {
  return (
    <>
      <button
        className="btn btn-primary"
        type="button"
        style={{ padding: "7px 12px" }}
        onClick={handler}
      >
        {buttontxt}
      </button>
    </>
  );
};

export default Button;
