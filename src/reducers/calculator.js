import {
  PRESS_BUTTON,
  PRESS_EQUALS,
  PRESS_RESET,
  SELECT_HISTORY,
  CLEAR_HISTORY
} from "../actions/index";

const INITIAL_STATE = { screen: "", history: [] };
const calculator = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRESS_BUTTON:
      const newStatePRESS_BUTTON = { ...state };
      console.log("PRESS_BUTTON");
      console.log(newStatePRESS_BUTTON);
      newStatePRESS_BUTTON.screen = state.screen + "" + action.value;
      return newStatePRESS_BUTTON;

    case PRESS_EQUALS:
      const newStatePRESS_EQUALS = { ...state };
      console.log("Equals");
      console.log(newStatePRESS_EQUALS);
      newStatePRESS_EQUALS.screen = eval(state.screen);
      newStatePRESS_EQUALS.history = state.history.concat(`${state.screen}`);
      return newStatePRESS_EQUALS;
    case PRESS_RESET:
      console.log("PRESS_RESET");
      return {
        ...state,
        screen: ""
      };
    case SELECT_HISTORY:
      let newStateSELECT_HISTORY = { ...state };
      console.log("SELECT_HISTORY");
      console.log(state.history[action.value]);
      newStateSELECT_HISTORY.screen = state.history[action.value];

      return newStateSELECT_HISTORY;

    case CLEAR_HISTORY:
      console.log("CLEAR_HISTORY");
      return {
        ...state,
        history: []
      };
    default:
      console.log("default");
      return state;
  }
};
export default calculator;
