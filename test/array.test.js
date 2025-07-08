test('array', () => {
  const name = ['ioo', 'yow'];

  expect(name).toEqual(['ioo', 'yow']);
  expect(name).toContain('ioo');

});

test('array object', () => {
  const person = [
    {
      name: 'ioo'
    },
    {
      name: 'yoo'
    }
  ];
  
  expect(person).toContainEqual({
    name: 'ioo'
  });
});