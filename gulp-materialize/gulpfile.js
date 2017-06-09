var gulp         = require( 'gulp' );
var concat       = require( 'gulp-concat' );
var uglify       = require( 'gulp-uglify' );
var rename       = require( 'gulp-rename' );
var sass         = require( 'gulp-ruby-sass' );
var autoprefixer = require( 'gulp-autoprefixer' );
var uglifycss    = require( 'gulp-uglifycss' );
var imagemin     = require( 'gulp-imagemin' );
var cache        = require( 'gulp-cache' );
var connect      = require( 'gulp-connect');

gulp.task( 'html', function() {
    gulp.src( './**/*.html' )
        .pipe( connect.reload() );
});

gulp.task( 'scripts', function() {
    return gulp.src( [ './js/vendors/*.js', 'js/mine/*.js' ] )
        .pipe( concat( 'main.js' ))
        .pipe( rename( { suffix: '.min' } ) )
        .pipe( uglify() )
        .pipe( gulp.dest( './build/js' ))
        .pipe( connect.reload() );
});

gulp.task( 'sass', function() {
    return sass( './css/scss/style.scss', { style: 'expanded' } ) // compressed
        .pipe( concat( 'style.css' ))
        .pipe( rename( { suffix: '.min' } ) )
        .pipe( autoprefixer() )
        .pipe( gulp.dest( './build/css' ) )
        .pipe( connect.reload() );
});

gulp.task( 'css-vendors', function() {
    return gulp.src( './css/vendors/*.css' )
        .pipe( concat( 'vendors.css' ))
        .pipe( uglifycss() )
        .pipe( rename( { suffix: '.min' } ) )
        .pipe( gulp.dest( './build/css' ) );
});

// This takes any images in our defined source and compresses them using the gulp-imagemin plugin.
// We’ve wrapped it in the gulp-cache plugin which will ensure only new or changed images get compressed.
gulp.task( 'images', function() {
    return gulp.src( './images/**/*' )
        .pipe( cache( imagemin( { optimizationLevel: 5, progressive: true, interlaced: true })))
        .pipe( gulp.dest( './build/img' ) );
});

gulp.task( 'watch', function() {
    gulp.watch( [ './js/**/*.js' ], [ 'scripts' ] );
    gulp.watch( [ './css/scss/*.scss' ], [ 'sass' ] );
    gulp.watch( [ './**/*.html'], [ 'html' ] );
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
gulp.task( 'default', [ 'scripts', 'sass', 'css-vendors' ] );
gulp.task( 'run', [ 'connect', 'watch' ] );
