import { Container, Inject, Singleton } from "typescript-ioc";
import { Context } from "koa";
import { LogProducer } from "../Services/Queue/Messages/LogProducer";

@Singleton
export default class LogAction {

  constructor(@Inject private logProducer: LogProducer) {}

  public async save(ctx: Context) {
    const payload = {
      service: ctx.params.service,
      message: ctx.params.message,
    };
    const sent = this.logProducer.produce(payload);
    ctx.body = {
      "success" : sent,
      payload
    };
  }
}
