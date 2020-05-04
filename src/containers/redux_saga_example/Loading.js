import React, { Component } from "react";
import { connect } from "react-redux";
import img from "../../../src/loading_spinner.gif";
import { Button } from "@material-ui/core";
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
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
      </React.Fragment>
    );
  }
}
function mapStateToProps(state) {
  console.log("loading");
  console.log(JSON.stringify(state.loading));
  return {
    loading: state.loading
  };
}

export default connect(mapStateToProps)(Loading);
