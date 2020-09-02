let a: Number  = 5// We say a is a number so we cant assign a like a string 

let arr: Array<number>  = [1,2,3] // here we define array
let h: [string,number,boolean] = ["Kutay",20,true] // this is tuple

let str : String = "kutay" // here define string

let count = (<string>str).length;// if we dont declare like this ts cant understand str is a string value

let height = (str as string).length; // We say str is string 