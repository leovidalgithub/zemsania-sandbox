//https://msdn.microsoft.com/en-us/magazine/ff696765.aspx?f=255&MSPPError=-2147217396
//http://nathansjslessons.appspot.com/lesson?id=1010&lang=es      EXPLICACIÓN Y EJERCICIOS
//https://developer.mozilla.org/es/docs/Web/JavaScript/Closures

//EFECTO HOISTING RELACIONADO CON EL LEXICAL SCOPE
//si 'a' está definida dentro de la function, aunque no se haya declarado la function
//sabe que tiene una variable 'a' y por lo tanto no verá la 'a' global
var a = 123;
function f() {
	console.log( a );
	if ( false ) var a = 1;
}
//output
undefined
//--------------------------------
var a = 123;
function f() {
	console.log( a );
	var a = 1;
	console.log( a );
}
f(); //output
undefined --> el primer console.log
1 --> el segundo console.log
//--------------------------------------------
function f() {
	var b = "b";
	return function() {
		return b;
	};
}
//output
f(); // --> return the inner function
f()(); // --> "b"

//----------------------------------------------------------
function fun1() {
	return function( msg ){
		return msg;
	};
}
//----------------------------------------------------------
var mathy = function( x ) {
		return function( y ) {
			return function( z ) {
				return ( ( x / y ) - z );
			};
		};
	};
//output
mathy( 100 )( 2 )( 3 ); // ---> 47
var operateWithX100 = mathy( 100 );
operateWithX100( 20 )( 2 ); // ---> 3
var operateWithStaticDivision = operateWithX100( 20 );
operateWithStaticDivision( 4 ); // --> 1
//----------------------------------------------------------
function functionFactory() {
	var name = "Mozilla";
	function showName() {
		return name;
	}
	return showName;
}
var f = functionFactory();
//output
f // --> "Mozilla"
//nótese que 'return showName' NO TIENE PARÉNTESIS y, por lo tanto, la function
//se ejecuta inmediatamente y 'f' queda con 'Mozilla' almacenado
//---------------------------------------------------------------------
function sumador( x ) {
	return function( y ) {
		return x + y;
	};
}
var suma5 = sumador( 5 ); // --> x queda con 5
var suma10 = sumador( 10 ); // --> x queda con 10
//output
console.log( suma5( 2 ) );  // 7
console.log( suma10( 3 ) ); // 13
//---------------------------------------------------------------------
function makeSizer( size ) {
	return function() {
				document.body.style.fontSize = size + 'px';
	  		};
}
var size12 = makeSizer( 12 );
var size14 = makeSizer( 14 );
var size16 = makeSizer( 16 );
document.getElementById( 'size-12' ).onclick = size12;
document.getElementById( 'size-14' ).onclick = size14;
document.getElementById( 'size-16' ).onclick = size16;
///////////////////////////////////////////////////////////////////////
//Emulando métodos privados con closures

var Counter = ( function() {
  var privateCounter = 0;
  function changeBy( val ) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };
} )();
//output
alert( Counter.value() ); // --> 0
Counter.increment();
Counter.increment();
alert( Counter.value() ); // --> 2
Counter.decrement();
alert( Counter.value() ); // --> 1
//----------------------------------------------
//éste es igual que el anterior pero sin ser SELF-INVOKER, por lo que podemos
//asignar después a tantas variables como queramos y tener contadores independientes.
var makeCounter = function() { // --> function makeCounter() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }
};

var Counter1 = makeCounter();
var Counter2 = makeCounter();
alert(Counter1.value()); /* Muestra 0 */
Counter1.increment();
Counter1.increment();
alert(Counter1.value()); /* Muestra 2 */
Counter1.decrement();
alert(Counter1.value()); /* Muestra 1 */
alert(Counter2.value()); /* Muestra 0 */
///////////////////////////////////////////////////////////////////////

Counter.prototype.add = function( array ) {
	array.forEach( function( entry ) {
    	this.sum += entry;
    	++this.count;}, this );
};
///////////////////////////////////////////////////////////////////////



//FIBONACCI
function recursive(n){
	if (n <= 2){
		return 1;
	} else {
		return recursive(n - 1) + recursive (n - 2);
	}
}

/////////////////////////////////////////////////////////////////////////////////////////
// charFreq
	function isValidCharacter(char){
	var invalidCharacters = ' ,?¿!x';
		return ( invalidCharacters.indexOf(char) == -1 );
	}

	function charFreq(text) {
		var numCharacters = text.length;
		var currentCharacter;
		var freqCharacter = {};

		for (var i = 0; i < numCharacters; i++) {
			currentCharacter = text[i];
			if ( isValidCharacter(currentCharacter)) {
				if (!freqCharacter[currentCharacter]) {
					freqCharacter[currentCharacter] = 1;
				} else {
					freqCharacter[currentCharacter]++;
				}
			}
		}
		console.log(freqCharacter);
	}
///////////////////////////////////////////////////////////////////////////////////////
