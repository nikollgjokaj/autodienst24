import { writeFileSync } from 'fs';
import { globby } from 'globby';

async function generate() {
  const pages = await globby([
    'app/**/*.tsx',
    '!app/**/_*.tsx',
    '!app/**/components/*.tsx',
  ]);

  const languages = ['de', 'en', 'tr', 'sq', 'sr', 'hr', 'bs'];
  const baseUrl = 'https://autodienst24.at';

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemx.org/schemas/sitemap/0.9"
            xmlns:xhtml="http://www.w3.org/1999/xhtml">
      ${pages
        .map((page) => {
          const path = page
            .replace('app/', '')
            .replace('/page.tsx', '')
            .replace('page.tsx', '');

          return languages
            .map(
              (lang) => `
                <url>
                  <loc>${baseUrl}${lang === 'de' ? '' : `/${lang}`}${
                path === 'index' ? '' : `/${path}`
              }</loc>
                  ${languages
                    .map(
                      (l) => `
                    <xhtml:link 
                      rel="alternate" 
                      hrefLang="${l}" 
                      href="${baseUrl}${l === 'de' ? '' : `/${l}`}${
                        path === 'index' ? '' : `/${path}`
                      }"
                    />`
                    )
                    .join('')}
                  <lastmod>${new Date().toISOString()}</lastmod>
                  <changefreq>weekly</changefreq>
                  <priority>${path === 'index' ? '1.0' : '0.8'}</priority>
                </url>
              `
            )
            .join('');
        })
        .join('')}
    </urlset>`;

  writeFileSync('public/sitemap.xml', sitemap);
}

generate(); 