let avenger = {
    nombre : 'Steve',
    clave : 'Capitán América',
    poder : 'Droga'
}

let { clave, poder, nombre } = avenger;
//let { clave:string } ....
// dentro de una destructuración, lo que está después de : se considera como un alias de la variable
// console.log(nombre,clave,poder);

let avengers:string[] = ['Thor','Steve','Tony'];
let[loki, capi, ironman] = avengers;
// console.log(loki, capi, ironman);
//destructuración de arreglos SÍ importa el orden
// loki corresponderá al elemento 0 del array
