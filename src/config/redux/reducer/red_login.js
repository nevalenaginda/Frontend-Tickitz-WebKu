const initialState = {
  login: {
    id_user: null,
    access: null,
    token: "",
    profil_image: "",
    email: "",
  },
  loading: false,
  error: "",
};
const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        login: {
          ...state.login,
          ...action.payload,
        },
        loading: false,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "GET_PROFILE_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_PROFILE_SUCCESS":
      return {
        ...state,
        login: {
          ...state.login,
          ...action.payload,
        },
        loading: false,
      };

    case "GET_PROFILE_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "UPDATE_PROFILE_IMAGE":
      return {
        ...state,
        login: {
          ...state.login.profil_image,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};
export default loginReducer;
