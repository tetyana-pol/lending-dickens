const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function compileSass() {
  return gulp
    .src("src/scss/*.scss") // Path to your SCSS files
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("src/css")); // Output directory for CSS files
}
gulp.task("sass", compileSass);

function watchSass() {
  gulp.watch("src/scss/*.scss", compileSass);
}
gulp.task("watch", watchSass);
