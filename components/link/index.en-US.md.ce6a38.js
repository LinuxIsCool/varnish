(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{3233:function(n,s){n.exports={content:["article",["p","Varnish has default styles for ",["code","a[href]"]," links and provides a base style ",["code","contrastLinkColorStyles"],"\nfor use on dark backgrounds."],["h2","Recommended InternalLink"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> styled <span class="token keyword">from</span> <span class="token string">\'styled-components\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> NavLink <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-router-dom\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Link <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@allenai/varnish\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> linkColorStyles <span class="token punctuation">}</span> <span class="token operator">=</span> Link\n\n<span class="token keyword">export</span> <span class="token keyword">const</span> InternalLink <span class="token operator">=</span> <span class="token function">styled</span><span class="token punctuation">(</span>NavLink<span class="token punctuation">)</span><span class="token template-string"><span class="token string">`\n    </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token function">linkColorStyles</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\n`</span></span><span class="token punctuation">;</span>'},["code","import styled from 'styled-components';\nimport { NavLink } from 'react-router-dom';\nimport { Link } from '@allenai/varnish';\n\nconst { linkColorStyles } = Link\n\nexport const InternalLink = styled(NavLink)`\n    ${linkColorStyles()}\n`;"]]],meta:{category:"Components",type:"General",title:"Link",cols:2,cover:"https://allenai.org/favicon.ico",filename:"components/link/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Recommended-InternalLink",title:"Recommended InternalLink"},"Recommended InternalLink"]]]}}}]);