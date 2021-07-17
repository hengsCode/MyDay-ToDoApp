import { React, useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import AllTaskView from "../../components/AllTaskView";

const AllTasks = (props) => {
  const { taskCategories, drawerOpen } = props.location.state;

  // console.log(taskCategories);

  return (
    <AllTaskView taskCategories={taskCategories} drawerOpen={drawerOpen} />
  );
};

export default AllTasks;
