'use client'
import {createContext,useContext,useState} from 'react'; import {Product} from '@/lib/products'
type Item=Product&{size:string;qty:number}; type Ctx={items:Item[];open:boolean;setOpen:(v:boolean)=>void;add:(p:Product,size:string)=>void;remove:(slug:string,size:string)=>void}
const Cart=createContext<Ctx|null>(null)
export function CartProvider({children}:{children:React.ReactNode}){const[items,setItems]=useState<Item[]>([]);const[open,setOpen]=useState(false);const add=(p:Product,size:string)=>{setItems(x=>{const i=x.find(v=>v.slug===p.slug&&v.size===size);return i?x.map(v=>v===i?{...v,qty:v.qty+1}:v):[...x,{...p,size,qty:1}]});setOpen(true)};const remove=(slug:string,size:string)=>setItems(x=>x.filter(i=>i.slug!==slug||i.size!==size));return <Cart.Provider value={{items,open,setOpen,add,remove}}>{children}</Cart.Provider>}
export function useCart(){const c=useContext(Cart);if(!c)throw Error('Missing CartProvider');return c}
