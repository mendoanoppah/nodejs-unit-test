import { sayHelloAsync } from "../src/async";

test('async function', async () => {
  const result = await sayHelloAsync('ioo');
  expect(result).toBe('hello ioo');
});

test('async matchers', async () => {
  await expect(sayHelloAsync('ioo')).resolves.toBe('hello ioo');
  await expect(sayHelloAsync()).rejects.toBe('name is empty.');
});