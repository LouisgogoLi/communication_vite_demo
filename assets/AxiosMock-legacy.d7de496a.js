System.register(["./index-legacy.228eed7f.js","./index-legacy.e04c203c.js"],(function(t,e){"use strict";var a,s,n,c,l,o,u,d;return{setters:[t=>{a=t.a},t=>{s=t.b,n=t.o,c=t.c,l=t.a,o=t.F,u=t.e,d=t.t}],execute:function(){t("default",{__name:"AxiosMock",setup(t){const e=s({data:[]}),i=async()=>{let t={};t=await a.get("https://jsonplaceholder.typicode.com/users"),e.data=t.data};return(t,a)=>(n(),c(o,null,[l("button",{onClick:i},"Get posts"),l("ul",null,[(n(!0),c(o,null,u(e.data,(t=>(n(),c("li",{key:t.id,"data-test":"post"},d(t.name),1)))),128))])],64))}})}}}));