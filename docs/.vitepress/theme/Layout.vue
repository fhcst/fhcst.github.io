<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { withBase } from 'vitepress'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #home-hero-before>
      <div class="fhcst-banner">
        <img
          :src="withBase('/brand/fhcst-banner.png')"
          alt="臺北市立復興高級中學與 FHCST 山城資訊工作隊形象橫幅，呈現校徽、工作隊標誌與資安主題圖像"
          width="1983"
          height="793"
          decoding="async"
          fetchpriority="high"
        >
      </div>
    </template>
  </Layout>
</template>

<style scoped>
.fhcst-banner {
  width: calc(100% - 3rem);
  max-width: 72rem;
  margin: 1.5rem auto 0;
}

.fhcst-banner img {
  display: block;
  width: 100%;
  height: auto;
  border-radius: 0.75rem;
}

/* 橫幅已位於導覽列下方，移除預設 hero 的導覽列補償間距。 */
.fhcst-banner + :deep(.VPHomeHero) {
  margin-top: 0;
  padding-top: 3rem;
}

@media (min-width: 40rem) {
  .fhcst-banner {
    width: calc(100% - 6rem);
    margin-top: 2rem;
  }
}

@media (min-width: 60rem) {
  .fhcst-banner {
    width: calc(100% - 8rem);
  }

  .fhcst-banner + :deep(.VPHomeHero .name) {
    font-size: 3rem;
  }
}
</style>
