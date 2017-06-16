var gulp    = require( 'gulp' );
var connect = require( 'gulp-connect');
var ts      = require( 'gulp-typescript');

gulp.task( 'ts', function () {
    return gulp.src( './src/*.ts' )
        .pipe( ts( {
            noImplicitAny: true,
            target : 'ES5',
            outFile: 'output.js'
        }))
        .pipe( gulp.dest('./') )
        .pipe( connect.reload() );
});

gulp.task( 'html', function() {
    gulp.src( './*.html' )
        .pipe( connect.reload() );
});

gulp.task( 'watch', function() {
    gulp.watch( [ './*.html'], [ 'html' ] );
    gulp.watch( [ './src/*.ts' ], [ 'ts' ] );
});

gulp.task( 'connect', function() {
    connect.server( {
        root: './',
        port: 8085,
        livereload: true,
        fallback: './index.html'
    });
});

// global tasks
gulp.task( 'run', [ 'connect', 'watch' ] );
