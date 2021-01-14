(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{82:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(3),r=a(7),i=(a(0),a(88)),o={id:"introduction",title:"Introduction",sidebar_label:"Introduction",slug:"/"},c={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Introduction",description:"libaco - A blazing fast and lightweight C asymmetric coroutine library.",source:"@site/docs/introduction.md",slug:"/",permalink:"/docs/",editUrl:"https://github.com/libaco/libaco.github.io/edit/main/docs/introduction.md",version:"current",sidebar_label:"Introduction",sidebar:"docs",next:{title:"Description",permalink:"/docs/description"}},l=[{value:"The name",id:"the-name",children:[]},{value:"Supported systems",id:"supported-systems",children:[]},{value:"Summary",id:"summary",children:[]},{value:"Contribute",id:"contribute",children:[]},{value:"Copyright and License",id:"copyright-and-license",children:[]}],s={toc:l};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("span",{class:"display-light-mode"},Object(i.b)("img",{src:"/img/libaco_logo_blue.svg",class:"introduction-logo"})),Object(i.b)("span",{class:"display-dark-mode"},Object(i.b)("img",{src:"/img/libaco_logo_white.svg",class:"introduction-logo"})),Object(i.b)("p",null,"libaco - A blazing fast and lightweight C asymmetric coroutine library."),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://travis-ci.org/hnes/libaco"}),Object(i.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/travis/hnes/libaco.svg?style=flat-square&&branch=master",alt:"Build Status Travis"}))),"\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/hnes/libaco/releases"}),Object(i.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/github/release/hnes/libaco/all.svg?style=flat-square",alt:"Releases"}))),"\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/hnes/libaco/blob/master/LICENSE"}),Object(i.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/github/license/hnes/libaco.svg?style=flat-square",alt:"LICENSE"}))),"\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/hnes/libaco/blob/master/README_zh.md"}),Object(i.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/badge/doc-en%20+%20%E4%B8%AD%E6%96%87-blue.svg?style=flat-square",alt:"\u4e2d\u6587\u6587\u6863"}))),"\n",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://twitter.com/intent/tweet?text=libaco+-+A+blazing+fast+and+lightweight+C+asymmetric+coroutine+library&url=https://github.com/hnes/libaco&via=00hnes"}),Object(i.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/twitter/url/http/shields.io.svg?style=social",alt:"Tweet"})))),Object(i.b)("h2",{id:"the-name"},"The name"),Object(i.b)("p",null,"The code name of this project is Arkenstone \ud83d\udc8e"),Object(i.b)("p",null,"Asymmetric COroutine & Arkenstone is the reason why it's been named ",Object(i.b)("inlineCode",{parentName:"p"},"aco"),"."),Object(i.b)("h2",{id:"supported-systems"},"Supported systems"),Object(i.b)("p",null,"Currently supports Sys V ABI of following"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Intel386 "),Object(i.b)("li",{parentName:"ul"},"x86-64.")),Object(i.b)("h2",{id:"summary"},"Summary"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Along with the implementation of a production-ready C coroutine library, here is a detailed documentation about how to implement a ",Object(i.b)("em",{parentName:"li"},"fastest")," and ",Object(i.b)("em",{parentName:"li"},"correct")," coroutine library and also with a strict ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"proof-of-correctness"}),"mathematical proof"),"."),Object(i.b)("li",{parentName:"ul"},"It has no more than 700 LOC but has the full functionality which you may want from a coroutine library."),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"benchmark"}),"benchmark")," part shows that a context switch between coroutines only takes about ",Object(i.b)("em",{parentName:"li"},"10 ns")," (in the case of standalone stack) on the AWS c5d.large machine."),Object(i.b)("li",{parentName:"ul"},"User could choose to create a new coroutine with a ",Object(i.b)("em",{parentName:"li"},"standalone stack")," or with a ",Object(i.b)("em",{parentName:"li"},"shared stack")," (could be shared with others)."),Object(i.b)("li",{parentName:"ul"},"It is extremely memory efficient: ",Object(i.b)("em",{parentName:"li"},"10,000,000")," coroutines simultaneously to run cost only ",Object(i.b)("em",{parentName:"li"},"2.8 GB")," physical memory (run with tcmalloc, each coroutine has a ",Object(i.b)("em",{parentName:"li"},"120B")," copy-stack size configuration).")),Object(i.b)("p",null,'The phrase "',Object(i.b)("em",{parentName:"p"},"fastest"),'" in above means the fastest context switching implementation which complies to the Sys V ABI of Intel386 or AMD64.'),Object(i.b)("h2",{id:"contribute"},"Contribute"),Object(i.b)("p",null,"Issues and PRs are welcome \ud83c\udf89\ud83c\udf89\ud83c\udf89"),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/support"}),"See how to help us with the project.")),Object(i.b)("h2",{id:"copyright-and-license"},"Copyright and License"),Object(i.b)("p",null,"Copyright (C) 2018, by Sen Han ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"mailto:00hnes@gmail.com"}),"<00hnes@gmail.com>"),"."),Object(i.b)("p",null,"Under the Apache License, Version 2.0."),Object(i.b)("p",null,"See the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/hnes/libaco/blob/master/LICENSE"}),"LICENSE")," file for details."))}b.isMDXComponent=!0},88:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=b(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(a),m=n,h=u["".concat(o,".").concat(m)]||u[m]||p[m]||i;return a?r.a.createElement(h,c(c({ref:t},s),{},{components:a})):r.a.createElement(h,c({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=a[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);