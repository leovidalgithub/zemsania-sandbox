//arrow functions
var miFuncionF = function (a) { return a; };
// console.log(miFuncionF('Pepe'));
var miFn2 = function (a, b) { return a + b; };
// console.log(miFn2(4,5));
var miFn3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
// console.log(miFn3('pedrito'));
var miFn4 = function (nombre) { return nombre.toUpperCase(); };
// console.log(miFn4('juan'));
var hulk = {
    nombre: 'Hulk',
    smash: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombre + ' smash!'); }, 1500);
    }
};
// hulk.smash();
function fn1() { return 9; }
;
var fn1F = function () { return 8; };
// console.log(fn1());
// console.log(fn1F());
var Avenger = (function () {
    function Avenger(nombre, equipo, nombreReal) {
        this.puedePelear = false;
        this.peleasGanadas = 0;
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    return Avenger;
}());
var antman = new Avenger('Antman', 'Cap', 'Scott Lang');
// console.log(antman);
var avenger = {
    nombre: 'Steve',
    clave: 'Capitán América',
    poder: 'Droga'
};
var clave = avenger.clave, poder = avenger.poder, nombre = avenger.nombre;
//let { clave:string } ....
// dentro de una destructuración, lo que está después de : se considera como un alias de la variable
// console.log(nombre,clave,poder);
var avengers = ['Thor', 'Steve', 'Tony'];
var loki = avengers[0], capi = avengers[1], ironman = avengers[2];
// console.log(loki, capi, ironman);
//destructuración de arreglos SÍ importa el orden
// loki corresponderá al elemento 0 del array
// function enviarMision(xmen:{nombre:string}) {}
function enviarMision(xmen) {
    console.log("Enviando a " + xmen.nombre);
}
function enviarCuartel(xmen) {
    console.log("Enviando al cuartel a " + xmen.nombre);
}
var wolverine = {
    nombre: 'Wolverine',
    poder: 'Regeneración'
};
// enviarMision(wolverine);
// enviarCuartel(wolverine);
//funciones: parámetros obligatorios, opcionales y por defecto
function activar(quien, defecto, opcional) {
    if (defecto === void 0) { defecto = 'batiseñal'; }
    var mensaje;
    if (opcional) {
        mensaje = quien + " activ\u00F3 la " + defecto + " con " + opcional;
    }
    else {
        mensaje = quien + " activ\u00F3 la " + defecto;
    }
    // console.log(mensaje);
}
activar('Pedro', 'batiseñal', 33);
