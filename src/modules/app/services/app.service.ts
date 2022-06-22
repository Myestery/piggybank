import { Inject, Injectable } from "@nestjs/common";

import { ClientProxy } from "@nestjs/microservices";
import { OnEvent } from "@nestjs/event-emitter";

@Injectable()
export class AppService {
  constructor() {}

  getVersion() {
    return {
      version: "1.0.0",
      last_edited: "2022-05-10",
    };
  }
}
