import { React } from "react";
import { Route, BrowserRouter as Router, Link, Switch } from "react-router-dom";
import HomePage from "../../components/HomePage";
import CategoryList from "../CategoryList";

const Home = () => {
  const path = "/";
  return <Route exact path={path} component={HomePage} />;
};

// const HomeRoutes = () => {
//   return (
//     <div>
//       <Link to={`/profile`}>
//         <button>Profile</button>
//       </Link>
//       <Link to={`/products`}>
//         <button>Products</button>
//       </Link>
//     </div>
//   );
// };

export default Home;
