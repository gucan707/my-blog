import Koa, { Context } from "koa";
import cors from "@koa/cors";
import koaBody from "koa-body";
import { createConnection } from "typeorm";

import router from "./router/router";

// 初始化 Koa 应用实例
createConnection()
  .then(() => {
    const app = new Koa();

    // 注册中间件
    app.use(cors());
    app.use(koaBody());

    // 响应用户请求
    // app.use((ctx:Context) => {
    //   ctx.body = 'Hello Koa';
    // });

    app.use(router.routes()).use(router.allowedMethods());

    // 运行服务器
    app.listen(8080);
  })
  .catch((err: string) => console.log("TypeORM connection error:", err));
