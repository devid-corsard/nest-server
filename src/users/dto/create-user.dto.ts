import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'user@mail.com', description: 'User email' })
  @IsString({ message: 'Should be a string' })
  @IsEmail({}, { message: 'Wrong email' })
  readonly email: string;

  @ApiProperty({ example: 'jkahsd6asd76', description: 'User password' })
  @IsString({ message: 'Should be a string' })
  @Length(8, 24, {
    message: 'Shoud contain at least 8 symbols, up to 24 symbols',
  })
  readonly password: string;
}
