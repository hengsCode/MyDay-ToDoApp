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
    <>
      <HomeHeader />
      <div className="tabs-container">
        <Tabs
          value={value}
          onChange={handleChange}
          centered
          TabIndicatorProps={{
            style: { background: "white" },
          }}
        >
          {categoryList.map((category, index) => {
            return (
              <Tab
                label={category.label}
                className="category-tab-container"
                style={{
                  color: index === value ? "black" : "orange",
                  opacity: index === value ? 1 : 0.8,
                }}
              />
            );
          })}
        </Tabs>
      </div>
      <CategoryTaskView index={value} />
    </>
  );
};

export default AllTaskView;
