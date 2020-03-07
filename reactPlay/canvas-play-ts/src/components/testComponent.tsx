import React, { useRef, useEffect } from 'react';

const TestComponent = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    ctx.fillRect(10, 10, 300, 300)
    ctx.fillStyle = "red";
  })
  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth / 2}
      height={window.innerHeight / 2}
      onClick={() => {
        const canvas = canvasRef.current as HTMLCanvasElement;
        const ctx = canvas.getContext('2d');
        ctx.fillRect(10, 10, 300, 300)
        ctx.fillStyle = "blue";
      }}
    />
  )
}

export default TestComponent;