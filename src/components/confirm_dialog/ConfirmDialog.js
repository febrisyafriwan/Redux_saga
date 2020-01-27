import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "../button-mub/Button";
// import Button from '@material-ui/core/Button';

import "./ConfirmDialog.scss";

class ConfirmDialog extends React.Component {
  render() {
    const { open, onClose, title, content, btnLabel, className } = this.props;

    return (
      <React.Fragment>
        <Dialog open={open} onClose={onClose} className={className}>
          <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {content}
            </DialogContentText>
          </DialogContent>

          <DialogActions>
            {/* <Button onClick={onClose}>Ok</Button> */}
            <Button
              label={btnLabel}
              size="large"
              className="btn-all red mt-25"
              onClick={onClose}
            />
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
}

export default ConfirmDialog;
