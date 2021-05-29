import React from "react";
import "./assets/StyleUpdate.css";
import axios from "axios";
import alertCustom from "../../../components/Alerts";
import Moment from "moment";
import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import CustomFooter from "../../../components/Footer";
import CustomNavBar from "../../../components/NavBar";

const { REACT_APP_API_TICKET } = process.env;

const changeTime = (time) => {
  return Moment(time).format("YYYY-MM-DD");
};
function UpdateMovie() {
  const [detail, setDetail] = useState({});
  const params = useParams();
  const id_movie = params.id;
  const getDataMovie = useCallback(() => {
    axios
      .get(`${REACT_APP_API_TICKET}movie/${id_movie}`)
      .then((response) => {
        setDetail(response.data.data[0]);
        // eslint-disable-next-line
        console.log(response.data.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    getDataMovie();
  }, [id_movie]); // eslint-disable-line react-hooks/exhaustive-deps

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(detail);
    axios
      .patch(REACT_APP_API_TICKET + "movie/" + id_movie, detail)
      .then((res) => {
        alertCustom("success", res.data.message);
        getDataMovie();
      })
      .catch((err) => {
        alertCustom("error", err.response.data.message);
      });
  };

  return (
    <div className="bg4">
      <CustomNavBar login={localStorage.getItem("token")}></CustomNavBar>
      {detail ? (
        <div className="container-fluid bg4">
          <div className="row justify-content-center">
            <div className="col-12  col-md-10  pt-5 mt-5 mb-5">
              <div className="col-12 mt-5 mb-3 f-xl c-black f-weight">
                Update Movie Description
              </div>
              <form onSubmit={submitHandler}>
                <div className="row bg-white p-5">
                  <div className="col-12 col-md-12 col-lg-4 ">
                    <img
                      className="img-fluid border p-3"
                      src={detail.image}
                      alt="poster movie"
                    />
                  </div>
                  <div className="col-12  col-md-12 col-lg-8">
                    <div className="col-12 mb-2">Movie Name</div>
                    <div className="col-12 mb-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Movie Name"
                        onChange={(e) =>
                          setDetail({ ...detail, movie_title: e.target.value })
                        }
                        value={detail.movie_title}
                      />
                    </div>
                    <div className="col-12 mb-2">Category</div>
                    <div className="col-12  mb-4">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Category"
                        onChange={(e) =>
                          setDetail({ ...detail, category: e.target.value })
                        }
                        value={detail.category}
                      />
                    </div>

                    <div className="col-12">
                      {/* <form> */}
                      <div className="form-row">
                        <div className="col-6 mb-2">Release date</div>
                        <div className="col-6 mb-2">
                          Duration (hour & minute)
                        </div>
                        <div className="col-6">
                          <input
                            type="date"
                            className="form-control"
                            placeholder="Date"
                            onChange={(e) =>
                              setDetail({
                                ...detail,
                                release_date: e.target.value,
                              })
                            }
                            value={changeTime(detail.release_date).toString()}
                          />
                        </div>
                        <div className="col">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="hour and minute"
                            onChange={(e) =>
                              setDetail({
                                ...detail,
                                duration_movie: e.target.value,
                              })
                            }
                            value={detail.duration_movie}
                          />
                        </div>
                      </div>
                      {/* </form> */}
                    </div>
                  </div>
                  <div className="col-12 col-md-12 mt-4 ">
                    {/* <form> */}
                    <div className="form-row">
                      <div className="col-4 col-md-4 mb-2">Director</div>
                      <div className="col-8 col-md-8 mb-2">Casts</div>
                      <div className="col-4 col-md-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Director"
                          onChange={(e) =>
                            setDetail({
                              ...detail,
                              directed_by: e.target.value,
                            })
                          }
                          value={detail.directed_by}
                        />
                      </div>
                      <div className="col col-md">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Casts"
                          onChange={(e) =>
                            setDetail({
                              ...detail,
                              casts: e.target.value,
                            })
                          }
                          value={detail.casts}
                        />
                      </div>
                    </div>
                    {/* </form> */}
                  </div>
                  <div className="col-12 col-md-12 mt-4 ">Synopsis</div>
                  <div className="col-12 col-md-12 mt-2 ">
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      onChange={(e) =>
                        setDetail({
                          ...detail,
                          synopsis: e.target.value,
                        })
                      }
                      value={detail.synopsis}
                    ></textarea>
                  </div>
                  <div className="col-12 w-100 mt-5 pb-4 text-center">
                    <button
                      type="button"
                      className="btn btn-input w-100 "
                      onClick={(e) => submitHandler(e)}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </form>
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

      <div className="container-fluid pt-5 bg-white">
        <CustomFooter></CustomFooter>
      </div>
    </div>
  );
}

export default UpdateMovie;
