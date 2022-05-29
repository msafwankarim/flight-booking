import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useState } from "react";

export default function AlertDialog({
  visible,
  handleYes,
  handleCancel,
  title,
  description,
  yesLabel,
  noLabel,
}) {
  const [open, setOpen] = useState(visible);

  const handleClickOpen = () => {
    setOpen(true);
    handleYes();
  };

  const handleClose = () => {
    setOpen(false);
    handleCancel();
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{noLabel}</Button>
          <Button onClick={handleClickOpen} autoFocus>
            {yesLabel}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
