// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gammaln@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-exp@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma-lanczos-sum-expg-scaled@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-gamma@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-log1p@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-sqrt@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-max@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-min@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-max-ln@esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-min-ln@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-gamma-lanczos-g@esm/index.mjs";import x from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-e@esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import{factory as u}from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-degenerate-pdf@esm/index.mjs";function N(s,t){var v;return s<=0||t<0?NaN:0===t?s>1?0:1===s?1:e:(v=function(s,t){var e,d,v,u,N,y,z;return z=(t-s-g+.5)/(v=s+g-.5),s<1?t<=b?i(s*m(t)-t-n(s)):p(t,s)*i(-t)/a(s):(j(z*z*s)<=100&&s>150?(e=s*(l(z)-z)+t*(.5-g)/v,e=i(e)):(u=s*m(t/v),c(u,N=s-t)<=b||h(u,N)>=f?(d=N/s,c(u,N)/2>b&&h(u,N)/2<f?e=(y=p(t/v,s/2)*i(N/2))*y:c(u,N)/4>b&&h(u,N)/4<f&&t>s?(e=(y=p(t/v,s/4)*i(N/4))*y,e*=e):e=d>b&&d<f?p(t*i(d)/v,s):i(u+N)):e=p(t/v,s)*i(N)),e*=o(v/x)/r(s))}(s,t),t<1&&d*t<v?e:(0===v?(v=s*m(t)-t-n(s)-m(t),v=i(v)):v/=t,v))}function y(s,n,i){return t(s)||t(n)||t(i)||n<0||i<=0?NaN:s<0||s===e?0:0===n?0===s?e:0:N(n,s*i)*i}function z(s,n){return t(s)||t(n)||s<0||n<=0?v(NaN):0===s?u(0):function(i){if(t(i))return NaN;if(i<0||i===e)return 0;return N(s,i*n)*n}}s(y,"factory",z);export{y as default,z as factory};
//# sourceMappingURL=index.mjs.map
