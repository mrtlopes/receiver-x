import { Container, Inject, Singleton } from "typescript-ioc";
import * as Amqp from "amqp-ts";
import RabbitConfig from "../RabbitConfig";

interface ILogProducerMessage {
  service: string;
  message: string;
}

export class LogProducer {

  private queueName = 'awesomelog';

  constructor(@Inject private rabbitConfig: RabbitConfig) {}

  public produce(message: ILogProducerMessage): boolean {
    const msg = new Amqp.Message(message);
    try {
      this.rabbitConfig.exchange.send(msg, this.queueName);
    }
    catch(e) {
      return false;
    }
    return true;
  }
}
