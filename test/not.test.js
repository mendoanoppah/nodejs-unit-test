test('string .not', () => {
  
  const name = 'ioo';

  expect(name).not.toBe('pisang');
  expect(name).not.toEqual('apel');
  expect(name).not.toMatch(/trump/);
});

test('number .not', () => {
  const value = 2 + 2;

  expect(value).not.toBeGreaterThan(6);
  expect(value).not.toBeLessThan(3);
  expect(value).not.toBe(10);
});