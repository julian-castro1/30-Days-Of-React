import './App.css';
import UserCard from "./UserCard";
import profilePic from "./images/Julian_Gregory_Castro_16Aug2021_Austin-South.jpeg"
import "./UserCard.css";
import "./colors.css";
import { hexaColor } from './hexGen';

function App() {

  let skills = ["React", "HTML", "JS", "CSS", "Node", "Python"]
  let colors = [];
  for(let i = 0; i < 32; i++){
    colors.push(hexaColor());
  }

  return (
    <>
      <div className='color_title'>Colors</div>
      <div className='colorGrid'>
        {colors.map((color) => {
          let style = {backgroundColor: color};
          return <div className='color' id={color} style={style}>{color}</div>
        })}
      </div>
    </>
    // <UserCard
    //   // {name, verified, role, location, skills, profilePic, joinedDate}
    //   name = "Julian Castro"
    //   verified = {true}
    //   role = "Software Engineer"
    //   location = "Houston, TX"
    //   skills = {skills}
    //   profilePic = {profilePic}
    //   joinedDate = "August 16, 2021"
    // />
  );
}

export default App;
