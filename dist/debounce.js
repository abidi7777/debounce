"use strict";function debounce(r){var u=1<arguments.length&&void 0!==arguments[1]?arguments[1]:0,c=2<arguments.length&&void 0!==arguments[2]&&arguments[2];if("function"!=typeof r)throw new Error("executor must be a function");var i=null,l=!1;return function(){for(var e=this,n=arguments.length,t=new Array(n),o=0;o<n;o++)t[o]=arguments[o];(l=!l&&!i&&c)&&r.call.apply(r,[this].concat(t)),clearTimeout(i),i=setTimeout(function(){return r.call.apply(r,[e].concat(t))},+u||0)}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=debounce,"undefined"!=typeof window&&(window.$debounce=debounce);