import React from "react";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <span>
            <div><p>1</p></div>
        </span>
        <a class="navbar-brand" href="#">
          User Data CRUD App
        </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/">
              Main Menu <span class="sr-only"></span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
