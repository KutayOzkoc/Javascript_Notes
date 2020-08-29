var product = [
    {id:1,name : "kutay"},
    {id:2,name : "ahmet"}
]

let added = true


function addnew(prd,callback){

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            product.push(prd);
            let added = true;
            if(added){
                resolve();
            }
            else{
                reject('Error');
            }
        }, 1000);
    });

}
function show(){
    setTimeout(() => {
        product.forEach(p=>{
            console.log(p.name);
        })
    }, 1000);
}


addnew({id:3,name:"gul"}).then(show).catch(function(err){
    console.log(err);
}); // It works later so we cant see the data in result solution callback function show is our callback function and it is promise objdect
show(); // after that solution we can see 3 data in console screen