// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,t;e=this,t=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,r=Object.prototype,n=r.toString,o=r.__defineGetter__,i=r.__defineSetter__,l=r.__lookupGetter__,u=r.__lookupSetter__,a=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,t,a){var c,f,p,y;if("object"!=typeof e||null===e||"[object Array]"===n.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof a||null===a||"[object Array]"===n.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((f="value"in a)&&(l.call(e,t)||u.call(e,t)?(c=e.__proto__,e.__proto__=r,delete e[t],e[t]=a.value,e.__proto__=c):e[t]=a.value),p="get"in a,y="set"in a,f&&(p||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(e,t,a.get),y&&i&&i.call(e,t,a.set),e};function c(e,t,r){a(e,t,{configurable:!1,enumerable:!1,writable:!1,value:r})}function f(e){return"string"==typeof e}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function y(){return p&&"symbol"==typeof Symbol.toStringTag}var s=Object.prototype.toString,b=Object.prototype.hasOwnProperty,d="function"==typeof Symbol?Symbol.toStringTag:"",_=y()?function(e){var t,r,n,o,i;if(null==e)return s.call(e);r=e[d],i=d,t=null!=(o=e)&&b.call(o,i);try{e[d]=void 0}catch(t){return s.call(e)}return n=s.call(e),t?e[d]=r:delete e[d],n}:function(e){return s.call(e)},g=String.prototype.valueOf,m=y();function v(e){return"object"==typeof e&&(e instanceof String||(m?function(e){try{return g.call(e),!0}catch(e){return!1}}(e):"[object String]"===_(e)))}function j(e){return f(e)||v(e)}return c(j,"isPrimitive",f),c(j,"isObject",v),function(e){return f(e)&&e===function(e){if(!f(e))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+e+"`.");return e.toUpperCase()}(e)&&e!==function(e){if(!f(e))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+e+"`.");return e.toLowerCase()}(e)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).isUppercase=t();
//# sourceMappingURL=index.js.map
