import{$ as n,v as s,r as a,o as t,c as e,b as o,t as c,e as l,f as p,h as u,g as i}from"./app.a384575a.js";console.log(n,"\n",s);const r={data:()=>({count:a(1)})};r.render=function(n,s,a,l,p,u){return t(),e("div",null,[o("div",null,c(p.count),1),o("button",{onClick:s[1]||(s[1]=n=>p.count++)},"点击")])};const k=o("h1",{id:"另外一种写法"},[o("a",{class:"header-anchor",href:"#另外一种写法","aria-hidden":"true"},"#"),i(" 另外一种写法")],-1),d=o("p",null,"前面提到了，个人不倾向于在docs中另起文件写demo（naive也是把demo文件和开发文件一起组织的，并没有放在docs下面）。所以借鉴了element-ui的写法，根据markdown-it-container提供了一个demo的container：",-1),m=o("div",{class:"language-vue line-numbers-mode"},[o("pre",null,[o("code",null,":::demo **这个是另外一种`demo`的写法**\nyour sfc code here\n:::\n")]),o("div",{class:"line-numbers-wrapper"},[o("span",{class:"line-number"},"1"),o("br"),o("span",{class:"line-number"},"2"),o("br"),o("span",{class:"line-number"},"3"),o("br")])],-1),g=o("p",null,"如下图所示：",-1),b=o("p",null,[o("img",{src:"/vitepress-plugin-demo/assets/other-way.6337ce2a.jpg",alt:"An image"})],-1),v=o("h2",{id:"额外配置的项"},[o("a",{class:"header-anchor",href:"#额外配置的项","aria-hidden":"true"},"#"),i(" 额外配置的项")],-1),f=o("p",null,"因为目前vitepress并没有提供vite的plugin的相关配置，所以我这里暂时没想到什么好的办法，只能在运行的项目中修改vitepress代码了。如果您有什么好的意见，可以提出来。",-1),h=o("ol",null,[o("li",null,"在node_modules目录中找到vitepress/dist/node/plugin.js"),o("li",null,[i("页面底部，找到"),o("code",null,"return [vitePressPlugin, vuePlugin]"),i("类似的代码")]),o("li",null,[i('修改为下面的代码（就是vite官网教程上面提供的"'),o("a",{href:"https://cn.vitejs.dev/guide/api-plugin.html#importing-a-virtual-file",target:"_blank",rel:"noopener noreferrer"},"引入一个虚拟文件"),i('"的功能）：')])],-1),w=o("div",{class:"language-js line-numbers-mode"},[o("pre",null,[o("code",null,[i("  "),o("span",{class:"token keyword"},"const"),i(),o("span",{class:"token function-variable function"},"createDemoPlugin"),i(),o("span",{class:"token operator"},"="),i(),o("span",{class:"token punctuation"},"("),o("span",{class:"token punctuation"},")"),i(),o("span",{class:"token operator"},"=>"),i(),o("span",{class:"token punctuation"},"{"),i("\n    "),o("span",{class:"token keyword"},"const"),i(" virtualFileId "),o("span",{class:"token operator"},"="),i(),o("span",{class:"token regex"},[o("span",{class:"token regex-delimiter"},"/"),o("span",{class:"token regex-source language-regex"},"^@vitepress-demo-\\d+-([\\d\\D]+)(.vue|.md)$"),o("span",{class:"token regex-delimiter"},"/")]),i("\n    "),o("span",{class:"token keyword"},"return"),i(),o("span",{class:"token punctuation"},"{"),i("\n      name"),o("span",{class:"token operator"},":"),i(),o("span",{class:"token string"},"'demo-plugin'"),o("span",{class:"token punctuation"},","),i(),o("span",{class:"token comment"},"// 必须的，将会在 warning 和 error 中显示"),i("\n      "),o("span",{class:"token function"},"resolveId"),i(),o("span",{class:"token punctuation"},"("),o("span",{class:"token parameter"},"id"),o("span",{class:"token punctuation"},")"),i(),o("span",{class:"token punctuation"},"{"),i("\n        "),o("span",{class:"token keyword"},"if"),i(),o("span",{class:"token punctuation"},"("),i("id"),o("span",{class:"token punctuation"},"."),o("span",{class:"token function"},"match"),o("span",{class:"token punctuation"},"("),i("virtualFileId"),o("span",{class:"token punctuation"},")"),o("span",{class:"token punctuation"},")"),i(),o("span",{class:"token punctuation"},"{"),i("\n          "),o("span",{class:"token keyword"},"return"),i(" id\n        "),o("span",{class:"token punctuation"},"}"),i("\n      "),o("span",{class:"token punctuation"},"}"),o("span",{class:"token punctuation"},","),i("\n      "),o("span",{class:"token function"},"load"),i(),o("span",{class:"token punctuation"},"("),o("span",{class:"token parameter"},"id"),o("span",{class:"token punctuation"},")"),i(),o("span",{class:"token punctuation"},"{"),i("\n        "),o("span",{class:"token keyword"},"const"),i(" matching "),o("span",{class:"token operator"},"="),i(" id"),o("span",{class:"token punctuation"},"."),o("span",{class:"token function"},"match"),o("span",{class:"token punctuation"},"("),i("virtualFileId"),o("span",{class:"token punctuation"},")"),i("\n        "),o("span",{class:"token keyword"},"if"),i(),o("span",{class:"token punctuation"},"("),i("matching"),o("span",{class:"token punctuation"},")"),i(),o("span",{class:"token punctuation"},"{"),i("\n          "),o("span",{class:"token comment"},"// 源码字符串采用了base64编码，此处进行解码"),i("\n          "),o("span",{class:"token keyword"},"const"),i(" result "),o("span",{class:"token operator"},"="),i(),o("span",{class:"token keyword"},"new"),i(),o("span",{class:"token class-name"},[i("Buffer"),o("span",{class:"token punctuation"},"."),i("from")]),o("span",{class:"token punctuation"},"("),i("matching"),o("span",{class:"token punctuation"},"["),o("span",{class:"token number"},"1"),o("span",{class:"token punctuation"},"]"),o("span",{class:"token punctuation"},","),i(),o("span",{class:"token string"},"'base64'"),o("span",{class:"token punctuation"},")"),o("span",{class:"token punctuation"},"."),o("span",{class:"token function"},"toString"),o("span",{class:"token punctuation"},"("),o("span",{class:"token punctuation"},")"),i("\n          "),o("span",{class:"token keyword"},"return"),i(" result\n        "),o("span",{class:"token punctuation"},"}"),i("\n      "),o("span",{class:"token punctuation"},"}"),i("\n    "),o("span",{class:"token punctuation"},"}"),i("\n  "),o("span",{class:"token punctuation"},"}"),i("\n\n  "),o("span",{class:"token keyword"},"return"),i(),o("span",{class:"token punctuation"},"["),i("vitePressPlugin"),o("span",{class:"token punctuation"},","),i(" vuePlugin"),o("span",{class:"token punctuation"},","),i(),o("span",{class:"token function"},"createDemoPlugin"),o("span",{class:"token punctuation"},"("),o("span",{class:"token punctuation"},")"),o("span",{class:"token punctuation"},"]"),o("span",{class:"token punctuation"},";"),i("\n")])]),o("div",{class:"line-numbers-wrapper"},[o("span",{class:"line-number"},"1"),o("br"),o("span",{class:"line-number"},"2"),o("br"),o("span",{class:"line-number"},"3"),o("br"),o("span",{class:"line-number"},"4"),o("br"),o("span",{class:"line-number"},"5"),o("br"),o("span",{class:"line-number"},"6"),o("br"),o("span",{class:"line-number"},"7"),o("br"),o("span",{class:"line-number"},"8"),o("br"),o("span",{class:"line-number"},"9"),o("br"),o("span",{class:"line-number"},"10"),o("br"),o("span",{class:"line-number"},"11"),o("br"),o("span",{class:"line-number"},"12"),o("br"),o("span",{class:"line-number"},"13"),o("br"),o("span",{class:"line-number"},"14"),o("br"),o("span",{class:"line-number"},"15"),o("br"),o("span",{class:"line-number"},"16"),o("br"),o("span",{class:"line-number"},"17"),o("br"),o("span",{class:"line-number"},"18"),o("br"),o("span",{class:"line-number"},"19"),o("br"),o("span",{class:"line-number"},"20"),o("br"),o("span",{class:"line-number"},"21"),o("br")])],-1),y=o("p",null,"或者为（vitepress-plugin-demo提供了相关的函数，直接引入）：",-1),A=o("div",{class:"language-js line-numbers-mode"},[o("pre",null,[o("code",null,[o("span",{class:"token keyword"},"return"),i(),o("span",{class:"token punctuation"},"["),i("vitePressPlugin"),o("span",{class:"token punctuation"},","),i(" vuePlugin"),o("span",{class:"token punctuation"},","),i(),o("span",{class:"token function"},"require"),o("span",{class:"token punctuation"},"("),o("span",{class:"token string"},"'vitepress-plugin-demo/lib/virtualFile'"),o("span",{class:"token punctuation"},")"),o("span",{class:"token punctuation"},"("),o("span",{class:"token punctuation"},")"),o("span",{class:"token punctuation"},"]"),o("span",{class:"token punctuation"},";"),i("\n")])]),o("div",{class:"line-numbers-wrapper"},[o("span",{class:"line-number"},"1"),o("br")])],-1),C=o("h2",{id:"示例"},[o("a",{class:"header-anchor",href:"#示例","aria-hidden":"true"},"#"),i(" 示例")],-1),B=o("p",null,[o("strong",null,[i("这个是另外一种"),o("code",null,"demo"),i("的写法")])],-1),E=o("div",{class:"language-html"},[o("pre",null,[o("code",null,[o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),i("template")]),o("span",{class:"token punctuation"},">")]),i("\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),i("div")]),o("span",{class:"token punctuation"},">")]),i("\n    "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),i("div")]),o("span",{class:"token punctuation"},">")]),i("{{count}}"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),i("div")]),o("span",{class:"token punctuation"},">")]),i("\n    "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),i("button")]),i(),o("span",{class:"token attr-name"},"@click"),o("span",{class:"token attr-value"},[o("span",{class:"token punctuation attr-equals"},"="),o("span",{class:"token punctuation"},'"'),i("count++"),o("span",{class:"token punctuation"},'"')]),o("span",{class:"token punctuation"},">")]),i("点击"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),i("button")]),o("span",{class:"token punctuation"},">")]),i("\n  "),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),i("div")]),o("span",{class:"token punctuation"},">")]),i("\n"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),i("template")]),o("span",{class:"token punctuation"},">")]),i("\n"),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"<"),i("script")]),o("span",{class:"token punctuation"},">")]),o("span",{class:"token script"},[o("span",{class:"token language-javascript"},[i("\n"),o("span",{class:"token keyword"},"import"),i(),o("span",{class:"token punctuation"},"{"),i("ref"),o("span",{class:"token punctuation"},"}"),i(),o("span",{class:"token keyword"},"from"),i(),o("span",{class:"token string"},"'vue'"),i("\n"),o("span",{class:"token keyword"},"import"),i(" $ "),o("span",{class:"token keyword"},"from"),i(),o("span",{class:"token string"},"'jquery'"),i("\n"),o("span",{class:"token keyword"},"import"),i(" vant "),o("span",{class:"token keyword"},"from"),i(),o("span",{class:"token string"},"'vant'"),i("\nconsole"),o("span",{class:"token punctuation"},"."),o("span",{class:"token function"},"log"),o("span",{class:"token punctuation"},"("),i("$"),o("span",{class:"token punctuation"},","),i(),o("span",{class:"token string"},"'\\n'"),o("span",{class:"token punctuation"},","),i(" vant"),o("span",{class:"token punctuation"},")"),i("\n"),o("span",{class:"token keyword"},"export"),i(),o("span",{class:"token keyword"},"default"),i(),o("span",{class:"token punctuation"},"{"),i("\n  "),o("span",{class:"token function"},"data"),o("span",{class:"token punctuation"},"("),o("span",{class:"token punctuation"},")"),o("span",{class:"token punctuation"},"{"),i("\n    "),o("span",{class:"token keyword"},"return"),i(),o("span",{class:"token punctuation"},"{"),i("\n      count"),o("span",{class:"token operator"},":"),i(),o("span",{class:"token function"},"ref"),o("span",{class:"token punctuation"},"("),o("span",{class:"token number"},"1"),o("span",{class:"token punctuation"},")"),i("\n    "),o("span",{class:"token punctuation"},"}"),i("\n  "),o("span",{class:"token punctuation"},"}"),i("\n"),o("span",{class:"token punctuation"},"}"),i("\n")])]),o("span",{class:"token tag"},[o("span",{class:"token tag"},[o("span",{class:"token punctuation"},"</"),i("script")]),o("span",{class:"token punctuation"},">")]),i("\n")])])],-1),P=o("h2",{id:"import"},[o("a",{class:"header-anchor",href:"#import","aria-hidden":"true"},"#"),i(" import")],-1),D=o("p",null,"这里的实现借助了vite插件：引入一个虚拟文件，没有采用硬编码，这里的import都会正常引入，更加方便的编写demo示例",-1),j={class:"test",style:{display:"none"}},x={data:()=>({count:123})},F='{"title":"另外一种写法","description":"","frontmatter":{"sidebarDepth":3},"headers":[{"level":2,"title":"额外配置的项","slug":"额外配置的项"},{"level":2,"title":"示例","slug":"示例"},{"level":2,"title":"import","slug":"import"}],"relativePath":"guide/other-way.md","lastUpdated":1627531169772}';const q=Object.assign(x,{setup:function(n){return(n,s)=>{const a=l("demo-block");return t(),e("div",null,[k,d,m,g,b,v,f,h,w,y,A,C,o(a,{description:"**这个是另外一种`demo`的写法**",args:[["**这个是另外一种`demo`的写法**"]],code:"%3Ctemplate%3E%0A%20%20%3Cdiv%3E%0A%20%20%20%20%3Cdiv%3E%7B%7Bcount%7D%7D%3C%2Fdiv%3E%0A%20%20%20%20%3Cbutton%20%40click%3D%22count%2B%2B%22%3E%E7%82%B9%E5%87%BB%3C%2Fbutton%3E%0A%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A%3Cscript%3E%0Aimport%20%7Bref%7D%20from%20'vue'%0Aimport%20%24%20from%20'jquery'%0Aimport%20vant%20from%20'vant'%0Aconsole.log(%24%2C%20'%5Cn'%2C%20vant)%0Aexport%20default%20%7B%0A%20%20data()%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20count%3A%20ref(1)%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A%3C%2Fscript%3E%0A"},{description:p((()=>[B])),code:p((()=>[E])),default:p((()=>[o(r)])),_:1}),P,D,u(" 下面是测试 "),o("div",j,c(n.count)+","+c(123),1)])}}});export default q;export{F as __pageData};
