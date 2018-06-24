import * as Router from "koa-router";
import { Container, Inject } from "typescript-ioc";
import { Context } from "koa";
import LogAction from "./Logger/LogAction";

export default class AppRoutes {

  constructor(@Inject private logAction: LogAction) {}

  public setup(router: Router) {
    router.get('log-message', '/log/:service/:message',
      (ctx: Context) => this.logAction.save(ctx)
    );
  }

}
