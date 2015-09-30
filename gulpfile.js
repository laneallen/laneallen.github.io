var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('default', function() {
  // Combine JS

});

// static server
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
});
