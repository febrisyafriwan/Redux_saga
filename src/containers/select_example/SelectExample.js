import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getSelect } from "./ActionSelectExample";
import Selects from "../../components/selects/Selects";
class SelectExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // value: '',
      value: ""
    };
    this.onChangeSelect = this.onChangeSelect.bind(this);
  }

  onChangeSelect(name, value, isValid, text) {
    console.log(value);
    console.log(name);
    this.props.getSelect(value);
  }

  render() {
    const { input } = this.props;
    return (
      <React.Fragment>
        <Selects
          name="select"
          onChange={this.onChangeSelect}
          label="Label"
          required={true}
          value={input}
          disabled={false}
          // onSubmit = {true}
          // onSubmit={onSubmit}
          options={this.props.option}
        />
        {input}
        {/* {this.state.value} */}
      </React.Fragment>
    );
  }
}
function mapStateToProps(state) {
  console.log("input");
  console.log(state.ReducerSelectExample.input);
  return {
    option: [
      { value: 1, question: "10.00 - 12.00", desc: "(Kuata tersisa: 10/100)" },
      { value: 2, question: "13.00 - 15.00", desc: "(Kuata tersisa: 20/100)" },
      { value: 3, question: "15.00 - 17.00", desc: "(Kuata tersisa: 30/100)" }
    ],
    input: state.ReducerSelectExample.input
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getSelect }, dispatch);
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectExample);
