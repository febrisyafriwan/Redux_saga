import React, { Component } from "react";
import { IntlProvider } from "react-intl";
import Main from "./containers/keluarga_berencana/main";
class App extends Component {
  render() {
    return (
      <IntlProvider locale="en">
        <div>
          <Main />
        </div>
      </IntlProvider>
    );
  }
}
export default App;
