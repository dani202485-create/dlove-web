import {notFound} from 'next/navigation';import {products} from '@/lib/products';import {ProductDetail} from './product-detail'
export function generateStaticParams(){return products.map(p=>({slug:p.slug}))}
export default function Page({params}:{params:{slug:string}}){const p=products.find(x=>x.slug===params.slug);if(!p)notFound();return <ProductDetail p={p}/>}
