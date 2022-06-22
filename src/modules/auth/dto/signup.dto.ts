import { IsEmail, IsNotEmpty, Length, Matches } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

// ApiProperty
export class SignUpDto {
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
  @Length(6, 20)
  @Matches(/[a-z]/, {
    message: 'Password must contain at least one lowercase character',
  })
  //   string must contain at least one uppercase character
  @Matches(/[A-Z]/, {
    message: 'Password must contain at least one uppercase character',
  })
  //   string must contain at least one number
  @Matches(/[0-9]/, { message: 'Password must contain at least one number' })
  //   string must contain at least one special character
  @Matches(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, {
    message: 'Password must contain at least one special character',
  })
  password: string;

  @ApiProperty({
    description: 'User phone',
    required: true,
    type: String,
    example: '08012345678',
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
    description: 'User Lastname',
    required: true,
    type: String,
    example: 'james',
  })
  @IsNotEmpty()
  lastname: string;

  @ApiProperty({
    description: 'Company Name',
    required: true,
    type: String,
    example: 'World Bank',
  })
  @IsNotEmpty()
  company_name: string;
}
