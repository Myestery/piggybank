import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class MicroService {
  constructor(
    // @Inject('DATABASE_REPLICATION_SERVICE') private client: ClientProxy,
  ) {}

  // @OnEvent('business.should.be.replicated.by.microservice')
  // async publishEvent(event: BusinessCreatedEvent) {
  //   console.log('event emmitter received');
  //   // this.client.emit('business.created', event);
  // }

  // onEvent(data: any) {
  //   console.log(data);
  // }
}
