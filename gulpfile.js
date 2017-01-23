var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var ngAnnotate = require('gulp-ng-annotate');
var ngmin = require('gulp-ngmin');
var browserSync = require('browser-sync').create();
var historyApiFallback = require('connect-history-api-fallback');
var proxyMiddleware = require('http-proxy-middleware');



gulp.task('css', function() {
  gulp.src('./public/css/style.css')
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({stream: true}));    
});


gulp.task('sass', function() {
  gulp.src('./styles/main.scss')
    .pipe(sass({style: 'expanded'}))
      // .on('error', gutil.log)
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({stream: true}));
});


gulp.task('html', function() {
  gulp.src(['./public/**/*.html', '!public/libs/**'])  
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({stream: true}));
});


gulp.task('js', function () {
  gulp.src(['./public/app.js', './public/**/*.js'])
    .pipe(sourcemaps.init())
      .pipe(concat('scripts.js'))
      .pipe(ngAnnotate())
      .pipe(ngmin())
      .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.reload({stream: true}));    
});


gulp.task('reload',['build', 'watch'], function() {
  var proxy = proxyMiddleware('/api', {target: 'http://127.0.0.1:8080'});
  browserSync.init({
    server: {
      baseDir:['./dist']
    },
    middleware: [proxy, historyApiFallback()],
    port: 1337
  });
});


gulp.task('watch', function() {
    gulp.watch('./public/**/*.js', ['js']);
    gulp.watch('./public/css/main.scss', ['sass']);
    gulp.watch('./public/css/main.css', ['css']);
    gulp.watch('./public/**/*.html', ['html']);
});


gulp.task('build', ['js', 'html', 'css', 'sass']);