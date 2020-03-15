import React, { useEffect, useState, useRef } from "react";

const Canvassing = () => {
  const myRef = useRef();

  useEffect(() => {
    let canvas = myRef.current as HTMLCanvasElement;
    let ctx = canvas.getContext("2d");
    ctx.arc(canvas.width / 2, canvas.height / 2, 30, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();
  });

  return (
    <canvas width="850px" height="850px" ref={myRef}>
      Canvassing!
    </canvas>
  );
};

export default Canvassing;
