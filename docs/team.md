---
layout: page
title: 團隊成員
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamPageSection,
  VPTeamMembers
} from 'vitepress/theme'
import { withBase } from 'vitepress'
import { coreMembers, partners } from './.vitepress/team'

// 團隊元件不會自動加上 base 路徑，這裡幫本機頭像補上
const withAvatarBase = (list) => list.map((m) => ({ ...m, avatar: withBase(m.avatar) }))
const core = withAvatarBase(coreMembers)
const others = withAvatarBase(partners)
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>認識我們的團隊</template>
    <template #lead>
      CST 團隊由設計、前端、後端與專案管理的夥伴組成，
      我們一起把好點子變成真正能用的產品。
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members="core" />
  <VPTeamPageSection>
    <template #title>顧問與合作夥伴</template>
    <template #lead>在背後支持我們的重要夥伴。</template>
    <template #members>
      <VPTeamMembers size="small" :members="others" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
