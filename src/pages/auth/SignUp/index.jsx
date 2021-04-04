import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import alertCustom from "../../../components/Alerts";
import logoDesktop from "../../../assets/img/logo_desktop.png";
import "./assets/StyleSignUp.css";

const SignUp = () => {
  const { REACT_APP_API_TICKET } = process.env;
  const history = useHistory();
  const [users, setUsers] = useState({ email: "", passowrd: "" });

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post(REACT_APP_API_TICKET + "user/register", users)
      .then((res) => {
        console.log(res);
        alertCustom("success", res.data.information.message);
        history.push("/login");
      })
      .catch((err) => {
        console.log(err);
        alertCustom("error", err.response.data.information.message);
      });
  };

  const btnGoogle = () => {
    alertCustom("info", "Google");
  };

  const btnFb = () => {
    alertCustom("info", "Facebook");
  };

  return (
    <div className="signup">
      {/* web */}
      <div className="web d-sm-block d-none">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-7 banner">
              <div className="bg-banner "></div>
              <img
                className="img ml-5 mt-5 logo-desktop-signup"
                src={logoDesktop}
                alt="Logo Tickitz"
              />
              <h1 className="color4 ml-5 f-xxl-responsive text-signup-big">
                Lets build your account
              </h1>
              <p className="color4 ml-5 f-md text-signup-small">
                To be a loyal moviegoer and access all of features, your details
                are required.
              </p>
              <div className="list-signup  d-flex">
                <div className="span-list-signup ml-5 rounded-div text-center bg3 color1">
                  1
                </div>
                <div className="span-2 ml-4 text-white">
                  Fill your additional details
                </div>
              </div>
              <div className="list-signup pt-3 d-flex">
                <div className="span-list-signup ml-5 rounded-div text-center text-white">
                  2
                </div>
                <div className=" ml-4 text-white">Activate your account</div>
              </div>
              <div className="list-signup pt-3 d-flex">
                <div className="span-list-signup ml-5 rounded-div text-center text-white">
                  3
                </div>
                <div className="span-2 ml-4 text-white">Done</div>
              </div>
            </div>
            <div className="col-sm-5 mt-4">
              <div className="container">
                <div className="row mt-5">
                  <div className="col-12 mt-4 mb-4">
                    <h4 className="c-black f-xlg f-weight">
                      Fill your additional details
                    </h4>
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
                    <div className="col-12 mt-4  ml-3 form-group form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                      />
                      <label
                        className="form-check-label color2"
                        for="exampleCheck1"
                      >
                        I agree to terms & conditions
                      </label>
                    </div>
                    <div className="col-12 mt-5">
                      <button type="submit" className="btn btn-input w-100">
                        Join for free
                      </button>
                    </div>
                  </div>
                </form>
                <div className="row text-center">
                  <div className="col-12 mt-5">
                    <p className="f-sm">
                      Do you already have an account?{" "}
                      <Link className="line" to="/login">
                        Log in
                      </Link>
                    </p>
                  </div>
                  <div className="col-12">
                    <p className="f-sm color2">or</p>
                  </div>
                  <div className="col-12 mb-5">
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
              <h4 className="c-black f-lg f-weight">Sign up</h4>
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
                  Join for free
                </button>
              </div>
            </div>
          </form>
          <div className="row text-center">
            <div className="col-12 mt-5">
              <p className="f-sm">
                Do you already have an account?{" "}
                <Link className="line" to="/login">
                  Log in
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
    </div>
  );
};
export default SignUp;
