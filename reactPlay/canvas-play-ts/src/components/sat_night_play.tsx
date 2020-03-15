import React, { useEffect, useState, useRef } from "react";

const Canvassing = () => {
  const myRef = useRef();
  let angle = 0;
  useEffect(() => {
    let canvas = myRef.current as HTMLCanvasElement;
    let ctx = canvas.getContext("2d");
    let requestId;

    let centerX = canvas.width / 2;
    let centerY = canvas.height / 2;

    const render = () => {
      // ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      // ctx.moveTo(
      //   centerX + (Math.cos(angle) * 35 + 35),
      //   centerY + (Math.cos(angle) * 35 + 35)
      // );
      // Math.cos(angle) * 50
      ctx.fillRect(
        centerX + Math.sin(angle) * 50,
        centerY + Math.cos(angle) * 50,
        4,
        4
      ); // fill in the pixel at (10,10)
      ctx.fillStyle = "red";
      ctx.fill();
      ctx.closePath();
      angle += 0.05;
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
