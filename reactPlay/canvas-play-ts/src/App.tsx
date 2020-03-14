import React, { useState } from "react";
import FishHook from "./components/fishook";
import TestComponent from "./components/testComponent";
import Hexa from "./components/hexagonalTut";
import logo from "./logo.svg";
import "./App.css";
import Animation from "./components/animationCanvas";
import Canvas from "./components/Canvas";
import CssPlay from "./components/cssplay";
import Zipper from "./components/css-zipper";
import Perspective from "./components/perspective";
import OverFlowHidden from "./components/overflowhidden";
import Pos_absolute from "./components/pos_absolute";
import Nesting from "./components/nesting";
import Vector from "./components/nature_of_code_1_";
import GiftWrapping from "./components/gitWrap";
import Animation_ntr from "./components/ntr-cde-animate";
import Circle from "./components/hooks_raf_tut";

function App() {
  const [fishHookToggle, setFishHook] = useState(false);
  const [hexaToggle, setHexa] = useState(false);
  const [animationToggle, setAnimation] = useState(false);

  const [currentDisplay, setDisplay] = useState("");

  function chooseOne(option: string) {
    switch (option) {
      case "fishHook":
        return <FishHook />;
      case "hexa":
        return <Hexa />;
      case "Animation":
        return (
          <div>
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
          </div>
        );
      case "CssPlay":
        return <CssPlay />;
      case "TestComponent":
        return <TestComponent />;
      case "Zipper":
        return <Zipper />;
      case "Perspective":
        return <Perspective />;
      case "OverFlowHidden":
        return <OverFlowHidden />;
      case "Pos_absolute":
        return <Pos_absolute />;
      case "Nesting":
        return (
          <div className="holder">
            <Nesting content={"I'm bored"} number={20} />;
          </div>
        );
    }
  }

  return (
    <div>
      <h1>welcome</h1>
      <button onClick={() => setDisplay("Animation")}> Animation </button>
      <button onClick={() => setDisplay("TestComponent")}>
        {" "}
        TestComponent{" "}
      </button>
      <button onClick={() => setDisplay("Zipper")}> Zipper </button>
      <button onClick={() => setDisplay("Perspective")}> Perspective </button>
      <button onClick={() => setDisplay("OverFlowHidden")}>
        {" "}
        OverFlowHidden{" "}
      </button>
      <button onClick={() => setDisplay("Pos_absolute")}> Pos_absolute </button>
      <button onClick={() => setDisplay("Nesting")}> Nesting </button>

      <div>
        <h2>set display test -> {currentDisplay}</h2>
      </div>

      {chooseOne(currentDisplay)}

      {/* <div className="holder">{<GiftWrapping />}</div> */}

      {/* todo bring this back */}
      {/* <div className="holder">{<Animation_ntr />}</div> */}
      <div className="holder">
        <Circle trig={"cos"} rate={0.05} />
        <Circle trig={"sin"} rate={0.06} />
      </div>
    </div>
  );
}

export default App;
