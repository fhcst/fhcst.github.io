import { defineConfig } from 'vitepress'

// 部署時由 GitHub Actions 依倉庫自動帶入（見 .github/workflows/deploy.yml），
// 例如 fhcst/fhcst.github.io → /，一般專案倉庫 → /<倉庫名>/
// 本機開發預設為 /
const base = process.env.BASE || '/'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-TW',
  title: 'FHCST 山城資訊工作隊',
  description: 'FHCST 山城資訊工作隊官方網站及 blog',
  base,
  // head 不會自動套用 base，要自己加
  head: [
    ['link', {
      rel: 'icon',
      type: 'image/png',
      sizes: '512x512',
      href: `${base}brand/fhcst-logo.png`
    }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      src: '/brand/fhcst-logo.png',
      alt: 'FHCST 山城資訊工作隊標誌'
    },

    nav: [
      { text: '首頁', link: '/' },
      { text: '團隊成員', link: '/team' },
      { text: '關於我們', link: '/about' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/fhcst/fhcst.github.io' }
    ],

    footer: {
      message: '用 VitePress 打造',
      copyright: `© ${new Date().getFullYear()} FHCST 山城資訊工作隊`
    },

    outline: { label: '本頁目錄' },
    docFooter: { prev: '上一頁', next: '下一頁' },
    returnToTopLabel: '回到頂部',
    sidebarMenuLabel: '選單',
    darkModeSwitchLabel: '外觀',
    lightModeSwitchTitle: '切換到淺色模式',
    darkModeSwitchTitle: '切換到深色模式'
  }
})
