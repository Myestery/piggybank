// const sha512 = require('js-sha512').sha512;
// import * as requestIp from 'request-ip';
// import {
//   Injectable,
//   CanActivate,
//   ExecutionContext,
//   UnauthorizedException,
// } from '@nestjs/common';
// import { Observable } from 'rxjs';
// require('dotenv').config();
// @Injectable()
// export class MonnifyWebhookGuard implements CanActivate {
//   canActivate(
//     context: ExecutionContext,
//   ): boolean | Promise<boolean> | Observable<boolean> {
//     const request = context.switchToHttp().getRequest();
//    let ip =  requestIp.getClientIp( request);
//     const signature = request.headers['monnify-signature'];
//     const DEFAULT_MERCHANT_CLIENT_SECRET =
//       process.env.APP_ENV == 'production'
//         ? process.env.MONNIFY_API_SECRET
//         : process.env.MONNIFY_TEST_API_SECRET;

//     const computeHash = (requestBody) => {
//       const result = sha512.hmac(DEFAULT_MERCHANT_CLIENT_SECRET, requestBody);
//       return result;
//     };

//     const stringifiedRequestBody = JSON.stringify(request.body);
//     const computedHash = computeHash(stringifiedRequestBody);
//     // console.log('Computed hash', computedHash);
//     console.log(ip);
//     if (
//       computedHash === signature &&
//       (ip.includes('35.242.133.146') || ip.includes('::1'))
//     ) {
//       return true;
//     }

//     throw new UnauthorizedException('Unauthorized');
//   }
// }
