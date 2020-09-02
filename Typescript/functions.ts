function average(a:number,b:number,c?:number):string{ // We say here a and b number c optional and must return string value
    const result = (a+b+c) / 3;
    return "result : " + result
}
average(5,10,15);
