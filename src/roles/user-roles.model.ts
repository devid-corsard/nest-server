import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User } from 'src/users/users.model';
import { Role } from './roles.model';

@Table({ tableName: 'user_roles', createdAt: false, updatedAt: false })
export class UserRoles extends Model<UserRoles> {
  @ApiProperty({
    example: '052dfa89-1d5d-4201-b7f8-0a1999b86b4f',
    description: 'Unique id of a record',
  })
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  uid: string;

  @ApiProperty({
    example: '052dfa89-1d5d-4201-b7f8-0a1999b86b4f',
    description: 'Unique id of a role',
  })
  @ForeignKey(() => Role)
  @Column({ type: DataType.UUID })
  roleId: string;

  @ApiProperty({
    example: '052dfa89-1d5d-4201-b7f8-0a1999b86b4f',
    description: 'Unique id of a user',
  })
  @ForeignKey(() => User)
  @Column({ type: DataType.UUID })
  userId: string;
}
