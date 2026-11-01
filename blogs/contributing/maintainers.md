---
title: 維護者檢查表
---

# 維護者檢查表

這份清單供指導老師與經指定的維護者使用。一般貢獻者先讀[Git 協作流程](workflow.md)。分工與決策方式見[專案治理](https://github.com/fhcst/fhcst.github.io/blob/main/GOVERNANCE.md)。

## 首次採用規範

以下清單記錄 2026-11-01 的查驗進度；已勾選項目表示管理設定已讀回核對，未勾選項目仍待處理。首次導入 PR 的合併與 CODEOWNERS 生效狀態另見根目錄 `PROJECT.md`：

- [x] 指定合併維護者為 `Na2CO32`，安全與行為問題主要通報窗口為 `CXPhoenix`。
- [ ] 查驗維護者實際權限，補齊對外私下聯絡方式，並指定不涉及同一事件的替代通報窗口；分項進度見根目錄 `PROJECT.md`。
- [ ] 確認學生使用自己的帳號，按需要分配權限，離開時撤除不再需要的權限。
- [ ] 確認 Issues 已啟用；將文件與範本納入預設分支後，實際開啟新 Issue／PR 檢查範本。
- [x] 核對 `main-quality`：PR、至少一位非作者與 Code Owner 核准、舊核准失效、討論解決、必要建置、同步 `main`，以及禁止強制推送與刪除；僅 Organization Owner 有 PR-only bypass。
- [x] 核對 `main-mergers`：只限制更新，`site-mergers` 與 Organization Owner 有 PR-only bypass；學生合併 Team 不能繞過另一組品質規則。
- [x] 確認導入 PR 的 `vitepress-build` 已實際成功，並以實際檢查名稱與 GitHub Actions app ID 設為必要檢查；workflow 檔案仍待此次 PR 合併至 `main`。
- [x] 確認 Pages 使用 GitHub Actions、`github-pages` 環境只允許 `main`，維持 HTTPS；本次未重新部署。
- [ ] 確認私人漏洞回報可用，或公布可實際使用的私下安全聯絡管道。
- [ ] 核對既有團隊敘述、範例信箱、社群連結、成員資料及素材來源。
- [ ] 確認 CC BY-NC-SA 4.0 的授權範圍與歷史貢獻權利，保留第三方聲明。
- [ ] 與學生走過一次認領、建置、PR、審查和部署確認流程。

設定規格見[儲存庫規則](https://github.com/fhcst/fhcst.github.io/blob/main/.github/REPOSITORY_RULES.md)。`CODEOWNERS` 指定 `site-reviewers`，須合併至 `main` 才能對後續 PR 自動指派審查。GitHub 強制 Team 中的非作者核准；實際人名分工仍由團隊遵守：一般學生及 CXPhoenix 的 PR 由 Na2CO32 審查，Na2CO32 的 PR 由 CXPhoenix 審查。

一般學生使用 Fork＋PR；新增正式審查者由 CXPhoenix 指定後加入 `site-reviewers`，原則上僅授予 Write。可合併者另外加入 `site-mergers`，不授予品質規則 bypass。卸任時檢查所有 Team、個別及組織授權，不能只移除一個 Team。

Organization Owner（目前 CXPhoenix）可選擇透過 PR 繞過審查與建置條件強制合併，包含自己的 PR。這不代替正式核准紀錄，也不開放直接推送或刪除 `main`。頁面若仍列出未滿足條件，Owner 可使用繞過規則的合併入口；一般學生照常遵守完整門檻。

## 審查每個 PR

1. 確認 base 為原專案 `main`，來源分支與任務相符，差異沒有混入其他工作。
2. 核對內容依據、同意狀態、授權與署名，確保沒有私人資料或憑證。
3. 同步最新 `main` 並確認 `vitepress-build` 對應最新提交且成功。外部 workflow 等待執行核准時，先檢查差異再允許執行；這不代替正式 PR 核准。若作者無法執行本機檢查，維護者如實記錄補驗結果。
4. 涉及網站時預覽受影響頁面，確認窄螢幕、圖片、連結與文字。根目錄純文件變更可將網站人工檢查註明不適用。
5. 確認必要 Code Owner 核准與人名分工均符合規則；修改後重新確認檢查與審查，解決所有 review conversations。
6. 由指定合併者使用 Squash merge；核對 PR 標題、說明與作者署名。合併後自動清理原 repo 工作分支，fork 分支由作者自行整理。

## 合併後確認發布

目前的流程來源為 `.github/workflows/deploy.yml`：推送 `main` 或手動觸發後，執行 `npm ci` 與 `npm run blogs:build`，上傳 `blogs/.vitepress/dist`，再部署 Pages。`BASE` 取自 Pages 設定，本機預設為 `/`。

- [ ] 查看對應提交的 Actions，確認建置與部署兩個工作均成功。
- [ ] 使用實際部署網址打開受影響頁面，核對確實是本次內容，檢查圖片、連結與路徑。
- [ ] 在 PR 留下部署結果；未成功時說明停在哪一步，建立後續修復任務。

本機建置成功、Actions 建置成功、部署工作成功與線上內容正確，分別需要證據。範本依 [GitHub 官方機制](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates)在預設分支生效，本機新增不等於 GitHub 已啟用。

## 發布失敗或需要回復

先保留錯誤與提交編號，區分建置、權限、Pages 設定或內容問題。一般內容回復以新的修正或 revert PR 保留歷史，不強制改寫 `main`。

機密或個資外洩時，先依[安全政策](https://github.com/fhcst/fhcst.github.io/blob/main/SECURITY.md)限制影響並通知負責人；是否需要歷史清理、撤銷憑證或暫停發布，由管理者處理。緊急處置後留下不含敏感資料的處理紀錄，補上他人審查與驗證，不讓學生自行承擔管理操作。

## 交接與定期整理

交接時列出未完成任務、近期部署結果、待查驗設定與需要撤除的權限。更新根目錄 `PROJECT.md` 的狀態，並檢查閱讀入口、規則與範本一致。私人聯絡資料與憑證不進公開儲存庫。
