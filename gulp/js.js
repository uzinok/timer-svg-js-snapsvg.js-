var gulp = require("gulp"),
    concat = require("gulp-concat"),
    minify = require('gulp-minify');

gulp.task("js", function () {
  return gulp.src("src/js/*.js")
    .pipe(concat("timer.js", {
      newLine: ";"
    }))
    .pipe(minify({
      ext: {
        src: '.js',
        min: '.min.js'
      },
      exclude: ['tasks']
    }))
    .pipe(gulp.dest("build/js"));
});
