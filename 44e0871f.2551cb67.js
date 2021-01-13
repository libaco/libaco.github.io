(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),c=(n(0),n(88)),r={id:"best-practice",title:"Best practice",sidebar_label:"Best practice",slug:"/best-practice"},i={unversionedId:"best-practice",id:"best-practice",isDocsHomePage:!1,title:"Best practice",description:"In summary, if you want to gain the ultra performance of libaco, just keep the stack usage of the non-standalone non-main co at the point of calling aco_yield as small as possible. And be very careful if you want to pass the address of a local variable from one co to another co since the local variable is usually on the share stack. Allocating this kind of variables from the heap is always the wiser choice.",source:"@site/docs/best-practice.md",slug:"/best-practice",permalink:"/docs/best-practice",editUrl:"https://github.com/libaco/libaco.github.io/edit/master/docs/best-practice.md",version:"current",sidebar_label:"Best practice",sidebar:"docs",previous:{title:"API",permalink:"/docs/api"},next:{title:"Changelog",permalink:"/docs/changelog"}},l=[],s={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"In summary, if you want to gain the ultra performance of libaco, just keep the stack usage of the non-standalone non-main co at the point of calling ",Object(c.b)("inlineCode",{parentName:"p"},"aco_yield")," as small as possible. And be very careful if you want to pass the address of a local variable from one co to another co since the local variable is usually on the ",Object(c.b)("strong",{parentName:"p"},"share")," stack. Allocating this kind of variables from the heap is always the wiser choice."),Object(c.b)("p",null,"In detail, there are 5 tips:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{}),"       co_fp \n       /  \\\n      /    \\  \n    f1     f2\n   /  \\    / \\\n  /    \\  f4  \\\nyield  f3     f5\n")),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"The stack usage of main co has no direct influence to the performance of context switching between coroutines (since it has a standalone execution stack);"),Object(c.b)("li",{parentName:"ol"},"The stack usage of standalone non-main co has no direct influence to the performance of context switching between coroutines. But a huge amount of standalone non-main co would cost too much of virtual memory (due to the standalone stack), so it is not recommended to create huge amount of standalone non-main co in one thread;"),Object(c.b)("li",{parentName:"ol"},"The stack usage of non-standalone (share stack with other coroutines) non-main co when it is been yielded (i.e. call ",Object(c.b)("inlineCode",{parentName:"li"},"aco_yield")," to yield back to main co) has a big impact to the performance of context switching between coroutines, as already indicated by the benchmark results. In the diagram above, the stack usage of function f2, f3, f4 and f5 has no direct influence over the context switching performance since there are no ",Object(c.b)("inlineCode",{parentName:"li"},"aco_yield")," when they are executing, whereas the stack usage of co_fp and f1 dominates the value of ",Object(c.b)("inlineCode",{parentName:"li"},"co->save_stack.max_cpsz")," and has a big influence over the context switching performance.")),Object(c.b)("p",null,"The key to keeping the stack usage of a function as low as possible is to allocate the local variables (especially the big ones) on the heap and manage their lifecycle manually instead of allocating them on the stack by default. The ",Object(c.b)("inlineCode",{parentName:"p"},"-fstack-usage")," option of gcc is very helpful about this."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c"}),"int* gl_ptr;\n\nvoid inc_p(int* p){ (*p)++; }\n\nvoid co_fp0() {\n    int ct = 0;\n    gl_ptr = &ct; // line 7\n    aco_yield();\n    check(ct);\n    int* ptr = &ct;\n    inc_p(ptr);   // line 11\n    aco_exit();\n}\n\nvoid co_fp1() {\n    do_sth(gl_ptr); // line 16\n    aco_exit();\n}\n")),Object(c.b)("ol",{start:4},Object(c.b)("li",{parentName:"ol"},'In the above code snippet, we assume that co_fp0 & co_fp1 shares the same share stack (they are both non-main co) and the running sequence of them is "co_fp0 -> co_fp1 -> co_fp0". Since they are sharing the same stack, the address holding in ',Object(c.b)("inlineCode",{parentName:"li"},"gl_ptr")," in co_fp1 (line 16) has totally different semantics with the ",Object(c.b)("inlineCode",{parentName:"li"},"gl_ptr")," in line 7 of co_fp0, and that kind of code would probably corrupt the execution stack of co_fp1. But the line 11 is fine because variable ",Object(c.b)("inlineCode",{parentName:"li"},"ct")," and function ",Object(c.b)("inlineCode",{parentName:"li"},"inc_p")," are in the same coroutine context. Allocating that kind of variables (need to share with other coroutines) on the heap would simply solve such problems:")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c"}),"int* gl_ptr;\n\nvoid inc_p(int* p){ (*p)++; }\n\nvoid co_fp0() {\n    int* ct_ptr = malloc(sizeof(int));\n    assert(ct_ptr != NULL);\n    *ct_ptr = 0;\n    gl_ptr = ct_ptr;\n    aco_yield();\n    check(*ct_ptr);\n    int* ptr = ct_ptr;\n    inc_p(ptr);\n    free(ct_ptr);\n    gl_ptr = NULL;\n    aco_exit();\n}\n\nvoid co_fp1() {\n    do_sth(gl_ptr);\n    aco_exit();\n}\n")))}p.isMDXComponent=!0},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,h=u["".concat(r,".").concat(b)]||u[b]||f[b]||c;return n?o.a.createElement(h,i(i({ref:t},s),{},{components:n})):o.a.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,r=new Array(c);r[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var s=2;s<c;s++)r[s]=n[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);