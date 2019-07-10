var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat') ,
    rename = require('gulp-rename') ,
    livereload = require('gulp-livereload'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer') ;


    gulp.task('html',function(){
        return gulp.src('project/Index.html')
                .pipe(gulp.dest('dist'))
                .pipe(livereload())
    })
    
    gulp.task('sass',function(){
        return gulp.src('project/Sass/Home/Base.scss')
                .pipe(sourcemaps.init())
                .pipe(sass({outputStyle : 'compressed'}))
                .pipe(rename('Main.css'))
                .pipe(gulp.dest('project/Css'))
                .pipe(autoprefixer())
                .pipe(sourcemaps.write('.'))
                .pipe(gulp.dest('dist/Css'))
                .pipe(livereload())
    })
    
    gulp.task('js',function(){
        return gulp.src(['project/Js/**.js'],['project/Js/Jquery.3.4.1.js'])
                .pipe(gulp.dest('dist/Js/'))
                .pipe(livereload())
    })
    
    /*
    gulp.task('compress',function(){
        return gulp.src('./Git_Gulp')
                .pipe(zip('Here.zip'))
                .pipe(gulp.dest('../'))
    })
    */
    
    gulp.task('watch',function(){
        require('./server.js');
        livereload.listen();
        gulp.watch('project/Index.html', gulp.series('html'))
        gulp.watch('project/Sass/**/*.scss', gulp.series('sass'));
        gulp.watch('project/Js/**.js', gulp.series('js'))
    })
    
    /*
    gulp.task('',function(){
    
    })
    */
