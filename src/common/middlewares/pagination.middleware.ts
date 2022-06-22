import { Inject, Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class PaginationMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    req.query.per_page = +req.query.per_page || 10;
    req.query.page = +req.query.page || 1;
    next();
  }
}
