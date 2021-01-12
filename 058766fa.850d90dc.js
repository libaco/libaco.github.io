(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{68:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(3),o=n(7),r=(n(0),n(88)),i={id:"build-and-test",title:"Build and test",sidebar_label:"Build and test",slug:"/build-and-test"},l={unversionedId:"build-and-test",id:"build-and-test",isDocsHomePage:!1,title:"Build and test",description:"Build library",source:"@site/docs/build-and-test.md",slug:"/build-and-test",permalink:"https://libaco.org/docs/build-and-test",editUrl:"https://github.com/libaco/libaco.github.io/edit/master/docs/build-and-test.md",version:"current",sidebar_label:"Build and test",sidebar:"docs",previous:{title:"Description",permalink:"https://libaco.org/docs/description"},next:{title:"Tutorials",permalink:"https://libaco.org/docs/tutorials"}},c=[{value:"Build library",id:"build-library",children:[]},{value:"Test",id:"test",children:[{value:"Build",id:"build",children:[]},{value:"Run tests",id:"run-tests",children:[]}]},{value:"Build flags",id:"build-flags",children:[]}],b={toc:c};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"build-library"},"Build library"),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},Object(r.b)("strong",{parentName:"em"},"Note"),": Please use ",Object(r.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/hnes/libaco/releases"}),"releases")," instead of the ",Object(r.b)("inlineCode",{parentName:"em"},"master")," branch to build the final binary.")),Object(r.b)("p",null,"Libaco is meant to be copied into to your project and therefore no build tools is available to create a shared or static library."),Object(r.b)("h2",{id:"test"},"Test"),Object(r.b)("p",null,"Want to make sure that the library is working on your system? We got you covered. Follow the steps below."),Object(r.b)("h3",{id:"build"},"Build"),Object(r.b)("p",null,"To build the test suites of libaco"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"mkdir output\nbash make.sh\n")),Object(r.b)("p",null,"There is also some detailed options in make.sh. Read more about the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#build-flags"}),"build flags here.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$bash make.sh -h\nUsage: make.sh [-o <no-m32|no-valgrind>] [-h]\n\nExample:\n    # default build\n    bash make.sh\n    # build without the i386 binary output\n    bash make.sh -o no-m32\n    # build without the valgrind supported binary output\n    bash make.sh -o no-valgrind\n    # build without the valgrind supported and i386 binary output\n    bash make.sh -o no-valgrind -o no-m32\n")),Object(r.b)("p",null,"In short, using ",Object(r.b)("inlineCode",{parentName:"p"},"-o no-valgrind ")," if you have no valgrind headers installed, ",Object(r.b)("inlineCode",{parentName:"p"},"-o no-m32")," if you have no 32-bit gcc development tools installed on a AMD64 host."),Object(r.b)("p",null,"On MacOS, you need to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://apple.stackexchange.com/questions/69223/how-to-replace-mac-os-x-utilities-with-gnu-core-utilities"}),"replace")," the default ",Object(r.b)("inlineCode",{parentName:"p"},"sed")," and ",Object(r.b)("inlineCode",{parentName:"p"},"grep")," commands of MacOS with the GNU ",Object(r.b)("inlineCode",{parentName:"p"},"sed")," and ",Object(r.b)("inlineCode",{parentName:"p"},"grep")," to run ",Object(r.b)("inlineCode",{parentName:"p"},"make.sh")," and ",Object(r.b)("inlineCode",{parentName:"p"},"test.sh")," (such requirement would be removed in the future):"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ brew install grep --with-default-names\n$ brew install gnu-sed --with-default-names\n")),Object(r.b)("h3",{id:"run-tests"},"Run tests"),Object(r.b)("p",null,"To run the tests, simply run the following."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"cd output\nbash ../test.sh\n")),Object(r.b)("h2",{id:"build-flags"},"Build flags"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"-m32")," option of gcc could help you to build the i386 application of libaco on a x86_64 machine."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"C macro: ",Object(r.b)("inlineCode",{parentName:"li"},"ACO_CONFIG_SHARE_FPU_MXCSR_ENV"))),Object(r.b)("p",null,"You could define the global C macro ",Object(r.b)("inlineCode",{parentName:"p"},"ACO_CONFIG_SHARE_FPU_MXCSR_ENV")," to speed up the performance of context switching between coroutines slightly if none of your code would change the control words of FPU and MXCSR. If the macro is not defined, all the co would maintain its own copy of the FPU and MXCSR control words. It is recommended to always define this macro globally since it is very rare that one function needs to set its own special env of FPU or MXCSR instead of using the default env defined by the ISO C. But you may not need to define this macro if you are not sure of it."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"C macro:",Object(r.b)("inlineCode",{parentName:"li"},"ACO_USE_VALGRIND"))),Object(r.b)("p",null,"If you want to use the tool memcheck of valgrind to test the application, then you may need to define the global C macro ",Object(r.b)("inlineCode",{parentName:"p"},"ACO_USE_VALGRIND"),' to enable the friendly support of valgrind in libaco. But it is not recommended to define this macro in the final release build for the performance reason. You may also need to install the valgrind headers (package name is "valgrind-devel" in centos for example) to build libaco application with C macro ',Object(r.b)("inlineCode",{parentName:"p"},"ACO_USE_VALGRIND")," defined. (The memcheck of valgrind only works well with the standalone co currently. In the case of the shared stack used by more than one non-main co, the memcheck of valgrind would generate many false positive reports. For more information you may refer to ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/hnes/libaco/blob/master/test_aco_tutorial_6.c"}),"test_aco_tutorial_6.c"),"."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"C macro:",Object(r.b)("inlineCode",{parentName:"li"},"ACO_USE_ASAN"))),Object(r.b)("p",null,"The global C macro ",Object(r.b)("inlineCode",{parentName:"p"},"ACO_USE_ASAN")," would enable the friendly support of ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/AddressSanitizer"}),"Address Sanitizer")," in libaco (support both gcc and clang)."))}s.isMDXComponent=!0},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),s=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=s(n),p=a,m=u["".concat(i,".").concat(p)]||u[p]||d[p]||r;return n?o.a.createElement(m,l(l({ref:t},b),{},{components:n})):o.a.createElement(m,l({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var b=2;b<r;b++)i[b]=n[b];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);