"use strict";(self.webpackChunkjuno_docs=self.webpackChunkjuno_docs||[]).push([[913],{427:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>p});var a=r(7462),i=(r(7294),r(3905));const n={title:"Merkle Tries Details"},s=void 0,l={unversionedId:"features/merkle-tree",id:"features/merkle-tree",title:"Merkle Tries Details",description:"For the storage of the State, we are using a Sparse Patricia Merkle Trie, a direct implementation from the",source:"@site/docs/features/merkle-tree.mdx",sourceDirName:"features",slug:"/features/merkle-tree",permalink:"/docs/features/merkle-tree",draft:!1,editUrl:"https://github.com/NethermindEth/juno/tree/main/docs/docs/features/merkle-tree.mdx",tags:[],version:"current",frontMatter:{title:"Merkle Tries Details"},sidebar:"tutorialSidebar",previous:{title:"Database",permalink:"/docs/features/database"},next:{title:"Juno Metrics",permalink:"/docs/features/metrics"}},o={},p=[{value:"StarkNet Merkle-Patricia trie",id:"starknet-merkle-patricia-trie",level:2},{value:"General sparse Merkle tries",id:"general-sparse-merkle-tries",level:2},{value:"Posts and implementations",id:"posts-and-implementations",level:3},{value:"Papers",id:"papers",level:3},{value:"Ethereum\u2019s modified Merkle-Patricia Trie",id:"ethereums-modified-merkle-patricia-trie",level:2}],c={toc:p};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"For the storage of the State, we are using a Sparse Patricia Merkle Trie, a direct implementation from the\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.starknet.io/docs/State/starknet-state#merkle-patricia-tree"},"specification")," provided by StarkNet"),(0,i.kt)("h2",{id:"starknet-merkle-patricia-trie"},"StarkNet Merkle-Patricia trie"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.starknet.io/docs/State/starknet-state/#merkle-patricia-tree"},"StarkNet documentation on its binary Merkle-Patricia trie"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/starkware-libs/cairo-lang/tree/master/src/starkware/starkware_utils/commitment_tree"},"StarkWare Python implementation.")),(0,i.kt)("h2",{id:"general-sparse-merkle-tries"},"General sparse Merkle tries"),(0,i.kt)("h3",{id:"posts-and-implementations"},"Posts and implementations"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://medium.com/@kelvinfichter/whats-a-sparse-merkle-tree-acda70aeb837"},"What\u2019s a Sparse Merkle Tree? - Kelvin Fichter")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://ethresear.ch/t/optimizing-sparse-merkle-trees/3751"},"Optimising Sparse Merkle trees - Vitalik Buterin.")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethereum/research/tree/master/sparse_merkle_tree"},"Sparse Merkle Tree toy implementation in Python - Vitalik Buterin")," ."),(0,i.kt)("h3",{id:"papers"},"Papers"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/pylls/gosmt"},"Efficient Sparse Merkle Trees (Dahlberg, Pulls, and Peeters, 2016) implementation.")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://eprint.iacr.org/2018/955.pdf"},"Compact Sparse Merkle Trees (Haider, 2018).")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developers.diem.com/papers/jellyfish-merkle-tree/2021-01-14.pdf"},"Jellyfish Merkle Tree (Gao, Hu, and Wu, _)"),"."),(0,i.kt)("h2",{id:"ethereums-modified-merkle-patricia-trie"},"Ethereum\u2019s modified Merkle-Patricia Trie"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://eth.wiki/en/fundamentals/patricia-tree"},"Patricia Tree - Ethereum Wiki")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/zhangchiqing/merkle-patricia-trie"},"Toy implementation - Leo Zhang")))}m.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=a.createContext({}),p=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),k=i,f=u["".concat(o,".").concat(k)]||u[k]||m[k]||n;return r?a.createElement(f,s(s({ref:t},c),{},{components:r})):a.createElement(f,s({ref:t},c))}));function k(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,s=new Array(n);s[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var p=2;p<n;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);