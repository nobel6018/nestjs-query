(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return a})),n.d(t,"default",(function(){return p}));var r=n(3),o=(n(0),n(218));const i={title:"Getting Started"},s={unversionedId:"persistence/typegoose/getting-started",id:"persistence/typegoose/getting-started",isDocsHomePage:!1,title:"Getting Started",description:"The @nestjs-query/query-typegoose package provides an implementation of @nestjs-query/core QueryService.",source:"@site/docs/persistence/typegoose/getting-started.md",slug:"/persistence/typegoose/getting-started",permalink:"/nestjs-query/docs/persistence/typegoose/getting-started",editUrl:"https://github.com/doug-martin/nestjs-query/edit/master/documentation/docs/persistence/typegoose/getting-started.md",version:"current",sidebar:"docs",previous:{title:"Serialization",permalink:"/nestjs-query/docs/persistence/mongoose/serialization"},next:{title:"Relations",permalink:"/nestjs-query/docs/persistence/typegoose/relations"}},a=[{value:"Installation",id:"installation",children:[]},{value:"Docs",id:"docs",children:[]}],c={toc:a};function p({components:e,...t}){return Object(o.b)("wrapper",Object(r.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"@nestjs-query/query-typegoose")," package provides an implementation of ",Object(o.b)("inlineCode",{parentName:"p"},"@nestjs-query/core")," ",Object(o.b)("a",{parentName:"p",href:"/nestjs-query/docs/concepts/services"},"QueryService"),"."),Object(o.b)("p",null,"This package is built using ",Object(o.b)("a",{parentName:"p",href:"https://typegoose.github.io/typegoose/"},"typegoose")," and ",Object(o.b)("a",{parentName:"p",href:"https://github.com/kpfromer/nestjs-typegoose#readme"},"nestjs-typegoose"),". If you are unfamiliar with them I suggest you read their documentation first."),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/nestjs-query/docs/introduction/install#nestjs-queryquery-typegoose"},"Installation Docs")),Object(o.b)("h2",{id:"docs"},"Docs"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Read the ",Object(o.b)("a",{parentName:"li",href:"/nestjs-query/docs/persistence/services"},"QueryService docs")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/nestjs-query/docs/persistence/typegoose/relations"},"Relations")," - How to work with relations/references in ",Object(o.b)("inlineCode",{parentName:"li"},"typegoose")," with ",Object(o.b)("inlineCode",{parentName:"li"},"nestjs-query")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/nestjs-query/docs/persistence/typegoose/custom-service"},"Custom Service")," - Example custom service"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/nestjs-query/docs/persistence/typegoose/serialization"},"Serialization")," - How to serialize ",Object(o.b)("inlineCode",{parentName:"li"},"typegoose")," models.")))}p.isMDXComponent=!0},218:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return y}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,y=u["".concat(s,".").concat(d)]||u[d]||b[d]||i;return n?o.a.createElement(y,a(a({ref:t},p),{},{components:n})):o.a.createElement(y,a({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var p=2;p<i;p++)s[p]=n[p];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);