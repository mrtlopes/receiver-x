import * as Koa from "koa";
import * as bodyParser from "koa-bodyparser";
import * as logger from "koa-logger";
import * as Router from "koa-router";
import * as serve from "koa-static";
import * as path from "path";
import { Container, Inject } from "typescript-ioc";
import AppRoutes from "./AppRoutes";

declare var process : {
  env: {
    PORT: number
  }
}

export default class AwesomeApi {

  constructor(@Inject private appRoutes: AppRoutes) {
  }

  private async createApp() {
    const app: Koa = new Koa();
    const router: Router = new Router();
    app.use(logger());
    app.use(bodyParser());
    app.use(serve(path.resolve(__dirname,  '../public')));
    this.appRoutes.setup(router);
    app.use(router.routes());
    app.use(router.allowedMethods());
    return Promise.resolve(app);
  }

  public async start() {
    const port: number = process.env.PORT || 3000;
    const app = await this.createApp();
    const server = app.listen(port);
    console.log(`Listening on port ${port}`);
    return Promise.resolve(server);
  }

}
