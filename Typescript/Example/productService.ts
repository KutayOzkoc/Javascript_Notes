import {product} from './product'

export interface productService{
    getById(id:number):product;
    getProduct():Array<product>;
    

}