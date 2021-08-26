import { React } from "react";
import { Dialog } from "@material-ui/core";
import "./styles.css";

const AddCategory = (props) => {
  const { open, handleClose, handleChange, newTitle, handleAdd, setNewTitle } =
    props;

  return (
    <Dialog
      open={open}
      keepMounted
      onClose={handleClose}
      className="dialog-container"
    >
      <div className="add-category-header">New Category:</div>
      <div className="add-category-content">
        <div className="add-category-input-container">
          <input
            type="text"
            placeholder="New category..."
            onChange={handleChange}
            value={newTitle}
            maxLength={21}
          />
        </div>
        <div className="add-category-btn-container">
          <button className="add-category-closebtn" onClick={handleClose}>
            Cancel
          </button>
          <button className="add-category-addbtn" onClick={handleAdd}>
            Add
          </button>
        </div>
      </div>
    </Dialog>
  );
};

export default AddCategory;
