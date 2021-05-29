import React from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Moment from "moment";
import { useHistory, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProfile } from "../../../config/redux/actions/user";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import classnames from "classnames";
import "./assets/StyleProfile.css";
import CustomNavBar from "../../../components/NavBar";
import CustomFooter from "../../../components/Footer";

export default function Profile() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user } = useSelector((state) => state.user);
  const Url = process.env.REACT_APP_API_TICKET;
  const UrlApiImage = process.env.REACT_APP_API_IMAGE;
  const [imgUrl, setImgUrl] = useState(`${UrlApiImage}/default.png`);
  const [dataImage, setDataImage] = useState({ image: null });

  const [dataUser, setDatauser] = useState(user);
  const [historyTicket, setHistoryTicket] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChangeImage = (event) => {
    if (event.target.files[0]) {
      const imgFiles = event.target.files[0];
      setImgUrl(URL.createObjectURL(event.target.files[0]));
      setDataImage({
        image: imgFiles,
      });
    }
  };

  const changeTime = (time) => {
    return Moment(time).format("LLLL");
  };

  useEffect(() => {
    if (user.id_user) {
      setDatauser(user);
      setImgUrl(user.profil_image);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [user]);

  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("first_name", dataUser.first_name);
    formData.append("last_name", dataUser.last_name);
    formData.append("email", dataUser.email);
    formData.append("phone_number", dataUser.phone_number);
    if (dataImage.image !== null) {
      formData.append("image", dataImage.image);
    }
    const token = localStorage.getItem("token");
    const id_user = localStorage.getItem("id_user");
    const config = { headers: { Authorization: `Bearer ${token}` } };
    setLoading(true);
    axios
      .patch(Url + "user/update/" + id_user, formData, config)
      .then((res) => {
        dispatch(getProfile());
        setLoading(false);
        Swal.fire({
          icon: "success",
          text: res.data.information.message,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        setLoading(false);
        Swal.fire({
          icon: "error",
          text: err.response.data.information.message,
          showConfirmButton: true,
        });
      });
  };

  useEffect(() => {
    if (activeTab === "2") {
      const token = localStorage.getItem("token");
      const id_user = localStorage.getItem("id_user");
      const config = { headers: { Authorization: `Bearer ${token}` } };
      axios
        .get(Url + "ticket/all-detail/" + id_user, config)
        .then((res) => {
          // console.log("data history ticket", res.data.data);
          setHistoryTicket(res.data.data);
        })
        .catch((err) => {
          setHistoryTicket([]);
        });
    }
  }, [activeTab, Url]);

  return (
    <>
      <CustomNavBar login={localStorage.getItem("token")} />
      <div className="container-fluid">
        <div className="col-12 pt-5 mt-5 d-flex d-sm-none d-lg-none d-xl-none">
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "1" })}
                onClick={() => {
                  toggle("1");
                }}
              >
                Account settings
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "2" })}
                onClick={() => {
                  toggle("2");
                }}
              >
                Order History
              </NavLink>
            </NavItem>
          </Nav>
        </div>
        <div className="row  justify-content-center pt-0 pt-sm-5 pt-md-5 pb-5 bg4">
          <div className="col-12 col-sm-10 col-md-4 mt-5">
            <div className="card mt-sm-0 mt-md-5">
              <div className="card-header mt-3 bg3">
                <div className="col-12 mb-5 d-flex col-profile  align-items-center  justify-content-between">
                  <span className="f-md color7">INFO</span>
                  <span className="f-weight f-xl color1">...</span>
                </div>
                <div className="col-12 text-center">
                  <img
                    style={{
                      height: "180px",
                      width: "180px",
                      borderRadius: "50%",
                      backgroundImage: "cover",
                    }}
                    src={imgUrl}
                    alt="profile"
                  />
                </div>
                {/* image */}
                <div className="col-12 mt-3 d-flex justify-content-center">
                  <button className="btn btn-input w-75">
                    <span>Change Image</span>
                    <input
                      accept="image/png/jpg"
                      className="position-absolute"
                      style={{
                        left: "-100px",
                        top: 5,
                        opacity: 0,
                        cursor: "pointer",
                      }}
                      type="file"
                      onChange={handleChangeImage}
                    />
                  </button>
                </div>

                <div className="col-12 mt-3 text-center f-lg f-weight color6">
                  {user.first_name + " " + user.last_name}
                </div>
                <div className="col-12 mb-3 text-center f-sm color7">
                  Moviegoers
                </div>
              </div>
              <div className="card-footer pt-4 bg3">
                <div className="col-12 f-md color7 mb-4">Loyalty Points</div>
                <div className="row d-flex justify-content-centerr ">
                  <div className="col-6 col-sm-6 col-lg-6 border-points color4 font-weight d-flex align-items-start flex-column">
                    <h6 className="mb-auto mt-4 p2">Moviegoers</h6>
                    <h6 className="p2 pb-3">
                      <span className="f-lg">320 </span>
                      <span className="f-md">points</span>
                    </h6>
                  </div>
                </div>
                <div className="col-12 f-md color7 mt-5 text-center">
                  180 points become a master
                </div>
                <div className="col-12 mt-2 mb-4">
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "64%", background: "#5f2eea" }}
                      aria-valuenow="64"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Personal Profile Data */}
          <div className="col-12 col-sm-10 col-md-7 mt-5">
            <div className="border-profile mt-5 bg-white  ">
              <div className=" col-12 pt-4 d-none d-sm-flex flex-column ">
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === "1" })}
                      onClick={() => {
                        toggle("1");
                      }}
                    >
                      Account settings
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({ active: activeTab === "2" })}
                      onClick={() => {
                        toggle("2");
                      }}
                    >
                      Order History
                    </NavLink>
                  </NavItem>
                </Nav>
              </div>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="1">
                  <div className="col-12 pt-4 d-flex flex-column ">
                    <div className="f-md font-weight-bold">
                      Details Information
                    </div>
                    <hr className="hr-color color-black w-100" />
                  </div>
                  <div className="web col-12 mt-3">
                    <form className="web d-none d-sm-block">
                      <div className=" form-row ">
                        <div className="col">
                          <label>First Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="First name"
                            onChange={(e) =>
                              setDatauser({
                                ...dataUser,
                                first_name: e.target.value,
                              })
                            }
                            value={dataUser.first_name}
                          />
                        </div>

                        <div className="col">
                          <label>Last Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Last name"
                            onChange={(e) =>
                              setDatauser({
                                ...dataUser,
                                last_name: e.target.value,
                              })
                            }
                            value={dataUser.last_name}
                          />
                        </div>
                      </div>
                      <div className="form-row mt-3">
                        <div className="col">
                          <label>Email</label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            onChange={(e) =>
                              setDatauser({
                                ...dataUser,
                                email: e.target.value,
                              })
                            }
                            value={dataUser.email}
                            disabled
                          />
                        </div>

                        <div className="col">
                          <label>Phone Number</label>
                          <div className="input-group mb-2">
                            <div className="input-group-prepend">
                              <div className="input-group-text bg-white">
                                +62
                              </div>
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              id="inlineFormInputGroup2"
                              placeholder="Phone Number"
                              onChange={(e) =>
                                setDatauser({
                                  ...dataUser,
                                  phone_number: e.target.value,
                                })
                              }
                              value={dataUser.phone_number}
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="mobile col-12 mt-3">
                    <form className="d-block d-sm-none">
                      <div className=" form-row ">
                        <div className="col">
                          <label>Full Name</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="First name"
                            onChange={(e) =>
                              setDatauser({
                                ...dataUser,
                                first_name: e.target.value,
                              })
                            }
                            value={dataUser.first_name}
                          />
                        </div>
                      </div>
                      <div className="form-row mt-3">
                        <div className="col-sm-6">
                          <label>Email</label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            onChange={(e) =>
                              setDatauser({
                                ...dataUser,
                                email: e.target.value,
                              })
                            }
                            value={dataUser.email}
                          />
                        </div>

                        <div className="col-sm-6 mt-3">
                          <label>Phone Number</label>
                          <div className="input-group mb-2">
                            <div className="input-group-prepend">
                              <div className="input-group-text bg-white">
                                +62
                              </div>
                            </div>
                            <input
                              type="text"
                              className="form-control"
                              id="inlineFormInputGroup1"
                              placeholder="Phone Number"
                              onChange={(e) =>
                                setDatauser({
                                  ...dataUser,
                                  phone_number: e.target.value,
                                })
                              }
                              value={dataUser.phone_number}
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-12 mt-5 d-flex flex-column f-md">
                    <div className="f-md font-weight-bold">
                      Account and Privacy
                    </div>
                    <hr className="hr-color color-black w-100" />
                  </div>
                  <div className="web col-12 mt-3">
                    <form>
                      <div className="form-row">
                        <div className="col-12 col-sm-6 mb-3">
                          <label>New Password</label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="New Password"
                            disabled
                          />
                        </div>

                        <div className="col-12 col-sm-6 mt-0">
                          <label>Confirm Password</label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Confirm Password"
                            disabled
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-12  pb-5 mt-5 d-flex  f-md">
                    <button
                      className="btn btn-input mr-3"
                      onClick={(e) => handleSubmit(e)}
                    >
                      {loading ? "Loading..." : "Update Change"}
                    </button>
                    {user.access === 0 && (
                      <button
                        className="btn  btn-danger"
                        onClick={(e) => history.push("/admin")}
                      >
                        Admin Page
                      </button>
                    )}
                  </div>
                </TabPane>
                <TabPane tabId="2">
                  <div
                    className="web col-12 mt-3 py-3"
                    style={{ height: "690px", overflowY: "auto" }}
                  >
                    {historyTicket.length ? (
                      historyTicket.map((item, index) => {
                        return (
                          <div className="card py-2 mb-2" key={index}>
                            <div className="card-header bg-white">
                              <div className="row">
                                <div className="col-sm-12 f-md f-weight mt-2  d-sm-inline d-md-none">
                                  <img
                                    className="img-fluid h-75 w-auto img-thumbnails"
                                    src={`${UrlApiImage}/${item.logo_cinema}`}
                                    alt="cinema"
                                  />
                                </div>
                                <div className="col-sm-12 col-md-6 ">
                                  <div className="color9 f-sm">
                                    {`${changeTime(item.playing_date)
                                      .split(" ")
                                      .slice(0, 4)
                                      .join(" ")} - ${item.playing_time} WIB`}
                                  </div>
                                  <div className="f-md f-weight mt-2">
                                    {item.movie_title}
                                  </div>
                                </div>
                                <div className="col-md-6 f-md f-weight mt-2 text-right d-none d-md-inline">
                                  <img
                                    className="img-fluid h-75 w-auto img-thumbnails"
                                    src={`${UrlApiImage}/${item.logo_cinema}`}
                                    alt="cinema"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row card-body d-flex justify-content-between">
                              <div className="col-12 col-md-6  mt-2">
                                {" "}
                                <button
                                  className={`btn bg6 text-center w-100 shadow-none ${
                                    Moment(item.playing_date)
                                      .fromNow()
                                      .match(/ago/)
                                      ? "bg-danger"
                                      : "bg6"
                                  }`}
                                >
                                  <span className="text-white ">
                                    {Moment(item.playing_date)
                                      .fromNow()
                                      .match(/ago/)
                                      ? "Ticket Expired"
                                      : "Ticket In Active"}
                                  </span>
                                </button>
                              </div>
                              <div className="col-12 col-md-6 mt-2">
                                <Link
                                  to={`/ticket/${item.id_ticket}`}
                                  className="btn w-100 shadow-none btn-input"
                                >
                                  Show Details
                                </Link>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <div className="h-100 d-flex justify-content-center align-items-center text-danger ">
                        <h4 className="font-weight-bold">
                          You don't have order history..
                        </h4>
                      </div>
                    )}
                  </div>
                </TabPane>
              </TabContent>
            </div>
          </div>
        </div>{" "}
      </div>
      <div className="bg-white mt-5">
        <CustomFooter />
      </div>
    </>
  );
}
