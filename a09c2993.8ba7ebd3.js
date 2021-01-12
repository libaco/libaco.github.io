(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{82:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return b}));var r=a(3),n=a(7),i=(a(0),a(88)),c={id:"introduction",title:"Introduction",sidebar_label:"Introduction",slug:"/"},o={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Introduction",description:"libaco - A blazing fast and lightweight C asymmetric coroutine library.",source:"@site/docs/introduction.md",slug:"/",permalink:"https://libaco.org/docs/",editUrl:"https://github.com/libaco/libaco.github.io/edit/master/docs/introduction.md",version:"current",sidebar_label:"Introduction",sidebar:"docs",next:{title:"Description",permalink:"https://libaco.org/docs/description"}},s=[{value:"The name",id:"the-name",children:[]},{value:"Supported systems",id:"supported-systems",children:[]},{value:"Summary",id:"summary",children:[]},{value:"Contribute",id:"contribute",children:[]},{value:"Copyright and License",id:"copyright-and-license",children:[]}],l={toc:s};function b(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"libaco - A blazing fast and lightweight C asymmetric coroutine library."),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://travis-ci.org/hnes/libaco"}),Object(i.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/travis/hnes/libaco.svg?style=flat-square&&branch=master",alt:"Build Status Travis"}))),"\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/hnes/libaco/releases"}),Object(i.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/github/release/hnes/libaco/all.svg?style=flat-square",alt:"Releases"}))),"\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/hnes/libaco/blob/master/LICENSE"}),Object(i.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/github/license/hnes/libaco.svg?style=flat-square",alt:"LICENSE"}))),"\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/hnes/libaco/blob/master/README_zh.md"}),Object(i.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/badge/doc-en%20+%20%E4%B8%AD%E6%96%87-blue.svg?style=flat-square",alt:"\u4e2d\u6587\u6587\u6863"}))),"\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://twitter.com/intent/tweet?text=libaco+-+A+blazing+fast+and+lightweight+C+asymmetric+coroutine+library&url=https://github.com/hnes/libaco&via=00hnes"}),Object(i.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/twitter/url/http/shields.io.svg?style=social",alt:"Tweet"})))),Object(i.b)("h2",{id:"the-name"},"The name"),Object(i.b)("p",null,"The code name of this project is Arkenstone \ud83d\udc8e"),Object(i.b)("p",null,"Asymmetric COroutine & Arkenstone is the reason why it's been named ",Object(i.b)("inlineCode",{parentName:"p"},"aco"),"."),Object(i.b)("h2",{id:"supported-systems"},"Supported systems"),Object(i.b)("p",null,"Currently supports Sys V ABI of following"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Intel386 "),Object(i.b)("li",{parentName:"ul"},"x86-64.")),Object(i.b)("h2",{id:"summary"},"Summary"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Along with the implementation of a production-ready C coroutine library, here is a detailed documentation about how to implement a ",Object(i.b)("em",{parentName:"li"},"fastest")," and ",Object(i.b)("em",{parentName:"li"},"correct")," coroutine library and also with a strict ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"proof-of-correctness"}),"mathematical proof"),"."),Object(i.b)("li",{parentName:"ul"},"It has no more than 700 LOC but has the full functionality which you may want from a coroutine library."),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"benchmark"}),"benchmark")," part shows that a context switch between coroutines only takes about ",Object(i.b)("em",{parentName:"li"},"10 ns")," (in the case of standalone stack) on the AWS c5d.large machine."),Object(i.b)("li",{parentName:"ul"},"User could choose to create a new coroutine with a ",Object(i.b)("em",{parentName:"li"},"standalone stack")," or with a ",Object(i.b)("em",{parentName:"li"},"shared stack")," (could be shared with others)."),Object(i.b)("li",{parentName:"ul"},"It is extremely memory efficient: ",Object(i.b)("em",{parentName:"li"},"10,000,000")," coroutines simultaneously to run cost only ",Object(i.b)("em",{parentName:"li"},"2.8 GB")," physical memory (run with tcmalloc, each coroutine has a ",Object(i.b)("em",{parentName:"li"},"120B")," copy-stack size configuration).")),Object(i.b)("p",null,'The phrase "',Object(i.b)("em",{parentName:"p"},"fastest"),'" in above means the fastest context switching implementation which complies to the Sys V ABI of Intel386 or AMD64.'),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://travis-ci.org/hnes/libaco"}),Object(i.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/travis/hnes/libaco.svg?style=flat-square&&branch=master",alt:"Build Status Travis"}))),"\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/hnes/libaco/releases"}),Object(i.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/github/release/hnes/libaco/all.svg?style=flat-square",alt:"Releases"}))),"\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/hnes/libaco/blob/master/LICENSE"}),Object(i.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/github/license/hnes/libaco.svg?style=flat-square",alt:"LICENSE"}))),"\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/hnes/libaco/blob/master/README_zh.md"}),Object(i.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/badge/doc-en%20+%20%E4%B8%AD%E6%96%87-blue.svg?style=flat-square",alt:"\u4e2d\u6587\u6587\u6863"}))),"\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://twitter.com/intent/tweet?text=libaco+-+A+blazing+fast+and+lightweight+C+asymmetric+coroutine+library&url=https://github.com/hnes/libaco&via=00hnes"}),Object(i.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/twitter/url/http/shields.io.svg?style=social",alt:"Tweet"})))),Object(i.b)("h2",{id:"contribute"},"Contribute"),Object(i.b)("p",null,"Issues and PRs are welcome \ud83c\udf89\ud83c\udf89\ud83c\udf89"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/support"}),"See how to help us with the project.")),Object(i.b)("h2",{id:"copyright-and-license"},"Copyright and License"),Object(i.b)("p",null,"Copyright (C) 2018, by Sen Han ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"mailto:00hnes@gmail.com"}),"<00hnes@gmail.com>"),"."),Object(i.b)("p",null,"Under the Apache License, Version 2.0."),Object(i.b)("p",null,"See the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/hnes/libaco/blob/master/LICENSE"}),"LICENSE")," file for details."))}b.isMDXComponent=!0},88:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),b=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=b(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},h=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(a),h=r,u=p["".concat(c,".").concat(h)]||p[h]||m[h]||i;return a?n.a.createElement(u,o(o({ref:t},l),{},{components:a})):n.a.createElement(u,o({ref:t},l))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,c=new Array(i);c[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var l=2;l<i;l++)c[l]=a[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);