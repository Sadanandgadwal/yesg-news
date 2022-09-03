import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ title, brandUrl, links }) => {
  return (
    <>
      <nav
        className="navbar navbar-dark navbar-expand-md bg-dark py-3"
        style={{ position: "fixed", width: "100vw", zIndex: "1000" }}
      >
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to={"/"}>
            <span className="bs-icon-sm bs-icon-rounded bs-icon-primary d-flex justify-content-center align-items-center me-2 bs-icon">
              <img style={{ height: "2rem" }} src={brandUrl} />
            </span>
            <span>{title}</span>
          </Link>
          <button
            data-bs-toggle="collapse"
            className="navbar-toggler"
            data-bs-target="#navcol-5"
          >
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navcol-5">
            <ul className="navbar-nav ms-auto">
              {links.map((link, index) => (
                <li key={index} className="nav-item">
                  <Link className="nav-link" to={link.path}>
                    {link.link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
