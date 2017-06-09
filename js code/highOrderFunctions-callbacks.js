//funciones prototype de Array (forEach map reduce some...)
//funciones prototype de Array propias (myForEach myReduce)
//funciones callbacks

//https://github.com/juanmaguitar/javascript-notes/tree/master/markdown-en/06-global-objects/arrays#basic-methods-of-array
//http://reactivex.io/learnrx/       EJERCICIOS

/////////////////////////////////////////////////////////////////////////////////////////////////////
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach
//Array.prototype.forEach()
//ejecuta la función indicada una vez por cada elemento del array.

//Higher Order Functions
//are those functions that accept other functions as parameters or those that return functions(or both).

//----------------------------------------------------------------------------
// Cómo crear mi propio forEach como una function
  function myForEach ( myArray, myFunc ) {
    var numElements = myArray.length;
      var currentElement;
    for ( var myIndex=0; myIndex<numElements; myIndex++ ){
        currentElement = myArray[ myIndex ];
        myFunc( currentElement, myIndex );
    }
  }

  function showArray( element, index ) {
    console.log('[' + index + '] = ' + element);
  }
  function alertArray( element, index ) {
    alert('[' + index + '] = ' + element);
  }
// output
myForEach( [4,3,2,1], showArray );
myForEach( [4,3,2,1], alertArray );
myForEach( [ 2,3,4,2,3 ], function( value ) { console.log( value ); } );

//------------------------------------------------------
//agregando mi propio forEach al prototype de Array
// THIS APUNTA A LA INSTANCIA DE LA CLASE QUE LO VAYA A UTILIZAR !!!!!!!!
  Array.prototype.myForEach = function( myFunc ) { // no hace falta poner el THIS como argumento
    var numElements = this.length;
      // var currentElement;
    for ( var myIndex = 0; myIndex < numElements; myIndex++ ) {
        // currentElement = this[myIndex];
        // myFunc( currentElement, myIndex );
        myFunc( this[ myIndex ], myIndex, this );
    }
  }
//output
[1,2,2,3,5].myForEach ( showArray );
[1,2,2,3,5].myForEach ( alertArray );
////////////////////////////////////////////////////////////////////////////////////////////////

function Counter() {
  this.sum = 0;
  this.count = 0;
}
Counter.prototype.add = function( array ) {
  array.forEach( function( entry ) {
    this.sum += entry;
    ++this.count;
  }, this);
  // ^---- Note
};

var obj = new Counter();
obj.add( [2, 5, 9] );
obj.count;
// 3
obj.sum;
// 16

////////////////////////////////////////////////////////////////////////////////////////////////
//Array.prototype.map() -> crea un nuevo array con los resultados

var numeros= [1, 4, 9];
var raices = numeros.map(Math.sqrt); // aplicándole raíz cuadrada
// raices tiene [1, 2, 3], numeros todavía tiene [1, 4, 9]

//----------------------------------------------------------------------------
var kvArray = [ { clave:1, valor:10 }, { clave:2, valor:20 }, { clave:3, valor: 30 } ];
var reformattedArray = kvArray.map( function( obj ) {
     var rObj = {};
     rObj[ obj.clave ] = obj.valor;
     return rObj;
} );
// reformattedArray es ahora [{1:10}, {2:20}, {3:30}],
// kvArray sigue siendo [{clave:1, valor:10}, {clave:2, valor:20}, {clave:3, valor: 30}]
//------------------------------------------------------------------------------------
// map() --> returns a new array with the result of calling a function provided as an argument over every element of the array
// arr.map(callback[, thisArg])

function double( element /*, index, array*/ ) {
  //console.log('a[' + index + '] = ' + element);
  return element * 2;
}

// Note elision, there is no member at 2 so it isn't visited
//output
[2, 5, 3, 9].map(double); // -> [4, 10, 6, 18]

//------------------------------------------------------------------------------------
// filter() --> returns a new array with those elements that pass the test (return true when applying the function on them) in the function passed as a paramenter
// arr.filter(callback[, thisArg])

function isMoreThan4( element /*, index, array */ ) {
  //console.log('a[' + index + '] = ' + element);
  return element > 4;
}
//output
var groupMoreThan4 = [2, 5, 3, 9].filter(isMoreThan4);
groupMoreThan4 // --> [5, 9]

//------------------------------------------------------------------------------------
// every() --> return true if ALL the elements of the array pass the test provided as a parameter (they all return true when we apply the function on them)
// rr.every(callback[, thisArg])

