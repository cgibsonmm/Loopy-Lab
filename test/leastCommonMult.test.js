const { leastCommonMult } = require('../loop');

describe('leastCommonMult', () => {
  test('it should find the least common multiple of two inputted numbers.', () => {
    const expected = leastCommonMult(1, 13);
    const actual = 360360;
    expect(expected).toBeEqual(actual);
  });

  test('it should find the least common multiple of two inputted numbers.', () => {
    const expected = leastCommonMult(3, 4);
    const actual = 12;
    expect(expected).toBeEqual(actual);
  });
  test('it should find the least common multiple of two inputted numbers.', () => {
    const expected = leastCommonMult(30, 45);
    const actual = 90;
    expect(expected).toBeEqual(actual);
  });
});
