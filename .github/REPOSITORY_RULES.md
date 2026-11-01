# 儲存庫規則與權限管理

本規格依專案負責人於 2026-11-01 確認的 Fork＋PR 方案整理。GitHub 管理設定與本文件分開維護；實際查驗狀態記錄於根目錄 [PROJECT.md](../PROJECT.md)。

## 人員與審查流程

| PR 作者 | 必要審查者 | 合併者 |
| --- | --- | --- |
| 一般學生或外部貢獻者 | Na2CO32 | Na2CO32 |
| Na2CO32 | CXPhoenix | CXPhoenix 核准後，由 Na2CO32 合併 |
| CXPhoenix | Na2CO32 | Na2CO32 |

一般學生使用自己的 fork 與工作分支，不授予原儲存庫寫入權。審查者須使用 **Approve** 提交正式核准；留言、按讚、允許執行 workflow 或 AI 審查不能代替必要的人員核准。作者不能核准自己的 PR。

合併前先同步最新 `main`，等待最新提交的建置成功，再完成審查。影響差異的新提交會使舊核准失效；所有審查討論須處理完畢。網站變更仍需人工預覽頁面、圖片、連結與手機寬度。合併者確認 Actions 與正式網站後，才回報發布完成。

授權、公開個資、依賴、部署 workflow 及權限變更，依 [GOVERNANCE.md](../GOVERNANCE.md) 額外由 CXPhoenix 或其指定管理者確認。未經確認不撤銷他人的反對審查來加速合併。

## GitHub Teams

| Team | repo 權限 | 初始成員 | 責任 |
| --- | --- | --- | --- |
| `@fhcst/site-reviewers` | 明確授予 Write | CXPhoenix、Na2CO32 | 提供必要的 Code Owner 核准 |
| `@fhcst/site-mergers` | 明確授予 Write | CXPhoenix、Na2CO32 | 在全部條件通過後執行合併 |

兩個 Team 都採 closed（組織內可見，非 secret）。CXPhoenix 為 Team maintainer，Na2CO32 為 Team member；既有個別 Admin／Maintain 權限保留。一般學生不加入這兩個 Team。新任審查者原則上只需要 Write，不因參與審查而給予 Maintain／Admin。

`CODEOWNERS` 以 `* @fhcst/site-reviewers` 覆蓋所有檔案，包含自身與 workflows。GitHub 強制的是「該 Team 中至少一位非作者核准」，不能僅靠 CODEOWNERS 強制依 PR 作者指定不同個人。上表的人名分工由團隊遵守；要將這個條件完全自動化，須另行設計必要的審查政策檢查。

## main-quality

目標為 `refs/heads/main`，enforcement 為 Active，bypass 名單留空。

- 必須透過 PR，至少 1 位非作者核准，並須取得 Code Owner 核准。
- 新變更使舊核准失效，合併前解決所有 review conversations。
- 必須通過 GitHub Actions 的 `vitepress-build` 檢查，並同步最新 `main`。
- 禁止刪除及 force push。
- 不設定正式 Pages 部署成功作為合併前條件。

不另外要求「最後一次推送者以外的人核准」；已由非作者核准與舊核准失效機制要求重新審查，避免維護者協助修正後出現額外的審查人力需求。

## main-mergers

目標同為 `refs/heads/main`，enforcement 為 Active。這組只設定 Restrict updates，bypass 僅授予 `site-mergers`，模式為 **For pull requests only**。

這個 bypass 只允許指定 Team 更新 `main`，不能繞過另一組 `main-quality` 的建置、核准及歷史保護。兩組不可合併成一組再授予合併者整組 bypass。一般審查者即使具有 Write，也不能合併至 `main`。

管理者日常同樣遵守品質規則。若緊急事故確需調整規則，由 CXPhoenix 評估並記錄原因、範圍、調整時間與恢復結果；本規格不預先授權例外操作。

## Actions 與發布

- `.github/workflows/pr-checks.yml` 使用 `pull_request`，對所有目標為 `main` 的 PR 執行，不使用路徑篩選。
- 使用 Node.js 22、`npm ci` 與 `npm run blogs:build`；檢查 PR 與基底合併後的結果。
- PR 檢查僅有 `contents: read`，不部署、不讀取部署機密、不使用 `pull_request_target` 執行 PR 程式碼。
- Actions 預設 token 維持 read，禁止 Actions 建立核准用的 PR review。
- 外部貢獻者的 workflow 採 `all_external_contributors` 核准政策。是否屬於外部由 GitHub 按組織與 repo 身分判定，並非每位學生都一定需要人工允許執行。
- 允許 workflow 執行前先閱讀差異，尤其是 workflow 與套件安裝腳本。允許執行不等於核准合併。
- 必要檢查先實際成功執行，再以實際 job 名稱及 GitHub Actions app ID 設定。不要將合併後才執行的部署 job 設為 PR 必過檢查。
- GitHub Pages 維持使用 Actions，`github-pages` 環境只允許 `main` 部署，HTTPS 維持開啟。

## 其他設定

- 僅允許 Squash merge，commit 標題使用 PR 標題，內文使用 PR 說明；合併前核對署名及內容。
- 關閉 auto-merge，由指定合併者確認後操作。
- 開啟合併後自動刪除本 repo 工作分支；學生 fork 裡的分支由學生自行整理。
- 開啟 repo 層級 secret scanning 與 push protection；不以此代替個資、同意與授權的人工確認。
- 本次不強制簽署 commit、merge queue 或增加不存在的 test／lint 指令，也不開啟自動依賴升級。

## 新增學生與交接

1. 練習審查先維持一般權限，由正式審查者確認意見。
2. 經 CXPhoenix 指定的正式審查者加入 `site-reviewers`，原則上僅給 Write，不加入 `site-mergers`。
3. 經指定可合併的學生同時加入兩個 Team；即使是合併者，自己的 PR 仍須他人核准。
4. 每次新增人員同步更新治理文件中的任務範圍與審查分工；Na2CO32 的 PR 仍由 CXPhoenix 審查，直到負責人另行調整。
5. 畢業、卸任或交接時，移出 Team，並查驗個別協作者、其他 Team 與組織層級的剩餘授權。移出一個 Team 不代表所有存取權都已撤除。

## 驗收與啟用順序

先建立 Team 與權限，再透過 PR 加入建置及 CODEOWNERS。看到實際的 PR build 成功後才設定必要檢查，並讀回兩組 ruleset、Team、Actions、Pages 與安全設定。

首次新增的 CODEOWNERS 須經審查合併至 `main` 後，才會用於後續 PR 的自動審查指派。首次導入 PR 的作者若是 CXPhoenix，仍須由 Na2CO32 正式核准，不由自動化假冒審查。
