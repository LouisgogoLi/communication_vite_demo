import{b as r,g as l,o as n,c,h as d,x as i}from"./index.7cc99067.js";import{E as _,a as p}from"./el-table-column.4289b53b.js";const w={__name:"AddressList",setup(m){const s=r({addressList:[]});return l(()=>{window.addEventListener("message",t=>{t.data.acrossPages&&(s.addressList=t.data.addressList,s.addressList.forEach((e,a)=>{s.addressList[a].wholeAddress=e.sCity+e.sArea+e.sAddress}))})}),(t,e)=>{const a=_,o=p;return n(),c("div",null,[d(o,{data:s.addressList,width:"500px"},{default:i(()=>[d(a,{prop:"sZip",label:"\u90F5\u905E\u5340\u865F",width:"180"}),d(a,{prop:"wholeAddress",label:"\u5730\u5740"})]),_:1},8,["data"])])}}};export{w as default};