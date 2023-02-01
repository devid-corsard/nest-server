import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID } from 'class-validator';

export class AddRoleDto {
  @ApiProperty({ example: 'ADMIN', description: 'Role value' })
  @IsString({ message: 'Should be a string' })
  readonly value: string;

  @IsUUID(4, { message: 'Shoud be uuid v4' })
  @ApiProperty({
    example: '1fde7c30-7876-430b-8f3c-2d8ce0450442',
    description: 'User uid',
  })
  readonly userId: string;
}
