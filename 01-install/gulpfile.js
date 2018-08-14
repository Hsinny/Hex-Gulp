var gulp = require('gulp');          // 引入 gulp 工具
var jade = require('gulp-jade');     // 引入 gulp-jade 工具


/*===================================================================*/
/* jade Task : Compile to HTML  
/* https://www.npmjs.com/package/gulp-jade
/*===================================================================*/
gulp.task('jade', function () {
  // var YOUR_LOCALS = {};

  gulp.src('./source/**/*.jade')    // gulp.src(來源資料夾)  加入/** => 針對所有子資料夾做編譯
    .pipe(jade({
      pretty: true               // 編譯的 HTML 會展開 （ 沒加則是壓縮版 )
      // locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('./public/'))  // gulp.dest(選擇目的地)
});