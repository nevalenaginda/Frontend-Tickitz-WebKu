const initialState = {
  nowShowingMovies: [],
  totalPageNowShowing: 0,
  currentPageNowShowing: 0,
  limitPageNowShowing: 0,
  upComingMovies: [],
  totalPageUpComing: 0,
  currentPageUpComing: 0,
  limitPageUpComing: 0,
  navBarSearch: "",
};

const homeReducer = (state = initialState, action) => {
  if (action.type === "GET_NOWSHOWING") {
    return {
      ...state,
      nowShowingMovies: action.payload,
      totalPageNowShowing: action.total,
      currentPageNowShowing: action.current,
      limitPageNowShowing: action.limit,
    };
  } else if (action.type === "GET_UPCOMING") {
    return {
      ...state,
      upComingMovies: action.payload,
      totalPageUpComing: action.total,
      currentPageUpComing: action.current,
      limitPageUpComing: action.limit,
    };
  } else if (action.type === "SEARCH_NOWSHOWING_NOT_FOUND") {
    return {
      ...state,
      nowShowingMovies: action.payload,
      totalPageNowShowing: action.total,
    };
  } else if (action.type === "SEARCH_UPCOMING_NOT_FOUND") {
    return {
      ...state,
      upComingMovies: action.payload,
      totalPageUpComing: action.total,
    };
  } else if (action.type === "SEARCH_MOVIE") {
    return {
      ...state,
      navBarSearch: action.payload,
    };
  } else {
    return state;
  }
};

export default homeReducer;
