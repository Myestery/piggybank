import { IsEmail, IsNotEmpty, IsUUID } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

// ApiProperty
export class ResendEmailDto {
  @ApiProperty({
    description: 'User email',
    required: true,
    type: String,
    example: 'user@user.com',
  })
  @IsEmail()
  email: string;
}
