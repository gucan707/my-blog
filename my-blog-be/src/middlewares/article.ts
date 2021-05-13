import { Context } from "koa";
import { IMiddleware } from "koa-router";

export const postArticle: IMiddleware = async (ctx) => {
  ctx.body = "addArticle";
};

export const deleteArticle: IMiddleware = async (ctx) => {
  ctx.body = "deleteArticle";
};

export const putArticle: IMiddleware = async (ctx) => {
  ctx.body = "changeArticle";
};

export const getArticle: IMiddleware = async (ctx) => {
  ctx.body = ctx.params.id;
};

export const getAllArticles: IMiddleware = async (ctx) => {
  ctx.body = "all";
};
