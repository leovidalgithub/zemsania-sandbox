// funciones constructoras (clases)

function createObject() {
	this.name = 'Rafaelo';
	this.city = 'Barcelona';
	this.sayHi = function() {
		return 'Hola ' + this.name + ', you live in ' + this.city;
	};
}
var a = new createObject();

a instanceof(createObject) // true or false si es una instancia de esa clase
a.constructor //apunta a la función constructora que lo creó
a.prototype //todos las funciones constructoras tienen prototype.
			//Se le puede añadir propiedades y métodos.
			//Cadena de Prototipos: todos las instancias tienen acceso al prototype
			//.net SHARED PROPERTY

createObject.prototype.type = 'Human being';
createObject.prototype.sayHi_2 = function() { return 'Hola ' + this.name; };

//---------------------------------------------
function Hero( name ) {
	this.name = name;
}
Hero.prototype.getName = function() {
	return this.name;
};
// MÉTODOS EXTENDIDOS
	Array.prototype.getLength = function (){
		return this.length;
	};

//---------------------------------------------
function Person() { this.hobby = 'Tennis';};
​
Person.prototype.msg = "a ti te gusta jugar ";
Person.prototype.sayHi = function() { return 'Hola, ' + this.msg + this.hobby };

var person = new Person();
​
//---------------------------------------------
//si la función construcrua se instancia con new devuelve un objeto con las
//propiedades y métodos definidos con this si dentro de la función constructora
//tiene un return, eso es lo que devolverá

function C() { this.a = 1; }
var c = new C();
//output
c.a // --> 1

function C2() {
	this.a = 2;
	this.b = function() { return this.a }
}
var c2 = new C2();
typeof( c2 ) // --> object
c2.b() // --> 2

///////////////////////////////////////////////////////////////////
var var1 = 10;
function f() {
	console.log( var1 );
	if ( false ) {
		console.log('IF BLOCK');
		var1 = 20;
	}
}

//////////////////////// debbuging

function sayHI(name){
	var msg = 'Hello';
	console.log('valor de msg %s', msg);
	var finalMessage = msg + name;

	debugger;

	return finalMessage;

}
