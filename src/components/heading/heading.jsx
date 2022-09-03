import React from "react";
import Loader from "../loader/Loader";

const Heading = ({ title, loading }) => {
  if (loading) {
    return <Loader loadingtxt={"Fetching News..."} />;
  }

  return (
    <>
      <div className="row mb-5">
        <div className="col-md-8 col-xl-6 text-center mx-auto">
          <h2 className="ms-xl-0 ps-xl-0">{title}</h2>
        </div>
      </div>
    </>
  );
};

export default Heading;
