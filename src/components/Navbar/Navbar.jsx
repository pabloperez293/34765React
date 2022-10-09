/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import { Link } from "react-router-dom"

function NavBar() {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-grey">
  <div className="container">
  <Link to="/">
    {/* <img src="./Flow.png" className="img logoFlow"></img> */}
  </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <Link className="nav-link " href="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">Prueba de reproductor </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#"> Albums</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    
  );
}
// export NavBar -> Importarlo desde App -> renderizarlo
export default NavBar;