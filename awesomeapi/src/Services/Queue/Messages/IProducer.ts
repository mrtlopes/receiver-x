import { Container, Inject, Singleton } from "typescript-ioc";
import * as Amqp from "amqp-ts";
import RabbitConfig from "../RabbitConfig";


interface IProducerMessage {
  service: string;
  message: string;
}

export default abstract class IProducer {

  constructor(@Inject private rabbitConfig: RabbitConfig) {}

  protected abstract getQueueName(): string;

  protected decorateMessage(message: IProducerMessage): IProducerMessage {
    return message;
  };

  public produce(message: IProducerMessage): boolean {
    const msg = new Amqp.Message(this.decorateMessage(message));
    try {
      this.rabbitConfig.exchange.send(msg, this.getQueueName());
    }
    catch(e) {
      return false;
    }
    return true;
  }
}
