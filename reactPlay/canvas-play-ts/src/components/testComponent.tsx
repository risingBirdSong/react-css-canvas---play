import React, { useRef, useEffect } from 'react';

const TestComponent = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = "blue";
    ctx.fillRect(10, 10, 300, 300)
  }, [])
  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth / 2}
      height={window.innerHeight / 2}
    // onClick={() => {
    //   const canvas = canvasRef.current as HTMLCanvasElement;
    //   const ctx = canvas.getContext('2d');
    //   ctx.fillStyle = "blue";
    //   ctx.fillRect(10, 10, 300, 300)
    // }}
    />
  )
}

export default TestComponent;