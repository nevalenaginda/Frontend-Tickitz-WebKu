import axios from "axios";
const { REACT_APP_API_TICKET } = process.env;
const token = localStorage.getItem("token");
const configFormData = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export const getAllCinemas = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${REACT_APP_API_TICKET}/cinema`, configFormData)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
