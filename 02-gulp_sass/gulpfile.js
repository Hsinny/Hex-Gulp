var gulp = require('gulp');
var sass = require('gulp-sass');

/*===================================================================*/
/* gulp-sass Task : 
/* https://www.npmjs.com/package/gulp-sass
/*===================================================================*/
gulp.task('sass', function () {
  return gulp.src('./source/sass/**/*.sass')    // gulp.src(來源資料夾)  加入/** => 針對所有子資料夾做編譯
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));           // gulp.dest(目的地資料夾)
});