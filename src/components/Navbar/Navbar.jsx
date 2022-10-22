import React from "react";
import "./navar.css"
// import CartWidget from "./CartWidget";
import { Link } from "react-router-dom"

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-grey">
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <Link to="/">
              Incio
            </Link>
            <Link className="nav-item" to="/song">
              Temas
            </Link>
            <Link className="nav-item" to="/category/pop">
               Pop 
            </Link>
            <Link className="nav-item"  to="/category/Rap">
            Rap
            </Link>
          </ul>
        </div>
      </div>
    </nav>    
  );
}
// export NavBar -> Importarlo desde App -> renderizarlo
export default NavBar;