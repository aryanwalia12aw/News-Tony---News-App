import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";


 
const Navbar = (props)=> {


  
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand text-light" to="home">
              <strong>News Tony</strong>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active text-light"
                    aria-current="page"
                    to="home"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="About">
                    About
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle text-light"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Categories
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="Business">
                        Business
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="Entertainment">
                        Entertainment
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="health">
                        health
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="science">
                        science
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="sports">
                        sports
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="technology">
                        technology
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="general">
                        general
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
              <div onClick = {props.handleOnClick} className="form-check form-switch text-light mx-2">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" forhtml="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                
                <button className="btn btn-danger " type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }


export default Navbar;
