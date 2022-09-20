System.register(["./index-legacy.e04c203c.js"],(function(e,a){"use strict";var n,i,r,t,s,p,m,o,u,d,l,z,f,c,A,g,y=document.createElement("style");return y.innerHTML=".flex-container[data-v-177a51d7]{display:flex;justify-content:center;align-items:center;height:40px}.warn-span[data-v-177a51d7]{padding-left:5px;padding-right:5px;color:red}\n",document.head.appendChild(y),{setters:[e=>{n=e._,i=e.q,r=e.b,t=e.g,s=e.o,p=e.c,m=e.a,o=e.F,u=e.e,d=e.w,l=e.v,z=e.s,f=e.t,c=e.f,A=e.x,g=e.y}],execute:function(){function a(){return a=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a.apply(this,arguments)}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function h(e,a){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,a){return e.__proto__=a,e},h(e,a)}function w(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function v(e,a,n){return v=w()?Reflect.construct.bind():function(e,a,n){var i=[null];i.push.apply(i,a);var r=new(Function.bind.apply(e,i));return n&&h(r,n.prototype),r},v.apply(null,arguments)}function F(e){var a="function"==typeof Map?new Map:void 0;return F=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==a){if(a.has(e))return a.get(e);a.set(e,i)}function i(){return v(e,arguments,y(this).constructor)}return i.prototype=Object.create(e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),h(i,e)},F(e)}var b=/%[sdj%]/g,E=function(){};function M(e){if(!e||!e.length)return null;var a={};return e.forEach((function(e){var n=e.field;a[n]=a[n]||[],a[n].push(e)})),a}function B(e){for(var a=arguments.length,n=new Array(a>1?a-1:0),i=1;i<a;i++)n[i-1]=arguments[i];var r=0,t=n.length;if("function"==typeof e)return e.apply(null,n);if("string"==typeof e){var s=e.replace(b,(function(e){if("%%"===e)return"%";if(r>=t)return e;switch(e){case"%s":return String(n[r++]);case"%d":return Number(n[r++]);case"%j":try{return JSON.stringify(n[r++])}catch(a){return"[Circular]"}break;default:return e}}));return s}return e}function O(e,a){return null==e||!("array"!==a||!Array.isArray(e)||e.length)||!(!function(e){return"string"===e||"url"===e||"hex"===e||"email"===e||"date"===e||"pattern"===e}(a)||"string"!=typeof e||e)}function C(e,a,n){var i=0,r=e.length;!function t(s){if(s&&s.length)n(s);else{var p=i;i+=1,p<r?a(e[p],t):n([])}}([])}var x=function(e){var a,n;function i(a,n){var i;return(i=e.call(this,"Async Validation Error")||this).errors=a,i.fields=n,i}return n=e,(a=i).prototype=Object.create(n.prototype),a.prototype.constructor=a,h(a,n),i}(F(Error));function q(e,a,n,i,r){if(a.first){var t=new Promise((function(a,t){var s=function(e){var a=[];return Object.keys(e).forEach((function(n){a.push.apply(a,e[n]||[])})),a}(e);C(s,n,(function(e){return i(e),e.length?t(new x(e,M(e))):a(r)}))}));return t.catch((function(e){return e})),t}var s=!0===a.firstFields?Object.keys(e):a.firstFields||[],p=Object.keys(e),m=p.length,o=0,u=[],d=new Promise((function(a,t){var d=function(e){if(u.push.apply(u,e),++o===m)return i(u),u.length?t(new x(u,M(u))):a(r)};p.length||(i(u),a(r)),p.forEach((function(a){var i=e[a];-1!==s.indexOf(a)?C(i,n,d):function(e,a,n){var i=[],r=0,t=e.length;function s(e){i.push.apply(i,e||[]),++r===t&&n(i)}e.forEach((function(e){a(e,s)}))}(i,n,d)}))}));return d.catch((function(e){return e})),d}function D(e,a){return function(n){var i,r;return i=e.fullFields?function(e,a){for(var n=e,i=0;i<a.length;i++){if(null==n)return n;n=n[a[i]]}return n}(a,e.fullFields):a[n.field||e.fullField],(r=n)&&void 0!==r.message?(n.field=n.field||e.fullField,n.fieldValue=i,n):{message:"function"==typeof n?n():n,fieldValue:i,field:n.field||e.fullField}}}function k(e,n){if(n)for(var i in n)if(n.hasOwnProperty(i)){var r=n[i];"object"==typeof r&&"object"==typeof e[i]?e[i]=a({},e[i],r):e[i]=r}return e}var N,j=function(e,a,n,i,r,t){!e.required||n.hasOwnProperty(e.field)&&!O(a,t||e.type)||i.push(B(r.messages.required,e.fullField))},Q=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,P=/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i,I={integer:function(e){return I.number(e)&&parseInt(e,10)===e},float:function(e){return I.number(e)&&!I.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch(a){return!1}},date:function(e){return"function"==typeof e.getTime&&"function"==typeof e.getMonth&&"function"==typeof e.getYear&&!isNaN(e.getTime())},number:function(e){return!isNaN(e)&&"number"==typeof e},object:function(e){return"object"==typeof e&&!I.array(e)},method:function(e){return"function"==typeof e},email:function(e){return"string"==typeof e&&e.length<=320&&!!e.match(Q)},url:function(e){return"string"==typeof e&&e.length<=2048&&!!e.match(function(){if(N)return N;var e="[a-fA-F\\d:]",a=function(a){return a&&a.includeBoundaries?"(?:(?<=\\s|^)(?="+e+")|(?<="+e+")(?=\\s|$))":""},n="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",i="[a-fA-F\\d]{1,4}",r=("\n(?:\n(?:"+i+":){7}(?:"+i+"|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8\n(?:"+i+":){6}(?:"+n+"|:"+i+"|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4\n(?:"+i+":){5}(?::"+n+"|(?::"+i+"){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4\n(?:"+i+":){4}(?:(?::"+i+"){0,1}:"+n+"|(?::"+i+"){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4\n(?:"+i+":){3}(?:(?::"+i+"){0,2}:"+n+"|(?::"+i+"){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4\n(?:"+i+":){2}(?:(?::"+i+"){0,3}:"+n+"|(?::"+i+"){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4\n(?:"+i+":){1}(?:(?::"+i+"){0,4}:"+n+"|(?::"+i+"){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4\n(?::(?:(?::"+i+"){0,5}:"+n+"|(?::"+i+"){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4\n)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1\n").replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),t=new RegExp("(?:^"+n+"$)|(?:^"+r+"$)"),s=new RegExp("^"+n+"$"),p=new RegExp("^"+r+"$"),m=function(e){return e&&e.exact?t:new RegExp("(?:"+a(e)+n+a(e)+")|(?:"+a(e)+r+a(e)+")","g")};m.v4=function(e){return e&&e.exact?s:new RegExp(""+a(e)+n+a(e),"g")},m.v6=function(e){return e&&e.exact?p:new RegExp(""+a(e)+r+a(e),"g")};var o=m.v4().source,u=m.v6().source;return N=new RegExp("(?:^(?:(?:(?:[a-z]+:)?//)|www\\.)(?:\\S+(?::\\S*)?@)?(?:localhost|"+o+"|"+u+'|(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:[/?#][^\\s"]*)?$)',"i")}())},hex:function(e){return"string"==typeof e&&!!e.match(P)}},U={required:j,whitespace:function(e,a,n,i,r){(/^\s+$/.test(a)||""===a)&&i.push(B(r.messages.whitespace,e.fullField))},type:function(e,a,n,i,r){if(e.required&&void 0===a)j(e,a,n,i,r);else{var t=e.type;["integer","float","array","regexp","object","method","email","number","date","url","hex"].indexOf(t)>-1?I[t](a)||i.push(B(r.messages.types[t],e.fullField,e.type)):t&&typeof a!==e.type&&i.push(B(r.messages.types[t],e.fullField,e.type))}},range:function(e,a,n,i,r){var t="number"==typeof e.len,s="number"==typeof e.min,p="number"==typeof e.max,m=a,o=null,u="number"==typeof a,d="string"==typeof a,l=Array.isArray(a);if(u?o="number":d?o="string":l&&(o="array"),!o)return!1;l&&(m=a.length),d&&(m=a.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,"_").length),t?m!==e.len&&i.push(B(r.messages[o].len,e.fullField,e.len)):s&&!p&&m<e.min?i.push(B(r.messages[o].min,e.fullField,e.min)):p&&!s&&m>e.max?i.push(B(r.messages[o].max,e.fullField,e.max)):s&&p&&(m<e.min||m>e.max)&&i.push(B(r.messages[o].range,e.fullField,e.min,e.max))},enum:function(e,a,n,i,r){e.enum=Array.isArray(e.enum)?e.enum:[],-1===e.enum.indexOf(a)&&i.push(B(r.messages.enum,e.fullField,e.enum.join(", ")))},pattern:function(e,a,n,i,r){e.pattern&&(e.pattern instanceof RegExp?(e.pattern.lastIndex=0,e.pattern.test(a)||i.push(B(r.messages.pattern.mismatch,e.fullField,a,e.pattern))):"string"==typeof e.pattern&&(new RegExp(e.pattern).test(a)||i.push(B(r.messages.pattern.mismatch,e.fullField,a,e.pattern))))}},H=function(e,a,n,i,r){var t=e.type,s=[];if(e.required||!e.required&&i.hasOwnProperty(e.field)){if(O(a,t)&&!e.required)return n();U.required(e,a,i,s,r,t),O(a,t)||U.type(e,a,i,s,r)}n(s)},G={string:function(e,a,n,i,r){var t=[];if(e.required||!e.required&&i.hasOwnProperty(e.field)){if(O(a,"string")&&!e.required)return n();U.required(e,a,i,t,r,"string"),O(a,"string")||(U.type(e,a,i,t,r),U.range(e,a,i,t,r),U.pattern(e,a,i,t,r),!0===e.whitespace&&U.whitespace(e,a,i,t,r))}n(t)},method:function(e,a,n,i,r){var t=[];if(e.required||!e.required&&i.hasOwnProperty(e.field)){if(O(a)&&!e.required)return n();U.required(e,a,i,t,r),void 0!==a&&U.type(e,a,i,t,r)}n(t)},number:function(e,a,n,i,r){var t=[];if(e.required||!e.required&&i.hasOwnProperty(e.field)){if(""===a&&(a=void 0),O(a)&&!e.required)return n();U.required(e,a,i,t,r),void 0!==a&&(U.type(e,a,i,t,r),U.range(e,a,i,t,r))}n(t)},boolean:function(e,a,n,i,r){var t=[];if(e.required||!e.required&&i.hasOwnProperty(e.field)){if(O(a)&&!e.required)return n();U.required(e,a,i,t,r),void 0!==a&&U.type(e,a,i,t,r)}n(t)},regexp:function(e,a,n,i,r){var t=[];if(e.required||!e.required&&i.hasOwnProperty(e.field)){if(O(a)&&!e.required)return n();U.required(e,a,i,t,r),O(a)||U.type(e,a,i,t,r)}n(t)},integer:function(e,a,n,i,r){var t=[];if(e.required||!e.required&&i.hasOwnProperty(e.field)){if(O(a)&&!e.required)return n();U.required(e,a,i,t,r),void 0!==a&&(U.type(e,a,i,t,r),U.range(e,a,i,t,r))}n(t)},float:function(e,a,n,i,r){var t=[];if(e.required||!e.required&&i.hasOwnProperty(e.field)){if(O(a)&&!e.required)return n();U.required(e,a,i,t,r),void 0!==a&&(U.type(e,a,i,t,r),U.range(e,a,i,t,r))}n(t)},array:function(e,a,n,i,r){var t=[];if(e.required||!e.required&&i.hasOwnProperty(e.field)){if(null==a&&!e.required)return n();U.required(e,a,i,t,r,"array"),null!=a&&(U.type(e,a,i,t,r),U.range(e,a,i,t,r))}n(t)},object:function(e,a,n,i,r){var t=[];if(e.required||!e.required&&i.hasOwnProperty(e.field)){if(O(a)&&!e.required)return n();U.required(e,a,i,t,r),void 0!==a&&U.type(e,a,i,t,r)}n(t)},enum:function(e,a,n,i,r){var t=[];if(e.required||!e.required&&i.hasOwnProperty(e.field)){if(O(a)&&!e.required)return n();U.required(e,a,i,t,r),void 0!==a&&U.enum(e,a,i,t,r)}n(t)},pattern:function(e,a,n,i,r){var t=[];if(e.required||!e.required&&i.hasOwnProperty(e.field)){if(O(a,"string")&&!e.required)return n();U.required(e,a,i,t,r),O(a,"string")||U.pattern(e,a,i,t,r)}n(t)},date:function(e,a,n,i,r){var t=[];if(e.required||!e.required&&i.hasOwnProperty(e.field)){if(O(a,"date")&&!e.required)return n();var s;U.required(e,a,i,t,r),O(a,"date")||(s=a instanceof Date?a:new Date(a),U.type(e,s,i,t,r),s&&U.range(e,s.getTime(),i,t,r))}n(t)},url:H,hex:H,email:H,required:function(e,a,n,i,r){var t=[],s=Array.isArray(a)?"array":typeof a;U.required(e,a,i,t,r,s),n(t)},any:function(e,a,n,i,r){var t=[];if(e.required||!e.required&&i.hasOwnProperty(e.field)){if(O(a)&&!e.required)return n();U.required(e,a,i,t,r)}n(t)}};function L(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var R=L(),S=function(){function e(e){this.rules=null,this._messages=R,this.define(e)}var n=e.prototype;return n.define=function(e){var a=this;if(!e)throw new Error("Cannot configure a schema with no rules");if("object"!=typeof e||Array.isArray(e))throw new Error("Rules must be an object");this.rules={},Object.keys(e).forEach((function(n){var i=e[n];a.rules[n]=Array.isArray(i)?i:[i]}))},n.messages=function(e){return e&&(this._messages=k(L(),e)),this._messages},n.validate=function(n,i,r){var t=this;void 0===i&&(i={}),void 0===r&&(r=function(){});var s=n,p=i,m=r;if("function"==typeof p&&(m=p,p={}),!this.rules||0===Object.keys(this.rules).length)return m&&m(null,s),Promise.resolve(s);if(p.messages){var o=this.messages();o===R&&(o=L()),k(o,p.messages),p.messages=o}else p.messages=this.messages();var u={};(p.keys||Object.keys(this.rules)).forEach((function(e){var i=t.rules[e],r=s[e];i.forEach((function(i){var p=i;"function"==typeof p.transform&&(s===n&&(s=a({},s)),r=s[e]=p.transform(r)),(p="function"==typeof p?{validator:p}:a({},p)).validator=t.getValidationMethod(p),p.validator&&(p.field=e,p.fullField=p.fullField||e,p.type=t.getType(p),u[e]=u[e]||[],u[e].push({rule:p,value:r,source:s,field:e}))}))}));var d={};return q(u,p,(function(n,i){var r,t=n.rule,m=!("object"!==t.type&&"array"!==t.type||"object"!=typeof t.fields&&"object"!=typeof t.defaultField);function o(e,n){return a({},n,{fullField:t.fullField+"."+e,fullFields:t.fullFields?[].concat(t.fullFields,[e]):[e]})}function u(r){void 0===r&&(r=[]);var u=Array.isArray(r)?r:[r];!p.suppressWarning&&u.length&&e.warning("async-validator:",u),u.length&&void 0!==t.message&&(u=[].concat(t.message));var l=u.map(D(t,s));if(p.first&&l.length)return d[t.field]=1,i(l);if(m){if(t.required&&!n.value)return void 0!==t.message?l=[].concat(t.message).map(D(t,s)):p.error&&(l=[p.error(t,B(p.messages.required,t.field))]),i(l);var z={};t.defaultField&&Object.keys(n.value).map((function(e){z[e]=t.defaultField})),z=a({},z,n.rule.fields);var f={};Object.keys(z).forEach((function(e){var a=z[e],n=Array.isArray(a)?a:[a];f[e]=n.map(o.bind(null,e))}));var c=new e(f);c.messages(p.messages),n.rule.options&&(n.rule.options.messages=p.messages,n.rule.options.error=p.error),c.validate(n.value,n.rule.options||p,(function(e){var a=[];l&&l.length&&a.push.apply(a,l),e&&e.length&&a.push.apply(a,e),i(a.length?a:null)}))}else i(l)}if(m=m&&(t.required||!t.required&&n.value),t.field=n.field,t.asyncValidator)r=t.asyncValidator(t,n.value,u,n.source,p);else if(t.validator){try{r=t.validator(t,n.value,u,n.source,p)}catch(l){null==console.error||console.error(l),p.suppressValidatorError||setTimeout((function(){throw l}),0),u(l.message)}!0===r?u():!1===r?u("function"==typeof t.message?t.message(t.fullField||t.field):t.message||(t.fullField||t.field)+" fails"):r instanceof Array?u(r):r instanceof Error&&u(r.message)}r&&r.then&&r.then((function(){return u()}),(function(e){return u(e)}))}),(function(e){!function(e){for(var a,n,i=[],r={},t=0;t<e.length;t++)a=e[t],n=void 0,Array.isArray(a)?i=(n=i).concat.apply(n,a):i.push(a);i.length?(r=M(i),m(i,r)):m(null,s)}(e)}),s)},n.getType=function(e){if(void 0===e.type&&e.pattern instanceof RegExp&&(e.type="pattern"),"function"!=typeof e.validator&&e.type&&!G.hasOwnProperty(e.type))throw new Error(B("Unknown rule type %s",e.type));return e.type||"string"},n.getValidationMethod=function(e){if("function"==typeof e.validator)return e.validator;var a=Object.keys(e),n=a.indexOf("message");return-1!==n&&a.splice(n,1),1===a.length&&"required"===a[0]?G.required:G[this.getType(e)]||void 0},e}();S.register=function(e,a){if("function"!=typeof a)throw new Error("Cannot register a validator by type, validator is not a function");G[e]=a},S.warning=E,S.messages=R,S.validators=G;const Z={twzip:{city:[{name:"基隆市",area:[{name:"仁愛區",zip:"200"},{name:"信義區",zip:"201"},{name:"中正區",zip:"202"},{name:"中山區",zip:"203"},{name:"安樂區",zip:"204"},{name:"暖暖區",zip:"205"},{name:"七堵區",zip:"206"}]},{name:"台北市",area:[{name:"中正區",zip:"100"},{name:"大同區",zip:"103"},{name:"中山區",zip:"104"},{name:"松山區",zip:"105"},{name:"大安區",zip:"106"},{name:"萬華區",zip:"108"},{name:"信義區",zip:"110"},{name:"士林區",zip:"111"},{name:"北投區",zip:"112"},{name:"內湖區",zip:"114"},{name:"南港區",zip:"115"},{name:"文山區",zip:"116"}]},{name:"新北市",area:[{name:"萬里區",zip:"207"},{name:"金山區",zip:"208"},{name:"板橋區",zip:"220"},{name:"汐止區",zip:"221"},{name:"深坑區",zip:"222"},{name:"石碇區",zip:"223"},{name:"瑞芳區",zip:"224"},{name:"平溪區",zip:"226"},{name:"雙溪區",zip:"227"},{name:"貢寮區",zip:"228"},{name:"新店區",zip:"231"},{name:"坪林區",zip:"232"},{name:"烏來區",zip:"233"},{name:"永和區",zip:"234"},{name:"中和區",zip:"235"},{name:"土城區",zip:"236"},{name:"三峽區",zip:"237"},{name:"樹林區",zip:"238"},{name:"鶯歌區",zip:"239"},{name:"三重區",zip:"241"},{name:"新莊區",zip:"242"},{name:"泰山區",zip:"243"},{name:"林口區",zip:"244"},{name:"蘆洲區",zip:"247"},{name:"五股區",zip:"248"},{name:"八里區",zip:"249"},{name:"淡水區",zip:"251"},{name:"三芝區",zip:"252"},{name:"石門區",zip:"253"}]},{name:"桃園縣",area:[{name:"中壢市",zip:"320"},{name:"平鎮市",zip:"324"},{name:"龍潭鄉",zip:"325"},{name:"楊梅市",zip:"326"},{name:"新屋鄉",zip:"327"},{name:"觀音鄉",zip:"328"},{name:"桃園市",zip:"330"},{name:"龜山鄉",zip:"333"},{name:"八德市",zip:"334"},{name:"大溪鎮",zip:"335"},{name:"復興鄉",zip:"336"},{name:"大園鄉",zip:"337"},{name:"蘆竹鄉",zip:"338"}]},{name:"新竹市",area:[{name:"東區",zip:"300"},{name:"北區",zip:"300"},{name:"香山區",zip:"300"}]},{name:"新竹縣",area:[{name:"竹北市",zip:"302"},{name:"湖口鄉",zip:"303"},{name:"新豐鄉",zip:"304"},{name:"新埔鎮",zip:"305"},{name:"關西鎮",zip:"306"},{name:"芎林鄉",zip:"307"},{name:"寶山鄉",zip:"308"},{name:"竹東鎮",zip:"310"},{name:"五峰鄉",zip:"311"},{name:"橫山鄉",zip:"312"},{name:"尖石鄉",zip:"313"},{name:"北埔鄉",zip:"314"},{name:"峨眉鄉",zip:"315"}]},{name:"苗栗縣",area:[{name:"竹南鎮",zip:"350"},{name:"頭份鎮",zip:"351"},{name:"三灣鄉",zip:"352"},{name:"南庄鄉",zip:"353"},{name:"獅潭鄉",zip:"354"},{name:"後龍鎮",zip:"356"},{name:"通霄鎮",zip:"357"},{name:"苑裡鎮",zip:"358"},{name:"苗栗市",zip:"360"},{name:"造橋鄉",zip:"361"},{name:"頭屋鄉",zip:"362"},{name:"公館鄉",zip:"363"},{name:"大湖鄉",zip:"364"},{name:"泰安鄉",zip:"365"},{name:"銅鑼鄉",zip:"366"},{name:"三義鄉",zip:"367"},{name:"西湖鄉",zip:"368"},{name:"卓蘭鎮",zip:"369"}]},{name:"台中市",area:[{name:"中區",zip:"400"},{name:"東區",zip:"401"},{name:"南區",zip:"402"},{name:"西區",zip:"403"},{name:"北區",zip:"404"},{name:"北屯區",zip:"406"},{name:"西屯區",zip:"407"},{name:"南屯區",zip:"408"},{name:"太平區",zip:"411"},{name:"大里區",zip:"412"},{name:"霧峰區",zip:"413"},{name:"烏日區",zip:"414"},{name:"豐原區",zip:"420"},{name:"后里區",zip:"421"},{name:"石岡區",zip:"422"},{name:"東勢區",zip:"423"},{name:"和平區",zip:"424"},{name:"新社區",zip:"426"},{name:"潭子區",zip:"427"},{name:"大雅區",zip:"428"},{name:"神岡區",zip:"429"},{name:"大肚區",zip:"432"},{name:"沙鹿區",zip:"433"},{name:"龍井區",zip:"434"},{name:"梧棲區",zip:"435"},{name:"清水區",zip:"436"},{name:"大甲區",zip:"437"},{name:"外埔區",zip:"438"},{name:"大安區",zip:"439"}]},{name:"彰化縣",area:[{name:"彰化市",zip:"500"},{name:"芬園鄉",zip:"502"},{name:"花壇鄉",zip:"503"},{name:"秀水鄉",zip:"504"},{name:"鹿港鎮",zip:"505"},{name:"福興鄉",zip:"506"},{name:"線西鄉",zip:"507"},{name:"和美鎮",zip:"508"},{name:"伸港鄉",zip:"509"},{name:"員林鎮",zip:"510"},{name:"社頭鄉",zip:"511"},{name:"永靖鄉",zip:"512"},{name:"埔心鄉",zip:"513"},{name:"溪湖鎮",zip:"514"},{name:"大村鄉",zip:"515"},{name:"埔鹽鄉",zip:"516"},{name:"田中鎮",zip:"520"},{name:"北斗鎮",zip:"521"},{name:"田尾鄉",zip:"522"},{name:"埤頭鄉",zip:"523"},{name:"溪州鄉",zip:"524"},{name:"竹塘鄉",zip:"525"},{name:"二林鎮",zip:"526"},{name:"大城鄉",zip:"527"},{name:"芳苑鄉",zip:"528"},{name:"二水鄉",zip:"530"}]},{name:"南投縣",area:[{name:"南投市",zip:"540"},{name:"中寮鄉",zip:"541"},{name:"草屯鎮",zip:"542"},{name:"國姓鄉",zip:"544"},{name:"埔里鎮",zip:"545"},{name:"仁愛鄉",zip:"546"},{name:"名間鄉",zip:"551"},{name:"集集鎮",zip:"552"},{name:"水里鄉",zip:"553"},{name:"魚池鄉",zip:"555"},{name:"信義鄉",zip:"556"},{name:"竹山鎮",zip:"557"},{name:"鹿谷鄉",zip:"558"}]},{name:"雲林縣",area:[{name:"斗南鎮",zip:"630"},{name:"大埤鄉",zip:"631"},{name:"虎尾鎮",zip:"632"},{name:"土庫鎮",zip:"633"},{name:"褒忠鄉",zip:"634"},{name:"東勢鄉",zip:"635"},{name:"台西鄉",zip:"636"},{name:"崙背鄉",zip:"637"},{name:"麥寮鄉",zip:"638"},{name:"斗六市",zip:"640"},{name:"林內鄉",zip:"643"},{name:"古坑鄉",zip:"646"},{name:"莿桐鄉",zip:"647"},{name:"西螺鎮",zip:"648"},{name:"二崙鄉",zip:"649"},{name:"北港鎮",zip:"651"},{name:"水林鄉",zip:"652"},{name:"口湖鄉",zip:"653"},{name:"四湖鄉",zip:"654"},{name:"元長鄉",zip:"655"}]},{name:"嘉義市",area:[{name:"東區",zip:"600"},{name:"西區",zip:"600"}]},{name:"嘉義縣",area:[{name:"番路鄉",zip:"602"},{name:"梅山鄉",zip:"603"},{name:"竹崎鄉",zip:"604"},{name:"阿里山鄉",zip:"605"},{name:"中埔鄉",zip:"606"},{name:"大埔鄉",zip:"607"},{name:"水上鄉",zip:"608"},{name:"鹿草鄉",zip:"611"},{name:"太保市",zip:"612"},{name:"朴子市",zip:"613"},{name:"東石鄉",zip:"614"},{name:"六腳鄉",zip:"615"},{name:"新港鄉",zip:"616"},{name:"民雄鄉",zip:"621"},{name:"大林鎮",zip:"622"},{name:"溪口鄉",zip:"623"},{name:"義竹鄉",zip:"624"},{name:"布袋鎮",zip:"625"}]},{name:"台南市",area:[{name:"中西區",zip:"700"},{name:"東區",zip:"701"},{name:"南區",zip:"702"},{name:"北區",zip:"704"},{name:"安平區",zip:"708"},{name:"安南區",zip:"709"},{name:"永康區",zip:"710"},{name:"歸仁區",zip:"711"},{name:"新化區",zip:"712"},{name:"左鎮區",zip:"713"},{name:"玉井區",zip:"714"},{name:"楠西區",zip:"715"},{name:"南化區",zip:"716"},{name:"仁德區",zip:"717"},{name:"關廟區",zip:"718"},{name:"龍崎區",zip:"719"},{name:"官田區",zip:"720"},{name:"麻豆區",zip:"721"},{name:"佳里區",zip:"722"},{name:"西港區",zip:"723"},{name:"七股區",zip:"724"},{name:"將軍區",zip:"725"},{name:"學甲區",zip:"726"},{name:"北門區",zip:"727"},{name:"新營區",zip:"730"},{name:"後壁區",zip:"731"},{name:"白河區",zip:"732"},{name:"東山區",zip:"733"},{name:"六甲區",zip:"734"},{name:"下營區",zip:"735"},{name:"柳營區",zip:"736"},{name:"鹽水區",zip:"737"},{name:"善化區",zip:"741"},{name:"大內區",zip:"742"},{name:"山上區",zip:"743"},{name:"新市區",zip:"744"},{name:"安定區",zip:"745"}]},{name:"高雄市",area:[{name:"新興區",zip:"800"},{name:"前金區",zip:"801"},{name:"苓雅區",zip:"802"},{name:"鹽埕區",zip:"803"},{name:"鼓山區",zip:"804"},{name:"旗津區",zip:"805"},{name:"前鎮區",zip:"806"},{name:"三民區",zip:"807"},{name:"楠梓區",zip:"811"},{name:"小港區",zip:"812"},{name:"左營區",zip:"813"},{name:"仁武區",zip:"814"},{name:"大社區",zip:"815"},{name:"岡山區",zip:"820"},{name:"路竹區",zip:"821"},{name:"阿蓮區",zip:"822"},{name:"田寮區",zip:"823"},{name:"燕巢區",zip:"824"},{name:"橋頭區",zip:"825"},{name:"梓官區",zip:"826"},{name:"彌陀區",zip:"827"},{name:"永安區",zip:"828"},{name:"湖內區",zip:"829"},{name:"鳳山區",zip:"830"},{name:"大寮區",zip:"831"},{name:"林園區",zip:"832"},{name:"鳥松區",zip:"833"},{name:"大樹區",zip:"840"},{name:"旗山區",zip:"842"},{name:"美濃區",zip:"843"},{name:"六龜區",zip:"844"},{name:"內門區",zip:"845"},{name:"杉林區",zip:"846"},{name:"甲仙區",zip:"847"},{name:"桃源區",zip:"848"},{name:"那瑪夏區",zip:"849"},{name:"茂林區",zip:"851"},{name:"茄萣區",zip:"852"}]},{name:"屏東縣",area:[{name:"屏東市",zip:"900"},{name:"三地門鄉",zip:"901"},{name:"霧台鄉",zip:"902"},{name:"瑪家鄉",zip:"903"},{name:"九如鄉",zip:"904"},{name:"里港鄉",zip:"905"},{name:"高樹鄉",zip:"906"},{name:"鹽埔鄉",zip:"907"},{name:"長治鄉",zip:"908"},{name:"麟洛鄉",zip:"909"},{name:"竹田鄉",zip:"911"},{name:"內埔鄉",zip:"912"},{name:"萬丹鄉",zip:"913"},{name:"潮州鎮",zip:"920"},{name:"泰武鄉",zip:"921"},{name:"來義鄉",zip:"922"},{name:"萬巒鄉",zip:"923"},{name:"崁頂鄉",zip:"924"},{name:"新埤鄉",zip:"925"},{name:"南州鄉",zip:"926"},{name:"林邊鄉",zip:"927"},{name:"東港鎮",zip:"928"},{name:"琉球鄉",zip:"929"},{name:"佳冬鄉",zip:"931"},{name:"新園鄉",zip:"932"},{name:"枋寮鄉",zip:"940"},{name:"枋山鄉",zip:"941"},{name:"春日鄉",zip:"942"},{name:"獅子鄉",zip:"943"},{name:"車城鄉",zip:"944"},{name:"牡丹鄉",zip:"945"},{name:"恆春鎮",zip:"946"},{name:"滿州鄉",zip:"947"}]},{name:"台東縣",area:[{name:"台東市",zip:"950"},{name:"綠島鄉",zip:"951"},{name:"蘭嶼鄉",zip:"952"},{name:"延平鄉",zip:"953"},{name:"卑南鄉",zip:"954"},{name:"鹿野鄉",zip:"955"},{name:"關山鎮",zip:"956"},{name:"海端鄉",zip:"957"},{name:"池上鄉",zip:"958"},{name:"東河鄉",zip:"959"},{name:"成功鎮",zip:"961"},{name:"長濱鄉",zip:"962"},{name:"太麻里鄉",zip:"963"},{name:"金峰鄉",zip:"964"},{name:"大武鄉",zip:"965"},{name:"達仁鄉",zip:"966"}]},{name:"花蓮縣",area:[{name:"花蓮市",zip:"970"},{name:"新城鄉",zip:"971"},{name:"秀林鄉",zip:"972"},{name:"吉安鄉",zip:"973"},{name:"壽豐鄉",zip:"974"},{name:"鳳林鎮",zip:"975"},{name:"光復鄉",zip:"976"},{name:"豐濱鄉",zip:"977"},{name:"瑞穗鄉",zip:"978"},{name:"萬榮鄉",zip:"979"},{name:"玉里鎮",zip:"981"},{name:"卓溪鄉",zip:"982"}]},{name:"宜蘭縣",area:[{name:"宜蘭市",zip:"260"},{name:"頭城鎮",zip:"261"},{name:"礁溪鄉",zip:"262"},{name:"壯圍鄉",zip:"263"},{name:"員山鄉",zip:"264"},{name:"羅東鎮",zip:"265"},{name:"三星鄉",zip:"266"},{name:"大同鄉",zip:"267"},{name:"五結鄉",zip:"268"},{name:"冬山鄉",zip:"269"},{name:"蘇澳鎮",zip:"270"},{name:"南澳鄉",zip:"272"}]},{name:"澎湖縣",area:[{name:"馬公市",zip:"880"},{name:"西嶼鄉",zip:"881"},{name:"望安鄉",zip:"882"},{name:"七美鄉",zip:"883"},{name:"白沙鄉",zip:"884"},{name:"湖西鄉",zip:"885"}]},{name:"金門縣",area:[{name:"金沙鎮",zip:"890"},{name:"金湖鎮",zip:"891"},{name:"金寧鄉",zip:"892"},{name:"金城鎮",zip:"893"},{name:"烈嶼鄉",zip:"894"},{name:"烏坵鄉",zip:"896"}]},{name:"連江縣",area:[{name:"南竿鄉",zip:"209"},{name:"北竿鄉",zip:"210"},{name:"莒光鄉",zip:"211"},{name:"東引鄉",zip:"212"}]}]}},Y=e=>(A("data-v-177a51d7"),e=e(),g(),e),W={style:{"padding-bottom":"30px"}},T={class:"flex-container"},K=["onUpdate:modelValue"],V=["onUpdate:modelValue","onChange","onBlur"],J=Y((()=>m("option",{disabled:"",value:""},"請選擇縣市",-1))),X=["value"],_=["onUpdate:modelValue","onChange","onBlur"],$=Y((()=>m("option",{disabled:"",value:""},"請選擇區域",-1))),ee=["value"],ae=["onUpdate:modelValue","onBlur"],ne=["onClick"],ie={key:1,style:{width:"25px",height:"25px"}},re={key:0,class:"warn-span","data-test":"address_errorCity"},te={key:1,class:"warn-span","data-test":"address_errorArea"},se={key:2,class:"warn-span","data-test":"address_errorAddress"},pe={style:{"padding-top":"30px"}};e("default",n({__name:"AddressForCrud",setup(e){const a=i();let n=Date.now().toString();const A=r({addressList:[{id:n,aCity:Z.twzip.city,aArea:[],sCity:"",sArea:"",sZip:"",sAddress:"",sErrorCityMessage:"",sErrorAreaMessage:"",sErrorAddressMessage:"",warnRef:null}]}),g=new S({city:[{required:!0,message:"請選擇縣市"}],area:[{required:!0,message:"請選擇區域"}],address:[{required:!0,message:"請輸入詳細地址"},{required:!0,min:5,message:"地址字數為5以上"}]}),y=(e,a,n,i,r)=>{let t={};t[n]=A.addressList[a][i],g.validate(t,((e,i)=>{e&&i[n]?A.addressList[a][r]=i[n][0].message:A.addressList[a][r]=""}))},h=async()=>{if(await!(()=>{let e={city:"",area:"",address:""},a=!1;for(let n of A.addressList)e.city=n.sCity,e.area=n.sArea,e.address=n.sAddress,g.validate(e,((e,i)=>{e&&i.city&&(n.sErrorCityMessage=i.city[0].message,a=!0),e&&i.area&&(n.sErrorAreaMessage=i.area[0].message,a=!0),e&&i.address&&(n.sErrorAddressMessage=i.address[0].message,a=!0)}));return a})()){let e=a.resolve({name:"address_list",query:{showUI:!1}}),n=window.open(e.href);n.onload=()=>{setTimeout((()=>{n.postMessage({acrossPages:!0,showHeaderFooter:!1,addressList:JSON.parse(JSON.stringify(A.addressList))},"*")}),10)}}};return t((()=>{localStorage.getItem("twAddressKey")&&(A.addressList.length=0,JSON.parse(localStorage.getItem("twAddressKey")).forEach((e=>{A.addressList.push(e)})))})),(e,a)=>(s(),p(o,null,[m("div",W,[m("button",{onClick:a[0]||(a[0]=e=>(n=Date.now().toString(),void(A.addressList=[{id:n,aCity:Z.twzip.city,aArea:[],sCity:"",sArea:"",sZip:"",sAddress:"",sErrorCityMessage:"",sErrorAreaMessage:"",sErrorAddressMessage:"",warnRef:null}])))},"重置"),m("button",{onClick:a[1]||(a[1]=e=>{A.addressList.forEach((e=>{e.aArea=[],e.sCity="",e.sArea="",e.sZip="",e.sAddress="",e.sErrorCityMessage="",e.sErrorAreaMessage="",e.sErrorAddressMessage=""}))})},"清空所有值")]),(s(!0),p(o,null,u(A.addressList,((e,i)=>(s(),p("div",{key:e.id,"data-test":"addressList"},[m("div",T,[d(m("input",{type:"text","onUpdate:modelValue":a=>e.sZip=a,style:{width:"40px"},disabled:""},null,8,K),[[l,e.sZip]]),d(m("select",{"onUpdate:modelValue":a=>e.sCity=a,onChange:e=>((e,a)=>{const n=A.addressList[a].aCity.filter((a=>a.name===e.target.value));A.addressList[a].sArea="",A.addressList[a].sAddress="",A.addressList[a].sErrorCityMessage="",A.addressList[a].sErrorAreaMessage="",A.addressList[a].sErrorAddressMessage="",A.addressList[a].aArea=n[0].area})(e,i),onBlur:e=>y(0,i,"city","sCity","sErrorCityMessage"),"data-test":"address_city"},[J,(s(!0),p(o,null,u(e.aCity,(e=>(s(),p("option",{key:e.name,value:e.name},f(e.name),9,X)))),128))],40,V),[[z,e.sCity]]),d(m("select",{"onUpdate:modelValue":a=>e.sArea=a,onChange:e=>((e,a)=>{A.addressList[a].aArea.forEach((n=>{n.name===e.target.value&&(A.addressList[a].sZip=n.zip)})),A.addressList[a].sAddress="",A.addressList[a].sErrorAreaMessage="",A.addressList[a].sErrorAddressMessage=""})(e,i),onBlur:e=>y(0,i,"area","sArea","sErrorAreaMessage"),"data-test":"address_area"},[$,(s(!0),p(o,null,u(e.aArea,(e=>(s(),p("option",{key:e.zip,value:e.name},f(e.name),9,ee)))),128))],40,_),[[z,e.sArea]]),d(m("input",{type:"text","onUpdate:modelValue":a=>e.sAddress=a,onBlur:e=>y(0,i,"address","sAddress","sErrorAddressMessage"),"data-test":"address_detail"},null,40,ae),[[l,e.sAddress]]),m("img",{src:"data:image/png;base64,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",alt:"增加",width:"25",height:"25",onClick:a[2]||(a[2]=e=>(n=Date.now().toString(),void A.addressList.push({id:n,aCity:Z.twzip.city,aArea:[],sCity:"",sArea:"",sZip:"",sAddress:"",sErrorCityMessage:"",sErrorAreaMessage:"",sErrorAddressMessage:"",warnRef:null}))),"data-test":"address_add"}),1!==A.addressList.length?(s(),p("img",{key:0,src:"data:image/png;base64,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",alt:"刪除",style:{width:"25px",height:"25px"},onClick:e=>(e=>{A.addressList.splice(e,1)})(i),"data-test":"address_delete"},null,8,ne)):c("",!0),1===A.addressList.length?(s(),p("div",ie)):c("",!0)]),m("div",{ref_for:!0,ref:e=>((e,a)=>{e&&(A.addressList[a].warnRef=e)})(e,i)},[e.sErrorCityMessage?(s(),p("span",re,f(e.sErrorCityMessage),1)):c("",!0),e.sErrorAreaMessage?(s(),p("span",te,f(e.sErrorAreaMessage),1)):c("",!0),e.sErrorAddressMessage?(s(),p("span",se,f(e.sErrorAddressMessage),1)):c("",!0)],512)])))),128)),m("div",pe,[m("button",{onClick:a[3]||(a[3]=e=>{localStorage.setItem("twAddressKey",JSON.stringify(A.addressList))})},"localStorage暫存"),m("button",{onClick:a[4]||(a[4]=e=>{localStorage.clear()})},"localStorage暫存清空"),m("button",{onClick:a[5]||(a[5]=e=>h()),"data-test":"address_summit"},"表單送出")])],64))}},[["__scopeId","data-v-177a51d7"]]))}}}));