import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import {
  Ctx,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('notifications')
  async getNotifications(
    @Payload() data: number[],
    @Ctx() context: RmqContext,
  ) {
    const channel = context.getChannelRef();
    const originalMsg = context.getMessage();

    await this.appService.getHello(data);

    channel.ack(originalMsg);
  }
}
