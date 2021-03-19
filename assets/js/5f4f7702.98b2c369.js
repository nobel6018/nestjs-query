(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{116:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return i})),r.d(t,"default",(function(){return l}));var n=r(3),o=(r(0),r(218));r(222),r(223);const a={title:"v0.11.2",author:"Doug Martin",author_title:"Creator",author_url:"https://github.com/doug-martin",author_image_url:"https://avatars1.githubusercontent.com/u/361261?v=4",tags:["releases","patch"]},s={permalink:"/nestjs-query/blog/2020/05/13/v0.11.2",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/documentation/blog/blog/2020-05-13-v0.11.2.mdx",source:"@site/blog/2020-05-13-v0.11.2.mdx",description:"@InjectAssemblerQueryService",date:"2020-05-13T00:00:00.000Z",formattedDate:"May 12, 2020",tags:[{label:"releases",permalink:"/nestjs-query/blog/tags/releases"},{label:"patch",permalink:"/nestjs-query/blog/tags/patch"}],title:"v0.11.2",readingTime:1.84,truncated:!1,nextItem:{title:"v0.11.0",permalink:"/nestjs-query/blog/2020/05/07/v0.11.0"}},i=[{value:"<code>@InjectAssemblerQueryService</code>",id:"injectassemblerqueryservice",children:[{value:"Example",id:"example",children:[]}]},{value:"Using Assemblers in auto-generated Resolver",id:"using-assemblers-in-auto-generated-resolver",children:[]},{value:"Using Services in auto-generated Resolver",id:"using-services-in-auto-generated-resolver",children:[]}],c={toc:i};function l({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"injectassemblerqueryservice"},Object(o.b)("inlineCode",{parentName:"h2"},"@InjectAssemblerQueryService")),Object(o.b)("p",null,"In ",Object(o.b)("inlineCode",{parentName:"p"},"v0.11.1")," a new ",Object(o.b)("inlineCode",{parentName:"p"},"@InjectAssemblerQueryService")," decorator has been introduced to reduce boiler plate code related to creating an ",Object(o.b)("inlineCode",{parentName:"p"},"AssemblerQueryService"),"."),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("p",null,"Define your assembler"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.assembler.ts"',title:'"todo-item.assembler.ts"'},"import { Assembler, ClassTransformerAssembler } from '@nestjs-query/core';\nimport { TodoItemDTO } from './todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\n\n@Assembler(TodoItemDTO, TodoItemEntity)\nexport class TodoItemAssembler extends ClassTransformerAssembler<TodoItemDTO, TodoItemEntity> {\n  convertToDTO(entity: TodoItemEntity): TodoItemDTO {\n    const dto = super.convertToDTO(entity);\n    dto.age = Date.now() - entity.created.getMilliseconds();\n    return dto;\n  }\n}\n\n")),Object(o.b)("p",null,"Now, instead of defining an ",Object(o.b)("inlineCode",{parentName:"p"},"AssemblerQueryService")," you can use the decorator."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.resolver.ts" {8}',title:'"todo-item.resolver.ts"',"{8}":!0},"import { QueryService, InjectAssemblerQueryService } from '@nestjs-query/core';\nimport { CRUDResolver } from '@nestjs-query/query-graphql';\nimport { Resolver } from '@nestjs/graphql';\nimport { TodoItemDTO } from './dto/todo-item.dto';\n\n@Resolver(() => TodoItemDTO)\nexport class TodoItemResolver extends CRUDResolver(TodoItemDTO) {\n  constructor(@InjectAssemblerQueryService(TodoItemAssembler) readonly service: QueryService<TodoItemDTO>) {\n    super(service);\n  }\n}\n")),Object(o.b)("h2",{id:"using-assemblers-in-auto-generated-resolver"},"Using Assemblers in auto-generated Resolver"),Object(o.b)("p",null,"There is a new ",Object(o.b)("inlineCode",{parentName:"p"},"AssemblerClass")," option when using the ",Object(o.b)("inlineCode",{parentName:"p"},"NestjsQueryGraphQLModule")," to generate your resolver to using a custom ",Object(o.b)("inlineCode",{parentName:"p"},"Assembler"),"."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"When using the AssemblerClass option you don't need to specify the entity."))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.module.ts" {12-13,17-18}',title:'"todo-item.module.ts"',"{12-13,17-18}":!0},"import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';\nimport { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';\nimport { Module } from '@nestjs/common';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\nimport { TodoItemAssembler } from './todo-item.assembler';\n\n@Module({\n  imports: [\n    NestjsQueryGraphQLModule.forFeature({\n      imports: [NestjsQueryTypeOrmModule.forFeature([TodoItemEntity])],\n      // Register the assembler\n      assemblers: [TodoItemAssembler],\n      resolvers: [\n        {\n          DTOClass: TodoItemDTO,\n          // specify the assembler type to use.\n          AssemblerClass: TodoItemAssembler,\n        },\n      ],\n    }),\n  ],\n})\nexport class TodoItemModule {}\n\n")),Object(o.b)("h2",{id:"using-services-in-auto-generated-resolver"},"Using Services in auto-generated Resolver"),Object(o.b)("p",null,"There is a new ",Object(o.b)("inlineCode",{parentName:"p"},"ServiceClass")," option when using the ",Object(o.b)("inlineCode",{parentName:"p"},"NestjsQueryGraphQLModule")," to generate your resolver to a custom ",Object(o.b)("inlineCode",{parentName:"p"},"QueryService"),"."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"When using the ServiceClass option you don't need to specify the entity."))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts",metastring:'title="todo-item.module.ts" {12-13,17-18}',title:'"todo-item.module.ts"',"{12-13,17-18}":!0},"import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';\nimport { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';\nimport { Module } from '@nestjs/common';\nimport { TodoItemDTO } from './dto/todo-item.dto';\nimport { TodoItemEntity } from './todo-item.entity';\nimport { TodoItemService } from './todo-item.service';\n\n@Module({\n  imports: [\n    NestjsQueryGraphQLModule.forFeature({\n      imports: [NestjsQueryTypeOrmModule.forFeature([TodoItemEntity])],\n      // Register the the custom QueryService\n      services: [TodoItemService],\n      resolvers: [\n        {\n          DTOClass: TodoItemDTO,\n          // specify the QueryService type to use.\n          ServiceClass: TodoItemService,\n        },\n      ],\n    }),\n  ],\n})\nexport class TodoItemModule {}\n")))}l.isMDXComponent=!0},218:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),m=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=m(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=m(r),p=n,b=u["".concat(s,".").concat(p)]||u[p]||d[p]||a;return r?o.a.createElement(b,i(i({ref:t},l),{},{components:r})):o.a.createElement(b,i({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},219:function(e,t,r){"use strict";function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}},220:function(e,t,r){"use strict";var n=r(0),o=r(221);t.a=function(){const e=Object(n.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},221:function(e,t,r){"use strict";var n=r(0);const o=Object(n.createContext)(void 0);t.a=o},222:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(220),s=r(219),i=r(56),c=r.n(i);const l=37,m=39;t.a=function(e){const{lazy:t,block:r,defaultValue:i,values:u,groupId:d,className:p}=e,{tabGroupChoices:b,setTabGroupChoices:v}=Object(a.a)(),[y,f]=Object(n.useState)(i),g=n.Children.toArray(e.children),j=[];if(null!=d){const e=b[d];null!=e&&e!==y&&u.some((t=>t.value===e))&&f(e)}const O=e=>{const t=e.target,r=j.indexOf(t),n=g[r].props.value;f(n),null!=d&&(v(d,n),setTimeout((()=>{(function(e){const{top:t,left:r,bottom:n,right:o}=e.getBoundingClientRect(),{innerHeight:a,innerWidth:s}=window;return t>=0&&o<=s&&n<=a&&r>=0})(t)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c.a.tabItemActive),setTimeout((()=>t.classList.remove(c.a.tabItemActive)),2e3))}),150))},h=e=>{var t;let r;switch(e.keyCode){case m:{const t=j.indexOf(e.target)+1;r=j[t]||j[0];break}case l:{const t=j.indexOf(e.target)-1;r=j[t]||j[j.length-1];break}}null===(t=r)||void 0===t||t.focus()};return o.a.createElement("div",{className:"tabs-container"},o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":r},p)},u.map((({value:e,label:t})=>o.a.createElement("li",{role:"tab",tabIndex:y===e?0:-1,"aria-selected":y===e,className:Object(s.a)("tabs__item",c.a.tabItem,{"tabs__item--active":y===e}),key:e,ref:e=>j.push(e),onKeyDown:h,onFocus:O,onClick:O},t)))),t?Object(n.cloneElement)(g.filter((e=>e.props.value===y))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},g.map(((e,t)=>Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}},223:function(e,t,r){"use strict";var n=r(0),o=r.n(n);t.a=function({children:e,hidden:t,className:r}){return o.a.createElement("div",{role:"tabpanel",hidden:t,className:r},e)}}}]);