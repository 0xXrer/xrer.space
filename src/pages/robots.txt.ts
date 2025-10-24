import type { APIRoute } from 'astro';
import portfolioConfig from '@/config/portfolio';

export const GET: APIRoute = async () => {
  const { seo } = portfolioConfig;

  const robots = `User-agent: *
Allow: /

Sitemap: ${seo.siteUrl}/sitemap.xml`;

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
};
