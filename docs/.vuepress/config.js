module.exports = {
    title: 'Web前端学习笔记',
    description: 'Web 前端学习笔记',
    base: process.env.NODE_ENV === 'production' ? '/web-notes/' : '/',
    themeConfig: {
        nav: [{
                text: 'Home',
                link: '/'
            },
            {
                text: 'Github',
                link: 'https://github.com/shibin-cli/web-notes'
            },
        ],
        sidebar: [
            ['/analysis', '需求和架构设计'],
        ]
    },
    plugins: ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: true
    }],
} 