import { sum } from "../src/sum";

beforeAll(async () => {
  console.info('before all');
});

afterAll(async () => {
  console.info('after all')
});

beforeEach(async () => {
  console.info('before each');
});

afterEach(async () => {
  console.info('after each');
});

test('first test', () => {
  expect(sum(10, 10)).toBe(20);
  console.info('first test');
});

test('second test', () => {
  expect(sum(10, 10)).toBe(20);
  console.info('second test');
});

