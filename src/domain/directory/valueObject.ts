export class DirectoryId {
  private readonly value: string;

  constructor(value: string) {
    if (value.length == 0) {
      throw new Error('Directory ID is required.');
    }
  }
}

export class DirectoryTitle {
  private readonly value: string;

  constructor(value: string) {
    if (value.length < 3 || value.length > 20) {
      throw new Error('Directory title must be in 03-20 characters.');
    }
  }
}
