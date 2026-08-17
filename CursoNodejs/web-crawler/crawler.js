#!/usr/bin/env node

const axios = require('axios');
const cheerio = require('cheerio');
const { URL } = require('url');

/**
 * Pausa en ms
 */
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Hace request HTTP y mide tiempo + tama�o
 */
async function fetchPage(url) {
  const start = process.hrtime.bigint();

  const response = await axios.get(url, {
    timeout: 10000,
    validateStatus: () => true, // no lanzar error por 404, etc.
  });

  const end = process.hrtime.bigint();
  const durationMs = Number(end - start) / 1e6; // ns -> ms

  const html = response.data || '';
  const bytes = Buffer.byteLength(html, 'utf8');

  return {
    url: response.request?.res?.responseUrl || url,
    status: response.status,
    html,
    bytes,
    timeMs: Number(durationMs.toFixed(2)),
  };
}

/**
 * Parsea el HTML y extrae info b�sica
 */
function parsePage(html, baseUrl) {
  const $ = cheerio.load(html);

  const title = $('title').first().text().trim() || null;
  const description =
    $('meta[name="description"]').attr('content') ||
    $('meta[name="Description"]').attr('content') ||
    null;

  const headings = {
    h1: [],
    h2: [],
    h3: [],
  };

  $('h1').each((_, el) => headings.h1.push($(el).text().trim()));
  $('h2').each((_, el) => headings.h2.push($(el).text().trim()));
  $('h3').each((_, el) => headings.h3.push($(el).text().trim()));

  // links absolutos normalizados
  const links = [];
  $('a[href]').each((_, el) => {
    const href = $(el).attr('href');
    try {
      const u = new URL(href, baseUrl);
      links.push(u.toString());
    } catch {
      // ignorar URLs inv�lidas
    }
  });

  return {
    title,
    description,
    headings,
    links,
  };
}

/**
 * Crawler simple con profundidad m�xima
 */
async function crawl(startUrl, options = {}) {
  const maxDepth = options.maxDepth ?? 0;
  const delayMs = options.delayMs ?? 500;
  const sameDomainOnly = options.sameDomainOnly ?? true;

  const startDomain = new URL(startUrl).hostname;

  const queue = [{ url: startUrl, depth: 0 }];
  const visited = new Set();
  const results = [];

  while (queue.length > 0) {
    const { url, depth } = queue.shift();

    if (visited.has(url)) continue;
    visited.add(url);

    console.log(`\n[Crawl] depth=${depth} \u2192 ${url}`);

    try {
      const page = await fetchPage(url);
      const parsed = parsePage(page.html, page.url);

      const result = {
        url: page.url,
        status: page.status,
        time_ms: page.timeMs,
        size_bytes: page.bytes,
        size_kb: Number((page.bytes / 1024).toFixed(2)),
        title: parsed.title,
        description: parsed.description,
        h1_count: parsed.headings.h1.length,
        h2_count: parsed.headings.h2.length,
        h3_count: parsed.headings.h3.length,
        links_count: parsed.links.length,
      };

      results.push(result);

      // Mostrar resumen de la p�gina actual
      console.table(result);

      // Si todav�a puedo seguir a m�s profundidad, agrego enlaces
      if (depth < maxDepth) {
        for (const link of parsed.links) {
          if (visited.has(link)) continue;

          if (sameDomainOnly) {
            try {
              const linkDomain = new URL(link).hostname;
              if (linkDomain !== startDomain) {
                continue;
              }
            } catch {
              continue;
            }
          }

          queue.push({ url: link, depth: depth + 1 });
        }
      }
    } catch (err) {
      console.error(`[Error] No se pudo procesar ${url}:`, err.message);
    }

    if (queue.length > 0) {
      await sleep(delayMs);
    }
  }

  return results;
}

/**
 * Parser b�sico de argumentos:
 *  crawl-mini <url> [--depth 1] [--delay 500] [--all-domains]
 */
function parseArgs(argv) {
  const [, , url, ...rest] = argv;

  const opts = {
    maxDepth: 0,
    delayMs: 500,
    sameDomainOnly: true,
  };

  for (let i = 0; i < rest.length; i++) {
    const arg = rest[i];
    if (arg === '--depth' && rest[i + 1]) {
      opts.maxDepth = Number(rest[i + 1]) || 0;
      i++;
    } else if (arg === '--delay' && rest[i + 1]) {
      opts.delayMs = Number(rest[i + 1]) || 500;
      i++;
    } else if (arg === '--all-domains') {
      opts.sameDomainOnly = false;
    }
  }

  return { url, options: opts };
}

async function main() {
  const { url, options } = parseArgs(process.argv);

  if (!url || url === '-h' || url === '--help') {
    console.log(`
Uso:
  crawl-mini <url> [--depth N] [--delay MS] [--all-domains]

Ejemplos:
  crawl-mini https://example.com
  crawl-mini https://example.com --depth 1
  crawl-mini https://example.com --depth 1 --delay 1000
  crawl-mini https://example.com --depth 1 --all-domains
`);
    process.exit(0);
  }

  try {
    await crawl(url, options);
  } catch (err) {
    console.error('[Error fatal]', err.message);
    process.exit(1);
  }
}

main();
