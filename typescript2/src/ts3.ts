interface Vehicle {
    drive(): any;
}
class Generic<T> implements Vehicle {
    add: (val1:T,val2:T) => T;
    add2(val1:T,val2:T) {
        return val1 + val2;
    }
    public add3 = (val1:T,val2:T) => val1+val2;
    drive() : void {
        console.log('from drive()');
    }
}
let generic = new Generic<number>();
generic.add = function(x,y){return x+y;};

console.log(generic.add(5,4));
console.log(generic.add2(3,3));
console.log(generic.add3(5,6));
console.log(generic.drive());

interface Xxx {
    name:string;
}
function GetWheels<q extends Xxx>(veh:q):void {
    console.log(veh);
}
GetWheels({name:'Leo'});
