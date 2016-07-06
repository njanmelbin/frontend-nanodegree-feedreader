var gulp= require('gulp'),
	browserSync = require('browser-sync').create();

gulp.watch(['jasmine/spec/*.js','js/*.js'],browserSync.reload);
// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default',['browser-sync'],function(){
	console.log("hai");
});