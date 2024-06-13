import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
const Home = () => {
  const isLoggedIn = localStorage.getItem("login");
  return (
    <>
      <Navbar />
      <div className="container text-center" style={{ marginTop: "150px" }}>
        <h1 className="">Expense Track</h1>
        <button className="btn btn-danger btn-lg">
          {" "}
         { isLoggedIn && <Link
            style={{ textDecoration: "none", color: "white" }}
            to={"/expense"}
          >
            Get Started
          </Link>}{" "}
          { !isLoggedIn && <Link
            style={{ textDecoration: "none", color: "white" }}
            to={"/login"}
          >
            Get Started
          </Link>}
        </button>
      </div>
    </>
  );
};

export default Home;
