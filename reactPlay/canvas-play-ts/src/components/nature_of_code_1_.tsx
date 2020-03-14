import React, { useRef, useEffect } from "react";

interface vectorProps {
  x: number;
  y: number;
}
// Vectors
const Vector = (props: vectorProps) => {
  const myRef = useRef();

  //need render a ball and animate it...
  // i'll have a parent component for animation like the animation example

  useEffect(() => {
    const canvas = myRef.current as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    canvas.style.background = "beige";
    ctx.beginPath();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.arc(props.x, props.y, 5, 0, 2 * Math.PI);
    ctx.fillStyle = "red";
    ctx.fill();
  }, [props]);

  return (
    <div>
      <canvas className="vectorCanvas" ref={myRef}></canvas>
    </div>
  );
};

export default Vector;
