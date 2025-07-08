export class MyException extends Error {

};

export const callMe = (name) => {
  if (name === 'ioo') {
    throw new MyException('whoops! MyException happens.');
  } else {
    return 'ok'
  }
};