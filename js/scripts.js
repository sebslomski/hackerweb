// ruto.js
(function(e){var t=[],n=function(){},r={defaultPath:"/",before:n,on:n,notfound:n},i={current:null,previous:null,config:function(e){for(var t in e)e.hasOwnProperty(t)&&(r[t]=e[t]);return i},add:function(e,n,r){return e&&n&&(typeof n=="function"&&(r=n,n=null),t.push({path:e,name:n,fn:r||function(){}})),i},go:function(e){return location.hash=e,i},back:function(e){return i.previous?(history.back(),i.previous=null):e&&(location.hash=e),i}},s=function(){var e=location.hash.slice(1),n=!1,s=i.current;s&&s!=i.previous&&(i.previous=s),i.current=e;for(var o=0,u=t.length;o<u&&!n;o++){var a=t[o],f=a.path,l=a.name,c=a.fn;if(typeof f=="string")f.toLowerCase()==e.toLowerCase()&&(r.before.call(i,f,l),c.call(i),r.on.call(i,f,l),n=!0);else{var h=e.match(f);h&&(r.before.call(i,f,l,h),c.apply(i,h),r.on.call(i,f,l,h),n=!0)}}return n||r.notfound.call(i,f),i};i.init=function(t){return e.addEventListener("hashchange",s),location.hash.slice(1)?s():(location.hash=t||r.defaultPath,i)},i.reload=s,e.ruto=i})(window);
// amplify.store.js
(function(e,t){function i(e,i){n.addType(e,function(s,o,u){var a,f,l,c,h=o,p=(new Date).getTime();if(!s){h={},c=[],l=0;try{s=i.length;while(s=i.key(l++))r.test(s)&&(f=JSON.parse(i.getItem(s)),f.expires&&f.expires<=p?c.push(s):h[s.replace(r,"")]=f.data);while(s=c.pop())i.removeItem(s)}catch(d){}return h}s="__amplify__"+s;if(o===t){a=i.getItem(s),f=a?JSON.parse(a):{expires:-1};if(!(f.expires&&f.expires<=p))return f.data;i.removeItem(s)}else if(o===null)i.removeItem(s);else{f=JSON.stringify({data:o,expires:u.expires?p+u.expires:null});try{i.setItem(s,f)}catch(d){n[e]();try{i.setItem(s,f)}catch(d){throw n.error()}}}return h})}var n=e.store=function(e,t,r){var i=n.type;return r&&r.type&&r.type in n.types&&(i=r.type),n.types[i](e,t,r||{})};n.types={},n.type=null,n.addType=function(e,t){n.type||(n.type=e),n.types[e]=t,n[e]=function(t,r,i){return i=i||{},i.type=e,n(t,r,i)}},n.error=function(){return"amplify.store quota exceeded"};var r=/^__amplify__/;for(var s in{localStorage:1,sessionStorage:1})try{window[s].setItem("__amplify__","x"),window[s].removeItem("__amplify__"),i(s,window[s])}catch(o){}if(!n.types.localStorage&&window.globalStorage)try{i("globalStorage",window.globalStorage[window.location.hostname]),n.type==="sessionStorage"&&(n.type="globalStorage")}catch(o){}(function(){if(n.types.localStorage)return;var e=document.createElement("div"),r="amplify";e.style.display="none",document.getElementsByTagName("head")[0].appendChild(e);try{e.addBehavior("#default#userdata"),e.load(r)}catch(i){e.parentNode.removeChild(e);return}n.addType("userData",function(i,s,o){e.load(r);var u,a,f,l,c,h=s,p=(new Date).getTime();if(!i){h={},c=[],l=0;while(u=e.XMLDocument.documentElement.attributes[l++])a=JSON.parse(u.value),a.expires&&a.expires<=p?c.push(u.name):h[u.name]=a.data;while(i=c.pop())e.removeAttribute(i);return e.save(r),h}i=i.replace(/[^\-._0-9A-Za-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u37f-\u1fff\u200c-\u200d\u203f\u2040\u2070-\u218f]/g,"-"),i=i.replace(/^-/,"_-");if(s===t){u=e.getAttribute(i),a=u?JSON.parse(u):{expires:-1};if(!(a.expires&&a.expires<=p))return a.data;e.removeAttribute(i)}else s===null?e.removeAttribute(i):(f=e.getAttribute(i),a=JSON.stringify({data:s,expires:o.expires?p+o.expires:null}),e.setAttribute(i,a));try{e.save(r)}catch(d){f===null?e.removeAttribute(i):e.setAttribute(i,f),n.userData();try{e.setAttribute(i,a),e.save(r)}catch(d){throw f===null?e.removeAttribute(i):e.setAttribute(i,f),n.error()}}return h})})(),function(){function i(e){return e===t?t:JSON.parse(JSON.stringify(e))}var e={},r={};n.addType("memory",function(n,s,o){return n?s===t?i(e[n]):(r[n]&&(clearTimeout(r[n]),delete r[n]),s===null?(delete e[n],null):(e[n]=s,o.expires&&(r[n]=setTimeout(function(){delete e[n],delete r[n]},o.expires)),s)):i(e)})}()})(this.amplify=this.amplify||{});
// hogan.js
var Hogan={};(function(e,t){function n(e,t,n,r){function i(){}function s(){}i.prototype=e,s.prototype=e.subs;var o,u=new i;u.subs=new s,u.subsText={},u.ib();for(o in t)u.subs[o]=t[o],u.subsText[o]=r;for(o in n)u.partials[o]=n[o];return u}function f(e){return String(e===null||e===undefined?"":e)}function l(e){return e=f(e),a.test(e)?e.replace(r,"&amp;").replace(i,"&lt;").replace(s,"&gt;").replace(o,"&#39;").replace(u,"&quot;"):e}e.Template=function(e,t,n,r){e=e||{},this.r=e.code||this.r,this.c=n,this.options=r,this.text=t||"",this.partials=e.partials||{},this.subs=e.subs||{},this.ib()},e.Template.prototype={r:function(e,t,n){return""},v:l,t:f,render:function(t,n,r){return this.ri([t],n||{},r)},ri:function(e,t,n){return this.r(e,t,n)},ep:function(e,t){var r=this.partials[e],i=t[r.name];if(r.instance&&r.base==i)return r.instance;if(typeof i=="string"){if(!this.c)throw new Error("No compiler available.");i=this.c.compile(i,this.options)}return i?(this.partials[e].base=i,r.subs&&(this.activeSub===undefined&&(t.stackText=this.text),i=n(i,r.subs,r.partials,t.stackText||this.text)),this.partials[e].instance=i,i):null},rp:function(e,t,n,r){var i=this.ep(e,n);return i?i.ri(t,n,r):""},rs:function(e,t,n){var r=e[e.length-1];if(!c(r)){n(e,t,this);return}for(var i=0;i<r.length;i++)e.push(r[i]),n(e,t,this),e.pop()},s:function(e,t,n,r,i,s,o){var u;return c(e)&&e.length===0?!1:(typeof e=="function"&&(e=this.ms(e,t,n,r,i,s,o)),u=e===""||!!e,!r&&u&&t&&t.push(typeof e=="object"?e:t[t.length-1]),u)},d:function(e,t,n,r){var i=e.split("."),s=this.f(i[0],t,n,r),o=null;if(e==="."&&c(t[t.length-2]))s=t[t.length-1];else for(var u=1;u<i.length;u++)s&&typeof s=="object"&&s[i[u]]!=null?(o=s,s=s[i[u]]):s="";return r&&!s?!1:(!r&&typeof s=="function"&&(t.push(o),s=this.mv(s,t,n),t.pop()),s)},f:function(e,t,n,r){var i=!1,s=null,o=!1;for(var u=t.length-1;u>=0;u--){s=t[u];if(s&&typeof s=="object"&&s[e]!=null){i=s[e],o=!0;break}}return o?(!r&&typeof i=="function"&&(i=this.mv(i,t,n)),i):r?!1:""},ls:function(e,t,n,r,i){var s=this.options.delimiters;return this.options.delimiters=i,this.b(this.ct(f(e.call(t,r)),t,n)),this.options.delimiters=s,!1},ct:function(e,t,n){if(this.options.disableLambda)throw new Error("Lambda features disabled.");return this.c.compile(e,this.options).render(t,n)},b:t?function(e){this.buf.push(e)}:function(e){this.buf+=e},fl:t?function(){var e=this.buf.join("");return this.buf=[],e}:function(){var e=this.buf;return this.buf="",e},ib:function(){this.buf=t?[]:""},ms:function(e,t,n,r,i,s,o){var u,a=t[t.length-1],f=e.call(a);return typeof f=="function"?r?!0:(u=this.activeSub&&this.subsText[this.activeSub]?this.subsText[this.activeSub]:this.text,this.ls(f,a,n,u.substring(i,s),o)):f},mv:function(e,t,n){var r=t[t.length-1],i=e.call(r);return typeof i=="function"?this.ct(f(i.call(r)),r,n):i},sub:function(e,t,n,r){var i=this.subs[e];i&&(this.activeSub=e,i(t,n,this,r),this.activeSub=!1)}};var r=/&/g,i=/</g,s=/>/g,o=/\'/g,u=/\"/g,a=/[&<>\"\']/,c=Array.isArray||function(e){return Object.prototype.toString.call(e)==="[object Array]"}})(typeof exports!="undefined"?exports:Hogan);
// hnapi.js
(function(e){var t=function(){return+(new Date)},n=!!e.XDomainRequest,r="withCredentials"in new XMLHttpRequest||n,i={},s=function(s,o,u){o||(o=function(){}),u||(u=function(){});if(r){var a=i[s]||(e.XDomainRequest?new XDomainRequest:new XMLHttpRequest);a._timeout&&clearTimeout(a._timeout),a._timeout=setTimeout(function(){a.abort()},15e3),a.onload=function(){clearTimeout(this._timeout),delete i[s];try{o(JSON.parse(this.responseText))}catch(e){u(e)}},a.onerror=a.onabort=a.ontimeout=function(e){clearTimeout(this._timeout),delete i[s],u(e)};if(a.readyState<=1||n)a.open("GET",s+"?"+t(),!0),a.send();i[s]=a}else{var f=e.document,l=f.createElement("script"),c="callback"+t();e[c]=o,l.onerror=u,l.src=s+"?callback="+c,f.body.appendChild(l)}},o={primary:"http://node-hnapi.herokuapp.com/",secondary:["http://node-hnapi.nodester.com/","http://node-hnapi.ap01.aws.af.cm/","http://node-hnapi-hp.hp.af.cm/","http://node-hnapi-rs.rs.af.cm/"]},u=o.secondary.length,a=function(e,t,n,r){var i=e<u-1?function(){a(e+1,t,n,r)}:r;s(o.secondary[e]+t,n,i)},i=function(e,t,n){s(o.primary+e,t,function(){o.secondary.sort(function(){return.5-Math.random()}),a(0,e,t,n)})},f={urls:o,news:function(e,t){i("news",e,t)},news2:function(e,t){i("news2",e,t)},item:function(e,t,n){i("item/"+e,t,n)},comments:function(e,t,n){i("comments/"+e,t,n)}};e.hnapi=f})(window);