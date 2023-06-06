import { NoteId } from 'src/domain/note/valueObject';
import { DirectoryTitle, DirectoryId } from 'src/domain/directory/valueObject';

export class Directory {
  private readonly _id: DirectoryId;
  private _ownerId: string;
  private _title: DirectoryTitle;
  private _notes: NoteId[];
  private _createdAt: Date;
  private _updatedAt: Date;

  constructor(
    id: DirectoryId,
    ownerId: string,
    title: DirectoryTitle,
    notes: NoteId[],
    createdAt: Date,
    updatedAt: Date,
  ) {
    this._id = id;
    this._ownerId = ownerId;
    this._title = title;
    this._notes = notes;
    this._createdAt = createdAt;

    if (updatedAt < createdAt) {
      throw new Error('updatedAt must be in the future than createdAt.');
    }
    this._updatedAt = updatedAt;
  }
}
