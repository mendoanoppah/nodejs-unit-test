import { callMe, MyException } from "../src/exception";

test('exception', () => {
  expect(() => callMe('ioo')).toThrow();
  expect(() => callMe('ioo')).toThrow(MyException);
  expect(() => callMe('ioo')).toThrow('whoops! MyException happens.')
});

test('exception not happen', () => {
  expect(callMe('mangga')).toBe('ok')
});