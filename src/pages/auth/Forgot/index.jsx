import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import logoDesktop from "../../../assets/img/logo_desktop.png";
import "./assets/StyleForgot.css";

const Forgot = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const Url = process.env.REACT_APP_API_TICKET;
  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery();
  let confirmEmail = query.get("email");
  let confirmToken = query.get("token");

  const handleReset = (event) => {
    event.preventDefault();
    if (password !== "") {
      setLoading(true);
      axios
        .get(
          `${Url}user/resetPassword/${confirmToken}/${confirmEmail}/${password}`
        )
        .then((res) => {
          setLoading(false);
          setEmail("");
          setPassword("");

          Swal.fire({
            title: "Success!",
            text: res.data.information.message,
            icon: "success",
            confirmButtonText: "Ok",
            confirmButtonColor: "#7E98DF",
          }).then((result) => {
            if (result.isConfirmed) {
              history.push("/login");
            } else {
              history.push("/login");
            }
          });
        })
        .catch((err) => {
          setLoading(false);
          Swal.fire({
            title: "Error!",
            text: err.response.data.information.message,
            icon: "error",
            confirmButtonText: "Ok",
            confirmButtonColor: "#7E98DF",
          });
        });
    } else {
      Swal.fire({
        title: "Info!",
        text: "Please fill new password",
        icon: "info",
        confirmButtonText: "Ok",
        confirmButtonColor: "#7E98DF",
      });
    }
  };

  const handleSend = (event) => {
    const data = {
      email,
    };
    event.preventDefault();
    if (email !== "") {
      setLoading(true);
      axios
        .post(`${Url}user/forgotPassword`, data)
        .then((res) => {
          setLoading(false);
          setEmail("");
          setPassword("");
          console.log("ini responsenya", res);
          Swal.fire({
            title: "Success!",
            text: res.data.information.message,
            icon: "success",
            confirmButtonText: "Ok",
            confirmButtonColor: "#7E98DF",
          });
        })
        .catch((err) => {
          setLoading(false);
          console.log("inierrornya", err);
          Swal.fire({
            title: "Error!",
            text: err.response.data.information.message,
            icon: "error",
            confirmButtonText: "Ok",
            confirmButtonColor: "#7E98DF",
          });
        });
    } else {
      Swal.fire({
        title: "Info!",
        text: "Please fill email",
        icon: "info",
        confirmButtonText: "Ok",
        confirmButtonColor: "#7E98DF",
      });
    }
  };

  if (loading) {
    Swal.fire({
      icon: "info",
      title: "Loading!",
      text: "Please wait",
      showConfirmButton: false,
    });
  }

  useEffect(() => {
    if (confirmToken !== null && confirmEmail !== null) {
      setShowPassword(true);
    }
  }, [confirmEmail, confirmToken]);

  return (
    <div className="forgot">
      {/* web */}
      <div className="web d-sm-block d-none min-vh-100">
        <div className="container-fluid">
          <div className="row row-forgot min-vh-100">
            <div className="col-sm-7 banner">
              <div className="bg-banner "></div>
              <img
                className="img ml-5 mt-5 logo-desktop-signup"
                src={logoDesktop}
                alt="Logo Tickitz"
              />
              <h1 className="color4 ml-5 f-xxl-responsive text-signup-big">
                Lets reset your password
              </h1>
              <p className="color4 ml-5 f-md text-signup-small">
                To be able to use your account again, please complete the
                following steps.
              </p>
              <div className="list-signup  d-flex">
                <div className="span-list-signup ml-5 rounded-div text-center bg3 color1">
                  1
                </div>
                <div className="span-2 ml-4 text-white">
                  Fill your complete email
                </div>
              </div>
              <div className="list-signup pt-3 d-flex">
                <div className="span-list-signup ml-5 rounded-div text-center text-white">
                  2
                </div>
                <div className=" ml-4 text-white">Activate your email</div>
              </div>
              <div className="list-signup pt-3 d-flex">
                <div className="span-list-signup ml-5 rounded-div text-center text-white">
                  3
                </div>
                <div className="span-2 ml-4 text-white">
                  Enter your new password
                </div>
              </div>
              <div className="list-signup pt-3 mb-5 d-flex">
                <div className="span-list-signup ml-5 rounded-div text-center text-white">
                  4
                </div>
                <div className="span-2 ml-4 text-white">Done</div>
              </div>
            </div>
            <div className="col-sm-5">
              <div className="container">
                <div className="row mt-5">
                  <div className="col-12">
                    <h4 className="c-black f-xlg f-weight mt-3">
                      {showPassword
                        ? "Fill your new password"
                        : "Fill your complete email"}
                    </h4>
                    <p className="f-sm color3">
                      {showPassword
                        ? "We'll help you reset password shortly"
                        : "We'll send a link to your email shortly"}
                    </p>
                  </div>
                </div>
                <form
                  className="row mt-5"
                  onSubmit={showPassword === false ? handleSend : handleReset}
                >
                  <div className="col-12 form-group">
                    <label htmlFor="form-email" className="f-md">
                      {showPassword ? "Password" : "Email"}
                    </label>
                    {showPassword ? (
                      <input
                        id="form-email"
                        type="password"
                        placeholder="Write your new password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        minLength="8"
                        className="form-control h-100 w-100 box"
                        required
                      />
                    ) : (
                      <input
                        id="form-email"
                        type="email"
                        placeholder="Write your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        minLength="8"
                        className="form-control h-100 w-100 box"
                        required
                      />
                    )}
                  </div>
                  <div className="col-12 mt-5">
                    <button type="submit" className="btn btn-input w-100">
                      {showPassword ? "  Reset Now" : "Activate Now"}
                    </button>
                  </div>
                </form>
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
              <h3 className="f-weight mt-4">
                {showPassword ? "Reset Password" : "Forgot Password"}
              </h3>
              <p className="f-sm color3">
                {showPassword
                  ? "We'll help you reset password shortly"
                  : "We'll send a link to your email shortly"}
              </p>
            </div>
          </div>
          <form
            className="row mt-5"
            onSubmit={showPassword === false ? handleSend : handleReset}
          >
            <div className="col-12 form-group">
              <label htmlFor="form-email" className="f-md">
                {showPassword ? "Password" : "Email"}
              </label>
              {showPassword ? (
                <input
                  id="form-email"
                  type="password"
                  placeholder="Write your new password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  minLength="8"
                  className="form-control h-100 w-100 box"
                  required
                />
              ) : (
                <input
                  id="form-email"
                  type="email"
                  placeholder="Write your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  minLength="8"
                  className="form-control h-100 w-100 box"
                  required
                />
              )}
            </div>
            <div className="col-12 mt-5">
              <button type="submit" className="btn btn-input w-100">
                {showPassword ? "  Reset Now" : "Activate Now"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Forgot;
