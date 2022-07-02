// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var n=function(){try{return r({},"x",{}),!0}catch(r){return!1}},t=Object.defineProperty,e=Object.prototype,u=e.toString,f=e.__defineGetter__,i=e.__defineSetter__,o=e.__lookupGetter__,a=e.__lookupSetter__;var c=t,v=function(r,n,t){var c,v,l,y;if("object"!=typeof r||null===r||"[object Array]"===u.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((v="value"in t)&&(o.call(r,n)||a.call(r,n)?(c=r.__proto__,r.__proto__=e,delete r[n],r[n]=t.value,r.__proto__=c):r[n]=t.value),l="get"in t,y="set"in t,v&&(l||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&f&&f.call(r,n,t.get),y&&i&&i.call(r,n,t.set),r},l=n()?c:v;var y=function(r,n,t){l(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})};var p=function(r){return r!=r},s=Number.POSITIVE_INFINITY,N=Number.NEGATIVE_INFINITY,b=s,w=N;var A=function(r){return r===b||r===w};var h=function(r){return Math.abs(r)};var _=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var d=function(){return _&&"symbol"==typeof Symbol.toStringTag},m=Object.prototype.toString,U=m;var g=function(r){return U.call(r)},j=Object.prototype.hasOwnProperty;var I=function(r,n){return null!=r&&j.call(r,n)},O="function"==typeof Symbol?Symbol.toStringTag:"",S=I,E=O,F=m;var H=g,T=function(r){var n,t,e;if(null==r)return F.call(r);t=r[E],n=S(r,E);try{r[E]=void 0}catch(n){return F.call(r)}return e=F.call(r),n?r[E]=t:delete r[E],e},G=d()?T:H,P=G,k="function"==typeof Uint32Array;var M="function"==typeof Uint32Array?Uint32Array:null,x=function(r){return k&&r instanceof Uint32Array||"[object Uint32Array]"===P(r)},L=M;var V=function(){var r,n;if("function"!=typeof L)return!1;try{n=new L(n=[1,3.14,-3.14,4294967296,4294967297]),r=x(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var W="function"==typeof Uint32Array?Uint32Array:void 0,Y=function(){throw new Error("not implemented")},q=V()?W:Y,C=G,z="function"==typeof Float64Array;var B="function"==typeof Float64Array?Float64Array:null,D=function(r){return z&&r instanceof Float64Array||"[object Float64Array]"===C(r)},J=B;var K=function(){var r,n;if("function"!=typeof J)return!1;try{n=new J([1,3.14,-3.14,NaN]),r=D(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var Q="function"==typeof Float64Array?Float64Array:void 0,R=function(){throw new Error("not implemented")},X=K()?Q:R,Z=G,$="function"==typeof Uint8Array;var rr="function"==typeof Uint8Array?Uint8Array:null,nr=function(r){return $&&r instanceof Uint8Array||"[object Uint8Array]"===Z(r)},tr=rr;var er=function(){var r,n;if("function"!=typeof tr)return!1;try{n=new tr(n=[1,3.14,-3.14,256,257]),r=nr(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var ur="function"==typeof Uint8Array?Uint8Array:void 0,fr=function(){throw new Error("not implemented")},ir=er()?ur:fr,or=G,ar="function"==typeof Uint16Array;var cr="function"==typeof Uint16Array?Uint16Array:null,vr=function(r){return ar&&r instanceof Uint16Array||"[object Uint16Array]"===or(r)},lr=cr;var yr=function(){var r,n;if("function"!=typeof lr)return!1;try{n=new lr(n=[1,3.14,-3.14,65536,65537]),r=vr(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var pr,sr="function"==typeof Uint16Array?Uint16Array:void 0,Nr=function(){throw new Error("not implemented")},br={uint16:yr()?sr:Nr,uint8:ir};(pr=new br.uint16(1))[0]=4660;var wr=52===new br.uint8(pr.buffer)[0],Ar=q,hr=!0===wr?1:0,_r=new X(1),dr=new Ar(_r.buffer);var mr=function(r){return _r[0]=r,dr[hr]},Ur=q,gr=!0===wr?1:0,jr=new X(1),Ir=new Ur(jr.buffer);var Or=function(r,n){return jr[0]=r,Ir[gr]=n>>>0,jr[0]},Sr=Or;var Er=mr,Fr=Sr,Hr=p,Tr=N,Gr=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},Pr=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},kr=.6931471803691238,Mr=1.9082149292705877e-10;var xr=function(r){var n,t,e,u,f,i,o,a,c,v,l;return 0===r?Tr:Hr(r)||r<0?NaN:(u=0,(t=Er(r))<1048576&&(u-=54,t=Er(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-1023|0,u+=(o=(t&=1048575)+614244&1048576|0)>>20|0,i=(r=Fr(r,t|1072693248^o))-1,(1048575&2+t)<3?0===i?0===u?0:u*kr+u*Mr:(f=i*i*(.5-.3333333333333333*i),0===u?i-f:u*kr-(f-u*Mr-i)):(o=t-398458|0,a=440401-t|0,e=(v=(l=(c=i/(2+i))*c)*l)*Gr(v),f=l*Pr(v)+e,(o|=a)>0?(n=.5*i*i,0===u?i-(n-c*(n+f)):u*kr-(n-(c*(n+f)+u*Mr)-i)):0===u?i-c*(i-f):u*kr-(c*(i-f)-u*Mr-i))))},Lr=Math.floor,Vr=Math.ceil,Wr=Lr,Yr=Vr;var qr=function(r){return r<0?Yr(r):Wr(r)};var Cr=function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)},zr=function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7};var Br=function(r,n){var t,e,u,f;return u=(f=r*r)*f,e=f*Cr(f),e+=u*u*zr(f),(u=1-(t=.5*f))+(1-u-t+(f*e-r*n))},Dr=-.16666666666666632;var Jr=function(r,n){var t,e,u;return t=.00833333333332249+(u=r*r)*(27557313707070068e-22*u-.0001984126982985795)+u*(u*u)*(1.58969099521155e-10*u-2.5050760253406863e-8),e=u*r,0===n?r+e*(Dr+u*t):r-(u*(.5*n-e*t)-n-e*Dr)},Kr=q,Qr=!0===wr?0:1,Rr=new X(1),Xr=new Kr(Rr.buffer);var Zr,$r,rn=function(r){return Rr[0]=r,Xr[Qr]};!0===wr?(Zr=1,$r=0):(Zr=0,$r=1);var nn=q,tn={HIGH:Zr,LOW:$r},en=new X(1),un=new nn(en.buffer),fn=tn.HIGH,on=tn.LOW;var an,cn,vn=function(r,n){return un[fn]=r,un[on]=n,en[0]},ln=vn;!0===wr?(an=1,cn=0):(an=0,cn=1);var yn=q,pn={HIGH:an,LOW:cn},sn=new X(1),Nn=new yn(sn.buffer),bn=pn.HIGH,wn=pn.LOW;var An=function(r,n){return sn[0]=n,r[0]=Nn[bn],r[1]=Nn[wn],r};var hn=function(r,n){return 1===arguments.length?An([0,0],r):An(r,n)},_n=hn,dn=mr,mn=ln,Un=[0,0];var gn=function(r,n){var t,e;return _n(Un,r),t=Un[0],t&=2147483647,e=dn(n),mn(t|=e&=2147483648,Un[1])},jn=A,In=p,On=h;var Sn=function(r,n){return In(n)||jn(n)?(r[0]=n,r[1]=0,r):0!==n&&On(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var En=mr;var Fn=function(r){var n=En(r);return(n=(2146435072&n)>>>20)-1023|0},Hn=s,Tn=N,Gn=p,Pn=A,kn=gn,Mn=function(r,n){return 1===arguments.length?Sn([0,0],r):Sn(r,n)},xn=Fn,Ln=hn,Vn=ln,Wn=[0,0],Yn=[0,0];var qn=function(r,n){var t,e;return 0===n||0===r||Gn(r)||Pn(r)?r:(Mn(Wn,r),n+=Wn[1],(n+=xn(r=Wn[0]))<-1074?kn(0,r):n>1023?r<0?Tn:Hn:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Ln(Yn,r),t=Yn[0],t&=2148532223,e*Vn(t|=n+1023<<20,Yn[1])))},Cn=qn;var zn=function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t};var Bn=Lr,Dn=Cn,Jn=function(r){return zn(0,r)},Kn=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],Qn=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],Rn=5.960464477539063e-8,Xn=Jn(20),Zn=Jn(20),$n=Jn(20),rt=Jn(20);function nt(r,n,t,e,u,f,i,o,a){var c,v,l,y,p,s,N,b,w;for(y=f,w=e[t],b=t,p=0;b>0;p++)v=Rn*w|0,rt[p]=w-16777216*v|0,w=e[b-1]+v,b-=1;if(w=Dn(w,u),w-=8*Bn(.125*w),w-=N=0|w,l=0,u>0?(N+=p=rt[t-1]>>24-u,rt[t-1]-=p<<24-u,l=rt[t-1]>>23-u):0===u?l=rt[t-1]>>23:w>=.5&&(l=2),l>0){for(N+=1,c=0,p=0;p<t;p++)b=rt[p],0===c?0!==b&&(c=1,rt[p]=16777216-b):rt[p]=16777215-b;if(u>0)switch(u){case 1:rt[t-1]&=8388607;break;case 2:rt[t-1]&=4194303}2===l&&(w=1-w,0!==c&&(w-=Dn(1,u)))}if(0===w){for(b=0,p=t-1;p>=f;p--)b|=rt[p];if(0===b){for(s=1;0===rt[f-s];s++);for(p=t+1;p<=t+s;p++){for(a[o+p]=Kn[i+p],v=0,b=0;b<=o;b++)v+=r[b]*a[o+(p-b)];e[p]=v}return nt(r,n,t+=s,e,u,f,i,o,a)}}if(0===w)for(t-=1,u-=24;0===rt[t];)t-=1,u-=24;else(w=Dn(w,-u))>=16777216?(v=Rn*w|0,rt[t]=w-16777216*v|0,u+=24,rt[t+=1]=v):rt[t]=0|w;for(v=Dn(1,u),p=t;p>=0;p--)e[p]=v*rt[p],v*=Rn;for(p=t;p>=0;p--){for(v=0,s=0;s<=y&&s<=t-p;s++)v+=Qn[s]*e[p+s];$n[t-p]=v}for(v=0,p=t;p>=0;p--)v+=$n[p];for(n[0]=0===l?v:-v,v=$n[0]-v,p=1;p<=t;p++)v+=$n[p];return n[1]=0===l?v:-v,7&N}var tt=function(r,n,t,e){var u,f,i,o,a,c,v;for(4,(f=(t-3)/24|0)<0&&(f=0),o=t-24*(f+1),c=f-(i=e-1),v=i+4,a=0;a<=v;a++)Xn[a]=c<0?0:Kn[c],c+=1;for(a=0;a<=4;a++){for(u=0,c=0;c<=i;c++)u+=r[c]*Xn[i+(a-c)];Zn[a]=u}return 4,nt(r,n,4,Zn,o,4,f,i,Xn)},et=Math.round,ut=mr;var ft=mr,it=rn,ot=ln,at=tt,ct=function(r,n,t){var e,u,f,i,o;return f=r-1.5707963267341256*(e=et(.6366197723675814*r)),i=6077100506506192e-26*e,o=n>>20|0,t[0]=f-i,o-(ut(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((u=f)-(f=u-(i=6077100506303966e-26*e))-i),t[0]=f-i,o-(ut(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((u=f)-(f=u-(i=20222662487111665e-37*e))-i),t[0]=f-i)),t[1]=f-t[0]-i,e},vt=1.5707963267341256,lt=6077100506506192e-26,yt=2*lt,pt=4*lt,st=[0,0,0],Nt=[0,0];var bt=function(r,n){var t,e,u,f,i,o,a;if((u=2147483647&ft(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(u<=1074752122)return 598523==(1048575&u)?ct(r,u,n):u<=1073928572?r>0?(a=r-vt,n[0]=a-lt,n[1]=a-n[0]-lt,1):(a=r+vt,n[0]=a+lt,n[1]=a-n[0]+lt,-1):r>0?(a=r-2*vt,n[0]=a-yt,n[1]=a-n[0]-yt,2):(a=r+2*vt,n[0]=a+yt,n[1]=a-n[0]+yt,-2);if(u<=1075594811)return u<=1075183036?1074977148===u?ct(r,u,n):r>0?(a=r-3*vt,n[0]=a-1.8231301519518578e-10,n[1]=a-n[0]-1.8231301519518578e-10,3):(a=r+3*vt,n[0]=a+1.8231301519518578e-10,n[1]=a-n[0]+1.8231301519518578e-10,-3):1075388923===u?ct(r,u,n):r>0?(a=r-4*vt,n[0]=a-pt,n[1]=a-n[0]-pt,4):(a=r+4*vt,n[0]=a+pt,n[1]=a-n[0]+pt,-4);if(u<1094263291)return ct(r,u,n);if(u>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=it(r),a=ot(u-((e=(u>>20)-1046)<<20|0),t),i=0;i<2;i++)st[i]=0|a,a=16777216*(a-st[i]);for(st[2]=a,f=3;0===st[f-1];)f-=1;return o=at(st,Nt,e,f),r<0?(n[0]=-Nt[0],n[1]=-Nt[1],-o):(n[0]=Nt[0],n[1]=Nt[1],o)},wt=mr,At=Br,ht=Jr,_t=bt,dt=[0,0];var mt=mr,Ut=Br,gt=Jr,jt=bt,It=[0,0];var Ot=function(r){var n;if(n=mt(r),(n&=2147483647)<=1072243195)return n<1045430272?r:gt(r,0);if(n>=2146435072)return NaN;switch(3&jt(r,It)){case 0:return gt(It[0],It[1]);case 1:return Ut(It[0],It[1]);case 2:return-gt(It[0],It[1]);default:return-Ut(It[0],It[1])}},St=3.141592653589793,Et=p,Ft=A,Ht=function(r){var n;if(n=wt(r),(n&=2147483647)<=1072243195)return n<1044381696?1:At(r,0);if(n>=2146435072)return NaN;switch(3&_t(r,dt)){case 0:return At(dt[0],dt[1]);case 1:return-ht(dt[0],dt[1]);case 2:return-At(dt[0],dt[1]);default:return ht(dt[0],dt[1])}},Tt=Ot,Gt=h,Pt=gn,kt=St;var Mt=p,xt=A,Lt=h,Vt=xr,Wt=qr,Yt=function(r){var n,t;return Et(r)||Ft(r)?NaN:0===(n=Gt(t=r%2))||1===n?Pt(0,t):n<.25?Tt(kt*t):n<.75?Pt(Ht(kt*(n=.5-n)),t):n<1.25?(t=Pt(1,t)-t,Tt(kt*t)):n<1.75?-Pt(Ht(kt*(n-=1.5)),t):(t-=Pt(2,t),Tt(kt*t))},qt=s,Ct=function(r){return 0===r?.06735230105312927:.06735230105312927+r*(.007385550860814029+r*(.0011927076318336207+r*(.00022086279071390839+25214456545125733e-21*r)))},zt=function(r){return 0===r?.020580808432516733:.020580808432516733+r*(.0028905138367341563+r*(.0005100697921535113+r*(.00010801156724758394+44864094961891516e-21*r)))},Bt=function(r){return 0===r?1.3920053346762105:1.3920053346762105+r*(.7219355475671381+r*(.17193386563280308+r*(.01864591917156529+r*(.0007779424963818936+7326684307446256e-21*r))))},Dt=function(r){return 0===r?.21498241596060885:.21498241596060885+r*(.325778796408931+r*(.14635047265246445+r*(.02664227030336386+r*(.0018402845140733772+3194753265841009e-20*r))))},Jt=function(r){return 0===r?-.032788541075985965:r*(.006100538702462913+r*(.00031563207090362595*r-.0014034646998923284))-.032788541075985965},Kt=function(r){return 0===r?.01797067508118204:.01797067508118204+r*(r*(.000881081882437654+-.00031275416837512086*r)-.0036845201678113826)},Qt=function(r){return 0===r?-.010314224129834144:r*(.0022596478090061247+r*(.0003355291926355191*r-.0005385953053567405))-.010314224129834144},Rt=function(r){return 0===r?.6328270640250934:.6328270640250934+r*(1.4549225013723477+r*(.9777175279633727+r*(.22896372806469245+.013381091853678766*r)))},Xt=function(r){return 0===r?2.4559779371304113:2.4559779371304113+r*(2.128489763798934+r*(.7692851504566728+r*(.10422264559336913+.003217092422824239*r)))},Zt=function(r){return 0===r?.08333333333333297:.08333333333333297+r*(r*(.0007936505586430196+r*(r*(.0008363399189962821+-.0016309293409657527*r)-.00059518755745034))-.0027777777772877554)},$t=1.4616321449683622,re=1.4616321449683622;var ne=function(r){var n,t,e,u,f,i,o,a;if(Mt(r)||xt(r))return r;if(0===r)return qt;if(r<0?(n=!0,r=-r):n=!1,r<8470329472543003e-37)return-Vt(r);if(n){if(r>=4503599627370496)return qt;if(0===(u=Yt(r)))return qt;t=Vt(3.141592653589793/Lt(u*r))}if(1===r||2===r)return 0;if(r<2)switch(r<=.9?(a=-Vt(r),r>=$t-1+.27?(i=1-r,e=0):r>=$t-1-.27?(i=r-(re-1),e=1):(i=r,e=2)):(a=0,r>=$t+.27?(i=2-r,e=0):r>=$t-.27?(i=r-re,e=1):(i=r-1,e=2)),e){case 0:a+=i*(.07721566490153287+(o=i*i)*Ct(o))+o*(.3224670334241136+o*zt(o))-.5*i;break;case 1:a+=-.12148629053584961+((o=i*i)*(.48383612272381005+(f=o*i)*Jt(f))-(-3638676997039505e-33-f*(f*Kt(f)-.1475877229945939+i*(.06462494023913339+f*Qt(f)))));break;case 2:a+=-.5*i+i*(i*Rt(i)-.07721566490153287)/(1+i*Xt(i))}else if(r<8)switch(a=.5*(i=r-(e=Wt(r)))+i*(i*Dt(i)-.07721566490153287)/(1+i*Bt(i)),o=1,e){case 7:o*=i+6;case 6:o*=i+5;case 5:o*=i+4;case 4:o*=i+3;case 3:a+=Vt(o*=i+2)}else a=r<0x400000000000000?(r-.5)*((u=Vt(r))-1)+(f=.4189385332046727+(o=1/r)*Zt(i=o*o)):r*(Vt(r)-1);return n&&(a=t-a),a};var te=Cn,ee=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var ue=p,fe=qr,ie=N,oe=s,ae=function(r,n,t){var e,u,f;return f=(e=r-n)-(u=e*e)*ee(u),te(1-(n-e*f/(2-f)-r),t)};var ce=function(r){var n;return ue(r)||r===oe?r:r===ie?0:r>709.782712893384?oe:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:(n=fe(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5),ae(r-.6931471803691238*n,1.9082149292705877e-10*n,n))};var ve=function(r){var n,t;return 0===r?1/0:((r<0?-r:r)<=1?(n=709811.662581658+r*(679979.8474157227+r*(293136.7857211597+r*(74887.54032914672+r*(12555.290582413863+r*(1443.4299244417066+r*(115.24194596137347+r*(6.309239205732627+r*(.22668404630224365+r*(.004826466289237662+4624429436045379e-20*r))))))))),t=0+r*(362880+r*(1026576+r*(1172700+r*(723680+r*(269325+r*(63273+r*(9450+r*(870+r*(45+1*r)))))))))):(n=4624429436045379e-20+(r=1/r)*(.004826466289237662+r*(.22668404630224365+r*(6.309239205732627+r*(115.24194596137347+r*(1443.4299244417066+r*(12555.290582413863+r*(74887.54032914672+r*(293136.7857211597+r*(679979.8474157227+709811.662581658*r))))))))),t=1+r*(45+r*(870+r*(9450+r*(63273+r*(269325+r*(723680+r*(1172700+r*(1026576+r*(362880+0*r)))))))))),n/t)},le=Lr;var ye=function(r){return le(r)===r},pe=N;var se=function(r){return 0===r&&1/r===pe},Ne=ye;var be=function(r){return Ne(r/2)};var we=function(r){return be(r>0?r-1:r+1)},Ae=Math.sqrt,he=q,_e=!0===wr?0:1,de=new X(1),me=new he(de.buffer);var Ue=function(r,n){return de[0]=r,me[_e]=n>>>0,de[0]};var ge=function(r){return 0|r},je=we,Ie=gn,Oe=N,Se=s;var Ee=mr;var Fe=h,He=s;var Te=mr,Ge=Ue,Pe=Sr,ke=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},Me=[1,1.5],xe=[0,.5849624872207642],Le=[0,1.350039202129749e-8];var Ve=Ue,We=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var Ye=mr,qe=Sr,Ce=Ue,ze=ge,Be=Cn,De=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)};var Je=p,Ke=we,Qe=A,Re=ye,Xe=Ae,Ze=h,$e=hn,ru=Ue,nu=ge,tu=N,eu=s,uu=function(r,n){return n===Oe?Se:n===Se?0:n>0?je(n)?r:0:je(n)?Ie(Se,r):Se},fu=function(r,n){return(2147483647&Ee(r))<=1072693247?n<0?1/0:0:n>0?1/0:0},iu=function(r,n){return-1===r?(r-r)/(r-r):1===r?1:Fe(r)<1==(n===He)?0:He},ou=function(r,n,t){var e,u,f,i,o,a,c,v,l,y,p,s,N,b,w,A,h,_,d,m;return _=0,t<1048576&&(_-=53,t=Te(n*=9007199254740992)),_+=(t>>20)-1023|0,t=1072693248|(d=1048575&t|0),d<=235662?m=0:d<767610?m=1:(m=0,_+=1,t-=1048576),e=524288+(t>>1|536870912),o=(h=1/((n=Pe(n,t))+(c=Me[m])))*((A=n-c)-(i=Ge(u=A*h,0))*(a=Pe(0,e+=m<<18))-i*(n-(a-c))),w=(f=u*u)*f*ke(f),a=Ge(a=3+(f=i*i)+(w+=o*(i+u)),0),N=(p=-7.028461650952758e-9*(l=Ge(l=(A=i*a)+(h=o*a+(w-(a-3-f))*u),0))+.9617966939259756*(h-(l-A))+Le[m])-((s=Ge(s=(y=.9617967009544373*l)+p+(v=xe[m])+(b=_),0))-b-v-y),r[0]=s,r[1]=N,r},au=function(r,n){var t,e,u,f,i;return t=(i=1.9259629911266175e-8*(u=n-1)-1.4426950408889634*(u*u*We(u)))-((e=Ve(e=(f=1.4426950216293335*u)+i,0))-f),r[0]=e,r[1]=t,r},cu=function(r,n,t){var e,u,f,i,o,a,c,v,l,y;return y=((l=2147483647&r|0)>>20)-1023|0,v=0,l>1071644672&&(e=((v=r+(1048576>>y+1)>>>0)&~(1048575>>(y=((2147483647&v)>>20)-1023|0)))>>>0,v=(1048575&v|1048576)>>20-y>>>0,r<0&&(v=-v),n-=f=qe(0,e)),a=(o=.6931471805599453*(t-((f=Ce(f=t+n,0))-n))+-1.904654299957768e-9*f)-((c=(i=.6931471824645996*f)+o)-i),u=c-(f=c*c)*De(f),r=Ye(c=1-(c*u/(u-2)-(a+c*a)-c)),r=ze(r),c=(r+=v<<20>>>0)>>20<=0?Be(c,v):qe(c,r)},vu=1e300,lu=[0,0],yu=[0,0];var pu=function r(n,t){var e,u,f,i,o,a,c,v,l,y,p,s,N,b;if(Je(n)||Je(t))return NaN;if($e(lu,t),o=lu[0],0===lu[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return Xe(n);if(-.5===t)return 1/Xe(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(Qe(t))return iu(n,t)}if($e(lu,n),i=lu[0],0===lu[1]){if(0===i)return uu(n,t);if(1===n)return 1;if(-1===n&&Ke(t))return-1;if(Qe(n))return n===tu?r(-0,-t):t<0?0:eu}if(n<0&&!1===Re(t))return(n-n)/(n-n);if(f=Ze(n),e=2147483647&i|0,u=2147483647&o|0,c=o>>>31|0,a=(a=i>>>31|0)&&Ke(t)?-1:1,u>1105199104){if(u>1139802112)return fu(n,t);if(e<1072693247)return 1===c?a*vu*vu:1e-300*a*1e-300;if(e>1072693248)return 0===c?a*vu*vu:1e-300*a*1e-300;p=au(yu,f)}else p=ou(yu,f,e);if(y=(t-(v=ru(t,0)))*p[0]+t*p[1],l=v*p[0],$e(lu,s=y+l),N=nu(lu[0]),b=nu(lu[1]),N>=1083179008){if(0!=(N-1083179008|b))return a*vu*vu;if(y+8008566259537294e-32>s-l)return a*vu*vu}else if((2147483647&N)>=1083231232){if(0!=(N-3230714880|b))return 1e-300*a*1e-300;if(y<=s-l)return 1e-300*a*1e-300}return a*(s=cu(N,l,y))},su=pu;var Nu=su,bu=ce,wu=function(r){return 0===r?.08333333333334822:.08333333333334822+r*(.0034722222160545866+r*(r*(.0007873113957930937*r-.00022954996161337813)-.0026813261780578124))};var Au=p,hu=ye,_u=se,du=h,mu=Lr,Uu=Ot,gu=s,ju=N,Iu=St,Ou=function(r){var n,t,e;return n=1+(n=1/r)*wu(n),t=bu(r),2.5066282746310007*(t=r>143.01608?(e=Nu(r,.5*r-.25))*(e/t):Nu(r,r-.5)/t)*n},Su=function(r,n){return n/((1+.5772156649015329*r)*r)},Eu=function(r){var n,t;return 0===r?1:((r<0?-r:r)<=1?(n=1+r*(.4942148268014971+r*(.20744822764843598+r*(.04763678004571372+r*(.010421379756176158+r*(.0011913514700658638+r*(.00016011952247675185+0*r)))))),t=1+r*(.0714304917030273+r*(r*(.035823639860549865+r*(.011813978522206043+r*(r*(.0005396055804933034+-23158187332412014e-21*r)-.004456419138517973)))-.23459179571824335))):(n=0+(r=1/r)*(.00016011952247675185+r*(.0011913514700658638+r*(.010421379756176158+r*(.04763678004571372+r*(.20744822764843598+r*(.4942148268014971+1*r)))))),t=r*(.0005396055804933034+r*(r*(.011813978522206043+r*(.035823639860549865+r*(r*(.0714304917030273+1*r)-.23459179571824335)))-.004456419138517973))-23158187332412014e-21),n/t)};var Fu=function(r){var n,t,e,u;if(hu(r)&&r<0||r===ju||Au(r))return NaN;if(0===r)return _u(r)?ju:gu;if(r>171.61447887182297)return gu;if(r<-170.5674972726612)return 0;if((t=du(r))>33)return r>=0?Ou(r):(n=0==(1&(e=mu(t)))?-1:1,(u=t-e)>.5&&(u=t-(e+=1)),u=t*Uu(Iu*u),n*Iu/(du(u)*Ou(t)));for(u=1;r>=3;)u*=r-=1;for(;r<0;){if(r>-1e-9)return Su(r,u);u/=r,r+=1}for(;r<2;){if(r<1e-9)return Su(r,u);u/=r,r+=1}return 2===r?u:u*Eu(r-=2)};var Hu=p,Tu=mr,Gu=Sr,Pu=s,ku=N,Mu=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))},xu=.6931471803691238,Lu=1.9082149292705877e-10;var Vu=function(r){var n,t,e,u,f,i,o,a,c,v;if(r<-1||Hu(r))return NaN;if(-1===r)return ku;if(r===Pu)return r;if(0===r)return r;if(v=1,(e=r<0?-r:r)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?r:r-r*r*.5;r>-.2928932188134525&&(v=0,u=r,t=1)}return 0!==v&&(e<9007199254740992?(f=(v=((t=Tu(c=1+r))>>20)-1023)>0?1-(c-r):r-(c-1),f/=c):(v=((t=Tu(c=r))>>20)-1023,f=0),(t&=1048575)<434334?c=Gu(c,1072693248|t):(v+=1,c=Gu(c,1071644672|t),t=1048576-t>>2),u=c-1),n=.5*u*u,0===t?0===u?v*xu+(f+=v*Lu):v*xu-((a=n*(1-.6666666666666666*u))-(v*Lu+f)-u):(a=(o=(i=u/(2+u))*i)*Mu(o),0===v?u-(n-i*(n+a)):v*xu-(n-(i*(n+a)+(v*Lu+f))-u))},Wu=s;var Yu=function(r){return 0===r&&1/r===Wu},qu=p,Cu=N,zu=s;var Bu=function(r,n){var t,e,u,f;if(2===(t=arguments.length))return qu(r)||qu(n)?NaN:r===zu||n===zu?zu:r===n&&0===r?Yu(r)?r:n:r>n?r:n;for(e=Cu,f=0;f<t;f++){if(qu(u=arguments[f])||u===zu)return u;(u>e||u===e&&0===u&&Yu(u))&&(e=u)}return e},Du=se,Ju=p,Ku=N,Qu=s;var Ru=function(r,n){var t,e,u,f;if(2===(t=arguments.length))return Ju(r)||Ju(n)?NaN:r===Ku||n===Ku?Ku:r===n&&0===r?Du(r)?r:n:r<n?r:n;for(e=Qu,f=0;f<t;f++){if(Ju(u=arguments[f])||u===Ku)return u;(u<e||u===e&&0===u&&Du(u))&&(e=u)}return e},Xu=709.782712893384,Zu=-708.3964185322641;function $u(r,n){var t;return r<=0||n<0?NaN:0===n?r>1?0:1===r?1:s:(t=function(r,n){var t,e,u,f,i,o,a;return a=(n-r-10.900511+.5)/(u=r+10.900511-.5),r<1?n<=Zu?ce(r*xr(n)-n-ne(r)):su(n,r)*ce(-n)/Fu(r):(h(a*a*r)<=100&&r>150?(t=r*(Vu(a)-a)+-10.400511*n/u,t=ce(t)):(f=r*xr(n/u),Ru(f,i=r-n)<=Zu||Bu(f,i)>=Xu?(e=i/r,Ru(f,i)/2>Zu&&Bu(f,i)/2<Xu?t=(o=su(n/u,r/2)*ce(i/2))*o:Ru(f,i)/4>Zu&&Bu(f,i)/4<Xu&&n>r?(t=(o=su(n/u,r/4)*ce(i/4))*o,t*=t):t=e>Zu&&e<Xu?su(n*ce(e)/u,r):ce(f+i)):t=su(n/u,r)*ce(i)),t*=Ae(u/2.718281828459045)/ve(r))}(r,n),n<1&&17976931348623157e292*n<t?s:(0===t?(t=r*xr(n)-n-ne(r)-xr(n),t=ce(t)):t/=n,t))}function rf(r,n,t){return p(r)||p(n)||p(t)||n<0||t<=0?NaN:r<0||r===s?0:0===n?0===r?s:0:$u(n,r*t)*t}var nf=function(r){return function(){return r}},tf=s,ef=p;var uf=nf,ff=s,of=p;var af=function(r){return of(r)?uf(NaN):function(n){if(of(n))return NaN;return n===r?ff:0}};function cf(r,n){return p(r)||p(n)||r<0||n<=0?nf(NaN):0===r?af(0):function(t){if(p(t))return NaN;if(t<0||t===s)return 0;return $u(r,t*n)*n}}y((function(r,n){return ef(r)||ef(n)?NaN:r===n?tf:0}),"factory",af),y(rf,"factory",cf);export{rf as default,cf as factory};
//# sourceMappingURL=mod.js.map
