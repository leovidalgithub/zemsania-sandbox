//arrow functions

let miFuncionF = (a:any):any => a;
// console.log(miFuncionF('Pepe'));

let miFn2 = (a:number,b:number):number => a + b;
// console.log(miFn2(4,5));

let miFn3 = (nombre:string) => {
    nombre=nombre.toUpperCase();
    return nombre;
}
// console.log(miFn3('pedrito'));
let miFn4 = (nombre:string) => nombre.toUpperCase();
// console.log(miFn4('juan'));

let hulk = {
    nombre: 'Hulk',
    smash() { // arrow-fn because of 'this context'
        setTimeout( () => console.log(this.nombre + ' smash!'),1500);
    }
}
// hulk.smash();

function fn1() {return 9};
let fn1F = () => 8;
// console.log(fn1());
// console.log(fn1F());
