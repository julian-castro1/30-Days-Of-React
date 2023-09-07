import './App.css';
import UserCard from "./UserCard";
import profilePic from "./images/Julian_Gregory_Castro_16Aug2021_Austin-South.jpeg"
import "./UserCard.css";
import "./colors.css";
import { hexaColor } from './hexGen';
import { tenHighestPopulation } from './population';
import Bar from './Bar';
import { useState } from 'react';
import Button from './Button';

function App() {
  const [dark, toggleTheme] = useState(true);

  let skills = ["React", "HTML", "JS", "CSS", "Node", "Python"]
  let colors = [];
  for(let i = 0; i < 32; i++){
    colors.push(hexaColor());
  }
  function handleThemeClick(){
    toggleTheme(!dark);
  }
  return (
    <>
      <div className="title" data-dark={dark}>
        World Population
      </div>
      <div className="subtitle" data-dark={dark}>
        Ten most populated countries
      </div>
      <div className="bars" data-dark={dark}>
        {tenHighestPopulation.map((pop) => {
          return (
            <Bar
              key={pop.country}
              theme={dark}
              name={pop.country}
              value={pop.population}
              min={0}
              max={7693165599}
            />
          );
        })}
      </div>
      <Button theme={dark} onClick={handleThemeClick} />
    </>
  );
}

export default App;
