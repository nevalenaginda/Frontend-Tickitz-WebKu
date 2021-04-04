import React from "react";
import axios from "axios";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import classnames from "classnames";
import { useState, useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { ProgressBar } from "react-bootstrap/";
import "./assets/StyleProfile.css";
import CustomNavBar from "../../../components/NavBar";
import CustomFooter from "../../../components/Footer";
import logoCineOne21 from "./assets/img/CineOne21-cinema.png";
import logoEbvid from "./assets/img/ebv.id-cinema.png";
import alertCustom from "../../../components/Alerts";
import { useForm } from "react-hook-form";

export default function Profile() {
  window.scrollTo({ top: 0, behavior: "smooth" });
  const [dataUser, setDatauser] = useState({});
  const { login } = useSelector((state) => state.loginPage);
  const [img, setImg] = useState([]);

  const id_user = localStorage.getItem("id_user");
  // console.log("ini id", id_user);
  const token = localStorage.getItem("token");

  const { register, handleSubmit } = useForm();
  const fd = new FormData();

  const config = { headers: { Authorization: `Bearer ${token}` } };
  const configFormData = {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  };

  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const { REACT_APP_API_TICKET } = process.env;
  // eslint-disable-next-line
  const getDataUser = useCallback(() => {
    axios
      .get(`${REACT_APP_API_TICKET}user/${id_user}`, config)
      .then((response) => {
        setDatauser(response.data.data[0]);
        // console.log(response.data.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    getDataUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const updateDataUser = async (e) => {
    fd.append("first_name", dataUser.first_name);
    fd.append("last_name", dataUser.last_name);
    fd.append("email", dataUser.email);
    fd.append("phone_number", dataUser.phone_number);
    if (img.length !== 0) {
      fd.append("image", img);
    }
    axios
      .patch(REACT_APP_API_TICKET + "user/" + id_user, fd, configFormData)
      .then((res) => {
        alertCustom("success", res.data.information.message);
        getDataUser();
        login.profil_image = res.data.data[0].profil_image;
      })
      .catch((err) => {
        alertCustom("error", err.response.data.message);
      });
  };

  const onSubmit = async (data) => {
    // const image = data.image[0]
    setImg(data.image[0]);
    // if (image.type !== 'image/png' && image.type !== 'image/jpg' && image.type !== 'image/jpeg') {
    //   alertCustom("info", "Format harus PNG/JPG");
    // } else {
    //   setImg(data.image[0])
    // }
  };
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
                    className="img-fluid img-thumbnails profil-User"
                    src={dataUser.profil_image}
                    alt="profile"
                  />
                </div>
                {/* image */}
                <div className="col-12 d-flex justify-content-center">
                  <form className="form-group w-75">
                    <input
                      accept="image/png/jpg"
                      className="form-control-file"
                      type="file"
                      ref={register}
                      onChange={handleSubmit(onSubmit)}
                      name="image"
                    />
                  </form>
                </div>

                <div className="col-12 text-center f-lg f-weight color6">
                  {dataUser.first_name + " " + dataUser.last_name}
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
                  <ProgressBar className="color1" now={64} />
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
                    <div className="f-md">Details Information</div>
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
                              id="inlineFormInputGroup"
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
                              id="inlineFormInputGroup"
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
                    <div className="f-md">Account and Privacy</div>
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
                          />
                        </div>

                        <div className="col-12 col-sm-6 mt-0">
                          <label>Confirm Password</label>
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Confirm Password"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-12 col-md-6 pb-5 mt-5 d-flex flex-column f-md">
                    <button
                      className="btn btn-input"
                      onClick={(e) => updateDataUser(e)}
                    >
                      Update Change
                    </button>
                  </div>
                </TabPane>
                <TabPane tabId="2">
                  <div className="web col-12 mt-3 py-3">
                    <div className="card py-2">
                      <div className="card-header bg-white">
                        <div className="row">
                          <div className="col-sm-12 f-md f-weight mt-2  d-sm-inline d-md-none">
                            <img
                              className="img-fluid h-75 w-auto img-thumbnails"
                              src={logoCineOne21}
                              alt="cinema"
                            />
                          </div>
                          <div className="col-sm-12 col-md-6 ">
                            <div className="color9 f-sm">
                              Tuesday, 07 July 2020 - 04:30pm
                            </div>
                            <div className="f-md f-weight mt-2">
                              Spider-man Homecoming
                            </div>
                          </div>
                          <div className="col-md-6 f-md f-weight mt-2 text-right d-none d-md-inline">
                            <img
                              className="img-fluid h-75 w-auto img-thumbnails"
                              src={logoCineOne21}
                              alt="cinema"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row card-body d-flex justify-content-between">
                        <div className="col-sm-12 col-md-6 ">
                          {" "}
                          <button className="btn bg6 text-center w-100">
                            <span className="text-white ">
                              Ticket In Active
                            </span>
                          </button>
                        </div>
                        <div className="col-md-6 d-none d-md-flex">
                          <button className="btn text-right w-100">
                            <span className="color9 ">Show Details &nbsp;</span>
                            <i className="color9 fa fa-caret-down "></i>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="card py-2 mt-3">
                      <div className="card-header bg-white">
                        <div className="row">
                          <div className="col-sm-12 f-md f-weight mt-2  d-sm-inline d-md-none">
                            <img
                              className="img-fluid h-75 w-auto img-thumbnails"
                              src={logoEbvid}
                              alt="cinema"
                            />
                          </div>
                          <div className="col-sm-12 col-md-6 ">
                            <div className="color9 f-sm">
                              Monday, 14 June 2020 - 02:00pm
                            </div>
                            <div className="f-md f-weight mt-2">
                              Avengers: End Game
                            </div>
                          </div>
                          <div className="col-md-6 f-md f-weight mt-2 text-right d-none d-md-inline">
                            <img
                              className="img-fluid h-75 w-auto img-thumbnails"
                              src={logoEbvid}
                              alt="cinema"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row card-body d-flex justify-content-between">
                        <div className="col-sm-12 col-md-6 ">
                          {" "}
                          <button className="btn bg6 text-center w-100">
                            <span className="text-white ">
                              Ticket In Active
                            </span>
                          </button>
                        </div>
                        <div className="col-md-6 d-none d-md-flex">
                          <button className="btn text-right w-100">
                            <span className="color9 ">Show Details &nbsp;</span>
                            <i className="color9 fa fa-caret-down "></i>
                          </button>
                        </div>
                      </div>
                    </div>
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
