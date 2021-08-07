import { React, useState } from "react";
import HomeHeader from "../../components/HomePage/HomeHeader";
import ProfileAvatar from "../../components/ProfileAvatar";
import { Edit } from "@material-ui/icons";
import "./styles.css";

const profileDetails = {
  firstName: "henry",
  lastName: "fang",
  birthDate: "24-07-1999",
  hobbies: ["coding", "cooking", "eating", "gaming", "sports"],
};

const Profile = () => {
  const [details, setDetails] = useState(profileDetails);
  const [editingDetails, setEditingDetails] = useState(details);
  const [editing, setEditing] = useState(false);

  const handleEdit = () => {
    setEditing(!editing);
    if (editing == false) {
      setEditing(editingDetails);
    }
  };

  const handleFirstNameChange = (e) => {
    setEditingDetails({ ...editingDetails, firstName: e.target.value });
  };

  const handleLastNameChange = (e) => {
    setEditingDetails({ ...editingDetails, lastName: e.target.value });
  };
  return (
    <div className="profile-page-container">
      <HomeHeader />
      <div className="profile-user-content">
        <div className="profile-avatar-icon">
          <ProfileAvatar initial="HF" />
          <Edit className="edit-profile-icon" onClick={handleEdit} />
        </div>
        <form className="profile-user-details">
          <div>
            <input
              className="profile-user-name"
              type="text"
              value={editingDetails.firstName}
              onChange={handleFirstNameChange}
              disabled={!editing}
              size={details.firstName.length}
            />
            <input
              className="profile-user-name"
              type="text"
              value={editingDetails.lastName}
              onChange={handleLastNameChange}
              disabled={!editing}
              size={details.lastName.length}
            />
          </div>
          <input
            className="profile-user-birth"
            type="text"
            value={details.birthDate}
            disabled={!editing}
            size={details.birthDate.length}
          />
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
        </form>
      </div>
    </div>
  );
};

export default Profile;
