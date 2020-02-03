const initial = { input: "" };
const ReducerSelectExample = (state = initial, action) => {
  switch (action.type) {
    case "GET_SELECT":
      console.log("GETSELECT");
      const stateGETSELECT = { ...state };
      stateGETSELECT.input = action.value;
      return stateGETSELECT;

    default:
      return state;
  }
};
export default ReducerSelectExample;
