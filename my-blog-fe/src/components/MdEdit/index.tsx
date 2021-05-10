import { useState, useEffect } from "react";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
// 导入编辑器的样式
import "react-markdown-editor-lite/lib/index.css";

import "./index.scss";

const mdParser = new MarkdownIt(/* Markdown-it options */);

interface MdEditProp {
  setContent: (content: string) => void;
}

export default function MdEdit(prop: MdEditProp) {
  const { setContent } = prop;
  return (
    <div>
      <MdEditor
        style={{ height: "500px" }}
        renderHTML={(text) => mdParser.render(text)}
        onChange={(data) => setContent(data.text)}
      />
    </div>
  );
}
