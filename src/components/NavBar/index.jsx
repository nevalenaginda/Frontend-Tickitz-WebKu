import React, { useState } from "react";
import "./assets/StyleNavbar.css";
import NavBarLogo from "../../assets/img/logo_navbar.png";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const handleLogout = () => {
  localStorage.removeItem("access");
  localStorage.removeItem("id_user");
  localStorage.removeItem("token");
};

function CustomNavBar({ login, onChange }) {
  const { login: dataLogin } = useSelector((state) => state.loginPage);
  let [state, setState] = useState(false);

  return (
    <div>
      <Navbar
        className="navbar fixed-top navbar-expand-lg shadow"
        bg="white"
        expand="md"
      >
        <Navbar.Brand>
          <Link to="/">
            <img className="navbar-brand" src={NavBarLogo} alt="brand" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Form>
              <input
                type="text"
                // onFocus={() => history.push("/")}
                onKeyUp={(inputMovieName) =>
                  onChange(inputMovieName.target.value)
                }
                placeholder="Search"
                className="w-100 mt-3 mt-sm-4 mt-md-4 d-md-none d-lg-none d-xl-none text-center color2 border-color-1"
              />
            </Form>
            <div className="select-nav-position">
              <select
                className="mt-3 mt-sm-4 mt-md-4 d-md-none d-lg-none d-xl-none select-city font-weight-bold text-center color2"
                name="select-city"
                id="city"
              >
                <option className="w-100 font-weight-bold  color2" value="">
                  Locations
                </option>
                <option
                  className="w-100 font-weight-bold text-center color2"
                  value="Jakarta"
                >
                  Jakarta
                </option>
                <option
                  className="font-weight-bold text-center color2"
                  value="Lampung"
                >
                  Lampung
                </option>
              </select>
            </div>
            <Link
              className="color2 mt-3 mt-sm-4 mt-md-2 mt-lg-2 font-weight-bold mx-2 text-center"
              to="/"
            >
              Movies
            </Link>
            <Link
              className="color2 mt-3 mt-sm-4 mt-md-2 mt-lg-2 font-weight-bold mx-2 text-center"
              to="/admin"
            >
              Cinemas
            </Link>
            <Link
              className="color2 mt-3 mt-sm-4 mt-md-2 mt-lg-2 font-weight-bold mx-2 text-center"
              to="/order"
            >
              Buy Ticket
            </Link>
          </Nav>
          <div className="col-12 text-center mt-5 mt-sm-5 mt-md-5 d-md-none d-lg-none d-xl-none">
            <p className="f-sm">© 2021 Tickitz. All Rights Reserved.</p>
          </div>
          <Form inline>
            <select
              className=" d-none d-lg-block select-city font-weight-bold color2"
              name="select-city"
              id="city"
            >
              <option className="w-100 font-weight-bold  color2" value="">
                Locations
              </option>
              <option
                className="w-100 font-weight-bold text-center color2"
                value="Jakarta"
              >
                Jakarta
              </option>
              <option
                className="font-weight-bold text-center color2"
                value="Lampung"
              >
                Lampung
              </option>
            </select>

            <Button
              onClick={() => setState(!state)}
              className="button-search bg-white mx-2 d-none d-md-block"
            >
              <i
                className="fa fa-search color2 d-none d-md-block"
                aria-hidden="true"
              ></i>
            </Button>
            {state ? (
              <input
                type="text"
                onKeyUp={(inputMovieName) =>
                  onChange(inputMovieName.target.value)
                }
                placeholder="Search"
                className="d-none d-md-block"
              ></input>
            ) : login ? (
              <>
                <Link
                  className="button-navbar btn btn-primary mx-2 font-weight-bold color-white d-none d-md-block"
                  onClick={() => handleLogout()}
                  to="/login"
                >
                  Sign Out
                </Link>

                <Link
                  className="d-none d-md-block btn  bg-white mx-2 "
                  to="/profile"
                >
                  <img
                    className="img-fluid img-thumbnails profil-user-navbar"
                    src={dataLogin.profil_image}
                    alt="profile"
                  />
                </Link>
              </>
            ) : (
              <Link
                className="button-navbar btn btn-primary mx-2 font-weight-bold color-white d-none d-md-block"
                to="/login"
              >
                Sign Up
              </Link>
            )}
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

CustomNavBar.defaultProps = {
  onChange: () => {},
};

export default CustomNavBar;
