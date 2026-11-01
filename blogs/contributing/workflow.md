---
title: Git 協作流程
---

# Git 協作流程

共同編輯不代表大家直接修改同一個 `main`。一般學生使用自己的 fork 與工作分支，透過 PR 讓同學和維護者看見變更；不需取得原儲存庫寫入權。開始前先依[貢獻指南](https://github.com/fhcst/fhcst.github.io/blob/main/CONTRIBUTING.md)確認任務。

下列分支名與 Issue 編號皆為示例，請換成自己任務的名稱。指令在專案根目錄執行。若不確定目前狀態，先執行 `git status`，不要用重設或清除指令讓畫面「看起來乾淨」。

## 1. 同步並建立分支

先檢查：

```sh
git status
```

若有未提交變更，先確認它屬於哪個任務並保存；不確定就請同學或老師協助。不要直接切換任務或刪除變更。

### 有原儲存庫寫入權

`origin` 應為 `fhcst/fhcst.github.io`，可用 `git remote -v` 確認。工作樹乾淨後執行：

```sh
git switch main
git pull --ff-only origin main
git switch -c docs/issue-12-team-profile
```

若 `--ff-only` 失敗，表示本機與遠端需要釐清，不要改用強制操作。

### 使用 fork

`origin` 應指向自己帳號的 fork。第一次加入原專案作為 `upstream`：

```sh
git remote -v
git remote add upstream https://github.com/fhcst/fhcst.github.io.git
```

若 `upstream` 已存在，確認其位址正確即可，不重複新增。每次開始新任務，在乾淨工作樹執行：

```sh
git fetch upstream
git switch -c docs/issue-12-team-profile upstream/main
```

後續推送到自己的 `origin`，PR 的目標仍是原專案 `main`。

## 2. 修改與檢查

例如任務是更新成員顯示資料，主要檔案為 `blogs/.vitepress/team.ts`。僅修改已確認的內容；完整檔案對照見[內容規範](content-style.md)。

可使用 VS Code 的「原始檔控制」逐檔閱讀差異，或執行：

```sh
git diff
npm run blogs:build
npm run blogs:preview
```

建置成功後檢查實際頁面。預覽結束按 `Ctrl+C`。若只修改根目錄規則文件，人工檢查 GitHub Markdown 顯示與連結即可，但仍如實記錄是否執行建置。

## 3. 建立提交並推送

以下示範只暫存成員資料檔；換成你實際修改的檔案，不習慣檢查差異前不要一次暫存所有檔案。

```sh
git add blogs/.vitepress/team.ts
git diff --cached
git commit -m "docs: 更新已確認的成員介紹"
git push -u origin docs/issue-12-team-profile
```

`git diff --cached` 顯示本次將提交的內容。確認沒有私人資料、無關檔案與他人工作再提交。VS Code 操作暫存、提交與推送也可以，但仍須做相同檢查。

## 4. 開啟 PR

到 GitHub 使用 **Compare & pull request**，確認目標儲存庫為 `fhcst/fhcst.github.io`、base 為 `main`，來源為自己的工作分支。依 PR 範本寫下原因、變更、來源和實際檢查。

尚未完成時開 Draft PR。沒有跑過的本機建置或預覽不要勾選；說明原因並請維護者協助。PR workflow 執行 `vitepress-build`；外部貢獻者可能需先等待維護者允許執行。允許 workflow 執行與正式核准 PR 是不同操作，須看到最新版本的實際建置結果。首次導入狀態見[專案紀錄](https://github.com/fhcst/fhcst.github.io/blob/main/PROJECT.md)。

## 5. 回應意見與處理衝突

審查意見在原 PR 討論。修改後在同一分支追加提交並推送，不另開一個重複 PR，也不需要強制推送。

若需要納入最新 `main`，先確認工作樹乾淨且目前在自己的工作分支。共用儲存庫分支執行：

```sh
git fetch origin
git merge origin/main
```

使用 fork 時改成：

```sh
git fetch upstream
git merge upstream/main
```

發生衝突時，先讀懂兩邊修改；不要一律選「接受我的變更」。在 VS Code 逐處確認、移除衝突標記並和原作者核對，再暫存已解決的檔案、執行 `git commit` 完成合併，重新建置並推送。

若尚未進行其他操作且要取消這次合併，可執行 `git merge --abort` 回到合併前；不確定時保留現場求助。不要使用 `git reset --hard`、`git clean -fd` 或強制推送來略過衝突。

## 6. 合併後確認

合併前先同步最新 `main`、確認建置並取得重新審查。一般學生的 PR 由 Na2CO32 正式核准並以 Squash merge 合併；Na2CO32 自己的 PR 由 CXPhoenix 核准。合併後查看 Actions 與實際網站，兩者確認後再回報發布結果。作者開始下一個任務前，重新同步最新 `main`，使用新的分支名。學生 fork 裡的舊工作分支由學生自行整理。

## 臨時使用 GitHub 網頁編輯

文字小修正可開啟檔案按鉛筆圖示，選擇建立**新分支並提出 PR**；沒有寫入權時依 GitHub 提示建立 fork。不要選直接提交到 `main`。網頁 Markdown 預覽無法代替 VitePress 建置與網站預覽，請在 PR 註明自己未執行本機檢查，交由維護者補驗。
