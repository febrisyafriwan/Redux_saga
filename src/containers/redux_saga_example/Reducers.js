const initial = { news: "", loading: false, input: "" };
const reducer = (state = initial, action) => {
  switch (action.type) {
    case "GET_NEWS":
      console.log("GETNEWS");
      const stateGETNEWS = { ...state };
      stateGETNEWS.loading = true;
      return stateGETNEWS;

    case "GET_INPUT":
      console.log("GETINPUT");
      const stateGETINPUT = { ...state };
      stateGETINPUT.input = action.value;
      return stateGETINPUT;

    case "NEWS_RECEIVED":
      console.log("NEWS_RECEIVED");
      console.log(action);
      const stateNEWS_RECEIVED = { ...state };
      stateNEWS_RECEIVED.loading = false;
      stateNEWS_RECEIVED.news = action.json;
      return stateNEWS_RECEIVED;
    default:
      return state;
  }
};
export default reducer;
