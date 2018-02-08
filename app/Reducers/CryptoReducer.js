import {
  FETCHING_COIN_DATA,
  FETCHING_COIN_DATA_FAIL,
  FETCHING_COIN_DATA_SUCCESS
} from "./../Utils/ActionTypes";

const initialState = {
  data: [],
  hasError: false,
  isFetching: null,
  errorMessage: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCHING_COIN_DATA:
      return Object.assign({}, state, {
        data: null,
        hasError: false,
        isFetching: true,
        errorMessage: null
      });

    case FETCHING_COIN_DATA_SUCCESS:
      return Object.assign({}, state, {
        hasError: false,
        isFetching: true,
        errorMessage: null,
        data: action.payload
      });

    case FETCHING_COIN_DATA_FAIL:
      return Object.assign({}, state, {
        hasError: true,
        isFetching: true,
        data: action.payload,
        errorMessage: action.err
      });

    default:
      return state;
  }
}
