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
}); // We can define new function in parameters.

console.log(val);
console.log(val2);

//Immediate Functions

function welcome(){
    var days = ["sunday","monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var today = new Date();
    var msg = "Today is " + days[today.getDay()];
    return msg;
}//This function will refresh in every refresh situtation. but we dont wanna see it again 

(function(){//This is immediate function for solve our problem We can give parameters there
    var daysI = ["sunday","monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var todayI = new Date();
    var msgI = "Today is " + daysI[todayI.getDay()];
    return msgI;
    console.log(msgI);
}());//this brackets says what is the value of this parameters


console.log(welcome());

