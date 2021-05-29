import axios from "axios";
const { REACT_APP_API_TICKET } = process.env;
const token = localStorage.getItem("token");
const configFormData = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export const insertMovie = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${REACT_APP_API_TICKET}/movie`, data, configFormData)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getAllMovies = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${REACT_APP_API_TICKET}/movie`, configFormData)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const updateMovie = (data, idMovie) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .patch(`${REACT_APP_API_TICKET}/movie/${idMovie}`, data, configFormData)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
