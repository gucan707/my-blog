import React from "react";
import "./App.css";

import Tag from "./components/Tag/index";
import ArticleBrief, { ArticleBriefProp } from "./components/ArticleBrief";
import PagerBtn, { PagerBtnProp } from "./components/PagerBtn";
import Bubble from "./components/Bubble";
import Home from "./page/home";
import Article from "./page/article";
import Admin from "./page/admin";

function App() {
  // const articleProp:ArticleBriefProp = {
  //   title: "CSS世界笔记",
  //   brief: "css世界笔记css世界笔记css世界笔记css世界笔记css世界笔记css世界笔记css世界笔记css世界笔记css世界笔记css世界笔记css世界笔记css世界笔记css世界笔记css世界笔记css世界笔记css世界笔记css世界笔记css世界笔记css世界笔记css世界笔记css世界笔记css世界笔记css世界笔记css世界笔记css世界笔记css世界笔记css世界笔记css世界笔记css世界笔记",
  //   modifyTime: Date.now(),
  //   tagNames:['CSS','笔记']
  // }

  return (
    <div className="App">
      {/* <ArticleBrief {...articleProp}/> */}
      {/* <PagerBtn content='left' current={1}/>
      <PagerBtn content={1} current={1}/>
      <PagerBtn content='right' current={1}/> */}
      {/* <Bubble color='blue'/> */}
      <Home />
      {/* <Admin /> */}
      {/* <Article></Article> */}
    </div>
  );
}

export default App;
