import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class FilesService {
  async createFile(file): Promise<string> {
    try {
      const fileName = randomUUID() + '.jpg';
      const filePath = path.resolve(__dirname, '..', 'static');

      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true });
      }

      fs.writeFileSync(path.join(filePath, fileName), file.buffer);

      return fileName;
    } catch (e) {
      throw new HttpException(
        'File saving error',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }
}
