var gulp = require('gulp');
var clean = require('gulp-clean');
var connect = require('gulp-connect');

var named = require('vinyl-named');

var webpack = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');

gulp.task('clean', function() { 
  return gulp.src(['./dist/**/*.*', '!./dist/.keep'])
    .pipe(clean());
});

gulp.task('webpack', function() {
  return gulp.src('./src/*.js')
    .pipe(named())
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('connect', function() {
  connect.server({
    root: 'public',
    livereload: true
  });
});

gulp.task('static', function() {
  return gulp.src(['./dist/**/*.*', '!./dist/.keep'])
    .pipe(gulp.dest('./public/static/'))
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch(['./dist'], ['static']);
});

gulp.task('default', ['clean', 'webpack']);

gulp.task('dev', ['clean', 'webpack', 'static', 'connect', 'watch']);







