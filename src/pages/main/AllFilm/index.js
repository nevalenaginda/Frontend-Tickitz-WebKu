import React, { useState, useEffect } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import CustomFooter from "../../../components/Footer";
import CustomNavBar from "../../../components/NavBar";

function AllFilm() {
  const [allFilm, setAllFilm] = useState([]);
  const { REACT_APP_API_TICKET, REACT_APP_API_IMAGE } = process.env;
  let { navBarSearch } = useSelector((state) => state.homePage);
  const [sortBy, setSortBy] = useState("movie_title");
  const [sortOrder, setSortOrder] = useState("ASC");
  const [totalPage, setTotalPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const optionsSortBy = [
    {
      label: "Release Date",
      value: "release_date",
    },
    {
      label: "Movie Name",
      value: "movie_title",
    },
  ];

  const optionsSortOrder = [
    {
      label: "Descending",
      value: "DESC",
    },
    {
      label: "Ascending",
      value: "ASC",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(
        `${REACT_APP_API_TICKET}/movie?search-by=movie_title&item=${navBarSearch}&sort-by=${sortBy}&order=${sortOrder}&limit=10&page=${
          navBarSearch === "" ? currentPage : 1
        }`
      )
      .then((res) => {
        setAllFilm(res.data.data);
        setTotalPage(res.data.pagination.totalPage);
        setCurrentPage(res.data.pagination.page);
      })
      .catch((err) => {
        setAllFilm([]);
      });
  }, [navBarSearch, REACT_APP_API_TICKET, sortBy, sortOrder, currentPage]);

  return (
    <div className="mt-5 pt-5">
      <CustomNavBar login={localStorage.getItem("token")}></CustomNavBar>
      <div className="row pl-2 pl-lg-2">
        <div className="mt-5 mb-2 col-12 justify-content-start d-flex">
          <form className="form-inline">
            <label
              className="my-1 ml-3 mr-2 f-md f-weight color2"
              htmlFor="sort"
            >
              Sort by
            </label>
            <select
              className="custom-select my-1 mr-sm-2 f-md f-weight color2"
              id="sort"
              onChange={(e) => setSortBy(e.target.value)}
            >
              {optionsSortBy.map((option, index) => (
                <option value={option.value} selected className="color2">
                  {option.label}
                </option>
              ))}
            </select>
            <select
              className="custom-select my-1 mr-sm-2"
              id="sort-order"
              onChange={(e) => setSortOrder(e.target.value)}
            >
              {optionsSortOrder.map((option) => (
                <option value={option.value} selected>
                  {option.label}
                </option>
              ))}
            </select>
          </form>
        </div>
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
      <div className="row pl-2 pl-lg-0 mt-5">
        <div className="col-12 d-flex justify-content-center">
          <Pagination aria-label="Page navigation example">
            <PaginationItem>
              <PaginationLink
                first
                onClick={(e) => {
                  setCurrentPage(1);
                }}
              />
            </PaginationItem>
            {Array.from(Array(totalPage).keys()).map((data, index) => {
              return (
                <PaginationItem active={index + 1 === parseInt(currentPage)}>
                  <PaginationLink
                    onClick={(e) => {
                      setCurrentPage(index + 1);
                    }}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              );
            })}
            <PaginationItem>
              <PaginationLink
                last
                onClick={(e) => {
                  setCurrentPage(totalPage);
                }}
              />
            </PaginationItem>
          </Pagination>
        </div>
      </div>
      <div className="container-fluid pt-5 bg-white">
        <CustomFooter></CustomFooter>
      </div>
    </div>
  );
}

export default AllFilm;
