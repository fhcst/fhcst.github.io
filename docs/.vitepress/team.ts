import type { DefaultTheme } from 'vitepress'

// 團隊成員資料：修改這裡即可更新「團隊成員」頁面
// 頭像可換成 /avatars/xxx.png，或直接用 https://github.com/<帳號>.png

export const coreMembers: DefaultTheme.TeamMember[] = [
  {
    avatar: '/avatars/alex.svg',
    name: '陳小明',
    title: '團隊負責人 / 全端工程師',
    desc: '負責產品方向與技術架構，喜歡把複雜問題拆成簡單的小步驟。',
    links: [
      { icon: 'github', link: 'https://github.com/' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/' }
    ]
  },
  {
    avatar: '/avatars/bella.svg',
    name: '林雅婷',
    title: 'UI / UX 設計師',
    desc: '專注於使用者體驗與視覺設計，讓每個介面都好看又好用。',
    links: [
      { icon: 'github', link: 'https://github.com/' },
      { icon: 'instagram', link: 'https://www.instagram.com/' }
    ]
  },
  {
    avatar: '/avatars/chris.svg',
    name: '王大偉',
    title: '後端工程師',
    desc: '負責 API 與資料庫設計，追求穩定、可擴充的系統。',
    links: [{ icon: 'github', link: 'https://github.com/' }]
  },
  {
    avatar: '/avatars/dana.svg',
    name: '張家瑜',
    title: '前端工程師',
    desc: 'Vue 愛好者，熱衷於效能優化與互動細節。',
    links: [
      { icon: 'github', link: 'https://github.com/' },
      { icon: 'x', link: 'https://x.com/' }
    ]
  }
]

export const partners: DefaultTheme.TeamMember[] = [
  {
    avatar: '/avatars/evan.svg',
    name: '李志豪',
    title: '技術顧問',
    desc: '提供架構與資安方面的建議。',
    links: [{ icon: 'linkedin', link: 'https://www.linkedin.com/' }]
  },
  {
    avatar: '/avatars/fiona.svg',
    name: '吳佳穎',
    title: '專案經理',
    desc: '協調時程與資源，確保專案準時交付。',
    links: [{ icon: 'linkedin', link: 'https://www.linkedin.com/' }]
  }
]
