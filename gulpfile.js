var gulp = require('gulp');

var sass = require('gulp-sass');
var rename = require('gulp-rename');
var prefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');

gulp.task('sass', function() {
  return gulp.src('./src/*.scss')
    .pipe(prefixer('last 10 versions'))
    .pipe(rename('bedrock.min.css'))
    .pipe(sass())
    .pipe(minifycss())
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
  gulp.watch('src/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);
