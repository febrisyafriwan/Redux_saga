import {
  SET_LOADING_TRUE,
  SET_LOADING_FALSE,
  SET_ERROR_TRUE,
  SET_ERROR_FALSE,
  GET_CONSISTENCY_DATA_FETCH,
  GET_CONSISTENCY_DATA_SUCCESS,
  GET_CONSISTENCY_DATA_FAILED,
  SETUP_PARAMS
} from "./ConfigConsistencyBonus";

const initialState = {
  action: null,
  isLoading: true,
  isError: false,
  consistencyData: [],
  params: {
    agentNumber: ""
  }
};

const ReducerConsistencyBonus = (state = initialState, action) => {
  switch (action.type) {
    case SETUP_PARAMS:
      return {
        ...state,
        isLoading: true,
        isError: false,
        params: action.payload,
        action: action.type
      };

    case GET_CONSISTENCY_DATA_FETCH:
      console.log("fetch");
      return {
        ...state,
        isLoading: true,
        isError: false,
        action: action.type
      };

    case GET_CONSISTENCY_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        consistencyData: action.payload,
        action: action.type
      };

    case GET_CONSISTENCY_DATA_FAILED:
      return {
        ...state,
        isLoading: false,
        isError: true,
        action: action.type
      };
    case SET_LOADING_TRUE:
      return {
        ...state,
        action: action.type,
        isLoading: true
      };
    case SET_LOADING_FALSE:
      return {
        ...state,
        action: action.type,
        isLoading: false
      };
    case SET_ERROR_TRUE:
      return {
        ...state,
        action: action.type,
        isError: true,
        isLoading: false
      };
    case SET_ERROR_FALSE:
      return {
        ...state,
        action: action.type,
        isError: false
      };
    default:
      return state;
  }
};
export default ReducerConsistencyBonus;
