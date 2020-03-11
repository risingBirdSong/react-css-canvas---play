import React from "react";

const Zipper_container = () => {
  return (
    <div className="zipper_container">
      <div className="zipper_a zipper_both"></div>
      <div className="zipper_b zipper_both"></div>
      <div className="zipper_a zipper_both"></div>
      <div className="zipper_b zipper_both"></div>
      <div className="zipper_a zipper_both"></div>
      <div className="zipper_b zipper_both"></div>
      <div className="zipper_a zipper_both"></div>
      <div className="zipper_b zipper_both"></div>
      <div className="zipper_a zipper_both"></div>
      <div className="zipper_b zipper_both"></div>
      <div className="zipper_a zipper_both"></div>
      <div className="zipper_b zipper_both"></div>
    </div>
  )
}

const Zipper = () => {
  return (
    <div >
      <Zipper_container />
    </div>
  )
}

export default Zipper;