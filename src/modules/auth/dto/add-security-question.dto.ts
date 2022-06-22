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
  export class AddSecurityQuestionDto {
    @ApiProperty({
      description: 'User password',
      required: true,
      type: String,
      example: 'password',
    })
    @Length(6, 20)
    password: string;
  
    @ApiProperty({
      description: 'Security Question',
      required: true,
      type: String,
      example: 'Who is your favorite actor?',
    })
    @IsNotEmpty()
    question: string;

    @ApiProperty({
        description: 'Answer',
        required: true,
        type: String,
        example: 'Tom Cruise',
      })
      @IsNotEmpty()
      answer: string;
  }
  