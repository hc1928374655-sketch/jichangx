<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
  xmlns:html="http://www.w3.org/TR/REC-html40"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml" lang="zh-CN">
      <head>
        <title>2026机场推荐 - XML 网站地图</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style type="text/css">
          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            color: #1e293b;
            background: #f8fafc;
            margin: 0;
            padding: 2rem 1rem;
          }
          .container {
            max-width: 1000px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 12px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05);
            padding: 2.5rem;
            border: 1px solid #e2e8f0;
          }
          h1 {
            font-size: 1.75rem;
            color: #0f172a;
            margin-top: 0;
            margin-bottom: 0.5rem;
          }
          p.desc {
            color: #64748b;
            font-size: 0.95rem;
            margin-bottom: 1.5rem;
            line-height: 1.6;
          }
          .stats {
            background: #f1f5f9;
            padding: 0.75rem 1.25rem;
            border-radius: 8px;
            font-size: 0.9rem;
            color: #334155;
            margin-bottom: 1.5rem;
            display: inline-block;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            font-size: 0.88rem;
          }
          th {
            background: #0f172a;
            color: #ffffff;
            text-align: left;
            padding: 10px 14px;
            font-weight: 600;
          }
          th:first-child { border-top-left-radius: 6px; }
          th:last-child { border-top-right-radius: 6px; }
          td {
            padding: 10px 14px;
            border-bottom: 1px solid #e2e8f0;
            color: #334155;
          }
          tr:hover td {
            background: #f8fafc;
          }
          a {
            color: #0284c7;
            text-decoration: none;
            word-break: break-all;
          }
          a:hover {
            text-decoration: underline;
          }
          .priority-tag {
            font-weight: 600;
            color: #0284c7;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>2026机场推荐 · XML 网站地图</h1>
          <p class="desc">
            这是由 <strong>2026机场推荐</strong> 生成的标准搜索引擎 XML Sitemap。用于协助 Google、Bing 等爬虫快速索引本站优质网络节点评测与最新天梯榜单。
          </p>
          <xsl:if test="sitemap:urlset">
            <div class="stats">
              共收录网页：<strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></strong> 个有效页面
            </div>
            <table>
              <thead>
                <tr>
                  <th width="50%">网页 URL (点击直接访问)</th>
                  <th width="15%">更新频率</th>
                  <th width="15%">索引权重</th>
                  <th width="20%">最后更新时间</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:urlset/sitemap:url">
                  <tr>
                    <td>
                      <xsl:variable name="itemURL">
                        <xsl:value-of select="sitemap:loc"/>
                      </xsl:variable>
                      <a href="{$itemURL}"><xsl:value-of select="sitemap:loc"/></a>
                    </td>
                    <td><xsl:value-of select="sitemap:changefreq"/></td>
                    <td><span class="priority-tag"><xsl:value-of select="sitemap:priority"/></span></td>
                    <td><xsl:value-of select="sitemap:lastmod"/></td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:if>
          <xsl:if test="sitemap:sitemapindex">
            <div class="stats">
              包含子地图数量：<strong><xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/></strong> 个
            </div>
            <table>
              <thead>
                <tr>
                  <th width="70%">站点地图索引地址</th>
                  <th width="30%">最后更新时间</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                  <tr>
                    <td>
                      <xsl:variable name="itemURL">
                        <xsl:value-of select="sitemap:loc"/>
                      </xsl:variable>
                      <a href="{$itemURL}"><xsl:value-of select="sitemap:loc"/></a>
                    </td>
                    <td><xsl:value-of select="sitemap:lastmod"/></td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:if>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>