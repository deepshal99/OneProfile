import React from 'react';
import './ProfileComponent.css';
import PortfolioContainer from '../PortfolioContainer/PortfolioContainer';
import EditIcon from '@material-ui/icons/Edit';
import {getUserByEmail} from"../../Handler/firestoreHandler"
import ExperienceBox from '../ExperienceBox/ExperienceBox.js'

const ProfileComponent = () => {
  const [userProfilePic,setuserProfilePic] = React.useState("")
  const [userFullName,setuserFullName] = React.useState("")
  const [userAbout,setuserAbout] = React.useState("")
  const [userProfession,setuserProfession] = React.useState("")

  getUserByEmail(localStorage.getItem("loadedInEmail")).then((user)=>{
    setuserProfilePic(user.data().ProfileUrl)
    setuserFullName(user.data().Name)
    setuserAbout(user.data().About)
    setuserProfession(user.data().Profession)
    console.log(user.data())
  })
  return (
    <div className="ProfileComponent">
      <div className="wrapper">
      <div className="profile-content">
        <div className="profileRow">
          <div className="ProfilePhotoConatainer">
            <img alt="profilepic" className="ProfilePhoto" src={userProfilePic} />
          </div>
        </div>
        <div className="BioData">
          <div className="name">{userFullName}</div>
          <div className="profession">{userProfession}</div>
          <div className="about">{userAbout}</div>
        </div>
        <ExperienceBox />
        <PortfolioContainer />
        <div className="editButton">
          <EditIcon style={{ fill: "white" }} />
        </div>
      </div>
      </div>
    </div>
  );
}

ProfileComponent.propTypes = {};

ProfileComponent.defaultProps = {};

export default ProfileComponent;
