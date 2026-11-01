# FHCST 識別素材

本資料夾保存專案負責人於 2026-11-01 提供、並指定用於 **FHCST 山城資訊工作隊官方網站及 blog** 的三張圖片。檔案採英文名稱方便引用，圖片內容與收到的附件一致，沒有裁切、重繪或更換文字。

| 檔案 | 原附件名稱 | 尺寸 | 使用位置 |
| --- | --- | --- | --- |
| `fhcst-banner.png` | 臺北復興高中資安團隊科技 banner.png | 1983 × 793 | 網站首頁與根目錄 README 頁首橫幅，依原比例顯示 |
| `fhcst-logo.png` | FHCST_LOGO.png | 512 × 512 | 導覽列、首頁 logo 與 PNG favicon |
| `fhcst-logo-original.png` | ChatGPT 圖像 2026年11月1日 下午03_18_58.png | 1254 × 1254 | 保留提供的另一版原圖，供後續使用 |

favicon 直接使用提供的 512 × 512 PNG，交由瀏覽器依分頁圖示尺寸顯示。橫幅在窄螢幕仍完整保留，不以裁切方式移除校名或標誌。

## 修改位置

- 導覽列 logo 與 favicon：`blogs/.vitepress/config.mts`。
- 首頁 hero 的 logo：`blogs/index.md`。
- 首頁 banner 與顯示樣式：`blogs/.vitepress/theme/Layout.vue`。
- 儲存庫首頁的 banner、badges 與導覽捷徑：根目錄 `README.md`；banner 使用儲存庫相對路徑 `blogs/public/brand/fhcst-banner.png`。

靜態素材網址使用 `/brand/檔名`，不包含 `public`；元件與 favicon 已處理部署的 base 路徑。

## 來源與權利紀錄

來源為專案負責人提供的附件；本站展示依其指示。原作者、校徽與其他構成素材的權利及額外再授權範圍，尚未另附說明，仍須依專案素材盤點流程核對。本紀錄不代替原權利人的授權聲明。
