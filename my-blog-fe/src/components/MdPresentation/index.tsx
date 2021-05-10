import { useState, memo } from "react";
import MarkDown from "react-markdown";
import CodeBlock from "../CodeBlock";
import gfm from "remark-gfm";

import "./index.scss";

interface MdEditProp {
  content: string;
}

export default memo(MdPresentation);
function MdPresentation(prop: MdEditProp) {
  const { content } = prop;
  return (
    <MarkDown
      className="md-presentation"
      components={{
        code: ({ node, ...p }) => <CodeBlock {...p} />,
      }}
      children={content}
      remarkPlugins={[gfm]}
    />
  );
}
