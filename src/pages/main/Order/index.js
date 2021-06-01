import React from "react";
import { useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { useParams } from "react-router";
import Moment from "moment";
import Swal from "sweetalert2";
import CustomFooter from "../../../components/Footer";
import CustomNavBar from "../../../components/NavBar";
import "./assets/styleOrder.css";
import SeatDesktop from "../../../components/module/SeatDesktop/index.js";
import SeatMobile from "../../../components/module/SeatMobile/index.js";

function Order() {
  const history = useHistory();
  let { id } = useParams();
  const { movie_selected, schedule_selected, selected_seat } = useSelector(
    (state) => state.order
  );
  const handleCheckout = (e) => {
    e.preventDefault();
    if (selected_seat.length > 0) {
      history.push(`/payment/${id}`);
    } else {
      Swal.fire("HEY!", "Select a Seat First", "warning");
    }
  };

  const changeTime = (time) => {
    return Moment(time).format("LL");
  };

  const toRupiah = (data) => {
    return parseInt(data).toLocaleString("id-ID");
  };

  return (
    <div>
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
                  {movie_selected && (
                    <p className=" font1-rs h-50 f-weight">
                      {movie_selected.movie_title}
                    </p>
                  )}
                </div>

                <div className="col col-md mt-1 mb-1 ">
                  <Link
                    to={"/movies"}
                    className="btn btn-primary mt-1 float-right bg5 font-weight-bold color1 border-white "
                  >
                    <span className="font5-rs">Change movie</span>
                  </Link>
                </div>
              </div>
              <div className="col-12 mb-2 pt-1  font2-rs font-weight-bold">
                Choose Your Seat
              </div>
              <div className="row mx-1 mt-2  mb-4  d-lg-none position-static">
                {id && <SeatMobile idSchedule={id} />}
              </div>

              {id && <SeatDesktop idSchedule={id} />}

              <div className="row  d-flex mt-3 mb-3">
                <div className="col-md-6  d-none  d-md-block">
                  <button className="btn bg4 border1 color1 w-100">
                    Change your movie
                  </button>
                </div>

                <div className="col-12 col-md-6  d-none  d-md-block">
                  <button
                    onClick={(e) => handleCheckout(e)}
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
                    {schedule_selected && (
                      <img
                        src={schedule_selected.logo_cinema}
                        className="img-fluid img-cinema-order"
                        alt="logo cinema"
                        width="100%"
                        height="auto"
                      />
                    )}
                  </div>
                  <div className="col-12 mt-0 text-center ">
                    {schedule_selected && (
                      <p className="font-weight-bold font6-rs">
                        {schedule_selected.cinema_name}
                      </p>
                    )}
                  </div>
                  <div className="row mt-3  d-flex">
                    <div className="col-5">
                      <p className=" font3-rs text-left">Movie Selected</p>
                    </div>
                    <div className="col-7">
                      {movie_selected && (
                        <p className=" font3-rs f-weight text-right">
                          {movie_selected.movie_title}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="row  d-flex">
                    <div className="col-8">
                      {schedule_selected && (
                        <p className=" font3-rs text-left">
                          {changeTime(schedule_selected.playing_date)}
                        </p>
                      )}
                    </div>

                    <div className="col-4">
                      {schedule_selected && (
                        <p className=" font3-rs f-weight text-right">
                          {`${schedule_selected.playing_time} WIB`}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="row  d-flex">
                    <div className="col-8">
                      <p className=" font3-rs text-left">One ticket price</p>
                    </div>

                    <div className="col-4">
                      {schedule_selected && (
                        <p className=" font3-rs f-weight text-right">{`Rp${toRupiah(
                          schedule_selected.price
                        )}`}</p>
                      )}
                    </div>
                  </div>
                  <div className="row  d-flex">
                    <div className="col-6">
                      <p className=" font3-rs text-left">Seat choosed</p>
                    </div>

                    <div className="col-6">
                      {selected_seat && (
                        <p className=" font3-rs f-weight text-right">
                          {selected_seat.join(", ")}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="card-footer bg-white">
                  <div className="row  d-flex mt-3">
                    <div className="col-6">
                      <p className=" font3-rs text-left">Total Payment</p>
                    </div>

                    <div className="col-6">
                      {selected_seat && schedule_selected && (
                        <p className=" font3-rs f-weight text-right">
                          Rp
                          {toRupiah(
                            selected_seat.length * schedule_selected.price
                          )}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 d-md-none mb-4">
              <button
                onClick={(e) => handleCheckout(e)}
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
    </div>
  );
}

export default Order;
