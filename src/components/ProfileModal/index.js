import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAvatar } from "../../redux/slices/avatar.slice";
import { Close } from "@material-ui/icons";
import "./styles.css";

const ProfileModal = (props) => {
  const { firstName, lastName, birthDate, hobbies, handleSubmit, handleEdit } =
    props;
  const [firstname, setFirstName] = useState(firstName);
  const [lastname, setLastName] = useState(lastName);
  const [birthdate, setBirthDate] = useState(birthDate);
  const [hobbyList, setHobbyList] = useState(hobbies);
  const { background, init } = useSelector((state) => state.avatar);
  const [backgroundCol, setBackgroundCol] = useState(background);
  const [initCol, setInitCol] = useState(init);
  const dispatch = useDispatch();

  const handleFormSubmit = () => {
    const newDetails = {
      firstName: firstname,
      lastName: lastname,
      birthDate: birthdate,
      hobbies: hobbyList,
    };
    dispatch(setAvatar({ background: backgroundCol, init: initCol }));
    handleSubmit(newDetails);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleBirthDateChange = (e) => {
    setBirthDate(e.target.value);
  };

  const handleBgChange = (e) => {
    setBackgroundCol(e.target.value);
  };

  const handleInitChange = (e) => {
    setInitCol(e.target.value);
  };

  return (
    <div className="edit-profile-modal">
      <div className="edit-profile-content">
        <Close className="edit-profile-exit-icon" onClick={handleEdit} />
        <div className="edit-profile-header">Edit your profile details:</div>
        <div className="edit-profile-submit-container">
          <button className="edit-profile-submit" onClick={handleFormSubmit}>
            Save
          </button>
        </div>
        <div className="edit-profile-field">
          <text>Avatar Background: </text>
          <input type="color" value={background} onChange={handleBgChange} />
        </div>
        <div className="edit-profile-field">
          <text>Avatar Initials: </text>
          <input type="color" value={initCol} onChange={handleInitChange} />
        </div>
        <div className="edit-profile-field">
          <text>First Name: </text>
          <input
            type="text"
            value={firstname}
            onChange={handleFirstNameChange}
          />
        </div>
        <div className="edit-profile-field">
          <text>Last Name: </text>

          <input type="text" value={lastname} onChange={handleLastNameChange} />
        </div>
        <div className="edit-profile-field">
          <text>Birth Date: </text>
          <input
            type="date"
            value={birthdate}
            onChange={handleBirthDateChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
