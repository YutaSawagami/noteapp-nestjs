import { DirectoryTitle, DirectoryId } from 'src/domain/directory/valueObject';

describe('DirectoryID', () => {
  it('DirectoryId is valid', () => {
    expect(new DirectoryId('1'));
  });

  it('DirectoryId is invalid', () => {
    expect(() => new DirectoryId('')).toThrowError();
  });
});

describe('DirectoryTitle', () => {
  test.each([['123'], ['1234567890'], ['12345678901234567890']])(
    'Length of title is valid',
    (title) => {
      expect(new DirectoryTitle(title));
    },
  );

  test.each([[''], ['12'], ['123456789012345678901']])(
    'Length of title is invalid',
    (title) => {
      expect(() => new DirectoryTitle(title)).toThrowError();
    },
  );
});
