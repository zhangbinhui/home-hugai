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
      light: '/images/linux.do-light.png',
      dark: '/images/linux.do-dark.png'
    },
    link: 'https://linux.do/?source=home_aiporters_com'
  }
]
</script>

<div class="friend-links">
  <div v-for="f in friends" :key="f.link" class="friend-item">
    <a :href="f.link" target="_blank" rel="noopener noreferrer">
      <div class="friend-content">
        <div class="friend-logo-wrapper">
          <img :src="f.logo.light" :alt="f.name" class="friend-logo light-logo">
          <img :src="f.logo.dark" :alt="f.name" class="friend-logo dark-logo">
        </div>
        <div class="friend-text">
          <div class="friend-title">{{ f.name }}</div>
          <div class="friend-subtitle">{{ f.desc }}</div>
        </div>
      </div>
    </a>
  </div>
</div>

<style>
.friend-links {
  max-width: var(--content-width);
  margin: 0 auto;
  padding: 0 1.5rem;
}

.friend-item {
  margin: 0.8rem 0;
  border: 1px solid var(--c-border);
  border-radius: 6px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background-color: var(--c-bg);
}

.friend-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  border-color: var(--c-brand);
}

.friend-content {
  display: flex;
  align-items: center;
  padding: 0.8rem;
  gap: 0.8rem;
}

/* 固定左侧logo区域的高度 */
.friend-logo-wrapper {
  flex-shrink: 0;
  width: 120px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--c-bg-lighter);
  border-radius: 4px;
  padding: 0.4rem 0.5rem;
}

.friend-logo {
  object-fit: contain;
  max-height: 100%;
  max-width: 100%;
  pointer-events: none;  /* 添加这行来禁用图片的鼠标事件 */
}

.dark-logo {
  display: none;
}

html.dark .light-logo {
  display: none;
}

html.dark .dark-logo {
  display: block;
}

/* 右侧文本区域的样式 */
.friend-text {
  flex-grow: 1;
  min-width: 0;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
}

.friend-title {
  font-size: 1rem;
  font-weight: 500;
  color: var(--c-text);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.friend-subtitle {
  font-size: 0.9rem;
  color: var(--c-text-lighter);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* 移动端适配 */
@media (max-width: 719px) {
  .friend-content {
    flex-direction: column;
    text-align: center;
    gap: 0.8rem;
    padding: 0.6rem;
    align-items: center;
    height: auto;
  }

  .friend-logo-wrapper {
    width: 100px;
    height: 40px;
  }

  .friend-text {
    height: auto;
    gap: 4px;
    align-items: center;
  }

  .friend-title,
  .friend-subtitle {
    text-align: center;
  }
}
</style>