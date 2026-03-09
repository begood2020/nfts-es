import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog');
  const sorted = posts.sort((a, b) =>
    new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );
  return rss({
    title: 'nfts.es',
    description: 'Noticias, tutoriales y análisis sobre NFTs en español.',
    site: context.site,
    items: sorted.map(post => ({
      title: post.data.title,
      pubDate: new Date(post.data.date),
      description: post.data.excerpt || '',
      link: `/${post.slug}/`,
    })),
  });
}
