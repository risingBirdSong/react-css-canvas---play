import React, { useState, useRef, useEffect } from "react";

let coords = [
  { x: 352.1743316346807, y: 252.78613504450135 },
  { x: 318.43276243090673, y: 730.0376923902464 },
  { x: 87.91315913467557, y: 497.9701321965095 },
  { x: 312.77822598374934, y: 30.82821734798047 },
  { x: 940.0461645198102, y: 358.3758631670014 },
  { x: 827.4992193162552, y: 578.2912129031539 },
  { x: 389.0368258230161, y: 50.83543875115768 },
  { x: 1180.3224916212814, y: 479.48465460314355 },
  { x: 1094.3299271165274, y: 822.9989139934114 },
  { x: 1023.2975204023681, y: 585.2926927030396 },
  { x: 261.4074984254494, y: 835.8237136571847 },
  { x: 612.4492768603377, y: 167.74036148830197 },
  { x: 79.16952913974401, y: 566.1524763047457 },
  { x: 1.064461656323079, y: 118.05188098537303 },
  { x: 933.1094859675309, y: 793.208568046187 },
  { x: 357.17111952259455, y: 630.4872590381349 },
  { x: 336.2447453879991, y: 136.5225826551954 },
  { x: 1104.0801002443197, y: 450.44272800327724 },
  { x: 1142.384908197346, y: 31.846177353999906 },
  { x: 265.6588374433623, y: 375.5300283065254 },
  { x: 1147.4131455775332, y: 677.4169884451925 },
  { x: 559.0784521275799, y: 600.8259695793304 },
  { x: 395.2372732934628, y: 30.372564318265805 },
  { x: 163.09969814803128, y: 778.7160206328093 },
  { x: 662.7386962662571, y: 628.6512039964117 },
  { x: 1074.3441265926012, y: 1.3374598791341397 },
  { x: 765.7099427941779, y: 408.40785243062186 },
  { x: 1113.3507666618707, y: 392.2982473219121 },
  { x: 156.96722283845324, y: 447.9892627707883 },
  { x: 428.2758117680238, y: 698.0770571728009 }
];

function Pete() {
  const myRef = useRef();
  const [state, setState] = useState(false);
  const [circleState, setCircleState] = useState({
    x: 0,
    y: 0,
    radius: 40,
    startAngle: 0,
    endAngle: 2 * Math.PI
  });
  const [styleRef, setStyleRef] = useState([
    "#E6E6FA",
    "#D8BFD8",
    "#DDA0DD",
    "#EE82EE",
    "#DA70D6",
    "#FF00FF",
    "#FF00FF",
    "#BA55D3",
    "#9370DB",
    "#8A2BE2",
    "#9400D3",
    "#9932CC",
    "#8B008B",
    "#800080",
    "#4B0082"
  ]);
  let canvas = myRef.current as HTMLCanvasElement;
  let centerX = 600;
  let centerY = 850 / 2;

  useEffect(() => {
    let angle = 0;
    let canvas = myRef.current as HTMLCanvasElement;
    let ctx = canvas.getContext("2d");

    let radius = 35;
    let steps = 360;
    //(centerX + radius * Math.cos(2 * Math.PI * i / steps)
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < steps; i += 2) {
      ctx.beginPath();
      ctx.arc(
        600 + Math.cos(i * (Math.PI / 45)) * radius,
        850 / 2 + Math.sin(i * (Math.PI / 45)) * radius,
        circleState.radius,
        circleState.startAngle,
        circleState.endAngle
      );
      ctx.lineTo(
        600 + Math.cos(i * (Math.PI / 45)) * radius * 10,
        850 / 2 + Math.sin(i * (Math.PI / 45)) * radius * 10
      );
      ctx.strokeStyle = styleRef[Math.floor(Math.random() * styleRef.length)];
      ctx.stroke();
      ctx.closePath();
    }
    console.log("what");
    setTimeout(() => setState(!state), 10);
  }, [state]);

  return (
    <div className="App">
      <canvas width="1200px" height="850px" ref={myRef}>
        Canvassing!
      </canvas>
    </div>
  );
}

export default Pete;
