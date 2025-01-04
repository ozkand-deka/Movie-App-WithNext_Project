"use client";
import { clearUser } from "@/store/auth-store/page";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state) => state.auth.user);
  const router =useRouter()
  console.log("user", user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(clearUser());
    router.push("/login")
  };

  return (
    <div className="justify-content-center" style={{ height: "5rem" }}>
      <nav
        className="navbar text-center"
        style={{ backgroundImage: "linear-gradient(45deg, blue, red)" }}
      >
        <div className="container-fluid">
         {user &&
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
         
         } 
          <nav className="navbar navbar-expand-lg navbar-dark">
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
                <Link className="nav-item nav-link" href="/">
                  Movies
                </Link>
                <Link className="nav-item nav-link" href="/about">
                  About
                </Link>
                <Link className="nav-item nav-link" href="/communication">
                  Communication
                </Link>
                <Link className="nav-item nav-link" href="/pricing">
                  Pricing
                </Link>
                <Link className="nav-item nav-link" href="/contact">
                  Contact
                </Link>
              </div>
            </div>
          </nav>

          <div className="d-flex m-1" role="search">
            {user && <button onClick={handleLogout} className="btn btn-primary m-2  ">Logout</button>}
            {!user && (
              <Link href="/login">
                <button className="btn btn-primary m-2  ">Login</button>
              </Link>
            )}

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
