import type { MetadataRoute } from 'next';
import { products } from '@/lib/products';

const baseUrl = 'https://dlove.es';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['', '/coleccion', '/historia', '/salud-mental', '/contacto'];
  const productRoutes = products.map((product) => `/producto/${product.slug}`);

  return [...staticRoutes, ...productRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? ('weekly' as const) : ('monthly' as const),
    priority: route === '' ? 1 : 0.8,
  }));
}
