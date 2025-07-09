import { getAllProducts, getProductById } from "../src/database";
import { productServices } from "../src/product-service";

jest.mock('../src/database.js', () => {
  const originalModule = jest.requireActual('../src/database.js');
  
  return {
    __esModule: true,
    ...originalModule,
    getAllProducts: jest.fn()
  }
});

test.failing('mock modules getProductById', () => {
  productServices.findById(1);
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
