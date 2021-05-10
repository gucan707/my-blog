import { useState, useEffect, useRef, ReactNode } from "react"; //引入react
import hljs from "highlight.js";

import "highlight.js/styles/night-owl.css"; //代码块样式

interface CodeBlockProp {
  className?: string;
  children?: string | ReactNode[];
}

export default function CodeBlock(prop: CodeBlockProp) {
  const { children, className } = prop;
  const codeEl = useRef<HTMLElement>(null);
  useEffect(() => {
    if (codeEl.current) hljs.highlightBlock(codeEl.current);
  });
  return (
    <code ref={codeEl} className={className}>
      {children}
    </code>
  );
}
