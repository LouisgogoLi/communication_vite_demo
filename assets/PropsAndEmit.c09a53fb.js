import{_ as p,o,c as r,b as f,F as x,e as y,t as c,n as g,f as T,r as _,g as m,w as I,v as C,a as v,h as i}from"./index.90fcf0a9.js";const N={__name:"TitleBar",props:{propsHandListShow:{type:Function,default:()=>{}}},setup(a){const e=a;return(t,s)=>(o(),r("a",{class:"title",onClick:s[0]||(s[0]=(...n)=>e.propsHandListShow&&e.propsHandListShow(...n)),"data-test":"titlebar_title"},"\u9EDE\u9078\u6E2C\u8A66Title"))}},w=p(N,[["__scopeId","data-v-0f8596a1"]]);const B={__name:"ListItem",props:{propsIsOpen:{type:Boolean,default:!0}},setup(a){const e=a,t=f([{id:"0001",name:"\u6E2C\u8A66Vue\u9663\u52171",show:!0,status:"red"},{id:"0002",name:"\u6E2C\u8A66Vue\u9663\u52172",show:!1,status:"blue"},{id:"0003",name:"\u6E2C\u8A66Vue\u9663\u52173",show:!0,status:"red"},{id:"0004",name:"\u6E2C\u8A66Vue\u9663\u52174",show:!0,status:"red"},{id:"0005",name:"\u6E2C\u8A66Vue\u9663\u52175",show:!1,status:"blue"}]);return(s,n)=>e.propsIsOpen?(o(),r("ul",{key:0,class:g(["box",{open:e.propsIsOpen}])},[(o(!0),r(x,null,y(t,(u,l)=>(o(),r("li",{key:u.id,"data-test":"list_test"},c(l+1)+". "+c(u.name),1))),128))],2)):T("",!0)}},k=p(B,[["__scopeId","data-v-aea2a259"]]),D={__name:"EmitTest",emits:{emitTestNumber:null},setup(a,{emit:e}){const t=_(54088);return m(()=>{e("emitTestNumber",t)}),(s,n)=>(o(),r("h1",null,c(t.value),1))}};const L={__name:"TimerBox",emits:{emitTimerNumber:a=>a.value===0},setup(a,{emit:e}){const t=_(5);let s=null;return m(()=>{s=setInterval(()=>{t.value--,t.value===0&&(clearInterval(s),e("emitTimerNumber",t))},1e3)}),(n,u)=>(o(),r("h1",null,c(t.value),1))}},V=p(L,[["__scopeId","data-v-9abb265d"]]);const E={__name:"DomRefTest",setup(a,{expose:e}){const t=f([{date:"2016-05-02",name:"\u738B\u5C0F\u864E",address:"\u53F0\u5317\u5E02\u4FE1\u7FA9\u5340"}]),s=_("\u6211\u662F\u5B50\u5143\u4EF6"),n=_(!0),u=()=>{n.value=!n.value},l=_(null);return m(()=>{l.value.focus()}),e({aTableData:t,sConts:s,bOpenTest:n,fnChangeOpenText:u,getChildConts:l}),(b,d)=>(o(),r("div",null,[n.value?I((o(),r("input",{key:0,"onUpdate:modelValue":d[0]||(d[0]=h=>s.value=h),ref_key:"getChildConts",ref:l},null,512)),[[C,s.value]]):T("",!0),v("button",{onClick:u},"\u6309\u6211\u958B\u95DC"),v("div",null,c(s.value),1)]))}},O=p(E,[["__scopeId","data-v-20cd139f"]]);const R={__name:"PropsAndEmit",setup(a){const e=_(!0),t=()=>{e.value=!e.value},s=l=>{},n=l=>{},u=_(null);return m(()=>{}),(l,b)=>(o(),r("div",null,[i(w,{propsHandListShow:t}),i(k,{propsIsOpen:e.value},null,8,["propsIsOpen"]),i(D,{onEmitTestNumber:s}),i(V,{onEmitTimerNumber:n}),i(O,{ref_key:"getChildDomRefTest",ref:u},null,512)]))}},H=p(R,[["__scopeId","data-v-5a74cd19"]]);export{H as default};
