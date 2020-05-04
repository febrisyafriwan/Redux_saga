import {
  GET_PRODUCTION_DATA_FETCH,
  GET_PRODUCTION_DATA_SUCCESS,
  GET_PRODUCTION_DATA_FAILED,
  GET_PRODUCTION_YEAR_FETCH,
  GET_PRODUCTION_YEAR_SUCCESS,
  GET_PRODUCTION_YEAR_FAILED
} from "./ConfigProductionBonus";

const initialState = {
  action: null,
  isLoading: false,
  isError: false,
  dataEstimation: {},
  dataYear: {}
};

export const ReducerProductionBonus = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTION_DATA_FETCH:
      console.log("fetching data");
      const stateGET_PRODUCTION_DATA_FETCH = { ...state };
      stateGET_PRODUCTION_DATA_FETCH.isLoading = true;
      stateGET_PRODUCTION_DATA_FETCH.action = action.type;
      stateGET_PRODUCTION_DATA_FETCH.isError = false;
      return stateGET_PRODUCTION_DATA_FETCH;

    case GET_PRODUCTION_DATA_SUCCESS:
      const stateGET_PRODUCTION_DATA_SUCCESS = { ...state };
      stateGET_PRODUCTION_DATA_SUCCESS.isLoading = false;
      stateGET_PRODUCTION_DATA_SUCCESS.action = action.type;
      stateGET_PRODUCTION_DATA_SUCCESS.isError = false;
      stateGET_PRODUCTION_DATA_SUCCESS.dataEstimation = action.payload;
      return stateGET_PRODUCTION_DATA_SUCCESS;

    case GET_PRODUCTION_DATA_FAILED:
      const stateGET_PRODUCTION_DATA_FAILED = { ...state };
      stateGET_PRODUCTION_DATA_FAILED.isLoading = false;
      stateGET_PRODUCTION_DATA_FAILED.action = action.type;
      stateGET_PRODUCTION_DATA_FAILED.isError = true;
      return stateGET_PRODUCTION_DATA_FAILED;

    case GET_PRODUCTION_YEAR_FETCH:
      console.log("fetching year");
      const stateGET_PRODUCTION_YEAR_FETCH = { ...state };
      stateGET_PRODUCTION_YEAR_FETCH.action = action.type;
      stateGET_PRODUCTION_YEAR_FETCH.isError = false;
      return stateGET_PRODUCTION_YEAR_FETCH;

    case GET_PRODUCTION_YEAR_SUCCESS:
      const stateGET_PRODUCTION_YEAR_SUCCESS = { ...state };
      stateGET_PRODUCTION_YEAR_SUCCESS.action = action.type;
      stateGET_PRODUCTION_YEAR_SUCCESS.isError = false;
      stateGET_PRODUCTION_YEAR_SUCCESS.dataYear = action.payload;
      return stateGET_PRODUCTION_YEAR_SUCCESS;

    case GET_PRODUCTION_YEAR_FAILED:
      const stateGET_PRODUCTION_YEAR_FAILED = { ...state };
      stateGET_PRODUCTION_YEAR_FAILED.action = action.type;
      stateGET_PRODUCTION_YEAR_FAILED.isError = true;
      return stateGET_PRODUCTION_YEAR_FAILED;

    default:
      return state;
  }
};
