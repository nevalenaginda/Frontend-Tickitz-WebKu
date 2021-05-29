import React from "react";
import { useDispatch } from "react-redux";
import "./assets/StyleAdmin.css";
// import axios from "axios";
import { insertMovie, getAllMovies } from "../../../config/redux/actions/movie";
import { getAllCinemas } from "../../../config/redux/actions/cinema";
import { insertSchedule } from "../../../config/redux/actions/schedule";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import CustomFooter from "../../../components/Footer";
import CustomNavBar from "../../../components/NavBar";
import Chart from "./assets/img/Chart.png";

function Admin() {
  const dispatch = useDispatch();
  const [formMovie, setFormMovie] = useState({
    movie_title: "",
    synopsis: "",
    duration_hours: "",
    duration_minutes: "",
    category: "",
    director: "",
    casts: "",
    release_date: new Date().toISOString().split("T")[0],
  });
  const [formSchedule, setFormSchedule] = useState({
    id_movie: "",
    id_cinema: "",
    playing_time: "",
    playing_date: new Date().toISOString().split("T")[0],
    price: "",
  });

  const [dataImage, setDataImage] = useState({ image: null });
  const Url = process.env.REACT_APP_API_IMAGE;
  const [imgUrl, setImgUrl] = useState(`${Url}/default_poster.jpg`);
  const [loadingInsert, setLoadingInsert] = useState(false);
  const [loadingSchedule, setLoadingSchedule] = useState(false);
  const [listMovie, setListMovie] = useState([]);
  const [listCinema, setListCinema] = useState([]);

  const handleChangeImage = (event) => {
    if (event.target.files[0]) {
      const imgFiles = event.target.files[0];
      setImgUrl(URL.createObjectURL(event.target.files[0]));
      setDataImage({
        image: imgFiles,
      });
    }
  };

  const handleInsertMovie = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("movie_title", formMovie.movie_title);
    formData.append("genre", formMovie.category);
    formData.append("synopsis", formMovie.synopsis);
    formData.append("duration_hours", formMovie.duration_hours);
    formData.append("duration_minutes", formMovie.duration_minutes);
    formData.append("category", formMovie.category);
    formData.append("director", formMovie.director);
    formData.append("casts", formMovie.casts);
    formData.append("release_date", formMovie.release_date);
    if (dataImage.image !== null) {
      formData.append("image", dataImage.image);
    }
    setLoadingInsert(true);
    dispatch(insertMovie(formData))
      .then((res) => {
        setLoadingInsert(false);
        setImgUrl(`${Url}/default_poster.jpg`);
        setDataImage({ image: null });
        setFormMovie({
          movie_title: "",
          synopsis: "",
          duration_hours: "",
          duration_minutes: "",
          category: "",
          director: "",
          casts: "",
          release_date: new Date().toISOString().split("T")[0],
        });

        dispatch(getAllMovies()).then((res) => {
          setListMovie(res.data.data);
          setFormSchedule({
            ...formSchedule,
            id_movie: res.data.data[0].id_movie,
          });
        });

        Swal.fire({
          icon: "success",
          text: res.data.information.message,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        setLoadingInsert(false);
        Swal.fire({
          icon: "error",
          text: err.response.data.information.message,
          showConfirmButton: true,
        });
      });
  };

  const handleInsertSchedule = (e) => {
    e.preventDefault();
    setLoadingSchedule(true);
    dispatch(insertSchedule(formSchedule))
      .then((res) => {
        setFormSchedule({
          playing_time: "",
          playing_date: new Date().toISOString().split("T")[0],
          price: "",
        });
        setLoadingSchedule(false);
        Swal.fire({
          icon: "success",
          text: res.data.information.message,
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        setLoadingSchedule(false);
        Swal.fire({
          icon: "error",
          text: err.response.data.information.message,
          showConfirmButton: true,
        });
      });
  };

  const handleChange = (e) => {
    setFormMovie({
      ...formMovie,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeSchedule = (e) => {
    setFormSchedule({
      ...formSchedule,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    dispatch(getAllMovies()).then((res1) => {
      setListMovie(res1.data.data);
      dispatch(getAllCinemas()).then((res2) => {
        setListCinema(res2.data.data);
        setFormSchedule({
          ...formSchedule,
          id_cinema: res2.data.data[0].id_cinema,
          id_movie: res1.data.data[0].id_movie,
        });
      });
    });
  }, []);

  return (
    <div className="bg4">
      <CustomNavBar login={localStorage.getItem("token")}></CustomNavBar>
      {formMovie ? (
        <div className="container-fluid p-5 bg4">
          <div className="row">
            <div className="col-12  col-lg mx-3 mt-5 mb-3">
              <div className="col-12 mt-5 mb-3 f-xl c-black f-weight">
                Form Movie
              </div>
              <form>
                <div className="row bg-white p-3">
                  <div className=" mt-4 col-md-12 col-lg-4 d-flex flex-column justify-content-center h-100">
                    <img
                      className=" border p-3 align-self-center"
                      src={imgUrl}
                      alt="poster spiderman"
                      style={{
                        height: "auto",
                        maxWidth: "400px",
                        width: "100%",
                      }}
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

                  <div className="col-md-12 col-lg-6 mt-4  col-md-12 col-lg-8">
                    <div className="row">
                      <div className="col-12 mb-2">Movie Name</div>
                      <div className="col-12 mb-4  input-group-lg">
                        <input
                          type="text"
                          name="movie_title"
                          className="form-control"
                          placeholder="Movie Name"
                          value={formMovie.movie_title}
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
                          value={formMovie.category}
                          onChange={(e) => handleChange(e)}
                        />
                      </div>

                      <div className="col-12">
                        {/* <form> */}
                        <div className="form-row  ">
                          <div className="col-12 col-md-6 mb-2">
                            Release date
                          </div>
                          <div className="col-12 col-md-6 mb-2 d-none d-md-block">
                            Duration
                          </div>
                          <div className="col-12 col-md-6  input-group-lg">
                            <input
                              type="date"
                              name="release_date"
                              className="form-control"
                              placeholder="Date"
                              onChange={(e) => handleChange(e)}
                              value={formMovie.release_date}
                            />
                          </div>
                          <div className="col-12 mt-3 mb-2 d-sm-block  d-md-none">
                            Duration
                          </div>
                          <div className="col-6 col-md-3  input-group-lg">
                            <input
                              type="text"
                              name="duration_hours"
                              className="form-control"
                              placeholder="hours"
                              value={formMovie.hours}
                              onChange={(e) => handleChange(e)}
                              maxLength="1"
                            />
                          </div>
                          <div className="col-6 col-md-3  input-group-lg">
                            <input
                              type="text"
                              name="duration_minutes"
                              className="form-control "
                              placeholder="minutes"
                              value={formMovie.minutes}
                              maxLength="2"
                              onChange={(e) => handleChange(e)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-md-12 mt-4 ">
                        <div className=" form-row">
                          <div className="col-md-4 col-md-4 mb-2">Director</div>
                          <div className="col-8 col-md-8 mb-2 d-none d-md-block">
                            Casts
                          </div>
                          <div className="col-12 col-md-4  input-group-lg">
                            <input
                              type="text"
                              name="director"
                              className="form-control"
                              placeholder="Director"
                              value={formMovie.director}
                              onChange={(e) => handleChange(e)}
                            />
                          </div>
                          <div className="col-12 mt-3 mb-2 d-sm-block  d-md-none">
                            Casts
                          </div>
                          <div className="col-12  mt-md-0 col-md  input-group-lg">
                            <input
                              type="text"
                              name="casts"
                              className="form-control"
                              placeholder="Casts"
                              value={formMovie.casts}
                              onChange={(e) => handleChange(e)}
                            />
                          </div>
                        </div>
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
                      value={formMovie.synopis}
                    ></textarea>
                  </div>
                  <div className="col mt-3 pb-4 ">
                    <button
                      type="button"
                      className="btn btn-input w-100"
                      onClick={(e) => handleInsertMovie(e)}
                    >
                      {loadingInsert ? "Loading..." : "Add Movie"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-12  col-lg-4 mt-5">
              <div className="row">
                <div className="col-12 mt-5 mb-3 f-xl c-black f-weight">
                  Form Schedule
                </div>
                <div className="col-12 py-4 bg-white">
                  <div className="col-12  mt-3 ">
                    <label htmlFor="id_movie">Movies</label>
                    <select
                      id="id_movie"
                      className="custom-select bg-light w-100"
                      name="id_movie"
                      onChange={handleChangeSchedule}
                    >
                      {listMovie.map((itm, idx) => {
                        return (
                          <option value={itm.id_movie} key={itm.id_movie}>
                            {itm.movie_title}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="col-12  mt-3 ">
                    <label htmlFor="id_cinema">Cinema</label>
                    <select
                      id="id_cinema"
                      name="id_cinema"
                      onChange={handleChangeSchedule}
                      className="custom-select bg-light w-100"
                    >
                      {listCinema.map((itm, idx) => {
                        return (
                          <option value={itm.id_cinema} key={itm.id_cinema}>
                            {`${itm.cinema_name} [${itm.city_cinema}]`}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  <div className="col-12 mt-3 form-group">
                    <label htmlFor="date_schedule">Playing Date</label>
                    <input
                      type="date"
                      className="form-control"
                      id="date_schedule"
                      name="playing_date"
                      value={formSchedule.playing_date}
                      onChange={handleChangeSchedule}
                    />
                  </div>
                  <div className="col-12 mt-3 form-group">
                    <label htmlFor="playing_time">Playing Time</label>
                    <input
                      type="time"
                      className="form-control"
                      id="playing_time"
                      name="playing_time"
                      value={formSchedule.playing_time}
                      onChange={handleChangeSchedule}
                    />
                  </div>
                  <div className="col-12 mt-3 form-group">
                    <label htmlFor="price">Price</label>
                    <input
                      type="text"
                      className="form-control"
                      id="price"
                      name="price"
                      value={formSchedule.price}
                      onChange={handleChangeSchedule}
                    />
                  </div>
                  <div className="col-12 mt-3 pb-4">
                    <button
                      type="button "
                      className="btn btn-input w-100"
                      onClick={handleInsertSchedule}
                    >
                      {loadingSchedule ? "Loading..." : "Add Schedule"}
                    </button>
                  </div>
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
      <div className="container-fluid bg4 d-none">
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
