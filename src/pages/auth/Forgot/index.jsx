import React from "react";
import alertCustom from "../../../components/Alerts";
import { Link } from "react-router-dom";
import logoDesktop from "../../../assets/img/logo_desktop.png";
import "./assets/StyleForgot.css";

const Forgot = () => {
  const activatenow = (data) => {
    alertCustom("success", data);
  };
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
                      Fill your complete email
                    </h4>
                    <p className="f-sm color3">
                      We'll send a link to your email shortly
                    </p>
                  </div>
                </div>
                <div className="row mt-5">
                  <div className="col-12 form-group">
                    <label htmlFor="form-email" className="f-md">
                      Email
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      placeholder="Write your email"
                      required
                      className="form-control h-100 w-100 box"
                    />
                  </div>
                  <div className="col-12 mt-5">
                    <Link
                      onClick={() => activatenow("Hai")}
                      type="submit"
                      className="btn btn-input w-100"
                      to="/login"
                    >
                      Activate now
                    </Link>
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
              <h3 className="f-weight mt-4">Forgot password</h3>
              <p className="f-sm color3">
                We'll send a link to your email shortly
              </p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12 form-group">
              <label htmlFor="form-email" className="f-md">
                Email
              </label>
              <input
                id="form-email"
                type="email"
                placeholder="Write your email"
                required
                className="form-control h-100 w-100 box"
              />
            </div>
            <div className="col-12 mt-5">
              <button
                onClick={() => activatenow("Hai")}
                type="submit"
                className="btn btn-input w-100"
              >
                Activate now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Forgot;
