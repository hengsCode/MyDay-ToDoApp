import { React } from "react";
import { Route, BrowserRouter as Router, Link } from "react-router-dom";
import HomePage from "../../components/HomePage";

const AllTasks = () => {
  const path = "/all";
  return (
    <Route exact path={path}>
      <HomePage />
    </Route>
  );
};

export default AllTasks;
