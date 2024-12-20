// Gulp.js configuration

// include gulp and plugins

const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const watch = require('gulp-watch');
const sass = require('gulp.sass');

// file locations

const source = 'source/',
    build = 'build/';

gulp.task('watch', function () {
    watch(
        ['./app/*.html', './app/css/**/*.css'],
        gulp.parallel(browserSync.reload)
    );
});

// Task to start the server from app directory

gulp.task('server', function () {
    browserSync.init({
        server: {
            baseDir: './app/',
        },
    });
});

//   default task

gulp.task('default', gulp.parallel('server', 'watch'));
