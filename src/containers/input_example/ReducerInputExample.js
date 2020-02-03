const initial = { input: "" };
const ReducerInputExample = (state = initial, action) => {
  switch (action.type) {
    case "GET_INPUT":
      console.log("GETINPUT");
      const stateGETINPUT = { ...state };
      stateGETINPUT.input = action.value;
      return stateGETINPUT;

    default:
      return state;
  }
};
export default ReducerInputExample;
