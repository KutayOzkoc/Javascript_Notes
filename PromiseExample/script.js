var p = new Promise(function(resolve,reject){
    if (true){
        resolve('Success!!!');
    }

    else{
        reject('Error!!');
    }
});


p.then(function(data){
    console.log(data);
}).catch(function(error){
    console.log(error);
}); // if promise is true and if we dont have any error it returns data else if we have an error it returns catch case and print error message


new Promise(function (resolve,reject){
    setTimeout(() => {
        resolve(5);
    }, 1000);
}).then(function(number){
    console.log(number);
    return number*number; // It returns to after this then so
}).then(function(number){
    console.log(number); // We can catch num^2 here
});


let momHappy = true;

let getPhone = new Promise((resolve,reject)=>{
    if(momHappy){
        const phone = {
            name:"Iphone",
            pric:4000
        }
        resolve(phone);
    }
    else{
        reject("Work harder for your new Phone");
    }
});

const showFriend= (phone)=>{
    const message2 = "This is my new Phone " + phone.name +" And price is : " +phone.pric;
    return Promise.resolve(message2);
}

getPhone.then(showFriend).then(message=>console.log(message)).catch((error)=>{
    console.log(error);
});


//xmlrequest with promise example

let myObj = {
    url:"https://randomuser.me/api/?results=5", 
}

let request = obj =>{
    return new Promise((resolve,reject)=>
    {
        let xhr = new XMLHttpRequest();

        xhr.open(obj.method || "GET" ,obj.url); // We check post or get in here and take url in our myObj

        if(xhr.headers){
            Object.keys[obj.headers].forEach(key => {
                xhr.setRequestHeader(key,obj.headers[key]);
            });
        }

        xhr.onload = () =>{
            if(xhr.status >= 200 && xhr.status < 300){ // check here our xhr status
                resolve(xhr.responseText); // and our status is ready we can use resolve method
            }
            else{
                reject(xhr.statusText); // if status is not ready for action we print error message
            }
        }

        xhr.onerror = () =>{
            reject(xhr.statusText);
        }
        xhr.send(obj.body);
    });
};

request(myObj).then(data =>{
    let users = JSON.parse(data);//here we take values in object type in json and parse them
    console.log(users.results); // print objects which are parsed with json parser
}).catch( error =>{
    console.log(error);
});