import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { RabbitMQService } from './rabbit-mq.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'test-query-module',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'test-queue',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [],
  providers: [RabbitMQService],
  exports: [RabbitMQService],
})
export class RabbitMQModule {}
