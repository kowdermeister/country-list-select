var gulp = require('gulp');
var template = require('gulp-template');
var data = require('./data/countries.json');

gulp.task('alpha2', function () {
    return gulp.src('template/alpha2.html')
        .pipe(template({countries:data}))
        .pipe(gulp.dest('./'));
});

gulp.task('alpha3', function () {
    return gulp.src('template/alpha3.html')
        .pipe(template({countries:data}))
        .pipe(gulp.dest('./'));
});

gulp.task('numeric', function () {
    return gulp.src('template/numeric.html')
        .pipe(template({countries:data}))
        .pipe(gulp.dest('./'));
});

gulp.task('csv', function () {
    return gulp.src('template/countries.csv')
        .pipe(template({countries:data}))
        .pipe(gulp.dest('./'));
});

gulp.task('default', ['alpha2','alpha3','numeric','csv'], function () {
	//
});