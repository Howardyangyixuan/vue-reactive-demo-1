!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);class o{constructor(){this.deps=new Set,console.log(this.deps)}depend(){o.target&&this.deps.add(o.target),console.log("depend:",this.deps)}notify(){for(const e of this.deps)console.log("watcher:",e),e.update()}}function r(e){return null!=e&&"object"==typeof e}function s(e,t){const n=new o;let s=e[t];Object.defineProperty(e,t,{get:()=>(n.depend(),s),set(e){s=e,n.notify()}}),r(s)&&l(s)}function l(e){if(r(e))for(let t of Object.keys(e))s(e,t);return e}o.target=null;const i=[];class c{constructor(e){this.render=e,this.get()}get(){var e;e=this,i.push(o.target),o.target=e,this.render(),o.target=i.pop()}update(){this.get()}}const u=new class{constructor({el:e,data:t,template:n}){console.log(e),console.log(t),console.log(n),this.el=e;let o=l(t);this.template=n;for(let e of Object.keys(t))console.log(e),Object.defineProperty(this,e,{get:()=>(console.log("proxy"),o[e]),set(t){console.log(t),o[e]=t}});return this}render(){let e=this.template;const t=[...this.template.matchAll(/{{([a-z]+)}}/g)];console.log(t);for(let n of t)e=e.replace(n[0],JSON.stringify(this[n[1]]));document.getElementById(this.el).innerHTML=e}$mount(){return new c(this.render.bind(this)),this}}({el:"app",data:{msg:"Hello World",arr:[1,2,3],obj:{name:"howard"}},template:" <br> \n msg is {{msg}} \n <br>\n arr is {{arr}} \n <br> \n obj is {{obj}} \n <br> \n"}).$mount();document.getElementById("msg").addEventListener("keyup",e=>{u.msg=e.target.value}),window.data=u}]);