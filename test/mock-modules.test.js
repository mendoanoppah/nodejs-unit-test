import { getAllProducts, getProductById } from "../src/database";
import { productServices } from "../src/product-service";

jest.mock('../src/database.js');

test('mock modules getProductById', () => {
  getProductById.mockImplementation((id) => {
    return {
      id: id,
      name: 'product mock'
    }
  });

  const product = productServices.findById(1);

  expect(product).toEqual({
    id: 1,
    name: 'product mock'
  });
});

test('mock modules getAllProducts', () => {
  const products = [
    {
      id: 1,
      name: 'product mock'
    },
    {
      id: 2,
      name: 'product mock'
    }
  ]

  getAllProducts.mockImplementation(() => {
    return products;
  })

  expect(productServices.findAll()).toEqual(products);
});