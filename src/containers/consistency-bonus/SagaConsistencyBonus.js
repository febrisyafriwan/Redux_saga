import { call, put, takeLatest } from "redux-saga/effects";
// import { HTTP_SERVICE } from '../../service/HttpService'
import {
  getConsistencySuccess,
  getConsistencyFailed
} from "./ActionConsistencyBonus";

// const delay = (ms) => new Promise(res => setTimeout(res, ms))
const data = [
  {
    period: "Q12020",
    is_achieved: 0,
    agent_name: "ESTXXXXXXXXXXXXXXX",
    agent_number: "00006449",
    target_case: 3,
    snap_date: "2020-02-19",
    achieve_api: 5395886.98,
    target_api: 15000000,
    achieve_case: 0
  }
];

function* fetch(body) {
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

// function* fetchConsistensy(body) {
// let tempBody = JSON.stringify(body)
// const requestCalc = {
//   adapter: 'HTTPAdapterCompensationBonus',
//   procedure: 'getConsistencyBonus',
//   method: 'POST',
//   timeout: 10000,
//   body: {
//     params: `['${tempBody}']`
//   }
// }
// return HTTP_SERVICE.sendThroughMF(requestCalc);
// }

export function* workerGetDataConsistency(action) {
  try {
    const response = yield call(fetch, action.payload);
    // console.log(response);
    if (response) {
      console.log("success");
      yield put(getConsistencySuccess(response));
    } else {
      console.log("failed");
      yield put(getConsistencyFailed());
    }
  } catch (error) {
    yield put(getConsistencyFailed());
    console.log("error saga", error);
  }
}

// export const watcherConsistencyBonus = [
//   takeEvery(GET_CONSISTENCY_DATA_FETCH, workerGetDataConsistency)
// ];

export default function* watcherConsistencyBonus() {
  // yield takeLatest("GET_CONSISTENCY_DATA_FETCH", workerGetDataConsistency);
}
