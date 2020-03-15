import React, { useEffect, useState, useRef } from "react";
import { CSS_COLOR_NAMES, purpleArr } from "../colors";

const Canvassing = () => {
  const myRef = useRef();
  let angle = 0;
  let color = purpleArr[0];

  useEffect(() => {
    let canvas = myRef.current as HTMLCanvasElement;
    let ctx = canvas.getContext("2d");
    let requestId;

    let centerX = canvas.width / 2;
    let centerY = canvas.height / 2;

    const render = () => {
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineWidth = 3;
      ctx.lineTo(centerX + 10, centerY + 10);
      ctx.rotate(Math.PI / 45);
      ctx.strokeStyle = purpleArr[Math.floor(purpleArr.length * Math.random())];
      ctx.stroke();
      let amount = 0.3;
      angle += amount;
      requestId = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(requestId);
    };
    // ctx.fillStyle = "red";
    // ctx.fill();
  });

  return (
    <canvas width="1200px" height="850px" ref={myRef}>
      Canvassing!
    </canvas>
  );
};

export default Canvassing;
