import menu from "./menu";

module.exports = {
  lang: "zh-CN",
  title: "Vue-H5-Template",
  base: "./",
  description: "一个清新优雅的H5模版",
  lastUpdated: true,
  head: [
    // 添加图标
    ["link", { rel: "icon", href: "/favicon.ico" }],
  ],
  themeConfig: {
    logo: "/logo.svg",
    nav: nav(),
    sidebar: menu,

    socialLinks: [
      { icon: "github", link: "https://github.com/honghuangdc/soybean-admin" },
      {
        icon: "discord",
        link: "https://qm.qq.com/cgi-bin/qm/qr?k=XTjkqjV1KynFoEAdrqxMd6i71-TtCVGV&jump_from=webapi",
      },
    ],
    editLink: {
      text: "为此页提供修改建议",
      pattern:
        "https://github.com/honghuangdc/soybean-admin-docs/tree/main/:path",
    },
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present Fonghehe",
    },
    algolia: {
      appId: "CV2I8NGBKZ",
      apiKey: "63c37a467485b00383daacf7340b4ca0",
      indexName: "vue-h5-template",
    },
  },
};

function nav() {
  return [
    { text: "介绍", link: "/guide/" },
    {
      text: "相关链接",
      items: [
        {
          text: "预览地址",
          link: "https://soybean.pro",
        },
        {
          text: "项目源码",
          link: "https://github.com/honghuangdc/soybean-admin",
        },
        {
          text: "文档源码",
          link: "https://github.com/honghuangdc/soybean-admin-docs",
        },
      ],
    },
    { text: "加入我们", link: "/guide/about/" },
  ];
}
