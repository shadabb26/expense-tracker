import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function LoginForm() {
  const uName = "username";
  const uPass = "password";

  const [username, SetUsername] = useState("");
  const [password, SetPassword] = useState("");
  const navigate = useNavigate();

  const handleSumbit = (event) => {
    event.preventDefault();
    if (username === uName && password === uPass) {
      localStorage.setItem("login", true);
      toast("Login Sucessfully!", {
        theme: "light",
        type: "success",
        position: "top-center",
        autoClose: 1000,
      
      });
      navigate("/expense", { replace: true });
    } else {
      toast("Bad Credentials !", {
        theme: "light",
        type: "error",
        position: "top-center",
        autoClose: 2000,
      
      });
    }
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center mt-2">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">Login</div>
              <div className="card-body">
                <form onSubmit={()=>handleSumbit(event)}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                      placeholder="username"
                      onChange={(e) => SetUsername(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      onChange={(e) => SetPassword(e.target.value)}
                    />
                  </div>
                  <button className="btn btn-primary">Login</button>
                </form>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
