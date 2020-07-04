import { combineReducers } from "redux";
import { ReducerProductionBonus } from "../../src/containers/production_bonus/ReducerProductionBonus";
import { ReducerData } from "../../src/containers/keluarga_berencana/reducer";
export default combineReducers({
  ReducerProductionBonus,
  ReducerData
});
