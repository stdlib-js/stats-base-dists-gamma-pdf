// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(r){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,e=Object.prototype,u=e.toString,f=e.__defineGetter__,i=e.__defineSetter__,o=e.__lookupGetter__,a=e.__lookupSetter__,c=function(){try{return n({},"x",{}),!0}catch(r){return!1}}()?t:function(r,n,t){var c,l,y,v;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((l="value"in t)&&(o.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),y="get"in t,v="set"in t,l&&(y||v))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&f&&f.call(r,n,t.get),v&&i&&i.call(r,n,t.set),r};function l(r,n,t){c(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}function y(r){return r!=r}var v=Number.POSITIVE_INFINITY,p=Number.NEGATIVE_INFINITY;function s(r){return r===v||r===p}function b(r){return Math.abs(r)}var N,w="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),d=Object.prototype.toString,h=Object.prototype.hasOwnProperty,_="function"==typeof Symbol?Symbol.toStringTag:"",A=w&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,u,f;if(null==r)return d.call(r);t=r[_],f=_,n=null!=(u=r)&&h.call(u,f);try{r[_]=void 0}catch(n){return d.call(r)}return e=d.call(r),n?r[_]=t:delete r[_],e}:function(r){return d.call(r)},m="function"==typeof Uint32Array,U="function"==typeof Uint32Array?Uint32Array:null,g="function"==typeof Uint32Array?Uint32Array:void 0;N=function(){var r,n,t;if("function"!=typeof U)return!1;try{n=new U(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(m&&t instanceof Uint32Array||"[object Uint32Array]"===A(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?g:function(){throw new Error("not implemented")};var j,I=N,O="function"==typeof Float64Array,S="function"==typeof Float64Array?Float64Array:null,E="function"==typeof Float64Array?Float64Array:void 0;j=function(){var r,n,t;if("function"!=typeof S)return!1;try{n=new S([1,3.14,-3.14,NaN]),t=n,r=(O&&t instanceof Float64Array||"[object Float64Array]"===A(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?E:function(){throw new Error("not implemented")};var F,T=j,H="function"==typeof Uint8Array,G="function"==typeof Uint8Array?Uint8Array:null,P="function"==typeof Uint8Array?Uint8Array:void 0;F=function(){var r,n,t;if("function"!=typeof G)return!1;try{n=new G(n=[1,3.14,-3.14,256,257]),t=n,r=(H&&t instanceof Uint8Array||"[object Uint8Array]"===A(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?P:function(){throw new Error("not implemented")};var x,M=F,k="function"==typeof Uint16Array,L="function"==typeof Uint16Array?Uint16Array:null,V="function"==typeof Uint16Array?Uint16Array:void 0;x=function(){var r,n,t;if("function"!=typeof L)return!1;try{n=new L(n=[1,3.14,-3.14,65536,65537]),t=n,r=(k&&t instanceof Uint16Array||"[object Uint16Array]"===A(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?V:function(){throw new Error("not implemented")};var W,Y={uint16:x,uint8:M};(W=new Y.uint16(1))[0]=4660;var q=52===new Y.uint8(W.buffer)[0],C=!0===q?1:0,z=new T(1),B=new I(z.buffer);function D(r){return z[0]=r,B[C]}var J=!0===q?1:0,K=new T(1),Q=new I(K.buffer);function R(r,n){return K[0]=r,Q[J]=n>>>0,K[0]}var X=1023,Z=.6931471803691238,$=1.9082149292705877e-10,rr=1048575;function nr(r){var n,t,e,u,f,i,o,a,c,l,v,s;return 0===r?p:y(r)||r<0?NaN:(f=0,(t=D(r))<1048576&&(f-=54,t=D(r*=0x40000000000000)),t>=2146435072?r+r:(f+=(t>>20)-X|0,f+=(a=614244+(t&=rr)&1048576|0)>>20|0,o=(r=R(r,t|1072693248^a))-1,(rr&2+t)<3?0===o?0===f?0:f*Z+f*$:(i=o*o*(.5-.3333333333333333*o),0===f?o-i:f*Z-(i-f*$-o)):(a=t-398458|0,c=440401-t|0,u=(v=(s=(l=o/(2+o))*l)*s)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(v),e=s*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(v),i=e+u,(a|=c)>0?(n=.5*o*o,0===f?o-(n-l*(n+i)):f*Z-(n-(l*(n+i)+f*$)-o)):0===f?o-l*(o-i):f*Z-(l*(o-i)-f*$-o))))}var tr=Math.floor,er=Math.ceil;function ur(r){return r<0?er(r):tr(r)}function fr(r,n){var t,e,u,f;return u=(f=r*r)*f,e=f*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(f),e+=u*u*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(f),(u=1-(t=.5*f))+(1-u-t+(f*e-r*n))}var ir=-.16666666666666632;function or(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(ir+u*t):r-(u*(.5*n-e*t)-n-e*ir)}var ar,cr,lr=!0===q?0:1,yr=new T(1),vr=new I(yr.buffer);!0===q?(ar=1,cr=0):(ar=0,cr=1);var pr,sr,br={HIGH:ar,LOW:cr},Nr=new T(1),wr=new I(Nr.buffer),dr=br.HIGH,hr=br.LOW;function _r(r,n){return wr[dr]=r,wr[hr]=n,Nr[0]}!0===q?(pr=1,sr=0):(pr=0,sr=1);var Ar={HIGH:pr,LOW:sr},mr=new T(1),Ur=new I(mr.buffer),gr=Ar.HIGH,jr=Ar.LOW;function Ir(r,n){return mr[0]=n,r[0]=Ur[gr],r[1]=Ur[jr],r}function Or(r,n){return 1===arguments.length?Ir([0,0],r):Ir(r,n)}var Sr=[0,0];function Er(r,n){var t,e;return Or(Sr,r),t=Sr[0],t&=2147483647,e=D(n),_r(t|=e&=2147483648,Sr[1])}function Fr(r,n,t,e){return y(r)||s(r)?(n[e]=r,n[e+t]=0,n):0!==r&&b(r)<22250738585072014e-324?(n[e]=4503599627370496*r,n[e+t]=-52,n):(n[e]=r,n[e+t]=0,n)}l((function(r){return Fr(r,[0,0],1,0)}),"assign",Fr);var Tr=[0,0],Hr=[0,0];function Gr(r,n){var t,e;return 0===n||0===r||y(r)||s(r)?r:(Fr(r,Tr,1,0),n+=Tr[1],n+=function(r){var n=D(r);return(n=(2146435072&n)>>>20)-X|0}(r=Tr[0]),n<-1074?Er(0,r):n>1023?r<0?p:v:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Or(Hr,r),t=Hr[0],t&=2148532223,e*_r(t|=n+X<<20,Hr[1])))}function Pr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var xr=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Mr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],kr=16777216,Lr=5.960464477539063e-8,Vr=Pr(20),Wr=Pr(20),Yr=Pr(20),qr=Pr(20);function Cr(r,n,t,e,u,f,i,o,a){var c,l,y,v,p,s,b,N,w;for(v=f,w=e[t],N=t,p=0;N>0;p++)l=Lr*w|0,qr[p]=w-kr*l|0,w=e[N-1]+l,N-=1;if(w=Gr(w,u),w-=8*tr(.125*w),w-=b=0|w,y=0,u>0?(b+=p=qr[t-1]>>24-u,qr[t-1]-=p<<24-u,y=qr[t-1]>>23-u):0===u?y=qr[t-1]>>23:w>=.5&&(y=2),y>0){for(b+=1,c=0,p=0;p<t;p++)N=qr[p],0===c?0!==N&&(c=1,qr[p]=16777216-N):qr[p]=16777215-N;if(u>0)switch(u){case 1:qr[t-1]&=8388607;break;case 2:qr[t-1]&=4194303}2===y&&(w=1-w,0!==c&&(w-=Gr(1,u)))}if(0===w){for(N=0,p=t-1;p>=f;p--)N|=qr[p];if(0===N){for(s=1;0===qr[f-s];s++);for(p=t+1;p<=t+s;p++){for(a[o+p]=xr[i+p],l=0,N=0;N<=o;N++)l+=r[N]*a[o+(p-N)];e[p]=l}return Cr(r,n,t+=s,e,u,f,i,o,a)}}if(0===w)for(t-=1,u-=24;0===qr[t];)t-=1,u-=24;else(w=Gr(w,-u))>=kr?(l=Lr*w|0,qr[t]=w-kr*l|0,u+=24,qr[t+=1]=l):qr[t]=0|w;for(l=Gr(1,u),p=t;p>=0;p--)e[p]=l*qr[p],l*=Lr;for(p=t;p>=0;p--){for(l=0,s=0;s<=v&&s<=t-p;s++)l+=Mr[s]*e[p+s];Yr[t-p]=l}for(l=0,p=t;p>=0;p--)l+=Yr[p];for(n[0]=0===y?l:-l,l=Yr[0]-l,p=1;p<=t;p++)l+=Yr[p];return n[1]=0===y?l:-l,7&b}function zr(r,n,t,e){var u,f,i,o,a,c,l;for((f=(t-3)/24|0)<0&&(f=0),o=t-24*(f+1),c=f-(i=e-1),l=i+4,a=0;a<=l;a++)Vr[a]=c<0?0:xr[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=i;c++)u+=r[c]*Vr[i+(a-c)];Wr[a]=u}return Cr(r,n,4,Wr,o,4,f,i,Vr)}var Br=Math.round;function Dr(r,n,t){var e,u,f,i,o;return f=r-1.5707963267341256*(e=Br(.6366197723675814*r)),i=6077100506506192e-26*e,o=n>>20|0,t[0]=f-i,o-(D(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((u=f)-(f=u-(i=6077100506303966e-26*e))-i),t[0]=f-i,o-(D(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((u=f)-(f=u-(i=20222662487111665e-37*e))-i),t[0]=f-i)),t[1]=f-t[0]-i,e}var Jr=1.5707963267341256,Kr=6077100506506192e-26,Qr=2*Kr,Rr=3*Kr,Xr=4*Kr,Zr=[0,0,0],$r=[0,0];function rn(r,n){var t,e,u,f,i,o,a;if((u=2147483647&D(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?Dr(r,u,n):u<=1073928572?r>0?(a=r-Jr,n[0]=a-Kr,n[1]=a-n[0]-Kr,1):(a=r+Jr,n[0]=a+Kr,n[1]=a-n[0]+Kr,-1):r>0?(a=r-2*Jr,n[0]=a-Qr,n[1]=a-n[0]-Qr,2):(a=r+2*Jr,n[0]=a+Qr,n[1]=a-n[0]+Qr,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?Dr(r,u,n):r>0?(a=r-3*Jr,n[0]=a-Rr,n[1]=a-n[0]-Rr,3):(a=r+3*Jr,n[0]=a+Rr,n[1]=a-n[0]+Rr,-3):1075388923===u?Dr(r,u,n):r>0?(a=r-4*Jr,n[0]=a-Xr,n[1]=a-n[0]-Xr,4):(a=r+4*Jr,n[0]=a+Xr,n[1]=a-n[0]+Xr,-4);if(u<1094263291)return Dr(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return yr[0]=r,vr[lr]}(r),a=_r(u-((e=(u>>20)-1046)<<20|0),t),i=0;i<2;i++)Zr[i]=0|a,a=16777216*(a-Zr[i]);for(Zr[2]=a,f=3;0===Zr[f-1];)f-=1;return o=zr(Zr,$r,e,f),r<0?(n[0]=-$r[0],n[1]=-$r[1],-o):(n[0]=$r[0],n[1]=$r[1],o)}var nn=[0,0];function tn(r){var n;if(n=D(r),(n&=2147483647)<=1072243195)return n<1044381696?1:fr(r,0);if(n>=2146435072)return NaN;switch(3&rn(r,nn)){case 0:return fr(nn[0],nn[1]);case 1:return-or(nn[0],nn[1]);case 2:return-fr(nn[0],nn[1]);default:return or(nn[0],nn[1])}}var en=[0,0];function un(r){var n;if(n=D(r),(n&=2147483647)<=1072243195)return n<1045430272?r:or(r,0);if(n>=2146435072)return NaN;switch(3&rn(r,en)){case 0:return or(en[0],en[1]);case 1:return fr(en[0],en[1]);case 2:return-or(en[0],en[1]);default:return-fr(en[0],en[1])}}var fn=3.141592653589793,on=1.4616321449683622,an=1.4616321449683622;function cn(r){var n,t,e,u,f,i,o,a,c,l,p,N,w;if(y(r)||s(r))return r;if(0===r)return v;if(r<0?(n=!0,r=-r):n=!1,r<8470329472543003e-37)return-nr(r);if(n){if(r>=4503599627370496)return v;if(c=function(r){var n,t;return y(r)||s(r)?NaN:0===(n=b(t=r%2))||1===n?Er(0,t):n<.25?un(fn*t):n<.75?Er(tn(fn*(n=.5-n)),t):n<1.25?(t=Er(1,t)-t,un(fn*t)):n<1.75?-Er(tn(fn*(n-=1.5)),t):(t-=Er(2,t),un(fn*t))}(r),0===c)return v;t=nr(fn/b(c*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(w=-nr(r),r>=on-1+.27?(p=1-r,e=0):r>=on-1-.27?(p=r-(an-1),e=1):(p=r,e=2)):(w=0,r>=on+.27?(p=2-r,e=0):r>=on-.27?(p=r-an,e=1):(p=r-1,e=2)),e){case 0:i=.07721566490153287+(N=p*p)*function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))}(N),f=N*(.3224670334241136+N*function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))}(N)),w+=(o=p*i+f)-.5*p;break;case 1:i=.48383612272381005+(l=(N=p*p)*p)*function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965}(l),f=l*function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)}(l)-.1475877229945939,u=.06462494023913339+l*function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144}(l),w+=(o=N*i-(-3638676997039505e-33-l*(f+p*u)))-.12148629053584961;break;case 2:i=p*(p*function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))}(p)-.07721566490153287),f=1+p*function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))}(p),w+=-.5*p+i/f}else if(r<8)switch(o=(p=r-(e=ur(r)))*(p*function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))}(p)-.07721566490153287),a=1+p*function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))}(p),w=.5*p+o/a,N=1,e){case 7:N*=p+6;case 6:N*=p+5;case 5:N*=p+4;case 4:N*=p+3;case 3:w+=nr(N*=p+2)}else r<0x400000000000000?(c=nr(r),l=.4189385332046727+(N=1/r)*function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)}(p=N*N),w=(r-.5)*(c-1)+l):w=r*(nr(r)-1);return n&&(w=t-w),w}var ln=1.4426950408889634,yn=1/(1<<28);function vn(r){var n;return y(r)||r===v?r:r===p?0:r>709.782712893384?v:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<yn?1+r:function(r,n,t){var e,u,f,i;return Gr(1-(n-(e=r-n)*(f=e-(u=e*e)*(0===(i=u)?.16666666666666602:.16666666666666602+i*(i*(6613756321437934e-20+i*(4.1381367970572385e-8*i-16533902205465252e-22))-.0027777777777015593)))/(2-f)-r),t)}(r-.6931471803691238*(n=ur(r<0?ln*r-.5:ln*r+.5)),1.9082149292705877e-10*n,n)}function pn(r){return tr(r)===r}function sn(r){return 0===r&&1/r===p}function bn(r){return pn(r/2)}function Nn(r){return bn(r>0?r-1:r+1)}var wn=Math.sqrt,dn=!0===q?0:1,hn=new T(1),_n=new I(hn.buffer);function An(r,n){return hn[0]=r,_n[dn]=n>>>0,hn[0]}function mn(r){return 0|r}var Un=1048576,gn=[1,1.5],jn=[0,.5849624872207642],In=[0,1.350039202129749e-8],On=2147483647,Sn=1048575,En=1048576,Fn=2147483647,Tn=1083179008,Hn=1e300,Gn=1e-300,Pn=[0,0],xn=[0,0];function Mn(r,n){var t,e,u,f,i,o,a,c,l,N,w,d,h,_;if(y(r)||y(n))return NaN;if(Or(Pn,n),i=Pn[0],0===Pn[1]){if(0===n)return 1;if(1===n)return r;if(-1===n)return 1/r;if(.5===n)return wn(r);if(-.5===n)return 1/wn(r);if(2===n)return r*r;if(3===n)return r*r*r;if(4===n)return(r*=r)*r;if(s(n))return function(r,n){return-1===r?(r-r)/(r-r):1===r?1:b(r)<1==(n===v)?0:v}(r,n)}if(Or(Pn,r),f=Pn[0],0===Pn[1]){if(0===f)return function(r,n){return n===p?v:n===v?0:n>0?Nn(n)?r:0:Nn(n)?Er(v,r):v}(r,n);if(1===r)return 1;if(-1===r&&Nn(n))return-1;if(s(r))return r===p?Mn(-0,-n):n<0?0:v}if(r<0&&!1===pn(n))return(r-r)/(r-r);if(u=b(r),t=f&Fn|0,e=i&Fn|0,a=i>>>31|0,o=(o=f>>>31|0)&&Nn(n)?-1:1,e>1105199104){if(e>1139802112)return function(r,n){return(2147483647&D(r))<=1072693247?n<0?1/0:0:n>0?1/0:0}(r,n);if(t<1072693247)return 1===a?o*Hn*Hn:o*Gn*Gn;if(t>1072693248)return 0===a?o*Hn*Hn:o*Gn*Gn;w=function(r,n){var t,e,u,f,i,o;return t=(i=1.9259629911266175e-8*(u=n-1)-u*u*(0===(o=u)?.5:.5+o*(.25*o-.3333333333333333))*1.4426950408889634)-((e=An(e=(f=1.4426950216293335*u)+i,0))-f),r[0]=e,r[1]=t,r}(xn,u)}else w=function(r,n,t){var e,u,f,i,o,a,c,l,y,v,p,s,b,N,w,d,h,_,A,m,U;return _=0,t<Un&&(_-=53,t=D(n*=9007199254740992)),_+=(t>>20)-X|0,t=1072693248|(A=1048575&t|0),A<=235662?m=0:A<767610?m=1:(m=0,_+=1,t-=Un),i=An(u=(d=(n=R(n,t))-(c=gn[m]))*(h=1/(n+c)),0),e=524288+(t>>1|536870912),a=R(0,e+=m<<18),w=(f=u*u)*f*(0===(U=f)?.5999999999999946:.5999999999999946+U*(.4285714285785502+U*(.33333332981837743+U*(.272728123808534+U*(.23066074577556175+.20697501780033842*U))))),a=An(a=3+(f=i*i)+(w+=(o=h*(d-i*a-i*(n-(a-c))))*(i+u)),0),b=(p=-7.028461650952758e-9*(y=An(y=(d=i*a)+(h=o*a+(w-(a-3-f))*u),0))+.9617966939259756*(h-(y-d))+In[m])-((s=An(s=(v=.9617967009544373*y)+p+(l=jn[m])+(N=_),0))-N-l-v),r[0]=s,r[1]=b,r}(xn,u,t);if(N=(n-(c=An(n,0)))*w[0]+n*w[1],l=c*w[0],Or(Pn,d=N+l),h=mn(Pn[0]),_=mn(Pn[1]),h>=Tn){if(0!=(h-Tn|_))return o*Hn*Hn;if(N+8008566259537294e-32>d-l)return o*Hn*Hn}else if((h&Fn)>=1083231232){if(0!=(h-3230714880|_))return o*Gn*Gn;if(N<=d-l)return o*Gn*Gn}return d=function(r,n,t){var e,u,f,i,o,a,c,l,y,v;return y=((l=r&On|0)>>20)-X|0,c=0,l>1071644672&&(u=R(0,((c=r+(En>>y+1)>>>0)&~(Sn>>(y=((c&On)>>20)-X|0)))>>>0),c=(c&Sn|En)>>20-y>>>0,r<0&&(c=-c),n-=u),r=mn(r=D(a=1-((a=(f=.6931471824645996*(u=An(u=t+n,0)))+(i=.6931471805599453*(t-(u-n))+-1.904654299957768e-9*u))*(e=a-(u=a*a)*(0===(v=u)?.16666666666666602:.16666666666666602+v*(v*(6613756321437934e-20+v*(4.1381367970572385e-8*v-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((o=i-(a-f))+a*o)-a))),(r+=c<<20>>>0)>>20<=0?Gr(a,c):R(a,r)}(h,l,N),o*d}function kn(r){var n,t,e;return n=1+(n=1/r)*function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))}(n),t=vn(r),2.5066282746310007*(t=r>143.01608?(e=Mn(r,.5*r-.25))*(e/t):Mn(r,r-.5)/t)*n}function Ln(r,n){return n/((1+.5772156649015329*r)*r)}var Vn=.6931471803691238,Wn=1.9082149292705877e-10;function Yn(r){return 0===r&&1/r===v}function qn(r,n){var t,e,u,f;if(2===(t=arguments.length))return y(r)||y(n)?NaN:r===v||n===v?v:r===n&&0===r?Yn(r)?r:n:r>n?r:n;for(e=p,f=0;f<t;f++){if(y(u=arguments[f])||u===v)return u;(u>e||u===e&&0===u&&Yn(u))&&(e=u)}return e}function Cn(r,n){var t,e,u,f;if(2===(t=arguments.length))return y(r)||y(n)?NaN:r===p||n===p?p:r===n&&0===r?sn(r)?r:n:r<n?r:n;for(e=v,f=0;f<t;f++){if(y(u=arguments[f])||u===p)return u;(u<e||u===e&&0===u&&sn(u))&&(e=u)}return e}var zn=709.782712893384,Bn=-708.3964185322641,Dn=10.900511;function Jn(r,n){var t,e,u,f,i,o,a,c,l,s;return a=(n-r-Dn+.5)/(u=r+Dn-.5),r<1?n<=Bn?vn(r*nr(n)-n-cn(r)):Mn(n,r)*vn(-n)/function(r){var n,t,e,u;if(pn(r)&&r<0||r===p||y(r))return NaN;if(0===r)return sn(r)?p:v;if(r>171.61447887182297)return v;if(r<-170.5674972726612)return 0;if((t=b(r))>33)return r>=0?kn(r):(n=0==(1&(e=tr(t)))?-1:1,(u=t-e)>.5&&(u=t-(e+=1)),u=t*un(fn*u),n*fn/(b(u)*kn(t)));for(u=1;r>=3;)u*=r-=1;for(;r<0;){if(r>-1e-9)return Ln(r,u);u/=r,r+=1}for(;r<2;){if(r<1e-9)return Ln(r,u);u/=r,r+=1}return 2===r?u:u*function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),t=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),t=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/t)}(r-=2)}(r):(b(a*a*r)<=100&&r>150?(t=r*(function(r){var n,t,e,u,f,i,o,a,c,l;if(r<-1||y(r))return NaN;if(-1===r)return p;if(r===v)return r;if(0===r)return r;if(l=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(l=0,u=r,t=1)}return 0!==l&&(e<9007199254740992?(f=(l=((t=D(c=1+r))>>20)-X)>0?1-(c-r):r-(c-1),f/=c):(l=((t=D(c=r))>>20)-X,f=0),(t&=1048575)<434334?c=R(c,1072693248|t):(l+=1,c=R(c,1071644672|t),t=1048576-t>>2),u=c-1),n=.5*u*u,0===t?0===u?l*Vn+(f+=l*Wn):l*Vn-((a=n*(1-.6666666666666666*u))-(l*Wn+f)-u):(a=(o=(i=u/(2+u))*i)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(o),0===l?u-(n-i*(n+a)):l*Vn-(n-(i*(n+a)+(l*Wn+f))-u))}(a)-a)+-10.400511*n/u,t=vn(t)):Cn(f=r*nr(n/u),i=r-n)<=Bn||qn(f,i)>=zn?(e=i/r,Cn(f,i)/2>Bn&&qn(f,i)/2<zn?t=(o=Mn(n/u,r/2)*vn(i/2))*o:Cn(f,i)/4>Bn&&qn(f,i)/4<zn&&n>r?(t=(o=Mn(n/u,r/4)*vn(i/4))*o,t*=t):t=e>Bn&&e<zn?Mn(n*vn(e)/u,r):vn(f+i)):t=Mn(n/u,r)*vn(i),t*=wn(u/2.718281828459045)/(0===(c=r)?1/0:((c<0?-c:c)<=1?(l=709811.662581658+c*(679979.8474157227+c*(293136.7857211597+c*(74887.54032914672+c*(12555.290582413863+c*(1443.4299244417066+c*(115.24194596137347+c*(6.309239205732627+c*(.22668404630224365+c*(.004826466289237662+4624429436045379e-20*c))))))))),s=0+c*(362880+c*(1026576+c*(1172700+c*(723680+c*(269325+c*(63273+c*(9450+c*(870+c*(45+1*c)))))))))):(l=4624429436045379e-20+(c=1/c)*(.004826466289237662+c*(.22668404630224365+c*(6.309239205732627+c*(115.24194596137347+c*(1443.4299244417066+c*(12555.290582413863+c*(74887.54032914672+c*(293136.7857211597+c*(679979.8474157227+709811.662581658*c))))))))),s=1+c*(45+c*(870+c*(9450+c*(63273+c*(269325+c*(723680+c*(1172700+c*(1026576+c*(362880+0*c)))))))))),l/s)))}function Kn(r,n){var t;return r<=0||n<0?NaN:0===n?r>1?0:1===r?1:v:(t=Jn(r,n),n<1&&17976931348623157e292*n<t?v:(0===t?t=vn(t=r*nr(n)-n-cn(r)-nr(n)):t/=n,t))}function Qn(r,n,t){return y(r)||y(n)||y(t)||n<0||t<=0?NaN:r<0||r===v?0:0===n?0===r?v:0:Kn(n,r*t)*t}function Rn(r){return function(){return r}}function Xn(r){return y(r)?Rn(NaN):function(n){return y(n)?NaN:n===r?v:0}}function Zn(r,n){return y(r)||y(n)||r<0||n<=0?Rn(NaN):0===r?Xn(0):function(t){return y(t)?NaN:t<0||t===v?0:Kn(r,t*n)*n}}l((function(r,n){return y(r)||y(n)?NaN:r===n?v:0}),"factory",Xn),l(Qn,"factory",Zn),r.default=Qn,r.factory=Zn,Object.defineProperty(r,"__esModule",{value:!0})},"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((r="undefined"!=typeof globalThis?globalThis:r||self).pdf={});
//# sourceMappingURL=browser.js.map
