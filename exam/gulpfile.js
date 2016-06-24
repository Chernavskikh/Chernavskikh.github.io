var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var cssmin = require('gulp-cssmin');//минификатор
var rename = require('gulp-rename');//переименовать в min.css
var notify = require('gulp-notify');//уведомления в панельке
var prefix = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');
var connect = require('gulp-connect');
var sass = require('gulp-sass');


//server connect
gulp.task('connect', function() {
  connect.server({
  		root: 'app',
  		livereload: true
  	});
});

//html
gulp.task('html', function() {
	gulp.src('./app/index.html')
  .pipe(notify("Hello Gulp!"))
	.pipe(connect.reload());
});
//scss
gulp.task('sass', function () {
  return gulp.src('./app/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./app/css'))
});
//css
gulp.task('css', function () {
  return gulp.src('./app/css/*.css')
    .pipe(concatCss("bundle.css"))
    .pipe(prefix('last 10 versions', 'ie8', 'ie9'))
    .pipe(gulp.dest('./app/bundle'))
    .pipe(cssmin())
  	.pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./app/bundle'))
    .pipe(connect.reload())
    .pipe(notify("Done!"));
});

//watch
gulp.task('watch', function () {
	gulp.watch('./app/css/*.css', ['css'])
	gulp.watch('./app/index.html', ['html'])
  gulp.watch('./app/sass/*.scss', ['sass'])
})

//default
gulp.task('default', ['connect', 'sass', 'css', 'watch', 'html']);

