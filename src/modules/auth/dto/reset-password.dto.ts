import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsUUID,
  Length,
  Matches,
} from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

// ApiProperty
export class ResetPasswordDto {
  @ApiProperty({
    description: 'User password',
    required: true,
    type: String,
    example: 'password',
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
    description: 'Email Code',
    required: true,
    type: String,
    example: '12345678-1234-1234-1234-123456789012',
  })
  @IsUUID()
  token: string;
}
