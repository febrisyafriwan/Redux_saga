import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getInput } from "./ActionInputExample";
import InputField from "../../components/input_field_en/InputField";
class InputExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // value: '',
      value: ""
    };
    this.onInput = this.onInput.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onInput(input) {
    this.props.getInput(input.target.value);
  }

  onChange(input, e) {
    console.log(e);
  }

  render() {
    const { input } = this.props;
    return (
      <React.Fragment>
        <InputField
          type="number"
          fullWidth
          label="Input Here"
          onInput={this.onInput}
          onChange={this.onChange}
          required={true}
          minLength={5}
          validationType={"unique-text"}
        />
        {input}
        {/* {this.state.value} */}
      </React.Fragment>
    );
  }
}
function mapStateToProps(state) {
  console.log("input");
  console.log(state.ReducerInputExample.input);
  return {
    input: state.ReducerInputExample.input
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getInput }, dispatch);
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InputExample);
