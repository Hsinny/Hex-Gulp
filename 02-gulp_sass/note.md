# Gulp-sass 流程

1. npm init
2. npm install gulp --save
3. npm install gulp-sass --save
4. 建立 source/sass 資料夾
5. 新增 gulpfile.js
6. 引入 gulp-sass，指令參考 [官方文件](https://www.npmjs.com/package/gulp-sass) 
7. 執行 gulp sass，在目的地資料夾產生編譯檔案.css
8. 加入 gulp.task watch 監聽，來源資料夾內的 sass 檔案若有異動，即執行 sass 編譯
9. 異動 *.sass 檔案內容
---

10. 預設 gulp 的任務，執行 gulp 會依序執行裡面的 sass、watch... 
11. 引入 gulp-plumber， .pipe(plumber())加入到 .scr(來源資料夾)的後面，讓執行的任務內容若有錯誤不會停止，

---

12. 引入 gulp-postcss，可以載入大量插件，Autoprefixer 是其中一個
13. 引入 autoprefixer，postcss 的延伸套件，自動添加前輟詞，可選瀏覽器版本