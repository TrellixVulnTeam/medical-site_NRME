!function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}(self.webpackChunkcuba=self.webpackChunkcuba||[]).push([[9401],{66809:function(t,e,r){"use strict";var n=r(16387);e.Z=n.Z.Symbol},85525:function(t,e,r){"use strict";r.d(e,{Z:function(){return te}});var n=function(t,e){return t===e||t!=t&&e!=e},o=function(t,e){for(var r=t.length;r--;)if(n(t[r][0],e))return r;return-1},c=Array.prototype.splice;function i(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}i.prototype.clear=function(){this.__data__=[],this.size=0},i.prototype.delete=function(t){var e=this.__data__,r=o(e,t);return!(r<0||(r==e.length-1?e.pop():c.call(e,r,1),--this.size,0))},i.prototype.get=function(t){var e=this.__data__,r=o(e,t);return r<0?void 0:e[r][1]},i.prototype.has=function(t){return o(this.__data__,t)>-1},i.prototype.set=function(t,e){var r=this.__data__,n=o(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this};var u,a=i,s=r(51936),f=r(81336),l=function(t){if(!(0,f.Z)(t))return!1;var e=(0,s.Z)(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e},p=r(16387),b=p.Z["__core-js_shared__"],y=(u=/[^.]+$/.exec(b&&b.keys&&b.keys.IE_PROTO||""))?"Symbol(src)_1."+u:"",j=Function.prototype.toString,h=function(t){if(null!=t){try{return j.call(t)}catch(e){}try{return t+""}catch(e){}}return""},v=/^\[object .+?Constructor\]$/,d=RegExp("^"+Function.prototype.toString.call(Object.prototype.hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),_=function(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return function(t){return!(!(0,f.Z)(t)||(e=t,y&&y in e))&&(l(t)?d:v).test(h(t));var e}(r)?r:void 0},g=_(p.Z,"Map"),Z=_(Object,"create"),m=Object.prototype.hasOwnProperty,O=Object.prototype.hasOwnProperty;function A(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}A.prototype.clear=function(){this.__data__=Z?Z(null):{},this.size=0},A.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},A.prototype.get=function(t){var e=this.__data__;if(Z){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return m.call(e,t)?e[t]:void 0},A.prototype.has=function(t){var e=this.__data__;return Z?void 0!==e[t]:O.call(e,t)},A.prototype.set=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=Z&&void 0===e?"__lodash_hash_undefined__":e,this};var w=A,x=function(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map};function S(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}S.prototype.clear=function(){this.size=0,this.__data__={hash:new w,map:new(g||a),string:new w}},S.prototype.delete=function(t){var e=x(this,t).delete(t);return this.size-=e?1:0,e},S.prototype.get=function(t){return x(this,t).get(t)},S.prototype.has=function(t){return x(this,t).has(t)},S.prototype.set=function(t,e){var r=x(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this};var T=S;function P(t){var e=this.__data__=new a(t);this.size=e.size}P.prototype.clear=function(){this.__data__=new a,this.size=0},P.prototype.delete=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r},P.prototype.get=function(t){return this.__data__.get(t)},P.prototype.has=function(t){return this.__data__.has(t)},P.prototype.set=function(t,e){var r=this.__data__;if(r instanceof a){var n=r.__data__;if(!g||n.length<199)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new T(n)}return r.set(t,e),this.size=r.size,this};var z=P,F=function(){try{var t=_(Object,"defineProperty");return t({},"",{}),t}catch(e){}}(),U=function(t,e,r){"__proto__"==e&&F?F(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r},k=Object.prototype.hasOwnProperty,q=function(t,e,r){var o=t[e];k.call(t,e)&&n(o,r)&&(void 0!==r||e in t)||U(t,e,r)},I=function(t,e,r,n){var o=!r;r||(r={});for(var c=-1,i=e.length;++c<i;){var u=e[c],a=n?n(r[u],t[u],u,r,t):void 0;void 0===a&&(a=t[u]),o?U(r,u,a):q(r,u,a)}return r},M=r(93232),E=function(t){return(0,M.Z)(t)&&"[object Arguments]"==(0,s.Z)(t)},B=Object.prototype,D=B.hasOwnProperty,$=B.propertyIsEnumerable,C=E(function(){return arguments}())?E:function(t){return(0,M.Z)(t)&&D.call(t,"callee")&&!$.call(t,"callee")},L=Array.isArray,V="object"==typeof exports&&exports&&!exports.nodeType&&exports,N=V&&"object"==typeof module&&module&&!module.nodeType&&module,R=N&&N.exports===V?p.Z.Buffer:void 0,W=(R?R.isBuffer:void 0)||function(){return!1},J=/^(?:0|[1-9]\d*)$/,Q=function(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&J.test(t))&&t>-1&&t%1==0&&t<e},G=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991},X={};X["[object Float32Array]"]=X["[object Float64Array]"]=X["[object Int8Array]"]=X["[object Int16Array]"]=X["[object Int32Array]"]=X["[object Uint8Array]"]=X["[object Uint8ClampedArray]"]=X["[object Uint16Array]"]=X["[object Uint32Array]"]=!0,X["[object Arguments]"]=X["[object Array]"]=X["[object ArrayBuffer]"]=X["[object Boolean]"]=X["[object DataView]"]=X["[object Date]"]=X["[object Error]"]=X["[object Function]"]=X["[object Map]"]=X["[object Number]"]=X["[object Object]"]=X["[object RegExp]"]=X["[object Set]"]=X["[object String]"]=X["[object WeakMap]"]=!1;var Y=function(t){return function(e){return t(e)}},H=r(75333),K="object"==typeof exports&&exports&&!exports.nodeType&&exports,tt=K&&"object"==typeof module&&module&&!module.nodeType&&module,et=tt&&tt.exports===K&&H.Z.process,rt=function(){try{return tt&&tt.require&&tt.require("util").types||et&&et.binding&&et.binding("util")}catch(t){}}(),nt=rt&&rt.isTypedArray,ot=nt?Y(nt):function(t){return(0,M.Z)(t)&&G(t.length)&&!!X[(0,s.Z)(t)]},ct=Object.prototype.hasOwnProperty,it=function(t,e){var r=L(t),n=!r&&C(t),o=!r&&!n&&W(t),c=!r&&!n&&!o&&ot(t),i=r||n||o||c,u=i?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],a=u.length;for(var s in t)!e&&!ct.call(t,s)||i&&("length"==s||o&&("offset"==s||"parent"==s)||c&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||Q(s,a))||u.push(s);return u},ut=Object.prototype,at=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||ut)},st=(0,r(92719).Z)(Object.keys,Object),ft=Object.prototype.hasOwnProperty,lt=function(t){return null!=t&&G(t.length)&&!l(t)},pt=function(t){return lt(t)?it(t):function(t){if(!at(t))return st(t);var e=[];for(var r in Object(t))ft.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)},bt=Object.prototype.hasOwnProperty,yt=function(t){return lt(t)?it(t,!0):function(t){if(!(0,f.Z)(t))return function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e}(t);var e=at(t),r=[];for(var n in t)("constructor"!=n||!e&&bt.call(t,n))&&r.push(n);return r}(t)},jt="object"==typeof exports&&exports&&!exports.nodeType&&exports,ht=jt&&"object"==typeof module&&module&&!module.nodeType&&module,vt=ht&&ht.exports===jt?p.Z.Buffer:void 0,dt=vt?vt.allocUnsafe:void 0,_t=function(){return[]},gt=Object.prototype.propertyIsEnumerable,Zt=Object.getOwnPropertySymbols,mt=Zt?function(t){return null==t?[]:(t=Object(t),function(e,r){for(var n=-1,o=null==e?0:e.length,c=0,i=[];++n<o;){var u=e[n];gt.call(t,u)&&(i[c++]=u)}return i}(Zt(t)))}:_t,Ot=function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t},At=r(63041),wt=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)Ot(e,mt(t)),t=(0,At.Z)(t);return e}:_t,xt=function(t,e,r){var n=e(t);return L(t)?n:Ot(n,r(t))},St=function(t){return xt(t,pt,mt)},Tt=function(t){return xt(t,yt,wt)},Pt=_(p.Z,"DataView"),zt=_(p.Z,"Promise"),Ft=_(p.Z,"Set"),Ut=_(p.Z,"WeakMap"),kt=h(Pt),qt=h(g),It=h(zt),Mt=h(Ft),Et=h(Ut),Bt=s.Z;(Pt&&"[object DataView]"!=Bt(new Pt(new ArrayBuffer(1)))||g&&"[object Map]"!=Bt(new g)||zt&&"[object Promise]"!=Bt(zt.resolve())||Ft&&"[object Set]"!=Bt(new Ft)||Ut&&"[object WeakMap]"!=Bt(new Ut))&&(Bt=function(t){var e=(0,s.Z)(t),r="[object Object]"==e?t.constructor:void 0,n=r?h(r):"";if(n)switch(n){case kt:return"[object DataView]";case qt:return"[object Map]";case It:return"[object Promise]";case Mt:return"[object Set]";case Et:return"[object WeakMap]"}return e});var Dt=Bt,$t=Object.prototype.hasOwnProperty,Ct=p.Z.Uint8Array,Lt=function(t){var e=new t.constructor(t.byteLength);return new Ct(e).set(new Ct(t)),e},Vt=/\w*$/,Nt=r(66809),Rt=Nt.Z?Nt.Z.prototype:void 0,Wt=Rt?Rt.valueOf:void 0,Jt=Object.create,Qt=function(){function t(){}return function(e){if(!(0,f.Z)(e))return{};if(Jt)return Jt(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}(),Gt=rt&&rt.isMap,Xt=Gt?Y(Gt):function(t){return(0,M.Z)(t)&&"[object Map]"==Dt(t)},Yt=rt&&rt.isSet,Ht=Yt?Y(Yt):function(t){return(0,M.Z)(t)&&"[object Set]"==Dt(t)},Kt={};Kt["[object Arguments]"]=Kt["[object Array]"]=Kt["[object ArrayBuffer]"]=Kt["[object DataView]"]=Kt["[object Boolean]"]=Kt["[object Date]"]=Kt["[object Float32Array]"]=Kt["[object Float64Array]"]=Kt["[object Int8Array]"]=Kt["[object Int16Array]"]=Kt["[object Int32Array]"]=Kt["[object Map]"]=Kt["[object Number]"]=Kt["[object Object]"]=Kt["[object RegExp]"]=Kt["[object Set]"]=Kt["[object String]"]=Kt["[object Symbol]"]=Kt["[object Uint8Array]"]=Kt["[object Uint8ClampedArray]"]=Kt["[object Uint16Array]"]=Kt["[object Uint32Array]"]=!0,Kt["[object Error]"]=Kt["[object Function]"]=Kt["[object WeakMap]"]=!1;var te=function t(e,r,n,o,c,i){var u,a=1&r,s=2&r,l=4&r;if(n&&(u=c?n(e,o,c,i):n(e)),void 0!==u)return u;if(!(0,f.Z)(e))return e;var p=L(e);if(p){if(u=function(t){var e=t.length,r=new t.constructor(e);return e&&"string"==typeof t[0]&&$t.call(t,"index")&&(r.index=t.index,r.input=t.input),r}(e),!a)return function(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}(e,u)}else{var b=Dt(e),y="[object Function]"==b||"[object GeneratorFunction]"==b;if(W(e))return function(t,e){if(e)return t.slice();var r=t.length,n=dt?dt(r):new t.constructor(r);return t.copy(n),n}(e,a);if("[object Object]"==b||"[object Arguments]"==b||y&&!c){if(u=s||y?{}:function(t){return"function"!=typeof t.constructor||at(t)?{}:Qt((0,At.Z)(t))}(e),!a)return s?function(t,e){return I(t,wt(t),e)}(e,function(t,e){return t&&I(e,yt(e),t)}(u,e)):function(t,e){return I(t,mt(t),e)}(e,function(t,e){return t&&I(e,pt(e),t)}(u,e))}else{if(!Kt[b])return c?e:{};u=function(t,e,r){var n,o,c=t.constructor;switch(e){case"[object ArrayBuffer]":return Lt(t);case"[object Boolean]":case"[object Date]":return new c(+t);case"[object DataView]":return function(t,e){var r=e?Lt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(t,e){var r=e?Lt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,r);case"[object Map]":return new c;case"[object Number]":case"[object String]":return new c(t);case"[object RegExp]":return(o=new(n=t).constructor(n.source,Vt.exec(n))).lastIndex=n.lastIndex,o;case"[object Set]":return new c;case"[object Symbol]":return Wt?Object(Wt.call(t)):{}}}(e,b,a)}}i||(i=new z);var j=i.get(e);if(j)return j;i.set(e,u),Ht(e)?e.forEach(function(o){u.add(t(o,r,n,o,e,i))}):Xt(e)&&e.forEach(function(o,c){u.set(c,t(o,r,n,c,e,i))});var h=p?void 0:(l?s?Tt:St:s?yt:pt)(e);return function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n&&!1!==e(t[r],r););}(h||e,function(o,c){h&&(o=e[c=o]),q(u,c,t(o,r,n,c,e,i))}),u}},51936:function(t,e,r){"use strict";r.d(e,{Z:function(){return f}});var n=r(66809),o=Object.prototype,c=o.hasOwnProperty,i=o.toString,u=n.Z?n.Z.toStringTag:void 0,a=Object.prototype.toString,s=n.Z?n.Z.toStringTag:void 0,f=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":s&&s in Object(t)?function(t){var e=c.call(t,u),r=t[u];try{t[u]=void 0;var n=!0}catch(a){}var o=i.call(t);return n&&(e?t[u]=r:delete t[u]),o}(t):function(t){return a.call(t)}(t)}},75333:function(t,e){"use strict";var r="object"==typeof global&&global&&global.Object===Object&&global;e.Z=r},63041:function(t,e,r){"use strict";var n=(0,r(92719).Z)(Object.getPrototypeOf,Object);e.Z=n},92719:function(t,e){"use strict";e.Z=function(t,e){return function(r){return t(e(r))}}},16387:function(t,e,r){"use strict";var n=r(75333),o="object"==typeof self&&self&&self.Object===Object&&self,c=n.Z||o||Function("return this")();e.Z=c},81336:function(t,e){"use strict";e.Z=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},93232:function(t,e){"use strict";e.Z=function(t){return null!=t&&"object"==typeof t}},43675:function(e,r,n){"use strict";n.d(r,{L:function(){return s}});var o=n(35366),c=n(68003),i=n(77818),u=n(61116);function a(t,e){if(1&t&&(o.TgZ(0,"li",5),o._uU(1),o.qZA()),2&t){var r=e.$implicit;o.xp6(1),o.Oqu(r)}}var s=function(){var e=function(){function e(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e)}var r,n,o;return r=e,(n=[{key:"ngOnInit",value:function(){}}])&&t(r.prototype,n),o&&t(r,o),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-breadcrumb"]],inputs:{title:"title",items:"items",active_item:"active_item"},decls:14,vars:5,consts:[[1,"container-fluid"],[1,"page-title"],[1,"row"],[1,"col-6"],[1,"breadcrumb"],[1,"breadcrumb-item"],[3,"routerLink"],[3,"icon"],["class","breadcrumb-item",4,"ngFor","ngForOf"],[1,"breadcrumb-item","active"]],template:function(t,e){1&t&&(o.TgZ(0,"div",0),o.TgZ(1,"div",1),o.TgZ(2,"div",2),o.TgZ(3,"div",3),o.TgZ(4,"h3"),o._uU(5),o.qZA(),o.qZA(),o.TgZ(6,"div",3),o.TgZ(7,"ol",4),o.TgZ(8,"li",5),o.TgZ(9,"a",6),o._UZ(10,"app-feather-icons",7),o.qZA(),o.qZA(),o.YNc(11,a,2,1,"li",8),o.TgZ(12,"li",9),o._uU(13),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA(),o.qZA()),2&t&&(o.xp6(5),o.Oqu(e.title),o.xp6(4),o.Q6J("routerLink","/dashboard/default"),o.xp6(1),o.Q6J("icon","home"),o.xp6(1),o.Q6J("ngForOf",e.items),o.xp6(2),o.Oqu(e.active_item))},directives:[c.yS,i.A,u.sg],styles:[""]}),e}()}}])}();