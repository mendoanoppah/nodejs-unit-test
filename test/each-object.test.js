import { sumAll } from "../src/sum";

const table = [
  {
    numbers: [],
    expected: 0
  },
  {
    numbers: [10],
    expected: 10
  },
  {
    numbers: [10, 10, 10], //params numbers
    expected: 30 // params expected
  },
  {
    numbers: [10, 10, 10, 10, 10],
    expected: 50
  },
  {
    numbers: [10, 10, 10, 10, 10, 10, 10],
    expected: 70
  }
];

test.each(table)('test sumAll(%numbers) shoud result %expected', ({numbers, expected}) => {
  expect(sumAll(numbers)).toBe(expected);
});