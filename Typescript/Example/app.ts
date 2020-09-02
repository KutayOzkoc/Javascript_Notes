import { product } from "./product";
import {productService} from './productService';

let _productService = new productService();

let result;

result = _productService.getProduct();

console.log(result);

