import operate from '../logic/operate';

describe('Operate testing', () => {
  test('Add', () => {
    const result = operate('5', '3', '+');

    expect((result)).toBe('8');
  });
  test('Substract', () => {
    const result = operate('5', '3', '-');

    expect((result)).toBe('2');
  });
  test('Multiply', () => {
    const result = operate('5', '3', 'x');

    expect((result)).toBe('15');
  });
  test('Division', () => {
    const result = operate('5', '2', '/');

    expect((result)).toBe('2.5');
  });
  test('Modulus', () => {
    const result = operate('10', '5', '%');

    expect((result)).toBe('2');
  });
});
