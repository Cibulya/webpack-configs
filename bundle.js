(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var r=e.g.document;if(!t&&r&&(r.currentScript&&(t=r.currentScript.src),!t)){var c=r.getElementsByTagName("script");c.length&&(t=c[c.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})();const t=e.p+"assets/pics/6ed691d8751031ad65d7.jpg";!function(){var e=document.createElement("header");e.classList.add("header"),e.innerText="Hello from webpack";var r=document.body,c=document.createElement("img");c.classList.add("header__img"),c.src=t,e.append(c),r.append(e)}()})();