import React, { Component } from "react";
import { connect } from "react-redux";
import "./assets/StyleDetail.css";
import axios from "axios";
import { Link } from "react-router-dom";
import alertCustom from "../../../components/Alerts";
import { updateMovie } from "../../../config/redux/actions/act_updateMovie";
import Moment from "moment";
import giveAccessAdmin from "../../../utils/giveAcessAdmin";
import CustomNavBar from "../../../components/NavBar";
import CustomFooter from "../../../components/Footer";
import Cinema21Image from "./assets/img/CineOne21-cinema.png";
import EbvIdImage from "./assets/img/ebv.id-cinema.png";
import HiflixImage from "./assets/img/hiflix-cinema.png";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const { REACT_APP_API_TICKET } = process.env;

export class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: [],
      schedule: [],
      modal: false,
      image_upload: {},
      formUpdateMovie: {
        image: {},
        movie_title: "",
        genre: "",
        synopsis: "",
        duration_hours: "",
        duration_minutes: "",
        category: "",
        director: "",
        casts: "",
        release_date: "",
      },
      optionCity: [
        { label: "Lampung", value: "lampung" },
        { label: "Jakarta", value: "jakarta" },
      ],
      selectedCity: "lampung",
      selectedTime: false,
    };
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.SelectedCity !== this.state.selectedCity) {
  //
  //   }
  // }

  componentDidMount() {
    const id_movie = this.props.match.params.id.toString();
    axios
      .get(REACT_APP_API_TICKET + "movie/" + id_movie)
      .then((res) => {
        // console.log(res);
        const movie = res.data.data;
        this.setState({ movie });
        this.setState({ formUpdateMovie: movie[0] });
      })
      .catch((err) => {
        console.log(err);
      });

    const city = this.state.selectedCity;
    axios
      .get(
        REACT_APP_API_TICKET +
          `schedule/detail?id_movie=${id_movie}&sort-by=tb_schedule_movies.playing_time&order=asc&city=${city}`
      )
      .then((res) => {
        this.setState({ schedule: res.data.data });
        console.log("cek data", this.state.schedule);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    // window.scrollTo(0, 0);
    const role = this.props.loginData.login.access;
    const { movie, schedule, optionCity } = this.state;
    const changeTime = (time) => {
      return Moment(time).format("MMMM DD, YYYY");
    };

    const changeTimeFormUpdate = (time) => {
      return Moment(time).format("YYYY-MM-DD");
    };
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const toggle = () => {
      this.setState({ modal: !this.state.modal });
      this.setState({ formUpdateMovie: movie[0] });
    };

    const btnDelete = (data) => {
      axios
        .delete(REACT_APP_API_TICKET + "movie/" + data, config)
        .then((res) => {
          this.props.history.push("/");
          alertCustom("success", res.data.information.message);
        })
        .catch((err) => {
          console.log(err);
          alertCustom("error", err.response.data.information.message);
        });
    };

    const handleBook = (schedule) => {
      const idMovie = schedule.id_movie;
      this.props.history.push(`/order/${idMovie}`, { schedule });
    };

    const handleChange = (e) => {
      this.setState((state) => ({
        formUpdateMovie: {
          ...state.formUpdateMovie,
          [e.target.name]: e.target.value,
        },
      }));
    };

    const handleChangeImage = (e) => {
      this.setState({ image_upload: e.target.files[0] });
      console.log("ini", this.state.image_upload);
    };

    const handleOptionCity = (e) => {
      this.setState({ selectedCity: e.target.value });
      console.log(this.state.selectedCity);
      const id_movie = this.props.match.params.id.toString();
      const city = e.target.value;
      axios
        .get(
          REACT_APP_API_TICKET +
            `schedule/detail?id_movie=${id_movie}&sort-by=tb_schedule_movies.playing_time&order=asc&city=${city}`
        )
        .then((res) => {
          this.setState({ schedule: res.data.data });
          console.log("cek data", this.state.schedule);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const handleInsertMovie = (e) => {
      e.preventDefault();
      const formData = new FormData();
      if (this.state.image_upload.length !== 0) {
        formData.append("image", this.state.image_upload);
      }
      formData.append("movie_title", this.state.formUpdateMovie.movie_title);
      formData.append("genre", this.state.formUpdateMovie.genre);
      formData.append("synopsis", this.state.formUpdateMovie.synopsis);
      formData.append(
        "duration_hours",
        this.state.formUpdateMovie.duration_hours
      );
      formData.append(
        "duration_minutes",
        this.state.formUpdateMovie.duration_minutes
      );
      formData.append("category", this.state.formUpdateMovie.category);
      formData.append("director", this.state.formUpdateMovie.director);
      formData.append("casts", this.state.formUpdateMovie.casts);
      formData.append("release_date", this.state.formUpdateMovie.release_date);
      const idMovie = movie[0].id_movie;
      // console.log("ini id movie", movie[0].id_movie);
      this.props
        .updateMovie(formData, idMovie)
        .then((res) => {
          alertCustom("success", res.data.information.message);
          axios
            .get(REACT_APP_API_TICKET + "movie/" + idMovie)
            .then((res) => {
              // console.log(res);
              const movie = res.data.data;
              this.setState({ movie });
              this.setState({ formUpdateMovie: movie[0] });
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          alertCustom("error", err.response.data.message);
        });
      console.log(formData);
      this.setState({ modal: !this.state.modal });
    };

    const handleSelectedTime = (e) => {
      alert("hello");
      if (this.state.selectedTime) {
        this.setState({ selectedTime: !this.state.selectedTime });
      }
    };

    return (
      <div>
        <CustomNavBar login={localStorage.getItem("token")} />

        {movie.length > 0 ? (
          <Modal isOpen={this.state.modal} toggle={toggle} size="lg">
            {" "}
            <ModalHeader
              toggle={toggle}
              close={
                <button className="close f-weight" onClick={toggle}>
                  &times;
                </button>
              }
            >
              {`Update Movie ${movie[0].movie_title}`}
            </ModalHeader>
            <ModalBody>
              <div className="col-12">
                <form>
                  <div className="row bg-white p-3">
                    <div className="col-12 mt-4 col-md-12 col-lg-4 d-flex flex-column justify-content-center">
                      <img
                        className="img-fluid border p-3"
                        src={movie[0].image}
                        alt="poster spiderman"
                      />
                      <div className="col-12 mt-4 d-flex justify-content-center">
                        <form className="form-group">
                          <input
                            accept="image/png/jpg"
                            className="form-control-file"
                            type="file"
                            name="image_upload"
                            onChange={(e) => handleChangeImage(e)}
                          />
                        </form>
                      </div>
                    </div>

                    <div className="col-12 mt-4  col-md-12 col-lg-8">
                      <div className="col-12 mb-2">Movie Name</div>
                      <div className="col-12 mb-4  input-group-lg">
                        <input
                          type="text"
                          name="movie_title"
                          className="form-control"
                          placeholder="Movie Name"
                          value={this.state.formUpdateMovie.movie_title}
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                      <div className="col-12 mb-2">Category</div>
                      <div className="col-12  mb-4  input-group-lg">
                        <input
                          type="text"
                          name="genre"
                          className="form-control"
                          placeholder="Category"
                          value={this.state.formUpdateMovie.genre}
                          onChange={(e) => handleChange(e)}
                        />
                      </div>

                      <div className="col-12">
                        {/* <form> */}
                        <div className="form-row  ">
                          <div className="col-12 col-md-6 mb-2">
                            Release date
                          </div>
                          <div className="col-md-6 mb-2 d-none d-sm-none d-md-block">
                            Duration
                          </div>
                          <div className="col-12 col-md-6  input-group-lg">
                            <input
                              type="date"
                              name="release_date"
                              className="form-control"
                              placeholder="Date"
                              value={changeTimeFormUpdate(
                                this.state.formUpdateMovie.release_date
                              )}
                              onChange={(e) => handleChange(e)}
                            />
                          </div>
                          <div className="col-12 mt-4 mb-2 d-block d-md-none">
                            Duration
                          </div>
                          <div className="col-6 col-md-3  input-group-lg">
                            <input
                              type="text"
                              name="duration_hours"
                              className="form-control"
                              placeholder="hours"
                              value={this.state.formUpdateMovie.duration_hours}
                              onChange={(e) => handleChange(e)}
                            />
                          </div>
                          <div className="col-6 col-md-3  input-group-lg">
                            <input
                              type="text"
                              name="duration_minutes"
                              className="form-control "
                              placeholder="minutes"
                              value={
                                this.state.formUpdateMovie.duration_minutes
                              }
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
                            value={this.state.formUpdateMovie.director}
                            onChange={(e) => handleChange(e)}
                          />
                        </div>
                        <div className="col col-md  input-group-lg">
                          <input
                            type="text"
                            name="casts"
                            className="form-control"
                            placeholder="Casts"
                            value={this.state.formUpdateMovie.casts}
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
                        value={this.state.formUpdateMovie.synopsis}
                        onChange={(e) => handleChange(e)}
                      ></textarea>
                    </div>
                  </div>
                </form>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button
                className="btn btn-input"
                onClick={(e) => handleInsertMovie(e)}
              >
                Save
              </Button>
              {""}
              <Button color="danger" onClick={toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </Modal>
        ) : (
          ""
        )}

        <header>
          {movie.length > 0 ? (
            <div className="container mt-5">
              <div className="row mt-5">
                <div className="col-12 col-lg-5 d-flex justify-content-center justify-content-lg-start">
                  <div className="card movie-header">
                    <img src={movie[0].image} alt="Movie Header" />
                  </div>
                </div>
                <div className="col-12 movie col-lg-7 mt-5 mt-lg-0 pl-0">
                  <div className="text-center text-lg-left mb-3">
                    <h3 className=" mt-2 text-dark f-weight mb-3">
                      {movie[0].movie_title}
                    </h3>

                    <p className="f-lg mt-2 mb-4">{movie[0].genre} </p>
                  </div>
                  <div className="row flex-row flex-lg-column ml-auto ml-lg-n3 movie-detail">
                    <div className="col-6 col-lg-12">
                      <h5 className="color8">Release Date</h5>
                      <h4 className="mb-4">
                        {changeTime(movie[0].release_date)}{" "}
                      </h4>
                    </div>
                    <div className="col-6 col-lg-12">
                      <h5 className="color8">Duration</h5>
                      <h4 className="mb-4">
                        {movie[0].duration_hours +
                          " hours " +
                          movie[0].duration_minutes +
                          " minutes "}
                      </h4>
                    </div>
                    <div className="col-6 col-lg-12">
                      <h5 className="color8">Directed by</h5>
                      <h4 className="mb-4">{movie[0].director} </h4>
                    </div>
                    <div className="col-6 col-lg-12">
                      <h5 className="color8">Casts</h5>
                      <h4 className="mb-4">{movie[0].casts}</h4>
                    </div>
                    <div className="col-12 d-flex flex-column f-lg c-black">
                      <hr className="c-black f-weight" />
                    </div>

                    <div
                      className={`col-12 mt-5 text-center ${giveAccessAdmin(
                        role
                      )}`}
                    >
                      <Link
                        onClick={() =>
                          btnDelete(this.props.match.params.id.toString())
                        }
                        className="btn btn-danger col-5 mr-3"
                      >
                        Delete Movie
                      </Link>
                      <Link
                        // to={`/update/${this.props.match.params.id}`}
                        onClick={toggle}
                        className="btn btn-input col-5 w-30 mr-3"
                      >
                        Update
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <h5 className=" mt-4 mb-4 color8">Synopsis</h5>
                  <p className="f-md c-black" style={{ color: "black" }}>
                    {this.state.formUpdateMovie.synopsis}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="container mt-5">
              <div className="row mt-5">
                <div className="col mt-5">
                  <h5 className="text-center f-weight">Loading...</h5>
                </div>
              </div>
            </div>
          )}
        </header>

        <section className="cinema bg4 pt-5">
          <div className="date">
            <div className="container">
              <div className="row mb-2 mb-md-4">
                <div className="col-12">
                  <h2 className="text-center">Showtimes and Tickets</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-12 d-flex justify-content-center">
                  <form className="form-inline d-flex justify-content-center">
                    <input type="date" className="form-control" />
                    <select
                      className="custom-select-admin"
                      onChange={(e) => handleOptionCity(e)}
                    >
                      {optionCity.map((option) => {
                        return (
                          <option value={option.value}>{option.label}</option>
                        );
                      })}
                    </select>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row container-cinema justify-content-center mb-5">
              {schedule.length > 0 ? (
                schedule.map((data) => {
                  return (
                    <div className="col-12 col-lg-5 d-flex justify-content-center d-xl-block col-xl-4 mt-2">
                      <div className="card cinema-card d-none d-sm-block">
                        <div className="row flex-column flex-sm-row pt-3">
                          <div className="col d-flex justify-content-center align-items-center mt-2 mt-sm-0">
                            <img
                              src={data.logo_cinema}
                              alt={data.logo_cinema}
                              className={`${data.cinema_name.toLowerCase()}`}
                            />
                          </div>
                          <div className="col d-flex flex-column pl-1 mt-3 mt-sm-0">
                            <h2>{data.cinema_name}</h2>
                            <p>{data.address_cinema}</p>
                          </div>
                        </div>
                        <hr className="mx-auto" />
                        <div className="row">
                          <div className="col">
                            <nav className="nav pl-3 flex-row">
                              {data.playing_time.split(",").map((time) => {
                                return (
                                  <p
                                    onClick={(e) => handleSelectedTime(e)}
                                    className={`nav-link ${this.state.selectedTime}`}
                                    href="/"
                                  >
                                    {time}
                                  </p>
                                );
                              })}

                              {/* <p className="nav-link" href="/">
                                10:00am
                              </p>
                              <p className="nav-link" href="/">
                                12:00pm
                              </p>
                              <p className="nav-link empty" href="/">
                                02:00pm
                              </p>
                              <p className="nav-link" href="/">
                                04:00pm
                              </p>
                              <p className="nav-link empty" href="/">
                                06:00pm
                              </p>
                              <p className="nav-link" href="/">
                                08:00pm
                              </p> */}
                            </nav>
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col px-5 d-flex justify-content-between align-items-center">
                            <h3>Price</h3>
                            <p className="price">{`Rp${data.price}/seat`}</p>
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col pr-5 pl-3 pl-sm-2 d-flex justify-content-around align-items-center">
                            <button
                              type="button"
                              className="btn book-now"
                              onClick={(e) => handleBook(data)}
                            >
                              Book now
                            </button>
                            <a href="/" className="add-cart">
                              Add Cart
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <h5>There are no schedules for this movie</h5>
              )}

              {/* <div className="col-12 col-lg-5 d-flex justify-content-center d-xl-block col-xl-4 mt-2">
                <div className="card cinema-card d-none d-sm-block">
                  <div className="row flex-column flex-sm-row pt-3">
                    <div className="col d-flex justify-content-center align-items-center mt-2 mt-sm-0">
                      <img
                        src={Cinema21Image}
                        alt="Cineone"
                        className="cineone"
                      />
                    </div>
                    <div className="col d-flex flex-column pl-1 mt-3 mt-sm-0">
                      <h2>CineOne21</h2>
                      <p>
                        Downcare street No. 21, East{" "}
                        <br className="d-block d-sm-none" /> Purwokerto
                      </p>
                    </div>
                  </div>
                  <hr className="mx-auto" />
                  <div className="row">
                    <div className="col">
                      <nav className="nav pl-3 flex-row">
                        <p className="nav-link empty" href="/">
                          08:30am
                        </p>
                        <p className="nav-link" href="/">
                          10:00am
                        </p>
                        <p className="nav-link" href="/">
                          12:00pm
                        </p>
                        <p className="nav-link" href="/">
                          02:00pm
                        </p>
                        <p className="nav-link" href="/">
                          04:00pm
                        </p>
                        <p className="nav-link" href="/">
                          06:00pm
                        </p>
                        <p className="nav-link empty" href="/">
                          08:00pm
                        </p>
                      </nav>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col px-5 d-flex justify-content-between align-items-center">
                      <h3>Price</h3>
                      <p className="price">$10.00/seat</p>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col pr-5 pl-3 pl-sm-2 d-flex justify-content-around align-items-center">
                      <button
                        type="button"
                        onClick={(e) => handleBook(e)}
                        className="btn book-now"
                      >
                        Book now
                      </button>
                      <a href="/" className="add-cart">
                        Add Cart
                      </a>
                    </div>
                  </div>
                </div>
              </div>
     */}
            </div>
            {/* <div className="row">
              <div className="col-12 d-flex justify-content-center">
                <nav>
                  <ul className="pagination-custom">
                    <li>
                      <a href="/" className="page-active">
                        1
                      </a>
                    </li>
                    <li>
                      <a href="/">2</a>
                    </li>
                    <li>
                      <a href="/">3</a>
                    </li>
                    <li>
                      <a href="/">4</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div> */}
          </div>
        </section>

        <CustomFooter />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    loginData: state.loginPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateMovie: (data, idMovie) => dispatch(updateMovie(data, idMovie)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Detail);
