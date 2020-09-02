interface point{
    x:number,
    y:number
}

interface Vehicle{
    currentlocation:point,
    travel(point:point):void,
    getDistance(pointa:point,pointb:point):number,
    carmodel : string

}

let travel = (point:point) =>{

}

let getDistance =(pointa:point,pointb:point)=>{
    
}

travel({
    x:5,
    y:10
});

