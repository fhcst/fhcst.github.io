# 協作文件整理紀錄

本文件供後續維護者接續工作，記錄已知事實與尚待處理事項，不代替學生的[閱讀入口](README.md)。更新日期：2026-11-01。下列「目前狀態」與「剩餘待辦」為接續工作的依據；後面的整理與驗證紀錄保留各階段的證據範圍。

## 目前狀態

- [PR #5](https://github.com/fhcst/fhcst.github.io/pull/5) 已於 **2026-11-01 17:33:06（臺北時間）**合併至 `main`，合併提交為 `4e0198ed89fe23681d9944ba12f10df6174dc13a`。
- [main-quality](https://github.com/fhcst/fhcst.github.io/rules/26306169) 與 [main-mergers](https://github.com/fhcst/fhcst.github.io/rules/26306170) 均為 Active，`main` 已受保護；Organization Owner 可透過 PR bypass 強制合併，學生 Team 仍遵守原有品質門檻。
- `pr-checks.yml`、`CODEOWNERS` 與協作文件已進入 `main`；PR 建置與必要 Code Owner 核准規則已生效，CODEOWNERS API 查驗沒有錯誤。
- 合併提交的 [GitHub Pages 建置與部署](https://github.com/fhcst/fhcst.github.io/actions/runs/41293621269)均成功；正式站的維護者及環境指南已通過 HTTP 與新內容檢查，詳見文末。

規則導入與 #5 部署已完成，不再列為待合併或待啟用事項。一般學生可開始使用 Fork＋PR；實際學生帳號的完整協作演練仍列入下方待辦。

## 已確認的需求與來源

- 組織正式名稱為 **FHCST 山城資訊工作隊**，FHCST 使用大寫；本專案定位為工作隊的**官方網站及 blog**。GitHub 帳號與儲存庫網址維持既有的 `fhcst/fhcst.github.io`。
- 專案與學生共同編輯管理；本次工作以完善專案文件為主。
- 專案負責人指定學生以 **VS Code＋Git** 操作。
- 專案負責人指定 **CC BY-NC-SA** 授權；本次採 4.0 國際版，完整條文由 Creative Commons 官方提供。程式碼尚未另設軟體授權。
- 專案負責人指定負責合併的維護者 GitHub 帳號為 **Na2CO32**；安全與行為問題的私下通報窗口為專案負責人 **CXPhoenix**。未提供專用信箱、公開私訊入口或替代窗口。
- 專案負責人提供三張官方識別圖片，指定用於 logo、favicon 與 banner；原圖保存於 `blogs/public/brand/`，尺寸、原檔名稱與使用位置見該資料夾的 `README.md`。
- 初次文件整理時本機工作樹乾淨；Git origin 為 `https://github.com/fhcst/fhcst.github.io.git`，當時整理基底為 `main` 的 `c619d75`，交付分支為 `codex/project-docs-branding-gitignore`。
- `package.json` 使用 VitePress `2.0.0-alpha.20`，提供 `blogs:dev`、`blogs:build`、`blogs:preview`。
- `deploy.yml` 使用 Node.js 22，在 `main` 推送與手動執行時建置並部署 Pages；PR 階段則由 #5 新增的 `pr-checks.yml` 執行 `vitepress-build`，兩者分工不同。

## 已採用的協作基準

一般學生先認領任務，在自己的 fork 使用工作分支並以 PR 交付；提交前交代來源與檢查結果。一般學生及 CXPhoenix 的 PR 由 Na2CO32 審查與合併，Na2CO32 的 PR 由 CXPhoenix 審查。Owner 可自行決定使用 PR-only bypass 強制合併；學生不因加入合併 Team 而取得品質規則 bypass。此方案已由負責人確認、透過 #5 納入 `main`，遠端設定也已查驗。

初次整理新增 README、貢獻與治理規則、行為與安全政策、求助說明、學生指南、授權說明，以及 Issue／PR 範本；文件與網站顯示名稱統一為「FHCST 山城資訊工作隊」，並說明官方網站及 blog 的定位。#5 再補上規則落實與 PR 建置；既有沿革內容與成員名單仍待查證，依賴版本與正式部署 workflow 未在規則導入時變更。

`.gitignore` 已依專案需要重寫，分為通用、Node.js、Bun、VitePress、Python 與 Rust 規則；保留鎖定檔、共用工具設定與正式內容。這些規則供協作時使用，不代表已安裝或導入所有對應工具。

## 剩餘待辦

以下只列尚未完成的工作；GitHub 規則、PR 自動建置及 #5 文件採用已完成，見上方狀態與文末證據。

| 事項 | 目前狀態 | 負責與完成條件 |
| --- | --- | --- |
| 對外安全通報管道 | 學生透過課程既有私下管道聯絡 CXPhoenix；未提供對外信箱或私訊入口。2026-11-01 查驗私人漏洞回報為 `enabled: false` | CXPhoenix 決定啟用私人漏洞回報或提供可實際使用的對外私下管道，驗證後更新安全政策；本次不變更此設定 |
| 替代通報窗口 | 安全與行為問題的主要窗口已指定，替代窗口尚未指定 | CXPhoenix 指定不涉入同一事件的替代窗口，補齊行為與安全政策的聯絡方式 |
| 既有內容真實性 | 沿革、服務敘述與成員資料已標示為版型示例；範例聯絡信箱已移除，成員個別社群連結仍待確認 | 負責人逐項核對，由維護者另開內容 PR；未確認前保留示例標示 |
| 圖片與素材來源 | logo 與 banner 已記錄提供來源；素材構成權利與六張既有頭像仍未盤點完成 | 負責人及素材提供者確認原作者、授權、署名與公開使用同意，由維護者補紀錄或替換 |
| 歷史貢獻授權 | 現行授權聲明不代替既有作者／素材權利核對 | 負責人確認歷史貢獻的授權權限，保留第三方聲明；未解決的部分明確標示範圍 |
| 學生實際協作演練 | 已確認 PR 建置成功、規則有效及 CODEOWNERS 無錯誤；尚未以一般學生帳號走完流程，也未實測僅有審查權的學生無法合併 | Na2CO32 帶學生完成一個真實小任務：Fork、同步、PR、必要時允許 CI 執行、正式審查、合併及確認發布；日後新增正式審查者時，再驗證審查與合併權限分離 |

同意書、真實學生名單與其他私人證據不存入公開 Git；本表僅記錄處理狀態。

### 持續維護與另案規劃

- 人員新增、畢業或卸任時，由 CXPhoenix 核對兩個 Team、個別協作者及其他組織授權，同步更新審查分工；不可只移出一個 Team 就推定權限已全數撤除。
- 每個 PR 依最新建置、審查與內容檢查處理，合併者確認 Actions 與正式網站；Owner 使用例外不代表替他人產生核准紀錄。
- 後續 `docs/` 整合仍留待另案規劃，目前尚未建立；這不是本次儲存庫規則導入的未完成項目。

## 網站來源目錄遷移（2026-11-01）

專案負責人要求將網站來源目錄由 `docs/` 改為 `blogs/`，讓 `docs/` 留供後續整合使用。目前尚未建立新的 `docs/`；後續整合方式另行規劃。

- 網站頁面、協作指南、VitePress 設定與主題、成員資料及靜態素材一併移至 `blogs/`。
- npm 指令統一為 `blogs:dev`、`blogs:build`、`blogs:preview`；GitHub Pages workflow 改用 `npm run blogs:build`，上傳 `blogs/.vitepress/dist`。
- 根目錄文件、學生指南、素材說明與 PR 範本同步更新路徑與指令。下列先前驗證紀錄中的路徑及指令也以目前名稱呈現；先前建置結果不能代替遷移後的驗證。
- 網站 URL、base 路徑處理、依賴版本與授權不變。Git 分支範例的 `docs/issue-…` 與提交類型 `docs:` 仍表示文件類型的工作，不是網站來源路徑。

### 遷移後驗證

- `npm run blogs:build` 成功；另以 `BASE=/migration-check/` 建置成功，驗證後已將本機產物重新建置為根路徑 `/`。
- 24 個搬移檔案已與搬移前的 Git 版本核對：文字檔除預期的路徑與指令替換外一致（忽略換行格式差異），3 張 PNG 位元組完全一致。
- 全部 22 份 Markdown 可用 UTF-8 讀取；54 個本機文件／素材連結存在且大小寫相符。41 個專案來源檔案均未被忽略，新的 `blogs/.vitepress/dist/` 與 `blogs/.vitepress/cache/` 仍由既有規則排除。
- 根路徑及子路徑的本機預覽均通過 HTTP 檢查，各驗證 11 個頁面／素材及 23 個頁面引用的 JS、CSS 或圖片網址；開發服務另驗證 5 個頁面／素材回應。暫時伺服器均已停止。
- 本次驗證涵蓋本機建置、檔案與 HTTP 回應；未重新進行瀏覽器視覺檢查，也未執行遠端 Actions 或線上部署驗證。

## 先前文件整理的驗證紀錄

- Node.js `v22.14.0`、npm `11.7.0`；依原鎖定檔完成 `npm ci --no-audit --no-fund`，未變更依賴版本。
- `npm run blogs:build` 成功，六個協作指南頁面已產生 HTML，標題與主要內容存在。
- 22 份專案 Markdown 通過渲染解析、UTF-8 與空白檢查；54 個本機文件／素材連結存在且大小寫相符；3 個 Issue 範本的必要 frontmatter 欄位通過解析。
- `.gitignore` 使用 `git check-ignore --no-index` 驗證 204 個路徑案例：129 個應忽略、75 個應保留，結果均符合預期；原規則下的 41 個已追蹤或可見檔案未被新規則誤藏。
- `LICENSE` 條文內容與 Creative Commons 官方英文純文字一致，僅移除文末多餘空白行以通過 Git 空白檢查；儲存庫檔案的 SHA-256：`1349A4B6148492B44F629E64EED676612E234FE9A839E4F3B277C1482C8849F1`。
- 獨立讀者可從文件回答安裝、分支、fork、PR、授權與發布等問題；已修正範本一律禁止個資、卻允許經同意成員介紹的矛盾。後續依負責人回覆補上維護者與主要通報窗口；對外聯絡方式與替代窗口仍待提供。
- logo、favicon 與 banner 已完成根路徑和 `/brand-check/` 子路徑的建置及輸出檢查；三張 PNG 與收到的附件圖片資料完全一致。
- 本機首頁已完成桌面（1280 px）與手機（390 px）瀏覽器預覽，圖片載入正常、banner 保留原比例且沒有頁面水平溢出；桌面標題已調整字級以完整顯示正式名稱。預覽截圖保存在本次工作區外的視覺化輸出資料夾，未加入網站原始碼。
- 提交前的獨立審查發現公開頁面未標示舊版型資料，已補上待確認提示並移除範例聯絡信箱；網站 GitHub 圖示改為本專案儲存庫。修正後的獨立複查通過，未留下阻擋提交的問題。
- 本次透過獨立分支與 PR 交付，不直接合併或部署，也不變更 GitHub 管理設定；遠端範本啟用與線上內容仍須在合併後驗證。

## 接續方式

先讀本文件與 [GLOSSARY.md](GLOSSARY.md)，再依[維護者檢查表](blogs/contributing/maintainers.md)完成角色與設定核對。任何尚未查驗的項目，在取得實際證據前保留「未確認」狀態。

## 儲存庫規則導入（2026-11-01）

負責人已確認採用[儲存庫規則](.github/REPOSITORY_RULES.md)。一般學生使用 Fork＋PR；一般學生與 CXPhoenix 的 PR 由 Na2CO32 審查與合併；Na2CO32 的 PR 由 CXPhoenix 審查。新增正式審查及合併學生由負責人指定，透過兩個 Team 管理。

- 遠端基底為 `main` 的 `794192b`；本次交付分支為 `codex/repo-rules`。初始查驗沒有 ruleset，`main` 未受保護；組織預設 repo 權限為 none。
- 已建立 closed 的 `site-reviewers`、`site-mergers`，初始均只含 CXPhoenix、Na2CO32，明確授予本 repo Write；原本個別 Admin／Maintain 權限保留。CXPhoenix 管理 Team 成員，Na2CO32 為 Team member。
- 已套用僅 Squash merge、關閉 auto-merge、合併後刪除原 repo 工作分支、secret scanning 與 push protection。未開啟自動依賴升級。
- 已設定外部 Fork workflow 需核准（`all_external_contributors`）；Actions 預設 token 保持 read，禁止 Actions 產生核准 review。Pages 維持 HTTPS、Actions 發布及只允許 `main` 的部署分支政策。
- 本次新增 PR 建置與 CODEOWNERS，並同步協作文件；既有正式部署 workflow、依賴版本及鎖定檔不變。
- [PR #5](https://github.com/fhcst/fhcst.github.io/pull/5) 的首次 `vitepress-build` 已[遠端成功執行](https://github.com/fhcst/fhcst.github.io/actions/runs/41292915765)，檢查來源為 GitHub Actions（app ID `15368`）。之後已啟用並讀回核對 [main-quality](https://github.com/fhcst/fhcst.github.io/rules/26306169) 與 [main-mergers](https://github.com/fhcst/fhcst.github.io/rules/26306170)。
- 已逐項讀回驗證 Team 成員與 Write 權限、原有 Admin／Maintain、Squash-only、auto-merge 關閉、分支清理、安全選項、Fork workflow 核准、Actions 預設權限及 Pages 政策；有效 `main` 規則包含 PR、必要建置、更新限制、禁止刪除及 force push，`main` 回報 protected。初始品質規則沒有 bypass，後續依負責人要求增加下述 Owner 例外；學生 Team 的品質門檻不變。
- 合併前 CODEOWNERS API 驗證沒有錯誤；當時 PR 在建置成功後仍回報 `REVIEW_REQUIRED`、`BLOCKED`，並指定 Na2CO32 審查。這是導入階段的驗證紀錄；#5 現已合併，不再處於等待審查或合併的狀態。
- 導入 PR 開發期間，本機 `npm run blogs:build`、Git 空白與 Markdown UTF-8 檢查通過，獨立唯讀審查的兩項文件問題已修正；當時尚未部署。合併後的正式部署及線上確認結果另列下節。未以測試學生帳號實際嘗試合併，也未重新執行瀏覽器視覺檢查。
- CODEOWNERS 與 PR workflow 已隨 #5 進入 `main`；後續 PR 可使用主分支的 owner 指派及建置流程。已核對必要核准規則與 CODEOWNERS 內容；實際學生 Fork＋PR 的完整流程仍須依待辦演練。

### Owner 強制合併例外

負責人要求 Owner 可自行強制合併，以免等待他人審查造成阻擋。已在 `main-quality` 與 `main-mergers` 新增 `OrganizationAdmin` actor 的 `pull_request` bypass，讀回確認目前登入的 CXPhoenix 在兩組規則均為 `current_user_can_bypass: pull_requests_only`。其他規則參數與原本 `site-mergers` 的 Team bypass 均保持原狀。

此例外允許 Organization Owner 透過 PR 略過審查與檢查條件，不允許直接推送、force push 或刪除 `main`。GitHub 的一般 PR 狀態仍可能回報 `REVIEW_REQUIRED`／`BLOCKED`，不代表 Owner 沒有 bypass 權限。設定 bypass 本身不會自動合併 PR；#5 的實際合併結果記錄如下。

### #5 合併後驗證

- GitHub 回報 #5 為 `MERGED`，合併時間為 `2026-11-01T09:33:06Z`（臺北時間 17:33:06）；`main` 指向 `4e0198ed89fe23681d9944ba12f10df6174dc13a`。
- [部署 run 41293621269](https://github.com/fhcst/fhcst.github.io/actions/runs/41293621269) 對應同一合併提交，`build` 與 `deploy` 均為 success；不是用先前版本的成功結果代替此次發布。
- 已從 `main` 查到 `.github/workflows/pr-checks.yml` 與 `.github/CODEOWNERS`，CODEOWNERS API 回報 `errors: []`；兩組 ruleset 均為 Active，`main` 回報 protected。Owner 在兩組規則仍具有 `pull_requests_only` bypass。
- 正式站[維護者檢查表](https://www.fhcst.icu/contributing/maintainers.html)與[環境指南](https://www.fhcst.icu/contributing/getting-started.html)均回應 HTTP 200，已確認前者包含 Owner／PR-only bypass／`vitepress-build`，後者包含 Fork、`YOUR_GITHUB_USERNAME` 與 `upstream` 的新指南內容。
- 上述證據分別確認合併、遠端建置、部署、規則與線上內容；沒有把 HTTP 內容檢查當作瀏覽器視覺檢查，也沒有宣稱已完成一般學生帳號的權限演練。

較前面的「先前文件整理」紀錄保留當時的證據範圍；本節為此次遠端規則導入的接續狀態。
