import{o as n,c as s,a}from"./app.a384575a.js";const e='{"title":"DemoBlock展示组件","description":"","frontmatter":{"sidebarDepth":3},"headers":[{"level":2,"title":"默认的DemoBlock展示组件","slug":"默认的demoblock展示组件"},{"level":2,"title":"自行实现DemoBlock组件","slug":"自行实现demoblock组件"},{"level":3,"title":"接收的props","slug":"接收的props"},{"level":3,"title":"接收的slots","slug":"接收的slots"},{"level":3,"title":"全局引入","slug":"全局引入"}],"relativePath":"enhanceApp/use-component.md","lastUpdated":1627622626739}',t={},p=a('<h1 id="demoblock展示组件"><a class="header-anchor" href="#demoblock展示组件" aria-hidden="true">#</a> DemoBlock展示组件</h1><h2 id="默认的demoblock展示组件"><a class="header-anchor" href="#默认的demoblock展示组件" aria-hidden="true">#</a> 默认的DemoBlock展示组件</h2><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// theme/index.js</span>\n<span class="token keyword">import</span> DefaultTheme <span class="token keyword">from</span> <span class="token string">&#39;vitepress/theme&#39;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> enhanceApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vitepress-plugin-demo/lib/index.mjs&#39;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token operator">...</span>DefaultTheme<span class="token punctuation">,</span>\n  <span class="token function">enhanceApp</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> app <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">enhanceApp</span><span class="token punctuation">(</span>app<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n      useDefaultComponent<span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 默认为true</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="自行实现demoblock组件"><a class="header-anchor" href="#自行实现demoblock组件" aria-hidden="true">#</a> 自行实现DemoBlock组件</h2><p><strong>vitepress-plugin-demo的渲染规则中，向demo-block组件中传递了以下props和slots，可根据自己需要去实现</strong></p><h3 id="接收的props"><a class="header-anchor" href="#接收的props" aria-hidden="true">#</a> 接收的props</h3><table><thead><tr><th>名称</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>description</td><td>string</td><td>对demo的描述信息，未经过markdown-it渲染，写的是什么就是什么</td></tr><tr><td>code</td><td>string</td><td>demo的源码，采用encodeURIComponent编码</td></tr></tbody></table><h3 id="接收的slots"><a class="header-anchor" href="#接收的slots" aria-hidden="true">#</a> 接收的slots</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>代码的执行效果</td></tr><tr><td>description</td><td>代码描述，采用markdown-it渲染，如果自定义的话，就自行根据$props.description实现</td></tr><tr><td>code</td><td>代码字符串，采用vuepress的渲染规则，如果自定义的话，就自行根据$props.code实现</td></tr></tbody></table><h3 id="全局引入"><a class="header-anchor" href="#全局引入" aria-hidden="true">#</a> 全局引入</h3><div class="language-js line-numbers-mode"><pre><code><span class="token comment">// theme/index.js</span>\n<span class="token keyword">import</span> DefaultTheme <span class="token keyword">from</span> <span class="token string">&#39;vitepress/theme&#39;</span>\n<span class="token keyword">import</span> CustomDemoBlock <span class="token keyword">from</span> <span class="token string">&#39;path/to/your/component&#39;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token operator">...</span>DefaultTheme<span class="token punctuation">,</span>\n  <span class="token function">enhanceApp</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> app <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;DemoBlock&#39;</span><span class="token punctuation">,</span> CustomDemoBlock<span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>',11);t.render=function(a,e,t,o,l,r){return n(),s("div",null,[p])};export default t;export{e as __pageData};
