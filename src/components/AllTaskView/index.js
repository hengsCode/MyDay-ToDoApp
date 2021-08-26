import { React, useState } from "react";
import HomeHeader from "../HomePage/HomeHeader";
import { Tabs, Tab } from "@material-ui/core";
import { useSelector } from "react-redux";
import GroupTaskView from "./GroupTaskView";
import "./styles.css";

const AllTaskView = (props) => {
  let indexList = [];
  const [value, setValue] = useState(0);
  const [idObj, setidObj] = useState({ _groupId: 0 });
  const { groupList } = useSelector((state) => state.group);

  const handleChange = (_, newValue) => {
    setValue(newValue);
    setidObj(indexList[newValue]);
  };

  return (
    <>
      <HomeHeader />
      <div className="tabs-container">
        <Tabs
          value={value}
          onChange={handleChange}
<<<<<<< HEAD
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
=======
          indicatorColor="primary"
          className="tabs-container"
          centered
        >
          {groupList.map((group) => {
            indexList.push({
              _groupId: group._groupId,
            });
            return <Tab label={group.label} />;
          })}
        </Tabs>
        <GroupTaskView index={idObj} />
>>>>>>> feat/group-lists
      </div>
      <CategoryTaskView index={value} />
    </>
  );
};

export default AllTaskView;
