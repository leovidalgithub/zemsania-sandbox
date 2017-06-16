function sum(a: number, b: number): number {
    return a + b;
}
let varSum: (a: number, b: number) =>
    number = function(a: number, b: number): number {
        return a + b;
    }

console.log(sum(2,5));
console.log(varSum(1,5));
//************************************************
let myAdd = function(x: number, y: number): number {
    return  x + y;
};
console.log(myAdd(3,3));
