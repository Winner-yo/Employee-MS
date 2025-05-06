// Login.jsx
import React from "react";
import { useState } from "react";
import axios from "axios";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/auth/adminlogin", values)
      .then((result) => {
        if (result.data.loginStatus) {
          navigate("/dashboard");
        } else {
          setError(result.data.Error);
        }
      })
      .catch((err) => 
        console.log(err));
      }
  return (
    <div className=" loginForm d-flex justify-content-center align-items-center vh-100 loginPage ">
      <div className="p-5 w-25 border border-primary shadow-lg rounded-3 bg-white bg-opacity-75">
        <div className="text-danger">{error && error}</div>
        <h2 className="text-center text-primary mb-4">Welcome Back</h2>
        <form className="mt-3" onSubmit={handleSubmit}>
          <div className="form-floating mb-3">
            <input
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              type="email"
              className="form-control"
              id="email"
              placeholder="Email address"
              required
            />
            <label htmlFor="email">
              <i className="bi bi-envelope me-2"></i>Email Address
            </label>
          </div>

          <div className="form-floating mb-4">
            <input
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              required
            />
            <label htmlFor="password">
              <i className="bi bi-lock me-2"></i>Password
            </label>
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 rounded-pill py-2 mb-3"
          >
            Login
          </button>

          <div className="text-center mb-3">
            <a href="#" className="link-primary">
              Forgot password?
            </a>
          </div>

          {/* Terms & Conditions Checkbox */}
          <div className="form-check form-check-inline mb-4">
            <input
              className="form-check-input"
              type="checkbox"
              id="terms"
              required
            />
            <label className="form-check-label ms-2 mb-0" htmlFor="terms">
              I agree to{" "}
              <a href="#" className="link-primary">
                terms & conditions
              </a>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
