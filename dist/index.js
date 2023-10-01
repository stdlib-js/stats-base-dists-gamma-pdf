"use strict";var o=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var G=o(function(er,F){
var X=require('@stdlib/math-base-special-gamma-lanczos-sum-expg-scaled/dist'),w=require('@stdlib/math-base-special-gammaln/dist'),R=require('@stdlib/math-base-special-gamma/dist'),T=require('@stdlib/math-base-special-log1p/dist'),j=require('@stdlib/math-base-special-sqrt/dist'),k=require('@stdlib/math-base-special-abs/dist'),a=require('@stdlib/math-base-special-exp/dist'),s=require('@stdlib/math-base-special-pow/dist'),N=require('@stdlib/math-base-special-max/dist'),g=require('@stdlib/math-base-special-min/dist'),y=require('@stdlib/math-base-special-ln/dist'),c=require('@stdlib/constants-float64-max-ln/dist'),m=require('@stdlib/constants-float64-min-ln/dist'),l=require('@stdlib/constants-float64-gamma-lanczos-g/dist'),B=require('@stdlib/constants-float64-e/dist');function C(r,e){var i,n,t,v,u,f,q;return t=r+l-.5,q=(e-r-l+.5)/t,r<1?e<=m?a(r*y(e)-e-w(r)):s(e,r)*a(-e)/R(r):(k(q*q*r)<=100&&r>150?(i=r*(T(q)-q)+e*(.5-l)/t,i=a(i)):(v=r*y(e/t),u=r-e,g(v,u)<=m||N(v,u)>=c?(n=u/r,g(v,u)/2>m&&N(v,u)/2<c?(f=s(e/t,r/2)*a(u/2),i=f*f):g(v,u)/4>m&&N(v,u)/4<c&&e>r?(f=s(e/t,r/4)*a(u/4),i=f*f,i*=i):n>m&&n<c?i=s(e*a(n)/t,r):i=a(v+u)):i=s(e/t,r)*a(u)),i*=j(t/B)/X(r),i)}F.exports=C
});var d=o(function(ir,D){
var H=require('@stdlib/math-base-special-gammaln/dist'),J=require('@stdlib/math-base-special-exp/dist'),I=require('@stdlib/math-base-special-ln/dist'),A=require('@stdlib/constants-float64-pinf/dist'),K=require('@stdlib/constants-float64-max/dist'),Q=G();function U(r,e){var i;return r<=0?NaN:e<0?NaN:e===0?r>1?0:r===1?1:A:(i=Q(r,e),e<1&&K*e<i?A:(i===0?(i=r*I(e)-e-H(r)-I(e),i=J(i)):i/=e,i))}D.exports=U
});var _=o(function(ur,M){
var p=require('@stdlib/math-base-assert-is-nan/dist'),L=require('@stdlib/constants-float64-pinf/dist'),V=d();function W(r,e,i){return p(r)||p(e)||p(i)||e<0||i<=0?NaN:r<0||r===L?0:e===0?r===0?L:0:V(e,r*i)*i}M.exports=W
});var O=o(function(nr,E){
var Y=require('@stdlib/utils-constant-function/dist'),Z=require('@stdlib/stats-base-dists-degenerate-pdf/dist').factory,P=require('@stdlib/math-base-assert-is-nan/dist'),$=require('@stdlib/constants-float64-pinf/dist'),x=d();function b(r,e){if(P(r)||P(e)||r<0||e<=0)return Y(NaN);if(r===0)return Z(0);return i;function i(n){return P(n)?NaN:n<0||n===$?0:x(r,n*e)*e}}E.exports=b
});var h=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),S=_(),z=O();h(S,"factory",z);module.exports=S;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map