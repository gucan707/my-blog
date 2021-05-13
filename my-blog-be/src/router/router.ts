import Router from "koa-router";

import {
  deleteArticle,
  getAllArticles,
  getArticle,
  postArticle,
  putArticle,
} from "../middlewares/article";
import { getTag, postTag, deleteTag, putTag } from "../middlewares/tag";

const router = new Router();

router.get("/article", getAllArticles);
router.get("/article/:id", getArticle);
router.post("/article", postArticle);
router.put("/article/:id", putArticle);
router.delete("/article/:id", deleteArticle);

router.get("/tag", getTag);
router.post("/tag", postTag);
router.delete("/tag", deleteTag);

export default router;
