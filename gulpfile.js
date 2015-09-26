var $ = require('gulp-load-plugins')();
var gulp = require('gulp');

gulp.task('default', ['react', 'watch']);

gulp.task('react', function () {
  return gulp.src('./src/js/app.js')
    .pipe($.browserify({
      transform: ['reactify']
    }))
    .pipe(gulp.dest('build/js'));
});

gulp.task('watch', function () {
  gulp.watch('src/**/*.*', ['react']);
});
