import { Note } from 'src/domain/note/entity';

export interface NoteRepositoryIF {
  findOneById(id: string): Note | null;
  findAllByDirectoryId(id: string): Note[];
  store(note: Note): void;
  update(note: Note): void;
  delete(note: Note): void;
}
