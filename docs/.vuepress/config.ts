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
          text: '首页',
          link: '/README.md',            
        },  
        // NavbarItem
        {
          text: '服务入口',
          link: '/guide/links.md',
        },  
      // NavbarGroup
        {
          text: '功能介绍',
          children: [
            {
              text: '免费使用',
              children: ['/free/station.md'],
            },
            {
              text: '生产力',
              children: ['/productivity/plus.md','/productivity/one-api.md','/productivity/next.md', ],
            },
            {
              text: '小技巧',
              children:[
                '/tips/cloudflare-speed.md'
              ]
            },
            {
              text: '停服归档',
              children: ['/legacy/station-old.md','/legacy/plus-old.md','/legacy/lushuren.md','/legacy/pandora.md', '/legacy/simple.md'],
            },
            {
              text: '小作文',
              children: ['/essay/Pandora-quit.md' ],
            }  
          ],
        },

        // NavbarGroup
        {
          text: '服务状态',
          children: [
            {
              text: '更新日志',
              link: '/changelog/update.md',
            },
            {
              text: '本站服务状态',
              link: 'https://status.hugai.top',
            },
            {
              text: 'OpenAI 服务状态',
              link: 'https://status.openai.com/',
            },
            {
              text: 'Claude 服务状态',
              link: 'https://status.anthropic.com/',
            },
          ],
        },

        {
          text: '友情链接',
          link: '/guide/friends.md'
        }

      ],
    
    colorModeSwitch: true, // 启用颜色模式切换按钮

    // 侧边栏数组
    // 所有页面会使用相同的侧边栏
    sidebar: [
      {
        text: '免费使用',
        children: [
          '/free/station.md',
        ],
      },
      {
        text: '生产力',
        children: [
          '/productivity/plus.md',
          '/productivity/one-api.md',
          '/productivity/next.md',
        ],
      },
      {
        text: '小技巧',
        children:[
          '/tips/cloudflare-speed.md'
        ]
      },
      {
        text: '停服归档',
        children: [
          '/legacy/station-old.md',
          '/legacy/plus-old.md',
          '/legacy/lushuren.md',
          '/legacy/pandora.md', 
          '/legacy/simple.md',  
        ],
      },
      {
        text: '小作文',
        children: [
          '/essay/Pandora-quit.md', 
          ],
      },
      {
        text: '友情链接',
        link: '/guide/friends.md'
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
