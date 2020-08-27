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


