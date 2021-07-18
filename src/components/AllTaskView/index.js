import { React, useState, useEffect } from "react";
import HomeHeader from "../HomePage/HomeHeader";
import { Tabs, Tab } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { setCategory } from "../../redux/slices/category.slice";

const AllTaskView = (props) => {
  const [value, setValue] = useState(0);
  const { categoryList } = useSelector((state) => state.category);
  const dispatch = useDispatch();

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
          {categoryList.map((category) => {
            return <Tab label={category.label} />;
          })}
        </Tabs>
      </div>
    </div>
  );
};

export default AllTaskView;
