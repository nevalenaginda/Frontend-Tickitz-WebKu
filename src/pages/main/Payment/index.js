import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Moment from "moment";
import axios from "axios";
import Swal from "sweetalert2";
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

function Payment() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const [paymentMethod, setPaymentMethod] = useState("");
  const { movie_selected, schedule_selected, selected_seat } = useSelector(
    (state) => state.order
  );
  const [personalInfo, setPersonalInfo] = useState({
    email: user.email,
    full_name: user.first_name + " " + user.last_name,
    phone_number: user.phone_number,
  });
  const Url = process.env.REACT_APP_API_TICKET;
  const [loading, setLoading] = useState(false);

  const changeTime = (time) => {
    return Moment(time).format("LL");
  };

  const toRupiah = (data) => {
    return parseInt(data).toLocaleString("id-ID");
  };

  const handleSelectPaymentMethod = (e, method) => {
    Swal.fire({
      icon: "success",
      text: `You choose ${method} as payment method.`,
      timer: 1500,
      showConfirmButton: false,
    });
    setPaymentMethod(method);
  };

  const handlePay = (e) => {
    e.preventDefault();
    if (paymentMethod) {
      const data = {
        id_user: localStorage.getItem("id_user"),
        id_schedule: schedule_selected.id_schedule,
        total_payment: selected_seat.length * schedule_selected.price,
        payment_methods: paymentMethod,
        status_payment: "paid",
      };
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      setLoading(true);
      axios
        .post(Url + "transaction ", data, config)
        .then((res1) => {
          const data2 = {
            id_transaction: res1.data.data.insertId,
            id_user: localStorage.getItem("id_user"),
            id_schedule: schedule_selected.id_schedule,
            ticket_status: "In Active",
            ordered_seat: selected_seat.join(", "),
          };
          axios
            .post(Url + "ticket", data2, config)
            .then((res2) => {
              const arraySeat = selected_seat;
              arraySeat.map(async (item, id) => {
                const data3 = {
                  id_transaction: res1.data.data.insertId,
                  id_schedule: schedule_selected.id_schedule,
                  seat: item,
                  id_cinema: schedule_selected.id_cinema,
                };
                axios
                  .post(Url + "seat", data3, config)
                  .then((res3) => {
                    if (
                      res3.data.information.message &&
                      id === arraySeat.length - 1
                    ) {
                      setLoading(false);
                      history.push(`/ticket/${res2.data.data.insertId}`);
                      Swal.fire({
                        icon: "success",
                        text: "Success pay order.",
                        showConfirmButton: false,
                        timer: 1500,
                      });

                      dispatch({ type: "RESET_ORDER" });
                    }
                  })
                  .catch((err3) => {
                    setLoading(false);
                    Swal.fire({
                      icon: "error",
                      text: err3.response.data.information.message,
                      showConfirmButton: true,
                    });
                  });
              });
            })
            .catch((err2) => {
              setLoading(false);
              Swal.fire({
                icon: "error",
                text: err2.response.data.information.message,
                showConfirmButton: true,
              });
            });
        })
        .catch((err1) => {
          setLoading(false);
          Swal.fire({
            icon: "error",
            text: err1.response.data.information.message,
            showConfirmButton: true,
          });
        });
    } else {
      Swal.fire({
        icon: "info",
        text: "Please select payment method first.",
        showConfirmButton: true,
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
    if ((!movie_selected && !schedule_selected) || !selected_seat) {
      history.push("/");
    }
  }, [history, movie_selected, schedule_selected, selected_seat]);

  return (
    <div>
      <CustomNavBar login={localStorage.getItem("token")} />
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
                  {schedule_selected && (
                    <p className=" font3-rs f-weight text-right">
                      {`${changeTime(schedule_selected.playing_date)} at ${
                        schedule_selected.playing_time
                      } WIB`}
                    </p>
                  )}
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
                  {movie_selected && (
                    <p className=" font3-rs f-weight text-right">
                      {movie_selected.movie_title}
                    </p>
                  )}
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
                  {schedule_selected && (
                    <p className=" font3-rs f-weight text-right">
                      {schedule_selected.cinema_name}
                    </p>
                  )}
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
                  {selected_seat && (
                    <p className=" font3-rs f-weight text-right">
                      {selected_seat.length} pieces
                    </p>
                  )}
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
                  {schedule_selected && selected_seat && (
                    <p className=" font3-rs f-weight text-right">
                      Rp
                      {toRupiah(selected_seat.length * schedule_selected.price)}
                    </p>
                  )}
                </div>
              </div>
            </div>
            <div className="col-12 pt-5  font2-rs font-weight-bold ">
              Choose a Payment Method
            </div>
            <div className="col-12  card mb-5 py-3">
              <div className="mt-3 mr-1 d-flex flex-row overflow-auto justify-content-lg-center">
                <div className="btn-group ">
                  <button
                    className="btn btn-outline-secondary mx-2"
                    style={{ width: "110px", height: "50px" }}
                    onClick={(e) => handleSelectPaymentMethod(e, "Dana")}
                  >
                    <img className="img-fluid" src={logoDana} alt="dana" />
                  </button>

                  <button
                    type="button"
                    className="btn btn btn-outline-secondary mx-2"
                    style={{ width: "110px", height: "50px" }}
                    onClick={(e) => handleSelectPaymentMethod(e, "BCA")}
                  >
                    <img className="img" src={logoBca} alt="visa" />
                  </button>

                  <button
                    type="button"
                    className="btn btn btn-outline-secondary mx-2"
                    style={{ width: "110px", height: "50px" }}
                    onClick={(e) => handleSelectPaymentMethod(e, "BRI")}
                  >
                    <img className="img" src={logoBri} alt="gopay" />
                  </button>

                  <button
                    type="button"
                    className="btn btn btn-outline-secondary mx-2"
                    style={{ width: "110px", height: "50px" }}
                    onClick={(e) => handleSelectPaymentMethod(e, "Ovo")}
                  >
                    <img className="img" src={logoOvo} alt="paypal" />
                  </button>
                </div>
              </div>
              <div className="mt-3 mr-1 d-flex flex-row overflow-auto justify-content-lg-center">
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-outline-secondary mx-2"
                    style={{ width: "110px", height: "50px" }}
                    onClick={(e) => handleSelectPaymentMethod(e, "Google Pay")}
                  >
                    <img className="img-fluid" src={logoGoglePay} alt="gpay" />
                  </button>

                  <button
                    type="button"
                    className="btn btn btn-outline-secondary mx-2"
                    style={{ width: "110px", height: "50px" }}
                    onClick={(e) => handleSelectPaymentMethod(e, "Visa")}
                  >
                    <img className="img" src={logoVisa} alt="visa" />
                  </button>

                  <button
                    type="button"
                    className="btn btn btn-outline-secondary mx-2"
                    style={{ width: "110px", height: "50px" }}
                    onClick={(e) => handleSelectPaymentMethod(e, "Gopay")}
                  >
                    <img
                      className="img"
                      src={logoGopay}
                      alt="gopay"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </button>

                  <button
                    type="button"
                    className="btn btn btn-outline-secondary mx-2"
                    style={{ width: "110px", height: "50px" }}
                    onClick={(e) => handleSelectPaymentMethod(e, "Pypal")}
                  >
                    <img className="img" src={logoPaypal} alt="paypal" />
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
                <button
                  className="btn bg4 border1 color1 w-100"
                  onClick={(e) => history.goBack()}
                >
                  Previous step
                </button>
              </div>

              <div className="col-12 col-md-6  d-none  d-md-block">
                <button
                  onClick={(e) => handlePay(e)}
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
                    name="full_name"
                    value={personalInfo.full_name}
                    onChange={(e) =>
                      setPersonalInfo({
                        ...personalInfo,
                        [e.target.name]: e.target.value,
                      })
                    }
                    aria-describedby="basic-addon3"
                    placeholder="Input your full name"
                    disabled
                  />
                </div>
              </div>
              <div className="col-12">
                <label for="basic-url">Email</label>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    value={personalInfo.email}
                    onChange={(e) =>
                      setPersonalInfo({
                        ...personalInfo,
                        [e.target.name]: e.target.value,
                      })
                    }
                    aria-describedby="basic-addon3"
                    placeholder="Input your email"
                    disabled
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
                    name="phone_number"
                    value={personalInfo.phone_number}
                    onChange={(e) =>
                      setPersonalInfo({
                        ...personalInfo,
                        [e.target.name]: e.target.value,
                      })
                    }
                    aria-describedby="basic-addon3"
                    placeholder="Input your phone number"
                    disabled
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
            <div className="row  d-flex mt-3 mb-5">
              <div className="col-md-6  d-md-none">
                <button
                  className="btn btn-input w-100"
                  onClick={(e) => handlePay(e)}
                >
                  Pay your order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CustomFooter />
    </div>
  );
}

export default Payment;
