(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{3264:function(n,a,s){n.exports={default:s(3915)}},3915:function(n,a,s){n.exports={content:[["p","Simple usage."]],meta:{order:0,title:{"en-US":"Usage"},filename:"components/palette/demo/default.md",id:"components-palette-demo-default"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> styled <span class="token keyword">from</span> <span class="token string">\'styled-components\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> Info <span class="token operator">=</span> styled<span class="token punctuation">.</span>div<span class="token template-string"><span class="token string">`\n    width: 100%;\n    text-align: center;\n    margin-bottom: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token punctuation">(</span><span class="token punctuation">{</span>theme<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">) => theme.spacing.xxs };\n    color: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> props<span class="token punctuation">.</span>theme<span class="token punctuation">.</span>palette<span class="token punctuation">.</span>text<span class="token punctuation">.</span>info<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;\n    background: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> props<span class="token punctuation">.</span>theme<span class="token punctuation">.</span>palette<span class="token punctuation">.</span>background<span class="token punctuation">.</span>info<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;\n    border: ${(props) => `</span></span>1px solid $<span class="token punctuation">{</span>props<span class="token punctuation">.</span>theme<span class="token punctuation">.</span>palette<span class="token punctuation">.</span>border<span class="token punctuation">.</span>info<span class="token punctuation">}</span><span class="token template-string"><span class="token string">`};\n`</span></span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> Error <span class="token operator">=</span> styled<span class="token punctuation">.</span>div<span class="token template-string"><span class="token string">`\n    width: 100%;\n    text-align: center;\n    margin-bottom: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token punctuation">(</span><span class="token punctuation">{</span>theme<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">) => theme.spacing.xxs };\n    color: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> props<span class="token punctuation">.</span>theme<span class="token punctuation">.</span>palette<span class="token punctuation">.</span>text<span class="token punctuation">.</span>error<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;\n    background: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> props<span class="token punctuation">.</span>theme<span class="token punctuation">.</span>palette<span class="token punctuation">.</span>background<span class="token punctuation">.</span>error<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;\n    border: ${(props) => `</span></span>1px solid $<span class="token punctuation">{</span>props<span class="token punctuation">.</span>theme<span class="token punctuation">.</span>palette<span class="token punctuation">.</span>border<span class="token punctuation">.</span>error<span class="token punctuation">}</span><span class="token template-string"><span class="token string">`};\n`</span></span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Info</span><span class="token punctuation">></span></span>I can <span class="token keyword">do</span> that Dave<span class="token punctuation">.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Info</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Error</span><span class="token punctuation">></span></span>I cant <span class="token keyword">do</span> that Dave<span class="token punctuation">.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Error</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],highlightedCodes:{jsx:'<span class="token keyword">import</span> styled <span class="token keyword">from</span> <span class="token string">\'styled-components\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> Info <span class="token operator">=</span> styled<span class="token punctuation">.</span>div<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">\n    width: 100%;\n    text-align: center;\n    margin-bottom: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>theme<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> theme<span class="token punctuation">.</span>spacing<span class="token punctuation">.</span>xxs <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;\n    color: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=></span> props<span class="token punctuation">.</span>theme<span class="token punctuation">.</span>palette<span class="token punctuation">.</span>text<span class="token punctuation">.</span>info<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;\n    background: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=></span> props<span class="token punctuation">.</span>theme<span class="token punctuation">.</span>palette<span class="token punctuation">.</span>background<span class="token punctuation">.</span>info<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;\n    border: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">1px solid </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>props<span class="token punctuation">.</span>theme<span class="token punctuation">.</span>palette<span class="token punctuation">.</span>border<span class="token punctuation">.</span>info<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;\n</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> Error <span class="token operator">=</span> styled<span class="token punctuation">.</span>div<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">\n    width: 100%;\n    text-align: center;\n    margin-bottom: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>theme<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> theme<span class="token punctuation">.</span>spacing<span class="token punctuation">.</span>xxs <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;\n    color: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=></span> props<span class="token punctuation">.</span>theme<span class="token punctuation">.</span>palette<span class="token punctuation">.</span>text<span class="token punctuation">.</span>error<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;\n    background: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=></span> props<span class="token punctuation">.</span>theme<span class="token punctuation">.</span>palette<span class="token punctuation">.</span>background<span class="token punctuation">.</span>error<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;\n    border: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token punctuation">(</span><span class="token parameter">props</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">1px solid </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>props<span class="token punctuation">.</span>theme<span class="token punctuation">.</span>palette<span class="token punctuation">.</span>border<span class="token punctuation">.</span>error<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;\n</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Info</span></span><span class="token punctuation">></span></span><span class="token constant">I</span> can <span class="token keyword">do</span> that Dave<span class="token punctuation">.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Info</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Error</span></span><span class="token punctuation">></span></span><span class="token constant">I</span> cant <span class="token keyword">do</span> that Dave<span class="token punctuation">.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Error</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},preview:function(){var n,a=s(0),t=(s(29),(n=s(13))&&n.__esModule?n:{default:n});function p(){var n=e(["\n    width: 100%;\n    text-align: center;\n    margin-bottom: ",";\n    color: ",";\n    background: ",";\n    border: ",";\n"]);return p=function(){return n},n}function o(){var n=e(["\n    width: 100%;\n    text-align: center;\n    margin-bottom: ",";\n    color: ",";\n    background: ",";\n    border: ",";\n"]);return o=function(){return n},n}function e(n,a){return a||(a=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(a)}}))}var c=t.default.div(o(),(function(n){return n.theme.spacing.xxs}),(function(n){return n.theme.palette.text.info}),(function(n){return n.theme.palette.background.info}),(function(n){return"1px solid ".concat(n.theme.palette.border.info)})),u=t.default.div(p(),(function(n){return n.theme.spacing.xxs}),(function(n){return n.theme.palette.text.error}),(function(n){return n.theme.palette.background.error}),(function(n){return"1px solid ".concat(n.theme.palette.border.error)}));return a.createElement("div",null,a.createElement(c,null,"I can do that Dave."),a.createElement(u,null,"I cant do that Dave."))}}}}]);