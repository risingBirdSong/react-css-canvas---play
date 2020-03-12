import React from "react";

interface canvasState {
  canvasSize: {
    canvasWidth: number;
    canvasHeight: number;
  };
  hexSize: number;
}

interface canvasProps {
  width?: number;
  height?: number;
}

interface Point {
  x: number;
  y: number;
}

class Hexa extends React.Component<canvasProps, canvasState> {
  canvasHex: canvasProps;
  constructor(props) {
    super(props);
    this.state = {
      canvasSize: {
        canvasWidth: window.innerWidth,
        canvasHeight: window.innerHeight
      },
      hexSize: 20
    };
  }

  componentDidMount() {
    const { canvasWidth, canvasHeight } = this.state.canvasSize;
    this.canvasHex.width = canvasWidth;
    this.canvasHex.height = canvasHeight;
    this.drawHex(this.canvasHex, { x: 50, y: 50 });
  }

  drawHex(canvasID, center: Point) {
    for (let i = 0; i <= 5; i++) {
      let start = this.getHex(center, i);
      let end = this.getHex(center, i + 1);
      this.drawLine(
        canvasID,
        { x: start.x, y: start.y },
        { x: end.x, y: end.y }
      );
    }
  }

  drawLine(canvasID, start: Point, end: Point) {
    let ctx = canvasID.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(start.x, start.y);
    ctx.lineTo(end.x, end.y);
    ctx.stroke();
    ctx.closePath();
  }

  getHex(center: Point, i: number) {
    let angle_deg = 60 * i - 30;
    let angle_rad = (Math.PI / 180) * angle_deg;
    let x = center.x + this.state.hexSize * Math.cos(angle_rad);
    let y = center.y + this.state.hexSize * Math.sin(angle_rad);
    return { x, y };
  }
  render() {
    return (
      <div>
        <canvas ref={canvasHex => (this.canvasHex = canvasHex)}></canvas>
      </div>
    );
  }
}

export default Hexa;
