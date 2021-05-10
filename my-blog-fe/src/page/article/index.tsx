import { useEffect, useState } from "react";

import MdPresentation from "../../components/MdPresentation";

import { mdArticle } from "../../data/md";

import "./index.scss";

export default function Article() {
  return (
    <div>
      <MdPresentation content={mdArticle} />
    </div>
  );
}
