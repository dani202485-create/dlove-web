export type Product={slug:string;name:string;category:string;price:number;image:string;description:string}
export const products:Product[]=[
 {slug:'equilibrium-hoodie',name:'Equilibrium Hoodie',category:'Essential 01',price:189,image:'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=1200&q=90',description:'Una pieza de peso elevado que traduce el equilibrio interior en una silueta impecable.'},
 {slug:'mindful-tee',name:'Mindful Tee',category:'Essential 02',price:89,image:'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1200&q=90',description:'Algodón premium, tacto extraordinario y un corte pensado para acompañarte cada día.'},
 {slug:'dualism-jacket',name:'Dualism Jacket',category:'Edition 01',price:329,image:'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1200&q=90',description:'Arquitectura, carácter y calma. Nuestra chaqueta insignia en una edición limitada.'},
 {slug:'inner-peace-cap',name:'Inner Peace Cap',category:'Objects 01',price:65,image:'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?auto=format&fit=crop&w=1200&q=90',description:'Un objeto cotidiano elevado con acabados precisos y bordado tonal.'}
]
export const formatPrice=(n:number)=>new Intl.NumberFormat('es-ES',{style:'currency',currency:'EUR',maximumFractionDigits:0}).format(n)
