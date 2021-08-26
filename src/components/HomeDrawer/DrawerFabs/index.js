import { React } from "react";
import { Fab } from "@material-ui/core";
import { LibraryAdd, Add } from "@material-ui/icons";

const DrawerFabs = (props) => {
  const { handleCategoryOpen, handleGroupOpen } = props;
  return (
    <div className="home-drawer-fab-both-container">
      <div className="home-drawer-fab-container">
        <Fab className="home-drawer-fab" onClick={handleGroupOpen}>
          <LibraryAdd className="drawer-fab-icon" />
        </Fab>
      </div>
      <div className="home-drawer-fab-container">
        <Fab className="home-drawer-fab" onClick={handleCategoryOpen}>
          <Add className="drawer-fab-icon" />
        </Fab>
      </div>
    </div>
  );
};

export default DrawerFabs;
