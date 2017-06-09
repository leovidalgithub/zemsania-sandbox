/* 	Function.prototype.call()
 	Function.prototype.bind()
	Function.prototype.apply()
	The methods call() and apply() that execute methods of other objects especifying
	the context (especifying a different this)
	la utilidad primaria de .bind es enlazar una variable a una función pasándole al menos un parámetro

var fn = myOtherFn.bind( thisArg [, parámetros] )
myOtherFn.call( thisArg [, parámetros] )

'call' invoca/ejecuta la función directamente con el contexto del 'this' indicado. Es decir,
 devuelve el resultado de ejecutar la fn.
'bind' en cambio devuelve la función con el 'this' indicado

Si dicha función (usando call o bind) recibe parámetros, estos se podrán mandar a partir
del segundo argumento.
Obviamente en el caso de 'call' deberemos pasar todos los que necesite, pero en el caso
de 'bind' podremos pasar todos, alguno o ninguno porque nos devolverá dicha función con el
'this' y los parámetros binded.

*/
var myObj = {
	name: 'Luis',
	apellido: 'Ruiz',
	showMe: function( edad ) { return this.name + this.apellido + edad ; }
};

var myData = { name: 'Leo', apellido: 'Rdgz' };
var fn = myObj.showMe.bind( myData );

	fn(); // -> Leo Rdgz undefined
	fn( '33' ); // -> Leo Rdgz 33

var fn = myObj.showMe.bind( myData, '42' );

	fn(); // -> Leo Rdgz 42
	fn( '44' ); // -> Leo Rdgz 42

/*

al ejecutar 'call' se invoka/ejecuta la función con el contexto 'this' pasado y el/los
argumento(s) pasado(s) (si es que la función recibe alguno)

al ejecutar 'bind' lo que hace es devolver la función en cuestión con el contexto del 'this'
pasado y el/los argumentos pasados (si es que la función recibe alguno)

por lo tanto, hay que tener muy presente que 'call' invoka de una vez la función y bind NO la
invoka sino que devuelve una función preparada con un contexto this [y argumentos] ya fijos
*/

var oData = {
	name: 'juanma',
	showName : function( event ) {
		event.preventDefault();
		// console.log( event.target.href ); // -> cuando llega otro this trabajo con el event
		// console.log( this.href ); // -> cuando llega el this de 'a'
		console.log( 'name = ' + this.name );
	}
};
$( document.body ).on('click', 'a', oData.showName);

var myFakeEvent = {
	preventDefault: function() {}
};

oData.showName(); // KO (falta 'event')
console.log ( "BLOCK 1 - simple call w/ fake event" );
console.log ( oData.showName( myFakeEvent ) === "juanma" ); // true
console.log ( oData.showName( { preventDefault: function() {} }) === "juanma" ); // true

var myData = { 	name: "Leo" };

console.log ( "BLOCK 2 - .call & .bind" );
oData.showName.call( myData ); /* KO no sirve porque 'call' ejecuta la función de una vez,
	por lo tanto el callback se convierte en la salida de la fn y no en la función en sí
	algo como -> $( document.body ).on('click', 'a', 'juanma' );
	En cambio 'bind' enlaza la función con el this pasado (y argumentos si los hay)
	y devulve la misma función (sin ejecutarla)

	var fn = myOtherFn.bind( ThisArg, par1, par2 );
	fn = function myOtherFn( par1, par2, par3, par4 ) { return 'ya lo entendí !'}

*/
console.log ( oData.showName.call( myData, myFakeEvent  )  === "Leo" ); // true

console.log (  typeof( oData.showName.bind( myData )  ) === "function" ); // -> fn
// devuelve una fn que si la ejecuto fn() dará error porque falta 'event'

var myCustomBindedFn = oData.showName.bind( myData );  // OK -> fn(event) { this => myData }
console.log ( typeof( myCustomBindedFn ) === "function"  );

console.log ( "BLOCK 3- binded function" );
myCustomBindedFn();  /* KO funciona pero oData.showName dara error porque 'event'
						no le está llegando */
console.log ( myCustomBindedFn( myFakeEvent ) === "Leo"); // true
console.log ( myCustomBindedFn( { preventDefault: function() {} } ) === "Leo"); // true
console.log ( myCustomBindedFn.call( {  name: "Arturo" }, myFakeEvent )  === "Leo"); // true

///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////

function saySomething ( msg, name ) {
	return msg + name;
}
// forma manual de hacer el binding
var sayHi = function ( name ) {
	var msg = "Hola, tu nombre es:";
	return saySomething(msg, name);
}
//al llamar a sayHi estoy ejecutando saySomething (msg, name) pero el argument msg ya está fijo y
//sólo tengo que pasarle name

// empleando el .bind
var sayHi = saySomething.bind( this, "hola, tu nombre es " );
//>> sayHi( 'Leo' );


//////////////////////////////////////////////////////////////////////////////////////
var someObj = {
	name: 'Ninja',
	say: function( who ) {
	return 'Hello ' + who + ', I am ' + this.name;
	}
}
>> ​someObj.say( 'Dude' );  // --> "Hello Dude, I am Ninja"
​otherObj = { name: 'Neil' };
>> someObj.say.call( otherObj, 'Dude' );  // --> "Hello Dude, I am Neil"
//--------------------------------------------------------------------------------
var obj1 = {
	a : 'Epa ',
	b : 'Fernando',
	func : function( c ) {
		return this.a + this.b + c;
	}
};
var obj2 = {
	a: 'Hola ',
	b: 'Luis'
}
>> obj1.func( '. ¿Qué tal?' ); // --> "Epa Fernando. ¿Qué tal?"
>> obj1.func.call( obj2, '. Todo bien!'); // --> "Hola Luis. Todo bien!"

var otherValue = ( function() { return '. Del carajo!!!'})();
>> obj1.func.call( obj2, otherValue ); // --> "Hola Luis. Del carajo!!!"

var otherValue = { f: (function() { return '. Estupendo!!!!!!!'})()};
>> obj1.func.call( obj2, otherValue.f ); // --> "Hola Luis. Estupendo!!!!!!!"
//--------------------------------------------------------------------------------
	var animals = [
		  { species: 'Lion', name: 'King' },
		  { species: 'Whale', name: 'Fail' }
		];

	for ( var i=0; i<animals.length; i++ ) {
	  	( function( i ) {
	    this.print = function() {
	    	console.log( '#' + i  + ' ' + this.species + ': ' + this.name );
	    }
	    this.print();
	  	}).call( animals[i], i );
	}
// --> #0 Lion: King
// --> #1 Whale: Fail

//--------------------------------------------------------------------------------
// funciones parciales .call .bind
function list() {
  return Array.prototype.slice.call( arguments );
}
var list1 = list( 1, 2, 3 );

// Crear funcion (sin referencia this) con argumento inicial predeterminado
var leadingThirtysevenList = list.bind( undefined, 37 );
>> var list2 = leadingThirtysevenList(); // -->  [37]
>> var list3 = leadingThirtysevenList( 1, 2, 3 ); // --> [37, 1, 2, 3]
//--------------------------------------------------------------------------------
this.x = 9;

var module = {
	x: 81,
  	getX: function() { return this.x; }
};

module.getX(); // --> 81

var getX = module.getX;
getX(); // --> 9, porque en este caso, "this" apunta al objeto global

// Crear una nueva función con 'this' asociado al objeto original 'module'
var boundGetX = getX.bind(module);
boundGetX(); // 81

//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
//--------------------------------------------------------------------------------
