import { Note } from 'src/domain/note/entity';
import { NoteId } from 'src/domain/note/valueObject';

describe('Note Entity', () => {
  it('Create Note instance', () => {
    const note = new Note(
      new NoteId('ID'),
      '1',
      'something',
      new Date(),
      new Date(),
    );
    expect(note);
  });

  it('Throw a Error if NoteId is valid.', () => {
    expect(() => {
      return new Note(new NoteId(''), '1', 'something', new Date(), new Date());
    }).toThrowError();
  });

  it('Throw a Error if updatedAt is past from createdAt.', () => {
    expect(() => {
      const currentDate = new Date();
      const fiveMinutesAgo = new Date(currentDate.getTime() - 5 * 60 * 1000);
      return new Note(
        new NoteId('ID'),
        '1',
        'something',
        currentDate,
        fiveMinutesAgo,
      );
    }).toThrowError();
  });
});
