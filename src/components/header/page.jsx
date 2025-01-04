import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="justify-content-center" style={{ height: "5rem" }}>
      <nav
        className="navbar text-center"
        style={{ backgroundImage: "linear-gradient(45deg, blue, red)" }}
      >
        <div className="container-fluid">
          <Link
            style={{
              textDecoration: "none",
              fontSize: "3rem",
              color: "yellow",
            }}
            href="/"
          >
            Next Movie App
          </Link>
          <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-item nav-link active" href="/">
                  Home 
                </Link>
                <Link className="nav-item nav-link" href="/">
                  Features
                </Link>
                <Link className="nav-item nav-link" href="/">
                  Pricing
                </Link>
                <Link className="nav-item nav-link disabled" href="/">
                  Disabled
                </Link>
              </div>
            </div>
          </nav>

          <div className="d-flex m-1" role="search">
            <button className="btn btn-primary m-2  ">Logout</button>

          <Link href="/login">
          <button className="btn btn-primary m-2  ">Login</button>
          </Link>  
          <Link href="/register">
            <button className="btn btn-primary m-2  ">Register</button>
            </Link>  
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
