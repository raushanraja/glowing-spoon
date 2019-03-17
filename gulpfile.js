var gulp        = require('gulp');
var sass        = require('gulp-sass');
var pug         = require('gulp-pug');
var browserSync     = require('browser-sync')
/**
 * Compile pug files into HTML
 */

gulp.task('pug', function() {
    return gulp.src('./assets/views/index.pug')
        .pipe(pug({
            doctype: 'html',
            pretty: true
        }))
        .pipe(gulp.dest('./dist/'))
        .pipe(browserSync.stream());
});

/**
 * Compile scss files into css
 */
gulp.task('sass', function () {
    return gulp.src('./assets/styles/*.scss')
        .pipe(sass()).on('error', sass.logError)
        .pipe(gulp.dest('./dist/css'))
	.pipe(browserSync.stream());
});


gulp.task('css', function () {
    return gulp.src('./assets/styles/*.css')
        .pipe(gulp.dest('./dist/css'))
	.pipe(browserSync.stream());
});


gulp.task('images', function () {
    return gulp.src('./assets/images/*')
        .pipe(gulp.dest('./dist/images'))
	.pipe(browserSync.stream());
});

gulp.task('js', function () {
    return gulp.src('./assets/scripts/*')
        .pipe(gulp.dest('./dist/js'))
	.pipe(browserSync.stream());
});

// /**
//  * Serve and watch the scss/pug files for changes
//  */
gulp.task('default',  function () {
 browserSync.init({
        server: "./dist"
    });
    gulp.watch('./assets/styles/**/*.scss',gulp.series('sass'));
    gulp.watch('./assets/styles/**/*.css',gulp.series('css'));
    gulp.watch('./assets/views/**/*.pug',  gulp.series('pug'));
    gulp.watch('./assets/images/**/*.*',  gulp.series('images'));
    gulp.watch('./assets/scripts/**/*.js',  gulp.series('js'));
    // gulp.watch('./dist/*html').on('change',browserSync.reload)
});
