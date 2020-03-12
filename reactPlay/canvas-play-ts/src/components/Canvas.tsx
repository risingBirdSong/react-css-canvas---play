import React from "react";

interface canvasProps {
  angle?: number;
}

class Canvas extends React.Component<canvasProps> {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  constructor(props: canvasProps) {
    super(props);
    this.canvasRef = React.createRef();
  }
  componentDidUpdate() {
    const { angle } = this.props;
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext("2d");
    const width = canvas.width;
    const height = canvas.height;
    ctx.save();
    ctx.beginPath();
    ctx.clearRect(0, 0, width, height);
    ctx.translate(width / 2, height / 2);
    ctx.rotate((angle * Math.PI) / 180);
    ctx.fillStyle = "blue";
    // how are these numbers arrived at?
    //original - stable axis
    ctx.fillRect(-width / 4, -height / 4, width / 2, height / 2);
    //some cool axis rotation
    // ctx.fillRect(-width / 4, -height / 4, width / 4, height / 4);
    //oh interesting try commenting out ctx.restore, its just choppy movements...
    ctx.restore();
  }
  render() {
    return <canvas width="300" height="300" ref={this.canvasRef}></canvas>;
  }
}

export default Canvas;
