import React, { useRef } from "react";
import CSS_COLOR_NAMES from "../colors";

const Nesting = () => {
  const myRef = React.createRef().current as string;

  console.log("myRef", myRef);
  // const work = () => {
  //   let innerDiv = document.getElementById("NestContainer_a") as HTMLElement;
  //   let divNode = document.createElement("div");
  //   divNode.className = "NestContainer_a";
  //   let textNode = document.createTextNode("heeey");
  //   divNode.appendChild(textNode);
  //   innerDiv.appendChild(divNode);
  // }

  // const drill = () => {

  // }

  const divStructure = (
    <div className="NestContainer">
      <div className="NestContainer">
        <div className="NestContainer" id="a-nest">
          <div className="NestContainer" id="b-nest">
            <div className="NestContainer" id="c-nest">
              <div className="NestContainer" id="d-nest">
                <p>hello world</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const divMaker_a = (amount: number, content: string) => {
    const output = [];
    for (let i = 1; i <= amount; i++) {
      output.push(`<div className="NestContainer" id=nest${i}>`);
    }
    output.push(`<p>${content}</p>`);
    for (let i = 1; i <= amount; i++) {
      output.push(`</div>`);
    }

    return output.join("");
  };

  const divMaker_rcrs = (amount: number, myHtml: JSX.Element) => {
    if (amount <= 0) {
      return myHtml;
    }
    // while we're not at the innermost nested html, keep drilling down
    // when we reach the last, append the new myHtml to it as a child and then recurse
    divMaker_rcrs(amount--, <div> myHtml </div>);
    // divMaker_rcrs(amount--);
  };

  // return <div>{ReactHtmlParser(divMaker_a(5, "hello world"))}</div>;
  return { divStructure };
};

function Nested({ content, number }) {
  let colors = [
    "red",
    "bisque",
    "blueviolet",
    "blue",
    "green",
    "purple",
    "yellow",
    "aquamarine",
    "coral"
  ];

  if (number === 0) {
    return <p>I'm bored</p>;
  }

  return (
    <div
      className="NestContainer"
      style={{
        width: `${50 + number * 15}px`,
        height: `${50 + number * 15}px`,
        backgroundColor: `${
          CSS_COLOR_NAMES[Math.floor(Math.random() * CSS_COLOR_NAMES.length)]
        }`,
        paddingBottom: `${5 * number * 2}px`,
        paddingTop: `${5 * number * 3}px`
      }}
    >
      <Nested content={content} number={number - 1} />
    </div>
  );
}
//Todo
export default Nested;
