import { IsEmail, IsNotEmpty, Length, Matches } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

// ApiProperty
export class SupportMessageDto {
  @ApiProperty({
    description: 'User password',
    required: true,
    type: String,
    example: 'james',
  })
  @IsNotEmpty()
  message: string;

  @ApiProperty({
    description: 'User Email',
    required: true,
    type: String,
    example: 'james',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'User Phone Number',
    required: true,
    type: String,
    example: 'james',
  })
  @IsNotEmpty()
  phone: string;

  @ApiProperty({
    description: 'User Firstname',
    required: true,
    type: String,
    example: 'james',
  })
  @IsNotEmpty()
  firstname: string;

  @ApiProperty({
    description: 'User lastname',
    required: true,
    type: String,
    example: 'james',
  })
  lastname: string;
}
