import { useState } from "react";

import "./index.scss";

interface ButtonProp {
  content: string;
  onClick?: () => void;
}

export default function Button(prop: ButtonProp) {
  const { content, onClick } = prop;
  return (
    <div className="btn" onClick={onClick}>
      {content}
    </div>
  );
}
