import { writeFile } from 'fs/promises';

export class FileService {
  async upload(file: Express.Multer.File, path) {
    return await writeFile(path, file.buffer);
  }
}
