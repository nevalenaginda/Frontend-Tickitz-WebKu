import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
// import axios from "axios";
import { loginProcess } from "../../../config/redux/actions/act_login";
import alertCustom from "../../../components/Alerts";
import logoDesktop from "../../../assets/img/logo_desktop.png";
import "./assets/StyleSignIn.css";

const SignIn = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.loginPage);
  const [users, setUsers] = useState({ email: "", passowrd: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      email: users.email,
      password: users.password,
    };
    dispatch(loginProcess(data))
      .then((res) => {
        alertCustom("success", res.data.information.message);
        history.push("/");
      })
      .catch((err) => {
        alertCustom("error", err.response.data.information.message);
      });
    // axios
    //   .post(REACT_APP_API_TICKET + "user/login", users)
    //   .then((res) => {
    //     localStorage.setItem("id", res.data.data.id || null);
    //     localStorage.setItem("access", res.data.data.access);
    //     localStorage.setItem("token", res.data.data.token || "");

    //     alertCustom("success", res.data.information.message);
    //     history.push("/");

    //     console.log(res.data);
    //   })
    //   .catch((err) => {
    //     alertCustom("error", err.response.data.information.message);
    //   });
  };
  const btnGoogle = () => {
    alertCustom("info", "Google");
    history.push("/register");
  };
  const btnFb = () => {
    alertCustom("info", "Facebook");
    history.push("/register");
  };
  return (
    <div className="signup min-vh-100">
      {/* web */}
      <div className="web d-sm-block d-none ">
        <div className="container-fluid">
          <div className="row min-vh-100">
            {/* asside */}
            <div className="col-sm-7 banner">
              <div className="bg-banner">
                <div className="centering-asside-content">
                  <img
                    className="img-fluid logo-desktop-sign-in"
                    src={logoDesktop}
                    alt="Logo Tickitz"
                  />
                </div>
                <h1 className="color4 f-xxl-responsive centering-asside-p">
                  wait, watch, wow!
                </h1>
              </div>
            </div>
            {/* content */}
            <div className="col-sm-5">
              <div className="container">
                <div className="row mt-5">
                  <div className="col-12">
                    <h4 className="c-black f-xxl f-weight">Sign in</h4>
                    <p className="color2">
                      Sign in with your data that you entered during your
                      registration
                    </p>
                  </div>
                </div>
                <form onSubmit={submitHandler}>
                  <div className="row">
                    <div className="col-12 form-group">
                      <label htmlFor="form-email" className="f-md">
                        Email
                      </label>
                      <input
                        id="form-email"
                        type="email"
                        placeholder="Write your email"
                        required
                        className="form-control h-75 w-100 box"
                        onChange={(e) =>
                          setUsers({ ...users, email: e.target.value })
                        }
                        value={users.email}
                      />
                    </div>
                    <div className="col-12 form-group mt-4">
                      <label htmlFor="form-pass" className="f-md">
                        Password
                      </label>
                      <input
                        id="form-pass"
                        type="password"
                        placeholder="Write your password"
                        minLength="8"
                        required
                        className="form-control h-75 w-100 box"
                        onChange={(e) =>
                          setUsers({ ...users, password: e.target.value })
                        }
                        value={users.password}
                      />
                    </div>
                    <div className="col-12 mt-5">
                      <button type="submit" className="btn btn-input w-100">
                        Sign In
                      </button>
                    </div>

                    <div className="col-12 mt-2 ">
                      <Link className="btn btn-success w-100" to="/register">
                        Register
                      </Link>
                    </div>
                  </div>
                </form>
                <div className="row text-center">
                  <div className="col-12 mt-5">
                    <p>
                      Forgot password?{" "}
                      <Link className="line" to="/forgot">
                        Reset now
                      </Link>
                    </p>
                  </div>
                  <div className="col-12">
                    <p className="f-sm color2">or</p>
                  </div>
                  <div className="col-12">
                    <button
                      onClick={btnGoogle}
                      className="text-align-center btn btn-shadow  mr-4"
                    >
                      <i className="fab fa-google bg-google"></i>
                      <span className="color2 f-sm ml-2">Google</span>
                    </button>
                    <button
                      onClick={btnFb}
                      className="text-align-center btn btn-shadow bg-fb"
                    >
                      <i className="fab fa-facebook"></i>
                      <span className="color2 f-sm ml-2">Facebook</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className="mobile d-sm-none d-block">
        <div className="container">
          <div className="row mt-5">
            <div className="col-12">
              <h3 className="color1 f-xl f-weight">Tickitz</h3>
            </div>
            <div className="col-12 mt-4 mb-4">
              <h4 className="c-black f-lg f-weight">Sign in</h4>
            </div>
          </div>
          <form onSubmit={submitHandler}>
            <div className="row">
              <div className="col-12 form-group">
                <label htmlFor="form-email" className="f-md">
                  Email
                </label>
                <input
                  id="form-email"
                  type="email"
                  placeholder="Write your email"
                  required
                  className="form-control h-75 w-100 box"
                  onChange={(e) =>
                    setUsers({ ...users, email: e.target.value })
                  }
                  value={users.email}
                />
              </div>
              <div className="col-12 form-group mt-4">
                <label htmlFor="form-pass" className="f-md">
                  Password
                </label>
                <input
                  id="form-pass"
                  type="password"
                  placeholder="Write your password"
                  minLength="8"
                  required
                  className="form-control h-75 w-100 box"
                  onChange={(e) =>
                    setUsers({ ...users, password: e.target.value })
                  }
                  value={users.password}
                />
              </div>
              <div className="col-12 mt-5">
                <button type="submit" className="btn btn-input w-100">
                  Sign In
                </button>
              </div>
              <div className="col-12 mt-2 ">
                <Link className="btn btn-success w-100" to="/register">
                  Register
                </Link>
              </div>
            </div>
          </form>
          <div className="row text-center">
            <div className="col-12 mt-5">
              <p>
                Forgot password?{" "}
                <Link className="line" to="/forgot">
                  Reset now
                </Link>
              </p>
            </div>
            <div className="col-12">
              <p className="f-sm color2">or</p>
            </div>
            <div className="col-12">
              <button onClick={btnGoogle} className="btn btn-shadow  mr-4">
                <i className="fab fa-google bg-google"></i>
              </button>
              <button onClick={btnFb} className="btn btn-shadow bg-fb">
                <i className="fab fa-facebook"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      {loading ? alertCustom("info", "loading...") : ""}
    </div>
  );
};
export default SignIn;
