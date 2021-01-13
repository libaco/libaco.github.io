(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{131:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/proof_0-aad6132b292e6ad91aab751083896912.png"},132:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/proof_1-2bd90cf06f075ed4b0b2bf14ec67b2f4.png"},133:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/proof_2-e2e1be4475f2c0275dfcc672be678a24.png"},134:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/proof_3-3494602e4ab06b6d01c9f4765417421c.png"},74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(3),o=n(7),r=(n(0),n(88)),c={id:"proof-of-correctness",title:"Proof of Correctness",sidebar_label:"Proof of Correctness",slug:"/proof-of-correctness"},i={unversionedId:"proof-of-correctness",id:"proof-of-correctness",isDocsHomePage:!1,title:"Proof of Correctness",description:"It is essential to be very familiar with the standard of Sys V ABI of intel386 and x86-64 before you start to implement or prove a coroutine library.",source:"@site/docs/proof-of-correctness.md",slug:"/proof-of-correctness",permalink:"https://libaco.org/docs/proof-of-correctness",editUrl:"https://github.com/libaco/libaco.github.io/edit/master/docs/proof-of-correctness.md",version:"current",sidebar_label:"Proof of Correctness",sidebar:"docs",previous:{title:"Benchmark",permalink:"https://libaco.org/docs/benchmark"}},s=[{value:"Running Model",id:"running-model",children:[]},{value:"Mathematical Induction",id:"mathematical-induction",children:[]},{value:"Miscellaneous",id:"miscellaneous",children:[{value:"Red Zone",id:"red-zone",children:[]},{value:"Stack Pointer",id:"stack-pointer",children:[]}]}],l={toc:s};function b(e){var t=e.components,c=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,c,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"It is essential to be very familiar with the standard of ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/hjl-tools/x86-psABI/wiki/X86-psABI"}),"Sys V ABI of intel386 and x86-64")," before you start to implement or prove a coroutine library."),Object(r.b)("p",null,"The proof below has no direct description about the IP (instruction pointer), SP (stack pointer) and the saving/restoring between the private save stack and the share stack, since these things are pretty trivial and easy to understand when they are compared with the ABI constraints stuff."),Object(r.b)("h2",{id:"running-model"},"Running Model"),Object(r.b)("p",null,"In the OS thread, the main coroutine ",Object(r.b)("inlineCode",{parentName:"p"},"main_co")," is the coroutine who should be created and started to execute first, before all the other non-main coroutines do."),Object(r.b)("p",null,"The next diagram is a simple example of the context switching between main_co and co."),Object(r.b)("p",null,"In this proof, we just assume that we are under Sys V ABI of intel386 since there is no fundamental differences between the Sys V ABI of intel386 and x86-64. We also assume that none of the code would change the control words of FPU and MXCSR."),Object(r.b)("p",null,Object(r.b)("img",{alt:"proof_0",src:n(131).default})),Object(r.b)("p",null,"The next diagram is actually a symmetric coroutine's running model which has an unlimited number of non-main co-s and one main co. This is fine because the asymmetric coroutine is just a special case of the symmetric coroutine. To prove the correctness of the symmetric coroutine is a little more challenging than of the asymmetric coroutine and thus more fun it would become. (libaco only implemented the API of asymmetric coroutine currently because the semantic meaning of the asymmetric coroutine API is far more easy to understand and to use than the symmetric coroutine does.)"),Object(r.b)("p",null,Object(r.b)("img",{alt:"proof_1",src:n(132).default})),Object(r.b)("p",null,"Since the main co is the 1st coroutine starts to run, the 1st context switching in this OS thread must be in the form of ",Object(r.b)("inlineCode",{parentName:"p"},"acosw(main_co, co)")," where the 2nd argument ",Object(r.b)("inlineCode",{parentName:"p"},"co")," is a non-main co."),Object(r.b)("h2",{id:"mathematical-induction"},"Mathematical Induction"),Object(r.b)("p",null,"It is easy to prove that there only exists two kinds of state transfer in the above diagram:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"yielded state co \u2192 init state co"),Object(r.b)("li",{parentName:"ul"},"yielded state co \u2192 yielded state co")),Object(r.b)("p",null,"To prove the correctness of ",Object(r.b)("inlineCode",{parentName:"p"},"void* acosw(aco_t* from_co, aco_t* to_co)")," implementation is equivalent to prove all the co constantly comply to the constraints of Sys V ABI before and after the call of ",Object(r.b)("inlineCode",{parentName:"p"},"acosw"),". We assume that the other part of binary code (except ",Object(r.b)("inlineCode",{parentName:"p"},"acosw"),") in the co had already comply to the ABI (they are normally generated by the compiler correctly)."),Object(r.b)("p",null,"Here is a summary of the registers' constraints in the Function Calling Convention of Intel386 Sys V ABI:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"Registers' usage in the calling convention of the Intel386 System V ABI:\n    caller saved (scratch) registers:\n        C1.0: EAX\n            At the entry of a function call:\n                could be any value\n            After the return of `acosw`:\n                hold the return value for `acosw`\n        C1.1: ECX,EDX\n            At the entry of a function call:\n                could be any value\n            After the return of `acosw`:\n                could be any value\n        C1.2: Arithmetic flags, x87 and mxcsr flags\n            At the entry of a function call:\n                could be any value\n            After the return of `acosw`:\n                could be any value\n        C1.3: ST(0-7)\n            At the entry of a function call:\n                the stack of FPU must be empty\n            After the return of `acosw`:\n                the stack of FPU must be empty\n        C1.4: Direction flag\n            At the entry of a function call:\n                DF must be 0\n            After the return of `acosw`:\n                DF must be 0\n        C1.5: others: xmm*,ymm*,mm*,k*...\n            At the entry of a function call:\n                could be any value\n            After the return of `acosw`:\n                could be any value\n    callee saved registers:\n        C2.0: EBX,ESI,EDI,EBP\n            At the entry of a function call:\n                could be any value\n            After the return of `acosw`:\n                must be the same as it is at the entry of `acosw` \n        C2.1: ESP\n            At the entry of a function call:\n                must be a valid stack pointer\n                (alignment of 16 bytes, retaddr and etc...)\n            After the return of `acosw`:\n                must be the same as it is before the call of `acosw`\n        C2.2: control word of FPU & mxcsr\n            At the entry of a function call:\n                could be any configuration\n            After the return of `acosw`:\n                must be the same as it is before the call of `acosw` \n                (unless the caller of `acosw` assume `acosw` may    \\\n                change the control words of FPU or MXCSR on purpose \\\n                like `fesetenv`)\n")),Object(r.b)("p",null,'(For Intel386, the register usage is defined in the "P13 - Table 2.3: Register Usage" of ',Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/hjl-tools/x86-psABI/wiki/X86-psABI"}),"Sys V ABI Intel386 V1.1"),', and for AMD64 is in "P23 - Figure 3.4: Register Usage" of ',Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/hjl-tools/x86-psABI/wiki/X86-psABI"}),"Sys V ABI AMD64 V1.0"),".)"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Proof:")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"yielded state co -> init state co:")),Object(r.b)("p",null,Object(r.b)("img",{alt:"proof_2",src:n(133).default})),Object(r.b)("p",null,'The diagram above is for the 1st case: "yielded state co -> init state co".'),Object(r.b)("p",null,"Constraints: C 1.0, 1.1, 1.2, 1.5 (",Object(r.b)("em",{parentName:"p"},"satisfied")," \u2713 )"),Object(r.b)("p",null,"The scratch registers below can hold any value at the entry of a function:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"EAX,ECX,EDX\nXMM*,YMM*,MM*,K*...\nstatus bits of EFLAGS,FPU,MXCSR\n")),Object(r.b)("p",null,"Constraints: C 1.3, 1.4 (",Object(r.b)("em",{parentName:"p"},"satisfied")," \u2713 )"),Object(r.b)("p",null,"Since the stack of FPU must already be empty and the DF must already be 0 before ",Object(r.b)("inlineCode",{parentName:"p"},"acosw(co, to_co)")," was called (the binary code of co is already complied to the ABI), the constraint 1.3 and 1.4 is complied by ",Object(r.b)("inlineCode",{parentName:"p"},"acosw"),"."),Object(r.b)("p",null,"Constraints: C 2.0, 2.1, 2.2 (",Object(r.b)("em",{parentName:"p"},"satisfied")," \u2713 )"),Object(r.b)("p",null,"C 2.0 & 2.1 is already satisfied. Since we already assumed that nobody will change the control words of FPU and MXCSR, C 2.2 is satisfied too."),Object(r.b)("ol",{start:2},Object(r.b)("li",{parentName:"ol"},"yielded state co -> yielded state co:")),Object(r.b)("p",null,Object(r.b)("img",{alt:"proof_3",src:n(134).default})),Object(r.b)("p",null,"The diagram above is for the 2nd case: yielded state co -> yielded state co."),Object(r.b)("p",null,"Constraints: C 1.0 (",Object(r.b)("em",{parentName:"p"},"satisfied")," \u2713 )"),Object(r.b)("p",null,"EAX already holding the return value when ",Object(r.b)("inlineCode",{parentName:"p"},"acosw")," returns back to to_co (resume)."),Object(r.b)("p",null,"Constraints: C 1.1, 1.2, 1.5 (",Object(r.b)("em",{parentName:"p"},"satisfied")," \u2713 )"),Object(r.b)("p",null,"The scratch registers below can hold any value at the entry of a function and after the return of ",Object(r.b)("inlineCode",{parentName:"p"},"acosw"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"ECX,EDX\nXMM*,YMM*,MM*,K*...\nstatus bits of EFLAGS,FPU,MXCSR\n")),Object(r.b)("p",null,"Constraints: C 1.3, 1.4 (",Object(r.b)("em",{parentName:"p"},"satisfied")," \u2713 )"),Object(r.b)("p",null,"Since the stack of FPU must already be empty and the DF must already be 0 before ",Object(r.b)("inlineCode",{parentName:"p"},"acosw(co, to_co)")," was called (the binary code of co is already complied to the ABI), the constraint 1.3 and 1.4 is complied by ",Object(r.b)("inlineCode",{parentName:"p"},"acosw"),"."),Object(r.b)("p",null,"Constraints: C 2.0, 2.1, 2.2 (",Object(r.b)("em",{parentName:"p"},"satisfied")," \u2713 )"),Object(r.b)("p",null,"C 2.0 & 2.1 is satisfied because there is saving & restoring of the callee saved registers when ",Object(r.b)("inlineCode",{parentName:"p"},"acosw")," been called/returned. Since we already assumed that nobody will change the control words of FPU and MXCSR, C 2.2 is satisfied too."),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},"Mathematical induction:")),Object(r.b)("p",null,"The 1st ",Object(r.b)("inlineCode",{parentName:"p"},"acosw")," in the thread must be the 1st case: yielded state co -> init state co, and all the next ",Object(r.b)("inlineCode",{parentName:"p"},"acosw"),' must be one of the 2 case above. Sequentially, we could prove that "all the co constantly comply to the constraints of Sys V ABI before and after the call of ',Object(r.b)("inlineCode",{parentName:"p"},"acosw"),'". Thus, the proof is finished.'),Object(r.b)("h2",{id:"miscellaneous"},"Miscellaneous"),Object(r.b)("h3",{id:"red-zone"},"Red Zone"),Object(r.b)("p",null,"There is a new thing called ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Red_zone_(computing)"}),"red zone")," in System V ABI x86-64:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"The 128-byte area beyond the location pointed to by %rsp is considered to be reserved and shall not be modified by signal or interrupt handlers. Therefore, functions may use this area for temporary data that is not needed across function calls. In particular, leaf functions may use this area for their entire stack frame, rather than adjusting the stack pointer in the prologue and epilogue. This area is known as the red zone.")),Object(r.b)("p",null,'Since the red zone is "not preserved by the callee", we just do not care about it at all in the context switching between coroutines (because the ',Object(r.b)("inlineCode",{parentName:"p"},"acosw")," is a leaf function)."),Object(r.b)("h3",{id:"stack-pointer"},"Stack Pointer"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"The end of the input argument area shall be aligned on a 16 (32 or 64, if ","_","_","m256 or ","_","_","m512 is passed on stack) byte boundary. In other words, the value (%esp + 4) is always a multiple of 16 (32 or 64) when control is transferred to the function entry point. The stack pointer, %esp, always points to the end of the latest allocated stack frame."),Object(r.b)("p",{parentName:"blockquote"},"\u2014 Intel386-psABI-1.1:2.2.2 The Stack Frame")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"The stack pointer, %rsp, always points to the end of the latest allocated stack frame."),Object(r.b)("p",{parentName:"blockquote"},"\u2014 Sys V ABI AMD64 Version 1.0:3.2.2 The Stack Frame")),Object(r.b)("p",null,"Here is a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Tencent/libco/blob/v1.0/coctx_swap.S#L27"}),"bug example")," in Tencent's libco. The ABI states that the ",Object(r.b)("inlineCode",{parentName:"p"},"(E|R)SP")," should always point to the end of the latest allocated stack frame. But in file ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Tencent/libco/blob/v1.0/coctx_swap.S#L27"}),"coctx_swap.S")," of libco, the ",Object(r.b)("inlineCode",{parentName:"p"},"(E|R)SP")," had been used to address the memory on the heap."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"By default, the signal handler  is invoked  on  the normal process stack."),"  It is possible to arrange that the signal handler uses an alternate stack; see sigalstack(2)  for  a discussion of how to do this and when it might be useful."),Object(r.b)("p",{parentName:"blockquote"},"\u2014 man 7 signal : Signal dispositions")),Object(r.b)("p",null,"Terrible things may happen if the ",Object(r.b)("inlineCode",{parentName:"p"},"(E|R)SP"),"  is pointing to the data structure on the heap when signal comes. (Using the ",Object(r.b)("inlineCode",{parentName:"p"},"breakpoint")," and ",Object(r.b)("inlineCode",{parentName:"p"},"signal")," commands of gdb could produce such bug conveniently. Although by using ",Object(r.b)("inlineCode",{parentName:"p"},"sigalstack")," to change the default signal stack could alleviate the problem, but still, that kind of usage of ",Object(r.b)("inlineCode",{parentName:"p"},"(E|R)SP")," still violates the ABI.)"))}b.isMDXComponent=!0},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,h=u["".concat(c,".").concat(d)]||u[d]||p[d]||r;return n?o.a.createElement(h,i(i({ref:t},l),{},{components:n})):o.a.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<r;l++)c[l]=n[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);