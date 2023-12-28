import { defaultTheme } from '@vuepress/theme-default'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { searchPlugin } from '@vuepress/plugin-search'

export default {
  head: [['link', { rel: 'icon', href: '/images/profile_logo.png' }]],
  theme: defaultTheme({
    logo: '/images/profile_logo.png',
    navbar: [
        // NavbarItem
        {
          text: '服务入口',
          link: '/guide/links',
        },  
      // NavbarGroup
        {
          text: '功能介绍',
          children: [
            {
              text: '免费使用',
              children: ['/free/pandora.md', '/free/simple.md'],
            },
            {
              text: '生产力',
              children: ['/productivity/HaiAPI.md', '/free/simple.md'],
            }  
          ],
        },
        // NavbarItem
        {
            text: '状态监控',
            link: 'https://status.hugai.top',
        },

      ],
    
    colorModeSwitch: true, // 启用颜色模式切换按钮

    // 侧边栏数组
    // 所有页面会使用相同的侧边栏
    sidebar: [
      {
        text: '免费使用',
        children: [
          '/free/pandora.md', 
          '/free/simple.md',],
      },
      {
        text: '生产力',
        children: [
          '/pandora.md', 
          '/productivity/HaiAPI.md',],
      },
    ],
    
  }),
  plugins: [
    backToTopPlugin(),
    searchPlugin({
      // 配置项
    }),
  ],

}
