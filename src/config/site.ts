export interface NavItem {
  title: string;
  href: string;
  badge?: string;
}

export interface SiteConfig {
  name: string;
  slogan: string;
  description: string;
  url: string;
  author: string;
  lang: string;
  keywords: string[];
  affNotice: string;
  defaultAffPlaceholder: string;
  telegramChannelPlaceholder: string;
  navItems: NavItem[];
  categories: {
    key: string;
    name: string;
    description: string;
    color: string;
  }[];
}

export const siteConfig: SiteConfig = {
  name: "2026机场推荐",
  slogan: "专业网络节点评测 · 跨境流媒体解锁 · 专线稳定性实测指南",
  description: "2026机场推荐是专注全球优质网络加速服务、IEPL/IPLC 专线实测、4K 流媒体解锁、晚高峰抖动监测及全平台客户端配置的技术评测站。提供客观中立的节点横评与选购指南。",
  url: "https://jichangx.org",
  author: "2026机场推荐实验室",
  lang: "zh-CN",
  keywords: [
    "机场推荐",
    "IEPL专线机场",
    "可信云",
    "光年梯",
    "快狸",
    "速界",
    "极连云",
    "边缘",
    "4K流畅节点",
    "科学上网导航"
  ],
  affNotice: "声明：本站评测秉持客观实测原则。部分外链包含推广合作伙伴代码（Affiliate Link），若您通过链接订购服务，本站可能会获得少量佣金，用于维系服务器与自动化测试节点日常开销，但绝不影响测试中立性与客观打分。",
  defaultAffPlaceholder: "https://yp76688.kosingaff.com/#/register?code=MuizUDqY",
  telegramChannelPlaceholder: "https://t.me/example_channel",
  navItems: [
    { title: "首页", href: "/" },
    { title: "机场综合榜", href: "/rankings", badge: "TOP" },
    { title: "品牌评测", href: "/reviews" },
    { title: "客户端教程", href: "/tutorials" },
    { title: "防坑指南", href: "/faq" },
    { title: "关于本站", href: "/about" }
  ],
  categories: [
    {
      key: "reviews",
      name: "品牌深度评测",
      description: "针对各家专线服务商的晚高峰延迟、流媒体解锁、带宽速率及客服响应全方位单店测评报告。",
      color: "#3b82f6"
    },
    {
      key: "tutorials",
      name: "客户端实战教程",
      description: "覆盖 Windows / macOS / iOS / Android / 软路由保姆级配置与规则优化。",
      color: "#10b981"
    },
    {
      key: "guides",
      name: "选购科普指引",
      description: "专线原理、原生 IP、防跑路技巧、网络协议演进等深度硬核知识。",
      color: "#f59e0b"
    }
  ]
};
