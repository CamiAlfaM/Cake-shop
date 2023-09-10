import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-danger">
        <div className="container-fluid">
            <div className="happy">
          <a className="navbar-brand" href="#">
            <b>
              Happy Cake{" "}
              <img className="torta1"
                src="https://images.vexels.com/media/users/3/192705/isolated/preview/a76515b4b3a2ec56f2586b2e384942fb-pieza-de-pastel-de-trazo-dibujado-a-mano.png"
                alt="torta1"
              ></img>
            </b>
          </a>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
             <Link to="/">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
                </Link>
              </li>
              <li class="nav-item">
             <Link to="/contacto">
                <a className="nav-link" href="#">
                  Contacto
                </a>
                </Link> 
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
