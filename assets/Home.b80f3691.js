import{i as e,j as t,k as a,u as s,o as i,c as l,b as o,l as n,h as c,t as r,_ as v,p as d,d as f,F as u,m,e as k,n as p}from"./app.a384575a.js";d("data-v-0cb9fda2");const h={key:0,class:"home-hero"},y={key:0,class:"figure"},g={key:1,id:"main-title",class:"title"},x={key:2,class:"description"};f();var _=e({setup(e){const{site:d,frontmatter:f}=t(),u=a((()=>{const{heroImage:e,heroText:t,tagline:a,actionLink:s,actionText:i}=f.value;return e||t||a||s&&i})),m=a((()=>f.value.heroText||d.value.title));return(e,t)=>s(u)?(i(),l("header",h,[s(f).heroImage?(i(),l("figure",y,[o("img",{class:"image",src:s(n)(s(f).heroImage),alt:s(f).heroAlt},null,8,["src","alt"])])):c("v-if",!0),s(m)?(i(),l("h1",g,r(s(m)),1)):c("v-if",!0),s(f).tagline?(i(),l("p",x,r(s(f).tagline),1)):c("v-if",!0),s(f).actionLink&&s(f).actionText?(i(),l(v,{key:3,item:{link:s(f).actionLink,text:s(f).actionText},class:"action"},null,8,["item"])):c("v-if",!0),s(f).altActionLink&&s(f).altActionText?(i(),l(v,{key:4,item:{link:s(f).altActionLink,text:s(f).altActionText},class:"action alt"},null,8,["item"])):c("v-if",!0)])):c("v-if",!0)}});_.__scopeId="data-v-0cb9fda2",d("data-v-e39c13e0");const I={key:0,class:"home-features"},T={class:"wrapper"},b={class:"container"},A={class:"features"},L={key:0,class:"title"},$={key:1,class:"details"};f();var j=e({setup(e){const{frontmatter:n}=t(),v=a((()=>n.value.features&&n.value.features.length>0)),d=a((()=>n.value.features?n.value.features:[]));return(e,t)=>s(v)?(i(),l("div",I,[o("div",T,[o("div",b,[o("div",A,[(i(!0),l(u,null,m(s(d),((e,t)=>(i(),l("section",{key:t,class:"feature"},[e.title?(i(),l("h2",L,r(e.title),1)):c("v-if",!0),e.details?(i(),l("p",$,r(e.details),1)):c("v-if",!0)])))),128))])])])])):c("v-if",!0)}});j.__scopeId="data-v-e39c13e0",d("data-v-30918238");const w={key:0,class:"footer"},C={class:"container"},F={class:"text"};f();var q=e({setup(e){const{frontmatter:a}=t();return(e,t)=>s(a).footer?(i(),l("footer",w,[o("div",C,[o("p",F,r(s(a).footer),1)])])):c("v-if",!0)}});q.__scopeId="data-v-30918238",d("data-v-32eddf2f");const z={class:"home","aria-labelledby":"main-title"},B={class:"home-content"};f();var D=e({setup:e=>(e,t)=>{const a=k("Content");return i(),l("main",z,[o(_),p(e.$slots,"hero",{},void 0,!0),o(j),o("div",B,[o(a)]),p(e.$slots,"features",{},void 0,!0),o(q),p(e.$slots,"footer",{},void 0,!0)])}});D.__scopeId="data-v-32eddf2f";export default D;
