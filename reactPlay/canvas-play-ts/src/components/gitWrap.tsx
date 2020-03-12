import React, { useRef, useEffect } from "react";

const forAmount = (amount: number, doThing: Function) => {
  for (let i = 0; i < amount; i++) {
    doThing();
  }
};

const get_Y = () => {
  return Math.floor(Math.random() * 140) - 70;
};
const get_X = () => {
  return Math.floor(Math.random() * 160) - 80;
};

const GiftWrapping = () => {
  const myRef = useRef();

  const pointsArr: number[][] = [];
  const hull: number[][] = [];

  let leftmost: number[];
  let currentVertex: number[];
  let guessIndex = 0;
  let nextVertex: number[];
  let guess: number[];

  const makePoints = () => {
    const canvas = myRef.current as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    for (let i = 0; i < 30; i++) {
      pointsArr.push([canvas.width / 2 + get_X(), canvas.height / 2 + get_Y()]);
    }
    pointsArr.sort((a, b) => a[0] - b[0]);
    leftmost = pointsArr[0];
    //todo
    currentVertex = leftmost;
    //guesing
    nextVertex = pointsArr[1];
    //start the comparison at
    guessIndex = 2;
    guess = pointsArr[guessIndex];
  };

  const draw = () => {
    const canvas = myRef.current as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");

    for (let i = 0; i < pointsArr.length; i++) {
      ctx.beginPath();
      ctx.arc(pointsArr[i][0], pointsArr[i][1], 2, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fillStyle = "lightblue";
      ctx.fill();
      ctx.strokeStyle = "blue";
      ctx.stroke();
    }
    //leftmost
    ctx.beginPath();
    ctx.arc(leftmost[0], leftmost[1], 5, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.strokeStyle = "blue";
    ctx.stroke();
    //currentVertex
    ctx.beginPath();
    ctx.arc(currentVertex[0], currentVertex[1], 5, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fillStyle = "yellow";
    ctx.fill();
    ctx.strokeStyle = "red";
    ctx.stroke();

    //line to next
    ctx.beginPath();
    ctx.moveTo(currentVertex[0], currentVertex[1]);
    ctx.lineWidth = 1;
    ctx.lineTo(nextVertex[0], nextVertex[1]);
    ctx.strokeStyle = "purple";
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(currentVertex[0], currentVertex[1]);
    ctx.lineWidth = 1;
    ctx.lineTo(guess[0], guess[1]);
    ctx.stroke();
    ctx.closePath();
  };

  //TODO
  // const point = () => {
  //   const canvas = myRef.current as HTMLCanvasElement;
  //   const ctx = canvas.getContext("2d");
  //   ctx.beginPath();
  //   ctx.arc(
  //     canvas.width / 2 + get_X(),
  //     canvas.height / 2 + get_Y(),
  //     2,
  //     0,
  //     Math.PI * 2
  //   );
  //   ctx.closePath();
  //   ctx.fillStyle = "lightblue";
  //   ctx.fill();
  //   ctx.strokeStyle = "blue";
  //   ctx.stroke();
  // };

  useEffect(() => {
    const canvas = myRef.current as HTMLCanvasElement;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "white";
    ctx.fillRect(10, 10, 400, 400);
    makePoints();
    draw();
  }, []);

  return (
    <div>
      <canvas className="myCanvas" ref={myRef}></canvas>
    </div>
  );
};

export default GiftWrapping;
