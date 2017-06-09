var express = require( 'express' ),
	app     = express();

app.use( '/api', function( req, res, next ) {
    res.setHeader( 'Access-Control-Allow-Origin', '*' );
    res.setHeader( 'Access-Control-Request-Method', '*' );
    res.setHeader( "Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header( 'Access-Control-Allow-Headers', '*' );
    next();
});

app.get( '/api', function ( req, res, next ) {
	setTimeout(function() {
		res.send( 'Hello from this server' );		
	}, 5000)
});

app.listen( 3000, function () {
    console.log( 'Listening on port 3000 from process: ' + process.pid );
});