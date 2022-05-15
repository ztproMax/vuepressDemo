module.exports = {
  "title": "zt's Blog",
  "description": "欢迎进入我的世界！",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  // 主题的配置文件
  "themeConfig": {
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "文档",
        "icon": "reco-message",
        "items": [
          {
            "text": "vuepress-reco",
            "link": "/docs/theme-reco/"
          }
        ]
      },
      {
        "text": "关于",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/ztproMax",
            "icon": "zt-github"
          },
          {
            "text": "Gitee",
            "link": "https://gitee.com/front-end-promax",
            "icon": "zt-gitee"
          },
          {
            "text": "CSDN",
            "link": "https://blog.csdn.net/weixin_64633723?spm=1000.2115.3001.5343",
            "icon": "zt-csdn"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "zt",
    "authorAvatar": "/avatar.png",
    "record": "xxxx",
    "startYear": "2017"
  },
  "markdown": {
    "lineNumbers": true
  },
"plugins": [
  [ "@vuepress-reco/vuepress-plugin-kan-ban-niang",
    {
      theme: ["shizuku"],
      clean: false,
      message:{
        welcome:'我是zt欢迎你的关注',
        home:'想要和你有个家。',
        theme:'好吧，希望你能喜欢我其他的伙伴。',
        close:'再见哦'
      }
    }
  ],
  
  // 公告 
    ['@vuepress-reco/vuepress-plugin-bulletin-popover', {
      title: '皇榜',
      body: [
        {
          type: 'title',
          content: '欢迎加我的QQ 🎉🎉🎉',
          style: 'text-aligin: center;',
        },
        {
          type: 'text',
          content: 'QQ:2624638269',
          style: 'text-align: center;'
        },
        {
          type: 'text',
          content: '喜欢的主题特效可以去个人信息',
          style: 'text-align: center;'
        },
        {
          type: 'text',
          content: '友链或疑问均可在留言板给我留言',
          style: 'text-align: center;'
        }
      ],
      footer: [
        {
          type: 'button',
          text: '打赏',
          link: '/blog/donate'
        },
      ]
    },
    ],
    
// 音乐播放器
["@vuepress-reco/vuepress-plugin-bgm-player",{
    audios: [
      // 本地文件示例
      // {
      //   name: '장가갈 수 있을까',
      //   artist: '咖啡少年',
      //   url: '/bgm/1.mp3',
      //   cover: '/bgm/1.jpg'
      // },
      // 网络文件示例
      {
        name: '강남역 4번 출구',
        artist: 'Plastic / Fallin` Dild',
        url: 'https://assets.smallsunnyfox.com/music/2.mp3',
        cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
      },
      {
        name: '用胳膊当枕头',
        artist: '최낙타',
        url: 'https://assets.smallsunnyfox.com/music/3.mp3',
        cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
      }
    ]  
  }
],

// 鼠标点击特效
[
  "vuepress-plugin-cursor-effects",
  {
    size: 2,                    // size of the particle, default: 2
    shape: 'circle',  // shape of the particle, default: 'star'
    zIndex: 999999999           // z-index property of the canvas, default: 999999999
  }
],

// 设置彩带背景
["ribbon-animation", {
  size: 90,   // 默认数据
  opacity: 0.3,  //  透明度
  zIndex: -1,   //  层级
  opt: {
    // 色带HSL饱和度
    colorSaturation: "80%",
    // 色带HSL亮度量
    colorBrightness: "60%",
    // 带状颜色不透明度
    colorAlpha: 0.65,
    // 在HSL颜色空间中循环显示颜色的速度有多快
    colorCycleSpeed: 6,
    // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
    verticalPosition: "center",
    // 到达屏幕另一侧的速度有多快
    horizontalSpeed: 200,
    // 在任何给定时间，屏幕上会保留多少条带
    ribbonCount: 2,
    // 添加笔划以及色带填充颜色
    strokeSize: 0,
    // 通过页面滚动上的因子垂直移动色带
    parallaxAmount: -0.5,
    // 随着时间的推移，为每个功能区添加动画效果
    animateSections: true
  },
  ribbonShow: false, //  点击彩带  true显示  false为不显示
  ribbonAnimationShow: true  // 滑动彩带
}],

//动态标题
["dynamic-title",{
  showIcon: "https://www.zpzpup.com/assets/image/favicon.ico",
  showText: "欢迎回来 O(∩_∩)O~",
  hideIcon: "https://www.zpzpup.com/assets/image/favicon.ico",
  hideText: "失联中。。。快回来~",
  recoverTime: 2000
}],


     
],







}