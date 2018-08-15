var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

/*===================================================================*/
/* gulp-sass Task : 
/* https://www.npmjs.com/package/gulp-sass
/*===================================================================*/
gulp.task('sass', function () {
  var plugins = [
    autoprefixer({browsers: ['last 1 version']})  // autoprefixer => postcss 的延伸套件，可選瀏覽器版本
  ];

  return gulp.src('./source/sass/**/*.sass')    // gulp.src(來源資料夾)  加入/** => 針對所有子資料夾做編譯
    .pipe(plumber())                            // 出錯不停止執行
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(plugins))                    // 到這邊已編譯好轉成 CSS // 可以載入大量插件，Autoprefixer 是其中一個
    .pipe(gulp.dest('./public/css'));           // gulp.dest(目的地資料夾)
});


/*===================================================================*/
/* watch Task : 
/* 在路徑內的 sass 檔案有異動時，執行['sass']
/*===================================================================*/
gulp.task('watch', function () {
  gulp.watch('./source/sass/**/*.sass', ['sass']);    
});


/*===================================================================*/
/* default Task : 
/* 預設 gulp 的任務，執行 gulp 會依序執行裡面的 sass、watch...
/*===================================================================*/
gulp.task('default', ['sass', 'watch']);       