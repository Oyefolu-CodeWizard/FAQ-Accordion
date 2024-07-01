const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  return src("src/templates/**/*.scss").pipe(sass()).pipe(dest("src/css"));
}

function watchTask() {
  watch(["src/templates/**/*.scss"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
