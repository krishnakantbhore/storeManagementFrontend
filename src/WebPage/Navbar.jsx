import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "./Auth";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [inopen, setInopen] = useState(false);
  const [repopen, setRepopen] = useState(false);

  const toggleDropdown = () => {
    setOpen((prev) => !prev);
  };
  const toggleDropdownRep = () => {
    setInopen((prev) => !prev);
  };
  const toggleDropdownReport = () => {
    setRepopen((prev) => !prev);
  };

  const { setIsLoggedIn } = useAuth();

  const navigate = useNavigate();
  function handleclick() {
    setIsLoggedIn(false);
    // localStorage.setItem("isLogIn", "false");
    navigate("/login");
  }
  return (
    <>
      {/* <div className="loader"></div> */}
      <div id="app">
        <div className="main-wrapper main-wrapper-1 ">
          <div className="navbar-bg"></div>
          <nav className="navbar row navbar-expand-lg main-navbar sticky P-2">
            <div className="  form-inline mr-auto ">
              <ul className="navbar-nav mr-3 ">
                <li>
                  <Link
                    href="#"
                    data-toggle="sidebar"
                    className="nav-link nav-link-lg 
									collapse-btn"
                  >
                    {" "}
                    <i className="fa-solid fa-bars text-dark"></i>
                  </Link>
                </li>
                <li>
                  <a href="#" className="nav-link nav-link-lg fullscreen-btn ">
                    <i className="fa-solid fa-expand text-dark"></i>
                  </a>
                </li>

                <li></li>
                <li className="text-center ml-5 mt-2  ">
                  <legend
                    style={{ color: "  rgb(161, 165, 197)" }}
                    className="text-center text-shadow   rounded "
                  >
                    JIJAMATA COLLEGE OF SCIENCE AND ARTS
                  </legend>
                </li>
              </ul>

              <div className="ml-auto">
                <button
                  className=" btn btn-sm text-dark  "
                  style={{ marginLeft: "250px" }}
                  onClick={handleclick}
                >
                  Logout <i class="fa-solid fa-arrow-right-to-bracket"></i>
                </button>
              </div>
            </div>
          </nav>

          <div className="main-sidebar sidebar-style-2">
            <aside id="sidebar-wrapper ">
              <div
                className="sidebar-brand"
                style={{
                  display: "grid",
                  "place-items": "center",
                  "text-align": "center",
                }}
              >
                <Link to="/">
                  <img
                    alt="image"
                    src="data:image/jpeg;base64,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"
                    className="header-logo"
                  />
                  {/* <h2>Tanmay</h2> */}
                </Link>
              </div>
              <ul className="sidebar-menu">
                {/* <li className="menu-header">Main</li> */}
                <li className="dropdown active">
                  <NavLink to={"dashboard"} className="nav-link">
                    <i
                      className="fa-solid fa-gauge  "
                      style={{ color: "grey" }}
                    ></i>
                    <span>Dashboard</span>
                  </NavLink>
                </li>

                <li className="dropdown ">
                  <NavLink
                    to={"/Inword"}
                    className="nav-link menu-toggle nav-link "
                  >
                    <span>Inword</span>
                  </NavLink>
                </li>
                <li className="dropdown ">
                  <NavLink
                    to={"/item_list"}
                    className="nav-link menu-toggle nav-link "
                  >
                    <span>Total Data</span>
                  </NavLink>
                </li>

                <li
                  onClick={(e) => {
                    e.preventDefault();
                    toggleDropdown();
                  }}
                >
                  <a
                    href="#"
                    className="menu-toggle nav-link has-dropdown"
                    onClick={(e) => e.preventDefault()}
                  >
                    <span>Outword</span>
                  </a>
                  <ul className={`dropdown-menu ${open ? "show" : ""}`}>
                    <li>
                      <NavLink to="/Outword" className="nav-link">
                        Outword
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/outword_data" className="nav-link">
                        Outword Data
                      </NavLink>
                    </li>
                  </ul>
                </li>

                <li
                  className="dropdown"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleDropdownRep();
                  }}
                >
                  <a href="#" className="menu-toggle nav-link has-dropdown">
                    <span>Employ Master</span>
                  </a>
                  <ul className={`dropdown-menu ${inopen ? "show" : ""}`}>
                    <li>
                      <NavLink to={"/employ"} className="nav-link">
                        Add Employ
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/employ_list"} className="nav-link">
                        Employ List
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/register_form"} className="nav-link">
                        Register User
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/RegisterUserList"} className="nav-link">
                        Register User List
                      </NavLink>
                    </li>
                  </ul>
                </li>

                <li
                  onClick={(e) => {
                    e.preventDefault();
                    toggleDropdownReport();
                  }}
                  className="dropdown"
                >
                  <a href="#" className="menu-toggle nav-link has-dropdown">
                    <span>Report</span>
                  </a>
                  <ul className={`dropdown-menu ${repopen ? "show" : ""}`}>
                    <li>
                      <NavLink
                        to={"/inword_report"}
                        className="nav-link"
                        href="email-inbox.html"
                      >
                        Inword Report
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={"/outword_report"}
                        className="nav-link"
                        href="email-compose.html"
                      >
                        Outword Report
                      </NavLink>
                    </li>
                  </ul>
                </li>
                {/* 
                <li className="dropdown">
                  <NavLink
                    className=" nav-link menu-toggle nav-link has-dropdown"
                    to={"/about"}
                  >
                    <i class="fa-solid fa-address-card"></i> About
                  </NavLink>
                </li> */}
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
