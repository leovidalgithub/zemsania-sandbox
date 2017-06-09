var myFakeEvent = {
	preventDefault: function() {}
};
var oData = {
	name: 'juanma',
	showName : function( event ) {
		// event.preventDefault();
		// console.log( event.target.href ); // -> cuando llega otro this trabajo con el event
		// console.log( this.href ); // -> cuando llega el this de 'a'
		// console.log( this.text ); // -> cuando llega el this de 'a'
        // console.log( event.target.text ); // -> cuando llega otro this trabajo con el event
		console.log( 'name = ' + this.name );
	}
};
$( document.body ).on('click', 'a', oData.showName);

console.log ( "BLOCK 1 - simple call w/ fake event" );
console.log ( oData.showName( myFakeEvent ) === "juanma" ); // true
console.log ( oData.showName( { preventDefault: function() {} }) === "juanma" ); // true
