import {
  Body,
  Controller,
  FileTypeValidator,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dto/create-post.dto.ts';
import { Post as TextPost } from './posts.model';
import { PostsService } from './posts.service';

@ApiTags('Posts CRUD endpoints')
@Controller('posts')
export class PostsController {
  constructor(private postsServise: PostsService) {}

  @ApiOperation({ summary: 'Create post' })
  @ApiResponse({ status: 201, type: TextPost })
  @Post()
  @UseInterceptors(FileInterceptor('image'))
  createPost(
    @Body() dto: CreatePostDto,
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 2 * 1024 * 1024 }),
          new FileTypeValidator({ fileType: 'image/jpeg' }),
        ],
        fileIsRequired: false,
      })
    )
    image
  ) {
    return this.postsServise.create(dto, image);
  }
}
