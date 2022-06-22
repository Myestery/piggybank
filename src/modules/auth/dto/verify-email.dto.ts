import { IsEmail, IsNotEmpty, IsUUID } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

// ApiProperty
export class VerifyEmailDto {
  @ApiProperty({
    description: 'User email',
    required: true,
    type: String,
    example: 'user@user.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'User verification code from email',
    required: true,
    type: String,
    example: 'bf32dfa3-0417-4850-a234-00836a85f4be'
  })
  @IsUUID()
  verification_code: string;
}
