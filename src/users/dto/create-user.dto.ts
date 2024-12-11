import { ApiProperty } from '@nestjs/swagger'
import { IsOptional, IsEmail, Matches } from 'class-validator'
export class CreateUserDto {
  @ApiProperty({
    example: 'ntdanh1298@gmail.com'
  })
  @IsEmail()
  email: string

  @ApiProperty({
    example: '+84937533477'
  })
  @Matches(/^\+\d{11,}$/, {
    message: 'Phone number must start with "+" and have at least 11 digits.'
  })
  phone: string

  @ApiProperty({ example: 'Danh@123' })
  @Matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
    message:
      'Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.'
  })
  password: string
}
