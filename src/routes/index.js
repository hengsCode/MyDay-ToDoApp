import { React } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Home } from "../pages";
import { AllTasks } from "../pages";

const Routes = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <AllTasks />
    </Router>
  );
};
export default Routes;
