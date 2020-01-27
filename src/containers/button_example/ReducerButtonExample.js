import { PRESSED } from "./ConfigButtonExample";

const initialState = {
  ButtonState: 0
};

const ReducerButtonExample = (state = initialState, action) => {
  switch (action.type) {
    case PRESSED:
      const newStateButton = { ...state };
      newStateButton.ButtonState = state.ButtonState + 1;
      return newStateButton;

    default:
      return state;
  }
};
export default ReducerButtonExample;
