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



//Function that returns Function


function question (hobbies){
    switch (hobbies) {
        case "Car":
            return function(name){
                console.log(name + " Do you have a car ? ");
            }
            break;
        case "Technology":
            return function(name){
                console.log(name + " Do you have a Computer ? ");
            }
        
            break;
        default:

            console.log("No Hobbies");
            break;
    }


}

var questioncar = question("Car"); // It understand there go to car case 
questioncar("Kutay"); // there it want name parameter.


//Getter and Setters

const person = {
    name:"Kutay",
    lastname:"Ozkoc",
   
    get fullname(){
        return this.name+this.lastname;
    },

    set fullname(value){
        const parts = value.split(' ');
        this.name = parts[0];
        this.lastname = parts[1];

    }


   
};

Object.defineProperty(person,'age',{ // we can use defineProperty for getter setter methods
    value : 50,
    writable : true // if its true we can use set method for age.
});


person.fullname = "Mehmet Özkoç";
console.log(person.name + person.lastname);
console.log(person.fullname);
console.log(person.age);



// Call apply Bind

var welcome = function(a){
    console.log("Welcome " + this.name + " You like " + a);
}


var kutay = {name : 'Kutay'}; 
welcome.call(kutay,"Vue"); // We call our function with given variable. we can give parameter directly
welcome.apply(kutay,["Angular"]); // Different is this give array to our function.

welcomekutay = welcome.bind(kutay); // bind return new function

welcomekutay("React"); // If we use bind we need to give parameter there. 


//Example for Call Apply Bind Numaric Range

var num = {
    min : 0,
    max : 100,
    checkRange : function(value){
        if(typeof value !== 'number'){
            return false;
        }
        else {
            return value >= this.min && value <= this.max; 
        }
    }
}

console.log(num.checkRange(-20));
console.log(num.checkRange(20));

var num1 = {max:20,min:10};

console.log(num.checkRange.call(num1,15)); // we give num1 parameter for set max min in first parameter
                                           // then we give a number in second parameter for check number.

console.log(num.checkRange.apply(num1,[25]));


//Try Catch Error Handling mechanism this mechanism dont stop your program run but you can see your error.s 

try {
    //Code here where you will control

    console.log(p);
    if(!person.email){
        throw new Error('No Email'); // you can throw your own error for control something
    }    
}

catch(e){
    //you can catch your error here

    console.log(e.message);
}


//Error Handling Example 


document.getElementById('btn').addEventListener('click',function(e){

    var name = document.getElementById('name');
    var surname = document.getElementById('surname');
    var age = document.getElementById('age');
    var error = document.getElementById('errordivision');


    try{
        if(name.value.length === 0){
            throw new Error("No name error!!!");
        }

        if(surname.value.length === 0){
            throw new Error("No surname error!!!");
        }

        if(age.value < 20){
            throw new Error("You are too young for enter this site!!");
        }

    }
    catch(err){
        error.innerHTML = err.message; 
    }
    finally{
        age.value = '';
    }
    

    e.preventDefault();

});