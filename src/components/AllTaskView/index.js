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
    <div>
      <HomeHeader />

      <div>
        <Tabs
          value={value}
          onChange={handleChange}
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
      </div>
    </div>
  );
};

export default AllTaskView;
