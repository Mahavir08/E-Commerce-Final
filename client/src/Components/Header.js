import React from "react";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark p-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="/" style={{ color: "#ffc107" }}>
            E-Commerce
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link"
                  title="Add A Product"
                  aria-current="page"
                  href="/add"
                  style={{ color: "#ffc107" }}
                >
                  Add
                </a>
              </li>
              <li className="nav-item">
                <a
                  style={{ color: "#ffc107" }}
                  className="nav-link"
                  title="Update A Product"
                  aria-current="page"
                  href="/update"
                >
                  Update
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  title="Delete A Product"
                  aria-current="page"
                  href="/delete"
                  style={{ color: "#ffc107" }}
                >
                  Delete
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
