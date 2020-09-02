import {productService} from './productService';
import { product } from './product';
import {dataSource} from './dataSource'


class MainService implements productService{
    private datasource:dataSource;
    private products: Array<product>;

    constructor(){
        this.datasource = new dataSource();
        this.products = new Array<product>();
        this.datasource.getprodcut().forEach(p=>this.products.push(p))
    }
    
    getById(id: number): product {
        return this.products.filter(p=>p.id === id)[0];
    }
    getProduct(): import("./product").product[] {
        return this.products;
    }
   

}