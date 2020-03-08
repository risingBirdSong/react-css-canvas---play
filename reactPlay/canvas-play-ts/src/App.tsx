import React, { useState } from 'react';
import FishHook from "./components/fishook";
import TestComponent from "./components/testComponent";
import Hexa from "./components/hexagonalTut";
import logo from './logo.svg';
import './App.css';




function App() {
  const [fishHookToggle, setFishHook] = useState(false);
  const [hexaToggle, setHexa] = useState(false);
  return (
    <div>
      <h1>welcome</h1>
      <button onClick={() => setFishHook(!fishHookToggle)}>fish hooh</button>
      <button onClick={() => setHexa(!hexaToggle)}> hexa </button>
      {fishHookToggle ? <FishHook /> : null}

      {hexaToggle ? <Hexa /> : null}
    </div>
  );
}

export default App;
