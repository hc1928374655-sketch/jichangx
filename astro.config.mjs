import { defineConfig } from 'astro/config';
import fs from 'node:fs/promises';

// 轻量级自适应静态站点地图生成器，确保 100% 兼容性与搜索引擎规范
function customSitemapIntegration() {
  return {
    name: 'noderadar-sitemap',
    hooks: {
      'astro:build:done': async ({ dir, pages }) => {
        const siteUrl = 'https://jichangx.org';
        const today = new Date().toISOString().slice(0, 10);
        
        const urls = pages
          .filter(page => !page.pathname.includes('404'))
          .map(page => {
            const path = page.pathname === '' ? '' : page.pathname.replace(/^\/+|\/+$/g, '') + '/';
            const loc = path === '' ? `${siteUrl}/` : `${siteUrl}/${path}`;
            const priority = path === '' ? '1.0' : path.startsWith('blog/') ? '0.9' : '0.8';
            return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>${priority}</priority>
  </url>`;
          });

        const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

        await fs.writeFile(new URL('sitemap.xml', dir), sitemapContent, 'utf-8');
        // 兼容处理：若旧爬虫访问 sitemap-index.xml 也指向同一文件
        await fs.writeFile(new URL('sitemap-index.xml', dir), sitemapContent, 'utf-8');
      }
    }
  };
}

export default defineConfig({
  site: 'https://jichangx.org',
  trailingSlash: 'never',
  integrations: [customSitemapIntegration()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      wrap: true
    }
  }
});
