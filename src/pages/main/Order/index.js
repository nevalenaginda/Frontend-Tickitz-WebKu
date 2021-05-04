import React, { Component } from "react";
import CustomFooter from "../../../components/Footer";
import CustomNavBar from "../../../components/NavBar";
import "./assets/styleOrder.css";
import ImageSeatsWeb from "./assets/img/seat.PNG";
import ImageSeatsMobile from "./assets/img/seat_mobile.PNG";
import LogoCineOne21 from "./assets/img/CineOne21.png";
export class Order extends Component {
  handleCheckout = (e) => {
    e.preventDefault();
    this.props.history.push(`/payment`);
  };

  render(props) {
    const movie_title = this.props.location.state.schedule.movie_title;
    const movie_price = this.props.location.state.schedule.price;
    const cinema_logo = this.props.location.state.schedule.logo_cinema;
    const cinema_name = this.props.location.state.schedule.cinema_name;

    return (
      <div>
        <div className="">
          <CustomNavBar login={localStorage.getItem("token")} />
        </div>
        <div className="container-fluid bg4 ">
          <div className="row  justify-content-center ">
            <div className="col-12 col-md-6 px-xs-1 px-sm-2 mt-4  col-lg-6 pt-5">
              <div className="col-12 pt-5  font2-rs font-weight-bold ">
                Movie Selected
              </div>
              <div className="col-12 mt-2 mb-4 card d-flex flex-row align-middle">
                <div className="col-7 col-md-7 float-left mt-3 mb-1">
                  <p className=" font1-rs h-50 f-weight">{movie_title}</p>
                </div>

                <div className="col col-md mt-1 mb-1 ">
                  <button className="btn btn-primary mt-1 float-right bg5 font-weight-bold color1 border-white ">
                    <span className="font5-rs">Change movie</span>
                  </button>
                </div>
              </div>
              <div className="col-12 pt-1  font2-rs font-weight-bold">
                Choose Your Seat
              </div>
              <div className="col-12 mt-2 mb-4 card d-none  d-md-block text-center">
                <img
                  className="img-fluid"
                  src={ImageSeatsWeb}
                  alt="web seats"
                />
              </div>
              <div className="col-12 mt-2 mb-4 card d-md-none">
                <img
                  className="img-fluid"
                  src={ImageSeatsMobile}
                  alt="mobile seats"
                />
              </div>

              <div className="col-12 mt-2 mb-4 p-4 card d-md-none">
                <div className="col-12 mt-2 card d-md-none">
                  <div className="row">
                    <div className="col-12 mt-2 mb-3  d-flex">
                      <div className="col-6 mt-2">
                        <select
                          className=" select-seat font-weight-bold text-center color2 bg4"
                          name="select-seat"
                          id="col-seat"
                        >
                          <option className="w-100 font-weight-bold" value="A">
                            A
                          </option>
                          <option className="w-100 font-weight-bold" value="B">
                            B
                          </option>
                          <option className="w-100 font-weight-bold " value="C">
                            C
                          </option>
                        </select>
                      </div>
                      <div className="col-12 mt-2 d-flex">
                        <div className="col-6 ">
                          <select
                            className="select-seat bg4 font-weight-bold text-center color2"
                            name="select-seat"
                            id="row-seat"
                          >
                            <option
                              className="w-100 font-weight-bold"
                              value="A"
                            >
                              1
                            </option>
                            <option
                              className="w-100 font-weight-bold"
                              value="B"
                            >
                              2
                            </option>
                            <option
                              className="w-100 font-weight-bold "
                              value="C"
                            >
                              3
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 mt-2 card d-md-none">
                  <div className="row">
                    <div className="col-12 mt-2 mb-3  d-flex">
                      <div className="col-6 mt-2">
                        <select
                          className=" select-seat font-weight-bold text-center color2 bg4"
                          name="select-seat"
                          id="col-seat"
                        >
                          <option className="w-100 font-weight-bold" value="A">
                            A
                          </option>
                          <option className="w-100 font-weight-bold" value="B">
                            B
                          </option>
                          <option className="w-100 font-weight-bold " value="C">
                            C
                          </option>
                        </select>
                      </div>
                      <div className="col-12 mt-2 d-flex">
                        <div className="col-6 ">
                          <select
                            className="select-seat bg4 font-weight-bold text-center color2"
                            name="select-seat"
                            id="row-seat"
                          >
                            <option
                              className="w-100 font-weight-bold"
                              value="A"
                            >
                              1
                            </option>
                            <option
                              className="w-100 font-weight-bold"
                              value="B"
                            >
                              2
                            </option>
                            <option
                              className="w-100 font-weight-bold "
                              value="C"
                            >
                              3
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 mt-2 card d-md-none">
                  <div className="row">
                    <div className="col-12 mt-2 mb-3  d-flex">
                      <div className="col-6 mt-2">
                        <select
                          className=" select-seat font-weight-bold text-center color2 bg4"
                          name="select-seat"
                          id="col-seat"
                        >
                          <option className="w-100 font-weight-bold" value="A">
                            A
                          </option>
                          <option className="w-100 font-weight-bold" value="B">
                            B
                          </option>
                          <option className="w-100 font-weight-bold " value="C">
                            C
                          </option>
                        </select>
                      </div>
                      <div className="col-12 mt-2 d-flex">
                        <div className="col-6 ">
                          <select
                            className="select-seat bg4 font-weight-bold text-center color2"
                            name="select-seat"
                            id="row-seat"
                          >
                            <option
                              className="w-100 font-weight-bold"
                              value="A"
                            >
                              1
                            </option>
                            <option
                              className="w-100 font-weight-bold"
                              value="B"
                            >
                              2
                            </option>
                            <option
                              className="w-100 font-weight-bold "
                              value="C"
                            >
                              3
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6 ">
                    <button className="btn bg-white f-weight border1 color1 w-100">
                      Add New Seat
                    </button>
                  </div>
                </div>
              </div>
              <div className="row  d-flex mt-3 mb-3">
                <div className="col-md-6  d-none  d-md-block">
                  <button className="btn bg4 border1 color1 w-100">
                    Change your movie
                  </button>
                </div>

                <div className="col-12 col-md-6  d-none  d-md-block">
                  <button
                    onClick={(e) => this.handleCheckout(e)}
                    className="btn btn-input w-100"
                  >
                    Checkout now
                  </button>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-5 mb-4 px-xs-1 px-sm-2 mt-sm-3 pt-sm-0 mt-md-5 mt-lg-5  col-lg-4 pt-md-4 pt-lg-4">
              <div className="col-12 pt-0 pt-md-5 pt-lg-5  font2-rs font-weight-bold">
                Order Info
              </div>
              <div className="mt-2 card">
                <div className="card-header bg-white">
                  <div className="col-12 mt-3 text-center ">
                    <img
                      src={cinema_logo}
                      className="img-fluid img-cinema-order"
                      alt="logo cinema"
                      width="100%"
                      height="auto"
                    />
                  </div>
                  <div className="col-12 mt-0 text-center ">
                    <p className="font-weight-bold font6-rs">{cinema_name}</p>
                  </div>
                  <div className="row mt-3  d-flex">
                    <div className="col-5">
                      <p className=" font3-rs text-left">Movie Selected</p>
                    </div>
                    <div className="col-7">
                      <p className=" font3-rs f-weight text-right">
                        {movie_title}
                      </p>
                    </div>
                  </div>

                  <div className="row  d-flex">
                    <div className="col-8">
                      <p className=" font3-rs text-left">
                        Tuesday, 07 July 2020
                      </p>
                    </div>

                    <div className="col-4">
                      <p className=" font3-rs f-weight text-right">02:00pm</p>
                    </div>
                  </div>
                  <div className="row  d-flex">
                    <div className="col-8">
                      <p className=" font3-rs text-left">One ticket price</p>
                    </div>

                    <div className="col-4">
                      <p className=" font3-rs f-weight text-right">{`Rp${movie_price}`}</p>
                    </div>
                  </div>
                  <div className="row  d-flex">
                    <div className="col-6">
                      <p className=" font3-rs text-left">Seat choosed</p>
                    </div>

                    <div className="col-6">
                      <p className=" font3-rs f-weight text-right">
                        C4, C5, C6
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-footer bg-white">
                  <div className="row  d-flex mt-3">
                    <div className="col-6">
                      <p className=" font3-rs text-left">Total Payment</p>
                    </div>

                    <div className="col-6">
                      <p className=" font3-rs f-weight text-right">Rp105.000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 d-md-none mb-4">
              <button
                onClick={(e) => this.handleCheckout(e)}
                className="btn btn-input w-100"
              >
                Checkout now
              </button>
            </div>
          </div>
        </div>

        <div className="fixed mt-3 mt-md-5 mt-lg-5">
          <CustomFooter />
        </div>
      </div>
    );
  }
}

export default Order;
