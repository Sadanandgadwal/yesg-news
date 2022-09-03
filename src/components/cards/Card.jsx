import React from "react";
import Button from "../button/button";
import "./articles.css";

const Card = ({ imgUrl, headings, description, url }) => {
  const clicHandler = (e) => {
    e.preventDefault();
    window.open(url);
  };

  return (
    <div className="col">
      <div className="card" style={{ height: "37rem" }}>
        <img
          className="card-img-top w-100 d-block fit-cover"
          style={{ height: "200px" }}
          src={imgUrl}
        />
        <div className="card-body p-4">
          <p className="text-primary card-text mb-0">Article</p>
          <h4 className="card-title">{headings}</h4>
          <p className="card-text" style={{ overflow: "hidden" }}>
            {description}
          </p>
          <div className="d-flex">
            <div>
              <Button handler={clicHandler} buttontxt={"Goto news"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
