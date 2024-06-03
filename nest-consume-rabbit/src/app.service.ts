import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(data: any) {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log(`done processing data: ${JSON.stringify(data)}`);
        resolve();
      }, 10000);
    });
  }
}
