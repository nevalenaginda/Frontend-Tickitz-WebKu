import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  getNowShowingMovies,
  getUpComingMovies,
} from "../../../config/redux/actions/act_home";
import "./assets/StyleHome.css";
import ImageBanner1 from "./assets/img/image-1.png";
import ImageBanner2 from "./assets/img/image-2.png";
import ImageBanner3 from "./assets/img/image-3.png";
import CardMovie from "../../../components/CardMovie";
import CustomNavBar from "../../../components/NavBar";
import CustomFooter from "../../../components/Footer";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: [
        {
          index: "01",
          name: "January",
          active: true,
        },
        {
          index: "02",
          name: "February",
          active: false,
        },
        {
          index: "03",
          name: "March",
          active: false,
        },
        {
          index: "04",
          name: "April",
          active: false,
        },
        {
          index: "05",
          name: "May",
          active: false,
        },
        {
          index: "06",
          name: "June",
          active: false,
        },
        {
          index: "07",
          name: "July",
          active: false,
        },
        {
          index: "08",
          name: "August",
          active: false,
        },
        {
          index: "09",
          name: "September",
          active: false,
        },
        {
          index: "10",
          name: "October",
          active: false,
        },
        {
          index: "11",
          name: "November",
          active: false,
        },
        {
          index: "12",
          name: "December",
          active: false,
        },
      ],
    };
  }

  handleClickMonth = (param) => {
    this.setState({
      month: this.state.month.map((item, index) => {
        return {
          index: item.index,
          name: item.name,
          active: item.index === param ? true : false,
        };
      }),
    });
  };

  componentDidMount() {
    this.props.getUpComingMovies();
    this.props.getNowShowingMovies();
  }

  render() {
    const { upComingMovies, nowShowingMovies } = this.props.movies;
    return (
      <>
        <CustomNavBar
          login={localStorage.getItem("token")}
          onChange={(inputMovieName) => this.onChangeMovieName(inputMovieName)}
        />
        <header>
          <div className="container mt-5">
            <div className="row align-items-center">
              <div className="col-12 col-sm-12 col-lg-6">
                <p className="mt-1 mt-md-3 mt-lg-5">
                  Nearest Cinema, Newest Movie,
                </p>

                <h1>Find out now!</h1>
              </div>
              <div className="col-12 col-sm-12 mt-5 mt-lg-0 col-lg-6 d-flex justify-content-center container-card">
                <div className="card-movie">
                  <img src={ImageBanner1} className="card-img-top" alt="ok" />
                </div>
                <div className="card-movie">
                  <img src={ImageBanner2} className="card-img-top" alt="ok" />
                </div>
                <div className="card-movie">
                  <img src={ImageBanner3} className="card-img-top" alt="ok" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* <!-- Showing Movie --> */}
        <section className="showing-movie bg4">
          <div className="container">
            <div className="row">
              <div className="col-12 d-flex justify-content-between align-items-center">
                <h1 className="now-showing">Now Showing</h1>
                <Link to="/nowshowing-movies">view all</Link>
              </div>
            </div>
            <div className="row mt-5 pl-2 pl-lg-0 overflow-auto">
              <div className="col-12 px-0 container-upcoming-movie">
                {nowShowingMovies.map((item) => (
                  <CardMovie
                    movie={item}
                    key={item.id_movie}
                    cardType={"clickToShow"}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="upcoming-movies">
          <div className="container">
            <div className="row">
              <div className="col-12 d-flex justify-content-between align-items-center">
                <h1 className="upcoming">Upcoming Movies</h1>
                <Link to="/upcoming-movies">view all</Link>
              </div>
            </div>
            <div className="mt-4 container-btn-month">
              {this.state.month.map((item, index) => {
                return (
                  <button
                    href="/"
                    className={`btn btn-month ${item.active && "main"}`}
                    onClick={() => this.handleClickMonth(item.index)}
                  >
                    {item.name}
                  </button>
                );
              })}
            </div>
            <div className="row pl-2 pl-lg-0 pt-5 pb-5 text-center">
              <div className="col-12 px-0 container-upcoming-movie ">
                {upComingMovies.map((item) => (
                  <CardMovie movie={item} key={item.id_movie} />
                ))}

                {/* Jadwal */}
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Upcoming Movies --> */}

        {/* Jumbotron Join Member */}
        <section className="join">
          <div className="container">
            <div className="jumbotron bg-white">
              <p>Be the vanguard of the</p>
              <h1>Moviegoers</h1>
              <form className="form-inline join-now">
                <div className="row">
                  <div className="col-sm-12 col-md-7 mt-3">
                    <input
                      type="text"
                      className="form-control w-100"
                      placeholder="Type your email"
                    />
                  </div>
                  <div className="col-12 col-md-5">
                    <button
                      className="btn mt-3 btn-join-now w-100"
                      type="submit"
                    >
                      Join now
                    </button>
                  </div>
                </div>
              </form>
              <p className="text-join-now">
                By joining you as a Tickitz member,
                <br />
                we will always send you the <br /> latest updates via email .
              </p>
            </div>
          </div>
        </section>
        <CustomFooter />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movies: state.homePage,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getUpComingMovies: () => {
    dispatch(getUpComingMovies());
  },
  getNowShowingMovies: () => {
    dispatch(getNowShowingMovies());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
