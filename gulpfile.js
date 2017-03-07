var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),  // 静态服务器
    reload = browserSync.reload,
    watch = require('gulp-watch'),
    imagemin = require('gulp-imagemin'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    jsonlint = require ('gulp-json-lint'),
    concat = require('gulp-concat'),
    fileinclude = require('gulp-file-include'),
    less = require('gulp-less'),
    cache = require('gulp-cache');//在很多情况下我们只修改了某些图片，没有必要压缩所有图片，使用”gulp-cache”只压缩修改的图片

gulp.task('image', function() {
  return gulp.src('src/img/**/*')//文件入口
      .pipe(cache(imagemin({
          optimizationLevel: 3,
          progressive: true,
          interlaced: true
      })))
      .pipe(gulp.dest('dist/img'));//文件出口，即压缩后的文件的存放路径
  });

gulp.task('css', function() {
    return gulp.src('src/css/*.css')
    //   .pipe(less())
    //   .pipe(cleanCSS())
      .pipe(autoprefixer())
      .pipe(gulp.dest('dist/css'))
});

gulp.task('js', function () {//压缩
    return gulp.src(['src/js/*.js'])
        // .pipe(uglify())
        // .pipe(concat('index.js'))
        .pipe(gulp.dest('dist/js'))
});

gulp.task('data', function () { //压缩
    return gulp.src(['src/data/*.json'])
        .pipe(gulp.dest('dist/data'))
});

gulp.task('html', function () {
    return gulp.src('src/*.html')
        .pipe(fileinclude({
          prefix:'@@',
          basepath:'@file'
        }))
        .pipe(gulp.dest('dist'))
});

gulp.task('htmlPages', function () {
    return gulp.src('src/html/*.html')
        .pipe(fileinclude({
          prefix:'@@',
          basepath:'@file'
        }))
        .pipe(gulp.dest('dist/html'))
});

gulp.task('static', function (){
    return gulp.src('src/static/*.js')
        .pipe(gulp.dest('dist/static'))
});

gulp.task('serve', function () {
   browserSync.init({
         server:{baseDir:'./src'},
          browser:'chrome'});
});

gulp.task('watch', function () {
     gulp.watch(['src/**/*'],reload);
});

//生产环境保持include 片段 方便更改
// //首页加载html片段
// gulp.task('fileinclude',function(){
//   gulp.src(['src/*.html','!src/template/*.html'])
//       .pipe(fileinclude({
//         prefix:'@@',
//         basepath:'@file'
//       }))
//       .pipe(gulp.dest('src'));
// })
// //其他页面
// gulp.task('otherclude',function(){
//   gulp.src(['src/html/*.html','!src/template/*.html'])
//       .pipe(fileinclude({
//         prefix:'@@',
//         basepath:'@file'
//       }))
//       .pipe(gulp.dest('src/html'));
// })

gulp.task('default',['image','js','data','css','html','htmlPages','static','serve','watch']);
