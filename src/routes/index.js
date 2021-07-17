import { React } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Home } from "../pages";
import { AllTasks } from "../pages";
import CategoryList from "../pages/CategoryList";

const Routes = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/category/:category" component={CategoryList} />
      <Route path="/all" component={AllTasks} />
    </Router>
  );
};
export default Routes;
