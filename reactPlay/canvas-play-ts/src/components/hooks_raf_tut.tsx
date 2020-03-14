import React, { useRef, useEffect } from "react";
import { render } from "@testing-library/react";

//fantastic walk through! taught me about the distortion that occurs with using canvas!
//http://www.petecorey.com/blog/2019/08/19/animating-a-canvas-with-react-hooks/

const getPixelRatio = context => {
  var backingStore =
    context.backingStorePixelRatio ||
    context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio ||
    1;

  return (window.devicePixelRatio || 1) / backingStore;
};

interface CircleProps {
  trig: "sin" | "cos";
  rate: number;
}

const Circle = (props: CircleProps) => {
  const myRef = useRef();
  let color;
  let i = 0;
  let trig;

  useEffect(() => {
    const canvas = myRef.current as HTMLCanvasElement;
    let ctx = canvas.getContext("2d");
    let ratio = getPixelRatio(canvas);
    let width = getComputedStyle(canvas)
      .getPropertyValue("width")
      .slice(0, -2);
    let height = getComputedStyle(canvas)
      .getPropertyValue("height")
      .slice(0, -2);

    canvas.width = Number(width) * ratio;
    canvas.height = Number(height) * ratio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    let requestId;
    const render = () => {
      if (props.trig === "cos") {
        color = "blue";
        trig = Math.abs(Math.cos(i));
      } else {
        trig = Math.abs(Math.sin(i));
        color = "red";
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.arc(
        canvas.width / 2,
        canvas.height / 2,
        (canvas.width / 2) * trig,
        0,
        Math.PI * 2
      );
      ctx.fillStyle = color;
      ctx.fill();
      i += props.rate;

      console.log("i", i, "cos", Math.cos(i));
      requestId = requestAnimationFrame(render);
    };
    render();
    return () => {
      cancelAnimationFrame(requestId);
    };
  });
  return (
    <canvas ref={myRef} style={{ width: "450px", height: "450px" }}></canvas>
  );
};

export default Circle;
