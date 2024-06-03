import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy, RmqRecordBuilder } from '@nestjs/microservices';

@Injectable()
export class RabbitMQService {
  constructor(
    @Inject('test-query-module') private readonly client: ClientProxy,
  ) {}

  public send(pattern: string, data: any) {
    const record = new RmqRecordBuilder(data)
      .setOptions({
        headers: {
          ['x-version']: '1.0.0',
        },
        priority: 3,
      })
      .build();

    return this.client.send(pattern, record).subscribe();
  }
}
