<p align="center">
  <a href="https://fhcst.github.io/">
    <img src="blogs/public/brand/fhcst-banner.png" alt="FHCST 山城資訊工作隊｜臺北市立復興高級中學資安團隊" width="100%">
  </a>
</p>

<h1 align="center">FHCST 山城資訊工作隊</h1>

<p align="center">官方網站及 blog · 老師與學生共同編輯，讓想法成為作品。</p>

<p align="center">
  <a href="https://github.com/fhcst/fhcst.github.io/actions/workflows/deploy.yml">
    <img src="https://github.com/fhcst/fhcst.github.io/actions/workflows/deploy.yml/badge.svg?branch=main" alt="main 分支的 GitHub Pages 建置與部署狀態">
  </a>
  <a href="blogs/contributing/getting-started.md">
    <img src="https://img.shields.io/badge/Node.js-22.x-339933?logo=nodedotjs&amp;logoColor=white" alt="Node.js 22.x">
  </a>
  <a href="package.json">
    <img src="https://img.shields.io/badge/VitePress-2.0.0--alpha.20-646CFF?logo=vitepress&amp;logoColor=white" alt="VitePress 2.0.0-alpha.20">
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-0B4F9C?logo=creativecommons&amp;logoColor=white" alt="授權：CC BY-NC-SA 4.0">
  </a>
  <a href="CONTRIBUTING.md">
    <img src="https://img.shields.io/badge/Contributions-welcome-2E8B57?logo=github&amp;logoColor=white" alt="歡迎參與貢獻">
  </a>
</p>

<p align="center">
  <a href="https://fhcst.github.io/"><strong>官方網站</strong></a> ·
  <a href="blogs/contributing/index.md"><strong>協作指南</strong></a> ·
  <a href="CONTRIBUTING.md"><strong>參與貢獻</strong></a>
</p>

---

本專案是 **FHCST 山城資訊工作隊的官方網站及 blog**，由老師與學生共同編輯管理。網站使用 VitePress，原始碼位於 [fhcst/fhcst.github.io](https://github.com/fhcst/fhcst.github.io)。

本專案歡迎內容整理、錯字修正、版面改善與程式貢獻。第一次參與時，先完成一個小任務，再逐步接觸網站設定與部署。

> 協作文件為本次整理提出的待審閱版本。操作方式以 VS Code＋Git 為主；授權依專案負責人指定採用 CC BY-NC-SA，具體版本採 4.0 國際版。已確認的角色與待核對的設定集中記錄於 [PROJECT.md](PROJECT.md)。

## 從這裡開始

| 你要做的事 | 先讀這份文件 |
| --- | --- |
| 第一次加入、安裝環境 | [學生協作指南](blogs/contributing/index.md)、[環境與第一次啟動](blogs/contributing/getting-started.md) |
| 領取任務、建立分支、送出 PR | [貢獻指南](CONTRIBUTING.md)、[Git 協作流程](blogs/contributing/workflow.md) |
| 修改文字、成員資料或圖片 | [內容與素材規範](blogs/contributing/content-style.md) |
| 更換 logo、favicon 或 banner | [識別素材來源與使用位置](blogs/public/brand/README.md) |
| 卡關、回報錯誤、提出建議 | [求助方式](SUPPORT.md)、[新增 Issue](https://github.com/fhcst/fhcst.github.io/issues/new/choose) |
| 了解分工、審查與合併規則 | [專案治理](GOVERNANCE.md)、[維護者檢查表](blogs/contributing/maintainers.md) |
| 了解互動規範、通報不當行為 | [行為準則](CODE_OF_CONDUCT.md) |
| 發現漏洞、金鑰或個資外洩 | [安全政策](SECURITY.md) |
| 使用或改作本站內容 | [授權與署名](blogs/contributing/licensing.md)、[完整授權條文](LICENSE) |
| 查詢文件用語 | [術語表](GLOSSARY.md) |

## 本機快速啟動

準備 Git、VS Code 與 **Node.js 22.x**。專案目前部署環境也使用 Node.js 22，VitePress 固定為 `2.0.0-alpha.20`；請依鎖定檔安裝，不要順手升級。

```sh
git clone https://github.com/fhcst/fhcst.github.io.git
cd fhcst.github.io
npm ci
npm run blogs:dev
```

以終端機顯示的本機網址開啟網站。交付前執行：

```sh
npm run blogs:build
npm run blogs:preview
```

建置成功後，仍須檢查受影響頁面的文字、圖片、連結和手機寬度。完整步驟與常見問題見[環境指南](blogs/contributing/getting-started.md)。

## 專案結構

```text
.github/
  ISSUE_TEMPLATE/          回報問題、提案與求助範本
  PULL_REQUEST_TEMPLATE.md 提交變更時的說明與檢查表
  workflows/deploy.yml    main 分支的建置與 Pages 部署
blogs/
  index.md               網站首頁
  about.md               工作隊介紹
  team.md                工作隊成員頁面
  contributing/          學生協作指南
  .vitepress/config.mts  網站設定與導覽
  .vitepress/theme/      首頁 banner 的版型與樣式
  .vitepress/team.ts     成員資料
  public/                圖片與其他靜態素材
    brand/               官方 logo、favicon 與 banner 素材及來源說明
package.json             指令與直接依賴
package-lock.json        鎖定套件版本
```

`blogs/` 是目前 VitePress 的網站來源目錄，包含首頁、團隊頁面、協作指南與靜態素材；`docs/` 保留供後續整合使用，目前尚未建立。來源目錄名稱不會成為網站網址的一部分，現有頁面網址維持不變。

`blogs/` 中的 Markdown 可能隨建置公開；根目錄文件與 `.github/` 內容也會出現在公開儲存庫。這些位置都不能存放私人名單、同意書、密碼或未公開資料。

## 協作與發布

負責合併的維護者為 [@Na2CO32](https://github.com/Na2CO32)；安全與行為問題的私下通報窗口為專案負責人 **CXPhoenix**，學生請使用課程既有的私下管道聯絡。尚未公布專用信箱、公開私訊入口與替代窗口，請依相應政策處理。

採用「Issue → 工作分支 → Pull Request（PR）→ 審查 → 合併 → 確認部署」。多人同時修改前，先在 Issue 說明要改的檔案，避免覆蓋彼此的工作。具體規則見[貢獻指南](CONTRIBUTING.md)。

現有 [deploy.yml](.github/workflows/deploy.yml) 在推送到 `main` 或手動執行時建置並部署 GitHub Pages，**沒有 PR 觸發的建置檢查**。分支保護、必要審查與 Pages 設定是否啟用，須由管理者實際確認，不能以文件存在推定已生效。

## 授權

本專案有權授權、且未另行標示的原創內容與原始碼，採用 [CC BY-NC-SA 4.0 國際版](https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hant)；完整條文見 [LICENSE](LICENSE)。第三方套件與素材依各自授權，既有素材權利仍須盤點。

CC BY-NC-SA 含非商業限制，本專案因此以「公開協作專案」描述，不宣稱符合 OSI 的開源定義。重用、署名範例及程式授權的限制見[授權說明](blogs/contributing/licensing.md)。
