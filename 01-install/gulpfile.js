var gulp = require('gulp');          // 引入 gulp 工具
var jade = require('gulp-jade');     // 引入 gulp-jade 工具


/*===================================================================*/
/* jade Task : Compile to HTML  
/* https://www.npmjs.com/package/gulp-jade
/*===================================================================*/
gulp.task('jade', function () {
  // var YOUR_LOCALS = {};

  gulp.src('./source/*.jade')    // gulp.src(來源資料夾)
    .pipe(jade({
      // locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('./public/'))  // gulp.dest(選擇目的地)
});