import{_ as F,T as H,H as j}from"./Image.48896658.js";import{f as P,h as I,o as s,c as o,F as u,b as p,a as l,t as i,g as t,n as D,i as q,_ as $,j as R,k as x,l as d,m as z,r as b,q as E,s as M,v as O,w as S,d as U,x as L,y as w,R as G}from"./entry.f68a7244.js";import{u as J}from"./product.9faee56c.js";import"./fetch.a8cc8f62.js";const K=q('<div class="skeleton" data-v-73ebf910></div><div class="title" data-v-73ebf910></div><div class="brand" data-v-73ebf910></div><div class="desc" data-v-73ebf910></div><div class="price-container" data-v-73ebf910></div>',5),Q={class:"discount"},W={class:"title"},X={class:"brand"},Y={class:"desc"},Z={class:"price-container"},ee={class:"price"},te={class:"special-price"},se=P({__name:"ProductCard",props:{product:{},isSkeleton:{type:Boolean}},setup(m){const e=m,c=I(()=>e.product?(e.product.price*(1-e.product.discountPercentage/100)).toFixed(2):0);return(a,n)=>{const r=F;return s(),o("div",{class:D(["card",{skeleton:a.isSkeleton}])},[a.isSkeleton?(s(),o(u,{key:0},[p(r,{src:null,alt:"",error:"''",imageClass:""}),K],64)):(s(),o(u,{key:1},[l("div",Q," -"+i(a.product.discountPercentage)+"% ",1),p(r,{src:a.product.thumbnail,alt:a.product.title,error:"~/assets/imgs/product-not-found.jpg",imageClass:"img"},null,8,["src","alt"]),l("div",W,i(a.product.title),1),l("div",X,i(a.product.brand),1),l("div",Y,i(a.product.description),1),l("div",Z,[l("div",ee,i(a.product.price)+"€ ",1),l("div",te,i(t(c))+"€ ",1)])],64))],2)}}});const ne=$(se,[["__scopeId","data-v-73ebf910"]]),oe={class:"paginator-container"},ae={class:"current"},ie=P({__name:"Paginator",setup(m){const e=R(),c=x();return(a,n)=>(s(),o("div",oe,[t(e)>1?(s(),o("div",{key:0,class:"first",onClick:n[0]||(n[0]=r=>e.value=1)},i("<<"))):d("",!0),t(e)>=3?(s(),o("div",{key:1,class:"current-2",onClick:n[1]||(n[1]=r=>e.value=t(e)-2)},i(t(e)-2),1)):d("",!0),t(e)>=2?(s(),o("div",{key:2,class:"current-1",onClick:n[2]||(n[2]=r=>e.value--)},i(t(e)-1),1)):d("",!0),l("div",ae,i(t(e)),1),t(e)<=t(c)-1?(s(),o("div",{key:3,class:"current+1",onClick:n[3]||(n[3]=r=>e.value++)},i(t(e)+1),1)):d("",!0),t(e)<=t(c)-2?(s(),o("div",{key:4,class:"current+2",onClick:n[4]||(n[4]=r=>e.value=t(e)+2)},i(t(e)+2),1)):d("",!0),t(e)<t(c)?(s(),o("div",{key:5,class:"last",onClick:n[5]||(n[5]=r=>e.value=t(c))},i(">>"))):d("",!0)]))}});const re=$(ie,[["__scopeId","data-v-5347f10b"]]),ce={key:0,class:"listing-container"},le={class:"listing-container"},de=P({__name:"listing",async setup(m){let e,c;const a=R(),n=x(),r=z();let g=b("10"),k=b(!0),h=b([]);const{getListingProducts:B}=([e,c]=E(()=>J()),e=await e,c(),e),T=I(()=>parseInt(g.value)*a.value+""),f=async()=>{var y,v;k.value=!0;var _=await B(g.value,T.value);h.value=(y=_.value)==null?void 0:y.products,n.value=(((v=_.value)==null?void 0:v.total)??0)/parseInt(g.value)-1,k.value=!1};return f(),M(()=>{f()}),O(a,()=>{f()}),(_,y)=>{const v=H,V=j,N=ne,A=re;return s(),o(u,null,[p(V,null,{default:S(()=>[p(v,null,{default:S(()=>[U(" Listing Products ")]),_:1})]),_:1}),t(k)?(s(),o("div",ce,[(s(!0),o(u,null,L([...Array(10).keys()],C=>(s(),w(N,{product:null,isSkeleton:!0}))),256))])):(s(),o(u,{key:1},[l("div",le,[(s(!0),o(u,null,L(t(h),C=>(s(),w(N,{product:C,onClick:ue=>t(r).push({path:"/"+("RouterNames"in _?_.RouterNames:t(G)).PRODUCT+"/"+C.id}),isSkeleton:!1},null,8,["product","onClick"]))),256))]),p(A)],64))],64)}}});const ge=$(de,[["__scopeId","data-v-675b5c80"]]);export{ge as default};
