var gulp = require("gulp"),
    imagemin = require("gulp-imagemin"),
    rename = require("gulp-rename");

gulp.task("opti_img", function () {
  return gulp.src(["src/img/**/**"])
    .pipe(imagemin([
      imagemin.gifsicle({
        interlaced: true
      }),
      imagemin.jpegtran({
        progressive: true
      }),
      imagemin.optipng({
        optimizationLevel: 1
      }),
      imagemin.svgo({
        plugins: [{
            removeViewBox: false
          },
          {
            cleanupIDs: false
          }
        ]
      })
    ]))
    .pipe(gulp.dest("src/img/"));
});

