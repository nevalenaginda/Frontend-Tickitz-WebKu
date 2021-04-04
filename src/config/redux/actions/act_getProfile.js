import axios from "axios";
const { REACT_APP_API_TICKET } = process.env;
const token = localStorage.getItem("token");
const config = {
  headers: {
    Authorization: `Bearer: ${token}`,
  },
};

const getProfileRequest = () => {
  return { type: "GET_PROFILE_REQUEST" };
};

const getProfileSuccess = (dataUser) => {
  return { type: "GET_PROFILE_SUCCESS", payload: dataUser };
};

const getProfileFailure = (error) => {
  return { type: "GET_PROFILE_FAILURE", payload: error };
};

export const getProfile = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch(getProfileRequest());
    axios
      .get(`${REACT_APP_API_TICKET}/user/profile`, config)
      .then((res) => {
        const result = res.data.data;
        console.log("ini data profile", res);
        dispatch(getProfileSuccess(result));
        resolve(res);
      })
      .catch((err) => {
        console.log(err);
        dispatch(getProfileFailure(err.response.data.information.message));
        reject(err);
      });
  });
};
