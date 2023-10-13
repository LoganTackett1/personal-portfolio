(()=>{"use strict";var n={424:(n,t,e)=>{e.d(t,{Z:()=>h});var r=e(81),o=e.n(r),i=e(645),a=e.n(i),c=e(667),s=e.n(c),l=new URL(e(10),e.b),d=new URL(e(553),e.b),u=a()(o()),f=s()(l),p=s()(d);u.push([n.id,`@font-face {\n  font-family: "ubuntu";\n  src: url(${f});\n  font-weight: normal;\n}\n@font-face {\n  font-family: "ubuntu";\n  src: url(${p});\n  font-weight: bold;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font-family: "ubuntu";\n  font-weight: normal;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  width: 100vw;\n  height: auto;\n  display: grid;\n  grid-template-rows: 1fr;\n  grid-template-columns: 1fr;\n}\n\n.canvas-container {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n}\n\ncanvas {\n  opacity: 0.7;\n}\n\n#content {\n  z-index: 2;\n  position: absolute;\n  width: 100%;\n  height: 2000px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nheader {\n  width: 100%;\n  height: 33vh;\n  margin-top: 33vh;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr;\n}\n\nheader > h1 {\n  justify-self: center;\n  align-self: center;\n  width: 80%;\n  font-size: 33px;\n  font-weight: normal;\n  text-align: center;\n  color: #3b3b3b;\n}\n\nheader > h1 > strong {\n  color: #009063;\n  font-weight: bold;\n}\n\n#navbar {\n  z-index: 3;\n  position: fixed;\n  width: 100%;\n  height: 100vh;\n\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: flex-start;\n}\n\n#navbar-button {\n  margin-left: 10px;\n  margin-top: 10px;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n\n  width: 40px;\n  height: 40px;\n  border: solid #009063 3px;\n  border-radius: 10px;\n  background: transparent;\n}\n\n#navbar-container {\n  width: 50%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  background-color: #009063;\n  transition: width 0.33s;\n}\n\n#navbar-container > button {\n  margin-left: 20px;\n  margin-top: 20px;\n  font-size: 30px;\n  color: white;\n  background: transparent;\n  border: none;\n}\n\n#navbar-container.nav-off {\n  width: 0px;\n}\n\n.bar {\n  width: 25px;\n  height: 3px;\n  background-color: #009063;\n}\n`,""]);const h=u},645:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},667:n=>{n.exports=function(n,t){return t||(t={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]|(%20)/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],l=r.base?s[0]+r.base:s[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var f=e(u),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var h=o(p,r);r.byIndex=c,t.splice(c,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=e(i[a]);t[c].references--}for(var s=r(n,o),l=0;l<i.length;l++){var d=e(i[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=s}}},569:n=>{var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},565:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},589:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},553:(n,t,e)=>{n.exports=e.p+"fec2d0f1431a6114a6ce.ttf"},10:(n,t,e)=>{n.exports=e.p+"1cbb1b79a23478cc89ad.ttf"}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return n[r](i,i.exports,e),i.exports}e.m=n,e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&(n=t.currentScript.src),!n)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!n;)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,e.nc=void 0,(()=>{var n=e(379),t=e.n(n),r=e(795),o=e.n(r),i=e(569),a=e.n(i),c=e(565),s=e.n(c),l=e(216),d=e.n(l),u=e(589),f=e.n(u),p=e(424),h={};h.styleTagTransform=f(),h.setAttributes=s(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),t()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals;const g={add:function(n,t){if(n.length!==t.length)throw Error("Cannot add array vectors of different dimension!");const e=new Array(n.length);for(let r=0;r<n.length;r++)e[r]=n[r]+t[r];return e},addMut:function(n,t){if(n.length!==t.length)throw Error("Cannot add array vectors of different dimension!");for(let e=0;e<n.length;e++)n[e]+=t[e];return n},scale:function(n,t){const e=new Array(n.length);for(let r=0;r<n.length;r++)e[r]=n[r]*t;return e},scaleMut:function(n,t){for(let e=0;e<n.length;e++)n[e]*=t;return n},dotProduct:function(n,t){if(n.length!==t.length)throw Error("Cannot dot product array vectors of different dimension!");let e=0;for(let r=0;r<n.length;r++)e+=n[r]*t[r];return e},matrixMultiply:function(n,t){if(n[0].length!==t.length)throw Error("Cannot multiply matrix and vector: incompatible dimension!");const e=new Array(n.length);for(let r=0;r<n.length;r++)e[r]=g.dotProduct(n[r],t);return e}},m={create4DCube:function(){const n=[-1,1],t={points:[]};for(let e of n)for(let r of n)for(let o of n)for(let i of n)t.points.push([e,r,o,i]);const e={};function r(n,t){let e=0;for(let r=0;r<4;r++)n[r]===t[r]&&(e+=1);return 3===e}t.drawLines=[];for(let n=0;n<t.points.length;n++)for(let o=0;o<t.points.length;o++)n===o||`${n},${o}`in e||`${o},${n}`in e||r(t.points[n],t.points[o])&&(t.drawLines.push([n,o]),e[`${n},${o}`]=null);return t.center=[0,0,0,0],t.threeDMap=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],t.twoDMap=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],t},update3DMap:function(n,t,e){const r=Math.cos(t),o=Math.sin(t);for(let t=0;t<n.points.length;t++){const i=n.points[t][0],a=n.points[t][1],c=n.points[t][2],s=n.points[t][3];n.threeDMap[t][0]=(i*r-a*o)/(c*o+s*r-e),n.threeDMap[t][1]=(i*o+a*r)/(c*o+s*r-e),n.threeDMap[t][2]=(c*r-s*o)/(c*o+s*r-e)}},getCenteringMatrix:function(n){const t=n[0],e=n[1],r=n[2],o=Math.sqrt(e**2+r**2),i=Math.sqrt(t**2+e**2+r**2);return[[o/i,-t*e/(o*i),-t*r/(o*i)],[0,r/o,-e/o],[t/i,e/i,r/i]]},update2DMap:function(n,t,e){for(let r=0;r<n.threeDMap.length;r++){const o=g.matrixMultiply(t,n.threeDMap[r]);n.twoDMap[r][0]=o[0]/(o[2]-e),n.twoDMap[r][1]=o[1]/(o[2]-e),n.twoDMap[r][2]=o[0]**2+o[1]**2+(1-o[2])**2}}},w=function(n,t,e,r,o,i,a,c,s){const l=(o-t)/c,d=(i-e)/c,u=4/(r+1)+2,f=(4/(a+1)+2-u)/c;for(let r=0;r<c;r++)n.beginPath(),n.moveTo(t+r*l,e+r*d),n.lineTo(t+(r+1)*l,e+(r+1)*d),n.strokeStyle="rgb(227,224,243)",n.lineWidth=(u+r*f)*(s/700),n.stroke(),n.closePath()};m.drawCube=function(n,t,e){n.clearRect(0,0,t.width,t.height);for(let r of e.drawLines){const o=e.twoDMap[r[0]],i=e.twoDMap[r[0]][2],a=e.twoDMap[r[1]],c=e.twoDMap[r[1]][2];w(n,o[0]*(2*t.width)+t.width/2,o[1]*(2*t.width)+t.width/2,i,a[0]*(2*t.width)+t.width/2,a[1]*(2*t.width)+t.width/2,c,5,t.width)}};const v=document.getElementById("tesseract"),b=Math.min(window.innerWidth,window.innerHeight);v.width=b,v.height=b,window.addEventListener("resize",(()=>{const n=Math.min(window.innerWidth,window.innerHeight);v.width=n,v.height=n}));const y=v.getContext("2d"),x=m.create4DCube();let M=0;setInterval((()=>{m.update3DMap(x,M,3);const n=m.getCenteringMatrix([0,Math.cos(0),Math.sin(0)]);m.update2DMap(x,n,3.7),m.drawCube(y,v,x),M+=.003}),16);const D=document.getElementById("navbar");window.addEventListener("scroll",(()=>{D.getBoundingClientRect().y<=10?D.classList.add("sticky-true"):D.classList.remove("sticky-true")}));const C=document.getElementById("navbar-button"),E=document.getElementById("navbar-container");C.addEventListener("click",(()=>{E.classList.toggle("nav-off")}))})()})();