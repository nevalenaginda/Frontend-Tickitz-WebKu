import React, { useState } from "react";
import { useHistory } from "react-router";
import "./assets/StyleNavbar.css";
import NavBarLogo from "../../assets/img/logo_navbar.png";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

function CustomNavBar({ login }) {
  const { user } = useSelector((state) => state.user);
  let { navBarSearch } = useSelector((state) => state.homePage);
  let [state, setState] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("token");
  };

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
                // value={navBarSearch}
                onKeyUp={(e) => {
                  history.push("/movies");
                  dispatch({ type: "SEARCH_MOVIE", payload: e.target.value });
                }}
                placeholder="Search"
                className="w-100 mt-3 mt-sm-4 mt-md-4 d-md-none d-lg-none d-xl-none text-center color2 border-color-1"
              />
            </Form>
            <div className="select-nav-position">
              {/* <select
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
              </select> */}
            </div>
            <div className="btn bg-white border-none mt-3 mt-sm-4 mt-md-2 mt-lg-2 font-weight-bold mx-2 text-center">
              <Link to="/movies" className="color2">
                Movies
              </Link>
            </div>

            <button
              className="not-allowed btn bg-white border-none  mt-3 mt-sm-4 mt-md-2 mt-lg-2 font-weight-bold mx-2 text-center"
              disabled
            >
              Cinemas
            </button>
            <button
              className="not-allowed  btn bg-white border-none mt-3 mt-sm-4 mt-md-2 mt-lg-2 font-weight-bold mx-2 text-center"
              disabled
            >
              Buy Ticket
            </button>
            {login && (
              <Link
                className="btn shadow-none text-muted d-block d-md-none bg-white border-none mt-3 mt-sm-4 mt-md-2 mt-lg-2 font-weight-bold mx-2 text-center"
                to="/profile"
              >
                Profile
              </Link>
            )}
          </Nav>
          <div className="col-12 text-center mt-5 mt-sm-5 mt-md-5 d-md-none d-lg-none d-xl-none">
            <p className="f-sm">© 2021 Tickitz. All Rights Reserved.</p>
          </div>
          <Form inline>
            {/* <select
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
            </select> */}

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
                onKeyUp={(e) => {
                  history.push("/movies");
                  dispatch({ type: "SEARCH_MOVIE", payload: e.target.value });
                }}
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
                  {user && (
                    <img
                      className="img-fluid img-thumbnails profil-user-navbar"
                      src={user.profil_image}
                      alt="profile"
                    />
                  )}
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
