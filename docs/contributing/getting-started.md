---
title: 環境與第一次啟動
---

# 環境與第一次啟動

這份步驟以 VS Code＋Git 為主，指令可在 Windows PowerShell、VS Code 終端機或其他常用 shell 執行。每段指令依序執行，先確認結果再繼續。

## 1. 準備工具與帳號

- 安裝 [Git](https://git-scm.com/downloads)、[VS Code](https://code.visualstudio.com/) 與 [Node.js 22.x](https://nodejs.org/en/download)。npm 隨 Node.js 提供。
- 準備自己的 GitHub 帳號；沒有原儲存庫寫入權仍可用 fork 提交。
- 確認可以公開使用的 Git 提交名稱與信箱。可使用 GitHub 設定提供的 noreply 信箱，避免公開私人信箱。

開啟終端機檢查：

```sh
git --version
node --version
npm --version
```

Node.js 應顯示 `v22.x.x`，與專案現有 Actions 的主要版本一致。顯示找不到指令時，先確認安裝並重新開啟 VS Code；不要直接跳過。

## 2. 取得專案

有原儲存庫寫入權時，在你選好的工作資料夾執行：

```sh
git clone https://github.com/fhcst/fhcst.github.io.git
cd fhcst.github.io
```

沒有寫入權時，先在 GitHub 按 Fork，再複製自己 fork 的 HTTPS 位址進行 clone；後續設定見[Git 協作流程](workflow.md)。不要把個人存取權杖寫進網址。

在 VS Code 使用「開啟資料夾」選取 `fhcst.github.io`。確認終端機所在資料夾內有 `package.json`。

檢查此儲存庫的提交身分：

```sh
git config user.name
git config user.email
```

需要設定時，將下列示意文字換成自己的公開名稱與適當信箱；不加 `--global`，只修改此儲存庫：

```sh
git config user.name "你的公開名稱"
git config user.email "你的 GitHub noreply 信箱"
```

## 3. 安裝鎖定版本

```sh
npm ci
```

此指令依 `package-lock.json` 安裝，會重建本機 `node_modules/`。第一次需要網路；安裝成功不等於網站建置成功。不要因為看到更新通知就升級 npm 或 VitePress，也不要用 `npm audit fix --force` 當作一般修復步驟。

## 4. 看見本機網站

```sh
npm run docs:dev
```

開啟終端機顯示的網址，通常為 `http://localhost:5173`；埠號被占用時可能不同。應能看到首頁，也能開啟成員與關於頁面。修改後確認畫面更新。停止伺服器時在該終端機按 `Ctrl+C`。

第一次啟動完成後，依[協作流程](workflow.md)建立工作分支再修改，不直接在 `main` 開始任務。

## 5. 建置與預覽正式產物

在另一個終端機，或停止開發伺服器後執行：

```sh
npm run docs:build
npm run docs:preview
```

第一個指令需成功結束；第二個指令會持續提供本機預覽。開啟其顯示的網址，通常為 `http://localhost:4173`，檢查本次修改的頁面、圖片與連結，並縮窄瀏覽器寬度確認內容可讀。預覽使用上一次的建置產物，後續有修改就要重新建置。

`node_modules/`、`docs/.vitepress/dist/` 與 `docs/.vitepress/cache/` 已被忽略，不要強制加入 Git。

## 常見問題

| 狀況 | 先檢查 |
| --- | --- |
| `ENOENT` 或找不到 `package.json` | 終端機是否在專案根目錄 |
| PowerShell 說無法載入 `npm.ps1` | 可改執行 `npm.cmd ci`、`npm.cmd run docs:dev`；不要為了執行專案任意放寬全機安全設定 |
| `npm ci` 失敗 | Node.js 版本、網路與完整錯誤訊息；若提示鎖定檔不一致，先求助，不刪鎖定檔重裝 |
| Git 推送遭拒 | 檢查登入帳號、是否有寫入權、是否推到自己的分支；沒有權限時用 fork |
| 網站打不開 | 伺服器是否還在執行、是否使用終端機實際提供的網址 |
| 圖片在部署後不見 | 檔名大小寫、`docs/public/` 路徑及 base；見[內容規範](content-style.md) |
| 看到 audit 或更新提示 | 與實際安裝／建置錯誤分開記錄，由維護者評估，不逕自強制升級 |

無法排除時，依[求助說明](https://github.com/fhcst/fhcst.github.io/blob/main/SUPPORT.md)提供已遮蔽敏感資訊的步驟與錯誤訊息。

參考：[VitePress 入門](https://vitepress.dev/guide/getting-started)、[建置與部署](https://vitepress.dev/guide/deploy)。本專案的實際版本與指令以 `package.json`、鎖定檔和 workflow 為準。
