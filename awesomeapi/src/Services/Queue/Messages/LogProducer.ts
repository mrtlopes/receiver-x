import IProducer from "./IProducer";
export class LogProducer extends IProducer {

  getQueueName() {
    return 'awesomeLog';
  }

}
