//We can define function like this in JS
function sum(a,b){
    return a + b;
}

var a = 5;
var b = 4;

var c = sum(a,b);

console.log(c);

//CallBack functions


function multiple(a,b,c,callback){//We can give function to our function
    let arr = [];
    for(let i = 0 ; i < 3 ; i++){
        arr[i] = callback(arguments[i]*2);
        
    }
    return arr;
}

function addOne(a){
    return a+1;
}

let val = multiple(10,20,30,addOne);//There we give a parametre about which function go to the other function
let val2 = multiple(10,20,30,function(a){
    return a+2;
}); // We can define new function in parametres.

console.log(val);
console.log(val2);

//Immediate Functions


