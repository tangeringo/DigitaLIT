import React, { useState } from "react";
import { Link } from "react-router-dom";
import profileDefaultIcon from "../assets/ProfilePage/profileDefault.png";
import "../App.css";
import "bootstrap";


interface NavBarProps {
  brandName: string;
  imageSrcPath: string;
  navItems: string[];
  linkUrlPages: string[];
}


function NavBar({ brandName, imageSrcPath, navItems, linkUrlPages }: NavBarProps) {

  const [selectedIndex, setSelectedIndex] = useState(-1);
  const urlRouteAfterSlash = window.location.href.split("/")[3];

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark shadow navbar-default navbar-fixed-top" style={{position: "fixed", width: "100%", zIndex: 1}}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src={imageSrcPath}
            width="60"
            height="60"
            className="d-inline-block align-center"
            alt=""
          />
          <span className="fw-bolder fs-4 m-3 bg-dark">{brandName}</span>
        </Link>
        <button
          className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-md-1">
            {navItems.map((item, index) => (
              <li
                key={item}
                className="nav-item"
                onClick={() => setSelectedIndex(index)}
              >
                <Link className={selectedIndex === index ? "nav-link active fw-bold" : "nav-link"} to={`${linkUrlPages.at(index + 1)}`}>{item}</Link>
              </li>
            ))}
          </ul>
          {urlRouteAfterSlash === "profile"?
            <img
              src={profileDefaultIcon}
              width="60"
              height="60"
              className="d-inline-block align-center"
              alt=""
            />
            :null
          }
          {urlRouteAfterSlash === "my-books" || urlRouteAfterSlash === "library"?
              <form className="d-flex me-3">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit"> Search </button>
            </form>
            :null
          }
        </div>
      </div>
    </nav>
  );
}

export default NavBar;