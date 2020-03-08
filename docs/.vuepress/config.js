const baseMap = {
  dev: '/',
  test: '/dui-design/web/',
  prod: '/dui-design/web/'
}
let component = [
  'typography'
]
module.exports = {
  base: baseMap[process.env.ENV],
  title: 'Dui Design',
  description: 'Dui Design',
  head: [['link', { rel: 'icon', href: '/images/favicon.ico' }]],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: '组件',
        link: '/component/typography'
      }
    ],
    sidebar: {
      '/component/': component
    }
  },
  serviceWorker: true
}