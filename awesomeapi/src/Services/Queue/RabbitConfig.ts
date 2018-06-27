import * as amqp from 'amqp-ts';

export default class RabbitConfig {
	public readonly connection: amqp.Connection;
	public readonly exchange: amqp.Exchange;

  constructor(domain: string) {
		this.connection = new amqp.Connection(process.env.RABBITMQ_URL);
		this.exchange = this.connection.declareExchange('AwesomeApiExchange');
	}
}
