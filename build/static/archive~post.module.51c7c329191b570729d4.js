(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[0],{90:function(e,t,a){"use strict";a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return m}));var r=a(2),n=a(3),i=(a(1),a(93)),l=a(11),s=a(0);var c=Object(r.a)("div",{target:"e1f4xj5v0",label:"PostMetaWrapper"})({name:"186zl3k",styles:"margin-top:2rem;@media (min-width:700px){margin-top:3rem;}"}),m=Object(r.a)("ul",{target:"e1f4xj5v1",label:"PostMetaList"})({name:"kwb0wz",styles:"justify-content:center;color:#6d6d6d;display:flex;flex-wrap:wrap;font-size:1.5rem;font-weight:500;list-style:none;margin:-1rem 0 0 -2rem;svg{fill:currentColor;}@media (min-width:700px){font-size:1.6rem;margin:-1.4rem 0 0 -3rem;}"});t.c=Object(n.connect)(e=>{var{state:t,item:a}=e,r=t.source.author[a.author],o=new Date(a.date);return Object(s.jsx)(c,null,Object(s.jsx)(m,null,r&&Object(s.jsx)(i.a,{icon:l.f,label:"Post Author",link:r.link},"By ",Object(n.decode)(r.name)),Object(s.jsx)(i.a,{icon:l.a,label:"Post Date"},o.toDateString())))})},91:function(e,t,a){"use strict";a.d(t,"b",(function(){return d})),a.d(t,"c",(function(){return b})),a.d(t,"f",(function(){return g})),a.d(t,"e",(function(){return u})),a.d(t,"d",(function(){return h})),a.d(t,"a",(function(){return O}));var r=a(2),n=(a(1),a(3)),i=a(15),l=a(92),s=a(90),c=a(94),m=a(95),o=a(0);t.g=Object(n.connect)(e=>{var{state:t,item:a,libraries:r,showExcerpt:n,showMedia:i=!0}=e,j=t.source.category,p=a.categories&&a.categories.map(e=>j[e]),f=t.source.tag,w=a.tags&&a.tags.map(e=>f[e]),y=n?a.excerpt:a.content,{Component:v}=r.html2react;return Object(o.jsx)(d,null,Object(o.jsx)(b,null,Object(o.jsx)(g,null,a.categories&&Object(o.jsx)(c.a,{categories:p}),Object(o.jsx)(x,{link:a.link},Object(o.jsx)(u,{className:"heading-size-1",dangerouslySetInnerHTML:{__html:a.title.rendered}})),Object(o.jsx)(s.c,{item:a}))),t.theme.featuredMedia.showOnArchive&&i&&Object(o.jsx)(l.a,{id:a.featured_media}),y&&Object(o.jsx)(h,{size:"thin"},Object(o.jsx)(O,null,Object(o.jsx)(v,{html:y.rendered})),a.tags&&Object(o.jsx)(m.a,{tags:w})))});var d=Object(r.a)("article",{target:"e7lz0qr0",label:"Post"})({name:"1w1m9iu",styles:"&:first-of-type{padding:4rem 0 0;}@media (min-width:700px){&:first-of-type{padding:8rem 0 0;}}"}),b=Object(r.a)("header",{target:"e7lz0qr1",label:"PostHeader"})({name:"xi606m",styles:"text-align:center;"}),j={thin:"58rem",small:"80rem",medium:"100rem"},g=Object(r.a)("div",{target:"e7lz0qr2",label:"SectionContainer"})("margin-left:auto;margin-right:auto;width:calc(100% - 4rem);max-width:",e=>j[e.size]||j.medium,";@media (min-width:700px){width:calc(100% - 8rem);}"),u=Object(r.a)("h1",{target:"e7lz0qr3",label:"PostTitle"})({name:"3o51ig",styles:"margin:0;@media (min-width:700px){font-size:6.4rem !important;}"}),x=Object(r.a)(i.a,{target:"e7lz0qr4",label:"PostLink"})({name:"6un5p1",styles:"color:#000000;text-decoration:none;display:inline-block;&:hover{text-decoration:underline;}"}),h=Object(r.a)(g,{target:"e7lz0qr5",label:"PostInner"})({name:"l5pbim",styles:"padding-top:5rem;@media (min-width:700px){padding-top:8rem;}"}),O=Object(r.a)("div",{target:"e7lz0qr6",label:"EntryContent"})({name:"1runhiy",styles:'line-height:1.5;max-width:58rem;font-family:"Hoefler Text",Garamond,"Times New Roman",serif;letter-spacing:normal;@media (min-width:700px){font-size:2.1rem;}> *:first-of-type{margin-top:0;}figure{margin:2em 0;max-width:100%;}'})},92:function(e,t,a){"use strict";var r=a(2),n=(a(1),a(3)),i=a(25),l=a(10),s=a(0);t.a=Object(n.connect)(e=>{var{state:t,id:a,className:r}=e,n=t.source.attachment[a];if(!n)return null;var i=Object.values(n.media_details.sizes).map(e=>[e.source_url,e.width]).reduce((e,t,a,r)=>e.concat("".concat(t.join(" "),"w").concat(a!==r.length-1?", ":"")),"")||null;return Object(s.jsx)(c,{className:r},Object(s.jsx)(l.a,{size:"medium"},Object(s.jsx)(m,{alt:n.title.rendered,src:n.source_url,srcSet:i})))});var c=Object(r.a)("figure",{target:"edgxlej0",label:"Figure"})({name:"abxdg",styles:"margin-top:5rem;position:relative;min-height:300px;@media (min-width:700px){margin-top:6rem;}"}),m=Object(r.a)(i.a,{target:"edgxlej1",label:"Image"})({name:"3r6t0a",styles:"margin:0 auto;max-width:100%;display:block;height:auto;max-height:440px;"})},93:function(e,t,a){"use strict";var r=a(2),n=(a(1),a(15)),i=a(16),l=a(0);var s=Object(r.a)("span",{target:"enbhvbr0",label:"MetaIcon"})({name:"150iyvg",styles:"flex-shrink:0;margin-right:1rem;"}),c=Object(r.a)("span",{target:"enbhvbr1",label:"MetaText"})({name:"kiqxjt",styles:"a{color:inherit;text-decoration:none;}a:hover{text-decoration:underline;}"}),m=Object(r.a)("li",{target:"enbhvbr2",label:"ListItem"})({name:"h96qih",styles:"align-items:center;display:flex;flex-wrap:nowrap;flex-shrink:0;letter-spacing:-0.016875em;margin:1rem 0 0 2rem;max-width:calc(100% - 2rem);text-transform:capitalize;@media (min-width:700px){margin:1.4rem 0 0 3rem;max-width:calc(100% - 3rem);}"});t.a=e=>{var{icon:t,label:a,link:r,children:o}=e;return Object(l.jsx)(m,null,Object(l.jsx)(s,null,Object(l.jsx)(i.a,null,a),Object(l.jsx)(t,null)),Object(l.jsx)(c,null,r?Object(l.jsx)(n.a,{link:r},o):o))}},94:function(e,t,a){"use strict";var r=a(2),n=a(3),i=(a(1),a(16)),l=a(15),s=a(0);t.a=Object(n.connect)(e=>{var{categories:t}=e,a=t.filter(Boolean);return 0===a.length?null:Object(s.jsx)(c,null,Object(s.jsx)(i.a,null,"Categories"),Object(s.jsx)(m,null,a.map(e=>Object(s.jsx)(o,{key:e.id,link:e.link},Object(n.decode)(e.name)))))});var c=Object(r.a)("div",{target:"e13btr6x0",label:"EntryCategories"})({name:"rcqg3e",styles:"line-height:1.25;margin-bottom:2rem;@media (min-width:700px){margin-bottom:3rem;}"}),m=Object(r.a)("div",{target:"e13btr6x1",label:"EntryCategoriesInner"})({name:"dsztb8",styles:"justify-content:center;display:flex;flex-wrap:wrap;margin:-0.5rem 0 0 -1rem;@media (min-width:700px){margin:-1rem 0 0 -2rem;}"}),o=Object(r.a)(l.a,{target:"e13btr6x2",label:"CategoryTag"})({name:"1dkgekh",styles:"border-bottom:0.15rem solid currentColor;font-size:1.4rem;font-weight:700;letter-spacing:0.036666667em;margin:0.5rem 0 0 1rem;text-decoration:none;text-transform:uppercase;@media (min-width:700px){font-size:1.5rem;margin:1rem 0 0 2rem;}transition:border-bottom-color 150ms;:hover{border-bottom-color:transparent;}"})},95:function(e,t,a){"use strict";var r=a(3),n=a(1),i=a.n(n),l=a(11),s=a(15),c=a(90),m=a(93),o=a(0);t.a=Object(r.connect)(e=>{var{tags:t}=e,a=t.filter(Boolean);return 0===a.length?null:Object(o.jsx)(c.b,null,Object(o.jsx)(c.a,{style:{justifyContent:"flex-start"}},Object(o.jsx)(m.a,{icon:l.d,label:"Post Tags"},a.map((e,t)=>{var l=t===a.length-1;return Object(o.jsx)(n.Fragment,{key:e.id},Object(o.jsx)(s.a,{link:e.link},Object(r.decode)(e.name)),!l&&Object(o.jsx)(i.a.Fragment,null,", "))}))))})}}]);