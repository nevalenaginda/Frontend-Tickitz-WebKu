import axios from "axios";
const { REACT_APP_API_TICKET } = process.env;

const loginRequest = () => {
  return { type: "LOGIN_REQUEST" };
};

const loginSuccess = (dataUser) => {
  return { type: "LOGIN_SUCCESS", payload: dataUser };
};

const loginFailure = (error) => {
  return { type: "LOGIN_FAILURE", payload: error };
};

export const loginProcess = (data) => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch(loginRequest());
    axios
      .post(`${REACT_APP_API_TICKET}/user/login`, data)
      .then((res) => {
        const { id_user, token, access } = res.data.data;
        dispatch(loginSuccess(res.data.data));

        localStorage.setItem("id_user", id_user || null);
        localStorage.setItem("access", access);
        localStorage.setItem("token", token || "");
        resolve(res);
      })
      .catch((err) => {
        console.log(err);
        dispatch(loginFailure(err.response.data.information.message));
        reject(err);
      });
  });
};
