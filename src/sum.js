export const sum = (first, second) => {
  return first + second;
}

export function sumAll(numbers) {
  let total = 0;
  for (number of numbers) {
    total += number;
  }
  return total;
}

export const calculate = (numbers, callback) => {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  callback(total);
}

export const calculateAndReturn = (numbers, callback) => {
  let total = 0;
  for (const number of numbers) {
    total = total + number;
  }
  return callback(total);
}