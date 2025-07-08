export const sayHelloAsync = (name) => {
  return new Promise((resolves, rejects) => {
    setTimeout(() => {
      if (name) {
        resolves(`hello ${name}`);
      } else {
        rejects(`name is empty.`);
      }
    }, 1000);
  });
};