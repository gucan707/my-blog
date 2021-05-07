import { useEffect, useState } from "react";

import MdEdit from "../../components/MdEdit";

import "./index.scss";

export default function Article() {
  const [articleInfo, setArticleInfo] = useState({ content: "" });
  return (
    <div>
      <MdEdit />
      {/* <MdEdit
        readOnly={false}
        value={articleInfo.content}
        onChange={({ text }) =>
          setArticleInfo({ ...articleInfo, content: text })
        }
      /> */}
    </div>
  );
}
