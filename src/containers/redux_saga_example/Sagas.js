import { put, all, takeEvery } from "redux-saga/effects";
function* fetchNews() {
  const json = yield fetch("https://jsonplaceholder.typicode.com/todos/1").then(
    response => response.json()
  );
  console.log(json.title);
  yield put({ type: "NEWS_RECEIVED", json: json.title });
}
function* actionWatcher() {
  yield takeEvery("GET_NEWS", fetchNews);
}
export default function* rootSaga() {
  yield all([actionWatcher()]);
}
