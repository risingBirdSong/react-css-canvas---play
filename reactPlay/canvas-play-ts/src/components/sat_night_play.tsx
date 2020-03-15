import React, { useEffect, useState, useRef } from "react";
import { CSS_COLOR_NAMES, purpleArr } from "../colors";

const Canvassing = () => {
  const myRef = useRef();
  let angle = 0;
  let color = purpleArr[0];
  // let color = purpleArr[0];

  useEffect(() => {
    let canvas = myRef.current as HTMLCanvasElement;
    let ctx = canvas.getContext("2d");
    let requestId;

    let centerX = canvas.width / 2;
    let centerY = canvas.height / 2;
    let movingX = centerX + 45;
    let movingY = centerY + 45;
    let angleTracker = 0;
    let rotation360 = 0;
    let piTracker = 0;
    const render = () => {
      // ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineWidth = 3;
      ctx.lineTo(centerX + 10, centerY + 10);
      // ctx.translate(canvas.width / 4, canvas.height / 4);

      ctx.rotate(Math.PI / 45);

      ctx.strokeStyle = purpleArr[Math.floor(purpleArr.length * Math.random())];
      ctx.stroke();
      // ctx.closePath();
      let amount = 0.3;

      angle += amount;
      piTracker += amount;
      angleTracker += angle;

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
