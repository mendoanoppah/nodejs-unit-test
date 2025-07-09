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

export const getBalance = async (name, from) => {
  const balance = await from();
  return {
    name: name,
    balance: balance
  }
}