var gulp      = require('gulp');
var ts        = require('gulp-typescript');
// var concat    = require('gulp-concat');
var tsProject = ts.createProject('tsconfig.json');

gulp.task('default', function () {
    return tsProject.src()
        .pipe(tsProject())
        js.pipe(gulp.dest('dist'));
});
