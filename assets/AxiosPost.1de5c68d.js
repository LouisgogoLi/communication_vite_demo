import{_ as g,r as f,b,o as r,c as i,a as e,w as n,v as _,t as m,f as p,aK as x,ah as k,F as w,q as V,s as S}from"./index.e947ac82.js";import{b as U}from"./publicAxios.6d859e9a.js";import"./index.3d4dcb15.js";const l=u=>(V("data-v-b792e419"),u=u(),S(),u),A={key:0},E={class:"input-box"},I=l(()=>e("p",null,"NAME",-1)),M={key:0,class:"error"},P={class:"input-box"},R=l(()=>e("p",null,"PASSWORD",-1)),B={key:0,class:"error"},C={class:"input-box"},D=l(()=>e("p",null,"E-MAIL",-1)),F={key:0,class:"error"},N={class:"input-box"},O=l(()=>e("p",null,"\u5E74\u9F61",-1)),j={class:"input-box"},q=l(()=>e("label",{for:"boy"},"boy",-1)),H=l(()=>e("label",{for:"girl"},"girl",-1)),K={class:"input-box"},L=l(()=>e("label",{for:"checkbox"},"\u6211\u5DF2\u95B1\u8B80\u4F7F\u7528\u8005\u689D\u6B3E",-1)),T={key:1},W=l(()=>e("h1",null,"\u8A3B\u518A\u6210\u529F",-1)),z=[W],G={__name:"AxiosPost",setup(u){const c=f(!1),o=b({username:"",password:"",sex:"",email:"",age:"",terms:!1}),a=b({}),h=()=>{alert("\u8A3B\u518A\u6210\u529F"),c.value=!0},v=d=>{Object.keys(d).forEach(s=>a[s]=d[s])},y=()=>{U(o).then(()=>{h()}).catch(d=>{v(d.error_message)})};return(d,s)=>(r(),i(w,null,[c.value?p("",!0):(r(),i("div",A,[e("div",E,[I,n(e("input",{type:"text",placeholder:"\u8F38\u5165\u4F7F\u7528\u8005\u540D\u7A31","onUpdate:modelValue":s[0]||(s[0]=t=>o.username=t)},null,512),[[_,o.username]]),a.username?(r(),i("p",M,m(a.username),1)):p("",!0)]),e("div",P,[R,n(e("input",{type:"password",placeholder:"\u8F38\u5165\u5BC6\u78BC","onUpdate:modelValue":s[1]||(s[1]=t=>o.password=t)},null,512),[[_,o.password]]),a.password?(r(),i("p",B,m(a.password),1)):p("",!0)]),e("div",C,[D,n(e("input",{type:"text",placeholder:"\u8F38\u5165email","onUpdate:modelValue":s[2]||(s[2]=t=>o.email=t)},null,512),[[_,o.email]]),a.email?(r(),i("p",F,m(a.email),1)):p("",!0)]),e("div",N,[O,n(e("input",{type:"number",placeholder:"\u8F38\u5165\u5E74\u9F61","onUpdate:modelValue":s[3]||(s[3]=t=>o.age=t)},null,512),[[_,o.age]])]),e("div",j,[n(e("input",{type:"radio",id:"boy",value:"boy","onUpdate:modelValue":s[4]||(s[4]=t=>o.sex=t)},null,512),[[x,o.sex]]),q,n(e("input",{type:"radio",id:"girl",value:"girl","onUpdate:modelValue":s[5]||(s[5]=t=>o.sex=t)},null,512),[[x,o.sex]]),H]),e("div",K,[n(e("input",{type:"checkbox",id:"checkbox","onUpdate:modelValue":s[6]||(s[6]=t=>o.terms=t)},null,512),[[k,o.terms]]),L]),e("a",{class:"btn",onClick:y},"\u9001\u51FA")])),c.value?(r(),i("div",T,z)):p("",!0)],64))}},Y=g(G,[["__scopeId","data-v-b792e419"]]);export{Y as default};
