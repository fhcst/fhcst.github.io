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
    <template #title>工作隊成員資料（待確認）</template>
    <template #lead>
      本頁姓名、職稱與介紹沿用原版型，尚未經 FHCST 山城資訊工作隊確認，
      目前僅供版面示意，不作為正式成員名單。
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers :members="core" />
  <VPTeamPageSection>
    <template #title>顧問與合作夥伴（版型示例）</template>
    <template #lead>以下資料僅供版面示意，正式名單待確認。</template>
    <template #members>
      <VPTeamMembers size="small" :members="others" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
