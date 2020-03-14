import React, { useState, useEffect } from "react";
import Vector from "./nature_of_code_1_";

function myCirlce(x: number, y: number) {
  return { x, y };
}

//how to do this with hooks?
// const Animator = () => {
//   const [myCircleState, setCircleState] = useState({ x: 20, y: 20 });

//   const updateAnimationState = () => {
//     let newX = myCircleState.x + 1;
//     let newY = myCircleState.y + 1;
//     setCircleState({ x: newX, y: newY });
//     requestAnimationFrame(updateAnimationState);
//   };
//   // updateAnimationState();
//   return <Vector x={myCircleState.x} y={myCircleState.y} />;
// };

interface animationProps {
  // rateOfChange: number;
}
interface animationState {
  x: number;
  y: number;
}

class Animation_ntr extends React.Component<animationProps, animationState> {
  rAF;
  constructor(props) {
    super(props);
    this.state = { x: 10, y: 10 };
    //not necessary with arrow function
    // this.updateAnimationState = this.updateAnimationState.bind(this);
  }

  componentDidMount() {
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }

  updateAnimationState = () => {
    this.setState(prevState => ({
      x: prevState.x + 1,
      y: prevState.y + 1
    }));
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  };

  componentWillUnmount() {
    cancelAnimationFrame(this.rAF);
  }

  render() {
    return <Vector x={this.state.x} y={this.state.y} />;
  }
}

export default Animation_ntr;
