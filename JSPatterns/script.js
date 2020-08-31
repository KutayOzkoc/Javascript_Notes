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


//Singleton Pattern

/*
    
    Sometimes we just want to use the reference of the first object we produced we dont need produce new objects
*/

var singleton = (function(){
    var instance; // it is private

    var createInstance = function(){ // it is private
        return{
            randomnumber :Math.random()
        }
    }

    return{ getInstance : function(){
            if(!instance){
                instance = new createInstance(); // if instance is empty fill it 
            }
            return instance // instance is not empty

        }

    }
})();


instance1 =  singleton.getInstance();
instance2 =  singleton.getInstance(); // we create different time this variables but values are same because references are same

console.log(instance1.randomnumber,instance2.randomnumber);


var singleton2 =(function () {
    var instance2;

    function constProducts(){
        const products = [
            {name:"telephone"},
            {name:"TV"}

        ];


        const add = function(params) {
            products.push(params);
        }

        const getPro = function() {
            return products;
        }

        return constProducts,add,getPro
    }



})();


//Factory Pattern

/*Function creates object 

    this objects are so similar so we use this pattern
    factory create our patterns
*/

function Factory(){

    this.createEmployee = function(type){

        var employee;

        if(type==='fulltime'){
            employee = new FullTime();    
        }else if(type==='parttime'){
            employee = new PartTime();
        } 
        employee.type = type;
        employee.say = function(){
            console.log(this.type + ' : saatlik ücreti : '+ this.hourly);
        }
        return employee;
    }
}

var FullTime = function(){
    this.hourly = '30TL';
}

var PartTime = function(){
    this.hourly = '20TL';
}



var factory = new Factory();

var employees = [];

employees.push(factory.createEmployee('fulltime'));
employees.push(factory.createEmployee('parttime'));
employees.push(factory.createEmployee('parttime'));
employees.push(factory.createEmployee('fulltime'));

employees.forEach(function(emp){
    emp.say();
})
