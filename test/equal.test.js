test('test toBe', () => {
  let name = 'ioo';
  let hello = `hello ${name}`;

  expect(hello).toBe('hello ioo');
});

test('test toEqual', () => {
  let person = {
    id: 'ioo'
  };
  Object.assign(person, { name: 'ioo' });

  expect(person).toEqual({
    id: "ioo",
    name: "ioo"
  });
});