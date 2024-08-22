import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";  // Import Bootstrap CSS

const UserLoginForm = () => {
  let navigate = useNavigate();

  const [loginRequest, setLoginRequest] = useState({
    emailId: "",
    password: "",
    role: "",
  });

  const handleUserInput = (e) => {
    setLoginRequest({ ...loginRequest, [e.target.name]: e.target.value });
  };

  const loginAction = (e) => {
    e.preventDefault();

    fetch("http://localhost:9090/api/user/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginRequest),
    })
      .then((result) => {
        if (!result.ok) {
          throw new Error("Login failed");
        }
        return result.json();
      })
      .then((res) => {
        console.log(res);

        if (res.role === "admin") {
          sessionStorage.setItem("active-admin", JSON.stringify(res));
        } else if (res.role === "user") {
          sessionStorage.setItem("active-user", JSON.stringify(res));
        } else if (res.role === "advocate") {
          sessionStorage.setItem("active-advocate", JSON.stringify(res));
        } 

        toast.success("Logged in successfully!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        setTimeout(() => {
          navigate("/home");
          window.location.reload(true);
        }, 1000);
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("Login failed! Please check your credentials.", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <div>
      <div className="mt-2 d-flex align-items-center justify-content-center">
        <div
          className="card form-card border-color custom-bg"
          style={{ width: "25rem" }}
        >
          <div className="card-header text-center" style={{ backgroundColor: "#3282b8" }}>
            <h4 className="card-title text-white">User Login</h4>
          </div>
          <div className="card-body">
            <form>
              <div className="mb-3">
                <label htmlFor="role" className="form-label">
                  <b>User Role</b>
                </label>
                <select
                  onChange={handleUserInput}
                  className="form-control"
                  name="role"
                  value={loginRequest.role}
                >
                  <option value="0">Select Role</option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                  <option value="advocate">Advocate</option>
                </select>
              </div>

              <div className="mb-3">
                <label htmlFor="emailId" className="form-label">
                  <b>Email Id</b>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="emailId"
                  name="emailId"
                  onChange={handleUserInput}
                  value={loginRequest.emailId}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  <b>Password</b>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  onChange={handleUserInput}
                  value={loginRequest.password}
                  autoComplete="on"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn bg-primary text-white"
                onClick={loginAction}
              >
                Login
              </button>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLoginForm;
