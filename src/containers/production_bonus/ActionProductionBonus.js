import {
  SET_LOADING_TRUE,
  SET_LOADING_FALSE,
  SET_ERROR_TRUE,
  SET_ERROR_FALSE,
  GET_PRODUCTION_DATA_FETCH,
  GET_PRODUCTION_DATA_FAILED,
  GET_PRODUCTION_DATA_SUCCESS,
  GET_PRODUCTION_YEAR_FETCH,
  GET_PRODUCTION_YEAR_FAILED,
  GET_PRODUCTION_YEAR_SUCCESS
} from "./ConfigProductionBonus";

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

export const getProductionFetch = value => ({
  type: GET_PRODUCTION_DATA_FETCH,
  payload: value
});
export const getProductionFailed = () => ({
  type: GET_PRODUCTION_DATA_FAILED
});
export const getProductionSuccess = value => ({
  type: GET_PRODUCTION_DATA_SUCCESS,
  payload: value
});
export const getYearFetch = value => ({
  type: GET_PRODUCTION_YEAR_FETCH,
  payload: value
});
export const getYearFailed = () => ({
  type: GET_PRODUCTION_YEAR_FAILED
});
export const getYearSuccess = value => ({
  type: GET_PRODUCTION_YEAR_SUCCESS,
  payload: value
});
