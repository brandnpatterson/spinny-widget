!function(e){var n={};function t(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t(1)},function(e,n,t){"use strict";var o=document.querySelector(".animate-one"),r=document.querySelector(".animate-two"),u=document.querySelector(".modal-one"),c=document.querySelector(".modal-one .modal-background"),i=document.querySelector(".modal-one .modal-close"),a=document.querySelector(".modal-two"),d=document.querySelector(".modal-two .modal-background"),l=document.querySelector(".modal-two .modal-close"),s=!1,m=!1,f=function(e,n,t){e.style.animationPlayState=t,n.style.animationPlayState=t},v=function(e){return e.classList.toggle("is-active")};o.addEventListener("mouseover",function(){return f(r,o,"paused")}),r.addEventListener("mouseover",function(){return f(r,o,"paused")}),o.addEventListener("mouseleave",function(){!0!==s&&f(r,o,"running")}),r.addEventListener("mouseleave",function(){!0!==m&&f(r,o,"running")}),o.addEventListener("click",function(){f(r,o,"paused"),v(u),s=!0}),c.addEventListener("click",function(){f(r,o,"running"),v(u),s=!1}),i.addEventListener("click",function(){f(r,o,"running"),v(u),s=!1}),r.addEventListener("click",function(){f(r,o,"paused"),v(a),m=!0}),d.addEventListener("click",function(){f(r,o,"running"),v(a),m=!1}),l.addEventListener("click",function(){f(r,o,"running"),v(a),m=!1})}]);
//# sourceMappingURL=spinny-widget.js.map