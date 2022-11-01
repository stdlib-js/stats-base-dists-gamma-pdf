// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=Object.defineProperty,t=Object.prototype,e=t.toString,u=t.__defineGetter__,f=t.__defineSetter__,i=t.__lookupGetter__,o=t.__lookupSetter__;var a=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?n:function(r,n,a){var c,v,l,y;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof a||null===a||"[object Array]"===e.call(a))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+a+"`.");if((v="value"in a)&&(i.call(r,n)||o.call(r,n)?(c=r.__proto__,r.__proto__=t,delete r[n],r[n]=a.value,r.__proto__=c):r[n]=a.value),l="get"in a,y="set"in a,v&&(l||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&u&&u.call(r,n,a.get),y&&f&&f.call(r,n,a.set),r};function c(r,n,t){a(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function v(r){return r!=r}var l=Number.POSITIVE_INFINITY,y=Number.NEGATIVE_INFINITY;function p(r){return r===l||r===y}function s(r){return Math.abs(r)}var N="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var b=Object.prototype.toString;var w=Object.prototype.hasOwnProperty;var A="function"==typeof Symbol?Symbol.toStringTag:"";var _=N&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,u,f;if(null==r)return b.call(r);t=r[A],f=A,n=null!=(u=r)&&w.call(u,f);try{r[A]=void 0}catch(n){return b.call(r)}return e=b.call(r),n?r[A]=t:delete r[A],e}:function(r){return b.call(r)},h="function"==typeof Uint32Array;var d="function"==typeof Uint32Array?Uint32Array:null;var m,U="function"==typeof Uint32Array?Uint32Array:void 0;m=function(){var r,n,t;if("function"!=typeof d)return!1;try{n=new d(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(h&&t instanceof Uint32Array||"[object Uint32Array]"===_(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?U:function(){throw new Error("not implemented")};var g=m,j="function"==typeof Float64Array;var I="function"==typeof Float64Array?Float64Array:null;var O,S="function"==typeof Float64Array?Float64Array:void 0;O=function(){var r,n,t;if("function"!=typeof I)return!1;try{n=new I([1,3.14,-3.14,NaN]),t=n,r=(j&&t instanceof Float64Array||"[object Float64Array]"===_(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?S:function(){throw new Error("not implemented")};var E=O,F="function"==typeof Uint8Array;var H="function"==typeof Uint8Array?Uint8Array:null;var T,G="function"==typeof Uint8Array?Uint8Array:void 0;T=function(){var r,n,t;if("function"!=typeof H)return!1;try{n=new H(n=[1,3.14,-3.14,256,257]),t=n,r=(F&&t instanceof Uint8Array||"[object Uint8Array]"===_(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?G:function(){throw new Error("not implemented")};var P=T,k="function"==typeof Uint16Array;var M="function"==typeof Uint16Array?Uint16Array:null;var x,L="function"==typeof Uint16Array?Uint16Array:void 0;x=function(){var r,n,t;if("function"!=typeof M)return!1;try{n=new M(n=[1,3.14,-3.14,65536,65537]),t=n,r=(k&&t instanceof Uint16Array||"[object Uint16Array]"===_(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?L:function(){throw new Error("not implemented")};var V,W={uint16:x,uint8:P};(V=new W.uint16(1))[0]=4660;var Y=52===new W.uint8(V.buffer)[0],q=!0===Y?1:0,C=new E(1),z=new g(C.buffer);function B(r){return C[0]=r,z[q]}var D=!0===Y?1:0,J=new E(1),K=new g(J.buffer);function Q(r,n){return J[0]=r,K[D]=n>>>0,J[0]}var R=.6931471803691238,X=1.9082149292705877e-10;function Z(r){var n,t,e,u,f,i,o,a,c,l,p,s;return 0===r?y:v(r)||r<0?NaN:(f=0,(t=B(r))<1048576&&(f-=54,t=B(r*=0x40000000000000)),t>=2146435072?r+r:(f+=(t>>20)-1023|0,f+=(a=(t&=1048575)+614244&1048576|0)>>20|0,o=(r=Q(r,t|1072693248^a))-1,(1048575&2+t)<3?0===o?0===f?0:f*R+f*X:(i=o*o*(.5-.3333333333333333*o),0===f?o-i:f*R-(i-f*X-o)):(a=t-398458|0,c=440401-t|0,u=(p=(s=(l=o/(2+o))*l)*s)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=s*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),i=e+u,(a|=c)>0?(n=.5*o*o,0===f?o-(n-l*(n+i)):f*R-(n-(l*(n+i)+f*X)-o)):0===f?o-l*(o-i):f*R-(l*(o-i)-f*X-o))))}var $=Math.floor,rr=Math.ceil;function nr(r){return r<0?rr(r):$(r)}function tr(r,n){var t,e,u,f;return u=(f=r*r)*f,e=f*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(f),e+=u*u*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(f),(u=1-(t=.5*f))+(1-u-t+(f*e-r*n))}var er=-.16666666666666632;function ur(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(er+u*t):r-(u*(.5*n-e*t)-n-e*er)}var fr,ir,or=!0===Y?0:1,ar=new E(1),cr=new g(ar.buffer);!0===Y?(fr=1,ir=0):(fr=0,ir=1);var vr={HIGH:fr,LOW:ir},lr=new E(1),yr=new g(lr.buffer),pr=vr.HIGH,sr=vr.LOW;function Nr(r,n){return yr[pr]=r,yr[sr]=n,lr[0]}var br,wr;!0===Y?(br=1,wr=0):(br=0,wr=1);var Ar={HIGH:br,LOW:wr},_r=new E(1),hr=new g(_r.buffer),dr=Ar.HIGH,mr=Ar.LOW;function Ur(r,n){return _r[0]=n,r[0]=hr[dr],r[1]=hr[mr],r}function gr(r,n){return 1===arguments.length?Ur([0,0],r):Ur(r,n)}var jr=[0,0];function Ir(r,n){var t,e;return gr(jr,r),t=jr[0],t&=2147483647,e=B(n),Nr(t|=e&=2147483648,jr[1])}function Or(r,n,t,e){return v(r)||p(r)?(n[e]=r,n[e+t]=0,n):0!==r&&s(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}c((function(r){return Or(r,[0,0],1,0)}),"assign",Or);var Sr=[0,0],Er=[0,0];function Fr(r,n){var t,e;return 0===n||0===r||v(r)||p(r)?r:(Or(r,Sr,1,0),n+=Sr[1],n+=function(r){var n=B(r);return(n=(2146435072&n)>>>20)-1023|0}(r=Sr[0]),n<-1074?Ir(0,r):n>1023?r<0?y:l:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,gr(Er,r),t=Er[0],t&=2148532223,e*Nr(t|=n+1023<<20,Er[1])))}function Hr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var Tr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Gr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Pr=5.960464477539063e-8,kr=Hr(20),Mr=Hr(20),xr=Hr(20),Lr=Hr(20);function Vr(r,n,t,e,u,f,i,o,a){var c,v,l,y,p,s,N,b,w;for(y=f,w=e[t],b=t,p=0;b>0;p++)v=Pr*w|0,Lr[p]=w-16777216*v|0,w=e[b-1]+v,b-=1;if(w=Fr(w,u),w-=8*$(.125*w),w-=N=0|w,l=0,u>0?(N+=p=Lr[t-1]>>24-u,Lr[t-1]-=p<<24-u,l=Lr[t-1]>>23-u):0===u?l=Lr[t-1]>>23:w>=.5&&(l=2),l>0){for(N+=1,c=0,p=0;p<t;p++)b=Lr[p],0===c?0!==b&&(c=1,Lr[p]=16777216-b):Lr[p]=16777215-b;if(u>0)switch(u){case 1:Lr[t-1]&=8388607;break;case 2:Lr[t-1]&=4194303}2===l&&(w=1-w,0!==c&&(w-=Fr(1,u)))}if(0===w){for(b=0,p=t-1;p>=f;p--)b|=Lr[p];if(0===b){for(s=1;0===Lr[f-s];s++);for(p=t+1;p<=t+s;p++){for(a[o+p]=Tr[i+p],v=0,b=0;b<=o;b++)v+=r[b]*a[o+(p-b)];e[p]=v}return Vr(r,n,t+=s,e,u,f,i,o,a)}}if(0===w)for(t-=1,u-=24;0===Lr[t];)t-=1,u-=24;else(w=Fr(w,-u))>=16777216?(v=Pr*w|0,Lr[t]=w-16777216*v|0,u+=24,Lr[t+=1]=v):Lr[t]=0|w;for(v=Fr(1,u),p=t;p>=0;p--)e[p]=v*Lr[p],v*=Pr;for(p=t;p>=0;p--){for(v=0,s=0;s<=y&&s<=t-p;s++)v+=Gr[s]*e[p+s];xr[t-p]=v}for(v=0,p=t;p>=0;p--)v+=xr[p];for(n[0]=0===l?v:-v,v=xr[0]-v,p=1;p<=t;p++)v+=xr[p];return n[1]=0===l?v:-v,7&N}function Wr(r,n,t,e){var u,f,i,o,a,c,v;for(4,(f=(t-3)/24|0)<0&&(f=0),o=t-24*(f+1),c=f-(i=e-1),v=i+4,a=0;a<=v;a++)kr[a]=c<0?0:Tr[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=i;c++)u+=r[c]*kr[i+(a-c)];Mr[a]=u}return 4,Vr(r,n,4,Mr,o,4,f,i,kr)}var Yr=Math.round;function qr(r,n,t){var e,u,f,i,o;return f=r-1.5707963267341256*(e=Yr(.6366197723675814*r)),i=6077100506506192e-26*e,o=n>>20|0,t[0]=f-i,o-(B(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((u=f)-(f=u-(i=6077100506303966e-26*e))-i),t[0]=f-i,o-(B(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((u=f)-(f=u-(i=20222662487111665e-37*e))-i),t[0]=f-i)),t[1]=f-t[0]-i,e}var Cr=1.5707963267341256,zr=6077100506506192e-26,Br=2*zr,Dr=4*zr,Jr=[0,0,0],Kr=[0,0];function Qr(r,n){var t,e,u,f,i,o,a;if((u=2147483647&B(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?qr(r,u,n):u<=1073928572?r>0?(a=r-Cr,n[0]=a-zr,n[1]=a-n[0]-zr,1):(a=r+Cr,n[0]=a+zr,n[1]=a-n[0]+zr,-1):r>0?(a=r-2*Cr,n[0]=a-Br,n[1]=a-n[0]-Br,2):(a=r+2*Cr,n[0]=a+Br,n[1]=a-n[0]+Br,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?qr(r,u,n):r>0?(a=r-3*Cr,n[0]=a-1.8231301519518578e-10,n[1]=a-n[0]-1.8231301519518578e-10,3):(a=r+3*Cr,n[0]=a+1.8231301519518578e-10,n[1]=a-n[0]+1.8231301519518578e-10,-3):1075388923===u?qr(r,u,n):r>0?(a=r-4*Cr,n[0]=a-Dr,n[1]=a-n[0]-Dr,4):(a=r+4*Cr,n[0]=a+Dr,n[1]=a-n[0]+Dr,-4);if(u<1094263291)return qr(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return ar[0]=r,cr[or]}(r),a=Nr(u-((e=(u>>20)-1046)<<20|0),t),i=0;i<2;i++)Jr[i]=0|a,a=16777216*(a-Jr[i]);for(Jr[2]=a,f=3;0===Jr[f-1];)f-=1;return o=Wr(Jr,Kr,e,f),r<0?(n[0]=-Kr[0],n[1]=-Kr[1],-o):(n[0]=Kr[0],n[1]=Kr[1],o)}var Rr=[0,0];function Xr(r){var n;if(n=B(r),(n&=2147483647)<=1072243195)return n<1044381696?1:tr(r,0);if(n>=2146435072)return NaN;switch(3&Qr(r,Rr)){case 0:return tr(Rr[0],Rr[1]);case 1:return-ur(Rr[0],Rr[1]);case 2:return-tr(Rr[0],Rr[1]);default:return ur(Rr[0],Rr[1])}}var Zr=[0,0];function $r(r){var n;if(n=B(r),(n&=2147483647)<=1072243195)return n<1045430272?r:ur(r,0);if(n>=2146435072)return NaN;switch(3&Qr(r,Zr)){case 0:return ur(Zr[0],Zr[1]);case 1:return tr(Zr[0],Zr[1]);case 2:return-ur(Zr[0],Zr[1]);default:return-tr(Zr[0],Zr[1])}}var rn=3.141592653589793;var nn=1.4616321449683622,tn=1.4616321449683622;function en(r){var n,t,e,u,f,i,o,a,c,y,N,b,w;if(v(r)||p(r))return r;if(0===r)return l;if(r<0?(n=!0,r=-r):n=!1,r<8470329472543003e-37)return-Z(r);if(n){if(r>=4503599627370496)return l;if(c=function(r){var n,t;return v(r)||p(r)?NaN:0===(n=s(t=r%2))||1===n?Ir(0,t):n<.25?$r(rn*t):n<.75?Ir(Xr(rn*(n=.5-n)),t):n<1.25?(t=Ir(1,t)-t,$r(rn*t)):n<1.75?-Ir(Xr(rn*(n-=1.5)),t):(t-=Ir(2,t),$r(rn*t))}(r),0===c)return l;t=Z(rn/s(c*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(w=-Z(r),r>=nn-1+.27?(N=1-r,e=0):r>=nn-1-.27?(N=r-(tn-1),e=1):(N=r,e=2)):(w=0,r>=nn+.27?(N=2-r,e=0):r>=nn-.27?(N=r-tn,e=1):(N=r-1,e=2)),e){case 0:i=.07721566490153287+(b=N*N)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(b),f=b*(.3224670334241136+b*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(b)),w+=(o=N*i+f)-.5*N;break;case 1:i=.48383612272381005+(y=(b=N*N)*N)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(y),f=y*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(y)-.1475877229945939,u=.06462494023913339+y*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(y),w+=-.12148629053584961+(o=b*i-(-3638676997039505e-33-y*(f+N*u)));break;case 2:i=N*(N*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(N)-.07721566490153287),f=1+N*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(N),w+=-.5*N+i/f}else if(r<8)switch(o=(N=r-(e=nr(r)))*(N*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(N)-.07721566490153287),a=1+N*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(N),w=.5*N+o/a,b=1,e){case 7:b*=N+6;case 6:b*=N+5;case 5:b*=N+4;case 4:b*=N+3;case 3:w+=Z(b*=N+2)}else r<0x400000000000000?(c=Z(r),y=.4189385332046727+(b=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(N=b*b),w=(r-.5)*(c-1)+y):w=r*(Z(r)-1);return n&&(w=t-w),w}function un(r){var n;return v(r)||r===l?r:r===y?0:r>709.782712893384?l:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,n,t){var e,u,f,i;return Fr(1-(n-(e=r-n)*(f=e-(u=e*e)*(0===(i=u)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-f)-r),t)}(r-.6931471803691238*(n=nr(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*n,n)}function fn(r){return $(r)===r}function on(r){return 0===r&&1/r===y}function an(r){return fn(r/2)}function cn(r){return an(r>0?r-1:r+1)}var vn=Math.sqrt,ln=!0===Y?0:1,yn=new E(1),pn=new g(yn.buffer);function sn(r,n){return yn[0]=r,pn[ln]=n>>>0,yn[0]}function Nn(r){return 0|r}var bn=[1,1.5],wn=[0,.5849624872207642],An=[0,1.350039202129749e-8];var _n=1e300,hn=[0,0],dn=[0,0];function mn(r,n){var t,e,u,f,i,o,a,c,N,b,w,A,_,h;if(v(r)||v(n))return NaN;if(gr(hn,n),i=hn[0],0===hn[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return vn(r);if(-.5===n)return 1/vn(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(p(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:s(r)<1==(n===l)?0:l}(r,n)}if(gr(hn,r),f=hn[0],0===hn[1]){if(0===f)return function(r,n){return n===y?l:n===l?0:n>0?cn(n)?r:0:cn(n)?Ir(l,r):l}(r,n);if(1===r)return 1;if(-1===r&&cn(n))return-1;if(p(r))return r===y?mn(-0,-n):n<0?0:l}if(r<0&&!1===fn(n))return(r-r)/(r-r);if(u=s(r),t=2147483647&f|0,e=2147483647&i|0,a=i>>>31|0,o=(o=f>>>31|0)&&cn(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&B(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?o*_n*_n:1e-300*o*1e-300;if(t>1072693248)return 0===a?o*_n*_n:1e-300*o*1e-300;w=function(r,n){var t,e,u,f,i,o;return t=(i=1.9259629911266175e-8*(u=n-1)-u*u*(0===(o=u)?.5:.5+o*(.25*o-.3333333333333333))*1.4426950408889634)-((e=sn(e=(f=1.4426950216293335*u)+i,0))-f),r[0]=e,r[1]=t,r}(dn,u)}else w=function(r,n,t){var e,u,f,i,o,a,c,v,l,y,p,s,N,b,w,A,_,h,d,m,U;return h=0,t<1048576&&(h-=53,t=B(n*=9007199254740992)),h+=(t>>20)-1023|0,t=1072693248|(d=1048575&t|0),d<=235662?m=0:d<767610?m=1:(m=0,h+=1,t-=1048576),i=sn(u=(A=(n=Q(n,t))-(c=bn[m]))*(_=1/(n+c)),0),e=524288+(t>>1|536870912),a=Q(0,e+=m<<18),w=(f=u*u)*f*(0===(U=f)?.5999999999999946:.5999999999999946+U*(.4285714285785502+U*(.33333332981837743+U*(.272728123808534+U*(.23066074577556175+.20697501780033842*U))))),a=sn(a=3+(f=i*i)+(w+=(o=_*(A-i*a-i*(n-(a-c))))*(i+u)),0),N=(p=-7.028461650952758e-9*(l=sn(l=(A=i*a)+(_=o*a+(w-(a-3-f))*u),0))+.9617966939259756*(_-(l-A))+An[m])-((s=sn(s=(y=.9617967009544373*l)+p+(v=wn[m])+(b=h),0))-b-v-y),r[0]=s,r[1]=N,r}(dn,u,t);if(b=(n-(c=sn(n,0)))*w[0]+n*w[1],N=c*w[0],gr(hn,A=b+N),_=Nn(hn[0]),h=Nn(hn[1]),_>=1083179008){if(0!=(_-1083179008|h))return o*_n*_n;if(b+8008566259537294e-32>A-N)return o*_n*_n}else if((2147483647&_)>=1083231232){if(0!=(_-3230714880|h))return 1e-300*o*1e-300;if(b<=A-N)return 1e-300*o*1e-300}return A=function(r,n,t){var e,u,f,i,o,a,c,v,l,y,p;return y=((l=2147483647&r|0)>>20)-1023|0,v=0,l>1071644672&&(e=((v=r+(1048576>>y+1)>>>0)&~(1048575>>(y=((2147483647&v)>>20)-1023|0)))>>>0,v=(1048575&v|1048576)>>20-y>>>0,r<0&&(v=-v),n-=f=Q(0,e)),r=Nn(r=B(c=1-((c=(i=.6931471824645996*(f=sn(f=t+n,0)))+(o=.6931471805599453*(t-(f-n))+-1.904654299957768e-9*f))*(u=c-(f=c*c)*(0===(p=f)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(u-2)-((a=o-(c-i))+c*a)-c))),(r+=v<<20>>>0)>>20<=0?Fr(c,v):Q(c,r)}(_,N,b),o*A}function Un(r){var n,t,e;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),t=un(r),2.5066282746310007*(t=r>143.01608?(e=mn(r,.5*r-.25))*(e/t):mn(r,r-.5)/t)*n}function gn(r,n){return n/((1+.5772156649015329*r)*r)}var jn=.6931471803691238,In=1.9082149292705877e-10;function On(r){return 0===r&&1/r===l}function Sn(r,n){var t,e,u,f;if(2===(t=arguments.length))return v(r)||v(n)?NaN:r===l||n===l?l:r===n&&0===r?On(r)?r:n:r>n?r:n;for(e=y,f=0;f<t;f++){if(v(u=arguments[f])||u===l)return u;(u>e||u===e&&0===u&&On(u))&&(e=u)}return e}function En(r,n){var t,e,u,f;if(2===(t=arguments.length))return v(r)||v(n)?NaN:r===y||n===y?y:r===n&&0===r?on(r)?r:n:r<n?r:n;for(e=l,f=0;f<t;f++){if(v(u=arguments[f])||u===y)return u;(u<e||u===e&&0===u&&on(u))&&(e=u)}return e}function Fn(r,n){var t,e,u,f,i,o,a,c,p,N;return a=(n-r-10.900511+.5)/(u=r+10.900511-.5),r<1?n<=-708.3964185322641?un(r*Z(n)-n-en(r)):mn(n,r)*un(-n)/function(r){var n,t,e,u;if(fn(r)&&r<0||r===y||v(r))return NaN;if(0===r)return on(r)?y:l;if(r>171.61447887182297)return l;if(r<-170.5674972726612)return 0;if((t=s(r))>33)return r>=0?Un(r):(n=0==(1&(e=$(t)))?-1:1,(u=t-e)>.5&&(u=t-(e+=1)),u=t*$r(rn*u),n*rn/(s(u)*Un(t)));for(u=1;r>=3;)u*=r-=1;for(;r<0;){if(r>-1e-9)return gn(r,u);u/=r,r+=1}for(;r<2;){if(r<1e-9)return gn(r,u);u/=r,r+=1}return 2===r?u:u*function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),t=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),t=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/t)}(r-=2)}(r):(s(a*a*r)<=100&&r>150?(t=r*(function(r){var n,t,e,u,f,i,o,a,c,p;if(r<-1||v(r))return NaN;if(-1===r)return y;if(r===l)return r;if(0===r)return r;if(p=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(p=0,u=r,t=1)}return 0!==p&&(e<9007199254740992?(f=(p=((t=B(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),f/=c):(p=((t=B(c=r))>>20)-1023,f=0),(t&=1048575)<434334?c=Q(c,1072693248|t):(p+=1,c=Q(c,1071644672|t),t=1048576-t>>2),u=c-1),n=.5*u*u,0===t?0===u?p*jn+(f+=p*In):p*jn-((a=n*(1-.6666666666666666*u))-(p*In+f)-u):(a=(o=(i=u/(2+u))*i)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(o),0===p?u-(n-i*(n+a)):p*jn-(n-(i*(n+a)+(p*In+f))-u))}(a)-a)+-10.400511*n/u,t=un(t)):En(f=r*Z(n/u),i=r-n)<=-708.3964185322641||Sn(f,i)>=709.782712893384?(e=i/r,En(f,i)/2>-708.3964185322641&&Sn(f,i)/2<709.782712893384?t=(o=mn(n/u,r/2)*un(i/2))*o:En(f,i)/4>-708.3964185322641&&Sn(f,i)/4<709.782712893384&&n>r?(t=(o=mn(n/u,r/4)*un(i/4))*o,t*=t):t=e>-708.3964185322641&&e<709.782712893384?mn(n*un(e)/u,r):un(f+i)):t=mn(n/u,r)*un(i),t*=vn(u/2.718281828459045)/(0===(c=r)?1/0:((c<0?-c:c)<=1?(p=709811.662581658+c*(679979.8474157227+c*(293136.7857211597+c*(74887.54032914672+c*(12555.290582413863+c*(1443.4299244417066+c*(115.24194596137347+c*(6.309239205732627+c*(.22668404630224365+c*(.004826466289237662+4624429436045379e-20*c))))))))),N=0+c*(362880+c*(1026576+c*(1172700+c*(723680+c*(269325+c*(63273+c*(9450+c*(870+c*(45+1*c)))))))))):(p=4624429436045379e-20+(c=1/c)*(.004826466289237662+c*(.22668404630224365+c*(6.309239205732627+c*(115.24194596137347+c*(1443.4299244417066+c*(12555.290582413863+c*(74887.54032914672+c*(293136.7857211597+c*(679979.8474157227+709811.662581658*c))))))))),N=1+c*(45+c*(870+c*(9450+c*(63273+c*(269325+c*(723680+c*(1172700+c*(1026576+c*(362880+0*c)))))))))),p/N)))}function Hn(r,n){var t;return r<=0||n<0?NaN:0===n?r>1?0:1===r?1:l:(t=Fn(r,n),n<1&&17976931348623157e292*n<t?l:(0===t?t=un(t=r*Z(n)-n-en(r)-Z(n)):t/=n,t))}function Tn(r,n,t){return v(r)||v(n)||v(t)||n<0||t<=0?NaN:r<0||r===l?0:0===n?0===r?l:0:Hn(n,r*t)*t}function Gn(r){return function(){return r}}function Pn(r){return v(r)?Gn(NaN):function(n){if(v(n))return NaN;return n===r?l:0}}function kn(r,n){return v(r)||v(n)||r<0||n<=0?Gn(NaN):0===r?Pn(0):function(t){if(v(t))return NaN;if(t<0||t===l)return 0;return Hn(r,t*n)*n}}c((function(r,n){return v(r)||v(n)?NaN:r===n?l:0}),"factory",Pn),c(Tn,"factory",kn);export{Tn as default,kn as factory};
//# sourceMappingURL=mod.js.map
