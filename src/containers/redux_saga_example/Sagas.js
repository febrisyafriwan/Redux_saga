import { put, takeEvery } from "redux-saga/effects";
// import { combineReducers } from "redux";
function* fetchNews() {
  const json = yield fetch("https://jsonplaceholder.typicode.com/todos/1").then(
    response => response.json()
  );
  console.log(json.title);
  yield put({ type: "NEWS_RECEIVED", json: json.title });
}
export default function* actionWatcher() {
  yield takeEvery("GET_NEWS", fetchNews);
}
