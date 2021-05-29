const initialState = {
  movie_selected: null,
  schedule_selected: null,
  selected_seat: [],
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SELECT_PLAYLIST":
      return {
        ...state,
        movie_selected: action.movie,
        schedule_selected: action.schedule,
      };

    case "SELECT_SEAT":
      return {
        ...state,
        selected_seat: action.payload,
      };

    case "RESET_ORDER":
      return {
        ...state,
        selected_seat: [],
        movie_selected: null,
        schedule_selected: null,
      };

    default:
      return state;
  }
};
export default orderReducer;
