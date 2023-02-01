import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  @ApiProperty({ example: 'Some Title', description: 'Title of a post' })
  readonly title: string;

  @IsNotEmpty()
  @ApiProperty({ example: 'bla bla bla', description: 'Contents of a post' })
  readonly content: string;

  @IsUUID(4, { message: 'Shoud be uuid v4' })
  @ApiProperty({
    example: '1fde7c30-7876-430b-8f3c-2d8ce0450442',
    description: 'User uid',
  })
  readonly userId: string;
}
