// Arrow Functions

//It works in ES6

let hello = () => {
    console.log("Hello World");
}

hello();

let helloName = (name) => {
    console.log(name + " Welcome ");
}

helloName("kutay");

let getObj = (id, name) => {
    return {
        id: id,
        name: name
    }
}

console.log(getObj("123","Car").id);

var arr = [1,2,3,4,5,6,7];
let even = arr.filter (a=>a%2 == 0);
console.log(even);


//"This"

let list = {
    category :'Job',
    jobs : ["Engineer","Chef"],
    call : function(){
        var self = this; // for use other attributes in other functions
        this.jobs.map(function(job){ // "map" method does something for each element in our array
            console.log(job); // we cant see category here so we cant use this.category here
            console.log(self.category); // after we add self = this we can use here
        })
    }
}

list.call();


var list2 = {
    name :"kutay",
    hobbies : ["Coding","Football"],
    call : function(){
        var self = this;
        this.hobbies.map(hobby=>{
            console.log(hobby + " " +this.name);
        })
    }
}

list2.call();


//Spread Operators It helps for us send array to function directly

let array = [1,2,3];
let array2 = [10,11,12];

array.push(...array2); //There we can add array2 after array

console.log(array);

var tag1 = document.getElementById('First');
var tag2 = document.querySelectorAll('div');

var tags = [tag1,...tag2]; // We select to point for manipulate between them

tags.forEach(tag => tag.style.color = 'red'); // Change text colors


//Rest parameters
let numberarr;
function Sum(...numberarr){
    let result = 0;
    numberarr.forEach(item => result += item);
    return result;
    
}

console.log(Sum(10,20,30));




function checkDriver(age,...birth){
    birth.forEach(items => console.log(2020-items < age)) // we use each index in item and calculate it
}

checkDriver(1999,2012,1992,1998,18); // 19 is rest parameter rest parameter not like year it select year for take driver license.


//Destructuring


let a,b,rest;

a = 10;
b = 20;

[a,b,...rest] = [40,50,10,20,100];
console.log(a);
console.log(b);
console.log(rest); // first to goes to a and b then other 3 goes to rest


let config = ["Local",5000,900];


let {server,port = 1000,time} = config;


console.log(port); // We can change value in our parameter

const obj = {
    name : "Ali",
    age : 50
}

const {name,age} = obj;

console.log(name);


const boxes = document.querySelectorAll(".box");

Array.from(boxes).forEach(items => items.style.backgroundColor ="green");

let team = "Besiktas";

let letters = Array.from(team);
console.log(letters);


let students = [
    {name:"Kutay",point:200},
    {name:"Ali",point:210},
    {name:"Ahmet",point:250}

];

let studentFinder = students.find(prd => {
    if(prd.name == "Kutay"){
        console.log("Kutay " + prd.point);
    }
    else if(prd.name == "Ahmet"){
        console.log("Ahmet " + prd.point);
    }
    else{
        console.log("Ali " + prd.point);
    }
})

//Maps

let val = new Map(); // val is our instance

val.set(1,'one');//First key value second value
val.set(2,"two");
val.set(3,"three")

console.log(val);
console.log(val.get(1)); // We can get value which is key number 1;
val.delete(3);//We can delete element with delete method but using key for point.

let siz = val.size;
console.log(siz); // here we can take a size of instance

if(val.has(1)){
    console.log("This instance has 1 key to hold value");
}

for (var [key,value] of val){
    console.log(key + " "+value);
}

let first = new Map([
    [1,"one"],
    [2,"two"],
    [3,"three"],
    [4,"Four"]
]);
let second = new Map([
    [5,"five"],
    [6,"six"],
    [7,"seven"],
]);

let marged = new Map([...first,...second]);

console.log(marged);



//Sets Object (For hold unique values)


let set = new Set();
set.add(1);
set.add(2);
set.add(2);// We cant add two value with same key value

// We can use same methods like in Map objects


for (var [key,value] of set.entries()){
    console.log(key + " " + value);
}

//Intersect

let set2 = new Set([2,5]);

console.log(Array.from(set).filter(x => set2.has(x)));

//Difference

console.log(Array.from(set).filter(x => !set2.has(x)));


//Classes in ES6

class Person{ // We dont need prototype for inheritance
    constructor(name,job){
        this.name = name;
        this.job = job;
    }

    jobanalyzer(){
        return this.job;
    }
}

let Burak = new Person("Burak","Engineer");

console.log(Burak.jobanalyzer());