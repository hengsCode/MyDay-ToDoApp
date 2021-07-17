import { React, useState, useEffect } from "react";
import HomeHeader from "../HomePage/HomeHeader";
import { Tabs, Tab } from "@material-ui/core";

const AllTaskView = (props) => {
  const { taskCategories, drawerOpen } = props;
  const [value, setValue] = useState(0);
  const [categories, setCategories] = useState(taskCategories);

  // useEffect(() => {
  //   setValue(0);
  // }, [drawerOpen]);

  const handleChange = (event, newValue) => {
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
          textColor="primary"
          centered
        >
          {taskCategories.map((category) => {
            return <Tab label={category} />;
          })}
        </Tabs>
      </div>
    </div>
  );
};

export default AllTaskView;
