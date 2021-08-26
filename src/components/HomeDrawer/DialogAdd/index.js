import { React } from "react";
import {
  Dialog,
  DialogContent,
  TextField,
  DialogActions,
  Button,
} from "@material-ui/core";

const DialogAdd = (props) => {
  const { open, Transition, handleClose, handleChange, newTitle, handleAdd } =
    props;

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
    >
      <DialogContent>
        <TextField
          className="dialog-new-list-title"
          placeholder="Add a new title..."
          onChange={handleChange}
          value={newTitle}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleAdd} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DialogAdd;
