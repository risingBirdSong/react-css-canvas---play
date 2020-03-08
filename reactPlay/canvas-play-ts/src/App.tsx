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
  return (
    <div>
      <h1>welcome</h1>
      <button onClick={() => setFishHook(!fishHookToggle)}>fish hooh</button>
      <button onClick={() => setHexa(!hexaToggle)}> hexa </button>
      <button onClick={() => setAnimation(!animationToggle)}> animation </button>

      {fishHookToggle ? <FishHook /> : null}
      {hexaToggle ? <Hexa /> : null}
      <Animation rateOfRotate={1} />
      <Animation rateOfRotate={2} />
      <Animation rateOfRotate={3} />
      <Animation rateOfRotate={4} />
      <Animation rateOfRotate={5} />
    </div>
  );
}

export default App;
