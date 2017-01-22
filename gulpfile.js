var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var ngAnnotate = require('gulp-ng-annotate');
var ngmin = require('gulp-ngmin');

gulp.task('build', ['js', 'html']);

gulp.task('sass', function() {
  gulp.src('./styles/main.scss')
    .pipe(sass({style: 'expanded'}))
      .on('error', gutil.log)
    .pipe(gulp.dest('dist'))
});

gulp.task('html', function() {
  gulp.src(['./public/**/*.html', '!public/libs/**'])  
    .pipe(gulp.dest('dist'))
});

gulp.task('js', function () {
  gulp.src(['./public/app.js', './public/**/*.js'])
    .pipe(sourcemaps.init())
      .pipe(concat('scripts.js'))
      .pipe(ngAnnotate())
      .pipe(ngmin())
      .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function() {
    gulp.watch('./public/**/*.js', ['js']);
    gulp.watch('./public/css/main.scss', ['sass']);
    gulp.watch('./public/**/*.html', ['html']);
});