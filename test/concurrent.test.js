import { sayHelloAsync } from "../src/async";

it.concurrent('concurrent 1', async () => {
  await expect(sayHelloAsync('ioo')).resolves.toBe("hello ioo");
});

it.concurrent('concurrent 2', async () => {
  await expect(sayHelloAsync('ioo')).resolves.toBe('hello ioo')
});

it.concurrent('concurrent 3', async () => {
  await expect(sayHelloAsync('ioo')).resolves.toBe('hello ioo')
});
