import { React } from "react";
import { useHistory } from "react-router";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import "./styles.css";

const ProfileAvatar = (props) => {
  const { initial } = props;
  const { background, init } = useSelector((state) => state.avatar);
  let history = useHistory();
  const handleProfileClick = () => {
    history.push("/profile");
  };
  return (
    <Avatar
      className="profile-avatar"
      onClick={handleProfileClick}
      style={{ color: init, backgroundColor: background }}
    >
      {initial}
    </Avatar>
  );
};

export default ProfileAvatar;
