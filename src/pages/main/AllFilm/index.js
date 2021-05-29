import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import CustomFooter from "../../../components/Footer";
import CustomNavBar from "../../../components/NavBar";

function AllFilm() {
  const [allFilm, setAllFilm] = useState([]);
  const { REACT_APP_API_TICKET, REACT_APP_API_IMAGE } = process.env;
  let { navBarSearch } = useSelector((state) => state.homePage);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    axios
      .get(
        `${REACT_APP_API_TICKET}/movie?search-by=movie_title&item=${navBarSearch}`
      )
      .then((res) => {
        setAllFilm(res.data.data);
      })
      .catch((err) => {
        setAllFilm([]);
      });
  }, [navBarSearch, REACT_APP_API_TICKET]);

  return (
    <div className="mt-5 pt-5">
      <CustomNavBar login={localStorage.getItem("token")}></CustomNavBar>
      <div className="row pl-2 pl-lg-2">
        <div className="col-12 px-0 container-all-movie">
          {allFilm.length > 0
            ? allFilm.map((item) => {
                return (
                  <div className="card mt-5 mb-5 shadow">
                    <div className="card-all-movie">
                      <img
                        src={`${REACT_APP_API_IMAGE}/${item.image}`}
                        alt={item.image}
                      />
                      <p>{item.movie_title}</p>
                      <span>{item.genre}</span>
                      <Link
                        to={`detail/${item.id_movie}`}
                        className="btn btn-details"
                      >
                        Details
                      </Link>
                    </div>
                  </div>
                );
              })
            : "Film Not Found"}
        </div>
      </div>
      <div className="container-fluid pt-5 bg-white">
        <CustomFooter></CustomFooter>
      </div>
    </div>
  );
}

export default AllFilm;
