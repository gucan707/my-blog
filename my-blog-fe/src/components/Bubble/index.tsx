import { useState, useEffect, memo } from "react";

import "./index.scss";

interface BubbleProp {
  color: string;
  update: object;
}

export default memo(Bubble);
function Bubble(prop: BubbleProp) {
  const { color } = prop;
  return (
    <div
      className={color === "pink" ? "bubble" : "bubble blue"}
      style={{
        left: `${(Math.random() - 0.05) * 100}vw`,
        top: `${(Math.random() - 0.05) * 100}vh`,
      }}
    >
      <div className="light"></div>
      <div className="inside"></div>
    </div>
  );
}
