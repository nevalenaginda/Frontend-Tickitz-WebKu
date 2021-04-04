import React from "react";
import { useDispatch } from "react-redux";
import "./assets/StyleAdmin.css";
// import axios from "axios";
import { insertMovie } from "../../../config/redux/actions/act_insertMovie";
import { useState } from "react";
import alertCustom from "../../../components/Alerts";
import CustomFooter from "../../../components/Footer";
import CustomNavBar from "../../../components/NavBar";
import spidermanPoster from "./assets/img/spiderman.png";
import CineOne21Logo from "./assets/img/CineOne21-cinema.png";
import HiflixLogo from "./assets/img/hiflix-cinema.png";
import EbvIdLogo from "./assets/img/ebv.id-cinema.png";
import Chart from "./assets/img/Chart.png";

// const { REACT_APP_API_TICKET } = process.env;

function Admin() {
  const dispatch = useDispatch();
  const [formMovie, setFormMovie] = useState({
    image: {},
    movie_title: "",
    genre: "SSS",
    synopsis: "",
    duration_hours: "",
    duration_minutes: "",
    category: "",
    director: "",
    casts: "",
    release_date: "",
  });

  const handleChange = (e) => {
    setFormMovie({ ...formMovie, [e.target.name]: e.target.value });
  };

  const handleInsertMovie = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", formMovie.image);
    formData.append("movie_title", formMovie.movie_title);
    formData.append("genre", formMovie.genre);
    formData.append("synopsis", formMovie.synopsis);
    formData.append("duration_hours", formMovie.duration_hours);
    formData.append("duration_minutes", formMovie.duration_minutes);
    formData.append("category", formMovie.category);
    formData.append("director", formMovie.director);
    formData.append("casts", formMovie.casts);
    formData.append("release_date", formMovie.release_date);

    dispatch(insertMovie(formData))
      .then((res) => {
        alertCustom("success", res.data.information.message);
      })
      .catch((err) => {
        alertCustom("error", err.response.data.information.message);
      });
    console.log(formMovie);
  };

  const handleChangeImage = (e) => {
    setFormMovie({
      ...formMovie,
      image: e.target.files[0],
    });
    console.log(formMovie);
  };

  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   console.log(detail);
  //   axios
  //     .post(REACT_APP_API_TICKET + "movie", detail)
  //     .then((res) => {
  //       alertCustom("success", res.data.message);
  //     })
  //     .catch((err) => {
  //       alertCustom("error", err.response.data.message);
  //     });
  // };

  return (
    <div className="bg4">
      <CustomNavBar login={localStorage.getItem("token")}></CustomNavBar>
      {formMovie ? (
        <div className="container-fluid p-5 bg4">
          <div className="row">
            <div className="col-12  col-md-7 mx-3 mt-5 mb-5">
              <div className="col-12 mt-5 mb-3 f-xl c-black f-weight">
                Movie Description
              </div>
              <form>
                <div className="row bg-white p-3">
                  <div className="col-6 mt-4 col-md-12 col-lg-4">
                    <img
                      className="img-fluid border p-3"
                      src={spidermanPoster}
                      alt="poster spiderman"
                    />
                    <div className="col-12 mt-4 d-flex justify-content-center">
                      <form className="form-group">
                        <input
                          accept="image/png/jpg"
                          className="form-control-file"
                          type="file"
                          onChange={(e) => handleChangeImage(e)}
                          name="image"
                        />
                      </form>
                    </div>
                  </div>

                  <div className="col-6 mt-4  col-md-12 col-lg-8">
                    <div className="col-12 mb-2">Movie Name</div>
                    <div className="col-12 mb-4  input-group-lg">
                      <input
                        type="text"
                        name="movie_title"
                        className="form-control"
                        placeholder="Movie Name"
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                    <div className="col-12 mb-2">Category</div>
                    <div className="col-12  mb-4  input-group-lg">
                      <input
                        type="text"
                        name="category"
                        className="form-control"
                        placeholder="Category"
                        onChange={(e) => handleChange(e)}
                      />
                    </div>

                    <div className="col-12">
                      {/* <form> */}
                      <div className="form-row  ">
                        <div className="col-6 mb-2">Release date</div>
                        <div className="col-6 mb-2">Duration</div>
                        <div className="col-6  input-group-lg">
                          <input
                            type="date"
                            name="release_date"
                            className="form-control"
                            placeholder="Date"
                            onChange={(e) => handleChange(e)}
                          />
                        </div>
                        <div className="col-3  input-group-lg">
                          <input
                            type="text"
                            name="duration_hours"
                            className="form-control"
                            placeholder="hours"
                            onChange={(e) => handleChange(e)}
                          />
                        </div>
                        <div className="col-3  input-group-lg">
                          <input
                            type="text"
                            name="duration_minutes"
                            className="form-control "
                            placeholder="minutes"
                            onChange={(e) => handleChange(e)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-12 mt-4 ">
                    <div className="form-row">
                      <div className="col-4 col-md-4 mb-2">Director</div>
                      <div className="col-8 col-md-8 mb-2">Casts</div>
                      <div className="col-4 col-md-4  input-group-lg">
                        <input
                          type="text"
                          name="director"
                          className="form-control"
                          placeholder="Director"
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                      <div className="col col-md  input-group-lg">
                        <input
                          type="text"
                          name="casts"
                          className="form-control"
                          placeholder="Casts"
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                    </div>
                    {/* </form> */}
                  </div>
                  <div className="col-12 col-md-12 mt-4 ">Synopsis</div>
                  <div className="col-12 col-md-12 mt-2  input-group-lg">
                    <textarea
                      className="form-control"
                      name="synopsis"
                      rows="3"
                      onChange={(e) => handleChange(e)}
                    ></textarea>
                  </div>
                  <div className="col mt-3 pb-4 ">
                    <button
                      type="button"
                      className="btn btn-input w-100"
                      onClick={(e) => handleInsertMovie(e)}
                    >
                      Insert Movie
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-12  col-md-4 mt-5">
              <div className="col-12 mt-5 mb-3 f-xl c-black f-weight">
                Premiere Location
              </div>
              <div className="col-12 py-4 bg-white">
                <div className="col-12 col-md-8 mt-2 ">
                  <select className="custom-select bg-light custom-select-admin">
                    <option value="Jakarta">Jakarta</option>
                    <option value="Lampung">Lampung</option>
                  </select>
                </div>
                <div className="mt-3 mr-1 d-flex flex-row overflow-auto">
                  <div className="col-4 col-md-4">
                    <button type="button" className="btn btn-outline-primary">
                      <img className="img-fluid" src={EbvIdLogo} alt="cinema" />
                    </button>
                  </div>
                  <div className="col-4 col-md-4">
                    <button type="button" className="btn btn-outline-primary">
                      <img
                        className="img-fluid"
                        src={HiflixLogo}
                        alt="cinema"
                      />
                    </button>
                  </div>
                  <div className="col-4 col-md-4">
                    <button type="button" className="btn btn-outline-primary">
                      <img
                        className="img-fluid"
                        src={CineOne21Logo}
                        alt="cinema"
                      />
                    </button>
                  </div>
                </div>
                <div className="mt-3 mr-1 d-flex flex-row overflow-auto">
                  <div className="col-4 col-md-4">
                    <button type="button" className="btn btn-outline-primary">
                      <img className="img-fluid" src={EbvIdLogo} alt="cinema" />
                    </button>
                  </div>
                  <div className="col-4 col-md-4">
                    <button type="button" className="btn btn-outline-primary">
                      <img
                        className="img-fluid"
                        src={HiflixLogo}
                        alt="cinema"
                      />
                    </button>
                  </div>
                  <div className="col-4 col-md-4">
                    <button type="button" className="btn btn-outline-primary">
                      <img
                        className="img-fluid"
                        src={CineOne21Logo}
                        alt="cinema"
                      />
                    </button>
                  </div>
                </div>
                <div className="mt-3 mr-1 d-flex flex-row overflow-auto">
                  <div className="col-4 col-md-4">
                    <button type="button" className="btn btn-outline-primary">
                      <img className="img-fluid" src={EbvIdLogo} alt="cinema" />
                    </button>
                  </div>
                  <div className="col-4 col-md-4">
                    <button type="button" className="btn btn-outline-primary">
                      <img
                        className="img-fluid"
                        src={HiflixLogo}
                        alt="cinema"
                      />
                    </button>
                  </div>
                  <div className="col-4 col-md-4">
                    <button type="button" className="btn btn-outline-primary">
                      <img
                        className="img-fluid"
                        src={CineOne21Logo}
                        alt="cinema"
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 mt-5 mb-3 f-xl c-black f-weight">
                Showtimes
              </div>
              <div className="col-12 pt-4 mb-5 bg-white">
                <div className="col-12 mb-3">
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Set a date"
                  />
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Insert time"
                  />
                </div>
                <div className="col mt-3 pb-4">
                  <button type="button" className="btn btn-input">
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container-fluid p-5 bg4">
          <div className="row">
            <div className="col-12 mx-3 mt-5 mb-5">
              <div className="col-12 mt-5 mb-3 f-xl c-black f-weight text-center">
                <h3>Data not found! 404</h3>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="container-fluid bg4">
        <div className="col-12  col-md-12  mt-5 mb-5">
          <div className="col-12 mt-5 mb-3 f-xl c-black f-weight">
            Sales Chart
          </div>
          <div className="col-12  col-md-12 col-lg-12 d-flex  mb-5 bg-white flex-wrap">
            <div className="col-12  col-md-4 mt-5  ">
              <img className="img-fluid" src={Chart} alt="chart" />
            </div>
            <div className="col-12  col-md-4  mt-5  ">
              <img className="img-fluid" src={Chart} alt="chart" />
            </div>
            <div className="col-12  col-md-4  mt-5  ">
              <img className="img-fluid" src={Chart} alt="chart" />
            </div>
            <div className="col-12  col-md-4 mt-5  ">
              <img className="img-fluid" src={Chart} alt="chart" />
            </div>
            <div className="col-12  col-md-4  mt-5  ">
              <img className="img-fluid" src={Chart} alt="chart" />
            </div>
            <div className="col-12  col-md-4  mt-5  ">
              <img className="img-fluid" src={Chart} alt="chart" />
            </div>
            <div className="col-12  col-md-4 mt-5  ">
              <img className="img-fluid" src={Chart} alt="chart" />
            </div>
            <div className="col-12  col-md-4  mt-5  ">
              <img className="img-fluid" src={Chart} alt="chart" />
            </div>
            <div className="col-12  col-md-4  mt-5  ">
              <img className="img-fluid" src={Chart} alt="chart" />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid pt-5 bg-white">
        <CustomFooter></CustomFooter>
      </div>
    </div>
  );
}

export default Admin;
