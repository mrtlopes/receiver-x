import { Container, Inject, Singleton } from "typescript-ioc";
import { IRouterContext } from "koa-router";

@Singleton
export default class LogController {

  public async save(ctx: IRouterContext) {
    const component: string = ctx.params.component;
    ctx.body = `Your component is: ${component}`;
  }
}
