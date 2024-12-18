---
title: 友情链接
sidebar: auto
---

# 友情链接

<script setup>
import { h } from 'vue'

const friends = [
  {
    name: 'LINUX DO',
    desc: '新的理想型社区',
    logo: 'https://linux.do/uploads/default/original/3X/9/d/9dd49731091ce8656e94433a26a3ef36062b3994.png',
    link: 'https://linux.do/?source=home_aiporters_com'
  }
  // 可以继续添加其他友链
]
</script>

<div class="friends-wrapper">
  <div v-for="f in friends" :key="f.link" class="friend-item">
    <a :href="f.link" target="_blank" rel="noopener noreferrer">
      <img :src="f.logo" :alt="f.name" class="friend-logo">
      <div class="friend-info">
        <h3>{{ f.name }}</h3>
        <p>{{ f.desc }}</p>
      </div>
    </a>
  </div>
</div>

<style>
.friends-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  padding: 1rem;
}

.friend-item {
  border: 1px solid var(--c-border);
  border-radius: 8px;
  padding: 1rem;
  transition: all 0.3s;
}

.friend-item:hover {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.friend-logo {
  width: 60px;
  height: 60px;
  object-fit: contain;
}

.friend-info {
  margin-top: 0.5rem;
}

.friend-info h3 {
  margin: 0;
  font-size: 1.2rem;
}

.friend-info p {
  margin: 0.5rem 0 0;
  font-size: 0.9rem;
  color: var(--c-text-lighter);
}
</style>