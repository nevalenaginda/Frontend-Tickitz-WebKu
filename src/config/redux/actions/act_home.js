import axios from "axios";
const { REACT_APP_API_TICKET } = process.env;

export const getNowShowingMovies = (
  page = 1,
  limit = 5,
  search = "",
  sort = ""
) => {
  return (dispatch) => {
    axios
      .get(
        `${REACT_APP_API_TICKET}/movie/nowshowing?page=${page}&limit=${limit}${search}${sort}`
      )
      .then((res) => {
        dispatch({
          type: "GET_NOWSHOWING",
          payload: res.data.data,
          total: res.data.pagination.totalPage,
          current: res.data.pagination.page,
          limit: res.data.pagination.limit,
        });
      })
      .catch((err) => {
        dispatch(searchNowShowingMoviesNotFound());
      });
  };
};

export const getUpComingMovies = (
  page = 1,
  limit = 5,
  search = "",
  sort = ""
) => {
  return (dispatch) => {
    axios
      .get(
        `${REACT_APP_API_TICKET}/movie/upcoming?page=${page}&limit=${limit}${search}${sort}`
      )
      .then((res) => {
        dispatch({
          type: "GET_UPCOMING",
          payload: res.data.data,
          total: res.data.pagination.totalPage,
          current: res.data.pagination.page,
          limit: res.data.pagination.limit,
        });
      })
      .catch((err) => {
        console.log(err.message);
        dispatch(searchUpComingMoviesNotFound());
      });
  };
};

export const searchNowShowingMoviesNotFound = (res) => {
  return (dispatch) => {
    dispatch({
      type: "SEARCH_NOWSHOWING_NOT_FOUND",
      payload: [],
      total: 1,
    });
  };
};

export const searchUpComingMoviesNotFound = (res) => {
  return (dispatch) => {
    dispatch({
      type: "SEARCH_UPCOMING_NOT_FOUND",
      payload: [],
      total: 1,
    });
  };
};
