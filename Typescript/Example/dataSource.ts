import { product } from "./product";
import { product } from './product';

export class dataSource{
    private data: Array<product>;

    constructor(){
        this.data = new Array<product>(
            new product(1,"Iphone"),
            new product(1,"Iphone"),
            new product(1,"Iphone")
        
        
        );
    }

    getprodcut(): product[]{
        return this.data;
    }

}