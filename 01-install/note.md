＃ Gulp - 自動化和增強工作流程

1. 先建置開發環境：安裝 node.js & npm
2. 安裝 npm 內的 gulp
- `npm install gulp -g` ( -g* 安裝全域 gulp，每台電腦僅需執行一次 )
3. 控管專案資料夾內的 npm 套件
- `npm init`，會產生一個package.json檔案，裡面有些基本設定，用來控管專案資料夾內的 npm 套件。
4. `npm install 套件名稱 --save`，將套件資訊儲存於 package.json，並產生 node_modules 資料夾，裡面包含許多 npm 的相依套件，一般不會去對  node_modules 的檔案進行編輯。