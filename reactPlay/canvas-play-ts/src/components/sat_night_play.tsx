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
    let pieTracker = 0;
    let rotatorTracker = 0;
    let counter = 0;
    let piRotator = 0;
    //TODO mess with fibonacci sequence
    const render = () => {
      // ctx.beginPath;

      if (piRotator > Math.PI) {
        piRotator = 0;
      }

      if (rotatorTracker > 3.141592 * 32) {
        console.log("pieTracker", pieTracker, "rotatorTracker", rotatorTracker);
        return cancelAnimationFrame(requestId);
      }
      ctx.lineWidth = 3;
      let rotator = Math.PI / 45;
      // ctx.lineTo(rotatorTracker, rotatorTracker);
      ctx.lineTo(Math.sin(piRotator) * 100, Math.sin(piRotator) * 100);
      // ctx.lineTo(rotatorTracker ** 2 + 15, rotatorTracker ** 2 + 15);
      // ctx.lineTo(rotatorTracker ** 2 + 30, rotatorTracker ** 2 + 30);
      rotator = Number(rotator.toFixed(4));
      rotatorTracker += rotator;
      piRotator += rotator;
      console.log("rotator", rotator);
      ctx.rotate(rotator);
      ctx.strokeStyle = purpleArr[5];
      ctx.stroke();
      let amount = 0.3;
      angle += amount;
      pieTracker += 1;

      // ctx.lineTo(centerX / 10, centerY / 10);
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
