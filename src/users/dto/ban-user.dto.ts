import { ApiProperty } from '@nestjs/swagger';

export class BanUserDto {
  @ApiProperty({
    example: '1fde7c30-7876-430b-8f3c-2d8ce0450442',
    description: 'User uid',
  })
  readonly userId: string;

  @ApiProperty({ example: 'Hateful speech', description: 'Ban reason' })
  readonly banReason: string;
}
