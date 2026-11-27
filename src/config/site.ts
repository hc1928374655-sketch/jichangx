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
  description: "2026机场推荐是专注全球优质网络加速服务、IEPL/IPLC 物理专线实机测速、4K/8K 跨境流媒体解锁、晚高峰低延迟抖动监测及全平台客户端配置的技术评测站。提供客观中立的节点天梯榜、独家折扣优惠券与避坑指南。",
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
  telegramChannelPlaceholder: "https://t.me/kexinyun8899",
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
      description: "汇总 2026 全球优质机场与专线服务商单店深度实机测评报告，多维度剖析晚高峰真实速率、4K/8K 流媒体解锁、原生双 ISP 线路质量及最新折扣优惠码，助您客观对比并选出最适合自己的稳定节点方案。",
      color: "#3b82f6"
    },
    {
      key: "tutorials",
      name: "客户端实战教程",
      description: "全平台科学上网代理客户端保姆级实战配置教程：详细覆盖 Windows、macOS、iOS、Android 以及软路由系统的 Clash Verge Rev、Sing-box、Shadowrocket 等工具安装、订阅导入、分流规则优化与 TUN 模式配置指南。",
      color: "#10b981"
    },
    {
      key: "guides",
      name: "选购科普指引",
      description: "新手必读的机场选购与科普防坑指引：全面解析 IEPL/IPLC 专线与普通 BGP 隧道原理差异、原生双 ISP 解锁机制、机场主跑路风险防范技巧及现代网络加密协议演进，助您明智选购不踩雷。",
      color: "#f59e0b"
    }
  ]
};
