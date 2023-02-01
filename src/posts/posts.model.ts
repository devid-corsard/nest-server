import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Role } from 'src/roles/roles.model';
import { UserRoles } from 'src/roles/user-roles.model';
import { User } from 'src/users/users.model';

interface PostCreationAttrs {
  title: string;
  content: string;
  userId: string;
  image: string;
}

@Table({ tableName: 'posts' })
export class Post extends Model<Post, PostCreationAttrs> {
  @ApiProperty({
    example: '052dfa89-1d5d-4201-b7f8-0a1999b86b4f',
    description: 'Unique id of a post',
  })
  @Column({
    type: DataType.UUID,
    allowNull: false,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  uid: string;

  @ApiProperty({ example: 'Some title', description: 'Title of a post' })
  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @ApiProperty({ example: 'bla bla bla', description: 'Contents of a post' })
  @Column({ type: DataType.STRING, allowNull: false })
  content: string;

  @ApiProperty({
    example: 'asdasd7asd7',
    description: 'Name of an image',
  })
  @Column({ type: DataType.STRING, allowNull: true })
  image: string;

  @ApiProperty({
    example: '052dfa89-1d5d-4201-b7f8-0a1999b86b4f',
    description: 'Unique id of a user',
  })
  @ForeignKey(() => User)
  @Column({ type: DataType.UUID })
  userId: string;

  @BelongsTo(() => User)
  author: User;
}
