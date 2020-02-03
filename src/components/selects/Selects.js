/*
Root component is from www.material-ui.com.
You can refer to the site above for documentation.
*/

import React from "react";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { validationSelect } from "../../shared/formUtils";

import "./Select.scss";
import { width, minWidth } from "@material-ui/system";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  }
});

class Selects extends React.Component {
  isValid = "";

  constructor(props) {
    super(props);
    this.state = {
      value: this.initValue(),
      onSubmit: this.props.onSubmit === undefined ? false : this.props.onSubmit,
      valueColor: this.initValueFieldStyle()
    };

    this.handleChange = this.handleChange.bind(this);
    this.validation(this.props.value);
    this.initValueFieldStyle();
  }

  componentWillUnmount() {}

  initValue() {
    return this.props.placeholder !== undefined &&
      (this.props.value === "" || this.props.value === undefined)
      ? "placeholder"
      : this.props.value;
  }

  initValueFieldStyle() {
    if (this.props.value === "" || this.props.value === undefined) {
      if (this.props.disabled === true) {
        return "#9e9eb6"; //disabled color abu2
      } else {
        if (this.props.placeholder !== undefined) {
          return "#c4c5c7"; //placeholder color abu2
        } else {
          return "#595970"; //value color  biru kehitaman
        }
      }
    } else if (this.props.value !== "") {
      if (this.props.disabled === true) {
        return "#9e9eb6"; //disabled color
      } else {
        return "#595970"; //value color
      }
    }
  }

  handleChange = e => {
    // console.log("[Select]handleChange name: "+name+"  value: " + value);
    this.setState({
      [e.target.name]: e.target.value,
      value: e.target.value,
      valueColor: "#595970"
    });

    if (this.props.onChange) {
      this.validation(e.target.value);

      let question;
      if (this.props.options !== undefined) {
        for (let i = 0; i < this.props.options.length; i++) {
          if (this.props.options[i].value === e.target.value) {
            question = this.props.options[i].question;
          }
        }
      }
      let index;
      if (this.props.index !== undefined) {
        index = this.props.index;
      }

      this.props.onChange(
        e.target.name,
        e.target.value,
        this.isValid.flag,
        question,
        index
      );
    }

    if (this.state.onSubmit === false) {
      this.setState({ onSubmit: true });
    }

    // console.log("[Select]handleChange state: ", this.state);
  };

  validation(valueSelected) {
    // console.log("[Select]validation("+this.props.label+")");
    let required =
      this.props.required === undefined ? false : this.props.required;
    let value = valueSelected === undefined ? "" : valueSelected;
    this.isValid = validationSelect(value, required);
    console.log(this.isValid.message);
  }

  onFocus(e) {
    // let {name, value} = e.target;
    // console.log("[Select]onFokus name: "+name+"  value: " + value);
  }

  render() {
    const {
      id,
      name,
      label,
      required,
      onChange,
      className,
      options,
      classes,
      disabled,
      value,
      onSubmit, //[true, false]
      placeholder
    } = this.props;
    return (
      // <div className={classes.root}>
      <div className="component-select" onClick={this.onFocus}>
        <FormControl fullWidth className={className} disabled={disabled}>
          <InputLabel
            htmlFor={id}
            style={{ fontSize: "1.4em", paddingBottom: "1em" }}
          >
            {label}
          </InputLabel>

          <Select
            value={value}
            onChange={this.handleChange}
            style={{
              height: "37px",
              fontSize: "1.35em",
              color: this.state.valueColor,
              width: "100%",
              minWidth: "200px"
            }}
            onFocus={this.onFocus}
            inputProps={{
              name: name,
              id: id
            }}
            IconComponent={props => (
              <i
                {...props}
                className="ion-chevron-down"
                style={{ position: "absolute", right: "10px", top: "5px" }}
              />
            )}
          >
            {placeholder !== undefined && (
              <MenuItem value="placeholder" className="placeholder" disabled>
                {placeholder}
              </MenuItem>
            )}

            {options &&
              options.map(function(option, index) {
                return (
                  <MenuItem key={index} value={option.value}>
                    {option.question}
                    {option.desc !== undefined && (
                      <span className="select-component-description">
                        {option.desc}
                      </span>
                    )}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
        <div className="validator-select">
          <p>
            {this.state.onSubmit === false &&
            (onSubmit === undefined || onSubmit === false)
              ? ""
              : this.isValid.message}
          </p>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Selects);
