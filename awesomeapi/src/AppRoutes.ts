import * as Router from "koa-router";
import { Container, Inject } from "typescript-ioc";
import { IRouterContext } from "koa-router";
import LogController from "./Controllers/LogController";

export default class AppRoutes {

  constructor(@Inject private logController: LogController) {
  }

  public setup(router: Router) {

    router.post(
      'log-message',
      '/log/:component/',
      (ctx: IRouterContext) => this.logController.save(ctx)
    );
  }

}
