export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/api/' },
    sitemap: 'https://tiregeeks.com/sitemap.xml',
  };
}
