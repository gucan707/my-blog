import { useState, useEffect } from "react";

import ArticleBrief, { ArticleBriefProp } from "../../components/ArticleBrief";
import Tag from "../../components/Tag";
import Bubble from "../../components/Bubble";
import MdPresentation from "../../components/MdPresentation";

import { mdArticle } from "../../data/md";

import "./index.scss";

let timer: number;
export default function Home() {
  const [updateBubble, setUpdateBubble] = useState({});
  useEffect(() => {
    setUpdateBubble({});
    timer = window.setInterval(() => {
      setUpdateBubble({});
    }, 3000);
    return () => clearInterval(timer);
  }, []);
  const articleProp: ArticleBriefProp = {
    title: "CSS世界笔记",
    brief:
      "css世界笔记css世界笔记css世界笔记css世界笔记css世界笔记css世界笔记css世界笔记css世界笔记css世界笔记css世界笔记css世界笔记css世界笔记css世界笔记css世界笔记css世界笔记css世界笔记css世界笔记css世界笔记css世界笔记css世界笔记css世界笔记css世界笔记css世界笔记css世界笔记css世界笔记css世界笔记css世界笔记css世界笔记css世界笔记",
    modifyTime: Date.now(),
    tagNames: ["CSS", "笔记"],
  };

  const tagNames = ["CSS", "JS", "TS", "数据结构"];
  return (
    <div className="home">
      <header>
        <h1>GCC's blog</h1>
      </header>
      <div className="home-content">
        <div className="left-content">
          <MdPresentation content={mdArticle} />

          {/* <ArticleBrief {...articleProp} />
          <ArticleBrief {...articleProp} />
          <ArticleBrief {...articleProp} /> */}
        </div>
        <div className="right-content">
          <div className="all-tags">
            <span>标签</span>
            <div>
              {tagNames.map((tagName, index) => (
                <Tag content={tagName} isActive={false} key={index} />
              ))}
            </div>
          </div>
          <div className="else">
            <span>something else...</span>
          </div>
        </div>
      </div>

      <Bubble color="pink" update={updateBubble} />
      <Bubble color="blue" update={updateBubble} />
    </div>
  );
}
