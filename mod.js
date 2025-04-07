// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty;function e(r){return"number"==typeof r}function t(r){var n,e="";for(n=0;n<r;n++)e+="0";return e}function i(r,n,e){var i=!1,a=n-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=e?r+t(a):t(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var n,t,u;switch(r.specifier){case"b":n=2;break;case"o":n=8;break;case"x":case"X":n=16;break;default:n=10}if(t=r.arg,u=parseInt(t,10),!isFinite(u)){if(!e(t))throw new Error("invalid integer. Value: "+t);u=0}return u<0&&("u"===r.specifier||10!==n)&&(u=4294967295+u+1),u<0?(t=(-u).toString(n),r.precision&&(t=i(t,r.precision,r.padRight)),t="-"+t):(t=u.toString(n),u||r.precision?r.precision&&(t=i(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===n&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):a.call(t)),8===n&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var f=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,l=String.prototype.replace,p=/e\+(\d)$/,v=/e-(\d)$/,g=/^(\d+)$/,y=/^(\d+)e/,d=/\.0$/,h=/\.0*e/,w=/(\..*[^0])0*e/;function b(r){var n,t,i=parseFloat(r.arg);if(!isFinite(i)){if(!e(r.arg))throw new Error("invalid floating-point number. Value: "+t);i=r.arg}switch(r.specifier){case"e":case"E":t=i.toExponential(r.precision);break;case"f":case"F":t=i.toFixed(r.precision);break;case"g":case"G":f(i)<1e-4?((n=r.precision)>0&&(n-=1),t=i.toExponential(n)):t=i.toPrecision(r.precision),r.alternate||(t=l.call(t,w,"$1e"),t=l.call(t,h,"e"),t=l.call(t,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=l.call(t,p,"e+0$1"),t=l.call(t,v,"e-0$1"),r.alternate&&(t=l.call(t,g,"$1."),t=l.call(t,y,"$1.e")),i>=0&&r.sign&&(t=r.sign+t),t=r.specifier===s.call(r.specifier)?s.call(t):c.call(t)}function m(r){var n,e="";for(n=0;n<r;n++)e+=" ";return e}var N=String.fromCharCode,A=Array.isArray;function _(r){return r!=r}function E(r){var n={};return n.specifier=r.specifier,n.precision=void 0===r.precision?1:r.precision,n.width=r.width,n.flags=r.flags||"",n.mapping=r.mapping,n}function U(r){var n,e,t,a,o,f,c,s,l,p,v,g,y;if(!A(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(f="",c=1,s=0;s<r.length;s++)if(t=r[s],"string"==typeof t)f+=t;else{if(n=void 0!==t.precision,!(t=E(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),e=t.flags,l=0;l<e.length;l++)switch(a=e.charAt(l)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=e.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,_(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(n&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,_(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,n=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n&&(t.padZeros=!1),t.arg=u(t);break;case"s":t.maxWidth=n?t.precision:-1,t.arg=String(t.arg);break;case"c":if(!_(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=_(o)?String(t.arg):N(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n||(t.precision=6),t.arg=b(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=i(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=(p=t.arg,v=t.width,g=t.padRight,y=void 0,(y=v-p.length)<0?p:p=g?p+m(y):m(y)+p)),f+=t.arg||"",c+=1}return f}var S=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function k(r){var n={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(n.precision="1"),n}function I(r){var n,e,t,i;for(e=[],i=0,t=S.exec(r);t;)(n=r.slice(i,S.lastIndex-t[0].length)).length&&e.push(n),e.push(k(t)),i=S.lastIndex,t=S.exec(r);return(n=r.slice(i)).length&&e.push(n),e}function x(r){var n,e;if("string"!=typeof r)throw new TypeError(x("invalid argument. First argument must be a string. Value: `%s`.",r));for(n=[I(r)],e=1;e<arguments.length;e++)n.push(arguments[e]);return U.apply(null,n)}var F=Object.prototype,j=F.toString,T=F.__defineGetter__,O=F.__defineSetter__,V=F.__lookupGetter__,$=F.__lookupSetter__;var G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,e){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===j.call(r))throw new TypeError(x("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===j.call(e))throw new TypeError(x("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((i="value"in e)&&(V.call(r,n)||$.call(r,n)?(t=r.__proto__,r.__proto__=F,delete r[n],r[n]=e.value,r.__proto__=t):r[n]=e.value),a="get"in e,o="set"in e,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&T&&T.call(r,n,e.get),o&&O&&O.call(r,n,e.set),r};function H(r,n,e){G(r,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function W(r){return r!=r}var C=Number.POSITIVE_INFINITY,L=Number.NEGATIVE_INFINITY;function P(r){return r===C||r===L}function M(r){return Math.abs(r)}var R="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var Z=Object.prototype.toString;var X=Object.prototype.hasOwnProperty;var Y="function"==typeof Symbol?Symbol:void 0,q="function"==typeof Y?Y.toStringTag:"";var z=R&&"symbol"==typeof Symbol.toStringTag?function(r){var n,e,t,i,a;if(null==r)return Z.call(r);e=r[q],a=q,n=null!=(i=r)&&X.call(i,a);try{r[q]=void 0}catch(n){return Z.call(r)}return t=Z.call(r),n?r[q]=e:delete r[q],t}:function(r){return Z.call(r)},B="function"==typeof Uint32Array;var D="function"==typeof Uint32Array?Uint32Array:null;var J,K="function"==typeof Uint32Array?Uint32Array:void 0;J=function(){var r,n,e;if("function"!=typeof D)return!1;try{n=new D(n=[1,3.14,-3.14,4294967296,4294967297]),e=n,r=(B&&e instanceof Uint32Array||"[object Uint32Array]"===z(e))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?K:function(){throw new Error("not implemented")};var Q=J,rr="function"==typeof Float64Array;var nr="function"==typeof Float64Array?Float64Array:null;var er,tr="function"==typeof Float64Array?Float64Array:void 0;er=function(){var r,n,e;if("function"!=typeof nr)return!1;try{n=new nr([1,3.14,-3.14,NaN]),e=n,r=(rr&&e instanceof Float64Array||"[object Float64Array]"===z(e))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?tr:function(){throw new Error("not implemented")};var ir=er,ar="function"==typeof Uint8Array;var or="function"==typeof Uint8Array?Uint8Array:null;var ur,fr="function"==typeof Uint8Array?Uint8Array:void 0;ur=function(){var r,n,e;if("function"!=typeof or)return!1;try{n=new or(n=[1,3.14,-3.14,256,257]),e=n,r=(ar&&e instanceof Uint8Array||"[object Uint8Array]"===z(e))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?fr:function(){throw new Error("not implemented")};var cr=ur,sr="function"==typeof Uint16Array;var lr="function"==typeof Uint16Array?Uint16Array:null;var pr,vr="function"==typeof Uint16Array?Uint16Array:void 0;pr=function(){var r,n,e;if("function"!=typeof lr)return!1;try{n=new lr(n=[1,3.14,-3.14,65536,65537]),e=n,r=(sr&&e instanceof Uint16Array||"[object Uint16Array]"===z(e))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?vr:function(){throw new Error("not implemented")};var gr,yr={uint16:pr,uint8:cr};(gr=new yr.uint16(1))[0]=4660;var dr=52===new yr.uint8(gr.buffer)[0],hr=!0===dr?1:0,wr=new ir(1),br=new Q(wr.buffer);function mr(r){return wr[0]=r,br[hr]}var Nr=!0===dr?1:0,Ar=new ir(1),_r=new Q(Ar.buffer);function Er(r,n){return Ar[0]=r,_r[Nr]=n>>>0,Ar[0]}var Ur=1023;var Sr=.6931471803691238,kr=1.9082149292705877e-10,Ir=0x40000000000000,xr=.3333333333333333,Fr=1048575,jr=2146435072,Tr=1048576,Or=1072693248;function Vr(r){var n,e,t,i,a,o,u,f,c,s,l,p;return 0===r?L:W(r)||r<0?NaN:(a=0,(e=mr(r))<Tr&&(a-=54,e=mr(r*=Ir)),e>=jr?r+r:(a+=(e>>20)-Ur|0,a+=(f=(e&=Fr)+614244&1048576|0)>>20|0,u=(r=Er(r,e|f^Or))-1,(Fr&2+e)<3?0===u?0===a?0:a*Sr+a*kr:(o=u*u*(.5-xr*u),0===a?u-o:a*Sr-(o-a*kr-u)):(f=e-398458|0,c=440401-e|0,i=(l=(p=(s=u/(2+u))*s)*p)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),t=p*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=t+i,(f|=c)>0?(n=.5*u*u,0===a?u-(n-s*(n+o)):a*Sr-(n-(s*(n+o)+a*kr)-u)):0===a?u-s*(u-o):a*Sr-(s*(u-o)-a*kr-u))))}var $r=Math.floor,Gr=Math.ceil;function Hr(r){return r<0?Gr(r):$r(r)}function Wr(r,n){var e,t,i,a;return i=(a=r*r)*a,t=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(e=.5*a))+(1-i-e+(a*t-r*n))}var Cr=-.16666666666666632,Lr=.00833333333332249,Pr=-.0001984126982985795,Mr=27557313707070068e-22,Rr=-2.5050760253406863e-8,Zr=1.58969099521155e-10;function Xr(r,n){var e,t,i;return e=Lr+(i=r*r)*(Pr+i*Mr)+i*(i*i)*(Rr+i*Zr),t=i*r,0===n?r+t*(Cr+i*e):r-(i*(.5*n-t*e)-n-t*Cr)}var Yr,qr,zr=2147483647,Br=2146435072,Dr=1048575,Jr=!0===dr?0:1,Kr=new ir(1),Qr=new Q(Kr.buffer);!0===dr?(Yr=1,qr=0):(Yr=0,qr=1);var rn={HIGH:Yr,LOW:qr},nn=new ir(1),en=new Q(nn.buffer),tn=rn.HIGH,an=rn.LOW;function on(r,n){return en[tn]=r,en[an]=n,nn[0]}var un,fn,cn=1023,sn=-1023,ln=-1074,pn=2147483648;!0===dr?(un=1,fn=0):(un=0,fn=1);var vn={HIGH:un,LOW:fn},gn=new ir(1),yn=new Q(gn.buffer),dn=vn.HIGH,hn=vn.LOW;function wn(r,n,e,t){return gn[0]=r,n[t]=yn[dn],n[t+e]=yn[hn],n}function bn(r){return wn(r,[0,0],1,0)}H(bn,"assign",wn);var mn=[0,0];function Nn(r,n){var e,t;return bn.assign(r,mn,1,0),e=mn[0],e&=zr,t=mr(n),on(e|=t&=pn,mn[1])}var An=22250738585072014e-324,_n=4503599627370496;function En(r,n,e,t){return W(r)||P(r)?(n[t]=r,n[t+e]=0,n):0!==r&&M(r)<An?(n[t]=r*_n,n[t+e]=-52,n):(n[t]=r,n[t+e]=0,n)}H((function(r){return En(r,[0,0],1,0)}),"assign",En);var Un=2220446049250313e-31,Sn=2148532223,kn=[0,0],In=[0,0];function xn(r,n){var e,t;return 0===n||0===r||W(r)||P(r)?r:(En(r,kn,1,0),r=kn[0],n+=kn[1],n+=function(r){var n=mr(r);return(n=(n&Br)>>>20)-Ur|0}(r),n<ln?Nn(0,r):n>cn?r<0?L:C:(n<=sn?(n+=52,t=Un):t=1,bn.assign(r,In,1,0),e=In[0],e&=Sn,t*on(e|=n+Ur<<20,In[1])))}function Fn(r){return function(r,n){var e,t;for(e=[],t=0;t<n;t++)e.push(r);return e}(0,r)}var jn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Tn=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],On=16777216,Vn=5.960464477539063e-8,$n=Fn(20),Gn=Fn(20),Hn=Fn(20),Wn=Fn(20);function Cn(r,n,e,t,i,a,o,u,f){var c,s,l,p,v,g,y,d,h;for(p=a,h=t[e],d=e,v=0;d>0;v++)s=Vn*h|0,Wn[v]=h-On*s|0,h=t[d-1]+s,d-=1;if(h=xn(h,i),h-=8*$r(.125*h),h-=y=0|h,l=0,i>0?(y+=v=Wn[e-1]>>24-i,Wn[e-1]-=v<<24-i,l=Wn[e-1]>>23-i):0===i?l=Wn[e-1]>>23:h>=.5&&(l=2),l>0){for(y+=1,c=0,v=0;v<e;v++)d=Wn[v],0===c?0!==d&&(c=1,Wn[v]=16777216-d):Wn[v]=16777215-d;if(i>0)switch(i){case 1:Wn[e-1]&=8388607;break;case 2:Wn[e-1]&=4194303}2===l&&(h=1-h,0!==c&&(h-=xn(1,i)))}if(0===h){for(d=0,v=e-1;v>=a;v--)d|=Wn[v];if(0===d){for(g=1;0===Wn[a-g];g++);for(v=e+1;v<=e+g;v++){for(f[u+v]=jn[o+v],s=0,d=0;d<=u;d++)s+=r[d]*f[u+(v-d)];t[v]=s}return Cn(r,n,e+=g,t,i,a,o,u,f)}}if(0===h)for(e-=1,i-=24;0===Wn[e];)e-=1,i-=24;else(h=xn(h,-i))>=On?(s=Vn*h|0,Wn[e]=h-On*s|0,i+=24,Wn[e+=1]=s):Wn[e]=0|h;for(s=xn(1,i),v=e;v>=0;v--)t[v]=s*Wn[v],s*=Vn;for(v=e;v>=0;v--){for(s=0,g=0;g<=p&&g<=e-v;g++)s+=Tn[g]*t[v+g];Hn[e-v]=s}for(s=0,v=e;v>=0;v--)s+=Hn[v];for(n[0]=0===l?s:-s,s=Hn[0]-s,v=1;v<=e;v++)s+=Hn[v];return n[1]=0===l?s:-s,7&y}function Ln(r,n,e,t){var i,a,o,u,f,c,s;for(4,(a=(e-3)/24|0)<0&&(a=0),u=e-24*(a+1),c=a-(o=t-1),s=o+4,f=0;f<=s;f++)$n[f]=c<0?0:jn[c],c+=1;for(f=0;f<=4;f++){for(i=0,c=0;c<=o;c++)i+=r[c]*$n[o+(f-c)];Gn[f]=i}return 4,Cn(r,n,4,Gn,u,4,a,o,$n)}var Pn=Math.round,Mn=.6366197723675814,Rn=1.5707963267341256,Zn=6077100506506192e-26,Xn=6077100506303966e-26,Yn=20222662487959506e-37,qn=20222662487111665e-37,zn=84784276603689e-45,Bn=2047;function Dn(r,n,e){var t,i,a,o,u;return a=r-(t=Pn(r*Mn))*Rn,o=t*Zn,u=n>>20|0,e[0]=a-o,u-(mr(e[0])>>20&Bn)>16&&(o=t*Yn-((i=a)-(a=i-(o=t*Xn))-o),e[0]=a-o,u-(mr(e[0])>>20&Bn)>49&&(o=t*zn-((i=a)-(a=i-(o=t*qn))-o),e[0]=a-o)),e[1]=a-e[0]-o,t}var Jn=0,Kn=16777216,Qn=1.5707963267341256,re=6077100506506192e-26,ne=2*re,ee=3*re,te=4*re,ie=598523,ae=1072243195,oe=1073928572,ue=1074752122,fe=1074977148,ce=1075183036,se=1075388923,le=1075594811,pe=1094263291,ve=[0,0,0],ge=[0,0];function ye(r,n){var e,t,i,a,o,u,f;if((i=mr(r)&zr|0)<=ae)return n[0]=r,n[1]=0,0;if(i<=ue)return(i&Dr)===ie?Dn(r,i,n):i<=oe?r>0?(f=r-Qn,n[0]=f-re,n[1]=f-n[0]-re,1):(f=r+Qn,n[0]=f+re,n[1]=f-n[0]+re,-1):r>0?(f=r-2*Qn,n[0]=f-ne,n[1]=f-n[0]-ne,2):(f=r+2*Qn,n[0]=f+ne,n[1]=f-n[0]+ne,-2);if(i<=le)return i<=ce?i===fe?Dn(r,i,n):r>0?(f=r-3*Qn,n[0]=f-ee,n[1]=f-n[0]-ee,3):(f=r+3*Qn,n[0]=f+ee,n[1]=f-n[0]+ee,-3):i===se?Dn(r,i,n):r>0?(f=r-4*Qn,n[0]=f-te,n[1]=f-n[0]-te,4):(f=r+4*Qn,n[0]=f+te,n[1]=f-n[0]+te,-4);if(i<pe)return Dn(r,i,n);if(i>=Br)return n[0]=NaN,n[1]=NaN,0;for(e=function(r){return Kr[0]=r,Qr[Jr]}(r),f=on(i-((t=(i>>20)-1046)<<20|0),e),o=0;o<2;o++)ve[o]=0|f,f=(f-ve[o])*Kn;for(ve[2]=f,a=3;ve[a-1]===Jn;)a-=1;return u=Ln(ve,ge,t,a),r<0?(n[0]=-ge[0],n[1]=-ge[1],-u):(n[0]=ge[0],n[1]=ge[1],u)}var de=[0,0],he=2147483647,we=1072243195,be=1044381696,me=2146435072;function Ne(r){var n;if(n=mr(r),(n&=he)<=we)return n<be?1:Wr(r,0);if(n>=me)return NaN;switch(3&ye(r,de)){case 0:return Wr(de[0],de[1]);case 1:return-Xr(de[0],de[1]);case 2:return-Wr(de[0],de[1]);default:return Xr(de[0],de[1])}}var Ae=1072243195,_e=1045430272,Ee=[0,0];function Ue(r){var n;if(n=mr(r),(n&=zr)<=Ae)return n<_e?r:Xr(r,0);if(n>=Br)return NaN;switch(3&ye(r,Ee)){case 0:return Xr(Ee[0],Ee[1]);case 1:return Wr(Ee[0],Ee[1]);case 2:return-Xr(Ee[0],Ee[1]);default:return-Wr(Ee[0],Ee[1])}}var Se=3.141592653589793;var ke=.07721566490153287,Ie=.3224670334241136,xe=1,Fe=-.07721566490153287,je=.48383612272381005,Te=-.1475877229945939,Oe=.06462494023913339,Ve=-.07721566490153287,$e=1,Ge=.4189385332046727,He=1.4616321449683622,We=4503599627370496,Ce=0x400000000000000,Le=8470329472543003e-37,Pe=1.4616321449683622,Me=-.12148629053584961,Re=-3638676997039505e-33;function Ze(r){var n,e,t,i,a,o,u,f,c,s,l,p,v;if(W(r)||P(r))return r;if(0===r)return C;if(r<0?(n=!0,r=-r):n=!1,r<Le)return-Vr(r);if(n){if(r>=We)return C;if(c=function(r){var n,e;return W(r)||P(r)?NaN:0===(n=M(e=r%2))||1===n?Nn(0,e):n<.25?Ue(Se*e):n<.75?Nn(Ne(Se*(n=.5-n)),e):n<1.25?(e=Nn(1,e)-e,Ue(Se*e)):n<1.75?-Nn(Ne(Se*(n-=1.5)),e):(e-=Nn(2,e),Ue(Se*e))}(r),0===c)return C;e=Vr(Se/M(c*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(v=-Vr(r),r>=He-1+.27?(l=1-r,t=0):r>=He-1-.27?(l=r-(Pe-1),t=1):(l=r,t=2)):(v=0,r>=He+.27?(l=2-r,t=0):r>=He-.27?(l=r-Pe,t=1):(l=r-1,t=2)),t){case 0:o=ke+(p=l*l)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(p),a=p*(Ie+p*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(p)),v+=(u=l*o+a)-.5*l;break;case 1:o=je+(s=(p=l*l)*l)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(s),a=Te+s*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(s),i=Oe+s*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(s),v+=Me+(u=p*o-(Re-s*(a+l*i)));break;case 2:o=l*(Ve+l*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(l)),a=$e+l*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(l),v+=-.5*l+o/a}else if(r<8)switch(u=(l=r-(t=Hr(r)))*(Fe+l*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(l)),f=xe+l*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(l),v=.5*l+u/f,p=1,t){case 7:p*=l+6;case 6:p*=l+5;case 5:p*=l+4;case 4:p*=l+3;case 3:v+=Vr(p*=l+2)}else r<Ce?(c=Vr(r),s=Ge+(p=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(l=p*p),v=(r-.5)*(c-1)+s):v=r*(Vr(r)-1);return n&&(v=e-v),v}var Xe=.6931471803691238,Ye=1.9082149292705877e-10,qe=1.4426950408889634,ze=709.782712893384,Be=-745.1332191019411,De=1/(1<<28),Je=-De;function Ke(r){var n;return W(r)||r===C?r:r===L?0:r>ze?C:r<Be?0:r>Je&&r<De?1+r:function(r,n,e){var t,i,a,o;return xn(1-(n-(t=r-n)*(a=t-(i=t*t)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),e)}(r-(n=Hr(r<0?qe*r-.5:qe*r+.5))*Xe,n*Ye,n)}var Qe=17976931348623157e292;function rt(r){return $r(r)===r}function nt(r){return 0===r&&1/r===L}var et=2.5066282746310007;function tt(r){return rt(r/2)}function it(r){return tt(r>0?r-1:r+1)}var at=Math.sqrt,ot=!0===dr?0:1,ut=new ir(1),ft=new Q(ut.buffer);function ct(r,n){return ut[0]=r,ft[ot]=n>>>0,ut[0]}function st(r){return 0|r}var lt=1072693247,pt=1e300,vt=1e-300;var gt=1048575,yt=1048576,dt=1072693248,ht=536870912,wt=524288,bt=20,mt=9007199254740992,Nt=.9617966939259756,At=.9617967009544373,_t=-7.028461650952758e-9,Et=[1,1.5],Ut=[0,.5849624872207642],St=[0,1.350039202129749e-8];var kt=1.4426950408889634,It=1.4426950216293335,xt=1.9259629911266175e-8;var Ft=.6931471805599453;var jt=1048576,Tt=1071644672,Ot=20,Vt=.6931471824645996,$t=-1.904654299957768e-9;var Gt=1072693247,Ht=1105199104,Wt=1139802112,Ct=1083179008,Lt=1072693248,Pt=1083231232,Mt=3230714880,Rt=31,Zt=1e300,Xt=1e-300,Yt=8008566259537294e-32,qt=[0,0],zt=[0,0];function Bt(r,n){var e,t,i,a,o,u,f,c,s,l,p,v,g,y;if(W(r)||W(n))return NaN;if(bn.assign(n,qt,1,0),o=qt[0],0===qt[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return at(r);if(-.5===n)return 1/at(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(P(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:M(r)<1==(n===C)?0:C}(r,n)}if(bn.assign(r,qt,1,0),a=qt[0],0===qt[1]){if(0===a)return function(r,n){return n===L?C:n===C?0:n>0?it(n)?r:0:it(n)?Nn(C,r):C}(r,n);if(1===r)return 1;if(-1===r&&it(n))return-1;if(P(r))return r===L?Bt(-0,-n):n<0?0:C}if(r<0&&!1===rt(n))return(r-r)/(r-r);if(i=M(r),e=a&zr|0,t=o&zr|0,f=o>>>Rt|0,u=(u=a>>>Rt|0)&&it(n)?-1:1,t>Ht){if(t>Wt)return function(r,n){return(mr(r)&zr)<=lt?n<0?pt*pt:vt*vt:n>0?pt*pt:vt*vt}(r,n);if(e<Gt)return 1===f?u*Zt*Zt:u*Xt*Xt;if(e>Lt)return 0===f?u*Zt*Zt:u*Xt*Xt;p=function(r,n){var e,t,i,a,o,u,f;return a=(i=n-1)*i*(0===(f=i)?.5:.5+f*(.25*f-.3333333333333333)),e=(u=i*xt-a*kt)-((t=ct(t=(o=It*i)+u,0))-o),r[0]=t,r[1]=e,r}(zt,i)}else p=function(r,n,e){var t,i,a,o,u,f,c,s,l,p,v,g,y,d,h,w,b,m,N,A,_;return m=0,e<yt&&(m-=53,e=mr(n*=mt)),m+=(e>>bt)-Ur|0,e=(N=e&gt|0)|dt|0,N<=235662?A=0:N<767610?A=1:(A=0,m+=1,e-=yt),o=ct(i=(w=(n=Er(n,e))-(c=Et[A]))*(b=1/(n+c)),0),t=(e>>1|ht)+wt,f=Er(0,t+=A<<18),h=(a=i*i)*a*(0===(_=a)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=ct(f=3+(a=o*o)+(h+=(u=b*(w-o*f-o*(n-(f-c))))*(o+i)),0),l=ct(l=(w=o*f)+(b=u*f+(h-(f-3-a))*i),0),p=At*l,y=(v=_t*l+(b-(l-w))*Nt+St[A])-((g=ct(g=p+v+(s=Ut[A])+(d=m),0))-d-s-p),r[0]=g,r[1]=y,r}(zt,i,e);if(v=(l=(n-(c=ct(n,0)))*p[0]+n*p[1])+(s=c*p[0]),bn.assign(v,qt,1,0),g=st(qt[0]),y=st(qt[1]),g>=Ct){if(0!=(g-Ct|y))return u*Zt*Zt;if(l+Yt>v-s)return u*Zt*Zt}else if((g&zr)>=Pt){if(0!=(g-Mt|y))return u*Xt*Xt;if(l<=v-s)return u*Xt*Xt}return v=function(r,n,e){var t,i,a,o,u,f,c,s,l,p;return l=((s=r&zr|0)>>Ot)-Ur|0,c=0,s>Tt&&(i=Er(0,((c=r+(jt>>l+1)>>>0)&~(Dr>>(l=((c&zr)>>Ot)-Ur|0)))>>>0),c=(c&Dr|jt)>>Ot-l>>>0,r<0&&(c=-c),n-=i),r=st(r=mr(f=1-((f=(a=(i=ct(i=e+n,0))*Vt)+(o=(e-(i-n))*Ft+i*$t))*(t=f-(i=f*f)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(t-2)-((u=o-(f-a))+f*u)-f))),(r+=c<<Ot>>>0)>>Ot<=0?xn(f,c):Er(f,r)}(g,s,l),u*v}var Dt=143.01608;function Jt(r){var n,e,t;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),e=Ke(r),e=r>Dt?(t=Bt(r,.5*r-.25))*(t/e):Bt(r,r-.5)/e,et*e*n}var Kt=.5772156649015329;function Qt(r,n){return n/((1+Kt*r)*r)}var ri=.6931471803691238,ni=1.9082149292705877e-10,ei=.41421356237309503,ti=-.2928932188134525,ii=1.862645149230957e-9,ai=5551115123125783e-32,oi=9007199254740992,ui=.6666666666666666;function fi(r,n){return W(r)||W(n)?NaN:r===C||n===C?C:r===n&&0===r?function(r){return 0===r&&1/r===C}(r)?r:n:r>n?r:n}function ci(r,n){return W(r)||W(n)?NaN:r===L||n===L?L:r===n&&0===r?nt(r)?r:n:r<n?r:n}var si=709.782712893384,li=-708.3964185322641,pi=10.900511,vi=2.718281828459045;function gi(r,n){var e,t,i,a,o,u,f,c,s,l;return f=(n-r-pi+.5)/(i=r+pi-.5),r<1?n<=li?Ke(r*Vr(n)-n-Ze(r)):Bt(n,r)*Ke(-n)/function(r){var n,e,t,i;if(rt(r)&&r<0||r===L||W(r))return NaN;if(0===r)return nt(r)?L:C;if(r>171.61447887182297)return C;if(r<-170.5674972726612)return 0;if((e=M(r))>33)return r>=0?Jt(r):(n=0==(1&(t=$r(e)))?-1:1,(i=e-t)>.5&&(i=e-(t+=1)),i=e*Ue(Se*i),n*Se/(M(i)*Jt(e)));for(i=1;r>=3;)i*=r-=1;for(;r<0;){if(r>-1e-9)return Qt(r,i);i/=r,r+=1}for(;r<2;){if(r<1e-9)return Qt(r,i);i/=r,r+=1}return 2===r?i:i*function(r){var n,e;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),e=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),e=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/e)}(r-=2)}(r):(M(f*f*r)<=100&&r>150?(e=r*(function(r){var n,e,t,i,a,o,u,f,c,s;if(r<-1||W(r))return NaN;if(-1===r)return L;if(r===C)return r;if(0===r)return r;if(s=1,(t=r<0?-r:r)<ei){if(t<ii)return t<ai?r:r-r*r*.5;r>ti&&(s=0,i=r,e=1)}return 0!==s&&(t<oi?(a=(s=((e=mr(c=1+r))>>20)-Ur)>0?1-(c-r):r-(c-1),a/=c):(s=((e=mr(c=r))>>20)-Ur,a=0),(e&=1048575)<434334?c=Er(c,1072693248|e):(s+=1,c=Er(c,1071644672|e),e=1048576-e>>2),i=c-1),n=.5*i*i,0===e?0===i?s*ri+(a+=s*ni):s*ri-((f=n*(1-ui*i))-(s*ni+a)-i):(f=(u=(o=i/(2+i))*o)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===s?i-(n-o*(n+f)):s*ri-(n-(o*(n+f)+(s*ni+a))-i))}(f)-f)+n*(.5-pi)/i,e=Ke(e)):ci(a=r*Vr(n/i),o=r-n)<=li||fi(a,o)>=si?(t=o/r,ci(a,o)/2>li&&fi(a,o)/2<si?e=(u=Bt(n/i,r/2)*Ke(o/2))*u:ci(a,o)/4>li&&fi(a,o)/4<si&&n>r?(e=(u=Bt(n/i,r/4)*Ke(o/4))*u,e*=e):e=t>li&&t<si?Bt(n*Ke(t)/i,r):Ke(a+o)):e=Bt(n/i,r)*Ke(o),e*=at(i/vi)/(0===(c=r)?1/0:((c<0?-c:c)<=1?(s=709811.662581658+c*(679979.8474157227+c*(293136.7857211597+c*(74887.54032914672+c*(12555.290582413863+c*(1443.4299244417066+c*(115.24194596137347+c*(6.309239205732627+c*(.22668404630224365+c*(.004826466289237662+4624429436045379e-20*c))))))))),l=0+c*(362880+c*(1026576+c*(1172700+c*(723680+c*(269325+c*(63273+c*(9450+c*(870+c*(45+1*c)))))))))):(s=4624429436045379e-20+(c=1/c)*(.004826466289237662+c*(.22668404630224365+c*(6.309239205732627+c*(115.24194596137347+c*(1443.4299244417066+c*(12555.290582413863+c*(74887.54032914672+c*(293136.7857211597+c*(679979.8474157227+709811.662581658*c))))))))),l=1+c*(45+c*(870+c*(9450+c*(63273+c*(269325+c*(723680+c*(1172700+c*(1026576+c*(362880+0*c)))))))))),s/l)))}function yi(r,n){var e;return r<=0||n<0?NaN:0===n?r>1?0:1===r?1:C:(e=gi(r,n),n<1&&Qe*n<e?C:(0===e?e=Ke(e=r*Vr(n)-n-Ze(r)-Vr(n)):e/=n,e))}function di(r,n,e){return W(r)||W(n)||W(e)||n<0||e<=0?NaN:r<0||r===C?0:0===n?0===r?C:0:yi(n,r*e)*e}function hi(r){return function(){return r}}function wi(r){return W(r)?hi(NaN):function(n){if(W(n))return NaN;return n===r?C:0}}function bi(r,n){return W(r)||W(n)||r<0||n<=0?hi(NaN):0===r?wi(0):function(e){if(W(e))return NaN;if(e<0||e===C)return 0;return yi(r,e*n)*n}}H((function(r,n){return W(r)||W(n)?NaN:r===n?C:0}),"factory",wi),H(di,"factory",bi);export{di as default,bi as factory};
//# sourceMappingURL=mod.js.map
