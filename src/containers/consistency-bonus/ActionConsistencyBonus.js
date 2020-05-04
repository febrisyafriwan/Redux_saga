import {
  SET_LOADING_TRUE,
  SET_LOADING_FALSE,
  SET_ERROR_TRUE,
  SET_ERROR_FALSE,
  GET_CONSISTENCY_DATA_FETCH,
  GET_CONSISTENCY_DATA_FAILED,
  GET_CONSISTENCY_DATA_SUCCESS,
  SETUP_PARAMS
} from "./ConfigConsistencyBonus";

export const setLoadingTrue = () => ({
  type: SET_LOADING_TRUE
});
export const setLoadingFalse = () => ({
  type: SET_LOADING_FALSE
});
export const setErrorTrue = () => ({
  type: SET_ERROR_TRUE
});
export const setErrorFalse = () => ({
  type: SET_ERROR_FALSE
});
export const setupParams = value => ({
  type: SETUP_PARAMS,
  payload: value
});
export const getConsistencyFetch = value => ({
  type: GET_CONSISTENCY_DATA_FETCH,
  payload: value
});
export const getConsistencyFailed = () => ({
  type: GET_CONSISTENCY_DATA_FAILED
});
export const getConsistencySuccess = value => ({
  type: GET_CONSISTENCY_DATA_SUCCESS,
  payload: value
});
