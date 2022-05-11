import { StarsPipe } from './stars.pipe';

describe('StarsPipe', () => {
  let pipe: StarsPipe;

  beforeEach(() => {
    pipe = new StarsPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return 5 stars when rating is 10', () => {
    expect(pipe.transform(10)).toBe('⭐⭐⭐⭐⭐');
  });

  it('should return 5 stars when rating greater than 10', () => {
    expect(pipe.transform(100)).toBe('⭐⭐⭐⭐⭐');
  });

  it('should return 1 star for negative rating', () => {
    expect(pipe.transform(-1)).toBe('⭐');
  });

  const testCases = [
    { input: 0, expected: '⭐' },
    { input: 1, expected: '⭐' },
    { input: 2, expected: '⭐' },
    { input: 3, expected: '⭐⭐' },
    { input: 4, expected: '⭐⭐' },
    { input: 5, expected: '⭐⭐⭐' },
    { input: 6, expected: '⭐⭐⭐' },
    { input: 7, expected: '⭐⭐⭐⭐' },
    { input: 8, expected: '⭐⭐⭐⭐' },
    { input: 9, expected: '⭐⭐⭐⭐⭐' },
    { input: 10, expected: '⭐⭐⭐⭐⭐' },
  ];

  testCases.forEach(({ input, expected }) => {
    it(`should return ${expected} star when rating is ${input}`, () => {
      expect(pipe.transform(input)).toBe(expected);
    });
  });
});
