# Gulp - 自動化和增強工作流程

1. 先建置開發環境：安裝 node.js & npm
2. 安裝 npm 內的 gulp
   `npm install gulp -g` ( -g* 安裝全域 gulp，每台電腦僅需執行一次 )
3. 控管專案資料夾內的 npm 套件
   `npm init`，會產生一個package.json檔案，裡面有些基本設定，用來控管專案資料夾內的 npm 套件。
4. `npm install 套件名稱 --save`，將套件資訊儲存於 package.json，並產生 node_modules 資料夾，裡面包含許多 npm 的相依套件，一般不會去對  node_modules 的檔案進行編輯。

5. 進行開發：新增 gulpfile.js
   舉例使用 jade Template Language，安裝 gulp-jade npm， 
   ###### 指令參照使用文件 [gulp-jade](https://www.npmjs.com/package/gulp-jade)
   ```
   npm install gulp-jade --save
   ```
   這樣可將套件存進 package.json

<br>

6. 新增 source 資料夾，撰寫的檔案放此資料夾
7. 新增 gulpfile.js，引入 gulp & gulp-jade
   ###### 程式碼參照使用文件 [gulp-jade](https://www.npmjs.com/package/gulp-jade) 
8. `gulp jade` 終端機執行 jade 套件任務，會從 gulpfile.js 內指定路徑的檔案(*.jade)，去執行套件，並將結果存至目的地資料夾
9.  gulpfile.js 的 jade 任務加入 pretty: true，編譯完在 public 的 HTML 會展開，非壓縮版。
10. gulp.src('./source/*.jade') 修改成 gulp.src('./source/**/*.jade') ，會針對所有子資料夾做編譯