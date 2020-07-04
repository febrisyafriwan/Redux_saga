import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
// import { HTTP_SERVICE } from '../../service/HttpService'
import {
  getAllDataSuccess,
  getAllDataFailed,
  addDataSuccess,
  addDataFailed
} from "./Action";

function* fetchAllData() {
  const json = yield fetch("http://localhost:8080/getAll", {
    method: "POST",
    headers: { "Content-Type": "application/json" }
  }).then(response => response.json());
  //If response is in json then in success
  return json;
}
function* addData(body) {
  const json = yield fetch("http://localhost:8080/upload", {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" }
  }).then(response => response.json());
  return json;
}

export function* workerGetAllData() {
  try {
    const response = yield call(fetchAllData);
    // console.log(response)
    if (response) {
      console.log("success");
      yield put(getAllDataSuccess(response));
    } else {
      console.log("failed");
      yield put(getAllDataFailed(response.message));
    }
  } catch (error) {
    yield put(getAllDataFailed());
    console.log("error", error);
  }
}

export function* workerAddAccount(action) {
  try {
    const response = yield call(addData, action.payload);
    console.log(response);
    if (response) {
      console.log("success");
      yield put(addDataSuccess());
    } else {
      console.log("failed");
      yield put(addDataFailed());
    }
  } catch (error) {
    yield put(addDataFailed());
    console.log("error", error);
  }
}

export function* watcherKeluarga() {
  yield takeLatest("getAllAccount", workerGetAllData);
  yield takeEvery("addAccount", workerAddAccount);
}
