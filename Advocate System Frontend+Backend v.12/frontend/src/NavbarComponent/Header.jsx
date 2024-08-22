import { Link } from "react-router-dom";
import RoleNav from "./RoleNav";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="navbar bg-primary-subtle navbar-expand-lg sticky-top animate__animated animate__slideInDown"  data-bs-theme="dark" >
        <div className="container-fluid">
          <img
            // src={logo}
            src={"https://cdn-icons-png.flaticon.com/512/4784/4784614.png"}
            width="70"
            height="70"
            className="d-inline-block align-top"
            alt=""
          />
          <Link to="/" className="navbar-brand">
        
              <b className="">&nbsp; Find My Lawyer</b>
            
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-link active"
                  aria-current="page"
                >
                  <b className="">About Us</b>
                </Link>
              </li>

              
            </ul>

            <RoleNav />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
