import React, { useRef, useEffect, useState } from 'react';

const TestComponent = () => {

  const [curColor, setColor] = useState("blue");

  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    //last commit change that fixed it and now loads on page load... 
    ctx.fillStyle = curColor;
    ctx.fillRect(10, 10, 300, 300)
  })
  return (
    <div>
      <h2>---does nothing yet---</h2>
      <canvas
        ref={canvasRef}
        width={window.innerWidth / 2}
        height={window.innerHeight / 2}
        onClick={() => {
          const canvas = canvasRef.current as HTMLCanvasElement;
          const ctx = canvas.getContext('2d');
          setColor("red");
          // ctx.fillStyle = curColor;
          // ctx.fillRect(10, 10, 300, 300)
        }}
      />
    </div>
  )
}

export default TestComponent;