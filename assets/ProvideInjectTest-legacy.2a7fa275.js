System.register(["./index-legacy.e04c203c.js"],(function(e,t){"use strict";var o,n,i,a,r,c,u,d,l,p,s,v;return{setters:[e=>{o=e.l,n=e.o,i=e.c,a=e.a,r=e.t,c=e.u,u=e.F,d=e.d,l=e.r,p=e.b,s=e.p,v=e.m}],execute:function(){const t={__name:"ChildComponent",setup(e){const t=o("provideLocation"),d=o("provideGeolocation"),l=o("provideUpdateLocation");return(e,o)=>(n(),i(u,null,[a("div",null,r(c(t))+" - "+r(c(d)),1),a("button",{onClick:o[0]||(o[0]=(...e)=>c(l)&&c(l)(...e))},"點我")],64))}},m={__name:"ParentComponent",setup:e=>(e,o)=>(n(),d(t))};e("default",{__name:"ProvideInjectTest",setup(e){const t=l("North Pole"),o=p({longitude:90,latitude:135});return s("provideLocation",v(t)),s("provideGeolocation",v(o)),s("provideUpdateLocation",(()=>{t.value="hahaha"})),(e,t)=>(n(),d(m))}})}}}));