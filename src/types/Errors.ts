import { ApiProperty } from '@nestjs/swagger';
type errorType = typeof ADMIN_DISABLED;
let ADMIN_DISABLED = {
    code: 'adminDisabled',
    message: 'This Admin has been disabled, contact super admin',
    status: 403,
  },
  BUSINESS_DEACTIVATED = {
    code: 'businessDeactivated',
    message: 'Business Deactivated. Contact support for more info',
    status: 403,
  },
  COULD_NOT_LOGIN = {
    code: 'wrongLogin',
    message: "Credentials didn't match our records",
    status: 401,
  },
  EMAIL_VERIFICATION_NEEDED = {
    code: 'emailVerificationNeeded',
    message: 'Email Verification Needed',
    status: 401,
  },
  EMAIL_VERIFICATION_EXPIRED = {
    code: 'emailVerificationExpired',
    message: 'Email Verification Expired',
    status: 401,
  },
  INCORRECT_VERIFICATION_CODE = {
    code: 'incorrectVerificationCode',
    message: 'Incorrect Verification Code',
    status: 400,
  },
  NOT_LOGGED_IN = {
    code: 'notLoggedIn',
    message: 'You need to login to access this route',
    status: 403,
  },
  USER_NOT_FOUND = {
    code: 'userNotFound',
    message: 'User not found',
    status: 404,
  },
  VERIFICATION_CODE_EXPIRED = {
    code: 'verificationCodeExpired',
    message: 'Verification Code Expired',
    status: 401,
  };
export const Errors: Record<string, errorType> = {
  ADMIN_DISABLED,
  BUSINESS_DEACTIVATED,
  COULD_NOT_LOGIN,
  EMAIL_VERIFICATION_NEEDED,
  EMAIL_VERIFICATION_EXPIRED,
  INCORRECT_VERIFICATION_CODE,
  NOT_LOGGED_IN,
  USER_NOT_FOUND,
  VERIFICATION_CODE_EXPIRED,
};

export class ErrorDto {
  @ApiProperty({
    type: 'object',
    description: 'Error message',
    example: ADMIN_DISABLED,
  })
  ADMIN_DISABLED: typeof ADMIN_DISABLED;
  @ApiProperty({
    type: 'object',
    description: 'Error message',
    example: ADMIN_DISABLED,
  })
  BUSINESS_DEACTIVATED: typeof BUSINESS_DEACTIVATED;
  @ApiProperty({
    type: 'object',
    description: 'Error message',
    example: COULD_NOT_LOGIN,
  })
  COULD_NOT_LOGIN: typeof COULD_NOT_LOGIN;
  @ApiProperty({
    type: 'object',
    description: 'Error message',
    example: EMAIL_VERIFICATION_NEEDED,
  })
  EMAIL_VERIFICATION_NEEDED: typeof EMAIL_VERIFICATION_NEEDED;
  @ApiProperty({
    type: 'object',
    description: 'Error message',
    example: EMAIL_VERIFICATION_EXPIRED,
  })
  EMAIL_VERIFICATION_EXPIRED: typeof EMAIL_VERIFICATION_EXPIRED;
  @ApiProperty({
    type: 'object',
    description: 'Error message',
    example: INCORRECT_VERIFICATION_CODE,
  })
  INCORRECT_VERIFICATION_CODE: typeof INCORRECT_VERIFICATION_CODE;
  @ApiProperty({
    type: 'object',
    description: 'Error message',
    example: NOT_LOGGED_IN,
  })
  NOT_LOGGED_IN: typeof NOT_LOGGED_IN;
  @ApiProperty({
    type: 'object',
    description: 'Error message',
    example: USER_NOT_FOUND,
  })
  USER_NOT_FOUND: typeof USER_NOT_FOUND;
  @ApiProperty({
    type: 'object',
    description: 'Error message',
    example: VERIFICATION_CODE_EXPIRED,
  })
  VERIFICATION_CODE_EXPIRED: typeof VERIFICATION_CODE_EXPIRED;
}