function isMoreThan4( element /*, index, array */ ) {
  //console.log('a[' + index + '] = ' + element);
  return element > 4;
}
//output
console.log ( [2, 5, 3, 9].every( isMoreThan4 ) ); // --> false
console.log ( [22, 5, 33, 9].every( isMoreThan4 ) ); // --> true

//------------------------------------------------------------------------------------
// some() --> return true if SOME element of the array pass the provided test as a parameter (one or more return true when we apply the function on them)
// arr.some(callback[, thisArg])

function isMoreThan4( element /*, index, array */ ) {
  //console.log('a[' + index + '] = ' + element);
  return element > 4;
}
// output
console.log ( [2, 5, 3, 9].some(isMoreThan4) ) // --> true
console.log ( [1, 2, 3, 4].some(isMoreThan4) ) // --> false

//------------------------------------------------------------------------------------
// reduce() --> applies a function recursively over an accumulator and over every item if the array (from left to right) until getting a unique value
// arr.reduce(callback[, initialValue])
// array.reduce( callback [, initialValue ] )
// initialValue optional. Si no se indica vale '0' ó '' ó [] y es el primer valor devuelto en la recursividad

// callback --> function( previousValue, currentValue, currentIndex , arr)
// previousValue Required. The initialValue, or the previously returned value of the function
// currentValue  Required. The value of the current element
// currentIndex  Optional. The array index of the current element
// arr Optional. The array object the current element belongs to

    function sumElements( previusValue, currentValue /*, index, array */ ) {
      //console.log( previusValue + ' | ' + currentValue + ' | ' + index + ' | ' + array );
      return previusValue + currentValue;
    }
//output
[2, 5, 3, 9].reduce( sumElements ); // --> 19
[2, 5, 3, 9].reduce( sumElements, 1 ); // --> 20

var flattened = [[0, 1], [2, 6], [4, 5]].reduce( function( a, b ) { return a.concat( b ); }, []);
// flattened --> [0, 1, 2, 3, 4, 5]

///////////////////////////////////// RECURSIVA al CALLBACK ////////////////////////////////
Array.prototype.myReduce = function( myFunc, initialValue ) {
    var numElements = this.length;
    var previousValue = initialValue || 0;
    var result = '(empty array)';
    // if ( initialValue ) previousValue = initialValue;
    for ( var myIndex=0; myIndex<numElements; myIndex++ ) {
      currentElement = this[myIndex];
      result = myFunc( previousValue, currentElement );
      previousValue = result;
    }
    return result;
};


///////////////////////////////////// RECURSIVA ///////////////////////////////////////////

Array.prototype.myReduce = function( myFunc, initialValue ) {
    if ( this.length <= 1 ) return this;
    var accumulator = 0;
    if ( initialValue ) accumulator += initialValue;
    accumulator += myFunc( this[0], this[1] );
    var newArray = this.slice( 2 );
    newArray.unshift( accumulator );
    return newArray.myReduce ( myFunc );
};

//------------------------------------------------------------------------------------
pluck(), zip(), reject(), groupBy(), sample(), chunk(), flatten()...
/* By using external libraries (like UnderScoreJS, Lodash o Functional.js) we can have available
at our code much more higher order functions that will ease our work */

//   *******************************************************************************
//  *****************************  C A L L B A C K S  *******************************
//   *******************************************************************************
var moreAdjective = 'incredibly';
function sayHi( name, displayMode ) {
  var adjective = 'awesome';
  return displayMode( "Hello " + name + ", you're " + moreAdjective + " " + adjective );
}

function showConsole( msg ) {
  console.log ( 'showconsole' + msg );
}

function showAlert( msg ) {
  alert( msg );
}
sayHi( "juanma", showConsole );
sayHi( "juanma", showAlert );
sayHi( "juanma", function( msg ) { return "I SAY: " + msg;} );

//--------------------------------------------------------------
function doOperation ( operationToPerform, operand1, operand2 ) {
  return operationToPerform( operand1, operand2 );
}
function sum( a, b ) { return a+b; }
function multiplicate( a, b ) { return a*b; }
function substract( a, b ) { return a-b; }

doOperation( sum, 2, 3 );
doOperation( multiplicate, 2, 3 );
doOperation( substract, 2, 3 );
doOperation( function( a, b ) { return a + " - " + b; }, 2, 3 );

function doSum ( operand1, operand2 ) {
  return sum( operand1, operand2 );
}
//----------------------------------------------------------------------------
