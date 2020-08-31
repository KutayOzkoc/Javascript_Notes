// We develop our application with divide and conquer methodology so we need to divide our problems into small modules 


//module patterns
/*First modern patterns type is different variables same name in different script 
    that is global naming conflits*/

var a = 4;
var a = 6;

console.log(a); // 4 will be disapperd

// Encapsulation

var counter = {
    number:0,
    increment : function(){
        return this.number++;
    },
    decrement :function(){
        return this.number --;
    }
}

counter.number = 5;
console.log(counter.increment()); // here we cant increment 5


//IIFE

(function(){
    var name = "kutay";
    console.log(name);
})();


(function(){
    var name = "Ozkoc"; // We cant lose name which is kutay
    console.log(name);
})();



// Example

const products = [
    {name:'Samsung S7',price:3000},
    {name:'Samsung S8',price:4000},
    {name:'Samsung S9',price:5000}
];


var ProductController = (function(data){
    
    // private members
    var collections = data || [];

    const addProduct = function(product){
        collections.push(product);
    }

    const removeProduct = function(product){
        var index = collections.indexOf(product);
        if(index>=0){
            collections.splice(index,1);
        }
    }

    const getProducts = function(){
        return collections;
    }

    // public members
    return {
        addProduct,
        removeProduct,
        getProducts
    }

})(products);

ProductController.addProduct(products[0]);
ProductController.addProduct(products[1]);

ProductController.removeProduct(products[0]);
ProductController.addProduct(products[2]);

console.log(ProductController.getProducts());

// Module Extenting

var extended = (function(m){

    m.sayHello = function(){
        console.log('hello from extended module');
    }

    return m;

})(ProductController || {});

extended.sayHello();
console.log(extended.getProducts());