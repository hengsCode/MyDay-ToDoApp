import { React, useState } from "react";
import HomeHeader from "../../components/HomePage/HomeHeader";
import ProfileAvatar from "../../components/ProfileAvatar";
import ProfileModal from "../../components/ProfileModal";
import { Edit } from "@material-ui/icons";
import moment from "moment";
import "./styles.css";

const profileDetails = {
  firstName: "henry",
  lastName: "fang",
  birthDate: "1999-07-24",
  hobbies: ["coding", "cooking", "eating", "gaming", "sports"],
};

const Profile = (props) => {
  const [details, setDetails] = useState(profileDetails);
  const [editing, setEditing] = useState(false);

  const handleEdit = () => {
    setEditing(!editing);
  };

  const handleSubmit = (newDetails) => {
    setDetails(newDetails);
    setEditing(!editing);
  };

  const handleClickAway = (e) => {
    if (editing) {
      if (!document.querySelector(".edit-profile-content").contains(e.target)) {
        setEditing(false);
      }
    }
  };

  return (
    <div onClick={handleClickAway}>
      {editing && (
        <ProfileModal
          firstName={details.firstName}
          lastName={details.lastName}
          birthDate={details.birthDate}
          hobbies={details.hobbies}
          handleSubmit={handleSubmit}
          handleEdit={handleEdit}
        />
      )}
      <div
        className="profile-page-container"
        style={{ opacity: editing ? 0.5 : 1 }}
      >
        <HomeHeader />
        <div className="profile-user-content">
          <div className="profile-avatar-icon">
            <ProfileAvatar initial="HF" />
            <Edit className="edit-profile-icon" onClick={handleEdit} />
          </div>
          <div className="profile-user-details">
            <text className="profile-user-name">{`${details.firstName} ${details.lastName}`}</text>
            <text className="profile-user-birth">{`${moment(
              details.birthDate
            ).format("Do MMMM YYYY")}`}</text>
            <text className="profile-hobby-header">Interests: </text>
            <div className="profile-user-hobby-list">
              {profileDetails.hobbies.map((hobby, index) => {
                return (
                  <>
                    <text className="profile-user-hobbies">{`${hobby}`}</text>
                    {index < profileDetails.hobbies.length - 1 && (
                      <text className="profile-user-hobbies">{`, `}</text>
                    )}
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
