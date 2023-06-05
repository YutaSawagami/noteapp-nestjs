export class NoteId {
  private readonly value: string;

  constructor(value: string) {
    if (value.length == 0) {
      throw new Error('Note ID is required.');
    }
  }
}
