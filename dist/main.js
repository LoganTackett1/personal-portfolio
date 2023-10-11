(()=>{"use strict";var t={424:(t,n,e)=>{e.d(n,{Z:()=>h});var r=e(81),o=e.n(r),i=e(645),a=e.n(i),s=e(667),c=e.n(s),l=new URL(e(10),e.b),d=new URL(e(553),e.b),u=a()(o()),f=c()(l),p=c()(d);u.push([t.id,`@font-face {\n  font-family: "ubuntu";\n  src: url(${f});\n  font-weight: normal;\n}\n@font-face {\n  font-family: "ubuntu";\n  src: url(${p});\n  font-weight: bold;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n  font-family: "ubuntu";\n  font-weight: normal;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  width: 100vw;\n  height: auto;\n  display: grid;\n  grid-template-rows: 1fr;\n  grid-template-columns: 1fr;\n}\n\n.canvas-container {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1;\n}\n\ncanvas {\n  opacity: 0.7;\n}\n\n#content {\n  z-index: 2;\n  position: absolute;\n  width: 100%;\n  height: 2000px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n}\n\nheader {\n  width: 100%;\n  height: 33vh;\n  margin-top: calc(33vh - 70px);\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr;\n}\n\nheader > h1 {\n  justify-self: center;\n  align-self: center;\n  width: 80%;\n  font-size: 33px;\n  font-weight: normal;\n  text-align: center;\n  color: #3b3b3b;\n}\n\nheader > h1 > strong {\n  color: #009063;\n  font-weight: bold;\n}\n\n#navbar {\n  position: sticky;\n  box-sizing: border-box;\n  padding-left: 15px;\n  width: 100%;\n  height: 70px;\n  top: 0;\n  display: grid;\n  grid: 1fr/1fr;\n}\n\n#navbar-button {\n  grid-area: 1/1/-1/-1;\n  width: 40px;\n  height: 40px;\n  justify-self: left;\n  align-self: center;\n  border: solid #009063 3px;\n  border-radius: 10px;\n  background: transparent;\n}\n\n#navbar-container {\n  grid-area: 1/1/-1/-1;\n  justify-self: right;\n  align-self: center;\n  visibility: hidden;\n}\n`,""]);const h=u},645:t=>{t.exports=function(t){var n=[];return n.toString=function(){return this.map((function(n){var e="",r=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),r&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=t(n),r&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(t,e,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<t.length;l++){var d=[].concat(t[l]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},667:t=>{t.exports=function(t,n){return n||(n={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),n.hash&&(t+=n.hash),/["'() \t\n]|(%20)/.test(t)||n.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var n=[];function e(t){for(var e=-1,r=0;r<n.length;r++)if(n[r].identifier===t){e=r;break}return e}function r(t,r){for(var i={},a=[],s=0;s<t.length;s++){var c=t[s],l=r.base?c[0]+r.base:c[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var f=e(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)n[f].references++,n[f].updater(p);else{var h=o(p,r);r.byIndex=s,n.splice(s,0,{identifier:u,updater:h,references:1})}a.push(u)}return a}function o(t,n){var e=n.domAPI(n);return e.update(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap&&n.supports===t.supports&&n.layer===t.layer)return;e.update(t=n)}else e.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var s=e(i[a]);n[s].references--}for(var c=r(t,o),l=0;l<i.length;l++){var d=e(i[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=c}}},569:t=>{var n={};t.exports=function(t,e){var r=function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},216:t=>{t.exports=function(t){var n=document.createElement("style");return t.setAttributes(n,t.attributes),t.insert(n,t.options),n}},565:(t,n,e)=>{t.exports=function(t){var n=e.nc;n&&t.setAttribute("nonce",n)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=t.insertStyleElement(t);return{update:function(e){!function(t,n,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,t,n.options)}(n,t,e)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)}}}},589:t=>{t.exports=function(t,n){if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}},553:(t,n,e)=>{t.exports=e.p+"fec2d0f1431a6114a6ce.ttf"},10:(t,n,e)=>{t.exports=e.p+"1cbb1b79a23478cc89ad.ttf"}},n={};function e(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return t[r](i,i.exports,e),i.exports}e.m=t,e.n=t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},e.d=(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!t;)t=r[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),e.b=document.baseURI||self.location.href,e.nc=void 0,(()=>{var t=e(379),n=e.n(t),r=e(795),o=e.n(r),i=e(569),a=e.n(i),s=e(565),c=e.n(s),l=e(216),d=e.n(l),u=e(589),f=e.n(u),p=e(424),h={};h.styleTagTransform=f(),h.setAttributes=c(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),n()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals;const g={add:function(t,n){if(t.length!==n.length)throw Error("Cannot add array vectors of different dimension!");const e=new Array(t.length);for(let r=0;r<t.length;r++)e[r]=t[r]+n[r];return e},addMut:function(t,n){if(t.length!==n.length)throw Error("Cannot add array vectors of different dimension!");for(let e=0;e<t.length;e++)t[e]+=n[e];return t},scale:function(t,n){const e=new Array(t.length);for(let r=0;r<t.length;r++)e[r]=t[r]*n;return e},scaleMut:function(t,n){for(let e=0;e<t.length;e++)t[e]*=n;return t},dotProduct:function(t,n){if(t.length!==n.length)throw Error("Cannot dot product array vectors of different dimension!");let e=0;for(let r=0;r<t.length;r++)e+=t[r]*n[r];return e},matrixMultiply:function(t,n){if(t[0].length!==n.length)throw Error("Cannot multiply matrix and vector: incompatible dimension!");const e=new Array(t.length);for(let r=0;r<t.length;r++)e[r]=g.dotProduct(t[r],n);return e}},m={create4DCube:function(){const t=[-1,1],n={points:[]};for(let e of t)for(let r of t)for(let o of t)for(let i of t)n.points.push([e,r,o,i]);const e={};function r(t,n){let e=0;for(let r=0;r<4;r++)t[r]===n[r]&&(e+=1);return 3===e}n.drawLines=[];for(let t=0;t<n.points.length;t++)for(let o=0;o<n.points.length;o++)t===o||`${t},${o}`in e||`${o},${t}`in e||r(n.points[t],n.points[o])&&(n.drawLines.push([t,o]),e[`${t},${o}`]=null);return n.center=[0,0,0,0],n.threeDMap=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],n.twoDMap=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],n},update3DMap:function(t,n,e){const r=Math.cos(n),o=Math.sin(n);for(let n=0;n<t.points.length;n++){const i=t.points[n][0],a=t.points[n][1],s=t.points[n][2],c=t.points[n][3];t.threeDMap[n][0]=(i*r-a*o)/(s*o+c*r-e),t.threeDMap[n][1]=(i*o+a*r)/(s*o+c*r-e),t.threeDMap[n][2]=(s*r-c*o)/(s*o+c*r-e)}},getCenteringMatrix:function(t){const n=t[0],e=t[1],r=t[2],o=Math.sqrt(e**2+r**2),i=Math.sqrt(n**2+e**2+r**2);return[[o/i,-n*e/(o*i),-n*r/(o*i)],[0,r/o,-e/o],[n/i,e/i,r/i]]},update2DMap:function(t,n,e){for(let r=0;r<t.threeDMap.length;r++){const o=g.matrixMultiply(n,t.threeDMap[r]);t.twoDMap[r][0]=o[0]/(o[2]-e),t.twoDMap[r][1]=o[1]/(o[2]-e),t.twoDMap[r][2]=o[0]**2+o[1]**2+(1-o[2])**2}}},w=function(t,n,e,r,o,i,a,s,c){const l=(o-n)/s,d=(i-e)/s,u=4/(r+1)+2,f=(4/(a+1)+2-u)/s;for(let r=0;r<s;r++)t.beginPath(),t.moveTo(n+r*l,e+r*d),t.lineTo(n+(r+1)*l,e+(r+1)*d),t.strokeStyle="rgb(227,224,243)",t.lineWidth=(u+r*f)*(c/700),t.stroke(),t.closePath()};m.drawCube=function(t,n,e){t.clearRect(0,0,n.width,n.height);for(let r of e.drawLines){const o=e.twoDMap[r[0]],i=e.twoDMap[r[0]][2],a=e.twoDMap[r[1]],s=e.twoDMap[r[1]][2];w(t,o[0]*(2*n.width)+n.width/2,o[1]*(2*n.width)+n.width/2,i,a[0]*(2*n.width)+n.width/2,a[1]*(2*n.width)+n.width/2,s,5,n.width)}};const v=document.getElementById("tesseract"),y=Math.min(window.innerWidth,window.innerHeight);v.width=y,v.height=y,window.addEventListener("resize",(()=>{const t=Math.min(window.innerWidth,window.innerHeight);v.width=t,v.height=t}));const b=v.getContext("2d"),x=m.create4DCube();let M=0;setInterval((()=>{m.update3DMap(x,M,3);const t=m.getCenteringMatrix([0,Math.cos(0),Math.sin(0)]);m.update2DMap(x,t,3.7),m.drawCube(b,v,x),M+=.003}),16);const D=document.getElementById("navbar");window.addEventListener("scroll",(()=>{const t=D.getBoundingClientRect().y;console.log(t),t<=10?D.classList.add("sticky-true"):D.classList.remove("sticky-true")}))})()})();