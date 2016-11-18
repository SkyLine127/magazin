'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
 
 gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./resources/sass/**/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

gulp.task('sass', function () {
  return gulp.src('./resources/sass/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/css'))
    .pipe(browserSync.stream());
});
 
gulp.task('default', ['serve']);