import axios from "axios";
const Url = process.env.REACT_APP_API_TICKET;

export const loginProcess = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    axios
      .post(`${Url}/user/login`, data)
      .then((res) => {
        const { id_user, token } = res.data.data;
        dispatch({ type: "LOGIN", payload: res.data.data });
        localStorage.setItem("token", token || "");
        localStorage.setItem("id_user", id_user || "");
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const getProfile = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer: ${token}`,
      },
    };
    axios
      .get(`${Url}/user/profile`, config)
      .then((res) => {
        const result = res.data.data;
        dispatch({ type: "GET_DATA_USER", payload: result });
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
