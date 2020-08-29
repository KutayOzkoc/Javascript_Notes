function Category(){
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve('phone');
        }, 2000);
    })
}

function getProduct(category){ // It will use phone information so it will wait till Category method end
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve(`5 Product in ${category}`);
        },1000)
    });
}

Category().then(getProduct).then(res=>console.log(res));

async function getP(){
    let cat = await Category();
    let res = await getProduct(cat); // this statement must wait one up statement
    console.log(res);
}
getP();