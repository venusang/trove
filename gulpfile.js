var   gulp = require('gulp'),
	  compass = require('gulp-compass'),
	  watch = require('gulp-watch'),
	  handlebars = require('gulp-ember-handlebars'),
	  uglify = require('gulp-uglify'),
	  concat = require('gulp-concat'),
	  sass = require('gulp-sass');
	  minifyCSS = require('gulp-minify-css');
	  
// ADD templates in when ready
gulp.task('default', ['sass', 'scripts','minify-css','watch']);	  
gulp.task('production', ['css', 'templates', 'scripts']);

gulp.task('sass', function () {
  gulp.src('resources/sass/troveStyle.scss')
    .pipe(sass({
      includePaths: ['resources/sass'],
      errLogToConsole: true
    }))
    .pipe(gulp.dest('resources/css'));
});

gulp.task('templates', function() {
  gulp.src([config.templatesPath + '/**/*.hbs'])
    .pipe(handlebars({
      outputType: 'browser',
      namespace: 'Ember.TEMPLATES'
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('resources/js/'));
});

gulp.task('minify-css', function() {
  var cssSrc = [
    'resources/css/bootstrap.min.css',
    'resources/css/font-awesome.min.css',
    'resources/css/normalize.css',
    'resources/css/awesome-bootstrap.css',
    'resources/css/dataTables.bootstrap.css',
    'resources/css/jquery.datetimepicker.css',
    'resources/css/select2.min.css',
    'resources/css/troveStyle.css'
  ];
 
  return gulp.src(cssSrc)
    .pipe(minifyCSS({keepBreaks:false, keepSpecialComments:0}))
    .pipe(concat('troveMain.min.css'))
    .pipe(gulp.dest('resources/css'));
});

gulp.task('scripts', function() {
  var scriptSrc = [
    'resources/js/libs/jquery-1.10.2.js',
    'resources/js/libs/bootstrap.min.js',
    'resources/js/libs/handlebars-v1.3.0.js',
    'resources/js/libs/ember-1.8.0.js',
    'resources/js/libs/ember-data.min.js',
    'resources/js/libs/select2.min.js',
    'resources/js/libs/jquery.dataTables.min.js',
    'resources/js/libs/dataTables.bootstrap.js',
    'resources/js/libs/jquery.datetimepicker.js',
    'resources/js/libs/validator.js',
    'resources/js/libs/underscore.js',
    'resources/js/libs/custom.js'
  ];
 
  return gulp.src(scriptSrc)
    .pipe(uglify({ mangle: false }))
    .pipe(concat('troveMain.min.js'))
    .pipe(gulp.dest('resources/js'));
});

gulp.task('watch', function() {
  //watches SCSS files for changes
  gulp.watch(config.sassPath + '/*.scss', ['sass']);
 
  //watches handlebars files for changes
  gulp.watch(config.templatesPath + '/**/*.hbs', ['templates']);
   
  //watches JavaScript files for changes
  gulp.watch('resources/js/**/*.js', ['scripts']);
}); 

var config = {
  sassPath: 'resources/sass',
  templatesPath: 'resources/js/templates'
}
