var gulp = require('gulp');

var sass = require('gulp-sass');
var rename = require('gulp-rename');
var prefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');

var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('browser-sync', function() {
  browserSync(['index.html'], {
    port: 8080,
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('sass', function() {
  return gulp.src('./src/*.scss')
    .pipe(prefixer('last 10 versions'))
    .pipe(rename('bedrock.min.css'))
    .pipe(sass({
      errLogToConsole: true
    }))
    .pipe(minifycss())
    .pipe(gulp.dest('./'))
    .pipe(reload({
      stream: true
    }));
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch', 'browser-sync']);
