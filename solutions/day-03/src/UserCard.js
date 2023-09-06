import ProfilePic from "./ProfilePic.jsx";
import verifiedIcon from "./images/png-clipart-computer-icons-check-mark-symbol-symbol-miscellaneous-blue.png"
import time from "./images/time.png"
import { hexaColor } from "./hexGen.js";


function UserCard({name, verified, role, location, skills, profilePic, joinedDate}) {

    let roleText = `${role}, ${location}`
    let joinedText = `Joined on ${joinedDate}`
    let skillStyle = {
      backgroundColor: hexaColor(),
    };

  return (
    <div className="usercard">
        <ProfilePic src={profilePic} aspectRatio="round"/>
        <div className="user-name">
            <h1>{name}</h1>
            {verified && <img className="verified" src={verifiedIcon} alt="verified"/>}
        </div>
        <p className="role_text">{roleText}</p>
        <h1 className="skills-title">SKILLS</h1>
        <div className="skills">
            {skills.map((skill) => {
                let color = { backgroundColor: hexaColor() };
                return <div id={skill} style={color} className="skill_container">{skill}</div>
            })}
        </div>
        <div className="joined">
            <img className="time"src={time} alt="clock"/>
            <p className="joined_text">{joinedText}</p>
        </div>
    </div>
  );
}

export default UserCard;
