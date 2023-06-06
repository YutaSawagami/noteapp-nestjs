import { Directory } from 'src/domain/directory/entity';
import { DirectoryTitle, DirectoryId } from 'src/domain/directory/valueObject';
import { NoteId } from 'src/domain/note/valueObject';

describe('Note Entity', () => {
  it('Create Directory instance', () => {
    const directory = new Directory(
      new DirectoryId('ID'),
      'user-ID-1',
      new DirectoryTitle('Title'),
      [new NoteId('1'), new NoteId('2')],
      new Date(),
      new Date(),
    );
    expect(directory);
  });
});
