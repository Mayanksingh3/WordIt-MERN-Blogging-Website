import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/home">
          Blogger Hub
        </a>
        <div
          class="collapse navbar-collapse d-flex justify-content-between"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/home">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/help">
                Help
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>
          <button className="" btn btn-warning>
            + Add Posts
          </button>
        </div>
      </nav>
    </div>
  );
}
