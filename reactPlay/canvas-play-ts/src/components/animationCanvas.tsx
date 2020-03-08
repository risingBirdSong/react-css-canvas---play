import React from "react";
import Canvas from "./Canvas";

interface animationProps {
  rateOfRotate: number;
}
interface animationState {
  angle: number;
}

class Animation extends React.Component<animationProps, animationState> {
  rAF;
  constructor(props) {
    super(props);
    this.state = { angle: 0 };
    //not necessary with arrow function
    // this.updateAnimationState = this.updateAnimationState.bind(this);
  }

  componentDidMount() {
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }

  updateAnimationState = () => {
    this.setState(prevState => ({ angle: prevState.angle + this.props.rateOfRotate }));
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.rAF);
  }

  render() {
    return <Canvas angle={this.state.angle} />;
  }
}

export default Animation;