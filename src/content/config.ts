import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string().default('2026机场推荐 评测组'),
    category: z.enum(['reviews', 'comparisons', 'tutorials', 'guides']),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
    isFeatured: z.boolean().default(false),
    // 评测文章专用字段（Aff & SEO 结构化）
    reviewData: z.object({
      brandName: z.string(),
      overallScore: z.number().min(0).max(10).optional(),
      starRating: z.number().min(0).max(5).optional(),
      lineType: z.string().optional(),
      entryPrice: z.string().optional(),
      trafficRange: z.string().optional(),
      protocols: z.array(z.string()).optional(),
      streamingUnlockRate: z.string().optional(),
      officialUrlPlaceholder: z.string().default('https://yp76688.kosingaff.com/#/register?code=MuizUDqY'),
      couponCode: z.string().optional(),
      pros: z.array(z.string()).optional(),
      cons: z.array(z.string()).optional(),
      bestFor: z.string().optional()
    }).optional(),
    // 对比文章专用字段
    comparisonData: z.object({
      itemA: z.string(),
      itemB: z.string(),
      verdict: z.string().optional()
    }).optional(),
    // 教程专用字段
    tutorialData: z.object({
      client: z.string().optional(),
      platform: z.array(z.string()).optional(),
      difficulty: z.enum(['入门', '进阶', '极客']).default('入门')
    }).optional()
  })
});

export const collections = {
  blog: blogCollection,
};
