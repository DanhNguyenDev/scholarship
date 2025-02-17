import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!'
  }

  getVersion(): string {
    return `1.${Math.random() * 100}.0`
  }
}
