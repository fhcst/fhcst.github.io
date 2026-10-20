import { defineConfig } from 'vitepress'

// 部署在 GitHub Pages 的 https://fhcst.github.io/cyber-service-team-introdution/
// 倉庫改名或換自訂網域時只要改這裡
const base = '/cyber-service-team-introdution/'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-TW',
  title: 'CST 團隊',
  description: 'CST 團隊介紹：成員、理念與聯絡方式',
  base,
  // head 不會自動套用 base，要自己加
  head: [['link', { rel: 'icon', href: `${base}logo.svg` }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/logo.svg',

    nav: [
      { text: '首頁', link: '/' },
      { text: '團隊成員', link: '/team' },
      { text: '關於我們', link: '/about' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/' }
    ],

    footer: {
      message: '用 VitePress 打造',
      copyright: `© ${new Date().getFullYear()} CST 團隊`
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
