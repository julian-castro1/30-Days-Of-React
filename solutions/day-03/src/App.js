import './App.css';
import UserCard from "./UserCard";
import profilePic from "./images/Julian_Gregory_Castro_16Aug2021_Austin-South.jpeg"
import "./UserCard.css";

function App() {

  let skills = ["React", "HTML", "JS", "CSS", "Node", "Python"]

  return (
    <UserCard
      // {name, verified, role, location, skills, profilePic, joinedDate}
      name = "Julian Castro"
      verified = {true}
      role = "Software Engineer"
      location = "Houston, TX"
      skills = {skills}
      profilePic = {profilePic}
      joinedDate = "August 16, 2021"
    />
  );
}

export default App;
