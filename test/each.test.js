import { sumAll } from "../src/sum";

const table = [
  [
    [],
    0
  ],
  [
    [10],
    10
  ],
  [
    [10, 10, 10], //params numbers
    30 // params expected
  ],
  [
    [10, 10, 10, 10, 10],
    50
  ],
  [
    [10, 10, 10, 10, 10, 10, 10],
    70
  ]
];

test.each(table)('test sumAll(%s) shoud result %i', (numbers, expected) => {
  expect(sumAll(numbers)).toBe(expected);
});