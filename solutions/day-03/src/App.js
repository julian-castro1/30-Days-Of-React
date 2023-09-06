import './App.css';
import UserCard from "./UserCard";
import profilePic from "./images/Julian_Gregory_Castro_16Aug2021_Austin-South.jpeg"
import "./UserCard.css";
import "./colors.css";
import { hexaColor } from './hexGen';
import { tenHighestPopulation } from './population';
import Bar from './Bar';

function App() {

  let skills = ["React", "HTML", "JS", "CSS", "Node", "Python"]
  let colors = [];
  for(let i = 0; i < 32; i++){
    colors.push(hexaColor());
  }

  return (
    <>
      <div className="title">World Population</div>
      <div className="subtitle">Ten most populated countries</div>
      <div className="bars">
        {tenHighestPopulation.map((pop) => {
          return (
            <Bar
              key={pop.country}
              name={pop.country}
              value={pop.population}
              min={0}
              max={7693165599}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
