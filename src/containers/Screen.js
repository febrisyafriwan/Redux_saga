import React, { Component } from "react";
import { connect } from "react-redux";

class Screen extends Component {
  render() {
    return (
      <div className="row">
        <div className="screen">
          {!this.props.screen ? "0" : this.props.screen}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("screen");
  console.log(state.calculator.screen);
  return {
    screen: state.calculator.screen
  };
}

export default connect(mapStateToProps)(Screen);
