export interface SEOPage {
  title?: string;
  description?: string;
  keywords?: string;
}

export interface SEOJson {
  defaults?: SEOPage;
  [pageKey: string]: SEOPage;
}
