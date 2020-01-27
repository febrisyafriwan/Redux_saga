import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getInput } from "./Actions";
import InputField from "../../components/input_field_en/InputField";
class Input extends Component {
  onChange(input) {
    this.props.getInput(input);
  }
  render() {
    return (
      <React.Fragment>
        <InputField
          type="text"
          fullWidth
          label={"Input"}
          onChange={this.onChange}
          validationType={"unique-text"}
        />
        <div>
          <p>input</p>
        </div>
      </React.Fragment>
    );
  }
}
function mapStateToProps(state) {
  console.log("input");
  console.log(JSON.stringify(state.Reducers.input));
  return {
    input: state.Reducers.input
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getInput }, dispatch);
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Input);
