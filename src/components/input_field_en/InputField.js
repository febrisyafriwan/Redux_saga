/*
Root component is from www.material-ui.com.
You can refer to the site above for documentation.
*/

import React from "react";
import TextField from "@material-ui/core/TextField";
import {
  validationText,
  validationNumber,
  validationEmail,
  validationUniqeText
} from "../../shared/formUtils";

import "./InputField.scss";

class InputField extends React.Component {
  isValid = "";

  constructor(props) {
    super(props);
    this.state = {
      // value: '',
      error: false,
      helperText: "",
      // showPassword: false,
      onSubmit: this.props.onSubmit === undefined ? false : this.props.onSubmit
    };

    this.onInput = this.onInput.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.validation(this.props.value);
  }

  onChange(e) {
    // console.log("===onChange: ", e.target.value);
    this.validation(e.target.value);
    this.props.onChange(e, this.isValid.flag);

    if (this.state.onSubmit === false) {
      this.setState({ onSubmit: true });
    }
  }

  onBlur(e) {
    this.props.onBlur(e.target.value);
  }

  onSubmit(e) {
    this.props.onSubmit(e);
  }

  onFocus(e) {
    this.props.onFocus(e);
  }

  onInput(e) {
    if (this.props.type === "number") {
      const regex = /[^0-9]/gi;
      const { value } = e.target;
      const max = parseInt(this.props.max, 0);
      const min = parseInt(this.props.min, 0);
      e.target.value = value.replace(regex, "");

      if (value > max) {
        e.target.value = max;
      }

      if (value < min) {
        e.target.value = min === 0 ? "" : min;
      }

      if (value.length > 1 && this.props.no0first) {
        if (value[0] === 0) {
          e.target.value = value.substring(1);
        }
      }
    }
    this.props.onInput(e);
  }

  validation(targetValue) {
    // console.log("[InputField]validation: ", targetValue);
    let minLength =
      this.props.minLength === undefined ? 0 : this.props.minLength;
    let required =
      this.props.required === undefined ? false : this.props.required;
    let value = targetValue === undefined ? "" : targetValue;
    let validatorAs =
      this.props.validationType === undefined
        ? this.props.type
        : this.props.validationType;
    // console.log("===value: ", value);

    if (validatorAs === "text") {
      this.isValid = validationText(value, minLength, required);
      // console.log("===isValid["+this.props.type+"]: ", this.isValid);
    } else if (validatorAs === "number" || validatorAs === "tel") {
      this.isValid = validationNumber(value, minLength, required);
      // console.log("===isValid["+this.props.type+"]: ", this.isValid);
    } else if (validatorAs === "email") {
      this.isValid = validationEmail(value, minLength, required);
      // console.log("===isValid["+this.props.type+"]: ", this.isValid);
    } else if (validatorAs === "unique-text") {
      this.isValid = validationUniqeText(value, minLength, required);
    }
    // console.log("===isValid: ", this.isValid);
  }

  render() {
    const {
      id,
      name,
      label,
      type,
      required,
      onBlur,
      onChange,
      className,
      helperText,
      placeholder,
      error,
      fullWidth,
      defaultValue,
      rows,
      rowsMax,
      style,
      disabled,
      onClick,
      value,
      maxLength,
      min,
      max,
      minLength,
      onSubmit,
      validationType //['text', 'number', 'tel', 'email']
    } = this.props;

    return (
      <div className="component-text-field">
        {/* html code below here */}
        <TextField
          id={id}
          name={name}
          label={label}
          type={type === "textbox" ? "text" : type}
          required={required}
          // onBlur={onBlur || this.onBlur}
          onChange={this.onChange}
          className={
            disabled === undefined || disabled === false
              ? className
              : `${className} disabled-inputfield`
          }
          // helperText={helperText || this.state.helperText}
          placeholder={placeholder}
          // error={error || this.state.error}
          // onSubmit={this.onSubmit}
          fullWidth={fullWidth}
          // onFocus={this.onFocus}
          onInput={this.onInput}
          defaultValue={defaultValue}
          multiline={type === "textbox"}
          rows={type === "textbox" ? rows : 0}
          rowsMax={type === "textbox" ? rowsMax : 0}
          style={{ style }}
          disabled={disabled}
          onClick={onClick}
          value={value}
          inputProps={{
            maxLength,
            min,
            max,
            minLength
          }}
        />
        <div className="validator-inputField">
          <p>
            {this.state.onSubmit === false &&
            (onSubmit === false || onSubmit === undefined)
              ? ""
              : this.isValid.message}
          </p>
        </div>
      </div>
    );
  }
}

export default InputField;
