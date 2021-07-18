import { React, useState } from "react";
import HomeHeader from "../HomePage/HomeHeader";
import { Tabs, Tab } from "@material-ui/core";
import { useSelector } from "react-redux";
import CategoryTaskView from "./CategoryTaskView";
import "./styles.css";

const AllTaskView = (props) => {
  const [value, setValue] = useState(0);
  const { categoryList } = useSelector((state) => state.category);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <HomeHeader />

      <div>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          className="tabs-container"
        >
          {categoryList.map((category) => {
            return <Tab label={category.label} />;
          })}
        </Tabs>
        <CategoryTaskView index={value} />
      </div>
    </div>
  );
};

export default AllTaskView;
