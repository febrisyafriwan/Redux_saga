import React, { Component } from "react";
import { connect } from "react-redux";
import img from "../../../src/loading_spinner.gif";

class Loading extends Component {
  render() {
    const { loading } = this.props;
    return (
      <React.Fragment>
        {loading && (
          <div style={{ textAlign: "center" }}>
            <img src={img} alt="loading" />
          </div>
        )}
      </React.Fragment>
    );
  }
}
function mapStateToProps(state) {
  console.log("loading");
  console.log(JSON.stringify(state.Reducers.loading));
  return {
    loading: state.Reducers.loading
  };
}

export default connect(mapStateToProps)(Loading);
