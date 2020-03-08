import React, { useState } from 'react';
import FishHook from "./components/fishook";
import TestComponent from "./components/testComponent";
import Hexa from "./components/hexagonalTut";
import logo from './logo.svg';
import './App.css';
import Animation from "./components/animationCanvas";
import Canvas from "./components/Canvas";


function App() {
  const [fishHookToggle, setFishHook] = useState(false);
  const [hexaToggle, setHexa] = useState(false);
  const [animationToggle, setAnimation] = useState(false);

  const [currentDisplay, setDisplay] = useState("");

  return (
    <div>
      <h1>welcome</h1>
      <button onClick={() => { setFishHook(!fishHookToggle); setDisplay("fishHook") }}>fish hooh</button>
      <button onClick={() => { setHexa(!hexaToggle); setDisplay("hexa") }}> hexa </button>
      <button onClick={() => { setAnimation(!animationToggle); setDisplay("animation") }}> animation </button>

      <div>
        <h2>set display test -> {currentDisplay}</h2>
      </div>


      {fishHookToggle ? <FishHook /> : null}
      {hexaToggle ? <Hexa /> : null}
      {animationToggle ? <div>
        <h2>all these rotations</h2>
        <Animation rateOfRotate={1} />
        <Animation rateOfRotate={2} />
        <Animation rateOfRotate={3} />
        <Animation rateOfRotate={4} />
        <Animation rateOfRotate={5} />
        <Animation rateOfRotate={6} />
        <Animation rateOfRotate={7} />
        <Animation rateOfRotate={8} />
        <Animation rateOfRotate={9} />
        <Animation rateOfRotate={10} />
        <Animation rateOfRotate={11} />
        <Animation rateOfRotate={12} />
        <Animation rateOfRotate={13} />
        <Animation rateOfRotate={14} />
        <Animation rateOfRotate={15} />
      </div> : null}
    </div>
  );
}

export default App;
