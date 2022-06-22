import { IsEmail, IsNotEmpty, Length, Matches } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

// ApiProperty
export class UpdatePasswordDto {
  @ApiProperty({
    description: 'User password',
    required: true,
    type: String,
    example: 'james',
  })
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    description: 'New Password',
    required: true,
    type: String,
    example: 'james',
  })
  @IsNotEmpty()
  //   string must have at least 8 characters
  @Length(6, 20)
  //   string must contain at least one lowercase character
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
  new_password: string;
}
