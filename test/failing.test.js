import { sayHello } from "../src/sayHello";

it('sayHello success', () => {
  expect(sayHello('ioo')).toBe('hello ioo');
});

it.failing('sayHello Error', () => {
  sayHello(null);
});

it('sayHello Error matchers', () => {
  expect(() => sayHello(null)).toThrow();
});