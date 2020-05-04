import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
// import { HTTP_SERVICE } from '../../service/HttpService'
import {
  getProductionSuccess,
  getProductionFailed,
  getYearSuccess,
  getYearFailed,
  getProductionFetch
} from "./ActionProductionBonus";

// const delay = (ms) => new Promise(res => setTimeout(res, ms))

const data = {
  errorCode: 200,
  errorMsg: "",
  responseJSON: {
    array: [
      {
        result: {
          lastUpdate: "2020-02-20 14:37:26.367053",
          targetRollingPersistency: 80,
          achieveRollingPersistency: 100,
          targetApi: 2000000,
          achieveApi: 1100000,
          estimation: 500000,
          isAchieved: 0
        }
      }
    ],
    isSuccessful: true,
    statusCode: 200
  }
};

const year = {
  errorCode: 200,
  errorMsg: "",
  responseJSON: {
    array: [{ result: ["2020"] }],
    isSuccessful: true,
    statusCode: 200
  }
};

function* fetchProduction(body) {
  console.log("body of fetch production");
  console.log(body);
  let listReport = yield call(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 2000);
    });
  });
  return listReport;
}

function* fetchYear(body) {
  console.log("body of fetch year");
  console.log(body);
  let listReport = yield call(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(year);
      }, 2000);
    });
  });
  return listReport;
}

export function* workerGetDataProduction(action) {
  try {
    const response = yield call(fetchProduction, action.payload);
    // console.log(response);
    if (response) {
      console.log("success");
      yield put(getProductionSuccess(response));
    } else {
      console.log("failed");
      yield put(getProductionFailed());
    }
  } catch (error) {
    yield put(getProductionFailed());
    console.log("error", error);
  }
}

export function* workerGetYearProduction(action) {
  try {
    const paramYear = {
      isPruforce: true
    };
    const paramData = {
      agentNumber: action.payload.agentNumber,
      year: action.payload.year
    };
    const response = yield call(fetchYear, paramYear);

    // console.log(response);
    if (response) {
      console.log("success");
      yield put(getYearSuccess(response));
      yield put(getProductionFetch(paramData));
    } else {
      console.log("failed");
      yield put(getYearFailed());
    }
  } catch (error) {
    yield put(getYearFailed());
    console.log("error", error);
  }
}

export function* watcherProductionBonus() {
  yield takeLatest("GET_PRODUCTION_DATA_FETCH", workerGetDataProduction);
  yield takeEvery("GET_PRODUCTION_YEAR_FETCH", workerGetYearProduction);
}
