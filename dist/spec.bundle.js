!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=13)}([function(t,e){/*!
 * Chai - flag utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(t,e,n){var r=t.__flags||(t.__flags=Object.create(null));if(3!==arguments.length)return r[e];r[e]=n}},function(t,e){t.exports={includeStack:!1,showDiff:!0,truncateThreshold:40}},function(t,e,n){t.exports=n(39)},function(t,e,n){"use strict";function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),i=function(){function t(e){r(this,t),this._name=e}return o(t,[{key:"Name",get:function(){return this._name},set:function(t){this._name=t}},{key:"Path",get:function(){return this._path},set:function(t){this._path=t}}]),t}();e.default=i},function(t,e,n){function r(t,e,n,r){return o({showHidden:e,seen:[],stylize:function(t){return t}},t,void 0===n?2:n)}function o(t,n,r){if(n&&"function"==typeof n.inspect&&n.inspect!==e.inspect&&(!n.constructor||n.constructor.prototype!==n)){var d=n.inspect(r);return"string"!=typeof d&&(d=o(t,d,r)),d}var v=i(t,n);if(v)return v;if(w(n)){if("outerHTML"in n)return n.outerHTML;try{if(document.xmlVersion){return(new XMLSerializer).serializeToString(n)}var x=document.createElementNS("http://www.w3.org/1999/xhtml","_");return x.appendChild(n.cloneNode(!1)),html=x.innerHTML.replace("><",">"+n.innerHTML+"<"),x.innerHTML="",html}catch(t){}}var m=b(n),E=t.showHidden?y(n):m;if(0===E.length||l(n)&&(1===E.length&&"stack"===E[0]||2===E.length&&"description"===E[0]&&"stack"===E[1])){if("function"==typeof n){var j=g(n),_=j?": "+j:"";return t.stylize("[Function"+_+"]","special")}if(f(n))return t.stylize(RegExp.prototype.toString.call(n),"regexp");if(p(n))return t.stylize(Date.prototype.toUTCString.call(n),"date");if(l(n))return s(n)}var A="",P=!1,O=["{","}"];if(h(n)&&(P=!0,O=["[","]"]),"function"==typeof n){var j=g(n),_=j?": "+j:"";A=" [Function"+_+"]"}if(f(n)&&(A=" "+RegExp.prototype.toString.call(n)),p(n)&&(A=" "+Date.prototype.toUTCString.call(n)),l(n))return s(n);if(0===E.length&&(!P||0==n.length))return O[0]+A+O[1];if(r<0)return f(n)?t.stylize(RegExp.prototype.toString.call(n),"regexp"):t.stylize("[Object]","special");t.seen.push(n);var M;return M=P?a(t,n,r,m,E):E.map(function(e){return c(t,n,r,m,e,P)}),t.seen.pop(),u(M,A,O)}function i(t,e){switch(typeof e){case"undefined":return t.stylize("undefined","undefined");case"string":var n="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return t.stylize(n,"string");case"number":return 0===e&&1/e==-1/0?t.stylize("-0","number"):t.stylize(""+e,"number");case"boolean":return t.stylize(""+e,"boolean")}if(null===e)return t.stylize("null","null")}function s(t){return"["+Error.prototype.toString.call(t)+"]"}function a(t,e,n,r,o){for(var i=[],s=0,a=e.length;s<a;++s)Object.prototype.hasOwnProperty.call(e,String(s))?i.push(c(t,e,n,r,String(s),!0)):i.push("");return o.forEach(function(o){o.match(/^\d+$/)||i.push(c(t,e,n,r,o,!0))}),i}function c(t,e,n,r,i,s){var a,c;if(e.__lookupGetter__&&(e.__lookupGetter__(i)?c=e.__lookupSetter__(i)?t.stylize("[Getter/Setter]","special"):t.stylize("[Getter]","special"):e.__lookupSetter__(i)&&(c=t.stylize("[Setter]","special"))),r.indexOf(i)<0&&(a="["+i+"]"),c||(t.seen.indexOf(e[i])<0?(c=null===n?o(t,e[i],null):o(t,e[i],n-1),c.indexOf("\n")>-1&&(c=s?c.split("\n").map(function(t){return"  "+t}).join("\n").substr(2):"\n"+c.split("\n").map(function(t){return"   "+t}).join("\n"))):c=t.stylize("[Circular]","special")),void 0===a){if(s&&i.match(/^\d+$/))return c;a=JSON.stringify(""+i),a.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(a=a.substr(1,a.length-2),a=t.stylize(a,"name")):(a=a.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),a=t.stylize(a,"string"))}return a+": "+c}function u(t,e,n){var r=0;return t.reduce(function(t,e){return r++,e.indexOf("\n")>=0&&r++,t+e.length+1},0)>60?n[0]+(""===e?"":e+"\n ")+" "+t.join(",\n  ")+" "+n[1]:n[0]+e+" "+t.join(", ")+" "+n[1]}function h(t){return Array.isArray(t)||"object"==typeof t&&"[object Array]"===d(t)}function f(t){return"object"==typeof t&&"[object RegExp]"===d(t)}function p(t){return"object"==typeof t&&"[object Date]"===d(t)}function l(t){return"object"==typeof t&&"[object Error]"===d(t)}function d(t){return Object.prototype.toString.call(t)}var g=n(7),y=n(29),b=n(26);t.exports=r;var w=function(t){return"object"==typeof HTMLElement?t instanceof HTMLElement:t&&"object"==typeof t&&1===t.nodeType&&"string"==typeof t.nodeName}},function(t,e){/*!
 * assertion-error
 * Copyright(c) 2013 Jake Luer <jake@qualiancy.com>
 * MIT Licensed
 */
/*!
 * Return a function that will copy properties from
 * one object to another excluding any originally
 * listed. Returned function will create a new `{}`.
 *
 * @param {String} excluded properties ...
 * @return {Function}
 */
function n(){function t(t,n){Object.keys(n).forEach(function(r){~e.indexOf(r)||(t[r]=n[r])})}var e=[].slice.call(arguments);return function(){for(var e=[].slice.call(arguments),n=0,r={};n<e.length;n++)t(r,e[n]);return r}}function r(t,e,r){var o=n("name","message","stack","constructor","toJSON"),i=o(e||{});this.message=t||"Unspecified AssertionError",this.showDiff=!1;for(var s in i)this[s]=i[s];if((r=r||arguments.callee)&&Error.captureStackTrace)Error.captureStackTrace(this,r);else try{throw new Error}catch(t){this.stack=t.stack}}/*!
 * Primary Exports
 */
t.exports=r,/*!
 * Inherit from Error.prototype
 */
r.prototype=Object.create(Error.prototype),/*!
 * Statically set name
 */
r.prototype.name="AssertionError",/*!
 * Ensure correct constructor
 */
r.prototype.constructor=r,r.prototype.toJSON=function(t){var e=n("constructor","toJSON","stack"),r=e({name:this.name},this);return!1!==t&&this.stack&&(r.stack=this.stack),r}},function(t,e){/*!
 * Chai - getActual utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(t,e){return e.length>4?e[4]:t._obj}},function(t,e){/*!
 * Chai - getName utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(t){if(t.name)return t.name;var e=/^\s?function ([^(]*)\(/.exec(t);return e&&e[1]?e[1]:""}},function(t,e,n){/*!
 * ## parsePath(path)
 *
 * Helper function used to parse string object
 * paths. Use in conjunction with `_getPathValue`.
 *
 *      var parsed = parsePath('myobject.property.subprop');
 *
 * ### Paths:
 *
 * * Can be as near infinitely deep and nested
 * * Arrays are also valid using the formal `myobject.document[3].property`.
 * * Literal dots and brackets (not delimiter) must be backslash-escaped.
 *
 * @param {String} path
 * @returns {Object} parsed
 * @api private
 */
function r(t){return t.replace(/([^\\])\[/g,"$1.[").match(/(\\\.|[^.]+?)+/g).map(function(t){var e=/^\[(\d+)\]$/,n=e.exec(t);return n?{i:parseFloat(n[1])}:{p:t.replace(/\\([.\[\]])/g,"$1")}})}/*!
 * ## _getPathValue(parsed, obj)
 *
 * Helper companion function for `.parsePath` that returns
 * the value located at the parsed address.
 *
 *      var value = getPathValue(parsed, obj);
 *
 * @param {Object} parsed definition from `parsePath`.
 * @param {Object} object to search against
 * @param {Number} object to search against
 * @returns {Object|Undefined} value
 * @api private
 */
function o(t,e,n){var r,o=e;n=void 0===n?t.length:n;for(var i=0,s=n;i<s;i++){var a=t[i];o?(void 0!==a.p?o=o[a.p]:void 0!==a.i&&(o=o[a.i]),i==s-1&&(r=o)):r=void 0}return r}/*!
 * Chai - getPathInfo utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var i=n(9);t.exports=function(t,e){var n=r(t),s=n[n.length-1],a={parent:n.length>1?o(n,e,n.length-1):e,name:s.p||s.i,value:o(n,e)};return a.exists=i(a.name,a.parent),a}},function(t,e,n){/*!
 * Chai - hasProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var r=n(2),o={number:Number,string:String};t.exports=function(t,e){var n=r(e);return"null"!==n&&"undefined"!==n&&(o[n]&&"object"!=typeof e&&(e=new o[n](e)),t in e)}},function(t,e,n){/*!
 * Chai - flag utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependancies
 */
var r=n(4),o=n(1);t.exports=function(t){var e=r(t),n=Object.prototype.toString.call(t);if(o.truncateThreshold&&e.length>=o.truncateThreshold){if("[object Function]"===n)return t.name&&""!==t.name?"[Function: "+t.name+"]":"[Function]";if("[object Array]"===n)return"[ Array("+t.length+") ]";if("[object Object]"===n){var i=Object.keys(t);return"{ Object ("+(i.length>2?i.splice(0,2).join(", ")+", ...":i.join(", "))+") }"}return e}return e}},function(t,e){/*!
 * Chai - transferFlags utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(t,e,n){var r=t.__flags||(t.__flags=Object.create(null));e.__flags||(e.__flags=Object.create(null)),n=3!==arguments.length||n;for(var o in r)(n||"object"!==o&&"ssfi"!==o&&"message"!=o)&&(e.__flags[o]=r[o])}},function(t,e,n){t.exports=n(16)},function(t,e,n){"use strict";var r=n(3),o=function(t){return t&&t.__esModule?t:{default:t}}(r),i=n(12);describe("testing picto",function(){var t=new o.default("test1");beforeEach(function(){t.Name="test2"}),it("has a new name",function(){(0,i.expect)(t.Name).to.equal("san diego")})})},function(t,e,n){"use strict";function r(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");return"="===t[e-2]?2:"="===t[e-1]?1:0}function o(t){return 3*t.length/4-r(t)}function i(t){var e,n,o,i,s,a=t.length;i=r(t),s=new f(3*a/4-i),n=i>0?a-4:a;var c=0;for(e=0;e<n;e+=4)o=h[t.charCodeAt(e)]<<18|h[t.charCodeAt(e+1)]<<12|h[t.charCodeAt(e+2)]<<6|h[t.charCodeAt(e+3)],s[c++]=o>>16&255,s[c++]=o>>8&255,s[c++]=255&o;return 2===i?(o=h[t.charCodeAt(e)]<<2|h[t.charCodeAt(e+1)]>>4,s[c++]=255&o):1===i&&(o=h[t.charCodeAt(e)]<<10|h[t.charCodeAt(e+1)]<<4|h[t.charCodeAt(e+2)]>>2,s[c++]=o>>8&255,s[c++]=255&o),s}function s(t){return u[t>>18&63]+u[t>>12&63]+u[t>>6&63]+u[63&t]}function a(t,e,n){for(var r,o=[],i=e;i<n;i+=3)r=(t[i]<<16)+(t[i+1]<<8)+t[i+2],o.push(s(r));return o.join("")}function c(t){for(var e,n=t.length,r=n%3,o="",i=[],s=0,c=n-r;s<c;s+=16383)i.push(a(t,s,s+16383>c?c:s+16383));return 1===r?(e=t[n-1],o+=u[e>>2],o+=u[e<<4&63],o+="=="):2===r&&(e=(t[n-2]<<8)+t[n-1],o+=u[e>>10],o+=u[e>>4&63],o+=u[e<<2&63],o+="="),i.push(o),i.join("")}e.byteLength=o,e.toByteArray=i,e.fromByteArray=c;for(var u=[],h=[],f="undefined"!=typeof Uint8Array?Uint8Array:Array,p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",l=0,d=p.length;l<d;++l)u[l]=p[l],h[p.charCodeAt(l)]=l;h["-".charCodeAt(0)]=62,h["_".charCodeAt(0)]=63},function(t,e,n){"use strict";(function(t){function r(){return i.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function o(t,e){if(r()<e)throw new RangeError("Invalid typed array length");return i.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(e),t.__proto__=i.prototype):(null===t&&(t=new i(e)),t.length=e),t}function i(t,e,n){if(!(i.TYPED_ARRAY_SUPPORT||this instanceof i))return new i(t,e,n);if("number"==typeof t){if("string"==typeof e)throw new Error("If encoding is specified then the first argument must be a string");return u(this,t)}return s(this,t,e,n)}function s(t,e,n,r){if("number"==typeof e)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer?p(t,e,n,r):"string"==typeof e?h(t,e,n):l(t,e)}function a(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function c(t,e,n,r){return a(e),e<=0?o(t,e):void 0!==n?"string"==typeof r?o(t,e).fill(n,r):o(t,e).fill(n):o(t,e)}function u(t,e){if(a(e),t=o(t,e<0?0:0|d(e)),!i.TYPED_ARRAY_SUPPORT)for(var n=0;n<e;++n)t[n]=0;return t}function h(t,e,n){if("string"==typeof n&&""!==n||(n="utf8"),!i.isEncoding(n))throw new TypeError('"encoding" must be a valid string encoding');var r=0|y(e,n);t=o(t,r);var s=t.write(e,n);return s!==r&&(t=t.slice(0,s)),t}function f(t,e){var n=e.length<0?0:0|d(e.length);t=o(t,n);for(var r=0;r<n;r+=1)t[r]=255&e[r];return t}function p(t,e,n,r){if(e.byteLength,n<0||e.byteLength<n)throw new RangeError("'offset' is out of bounds");if(e.byteLength<n+(r||0))throw new RangeError("'length' is out of bounds");return e=void 0===n&&void 0===r?new Uint8Array(e):void 0===r?new Uint8Array(e,n):new Uint8Array(e,n,r),i.TYPED_ARRAY_SUPPORT?(t=e,t.__proto__=i.prototype):t=f(t,e),t}function l(t,e){if(i.isBuffer(e)){var n=0|d(e.length);return t=o(t,n),0===t.length?t:(e.copy(t,0,0,n),t)}if(e){if("undefined"!=typeof ArrayBuffer&&e.buffer instanceof ArrayBuffer||"length"in e)return"number"!=typeof e.length||X(e.length)?o(t,0):f(t,e);if("Buffer"===e.type&&Q(e.data))return f(t,e.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function d(t){if(t>=r())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+r().toString(16)+" bytes");return 0|t}function g(t){return+t!=t&&(t=0),i.alloc(+t)}function y(t,e){if(i.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var n=t.length;if(0===n)return 0;for(var r=!1;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":case void 0:return $(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return J(t).length;default:if(r)return $(t).length;e=(""+e).toLowerCase(),r=!0}}function b(t,e,n){var r=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if(n>>>=0,e>>>=0,n<=e)return"";for(t||(t="utf8");;)switch(t){case"hex":return N(this,e,n);case"utf8":case"utf-8":return M(this,e,n);case"ascii":return T(this,e,n);case"latin1":case"binary":return R(this,e,n);case"base64":return O(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return k(this,e,n);default:if(r)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),r=!0}}function w(t,e,n){var r=t[e];t[e]=t[n],t[n]=r}function v(t,e,n,r,o){if(0===t.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),n=+n,isNaN(n)&&(n=o?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(o)return-1;n=t.length-1}else if(n<0){if(!o)return-1;n=0}if("string"==typeof e&&(e=i.from(e,r)),i.isBuffer(e))return 0===e.length?-1:x(t,e,n,r,o);if("number"==typeof e)return e&=255,i.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?o?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):x(t,[e],n,r,o);throw new TypeError("val must be string, number or Buffer")}function x(t,e,n,r,o){function i(t,e){return 1===s?t[e]:t.readUInt16BE(e*s)}var s=1,a=t.length,c=e.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(t.length<2||e.length<2)return-1;s=2,a/=2,c/=2,n/=2}var u;if(o){var h=-1;for(u=n;u<a;u++)if(i(t,u)===i(e,-1===h?0:u-h)){if(-1===h&&(h=u),u-h+1===c)return h*s}else-1!==h&&(u-=u-h),h=-1}else for(n+c>a&&(n=a-c),u=n;u>=0;u--){for(var f=!0,p=0;p<c;p++)if(i(t,u+p)!==i(e,p)){f=!1;break}if(f)return u}return-1}function m(t,e,n,r){n=Number(n)||0;var o=t.length-n;r?(r=Number(r))>o&&(r=o):r=o;var i=e.length;if(i%2!=0)throw new TypeError("Invalid hex string");r>i/2&&(r=i/2);for(var s=0;s<r;++s){var a=parseInt(e.substr(2*s,2),16);if(isNaN(a))return s;t[n+s]=a}return s}function E(t,e,n,r){return G($(e,t.length-n),t,n,r)}function j(t,e,n,r){return G(H(e),t,n,r)}function _(t,e,n,r){return j(t,e,n,r)}function A(t,e,n,r){return G(J(e),t,n,r)}function P(t,e,n,r){return G(V(e,t.length-n),t,n,r)}function O(t,e,n){return 0===e&&n===t.length?Z.fromByteArray(t):Z.fromByteArray(t.slice(e,n))}function M(t,e,n){n=Math.min(t.length,n);for(var r=[],o=e;o<n;){var i=t[o],s=null,a=i>239?4:i>223?3:i>191?2:1;if(o+a<=n){var c,u,h,f;switch(a){case 1:i<128&&(s=i);break;case 2:c=t[o+1],128==(192&c)&&(f=(31&i)<<6|63&c)>127&&(s=f);break;case 3:c=t[o+1],u=t[o+2],128==(192&c)&&128==(192&u)&&(f=(15&i)<<12|(63&c)<<6|63&u)>2047&&(f<55296||f>57343)&&(s=f);break;case 4:c=t[o+1],u=t[o+2],h=t[o+3],128==(192&c)&&128==(192&u)&&128==(192&h)&&(f=(15&i)<<18|(63&c)<<12|(63&u)<<6|63&h)>65535&&f<1114112&&(s=f)}}null===s?(s=65533,a=1):s>65535&&(s-=65536,r.push(s>>>10&1023|55296),s=56320|1023&s),r.push(s),o+=a}return S(r)}function S(t){var e=t.length;if(e<=W)return String.fromCharCode.apply(String,t);for(var n="",r=0;r<e;)n+=String.fromCharCode.apply(String,t.slice(r,r+=W));return n}function T(t,e,n){var r="";n=Math.min(t.length,n);for(var o=e;o<n;++o)r+=String.fromCharCode(127&t[o]);return r}function R(t,e,n){var r="";n=Math.min(t.length,n);for(var o=e;o<n;++o)r+=String.fromCharCode(t[o]);return r}function N(t,e,n){var r=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>r)&&(n=r);for(var o="",i=e;i<n;++i)o+=F(t[i]);return o}function k(t,e,n){for(var r=t.slice(e,n),o="",i=0;i<r.length;i+=2)o+=String.fromCharCode(r[i]+256*r[i+1]);return o}function B(t,e,n){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}function C(t,e,n,r,o,s){if(!i.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>o||e<s)throw new RangeError('"value" argument is out of bounds');if(n+r>t.length)throw new RangeError("Index out of range")}function U(t,e,n,r){e<0&&(e=65535+e+1);for(var o=0,i=Math.min(t.length-n,2);o<i;++o)t[n+o]=(e&255<<8*(r?o:1-o))>>>8*(r?o:1-o)}function D(t,e,n,r){e<0&&(e=4294967295+e+1);for(var o=0,i=Math.min(t.length-n,4);o<i;++o)t[n+o]=e>>>8*(r?o:3-o)&255}function L(t,e,n,r,o,i){if(n+r>t.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function I(t,e,n,r,o){return o||L(t,e,n,4,3.4028234663852886e38,-3.4028234663852886e38),K.write(t,e,n,r,23,4),n+4}function Y(t,e,n,r,o){return o||L(t,e,n,8,1.7976931348623157e308,-1.7976931348623157e308),K.write(t,e,n,r,52,8),n+8}function q(t){if(t=z(t).replace(tt,""),t.length<2)return"";for(;t.length%4!=0;)t+="=";return t}function z(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function F(t){return t<16?"0"+t.toString(16):t.toString(16)}function $(t,e){e=e||1/0;for(var n,r=t.length,o=null,i=[],s=0;s<r;++s){if((n=t.charCodeAt(s))>55295&&n<57344){if(!o){if(n>56319){(e-=3)>-1&&i.push(239,191,189);continue}if(s+1===r){(e-=3)>-1&&i.push(239,191,189);continue}o=n;continue}if(n<56320){(e-=3)>-1&&i.push(239,191,189),o=n;continue}n=65536+(o-55296<<10|n-56320)}else o&&(e-=3)>-1&&i.push(239,191,189);if(o=null,n<128){if((e-=1)<0)break;i.push(n)}else if(n<2048){if((e-=2)<0)break;i.push(n>>6|192,63&n|128)}else if(n<65536){if((e-=3)<0)break;i.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;i.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return i}function H(t){for(var e=[],n=0;n<t.length;++n)e.push(255&t.charCodeAt(n));return e}function V(t,e){for(var n,r,o,i=[],s=0;s<t.length&&!((e-=2)<0);++s)n=t.charCodeAt(s),r=n>>8,o=n%256,i.push(o),i.push(r);return i}function J(t){return Z.toByteArray(q(t))}function G(t,e,n,r){for(var o=0;o<r&&!(o+n>=e.length||o>=t.length);++o)e[o+n]=t[o];return o}function X(t){return t!==t}/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
var Z=n(14),K=n(37),Q=n(38);e.Buffer=i,e.SlowBuffer=g,e.INSPECT_MAX_BYTES=50,i.TYPED_ARRAY_SUPPORT=void 0!==t.TYPED_ARRAY_SUPPORT?t.TYPED_ARRAY_SUPPORT:function(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}(),e.kMaxLength=r(),i.poolSize=8192,i._augment=function(t){return t.__proto__=i.prototype,t},i.from=function(t,e,n){return s(null,t,e,n)},i.TYPED_ARRAY_SUPPORT&&(i.prototype.__proto__=Uint8Array.prototype,i.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&i[Symbol.species]===i&&Object.defineProperty(i,Symbol.species,{value:null,configurable:!0})),i.alloc=function(t,e,n){return c(null,t,e,n)},i.allocUnsafe=function(t){return u(null,t)},i.allocUnsafeSlow=function(t){return u(null,t)},i.isBuffer=function(t){return!(null==t||!t._isBuffer)},i.compare=function(t,e){if(!i.isBuffer(t)||!i.isBuffer(e))throw new TypeError("Arguments must be Buffers");if(t===e)return 0;for(var n=t.length,r=e.length,o=0,s=Math.min(n,r);o<s;++o)if(t[o]!==e[o]){n=t[o],r=e[o];break}return n<r?-1:r<n?1:0},i.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},i.concat=function(t,e){if(!Q(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return i.alloc(0);var n;if(void 0===e)for(e=0,n=0;n<t.length;++n)e+=t[n].length;var r=i.allocUnsafe(e),o=0;for(n=0;n<t.length;++n){var s=t[n];if(!i.isBuffer(s))throw new TypeError('"list" argument must be an Array of Buffers');s.copy(r,o),o+=s.length}return r},i.byteLength=y,i.prototype._isBuffer=!0,i.prototype.swap16=function(){var t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var e=0;e<t;e+=2)w(this,e,e+1);return this},i.prototype.swap32=function(){var t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var e=0;e<t;e+=4)w(this,e,e+3),w(this,e+1,e+2);return this},i.prototype.swap64=function(){var t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var e=0;e<t;e+=8)w(this,e,e+7),w(this,e+1,e+6),w(this,e+2,e+5),w(this,e+3,e+4);return this},i.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?M(this,0,t):b.apply(this,arguments)},i.prototype.equals=function(t){if(!i.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===i.compare(this,t)},i.prototype.inspect=function(){var t="",n=e.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,n).match(/.{2}/g).join(" "),this.length>n&&(t+=" ... ")),"<Buffer "+t+">"},i.prototype.compare=function(t,e,n,r,o){if(!i.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===r&&(r=0),void 0===o&&(o=this.length),e<0||n>t.length||r<0||o>this.length)throw new RangeError("out of range index");if(r>=o&&e>=n)return 0;if(r>=o)return-1;if(e>=n)return 1;if(e>>>=0,n>>>=0,r>>>=0,o>>>=0,this===t)return 0;for(var s=o-r,a=n-e,c=Math.min(s,a),u=this.slice(r,o),h=t.slice(e,n),f=0;f<c;++f)if(u[f]!==h[f]){s=u[f],a=h[f];break}return s<a?-1:a<s?1:0},i.prototype.includes=function(t,e,n){return-1!==this.indexOf(t,e,n)},i.prototype.indexOf=function(t,e,n){return v(this,t,e,n,!0)},i.prototype.lastIndexOf=function(t,e,n){return v(this,t,e,n,!1)},i.prototype.write=function(t,e,n,r){if(void 0===e)r="utf8",n=this.length,e=0;else if(void 0===n&&"string"==typeof e)r=e,n=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e|=0,isFinite(n)?(n|=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}var o=this.length-e;if((void 0===n||n>o)&&(n=o),t.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");for(var i=!1;;)switch(r){case"hex":return m(this,t,e,n);case"utf8":case"utf-8":return E(this,t,e,n);case"ascii":return j(this,t,e,n);case"latin1":case"binary":return _(this,t,e,n);case"base64":return A(this,t,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return P(this,t,e,n);default:if(i)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),i=!0}},i.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var W=4096;i.prototype.slice=function(t,e){var n=this.length;t=~~t,e=void 0===e?n:~~e,t<0?(t+=n)<0&&(t=0):t>n&&(t=n),e<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t);var r;if(i.TYPED_ARRAY_SUPPORT)r=this.subarray(t,e),r.__proto__=i.prototype;else{var o=e-t;r=new i(o,void 0);for(var s=0;s<o;++s)r[s]=this[s+t]}return r},i.prototype.readUIntLE=function(t,e,n){t|=0,e|=0,n||B(t,e,this.length);for(var r=this[t],o=1,i=0;++i<e&&(o*=256);)r+=this[t+i]*o;return r},i.prototype.readUIntBE=function(t,e,n){t|=0,e|=0,n||B(t,e,this.length);for(var r=this[t+--e],o=1;e>0&&(o*=256);)r+=this[t+--e]*o;return r},i.prototype.readUInt8=function(t,e){return e||B(t,1,this.length),this[t]},i.prototype.readUInt16LE=function(t,e){return e||B(t,2,this.length),this[t]|this[t+1]<<8},i.prototype.readUInt16BE=function(t,e){return e||B(t,2,this.length),this[t]<<8|this[t+1]},i.prototype.readUInt32LE=function(t,e){return e||B(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},i.prototype.readUInt32BE=function(t,e){return e||B(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},i.prototype.readIntLE=function(t,e,n){t|=0,e|=0,n||B(t,e,this.length);for(var r=this[t],o=1,i=0;++i<e&&(o*=256);)r+=this[t+i]*o;return o*=128,r>=o&&(r-=Math.pow(2,8*e)),r},i.prototype.readIntBE=function(t,e,n){t|=0,e|=0,n||B(t,e,this.length);for(var r=e,o=1,i=this[t+--r];r>0&&(o*=256);)i+=this[t+--r]*o;return o*=128,i>=o&&(i-=Math.pow(2,8*e)),i},i.prototype.readInt8=function(t,e){return e||B(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},i.prototype.readInt16LE=function(t,e){e||B(t,2,this.length);var n=this[t]|this[t+1]<<8;return 32768&n?4294901760|n:n},i.prototype.readInt16BE=function(t,e){e||B(t,2,this.length);var n=this[t+1]|this[t]<<8;return 32768&n?4294901760|n:n},i.prototype.readInt32LE=function(t,e){return e||B(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},i.prototype.readInt32BE=function(t,e){return e||B(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},i.prototype.readFloatLE=function(t,e){return e||B(t,4,this.length),K.read(this,t,!0,23,4)},i.prototype.readFloatBE=function(t,e){return e||B(t,4,this.length),K.read(this,t,!1,23,4)},i.prototype.readDoubleLE=function(t,e){return e||B(t,8,this.length),K.read(this,t,!0,52,8)},i.prototype.readDoubleBE=function(t,e){return e||B(t,8,this.length),K.read(this,t,!1,52,8)},i.prototype.writeUIntLE=function(t,e,n,r){if(t=+t,e|=0,n|=0,!r){C(this,t,e,n,Math.pow(2,8*n)-1,0)}var o=1,i=0;for(this[e]=255&t;++i<n&&(o*=256);)this[e+i]=t/o&255;return e+n},i.prototype.writeUIntBE=function(t,e,n,r){if(t=+t,e|=0,n|=0,!r){C(this,t,e,n,Math.pow(2,8*n)-1,0)}var o=n-1,i=1;for(this[e+o]=255&t;--o>=0&&(i*=256);)this[e+o]=t/i&255;return e+n},i.prototype.writeUInt8=function(t,e,n){return t=+t,e|=0,n||C(this,t,e,1,255,0),i.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[e]=255&t,e+1},i.prototype.writeUInt16LE=function(t,e,n){return t=+t,e|=0,n||C(this,t,e,2,65535,0),i.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):U(this,t,e,!0),e+2},i.prototype.writeUInt16BE=function(t,e,n){return t=+t,e|=0,n||C(this,t,e,2,65535,0),i.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):U(this,t,e,!1),e+2},i.prototype.writeUInt32LE=function(t,e,n){return t=+t,e|=0,n||C(this,t,e,4,4294967295,0),i.TYPED_ARRAY_SUPPORT?(this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t):D(this,t,e,!0),e+4},i.prototype.writeUInt32BE=function(t,e,n){return t=+t,e|=0,n||C(this,t,e,4,4294967295,0),i.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):D(this,t,e,!1),e+4},i.prototype.writeIntLE=function(t,e,n,r){if(t=+t,e|=0,!r){var o=Math.pow(2,8*n-1);C(this,t,e,n,o-1,-o)}var i=0,s=1,a=0;for(this[e]=255&t;++i<n&&(s*=256);)t<0&&0===a&&0!==this[e+i-1]&&(a=1),this[e+i]=(t/s>>0)-a&255;return e+n},i.prototype.writeIntBE=function(t,e,n,r){if(t=+t,e|=0,!r){var o=Math.pow(2,8*n-1);C(this,t,e,n,o-1,-o)}var i=n-1,s=1,a=0;for(this[e+i]=255&t;--i>=0&&(s*=256);)t<0&&0===a&&0!==this[e+i+1]&&(a=1),this[e+i]=(t/s>>0)-a&255;return e+n},i.prototype.writeInt8=function(t,e,n){return t=+t,e|=0,n||C(this,t,e,1,127,-128),i.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[e]=255&t,e+1},i.prototype.writeInt16LE=function(t,e,n){return t=+t,e|=0,n||C(this,t,e,2,32767,-32768),i.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8):U(this,t,e,!0),e+2},i.prototype.writeInt16BE=function(t,e,n){return t=+t,e|=0,n||C(this,t,e,2,32767,-32768),i.TYPED_ARRAY_SUPPORT?(this[e]=t>>>8,this[e+1]=255&t):U(this,t,e,!1),e+2},i.prototype.writeInt32LE=function(t,e,n){return t=+t,e|=0,n||C(this,t,e,4,2147483647,-2147483648),i.TYPED_ARRAY_SUPPORT?(this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24):D(this,t,e,!0),e+4},i.prototype.writeInt32BE=function(t,e,n){return t=+t,e|=0,n||C(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),i.TYPED_ARRAY_SUPPORT?(this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t):D(this,t,e,!1),e+4},i.prototype.writeFloatLE=function(t,e,n){return I(this,t,e,!0,n)},i.prototype.writeFloatBE=function(t,e,n){return I(this,t,e,!1,n)},i.prototype.writeDoubleLE=function(t,e,n){return Y(this,t,e,!0,n)},i.prototype.writeDoubleBE=function(t,e,n){return Y(this,t,e,!1,n)},i.prototype.copy=function(t,e,n,r){if(n||(n=0),r||0===r||(r=this.length),e>=t.length&&(e=t.length),e||(e=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("sourceStart out of bounds");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),t.length-e<r-n&&(r=t.length-e+n);var o,s=r-n;if(this===t&&n<e&&e<r)for(o=s-1;o>=0;--o)t[o+e]=this[o+n];else if(s<1e3||!i.TYPED_ARRAY_SUPPORT)for(o=0;o<s;++o)t[o+e]=this[o+n];else Uint8Array.prototype.set.call(t,this.subarray(n,n+s),e);return s},i.prototype.fill=function(t,e,n,r){if("string"==typeof t){if("string"==typeof e?(r=e,e=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),1===t.length){var o=t.charCodeAt(0);o<256&&(t=o)}if(void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!i.isEncoding(r))throw new TypeError("Unknown encoding: "+r)}else"number"==typeof t&&(t&=255);if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0);var s;if("number"==typeof t)for(s=e;s<n;++s)this[s]=t;else{var a=i.isBuffer(t)?t:$(new i(t,r).toString()),c=a.length;for(s=0;s<n-e;++s)this[s+e]=a[s%c]}return this};var tt=/[^+\/0-9A-Za-z-_]/g}).call(e,n(40))},function(t,e,n){/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var r=[],e=t.exports={};/*!
 * Chai version
 */
e.version="3.5.0",/*!
 * Assertion Error
 */
e.AssertionError=n(5);/*!
 * Utils for plugins (not exported)
 */
var o=n(30);e.use=function(t){return~r.indexOf(t)||(t(this,o),r.push(t)),this},/*!
 * Utility Functions
 */
e.util=o;/*!
 * Configuration
 */
var i=n(1);e.config=i;/*!
 * Primary `Assertion` prototype
 */
var s=n(17);e.use(s);/*!
 * Core Assertions
 */
var a=n(18);e.use(a);/*!
 * Expect interface
 */
var c=n(20);e.use(c);/*!
 * Should interface
 */
var u=n(21);e.use(u);/*!
 * Assert interface
 */
var h=n(19);e.use(h)},function(t,e,n){/*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var r=n(1);t.exports=function(t,e){/*!
   * Assertion Constructor
   *
   * Creates object for chaining.
   *
   * @api private
   */
function n(t,e,n){i(this,"ssfi",n||arguments.callee),i(this,"object",t),i(this,"message",e)}/*!
   * Module dependencies.
   */
var o=t.AssertionError,i=e.flag;/*!
   * Module export.
   */
t.Assertion=n,Object.defineProperty(n,"includeStack",{get:function(){return console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."),r.includeStack},set:function(t){console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."),r.includeStack=t}}),Object.defineProperty(n,"showDiff",{get:function(){return console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."),r.showDiff},set:function(t){console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."),r.showDiff=t}}),n.addProperty=function(t,n){e.addProperty(this.prototype,t,n)},n.addMethod=function(t,n){e.addMethod(this.prototype,t,n)},n.addChainableMethod=function(t,n,r){e.addChainableMethod(this.prototype,t,n,r)},n.overwriteProperty=function(t,n){e.overwriteProperty(this.prototype,t,n)},n.overwriteMethod=function(t,n){e.overwriteMethod(this.prototype,t,n)},n.overwriteChainableMethod=function(t,n,r){e.overwriteChainableMethod(this.prototype,t,n,r)},n.prototype.assert=function(t,n,s,a,c,u){var h=e.test(this,arguments);if(!0!==u&&(u=!1),!0!==r.showDiff&&(u=!1),!h){var n=e.getMessage(this,arguments),f=e.getActual(this,arguments);throw new o(n,{actual:f,expected:a,showDiff:u},r.includeStack?this.assert:i(this,"ssfi"))}},/*!
   * ### ._obj
   *
   * Quick reference to stored `actual` value for plugin developers.
   *
   * @api private
   */
Object.defineProperty(n.prototype,"_obj",{get:function(){return i(this,"object")},set:function(t){i(this,"object",t)}})}},function(t,e){/*!
 * chai
 * http://chaijs.com
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(t,e){function n(t,n){n&&S(this,"message",n),t=t.toLowerCase();var r=S(this,"object"),o=~["a","e","i","o","u"].indexOf(t.charAt(0))?"an ":"a ";this.assert(t===e.type(r),"expected #{this} to be "+o+t,"expected #{this} not to be "+o+t)}function r(){S(this,"contains",!0)}function o(t,n){e.expectTypes(this,["array","object","string"]),n&&S(this,"message",n);var r=S(this,"object"),o=!1;if("array"===e.type(r)&&"object"===e.type(t)){for(var i in r)if(e.eql(r[i],t)){o=!0;break}}else if("object"===e.type(t)){if(!S(this,"negate")){for(var s in t)new M(r).property(s,t[s]);return}var a={};for(var s in t)a[s]=r[s];o=e.eql(a,t)}else o=void 0!=r&&~r.indexOf(t);this.assert(o,"expected #{this} to include "+e.inspect(t),"expected #{this} to not include "+e.inspect(t))}function i(){var t=S(this,"object"),e=Object.prototype.toString.call(t);this.assert("[object Arguments]"===e,"expected #{this} to be arguments but got "+e,"expected #{this} to not be arguments")}function s(t,e){e&&S(this,"message",e);var n=S(this,"object");if(S(this,"deep"))return this.eql(t);this.assert(t===n,"expected #{this} to equal #{exp}","expected #{this} to not equal #{exp}",t,this._obj,!0)}function a(t,n){n&&S(this,"message",n),this.assert(e.eql(t,S(this,"object")),"expected #{this} to deeply equal #{exp}","expected #{this} to not deeply equal #{exp}",t,this._obj,!0)}function c(t,e){e&&S(this,"message",e);var n=S(this,"object");if(S(this,"doLength")){new M(n,e).to.have.property("length");var r=n.length;this.assert(r>t,"expected #{this} to have a length above #{exp} but got #{act}","expected #{this} to not have a length above #{exp}",t,r)}else this.assert(n>t,"expected #{this} to be above "+t,"expected #{this} to be at most "+t)}function u(t,e){e&&S(this,"message",e);var n=S(this,"object");if(S(this,"doLength")){new M(n,e).to.have.property("length");var r=n.length;this.assert(r>=t,"expected #{this} to have a length at least #{exp} but got #{act}","expected #{this} to have a length below #{exp}",t,r)}else this.assert(n>=t,"expected #{this} to be at least "+t,"expected #{this} to be below "+t)}function h(t,e){e&&S(this,"message",e);var n=S(this,"object");if(S(this,"doLength")){new M(n,e).to.have.property("length");var r=n.length;this.assert(r<t,"expected #{this} to have a length below #{exp} but got #{act}","expected #{this} to not have a length below #{exp}",t,r)}else this.assert(n<t,"expected #{this} to be below "+t,"expected #{this} to be at least "+t)}function f(t,e){e&&S(this,"message",e);var n=S(this,"object");if(S(this,"doLength")){new M(n,e).to.have.property("length");var r=n.length;this.assert(r<=t,"expected #{this} to have a length at most #{exp} but got #{act}","expected #{this} to have a length above #{exp}",t,r)}else this.assert(n<=t,"expected #{this} to be at most "+t,"expected #{this} to be above "+t)}function p(t,n){n&&S(this,"message",n);var r=e.getName(t);this.assert(S(this,"object")instanceof t,"expected #{this} to be an instance of "+r,"expected #{this} to not be an instance of "+r)}function l(t,n){n&&S(this,"message",n);var r=S(this,"object");this.assert(r.hasOwnProperty(t),"expected #{this} to have own property "+e.inspect(t),"expected #{this} to not have own property "+e.inspect(t))}function d(t,n,r){"string"==typeof n&&(r=n,n=null),r&&S(this,"message",r);var o=S(this,"object"),i=Object.getOwnPropertyDescriptor(Object(o),t);i&&n?this.assert(e.eql(n,i),"expected the own property descriptor for "+e.inspect(t)+" on #{this} to match "+e.inspect(n)+", got "+e.inspect(i),"expected the own property descriptor for "+e.inspect(t)+" on #{this} to not match "+e.inspect(n),n,i,!0):this.assert(i,"expected #{this} to have an own property descriptor for "+e.inspect(t),"expected #{this} to not have an own property descriptor for "+e.inspect(t)),S(this,"object",i)}function g(){S(this,"doLength",!0)}function y(t,e){e&&S(this,"message",e);var n=S(this,"object");new M(n,e).to.have.property("length");var r=n.length;this.assert(r==t,"expected #{this} to have a length of #{exp} but got #{act}","expected #{this} to not have a length of #{act}",t,r)}function b(t,e){e&&S(this,"message",e);var n=S(this,"object");this.assert(t.exec(n),"expected #{this} to match "+t,"expected #{this} not to match "+t)}function w(t){var n,r=S(this,"object"),o=!0,i="keys must be given single argument of Array|Object|String, or multiple String arguments";switch(e.type(t)){case"array":if(arguments.length>1)throw new Error(i);break;case"object":if(arguments.length>1)throw new Error(i);t=Object.keys(t);break;default:t=Array.prototype.slice.call(arguments)}if(!t.length)throw new Error("keys required");var s=Object.keys(r),a=t,c=t.length,u=S(this,"any"),h=S(this,"all");if(u||h||(h=!0),u){o=a.filter(function(t){return~s.indexOf(t)}).length>0}if(h&&(o=t.every(function(t){return~s.indexOf(t)}),S(this,"negate")||S(this,"contains")||(o=o&&t.length==s.length)),c>1){t=t.map(function(t){return e.inspect(t)});var f=t.pop();h&&(n=t.join(", ")+", and "+f),u&&(n=t.join(", ")+", or "+f)}else n=e.inspect(t[0]);n=(c>1?"keys ":"key ")+n,n=(S(this,"contains")?"contain ":"have ")+n,this.assert(o,"expected #{this} to "+n,"expected #{this} to not "+n,a.slice(0).sort(),s.sort(),!0)}function v(t,n,r){r&&S(this,"message",r);var o=S(this,"object");new M(o,r).is.a("function");var i=!1,s=null,a=null,c=null;0===arguments.length?(n=null,t=null):t&&(t instanceof RegExp||"string"==typeof t)?(n=t,t=null):t&&t instanceof Error?(s=t,t=null,n=null):"function"==typeof t?(!(a=t.prototype.name)||"Error"===a&&t!==Error)&&(a=t.name||(new t).name):t=null;try{o()}catch(r){if(s)return this.assert(r===s,"expected #{this} to throw #{exp} but #{act} was thrown","expected #{this} to not throw #{exp}",s instanceof Error?s.toString():s,r instanceof Error?r.toString():r),S(this,"object",r),this;if(t&&(this.assert(r instanceof t,"expected #{this} to throw #{exp} but #{act} was thrown","expected #{this} to not throw #{exp} but #{act} was thrown",a,r instanceof Error?r.toString():r),!n))return S(this,"object",r),this;var u="error"===e.type(r)&&"message"in r?r.message:""+r;if(null!=u&&n&&n instanceof RegExp)return this.assert(n.exec(u),"expected #{this} to throw error matching #{exp} but got #{act}","expected #{this} to throw error not matching #{exp}",n,u),S(this,"object",r),this;if(null!=u&&n&&"string"==typeof n)return this.assert(~u.indexOf(n),"expected #{this} to throw error including #{exp} but got #{act}","expected #{this} to throw error not including #{act}",n,u),S(this,"object",r),this;i=!0,c=r}var h="",f=null!==a?a:s?"#{exp}":"an error";i&&(h=" but #{act} was thrown"),this.assert(!0===i,"expected #{this} to throw "+f+h,"expected #{this} to not throw "+f+h,s instanceof Error?s.toString():s,c instanceof Error?c.toString():c),S(this,"object",c)}function x(t,n){n&&S(this,"message",n);var r=S(this,"object"),o=S(this,"itself"),i="function"!==e.type(r)||o?r[t]:r.prototype[t];this.assert("function"==typeof i,"expected #{this} to respond to "+e.inspect(t),"expected #{this} to not respond to "+e.inspect(t))}function m(t,n){n&&S(this,"message",n);var r=S(this,"object"),o=t(r);this.assert(o,"expected #{this} to satisfy "+e.objDisplay(t),"expected #{this} to not satisfy"+e.objDisplay(t),!this.negate,o)}function E(t,n,r){r&&S(this,"message",r);var o=S(this,"object");if(new M(o,r).is.a("number"),"number"!==e.type(t)||"number"!==e.type(n))throw new Error("the arguments to closeTo or approximately must be numbers");this.assert(Math.abs(o-t)<=n,"expected #{this} to be close to "+t+" +/- "+n,"expected #{this} not to be close to "+t+" +/- "+n)}function j(t,e,n){return t.every(function(t){return n?e.some(function(e){return n(t,e)}):-1!==e.indexOf(t)})}function _(t,e){e&&S(this,"message",e);var n=S(this,"object");new M(t).to.be.an("array"),this.assert(t.indexOf(n)>-1,"expected #{this} to be one of #{exp}","expected #{this} to not be one of #{exp}",t,n)}function A(t,e,n){n&&S(this,"message",n);var r=S(this,"object");new M(t,n).to.have.property(e),new M(r).is.a("function");var o=t[e];r(),this.assert(o!==t[e],"expected ."+e+" to change","expected ."+e+" to not change")}function P(t,e,n){n&&S(this,"message",n);var r=S(this,"object");new M(t,n).to.have.property(e),new M(r).is.a("function");var o=t[e];r(),this.assert(t[e]-o>0,"expected ."+e+" to increase","expected ."+e+" to not increase")}function O(t,e,n){n&&S(this,"message",n);var r=S(this,"object");new M(t,n).to.have.property(e),new M(r).is.a("function");var o=t[e];r(),this.assert(t[e]-o<0,"expected ."+e+" to decrease","expected ."+e+" to not decrease")}var M=t.Assertion,S=(Object.prototype.toString,e.flag);["to","be","been","is","and","has","have","with","that","which","at","of","same"].forEach(function(t){M.addProperty(t,function(){return this})}),M.addProperty("not",function(){S(this,"negate",!0)}),M.addProperty("deep",function(){S(this,"deep",!0)}),M.addProperty("any",function(){S(this,"any",!0),S(this,"all",!1)}),M.addProperty("all",function(){S(this,"all",!0),S(this,"any",!1)}),M.addChainableMethod("an",n),M.addChainableMethod("a",n),M.addChainableMethod("include",o,r),M.addChainableMethod("contain",o,r),M.addChainableMethod("contains",o,r),M.addChainableMethod("includes",o,r),M.addProperty("ok",function(){this.assert(S(this,"object"),"expected #{this} to be truthy","expected #{this} to be falsy")}),M.addProperty("true",function(){this.assert(!0===S(this,"object"),"expected #{this} to be true","expected #{this} to be false",!this.negate)}),M.addProperty("false",function(){this.assert(!1===S(this,"object"),"expected #{this} to be false","expected #{this} to be true",!!this.negate)}),M.addProperty("null",function(){this.assert(null===S(this,"object"),"expected #{this} to be null","expected #{this} not to be null")}),M.addProperty("undefined",function(){this.assert(void 0===S(this,"object"),"expected #{this} to be undefined","expected #{this} not to be undefined")}),M.addProperty("NaN",function(){this.assert(isNaN(S(this,"object")),"expected #{this} to be NaN","expected #{this} not to be NaN")}),M.addProperty("exist",function(){this.assert(null!=S(this,"object"),"expected #{this} to exist","expected #{this} to not exist")}),M.addProperty("empty",function(){var t=S(this,"object"),e=t;Array.isArray(t)||"string"==typeof object?e=t.length:"object"==typeof t&&(e=Object.keys(t).length),this.assert(!e,"expected #{this} to be empty","expected #{this} not to be empty")}),M.addProperty("arguments",i),M.addProperty("Arguments",i),M.addMethod("equal",s),M.addMethod("equals",s),M.addMethod("eq",s),M.addMethod("eql",a),M.addMethod("eqls",a),M.addMethod("above",c),M.addMethod("gt",c),M.addMethod("greaterThan",c),M.addMethod("least",u),M.addMethod("gte",u),M.addMethod("below",h),M.addMethod("lt",h),M.addMethod("lessThan",h),M.addMethod("most",f),M.addMethod("lte",f),M.addMethod("within",function(t,e,n){n&&S(this,"message",n);var r=S(this,"object"),o=t+".."+e;if(S(this,"doLength")){new M(r,n).to.have.property("length");var i=r.length;this.assert(i>=t&&i<=e,"expected #{this} to have a length within "+o,"expected #{this} to not have a length within "+o)}else this.assert(r>=t&&r<=e,"expected #{this} to be within "+o,"expected #{this} to not be within "+o)}),M.addMethod("instanceof",p),M.addMethod("instanceOf",p),M.addMethod("property",function(t,n,r){r&&S(this,"message",r);var o=!!S(this,"deep"),i=o?"deep property ":"property ",s=S(this,"negate"),a=S(this,"object"),c=o?e.getPathInfo(t,a):null,u=o?c.exists:e.hasProperty(t,a),h=o?c.value:a[t];if(s&&arguments.length>1){if(void 0===h)throw r=null!=r?r+": ":"",new Error(r+e.inspect(a)+" has no "+i+e.inspect(t))}else this.assert(u,"expected #{this} to have a "+i+e.inspect(t),"expected #{this} to not have "+i+e.inspect(t));arguments.length>1&&this.assert(n===h,"expected #{this} to have a "+i+e.inspect(t)+" of #{exp}, but got #{act}","expected #{this} to not have a "+i+e.inspect(t)+" of #{act}",n,h),S(this,"object",h)}),M.addMethod("ownProperty",l),M.addMethod("haveOwnProperty",l),M.addMethod("ownPropertyDescriptor",d),M.addMethod("haveOwnPropertyDescriptor",d),M.addChainableMethod("length",y,g),M.addMethod("lengthOf",y),M.addMethod("match",b),M.addMethod("matches",b),M.addMethod("string",function(t,n){n&&S(this,"message",n);var r=S(this,"object");new M(r,n).is.a("string"),this.assert(~r.indexOf(t),"expected #{this} to contain "+e.inspect(t),"expected #{this} to not contain "+e.inspect(t))}),M.addMethod("keys",w),M.addMethod("key",w),M.addMethod("throw",v),M.addMethod("throws",v),M.addMethod("Throw",v),M.addMethod("respondTo",x),M.addMethod("respondsTo",x),M.addProperty("itself",function(){S(this,"itself",!0)}),M.addMethod("satisfy",m),M.addMethod("satisfies",m),M.addMethod("closeTo",E),M.addMethod("approximately",E),M.addMethod("members",function(t,n){n&&S(this,"message",n);var r=S(this,"object");new M(r).to.be.an("array"),new M(t).to.be.an("array");var o=S(this,"deep")?e.eql:void 0;if(S(this,"contains"))return this.assert(j(t,r,o),"expected #{this} to be a superset of #{act}","expected #{this} to not be a superset of #{act}",r,t);this.assert(j(r,t,o)&&j(t,r,o),"expected #{this} to have the same members as #{act}","expected #{this} to not have the same members as #{act}",r,t)}),M.addMethod("oneOf",_),M.addChainableMethod("change",A),M.addChainableMethod("changes",A),M.addChainableMethod("increase",P),M.addChainableMethod("increases",P),M.addChainableMethod("decrease",O),M.addChainableMethod("decreases",O),M.addProperty("extensible",function(){var t,e=S(this,"object");try{t=Object.isExtensible(e)}catch(e){if(!(e instanceof TypeError))throw e;t=!1}this.assert(t,"expected #{this} to be extensible","expected #{this} to not be extensible")}),M.addProperty("sealed",function(){var t,e=S(this,"object");try{t=Object.isSealed(e)}catch(e){if(!(e instanceof TypeError))throw e;t=!0}this.assert(t,"expected #{this} to be sealed","expected #{this} to not be sealed")}),M.addProperty("frozen",function(){var t,e=S(this,"object");try{t=Object.isFrozen(e)}catch(e){if(!(e instanceof TypeError))throw e;t=!0}this.assert(t,"expected #{this} to be frozen","expected #{this} to not be frozen")})}},function(t,e){/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(t,e){/*!
   * Chai dependencies.
   */
var n=t.Assertion,r=e.flag,o=t.assert=function(e,r){new n(null,null,t.assert).assert(e,r,"[ negation message unavailable ]")};o.fail=function(e,n,r,i){throw r=r||"assert.fail()",new t.AssertionError(r,{actual:e,expected:n,operator:i},o.fail)},o.isOk=function(t,e){new n(t,e).is.ok},o.isNotOk=function(t,e){new n(t,e).is.not.ok},o.equal=function(t,e,i){var s=new n(t,i,o.equal);s.assert(e==r(s,"object"),"expected #{this} to equal #{exp}","expected #{this} to not equal #{act}",e,t)},o.notEqual=function(t,e,i){var s=new n(t,i,o.notEqual);s.assert(e!=r(s,"object"),"expected #{this} to not equal #{exp}","expected #{this} to equal #{act}",e,t)},o.strictEqual=function(t,e,r){new n(t,r).to.equal(e)},o.notStrictEqual=function(t,e,r){new n(t,r).to.not.equal(e)},o.deepEqual=function(t,e,r){new n(t,r).to.eql(e)},o.notDeepEqual=function(t,e,r){new n(t,r).to.not.eql(e)},o.isAbove=function(t,e,r){new n(t,r).to.be.above(e)},o.isAtLeast=function(t,e,r){new n(t,r).to.be.least(e)},o.isBelow=function(t,e,r){new n(t,r).to.be.below(e)},o.isAtMost=function(t,e,r){new n(t,r).to.be.most(e)},o.isTrue=function(t,e){new n(t,e).is.true},o.isNotTrue=function(t,e){new n(t,e).to.not.equal(!0)},o.isFalse=function(t,e){new n(t,e).is.false},o.isNotFalse=function(t,e){new n(t,e).to.not.equal(!1)},o.isNull=function(t,e){new n(t,e).to.equal(null)},o.isNotNull=function(t,e){new n(t,e).to.not.equal(null)},o.isNaN=function(t,e){new n(t,e).to.be.NaN},o.isNotNaN=function(t,e){new n(t,e).not.to.be.NaN},o.isUndefined=function(t,e){new n(t,e).to.equal(void 0)},o.isDefined=function(t,e){new n(t,e).to.not.equal(void 0)},o.isFunction=function(t,e){new n(t,e).to.be.a("function")},o.isNotFunction=function(t,e){new n(t,e).to.not.be.a("function")},o.isObject=function(t,e){new n(t,e).to.be.a("object")},o.isNotObject=function(t,e){new n(t,e).to.not.be.a("object")},o.isArray=function(t,e){new n(t,e).to.be.an("array")},o.isNotArray=function(t,e){new n(t,e).to.not.be.an("array")},o.isString=function(t,e){new n(t,e).to.be.a("string")},o.isNotString=function(t,e){new n(t,e).to.not.be.a("string")},o.isNumber=function(t,e){new n(t,e).to.be.a("number")},o.isNotNumber=function(t,e){new n(t,e).to.not.be.a("number")},o.isBoolean=function(t,e){new n(t,e).to.be.a("boolean")},o.isNotBoolean=function(t,e){new n(t,e).to.not.be.a("boolean")},o.typeOf=function(t,e,r){new n(t,r).to.be.a(e)},o.notTypeOf=function(t,e,r){new n(t,r).to.not.be.a(e)},o.instanceOf=function(t,e,r){new n(t,r).to.be.instanceOf(e)},o.notInstanceOf=function(t,e,r){new n(t,r).to.not.be.instanceOf(e)},o.include=function(t,e,r){new n(t,r,o.include).include(e)},o.notInclude=function(t,e,r){new n(t,r,o.notInclude).not.include(e)},o.match=function(t,e,r){new n(t,r).to.match(e)},o.notMatch=function(t,e,r){new n(t,r).to.not.match(e)},o.property=function(t,e,r){new n(t,r).to.have.property(e)},o.notProperty=function(t,e,r){new n(t,r).to.not.have.property(e)},o.deepProperty=function(t,e,r){new n(t,r).to.have.deep.property(e)},o.notDeepProperty=function(t,e,r){new n(t,r).to.not.have.deep.property(e)},o.propertyVal=function(t,e,r,o){new n(t,o).to.have.property(e,r)},o.propertyNotVal=function(t,e,r,o){new n(t,o).to.not.have.property(e,r)},o.deepPropertyVal=function(t,e,r,o){new n(t,o).to.have.deep.property(e,r)},o.deepPropertyNotVal=function(t,e,r,o){new n(t,o).to.not.have.deep.property(e,r)},o.lengthOf=function(t,e,r){new n(t,r).to.have.length(e)},o.throws=function(t,e,o,i){("string"==typeof e||e instanceof RegExp)&&(o=e,e=null);var s=new n(t,i).to.throw(e,o);return r(s,"object")},o.doesNotThrow=function(t,e,r){"string"==typeof e&&(r=e,e=null),new n(t,r).to.not.Throw(e)},o.operator=function(t,o,i,s){var a;switch(o){case"==":a=t==i;break;case"===":a=t===i;break;case">":a=t>i;break;case">=":a=t>=i;break;case"<":a=t<i;break;case"<=":a=t<=i;break;case"!=":a=t!=i;break;case"!==":a=t!==i;break;default:throw new Error('Invalid operator "'+o+'"')}var c=new n(a,s);c.assert(!0===r(c,"object"),"expected "+e.inspect(t)+" to be "+o+" "+e.inspect(i),"expected "+e.inspect(t)+" to not be "+o+" "+e.inspect(i))},o.closeTo=function(t,e,r,o){new n(t,o).to.be.closeTo(e,r)},o.approximately=function(t,e,r,o){new n(t,o).to.be.approximately(e,r)},o.sameMembers=function(t,e,r){new n(t,r).to.have.same.members(e)},o.sameDeepMembers=function(t,e,r){new n(t,r).to.have.same.deep.members(e)},o.includeMembers=function(t,e,r){new n(t,r).to.include.members(e)},o.includeDeepMembers=function(t,e,r){new n(t,r).to.include.deep.members(e)},o.oneOf=function(t,e,r){new n(t,r).to.be.oneOf(e)},o.changes=function(t,e,r){new n(t).to.change(e,r)},o.doesNotChange=function(t,e,r){new n(t).to.not.change(e,r)},o.increases=function(t,e,r){new n(t).to.increase(e,r)},o.doesNotIncrease=function(t,e,r){new n(t).to.not.increase(e,r)},o.decreases=function(t,e,r){new n(t).to.decrease(e,r)},o.doesNotDecrease=function(t,e,r){new n(t).to.not.decrease(e,r)},/*!
   * ### .ifError(object)
   *
   * Asserts if value is not a false value, and throws if it is a true value.
   * This is added to allow for chai to be a drop-in replacement for Node's
   * assert class.
   *
   *     var err = new Error('I am a custom error');
   *     assert.ifError(err); // Rethrows err!
   *
   * @name ifError
   * @param {Object} object
   * @namespace Assert
   * @api public
   */
o.ifError=function(t){if(t)throw t},o.isExtensible=function(t,e){new n(t,e).to.be.extensible},o.isNotExtensible=function(t,e){new n(t,e).to.not.be.extensible},o.isSealed=function(t,e){new n(t,e).to.be.sealed},o.isNotSealed=function(t,e){new n(t,e).to.not.be.sealed},o.isFrozen=function(t,e){new n(t,e).to.be.frozen},o.isNotFrozen=function(t,e){new n(t,e).to.not.be.frozen},/*!
   * Aliases.
   */
function t(e,n){return o[n]=o[e],t}("isOk","ok")("isNotOk","notOk")("throws","throw")("throws","Throw")("isExtensible","extensible")("isNotExtensible","notExtensible")("isSealed","sealed")("isNotSealed","notSealed")("isFrozen","frozen")("isNotFrozen","notFrozen")}},function(t,e){/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(t,e){t.expect=function(e,n){return new t.Assertion(e,n)},t.expect.fail=function(e,n,r,o){throw r=r||"expect.fail()",new t.AssertionError(r,{actual:e,expected:n,operator:o},t.expect.fail)}}},function(t,e){/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(t,e){function n(){function e(){return this instanceof String||this instanceof Number||this instanceof Boolean?new r(this.valueOf(),null,e):new r(this,null,e)}function n(t){Object.defineProperty(this,"should",{value:t,enumerable:!0,configurable:!0,writable:!0})}Object.defineProperty(Object.prototype,"should",{set:n,get:e,configurable:!0});var o={};return o.fail=function(e,n,r,i){throw r=r||"should.fail()",new t.AssertionError(r,{actual:e,expected:n,operator:i},o.fail)},o.equal=function(t,e,n){new r(t,n).to.equal(e)},o.Throw=function(t,e,n,o){new r(t,o).to.Throw(e,n)},o.exist=function(t,e){new r(t,e).to.exist},o.not={},o.not.equal=function(t,e,n){new r(t,n).to.not.equal(e)},o.not.Throw=function(t,e,n,o){new r(t,o).to.not.Throw(e,n)},o.not.exist=function(t,e){new r(t,e).to.not.exist},o.throw=o.Throw,o.not.throw=o.not.Throw,o}var r=t.Assertion;t.should=n,t.Should=n}},function(t,e,n){/*!
 * Chai - addChainingMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependencies
 */
var r=n(11),o=n(0),i=n(1),s="__proto__"in Object,a=/^(?:length|name|arguments|caller)$/,c=Function.prototype.call,u=Function.prototype.apply;t.exports=function(t,e,n,h){"function"!=typeof h&&(h=function(){});var f={method:n,chainingBehavior:h};t.__methods||(t.__methods={}),t.__methods[e]=f,Object.defineProperty(t,e,{get:function(){f.chainingBehavior.call(this);var e=function t(){o(this,"ssfi")&&!1===i.includeStack&&o(this,"ssfi",t);var e=f.method.apply(this,arguments);return void 0===e?this:e};if(s){var n=e.__proto__=Object.create(this);n.call=c,n.apply=u}else{Object.getOwnPropertyNames(t).forEach(function(n){if(!a.test(n)){var r=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,r)}})}return r(this,e),e},configurable:!0})}},function(t,e,n){/*!
 * Chai - addMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var r=n(1),o=n(0);t.exports=function(t,e,n){t[e]=function(){o(this,"ssfi")&&!1===r.includeStack&&o(this,"ssfi",t[e]);var i=n.apply(this,arguments);return void 0===i?this:i}}},function(t,e,n){/*!
 * Chai - addProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var r=n(1),o=n(0);t.exports=function(t,e,n){Object.defineProperty(t,e,{get:function t(){o(this,"ssfi")&&!1===r.includeStack&&o(this,"ssfi",t);var e=n.call(this);return void 0===e?this:e},configurable:!0})}},function(t,e,n){/*!
 * Chai - expectTypes utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
var r=n(5),o=n(0),i=n(2);t.exports=function(t,e){var t=o(t,"object");e=e.map(function(t){return t.toLowerCase()}),e.sort();var n=e.map(function(t,n){var r=~["a","e","i","o","u"].indexOf(t.charAt(0))?"an":"a";return(e.length>1&&n===e.length-1?"or ":"")+r+" "+t}).join(", ");if(!e.some(function(e){return i(t)===e}))throw new r("object tested must be "+n+", but "+i(t)+" given")}},function(t,e){/*!
 * Chai - getEnumerableProperties utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(t){var e=[];for(var n in t)e.push(n);return e}},function(t,e,n){/*!
 * Chai - message composition utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependancies
 */
var r=n(0),o=n(6),i=(n(4),n(10));t.exports=function(t,e){var n=r(t,"negate"),s=r(t,"object"),a=e[3],c=o(t,e),u=n?e[2]:e[1],h=r(t,"message");return"function"==typeof u&&(u=u()),u=u||"",u=u.replace(/#\{this\}/g,function(){return i(s)}).replace(/#\{act\}/g,function(){return i(c)}).replace(/#\{exp\}/g,function(){return i(a)}),h?h+": "+u:u}},function(t,e,n){/*!
 * Chai - getPathValue utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * @see https://github.com/logicalparadox/filtr
 * MIT Licensed
 */
var r=n(8);t.exports=function(t,e){return r(t,e).value}},function(t,e){/*!
 * Chai - getProperties utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(t){function e(t){-1===n.indexOf(t)&&n.push(t)}for(var n=Object.getOwnPropertyNames(t),r=Object.getPrototypeOf(t);null!==r;)Object.getOwnPropertyNames(r).forEach(e),r=Object.getPrototypeOf(r);return n}},function(t,e,n){/*!
 * chai
 * Copyright(c) 2011 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Main exports
 */
var e=t.exports={};/*!
 * test utility
 */
e.test=n(34),/*!
 * type utility
 */
e.type=n(2),/*!
 * expectTypes utility
 */
e.expectTypes=n(25),/*!
 * message utility
 */
e.getMessage=n(27),/*!
 * actual utility
 */
e.getActual=n(6),/*!
 * Inspect util
 */
e.inspect=n(4),/*!
 * Object Display util
 */
e.objDisplay=n(10),/*!
 * Flag utility
 */
e.flag=n(0),/*!
 * Flag transferring utility
 */
e.transferFlags=n(11),/*!
 * Deep equal utility
 */
e.eql=n(35),/*!
 * Deep path value
 */
e.getPathValue=n(28),/*!
 * Deep path info
 */
e.getPathInfo=n(8),/*!
 * Check if a property exists
 */
e.hasProperty=n(9),/*!
 * Function name
 */
e.getName=n(7),/*!
 * add Property
 */
e.addProperty=n(24),/*!
 * add Method
 */
e.addMethod=n(23),/*!
 * overwrite Property
 */
e.overwriteProperty=n(33),/*!
 * overwrite Method
 */
e.overwriteMethod=n(32),/*!
 * Add a chainable method
 */
e.addChainableMethod=n(22),/*!
 * Overwrite chainable method
 */
e.overwriteChainableMethod=n(31)},function(t,e){/*!
 * Chai - overwriteChainableMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(t,e,n,r){var o=t.__methods[e],i=o.chainingBehavior;o.chainingBehavior=function(){var t=r(i).call(this);return void 0===t?this:t};var s=o.method;o.method=function(){var t=n(s).apply(this,arguments);return void 0===t?this:t}}},function(t,e){/*!
 * Chai - overwriteMethod utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(t,e,n){var r=t[e],o=function(){return this};r&&"function"==typeof r&&(o=r),t[e]=function(){var t=n(o).apply(this,arguments);return void 0===t?this:t}}},function(t,e){/*!
 * Chai - overwriteProperty utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
t.exports=function(t,e,n){var r=Object.getOwnPropertyDescriptor(t,e),o=function(){};r&&"function"==typeof r.get&&(o=r.get),Object.defineProperty(t,e,{get:function(){var t=n(o).call(this);return void 0===t?this:t},configurable:!0})}},function(t,e,n){/*!
 * Chai - test utility
 * Copyright(c) 2012-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependancies
 */
var r=n(0);t.exports=function(t,e){var n=r(t,"negate"),o=e[0];return n?!o:o}},function(t,e,n){t.exports=n(36)},function(t,e,n){function r(t,e,n){return!!o(t,e)||("date"===g(t)?s(t,e):"regexp"===g(t)?a(t,e):d.isBuffer(t)?f(t,e):"arguments"===g(t)?c(t,e,n):!!i(t,e)&&("object"!==g(t)&&"object"!==g(e)&&"array"!==g(t)&&"array"!==g(e)?o(t,e):l(t,e,n)))}/*!
 * Strict (egal) equality test. Ensures that NaN always
 * equals NaN and `-0` does not equal `+0`.
 *
 * @param {Mixed} a
 * @param {Mixed} b
 * @return {Boolean} equal match
 */
function o(t,e){return t===e?0!==t||1/t==1/e:t!==t&&e!==e}/*!
 * Compare the types of two given objects and
 * return if they are equal. Note that an Array
 * has a type of `array` (not `object`) and arguments
 * have a type of `arguments` (not `array`/`object`).
 *
 * @param {Mixed} a
 * @param {Mixed} b
 * @return {Boolean} result
 */
function i(t,e){return g(t)===g(e)}/*!
 * Compare two Date objects by asserting that
 * the time values are equal using `saveValue`.
 *
 * @param {Date} a
 * @param {Date} b
 * @return {Boolean} result
 */
function s(t,e){return"date"===g(e)&&o(t.getTime(),e.getTime())}/*!
 * Compare two regular expressions by converting them
 * to string and checking for `sameValue`.
 *
 * @param {RegExp} a
 * @param {RegExp} b
 * @return {Boolean} result
 */
function a(t,e){return"regexp"===g(e)&&o(t.toString(),e.toString())}/*!
 * Assert deep equality of two `arguments` objects.
 * Unfortunately, these must be sliced to arrays
 * prior to test to ensure no bad behavior.
 *
 * @param {Arguments} a
 * @param {Arguments} b
 * @param {Array} memoize (optional)
 * @return {Boolean} result
 */
function c(t,e,n){return"arguments"===g(e)&&(t=[].slice.call(t),e=[].slice.call(e),r(t,e,n))}/*!
 * Get enumerable properties of a given object.
 *
 * @param {Object} a
 * @return {Array} property names
 */
function u(t){var e=[];for(var n in t)e.push(n);return e}/*!
 * Simple equality for flat iterable objects
 * such as Arrays or Node.js buffers.
 *
 * @param {Iterable} a
 * @param {Iterable} b
 * @return {Boolean} result
 */
function h(t,e){if(t.length!==e.length)return!1;for(var n=0,r=!0;n<t.length;n++)if(t[n]!==e[n]){r=!1;break}return r}/*!
 * Extension to `iterableEqual` specifically
 * for Node.js Buffers.
 *
 * @param {Buffer} a
 * @param {Mixed} b
 * @return {Boolean} result
 */
function f(t,e){return!!d.isBuffer(e)&&h(t,e)}/*!
 * Block for `objectEqual` ensuring non-existing
 * values don't get in.
 *
 * @param {Mixed} object
 * @return {Boolean} result
 */
function p(t){return null!==t&&void 0!==t}/*!
 * Recursively check the equality of two objects.
 * Once basic sameness has been established it will
 * defer to `deepEqual` for each enumerable key
 * in the object.
 *
 * @param {Mixed} a
 * @param {Mixed} b
 * @return {Boolean} result
 */
function l(t,e,n){if(!p(t)||!p(e))return!1;if(t.prototype!==e.prototype)return!1;var o;if(n){for(o=0;o<n.length;o++)if(n[o][0]===t&&n[o][1]===e||n[o][0]===e&&n[o][1]===t)return!0}else n=[];try{var i=u(t),s=u(e)}catch(t){return!1}if(i.sort(),s.sort(),!h(i,s))return!1;n.push([t,e]);var a;for(o=i.length-1;o>=0;o--)if(a=i[o],!r(t[a],e[a],n))return!1;return!0}/*!
 * deep-eql
 * Copyright(c) 2013 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Module dependencies
 */
var d,g=n(2);try{d=n(15).Buffer}catch(t){d={},d.isBuffer=function(){return!1}}/*!
 * Primary Export
 */
t.exports=r},function(t,e){e.read=function(t,e,n,r,o){var i,s,a=8*o-r-1,c=(1<<a)-1,u=c>>1,h=-7,f=n?o-1:0,p=n?-1:1,l=t[e+f];for(f+=p,i=l&(1<<-h)-1,l>>=-h,h+=a;h>0;i=256*i+t[e+f],f+=p,h-=8);for(s=i&(1<<-h)-1,i>>=-h,h+=r;h>0;s=256*s+t[e+f],f+=p,h-=8);if(0===i)i=1-u;else{if(i===c)return s?NaN:1/0*(l?-1:1);s+=Math.pow(2,r),i-=u}return(l?-1:1)*s*Math.pow(2,i-r)},e.write=function(t,e,n,r,o,i){var s,a,c,u=8*i-o-1,h=(1<<u)-1,f=h>>1,p=23===o?Math.pow(2,-24)-Math.pow(2,-77):0,l=r?0:i-1,d=r?1:-1,g=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,s=h):(s=Math.floor(Math.log(e)/Math.LN2),e*(c=Math.pow(2,-s))<1&&(s--,c*=2),e+=s+f>=1?p/c:p*Math.pow(2,1-f),e*c>=2&&(s++,c/=2),s+f>=h?(a=0,s=h):s+f>=1?(a=(e*c-1)*Math.pow(2,o),s+=f):(a=e*Math.pow(2,f-1)*Math.pow(2,o),s=0));o>=8;t[n+l]=255&a,l+=d,a/=256,o-=8);for(s=s<<o|a,u+=o;u>0;t[n+l]=255&s,l+=d,s/=256,u-=8);t[n+l-d]|=128*g}},function(t,e){var n={}.toString;t.exports=Array.isArray||function(t){return"[object Array]"==n.call(t)}},function(t,e){function n(t){var e=Object.prototype.toString.call(t).match(o)[1].toLowerCase();return"function"==typeof Promise&&t instanceof Promise?"promise":null===t?"null":void 0===t?"undefined":e}function r(){if(!(this instanceof r))return new r;this.tests={}}/*!
 * type-detect
 * Copyright(c) 2013 jake luer <jake@alogicalparadox.com>
 * MIT Licensed
 */
/*!
 * Primary Exports
 */
var o=/^\[object (.*)\]$/;(t.exports=n).Library=r,r.prototype.of=n,r.prototype.define=function(t,e){return 1===arguments.length?this.tests[t]:(this.tests[t]=e,this)},r.prototype.test=function(t,e){if(e===n(t))return!0;var r=this.tests[e];if(r&&"regexp"===n(r))return r.test(t);if(r&&"function"===n(r))return r(t);throw new ReferenceError('Type test "'+e+'" not defined or invalid.')}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n}]);