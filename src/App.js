import React, { Component } from "react";
// import Button from "./containers/redux_saga_example/Button";
// import NewsItem from "./containers/redux_saga_example/NewsItem";
// import Loading from "./containers/redux_saga_example/Loading";
import { IntlProvider } from "react-intl";
import ProductionBonus from "./containers/production_bonus/ProductionBonus";
// import BonusConsistency from "./containers/bonus-consistency/BonusConsistency";
class App extends Component {
  render() {
    return (
      <IntlProvider locale="en">
        <div>
          <ProductionBonus />
          {/* {<BonusConsistency />} */}
          {/* <Loading />
        <NewsItem /> */}
        </div>
      </IntlProvider>
    );
  }
}
export default App;
