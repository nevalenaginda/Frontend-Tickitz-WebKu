import axios from "axios";
const { REACT_APP_API_TICKET } = process.env;
const token = localStorage.getItem("token");
const configFormData = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

export const insertSchedule = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${REACT_APP_API_TICKET}/schedule`, data, configFormData)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
