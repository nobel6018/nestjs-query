(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{127:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),a=(r(0),r(218));const o={title:"Getting Started"},i={unversionedId:"graphql/getting-started",id:"graphql/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"The @nestjs-query/query-graphql package provided base Resolvers and graphql type classes to make creating code-first graphql CRUD applications easy.",source:"@site/docs/graphql/getting-started.md",slug:"/graphql/getting-started",permalink:"/nestjs-query/docs/graphql/getting-started",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/documentation/docs/graphql/getting-started.md",version:"current",sidebar:"docs",previous:{title:"Serialization",permalink:"/nestjs-query/docs/persistence/typegoose/serialization"},next:{title:"DTOs",permalink:"/nestjs-query/docs/graphql/dtos"}},s=[{value:"Installation",id:"installation",children:[{value:"Docs",id:"docs",children:[]}]}],c={toc:s};function l({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"@nestjs-query/query-graphql")," package provided base ",Object(a.b)("inlineCode",{parentName:"p"},"Resolvers")," and graphql type classes to make creating code-first graphql CRUD applications easy."),Object(a.b)("h2",{id:"installation"},"Installation"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"/nestjs-query/docs/introduction/install#nestjs-queryquery-graphql"},"Installation Docs")),Object(a.b)("h3",{id:"docs"},"Docs"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/nestjs-query/docs/graphql/dtos"},"DTOs")," - Documentation about the use of DTOs and associated annotations."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/nestjs-query/docs/graphql/resolvers"},"Resolvers")," - Documentation about crud resolvers and their usage."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/nestjs-query/docs/graphql/queries"},"Queries")," - Documentation about the provided graphql query endpoints."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/nestjs-query/docs/graphql/mutations"},"Mutations")," -  Documentation about the provided graphql mutation endpoints."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/nestjs-query/docs/graphql/hooks"},"Hooks")," -  Documentation about hooks (e.g before create one)."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/nestjs-query/docs/graphql/hooks"},"Authorization")," -  Documentation about authorization."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/nestjs-query/docs/graphql/subscriptions"},"Subscriptions")," -  Documentation about enabling subscriptions."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/nestjs-query/docs/graphql/relations"},"Relations")," -  Documentation about specifying relations in your resolvers."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/nestjs-query/docs/graphql/types"},"Types")," - Documentation for the provided graphql types."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/nestjs-query/docs/graphql/federation"},"Federation")," - Documentation for using ",Object(a.b)("inlineCode",{parentName:"li"},"nestjs-query")," with federation.")))}l.isMDXComponent=!0},218:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return r?a.a.createElement(m,s(s({ref:t},l),{},{components:r})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);