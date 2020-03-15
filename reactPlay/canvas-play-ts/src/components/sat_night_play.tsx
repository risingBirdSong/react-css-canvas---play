import React, { useEffect, useState, useRef } from "react";
import { CSS_COLOR_NAMES, purpleArr } from "../colors";

const Canvassing = () => {
  const myRef = useRef();
  let angle = 0;
  // let color = CSS_COLOR_NAMES[0];
  let color = purpleArr[0];

  useEffect(() => {
    let canvas = myRef.current as HTMLCanvasElement;
    let ctx = canvas.getContext("2d");
    let requestId;

    let centerX = canvas.width / 2;
    let centerY = canvas.height / 2;
    let movingX = 20;
    let movingY = 20;
    let angleTracker = 0;
    let rotation360 = 0;
    let piTracker = 0;
    const render = () => {
      // ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();

      if (piTracker >= Math.PI * 2) {
        movingX += 10;
        movingY += 10;
        piTracker = 0;
      }

      ctx.arc(
        movingX + Math.tan(angle) * 50,
        movingY + Math.cos(angle) * 50,
        10,
        0,
        Math.PI * 2
      ); // fill in the pixel at (10,10)
      // ctx.arc(

      // )
      ctx.fillStyle = purpleArr[Math.floor(purpleArr.length * Math.random())];
      ctx.fill();
      ctx.closePath();
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
