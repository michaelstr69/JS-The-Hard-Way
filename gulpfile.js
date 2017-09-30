const gulp = require('gulp');
const prettierPlugin = require('gulp-prettier-plugin');
const eslint = require('gulp-eslint');

const allFiles = ['./capitulos/**/*.js', './gulpfile.js'];
const prettierOpts = {
  singleQuote: true
};

gulp.task('prettier', () =>
  gulp
    .src(allFiles)
    .pipe(prettierPlugin(prettierOpts, { filter: true }))
    // passing a function that returns base will write the files in-place
    .pipe(gulp.dest(file => file.base))
);

gulp.task('lint-ci', () =>
  gulp
    .src(allFiles)
    .pipe(prettierPlugin(prettierOpts, { validate: true }))
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
);
