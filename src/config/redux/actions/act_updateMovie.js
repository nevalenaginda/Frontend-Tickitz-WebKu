import axios from "axios";
const { REACT_APP_API_TICKET } = process.env;
const token = localStorage.getItem("token");
const configFormData = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export const updateMovie = (data, idMovie) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .patch(`${REACT_APP_API_TICKET}/movie/${idMovie}`, data, configFormData)
      .then((res) => {
        const result = res.data.data;
        // console.log(res);
        dispatch({ type: "UPDATE_MOVIE" });
        resolve(res);
      })
      .catch((err) => {
        // console.log(err.message);
        reject(err);
      });
  });
};
