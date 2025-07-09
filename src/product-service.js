import { getAllProducts, getProductById } from "./database";

export class productServices {

  static findById(id) {
    return getProductById(id);
  }

  static findAll() {
    return getAllProducts();
  }

}