import { React, useEffect, useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { getUpComingMovies } from "../../config/redux/actions/act_home";

function UpComing() {
  window.scrollTo(0, 0);
  const dispatch = useDispatch();
  let {
    totalPageUpComing,
    currentPageUpComing,
    limitPageUpComing,
    upComingMovies,
  } = useSelector((state) => state.homePage);

  const history = useHistory();

  const useQuery = () => new URLSearchParams(useLocation().search);

  const params = useQuery();

  const page = params.get("page") ? params.get("page") : 1;
  const limit = params.get("limit") ? params.get("limit") : 5;
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("movie_title");
  const [sortOrder, setSortOrder] = useState("ASC");
  let searchKey = "";
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
  const search =
    searchQuery !== "" ? `&search-by=movie_title&item=${searchQuery}` : ``;
  const sort =
    sortBy === "movie_title" && sortOrder === "ASC"
      ? `&sort-by=movie_title&order=ASC`
      : `&sort-by=${sortBy}&order=${sortOrder}`;
  console.log("ini sort", sort);
  const handleSortBy = (e) => {
    setSortBy(e.target.value);
    console.log(sortBy);
    console.log(e.target.value);
  };

  const handlesortOrder = (e) => {
    setSortOrder(e.target.value);
    console.log(sortOrder);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    searchKey = e.target.value;
    if (e.target.value !== "") {
      history.push(
        `/upcoming-movies?page=1&limit=${limitPageUpComing}&search-by=movie-title&items=${searchKey}`
      );
    } else {
      history.push(`/upcoming-movies?page=1&limit=${limitPageUpComing}`);
    }
  };
  useEffect(() => {
    dispatch(getUpComingMovies(page, limit, search, sort));
  }, [
    page,
    totalPageUpComing,
    limitPageUpComing,
    limit,
    search,
    searchQuery,
    sortOrder,
    sortBy,
    sort,
    dispatch,
  ]);

  return (
    <div className="mt-5 pt-5">
      <div className="row justify-content-center">
        <div className="mt-5 mb-5 col-12 justify-content-center d-flex">
          <form className="form-inline">
            <label className="my-1 mr-2 f-md f-weight color2" htmlFor="search">
              Search Movie
            </label>
            <input
              type="text"
              id="search"
              onChange={handleSearch}
              className="formControl f-md f-weight color2 "
            />
            <label
              className="my-1 ml-3 mr-2 f-lmd f-weight color2"
              htmlFor="sort"
            >
              Sort by
            </label>
            <select
              className="custom-select my-1 mr-sm-2 f-lg f-weight color2"
              id="sort"
              onChange={handleSortBy}
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
              onChange={handlesortOrder}
            >
              {optionsSortOrder.map((option) => (
                <option value={option.value} selected>
                  {option.label}
                </option>
              ))}
            </select>
          </form>
        </div>
      </div>
      <div className="row pl-2 pl-lg-2">
        <div className="col-12 px-0 container-all-movie">
          {upComingMovies.length > 0
            ? upComingMovies.map((item) => {
                return (
                  <div className="card mt-5 mb-5 shadow">
                    <div className="card-all-movie">
                      <img src={item.image} alt={item.image} />
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
            : "Not Found"}
        </div>
      </div>
      <div className="row pl-2 pl-lg-0 mt-5">
        <div className="col-12 d-flex justify-content-center">
          {parseInt(totalPageUpComing) > 1 ? (
            <Pagination aria-label="Page navigation example">
              <PaginationItem>
                <PaginationLink
                  first
                  onClick={(e) => {
                    history.push(
                      `/upcoming-movies?page=1&limit=${limitPageUpComing}${search}`
                    );
                  }}
                />
              </PaginationItem>
              {Array.from(Array(totalPageUpComing).keys()).map(
                (data, index) => {
                  return (
                    <PaginationItem
                      active={index + 1 === parseInt(currentPageUpComing)}
                    >
                      <PaginationLink
                        onClick={(e) => {
                          history.push(
                            `/upcoming-movies?page=${
                              index + 1
                            }&limit=${limitPageUpComing}${search}`
                          );
                        }}
                      >
                        {index + 1}
                      </PaginationLink>
                    </PaginationItem>
                  );
                }
              )}
              <PaginationItem>
                <PaginationLink
                  last
                  onClick={(e) => {
                    history.push(
                      `/upcoming-movies?page=${totalPageUpComing}&limit=${limitPageUpComing}${search}`
                    );
                  }}
                />
              </PaginationItem>
            </Pagination>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default UpComing;
