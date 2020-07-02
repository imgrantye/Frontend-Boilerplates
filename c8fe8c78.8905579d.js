(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{151:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(2),o=r(9),a=(r(0),r(155)),c={id:"node-ts",title:"Node + TypeScript"},i={id:"node-ts",isDocsHomePage:!1,title:"Node + TypeScript",description:"Node and TypeScript - Boilerplate Features",source:"@site/docs/node-ts.md",permalink:"/docs/node-ts",editUrl:"https://github.com/ckgrafico/frontend-boilerplates/edit/docs/website/docs/node-ts.md",sidebar:"someSidebar",previous:{title:"Nuxt + TypeScript + SASS",permalink:"/docs/nuxt"}},s=[{value:"\ud83d\udcda Setup and scripts",id:"-setup-and-scripts",children:[]}],l={rightToc:s};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{align:"center"},"Node and TypeScript - Boilerplate Features ",Object(a.b)("img",{src:"https://raw.githubusercontent.com/CKGrafico/Frontend-Boilerplates/docs/resources/techs/nodets.png",align:"left",width:"35",title:"Boilerplate"})),Object(a.b)("p",{align:"center"},Object(a.b)("a",{href:"https://codesandbox.io/s/github/CKGrafico/Frontend-Boilerplates/tree/node-ts"},Object(a.b)("img",{src:"https://img.shields.io/badge/CodeSandbox-template-blue?logo=codesandbox",alt:"Open in CodeSandbox"})),Object(a.b)("a",{href:"https://travis-ci.org/CKGrafico/Frontend-Boilerplates"},Object(a.b)("img",{src:"https://travis-ci.org/CKGrafico/Frontend-Boilerplates.svg?branch=basic",alt:"Build Status"})),Object(a.b)("a",{href:"https://github.com/CKGrafico/Frontend-Boilerplates/releases"},Object(a.b)("img",{src:"https://img.shields.io/badge/Update%20status-Rarely-orange",alt:"Update Status"})),Object(a.b)("a",{href:"https://github.com/CKGrafico/Frontend-Boilerplates/blob/basic/LICENSE"},Object(a.b)("img",{src:"https://img.shields.io/github/license/CKGrafico/Frontend-Boilerplates.svg",alt:"GitHub license"})),Object(a.b)("a",{href:"https://github.com/CKGrafico/Frontend-Boilerplates/network"},Object(a.b)("img",{src:"https://img.shields.io/github/forks/CKGrafico/Frontend-Boilerplates.svg",alt:"GitHub forks"})),Object(a.b)("a",{href:"https://github.com/CKGrafico/Frontend-Boilerplates/issues"},Object(a.b)("img",{src:"https://img.shields.io/github/issues/CKGrafico/Frontend-Boilerplates.svg",alt:"GitHub issues"}))),Object(a.b)("p",null,"Most relevant technologies used in the Boilerplate:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Express:")," The Node Framework."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"TypeScript:")," All the code uses TypeScript."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"SASS:")," Scss structure with good practises."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"Linting:")," Linting for JavaScript and SASS."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"BEM (Non strict) + BEMIT:")," Some conventions for CSS classes.")),Object(a.b)("h3",{id:"-setup-and-scripts"},"\ud83d\udcda Setup and scripts"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Before start ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/CKGrafico/Frontend-Boilerplates/archive/node-ts.zip"}),"download")," or clone the boilerplate.\n",Object(a.b)("strong",{parentName:"p"},"Install")," all the dependencies.")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"$ npm install\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Run")," the project for local development."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"$ npm start\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Build")," the project for a production environment."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"$ npm run build\n")))}p.isMDXComponent=!0},155:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},b=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=p(r),d=n,m=b["".concat(c,".").concat(d)]||b[d]||u[d]||a;return r?o.a.createElement(m,i(i({ref:t},l),{},{components:r})):o.a.createElement(m,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);