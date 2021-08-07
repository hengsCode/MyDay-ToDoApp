import { React } from "react";
import { useHistory } from "react-router";
import { Avatar } from "@material-ui/core";
import "./styles.css";

const ProfileAvatar = (props) => {
  const { initial } = props;
  let history = useHistory();
  const handleProfileClick = () => {
    history.push("/profile");
  };
  return (
    <Avatar className="profile-avatar" onClick={handleProfileClick}>
      {initial}
    </Avatar>
  );
};

export default ProfileAvatar;
