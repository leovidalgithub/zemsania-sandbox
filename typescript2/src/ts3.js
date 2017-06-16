var Generic = (function () {
    function Generic() {
        this.add3 = function (val1, val2) { return val1 + val2; };
    }
    Generic.prototype.add2 = function (val1, val2) {
        return val1 + val2;
    };
    Generic.prototype.drive = function () {
        console.log('from drive()');
    };
    return Generic;
}());
var generic = new Generic();
generic.add = function (x, y) { return x + y; };
console.log(generic.add(5, 4));
console.log(generic.add2(3, 3));
console.log(generic.add3(5, 6));
console.log(generic.drive());
function GetWheels(veh) {
    console.log(veh);
}
GetWheels({ name: 'Leo' });
