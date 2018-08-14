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

gulp.task('watch', function () {
  gulp.watch('./source/sass/**/*.sass', ['sass']);    // 在路徑內的 sass 檔案有異動時，執行['sass']
});

gulp.task('default', ['sass', 'watch']);       // 預設 gulp 的任務，執行 gulp 會依序執行裡面的 sass、watch... 