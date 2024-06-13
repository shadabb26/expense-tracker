import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Navbar = () => {

  const isLoggedIn = localStorage.getItem("login");
  const navigate = useNavigate();
  function handleLogout(){
    localStorage.removeItem("login")
    navigate("/",{replace:true})

  }
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          ExpenseTrack
        </NavLink>
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
              <NavLink className="nav-link active" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
          </ul>
          {!isLoggedIn && <NavLink className="nav-link active" aria-current="page" to="/login">
            <button className="btn btn-primary">Login</button>
          </NavLink>}
          {isLoggedIn && <NavLink className="nav-link active" aria-current="page" to="/login">
            <button className="btn btn-primary" onClick={handleLogout}>Logout</button>
          </NavLink>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
