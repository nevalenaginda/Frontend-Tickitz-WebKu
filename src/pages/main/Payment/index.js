import React, { Component } from "react";
import CustomFooter from "../../../components/Footer";
import CustomNavBar from "../../../components/NavBar";

import logoGoglePay from "./assets/image/google-pay.png";
import logoVisa from "./assets/image/visa.png";
import logoGopay from "./assets/image/gopay.png";
import logoPaypal from "./assets/image/paypal.png";
import logoDana from "./assets/image/dana.png";
import logoBca from "./assets/image/bca.png";
import logoBri from "./assets/image/bri.png";
import logoOvo from "./assets/image/ovo.png";

export class Payment extends Component {
  handlePayOrder = (e) => {
    e.preventDefault();
    this.props.history.push(`/ticket`);
  };
  render() {
    return (
      <div>
        <CustomNavBar />
        <div className="container-fluid bg4 ">
          <div className="row  justify-content-center ">
            <div className="col-12 col-md-6 px-xs-1 px-sm-2 mt-4  col-lg-6 pt-5">
              <div className="col-12 pt-5  font2-rs font-weight-bold ">
                Payment Info
              </div>

              <div className="col-12 mt-2 mb-4 card">
                <div className="row pt-4  d-flex">
                  <div className="col-5">
                    <p className=" font3-rs text-left">Date & time</p>
                  </div>
                  <div className="col-7">
                    <p className=" font3-rs f-weight text-right">
                      Tuesday, 07 July 2020 at 02:00pm
                    </p>
                  </div>
                  <div className="col-12 mb-0 mt-0">
                    <hr className="w-100" />
                  </div>
                </div>

                <div className="row mt-3  d-flex">
                  <div className="col-5">
                    <p className=" font3-rs text-left">Movie title</p>
                  </div>
                  <div className="col-7">
                    <p className=" font3-rs f-weight text-right">
                      Spider-Man: Homecoming
                    </p>
                  </div>
                  <div className="col-12 mb-0 mt-0">
                    <hr className="w-100" />
                  </div>
                </div>

                <div className="row mt-3  d-flex">
                  <div className="col-5">
                    <p className=" font3-rs text-left">Cinema name</p>
                  </div>
                  <div className="col-7">
                    <p className=" font3-rs f-weight text-right">
                      CineOne21 Cinema
                    </p>
                  </div>
                  <div className="col-12 mb-0 mt-0">
                    <hr className="w-100" />
                  </div>
                </div>

                <div className="row mt-3  d-flex">
                  <div className="col-5">
                    <p className=" font3-rs text-left">Number of tickets</p>
                  </div>
                  <div className="col-7">
                    <p className=" font3-rs f-weight text-right">3 pieces</p>
                  </div>
                  <div className="col-12 mb-0 mt-0">
                    <hr className="w-100" />
                  </div>
                </div>

                <div className="row mt-3 pb-3 d-flex">
                  <div className="col-5">
                    <p className=" font3-rs text-left">Total payment</p>
                  </div>
                  <div className="col-7">
                    <p className=" font3-rs f-weight text-right">Rp105.000</p>
                  </div>
                </div>
              </div>
              <div className="col-12 pt-5  font2-rs font-weight-bold ">
                Choose a Payment Method
              </div>
              <div className="col-12  card mb-5 py-3">
                <div className="mt-3 mr-1 d-flex flex-row overflow-auto ">
                  <div className="col-3 col-md-3">
                    <button
                      type="button"
                      className="btn btn-outline-primary w-100 h-100"
                    >
                      <img
                        className="img-fluid"
                        src={logoGoglePay}
                        alt="gpay"
                      />
                    </button>
                  </div>
                  <div className="col-3 col-md-3">
                    <button
                      type="button"
                      className="btn btn-outline-primary  w-100 h-100"
                    >
                      <img className="img-fluid" src={logoVisa} alt="visa" />
                    </button>
                  </div>
                  <div className="col-3 col-md-3">
                    <button
                      type="button"
                      className="btn btn-outline-primary  w-100 h-100"
                    >
                      <img className="img-fluid" src={logoGopay} alt="gopay" />
                    </button>
                  </div>
                  <div className="col-3 col-md-3">
                    <button
                      type="button"
                      className="btn btn-outline-primary  w-100 h-100"
                    >
                      <img
                        className="img-fluid"
                        src={logoPaypal}
                        alt="paypal"
                      />
                    </button>
                  </div>
                </div>
                <div className="mt-3 mr-1 d-flex flex-row overflow-auto">
                  <div className="col-3 col-md-3">
                    <button
                      type="button"
                      className="btn btn-outline-primary w-100 h-100"
                    >
                      <img className="img-fluid" src={logoDana} alt="dana" />
                    </button>
                  </div>
                  <div className="col-3 col-md-3">
                    <button
                      type="button"
                      className="btn btn-outline-primary w-100 h-100"
                    >
                      <img className="img-fluid" src={logoBca} alt="bca" />
                    </button>
                  </div>
                  <div className="col-3 col-md-3">
                    <button
                      type="button"
                      className="btn btn-outline-primary w-100 h-100"
                    >
                      <img className="img-fluid" src={logoBri} alt="bri" />
                    </button>
                  </div>
                  <div className="col-3 col-md-3">
                    <button
                      type="button"
                      className="btn btn-outline-primary w-100 h-100"
                    >
                      <img className="img-fluid" src={logoOvo} alt="ovo" />
                    </button>
                  </div>
                </div>
                <div className="col-12 mt-4  d-flex">
                  <div className="col-5">
                    <hr />
                  </div>
                  <div className="col-2 text-center">
                    <p classname="font3-rs">Or</p>
                  </div>
                  <div className="col-5">
                    <hr />
                  </div>
                </div>
                <div className="col-12 mt-2  text-center">
                  <p>
                    Pay via cash.{" "}
                    <a className="color1" href="/">
                      See how it works
                    </a>
                  </p>
                </div>
              </div>
              <div className="row  d-flex mt-3 mb-5">
                <div className="col-md-6  d-none  d-md-block">
                  <button className="btn bg4 border1 color1 w-100">
                    Previous step
                  </button>
                </div>

                <div className="col-12 col-md-6  d-none  d-md-block">
                  <button
                    onClick={this.handlePayOrder}
                    className="btn btn-input w-100"
                  >
                    Pay your order
                  </button>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-5 mb-4 px-xs-1 px-sm-2 mt-sm-3 pt-sm-0 mt-md-5 mt-lg-5  col-lg-4 pt-md-4 pt-lg-4">
              <div className="col-12 pt-0 pt-md-5 pt-lg-5 mb-2  font2-rs font-weight-bold">
                Personal Info
              </div>

              <div className="col-12 card font1-rs">
                <div className="col-12 pt-3">
                  <label for="basic-url">Full Name</label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="basic-url"
                      aria-describedby="basic-addon3"
                      placeholder="Input your full name"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <label for="basic-url">Email</label>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="basic-url"
                      aria-describedby="basic-addon3"
                      placeholder="Input your email"
                    />
                  </div>
                </div>
                <div className="col-12">
                  <label for="basic-url">Phone Number</label>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span
                        className="input-group-text bg-white"
                        id="basic-addon3"
                      >
                        +62
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      id="basic-url"
                      aria-describedby="basic-addon3"
                      placeholder="Input your phone number"
                    />
                  </div>
                </div>
                <div className="row justify-content-center mb-3">
                  <div className="text-center col-8 border py-2 bgwarning">
                    <i class="fas fa-exclamation-triangle text-warning"></i>
                    <span> &nbsp; Fill your data correctly.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CustomFooter />
      </div>
    );
  }
}

export default Payment;
