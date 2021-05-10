import { useState } from "react";

import MdEdit from "../../components/MdEdit";
import Button from "../../components/Button";
import Tag from "../../components/Tag";

import "./index.scss";

export default function Admin() {
  const [content, setContent] = useState("");
  const [tagName, setTagName] = useState("");
  const [isAddingTag, setIsAddingTag] = useState(false);
  const tags = [
    "CSS",
    "JS",
    "TS",
    "踩坑记录",
    "数据结构",
    "12",
    "1234",
    "123",
    "11",
    "22",
    "333",
    "44",
    "3333",
    "55",
    "1",
    "098",
  ];

  return (
    <div className="admin">
      <div className="all-tags">
        {tags.map((tag, index) => (
          <Tag content={tag} isActive={false} key={index} />
        ))}
        <span className="add-btn" onClick={() => setIsAddingTag(true)}>
          <Tag content="+" isActive={false} />
        </span>
      </div>
      <div
        className={isAddingTag ? "tag-add" : "tag-add hidden"}
        onClick={() => setIsAddingTag(false)}
      >
        <div className="container" onClick={(e) => e.stopPropagation()}>
          <input type="text" onChange={(e) => setTagName(e.target.value)} />
          <div className="btns">
            <Button content="确定" />
            <Button content="取消" onClick={() => setIsAddingTag(false)} />
          </div>
        </div>
      </div>
      <MdEdit setContent={setContent} />
      <Button content="提交" />
    </div>
  );
}
