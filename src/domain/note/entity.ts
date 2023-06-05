import { NoteId } from 'src/domain/note/valueObject';

export class Note {
  private readonly _id: NoteId;
  private _directoryId: string;
  private _content: string;
  private _createdAt: Date;
  private _updatedAt: Date;

  constructor(
    id: NoteId,
    directoryId: string,
    content: string,
    createdAt: Date,
    updatedAt: Date,
  ) {
    this._id = id;
    this._directoryId = directoryId;
    this._content = content;
    this._createdAt = createdAt;

    if (updatedAt < createdAt) {
      throw new Error('updatedAt must be in the future than createdAt.');
    }
    this._updatedAt = updatedAt;
  }
}
