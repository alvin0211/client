import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";

const NavComponent = (props) => {
  let { currentUser, setCurrentUser } = props;
  const navigate = useNavigate();
  const handleLogout = () => {
    AuthService.logout();
    window.alert("Logout Successfully, now you are redirect to the homepage.");
    setCurrentUser(null);
    navigate("#");
  };
  return (
    <div>
      <nav>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                {!currentUser && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      Register
                    </Link>
                  </li>
                )}
                {!currentUser && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      Login
                    </Link>
                  </li>
                )}
                {currentUser && (
                  <li className="nav-item">
                    <Link onClick={handleLogout} className="nav-link" to="#">
                      Logout
                    </Link>
                  </li>
                )}
                {currentUser && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/profile">
                      Profile
                    </Link>
                  </li>
                )}
                {currentUser && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/course">
                      Course
                    </Link>
                  </li>
                )}
                {currentUser && currentUser.user.role === "instructor" && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/postCourse">
                      Post Course
                    </Link>
                  </li>
                )}
                {currentUser && currentUser.user.role === "student" && (
                  <li className="nav-item">
                    <Link className="nav-link" to="/enroll">
                      Enroll
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </nav>
    </div>
  );
};
export default NavComponent;
