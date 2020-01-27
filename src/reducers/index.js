import { combineReducers } from "redux";
import calculator from "./calculator";
import ReducerPendaftaranAAJI from "../containers/pendaftaran_aaji/ReducerPendaftaranAAJI";
import ReducerButtonExample from "../containers/button_example/ReducerButtonExample";
import Reducers from "../containers/redux_saga_example/Reducers";
export default combineReducers({
  // calculator,
  // pendaftaranAAJI: ReducerPendaftaranAAJI,
  // ReducerButtonExample,
  Reducers
});
