const canvas = <HTMLCanvasElement>document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

ctx.fillStyle = "blue"
const xCoord = 500;
const yCord = 100;
const widthCtx = 800;
const heightCtx = 800;
ctx.fillRect(xCoord, yCord, widthCtx, heightCtx);





interface circleI {
  x: number,
  y: number,
  radius: number,
  startAngle?: number,
  endAngle?: number;
}

const howManyCircles = (howMany: number) => {
  for (let i = 0; i < howMany; i++) {
    circle({ x: randomX(50), y: randomY(50), radius: 20 })
  }
}

const randomX = (offset: number) => {
  return Math.floor(Math.random() * (widthCtx - 2 * offset)) + xCoord + offset;
}

const randomY = (offset: number) => {
  return Math.floor(Math.random() * (heightCtx - 2 * offset)) + yCord + offset;
}


const circle = (inputs: circleI) => {
  ctx.beginPath();
  ctx.arc(inputs.x, inputs.y, inputs.radius, inputs.startAngle = 0, inputs.endAngle = Math.PI * 2);
  ctx.stroke();
}


const draw = () => {
  // ctx.beginPath();
  // ctx.arc(100, 75, 50, 0, 2 * Math.PI);
  // ctx.stroke();
  howManyCircles(500);
  // circle({ x: 200, y: 200, radius: 50 })
  // circle({ x: 300, y: 300, radius: 50 })
}

draw();

// setInterval(() => {
//   draw();
// }, 100)