import React, { useState } from 'react';
import FishHook from "./components/fishook";
import TestComponent from "./components/testComponent";
import logo from './logo.svg';
import './App.css';




function App() {
  const [fishHookToggle, setFishHook] = useState(false);
  return (
    <div>
      <h1>welcome</h1>
      <button onClick={() => setFishHook(!fishHookToggle)}>click me</button>
      {fishHookToggle ? <FishHook /> : null}
      <TestComponent />
    </div>
  );
}

export default App;
