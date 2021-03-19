(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{124:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return a})),n.d(t,"default",(function(){return l}));var r=n(3),o=(n(0),n(218));const i={title:"Getting Started"},s={unversionedId:"persistence/mongoose/getting-started",id:"persistence/mongoose/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"The @nestjs-query/query-mongoose package provides an implementation of @nestjs-query/core QueryService.",source:"@site/docs/persistence/mongoose/getting-started.md",slug:"/persistence/mongoose/getting-started",permalink:"/nestjs-query/docs/persistence/mongoose/getting-started",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/documentation/docs/persistence/mongoose/getting-started.md",version:"current",sidebar:"docs",previous:{title:"Serialization",permalink:"/nestjs-query/docs/persistence/sequelize/serialization"},next:{title:"Relations",permalink:"/nestjs-query/docs/persistence/mongoose/relations"}},a=[{value:"Installation",id:"installation",children:[]},{value:"Docs",id:"docs",children:[]}],c={toc:a};function l({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"@nestjs-query/query-mongoose")," package provides an implementation of ",Object(o.b)("inlineCode",{parentName:"p"},"@nestjs-query/core")," ",Object(o.b)("a",{parentName:"p",href:"/nestjs-query/docs/concepts/services"},"QueryService"),"."),Object(o.b)("p",null,"This package is built using ",Object(o.b)("a",{parentName:"p",href:"https://mongoosejs.com/"},"mongoose")," and ",Object(o.b)("a",{parentName:"p",href:"https://docs.nestjs.com/techniques/mongodb"},"@nestjs/mongoose"),". If you are unfamiliar with them I suggest you read their documentation first."),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/nestjs-query/docs/introduction/install#nestjs-queryquery-mongoose"},"Installation Docs")),Object(o.b)("h2",{id:"docs"},"Docs"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Read the ",Object(o.b)("a",{parentName:"li",href:"/nestjs-query/docs/persistence/services"},"QueryService docs")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/nestjs-query/docs/persistence/mongoose/relations"},"Relations")," - How to work with relations/references in ",Object(o.b)("inlineCode",{parentName:"li"},"mongoose")," with ",Object(o.b)("inlineCode",{parentName:"li"},"nestjs-query")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/nestjs-query/docs/persistence/mongoose/custom-service"},"Custom Service")," - Example custom service"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/nestjs-query/docs/persistence/mongoose/serialization"},"Serialization")," - How to serialize ",Object(o.b)("inlineCode",{parentName:"li"},"sequelize")," models. ")))}l.isMDXComponent=!0},218:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,b=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return n?o.a.createElement(b,a(a({ref:t},l),{},{components:n})):o.a.createElement(b,a({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);