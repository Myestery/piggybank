import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { Observable } from 'rxjs';

// import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    let req = context.switchToHttp().getRequest();
    if (!req.user) {
      throw new UnauthorizedException({
        message: 'Unauthorized',
        status: false,
        data: {
          errorType: 'unauthorized',
        },
      });
    }
    if (req.user && req.auth) {
      return req.user;
    }
  }
}
