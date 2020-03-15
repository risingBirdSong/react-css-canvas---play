import React, { useEffect, useState, useRef } from "react";
import { CSS_COLOR_NAMES, purpleArr } from "../colors";

const Canvassing = () => {
  const myRef = useRef();
  let angle = 0;
  let color = purpleArr[0];
  let debug = 10;

  useEffect(() => {
    let canvas = myRef.current as HTMLCanvasElement;
    let ctx = canvas.getContext("2d");
    let requestId;

    let centerX = canvas.width / 2;
    let centerY = canvas.height / 2;
    ctx.beginPath();
    ctx.translate(centerX, centerY);
    // ctx.moveTo(centerX, centerY);

    const render = () => {
      ctx.lineWidth = 3;
      ctx.lineTo(200, 200);
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
