import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "../../components/button-mub/Button";
import { bindActionCreators } from "redux";
import { Press } from "./ActionButtonExample";
class ButtonExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonState: this.props.buttonState
    };
  }
  onClick = () => {
    // this.setState({
    //   buttonState: 1,
    // });
    this.props.Press();
  };

  render() {
    const { buttonState } = this.props;
    return (
      <React.Fragment>
        <div>
          <h4>{buttonState}</h4>
          <Button
            label="Click me"
            size="large"
            onClick={this.onClick}
            className="btn-all red"
          />
        </div>
      </React.Fragment>
    );
  }
}
function mapStateToProps(state) {
  console.log("ButtonState");
  console.log(state.ReducerButtonExample.ButtonState);
  return {
    buttonState: state.ReducerButtonExample.ButtonState
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ Press }, dispatch);
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonExample);
