import React, { Fragment, Component } from "react";
import Button from "@material-ui/core/Button";

import "./Button.scss";

class Buttons extends Component {
  render() {
    const { label, size, icon, disabled, className, onClick } = this.props;
    const isButtonDisabled =
      disabled !== undefined || disabled !== null ? disabled : false;
    return (
      <Fragment>
        <Button
          type="button"
          disabled={isButtonDisabled}
          size={size}
          className={className}
          onClick={onClick}
        >
          {icon && <i className={icon} />} {label}
        </Button>
      </Fragment>
    );
  }
}
export default Buttons;

// import React, { Fragment, Component } from 'react';

// class Button extends Component {
//   render() {
//     const Buttons = this.props.buttonData.map((item, index) => {
//       const {
//         label, className, onClick,
//       } = item;
//       const isButtonDisabled = (item.isButtonDisabled !== undefined || item.isButtonDisabled !== null) ? item.isButtonDisabled : false;

//       return <button type="button" key={index.toString()} className={className} disabled={isButtonDisabled} onClick={onClick}>{label}</button>;
//     });
//     return (
//       <Fragment>
//         {Buttons}
//       </Fragment>
//     );
//   }
// }
// export default Button;
