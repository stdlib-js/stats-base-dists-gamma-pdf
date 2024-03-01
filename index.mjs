// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gammaln@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@v0.2.2-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma-lanczos-sum-expg-scaled@v0.2.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma@v0.2.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-log1p@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@v0.2.1-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@v0.2.1-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.2.1-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-max@v0.2.1-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-min@v0.2.1-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max-ln@v0.2.1-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-min-ln@v0.2.1-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-gamma-lanczos-g@v0.2.1-esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-e@v0.2.1-esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@v0.2.1-esm/index.mjs";import{factory as u}from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-degenerate-pdf@v0.2.1-esm/index.mjs";function N(s,t){var x;return s<=0||t<0?NaN:0===t?s>1?0:1===s?1:e:(x=function(s,t){var e,d,x,u,N,y,z;return z=(t-s-b+.5)/(x=s+b-.5),s<1?t<=f?i(s*m(t)-t-n(s)):p(t,s)*i(-t)/a(s):(j(z*z*s)<=100&&s>150?(e=s*(l(z)-z)+t*(.5-b)/x,e=i(e)):(u=s*m(t/x),c(u,N=s-t)<=f||h(u,N)>=v?(d=N/s,c(u,N)/2>f&&h(u,N)/2<v?e=(y=p(t/x,s/2)*i(N/2))*y:c(u,N)/4>f&&h(u,N)/4<v&&t>s?(e=(y=p(t/x,s/4)*i(N/4))*y,e*=e):e=d>f&&d<v?p(t*i(d)/x,s):i(u+N)):e=p(t/x,s)*i(N)),e*=o(x/g)/r(s))}(s,t),t<1&&d*t<x?e:(0===x?(x=s*m(t)-t-n(s)-m(t),x=i(x)):x/=t,x))}function y(s,n,i){return t(s)||t(n)||t(i)||n<0||i<=0?NaN:s<0||s===e?0:0===n?0===s?e:0:N(n,s*i)*i}function z(s,n){return t(s)||t(n)||s<0||n<=0?x(NaN):0===s?u(0):function(i){if(t(i))return NaN;if(i<0||i===e)return 0;return N(s,i*n)*n}}s(y,"factory",z);export{y as default,z as factory};
//# sourceMappingURL=index.mjs.map
