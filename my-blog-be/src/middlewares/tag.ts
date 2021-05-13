import { Context, Middleware } from "koa";
import { IMiddleware } from "koa-router";

export const postTag: IMiddleware = async (ctx) => {
  ctx.body = "addTag";
};

export const deleteTag: IMiddleware = async (ctx) => {
  ctx.body = "deleteTag";
};

export const putTag: IMiddleware = async (ctx) => {
  ctx.body = "changeTag";
};

export const getTag: IMiddleware = async (ctx) => {
  ctx.body = "searchTag";
};
