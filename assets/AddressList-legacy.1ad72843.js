System.register(["./index-legacy.e04c203c.js","./el-table-column-legacy.3aef47bb.js"],(function(s,e){"use strict";var t,d,a,r,i,l,n,c;return{setters:[s=>{t=s.b,d=s.g,a=s.o,r=s.c,i=s.h,l=s.z},s=>{n=s.E,c=s.a}],execute:function(){s("default",{__name:"AddressList",setup(s){const e=t({addressList:[]});return d((()=>{window.onmessage=s=>{s.data.acrossPages&&(e.addressList=s.data.addressList,e.addressList.forEach(((s,t)=>{e.addressList[t].wholeAddress=s.sCity+s.sArea+s.sAddress})))}})),(s,t)=>{const d=n,o=c;return a(),r("div",null,[i(o,{data:e.addressList,width:"500px"},{default:l((()=>[i(d,{prop:"sZip",label:"郵遞區號",width:"180"}),i(d,{prop:"wholeAddress",label:"地址"})])),_:1},8,["data"])])}}})}}}));