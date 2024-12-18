---
title: 友情链接
sidebar: auto
---

<script setup>
import { h } from 'vue'

const friends = [
  {
    name: 'LINUX DO',
    desc: '新的理想型社区',
    logo: {
      light: 'https://linux.do/uploads/default/original/3X/b/4/b4fa45d8b03df61f5d011e173c0adf8497028b16.png',
      dark: 'https://linux.do/uploads/default/original/3X/a/8/a8168bb80c93075aad7aa1f598eee063adef1cb0.png'
    },
    link: 'https://linux.do/?source=home_aiporters_com'
  }
  // 可以继续添加其他友链
]
</script>

<div class="friends-wrapper">
  <div v-for="f in friends" :key="f.link" class="friend-item">
    <a :href="f.link" target="_blank" rel="noopener noreferrer">
      <img :src="f.logo.light" :alt="f.name" class="friend-logo light-logo">
      <img :src="f.logo.dark" :alt="f.name" class="friend-logo dark-logo">
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
  width: 200px;  /* 调整为长形 LOGO 的合适宽度 */
  height: 60px;
  object-fit: contain;
}

/* 默认显示亮色模式的 LOGO */
.dark-logo {
  display: none;
}

/* 暗色模式下的样式 */
html[data-theme="dark"] .light-logo {
  display: none;
}

html[data-theme="dark"] .dark-logo {
  display: block;
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