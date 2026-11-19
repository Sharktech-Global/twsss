import seoDataRaw from '../data/seo.json';
import type { SEOJson, SEOPage } from '../types/seo.d.ts';

const seoData = seoDataRaw as unknown as SEOJson;
const currentYear = new Date().getFullYear();

export function getSEO(pageKey: string): Required<SEOPage> {
  const defaultSEO: Required<SEOPage> = {
    title: seoData.defaults?.title ?? 'TWS SERVICE & SOLUTIONS',
    description:
      seoData.defaults?.description ??
      'Welcome to TWS - Integrated Facility Maintenance and Solutions Specialist',
    keywords:
      seoData.defaults?.keywords ??
      'TWS, water management, water treatment solutions , integrated maintenance, irrigation and dust suppression system'
  };

  const pageSEO = seoData[pageKey] ?? {};

  const finalSEO: Required<SEOPage> = {
    title: pageSEO.title ?? defaultSEO.title,
    description: pageSEO.description ?? defaultSEO.description,
    keywords: pageSEO.keywords ?? defaultSEO.keywords
  };

  // Replace {{year}} dynamically
  for (const key of ['title', 'description'] as const) {
    finalSEO[key] = finalSEO[key].replaceAll('{{year}}', currentYear.toString());
  }

  return finalSEO;
}
