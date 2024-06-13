import { NavLink } from "react-router-dom"

const AccessDenied =() =>{
    return <>
    <div className="container text-center" style={{ marginTop: "150px" }}>
        <h1 className="">Acccess Denied! Please Login</h1>
        <button className="btn btn-danger btn-lg">
          {" "}
          <NavLink
            style={{ textDecoration: "none", color: "white" }}
            to={"/"}
          >
            Back
          </NavLink>{" "}
        </button>
      </div>
    </>
}

export default AccessDenied;