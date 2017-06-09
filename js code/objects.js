// Javascript Objects
// Arrays and Objects (Constructors)
// Global Objects (Object, Function, Array, Number, Boolean, Math and Date)
//https://github.com/juanmaguitar/javascript-notes/tree/master/markdown-en/06-global-objects


//The property object.constructor containing the constructor function
//devuelve la función constructora (clase) que la creó
var obj = {};
obj.constructor // --> function Object() { [native code] }
//-------------------------------------------------
function Person( name ) {
	this.name = name;
}
var oPerson = new Person( 'Leo' );
>> oPerson.constructor // --> function Person( name ) { this.name = name; }

// Function.caller --> qué función llamó

///////////////////////////////////////////////////////////////////////////////////////
//             PROTOTYPE

function Person(name) {
	this.name = name;
}
Person.prototype.msg = "Hola";
Person.prototype.sayHi = function() { return 'Hola ' + this.msg};

var a = new Person('Leo');
var b = new Person('Fernando');

////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////

// En JS se puede crear, eliminar y modificar miembros de clases instanciadas como te dé la gana

function Megalo() {
	this.henchman = 'Pepe';
	this.func = function() {
		alert(this.henchman);
	};
}

var obj = new Megalo();

    delete obj.henchman;
    obj.henchman = 'Luis';

	obj.func = {alert('Hola ' + henchman);}



//-------------------------- CALLER ---------------------------------------------
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/caller

function myFunc() {
  if (myFunc.caller == null) {
    return 'The function was called from the top!';
  } else {
    return 'This function\'s caller was ' + myFunc.caller;
  }
}
//-------------------------------------------------------------
