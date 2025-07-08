test('string', () => {

  const name = 'ioo';

  expect(name).toBe('ioo');
  expect(name).toMatch(/ioo/);
});