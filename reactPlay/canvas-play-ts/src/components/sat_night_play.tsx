import React, { useEffect, useState, useRef } from "react";
import { CSS_COLOR_NAMES, purpleArr } from "../colors";

const Canvassing = () => {
  const myRef = useRef();
  const [state, setState] = useState(false);

  const [styleRef, setStyleRef] = useState([
    "#E6E6FA",
    "#D8BFD8",
    "#DDA0DD",
    "#EE82EE",
    "#DA70D6",
    "#FF00FF",
    "#FF00FF",
    "#BA55D3",
    "#9370DB",
    "#8A2BE2",
    "#9400D3",
    "#9932CC",
    "#8B008B",
    "#800080",
    "#4B0082"
  ]);
  useEffect(() => {
    let canvas = myRef.current as HTMLCanvasElement;
    let ctx = canvas.getContext("2d");

    let radius = 35;
    let steps = 180;
    //(centerX + radius * Math.cos(2 * Math.PI * i / steps)
    ctx.translate(canvas.width / 5, canvas.height / 5);
    for (let i = 0; i < steps; i += 2) {
      ctx.beginPath();
      ctx.translate(i / 20, i / 20);
      ctx.arc(
        Math.sin((i * Math.PI) / 45) * radius,
        Math.cos((i * Math.PI) / 45) * radius,
        30,
        0,
        Math.PI * 2
      );

      ctx.strokeStyle = "purple";
      ctx.stroke();
      ctx.closePath();
    }

    setTimeout(() => setState(!state), 10);
  }, [state]);

  return (
    <canvas width="1200px" height="850px" ref={myRef}>
      Canvassing!
    </canvas>
  );
};

export default Canvassing;
