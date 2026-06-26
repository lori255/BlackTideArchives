
<template>
  <article class="bt-card investigator-card">
    <img :src="portrait" alt="" class="investigator-card__art" />
    <div class="investigator-card__body">
      <h3>{{ name }}</h3>
      <p>{{ role }}</p>
      <div class="bt-progress"><i :style="{ width: sanity + '%' }"></i></div>
    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{ portrait: string; name: string; role: string; sanity: number }>()
</script>

<style scoped>
.investigator-card { width: 220px; border-radius: 6px; }
.investigator-card__art { width: 100%; aspect-ratio: 3/4; object-fit: cover; display:block; }
.investigator-card__body { padding: 12px; }
h3 { margin: 0 0 4px; font-family: var(--bt-font-title); color: var(--bt-text); }
p { margin: 0 0 10px; color: var(--bt-muted); }
</style>
