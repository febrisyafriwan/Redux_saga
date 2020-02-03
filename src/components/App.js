import React, { Component } from "react";
// import Screen from "../containers/Screen";
// import ButtonList from "../containers/ButtonList";
// import History from "../containers/History";
// import Demo from "../containers/pendaftaran_aaji/PendaftaranAAJI";
import Button from "../containers/redux_saga_example/Button";
import NewsItem from "../containers/redux_saga_example/NewsItem";
import Loading from "../containers/redux_saga_example/Loading";
import InputExample from "../containers/input_example/InputExample";
import SelectExample from "../containers/select_example/SelectExample";

// import ButtonDemo from "../containers/button_example/ButtonExample";
class App extends Component {
  render() {
    return (
      <div className="row">
        {/* <div className="col-sm-12">
          <h3 className="mt-4">
            <i className="fa fa-calculator" />
            Calculator React Redux
          </h3>
        </div>
        <div className="col-sm-8">
          <Screen />
        </div>
        <div className="col-sm-8">
          <h5>Buttons</h5>
          <ButtonList />
        </div>
        <div className="col-sm-4">
          <History />
        </div> */}
        {/* <Button />
        <Loading />
        <NewsItem /> */}
        {<SelectExample />}
        {/* <ButtonDemo /> */}
      </div>
    );
  }
}
export default App;
