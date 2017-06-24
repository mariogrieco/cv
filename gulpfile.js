var gulp         = require("gulp");
var sass         = require("gulp-sass");
var concat       = require("gulp-concat");
var babel        = require("gulp-babel");
var autoprefixer = require("gulp-autoprefixer") 
var pug          = require("gulp-pug");
var htmlmin      = require("gulp-htmlmin");
// var postcss = require('gulp-postcss');

gulp.task("css",function(){
    gulp.src("css/*.css")  
    .pipe(autoprefixer({ browsers: [">=0%"]}))
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(concat("stylesheet.css"))
    .pipe(gulp.dest("dist/css"));
});


gulp.task("js", function(){
	gulp.src("js/*.js")
	.pipe(babel({presets: ['es2015',"babili"]}))
  .pipe(concat("scripts.js"))
	.pipe(gulp.dest("dist/js"));
});

gulp.task("index",function(){
    gulp.src("index.html")
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest("dist"));
});


gulp.task("assets",function(){
    gulp.src("img/*")  
    .pipe(gulp.dest("dist/img"));

    gulp.src("fonts/*")  
    .pipe(gulp.dest("dist/fonts"));

    gulp.src("css/fonts/*")  
    .pipe(gulp.dest("dist/css/fonts"));

});


gulp.task("default", ["css","js","index","assets"] );