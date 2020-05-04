import { watcherProductionBonus } from "../containers/production_bonus/SagaProductionBonus";
import { all } from "redux-saga/effects";
export default function* rootSaga() {
  yield all([watcherProductionBonus()]);
}
