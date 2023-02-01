import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Post } from 'src/posts/posts.model';
import { Role } from 'src/roles/roles.model';
import { UserRoles } from 'src/roles/user-roles.model';

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Integer id of a user' })
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true })
  id: number;

  @ApiProperty({
    example: '052dfa89-1d5d-4201-b7f8-0a1999b86b4f',
    description: 'Unique id of a user',
  })
  @Column({
    type: DataType.UUID,
    allowNull: false,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  uid: string;

  @ApiProperty({ example: 'user@mail.com', description: 'User email' })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @ApiProperty({ example: 'hhf827hf23hf', description: 'User password' })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @ApiProperty({ example: 'true', description: 'Is a user banned by an admin' })
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  banned: boolean;

  @ApiProperty({ example: 'Hateful speech', description: 'Reason of ban' })
  @Column({ type: DataType.STRING, allowNull: true })
  banReason: string;

  @ApiProperty({
    example: ['role1.uid', 'role2.uid'],
    description: 'User roles',
  })
  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];

  @ApiProperty({
    example: ['post1.uid', 'post2.uid'],
    description: 'User posts',
  })
  @HasMany(() => Post)
  posts: Post[];
}
