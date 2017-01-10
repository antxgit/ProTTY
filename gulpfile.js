var gulp = require('gulp'),
    inSequence = require('run-sequence'),
    del = require('del'),
    inject = require('gulp-inject'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    typescript = require('gulp-typescript');

gulp.task('default', function (done) {

    inSequence(
        'clear',
        [
            'build-vendor',
            'build-app',
            'copy-app-package-file',
            'copy-app-main-file'
        ],
        'build-html'
    );
});

gulp.task('watch', function (done) {

    inSequence(
        ['default'],
        ['watch-ts']
    )

        

});

gulp.task('clear', function (done) {
    del.sync(['bin/**/*'], { force: true });
    done();
});

gulp.task('copy-app-package-file', function () {
    return gulp.src('src/app.package.json')
        .pipe(rename('package.json'))
        .pipe(gulp.dest('bin'));
});

gulp.task('copy-app-main-file', function () {
    return gulp.src('src/main.js')
        .pipe(gulp.dest('bin'));
});

gulp.task('build-vendor', function(){

    return gulp.src([
        "node_modules/systemjs/dist/system.src.js",
    ])
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('bin/js'));
});

gulp.task('build-app', function () {

    var project = typescript.createProject('tsconfig.json', { sortOutput: true });

    var tsResult = project.src()
        .pipe(sourcemaps.init())
        .pipe(typescript(project));

    return tsResult.js
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('bin/js'));
});

gulp.task('build-html', function () {

    var sources = gulp.src(['bin/js/vendor.js', 'bin/js/app.js'], { read: false });

    return gulp.src('src/index.html')
        .pipe(inject(sources, {ignorePath: 'bin',  addRootSlash: false }))
        .pipe(gulp.dest('bin'));
});

gulp.task('watch-ts', ['build-app'], function() {
    gulp.watch('src/app/*.ts*', ['build-app']);
});