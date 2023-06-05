import { Note } from 'src/domain/note/entity';

export interface NoteRepositoryIF {
  findById(id: string): Note | null;
  findByDirectoryId(id: string): Note[];
  store(note: Note): void;
}
