var gulp = require('gulp');
var clean = require('gulp-clean');

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

gulp.task('default', ['clean', 'webpack']);

