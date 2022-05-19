import React from "react";
import { Link, Route } from "react-router-dom";
import "../styles/homepage.css"

function Homepage() {
  return (
    <>
      <h2>Welcome to the User Data CRUD App!</h2>
      <br />
      <br/>
      <div className="container">
      <div class="d-flex justify-content-center">
        <div class="btn-group">
        <button className="btn btn-info">
          <Link
            to="/add_data"
            style={{ textDecoration: "none", color: "white" }}
          >
            Enter new user data
          </Link>
        </button>
        <button className="btn btn-info">
          <Link
            to="/view_data"
            style={{ textDecoration: "none", color: "white" }}
          >
            View user data
          </Link>
        </button>
        <button className="btn btn-info">
          <Link
            to="/update_data"
            style={{ textDecoration: "none", color: "white" }}
          >
            Update user data
          </Link>
        </button>
        <button className="btn btn-info">
          <Link
            to="/delete_data"
            style={{ textDecoration: "none", color: "white" }}
          >
            Delete user data
          </Link>
        </button>
        </div>
        </div>
        </div>
    </>
  );
}

export default Homepage;
