import { Directory } from 'src/domain/directory/entity';

export interface DirectoryRepositoryIF {
  findOneById(id: string): Directory | null;
  findAllByOwnerId(id: string): Directory[];
  store(directory: Directory): void;
  update(directory: Directory): void;
  delete(directory: Directory): void;
}
