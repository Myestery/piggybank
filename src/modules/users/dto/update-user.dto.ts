import { IsEmail, IsNotEmpty, Length } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

// ApiProperty
export class UpdateUserDto {

  @ApiProperty({
    description: 'User Firstname',
    required: true,
    type: String,
    example: 'james',
  })
  @IsNotEmpty()
  firstname: string;

  @ApiProperty({
    description: 'User Lastname',
    required: true,
    type: String,
    example: 'james',
  })
  @IsNotEmpty()
  lastname: string;

  @ApiProperty({
    description: 'Phone Number',
    required: true,
    type: String,
    example: '09059052967',
  })
  @Length(11)
  phone_number: string;
}
