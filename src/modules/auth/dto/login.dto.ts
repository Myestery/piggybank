import { IsEmail, IsNotEmpty } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

// ApiProperty
export class LoginDto {
  @ApiProperty({
    description: 'User email',
    required: true,
    type: String,
    example: 'user@user.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'User password',
    required: true,
    type: String,
    example: '123456',
  })
  @IsNotEmpty()
  password: string;
}
