import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Dashboard() {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <nav
        className="bg-dark text-white vh-100 p-3 position-fixed top-0 start-0 m-0 rounded"
        style={{ width: "240px" }}
      >
        <div className="mb-4">
          <Link
            to="/dashboard"
            className="text-white text-decoration-none fs-4"
          >
            <i className="bi bi-house-door-fill me-2"></i>
            CMC
          </Link>
        </div>
        <ul className="nav nav-pills flex-column">
          <li className="nav-item mb-2">
            <Link to="/dashboard" className="nav-link text-white">
              <i className="bi bi-speedometer2 me-2"></i>
              Dashboard
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/manage-employees" className="nav-link text-white">
              <i className="bi bi-people me-2"></i>
              Manage Employees
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/category" className="nav-link text-white">
              <i className="bi bi-tags-fill me-2"></i>
              Category
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/manage-users" className="nav-link text-white">
              <i className="bi bi-person-lines-fill me-2"></i>
              Manage Users
            </Link>
          </li>
          <li className="nav-item mb-2">
            <Link to="/profile" className="nav-link text-white">
              <i className="bi bi-person-circle me-2"></i>
              Profile
            </Link>
          </li>
          <li className="nav-item mb-2 mt-auto">
            <Link to="/adminlogin" className="nav-link text-white">
              <i className="bi bi-box-arrow-right me-2"></i>
              Logout
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main content placeholder */}
      <div className="flex-grow-1" style={{ marginLeft: "300px" }}>
        {/* Your main content goes here */}

        <div className="col p-0 m-0">
          <div className="p-2 d-flex justify-content-center shadow">
            <h4>Employee Managment System</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;