import { watcherProductionBonus } from "../containers/production_bonus/SagaProductionBonus";
import { watcherKeluarga } from "../containers/keluarga_berencana/saga";
import { all } from "redux-saga/effects";
export default function* rootSaga() {
  yield all([watcherProductionBonus(), watcherKeluarga()]);
}
