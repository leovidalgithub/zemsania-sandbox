//HERENCIA
///////////////////////////////////////////////////////////////////////////////
function Muppet( age, hobby ) {
	this.age = age;
	this.hobby = hobby;
	this.answerNanny = function(){
		return "Everything's cool!";
	};
}
Muppet.prototype.name = 'juanma';
var muppet = new Muppet( 30, "sky" );

function SwedishChef( age, hobby, mood ) {
	Muppet.call( this, age, hobby ); // ------> HERENCIA (ROBAR EL CONSTRUCTOR)
	this.mood = mood;
	this.cook = function() {
		return "Mmmm soup!";
	};
}
var chef = new SwedishChef( 40, "guitar", "happy" );

////////////////////////////////////////////////////////////////////////////////////////
//PROTOTYPES Y CREATE

function Person() {}
Person.prototype.eat = function() { return "yummm!" }
Person.prototype.sleep = function() { return "zzzzzz" }

var juanma = new Person();
var alex = new Person();
var david = new Person();

// -----------------

var personMethods = {
	eat : function() { return "yummm!" },
	sleep : function() { return "zzzzzz" }
};

var createObjectWithProto = function ( objectProto ) {
	function F() {}
	F.prototype = objectProto;
	return new F();
};

var juanma = createObjectWithProto(personMethods);
var alex = createObjectWithProto(personMethods);
var david = createObjectWithProto(personMethods);

// -----------------

var personMethods = {
	eat : function() { return "yummm!" },
	sleep : function() { return "zzzzzz" }
};

var juanma = Object.create( personMethods );
var alex   = Object.create( personMethods );
var david  = Object.create( personMethods );
