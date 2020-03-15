import React, { useEffect, useState, useRef } from "react";
import CSS_COLOR_NAMES from "../colors";

const Canvassing = () => {
  const myRef = useRef();
  let angle = 0;
  let color = CSS_COLOR_NAMES[0];

  useEffect(() => {
    let canvas = myRef.current as HTMLCanvasElement;
    let ctx = canvas.getContext("2d");
    let requestId;

    let centerX = canvas.width / 2;
    let movingX = centerX;
    let centerY = canvas.height / 2;
    let movingY = centerY;
    let angleTracker = 0;
    let rotation360 = 0;
    let piTracker = 0;
    const render = () => {
      // ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();

      if (piTracker >= Math.PI * 2) {
        movingX += 10;
        movingY += 10;
        console.log("piiii");
        piTracker = 0;
      }

      ctx.fillRect(
        movingX + Math.sin(angle) * 50,
        movingY + Math.cos(angle) * 50,
        4,
        4
      ); // fill in the pixel at (10,10)
      ctx.fillStyle =
        CSS_COLOR_NAMES[Math.floor(CSS_COLOR_NAMES.length * Math.random())];
      ctx.fill();
      ctx.closePath();
      let amount = 0.05;
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
    <canvas width="850px" height="850px" ref={myRef}>
      Canvassing!
    </canvas>
  );
};

export default Canvassing;
