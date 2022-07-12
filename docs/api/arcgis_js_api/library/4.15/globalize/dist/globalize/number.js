//>>built
(function(I,f){"function"===typeof define&&define.amd?define(["cldr","../globalize","cldr/event","cldr/supplemental"],f):"object"===typeof exports?module.exports=f(require("cldrjs"),require("../globalize")):f(I.Cldr,I.Globalize)})(this,function(I,f){var V=f._createError,w=f._regexpEscape,N=f._runtimeBind,E=f._stringPad,F=f._validateCldr,O=f._validateDefaultLocale,G=f._validateParameterPresence,B=f._validateParameterRange,P=f._validateParameterType,Q=f._validateParameterTypePlainObject,r=function(a){return V("E_UNSUPPORTED",
"Unsupported {feature}.",{feature:a})},J=function(a,b){P(a,b,void 0===a||"number"===typeof a,"Number")},K=function(a,b){P(a,b,void 0===a||"string"===typeof a,"a string")},W=/^([^0]*)(0+)([^0]*)$/,X=function(a,b,c){var d=b,e="",x=c?!0:!1;a=String(a).split(".");for(b=a[0].length;b>d;)e=a[0].slice(b-d,b)+(e.length?",":"")+e,b-=d,x&&(d=c,x=!1);a[0]=a[0].slice(0,b)+(e.length?",":"")+e;return a.join(".")},Y=function(a,b,c,d,e,x){a=d?x?e(a,x):e(a,{exponent:-d}):e(a);a=String(a);d&&/e-/.test(a)&&(a=(+a).toFixed(d).replace(/0+$/,
"").replace(/\.$/,""));c&&(a=a.split("."),a[1]=E(a[1]||"",c,!0),a=a.join("."));b&&(a=a.split("."),a[0]=E(a[0],b),a=a.join("."));return a},Z=function(a,b,c,d){var e;b>c&&(c=b);e=d(a,{exponent:Math.ceil(Math.log(Math.abs(a))/Math.log(10))-b});a=d(a,{exponent:Math.ceil(Math.log(Math.abs(a))/Math.log(10))-c});a=(+(+e===+a?e:a)).toString(10);if(/e/.test(a))throw r({feature:"integers out of (1e21, 1e-7)"});0<b-a.replace(/^0+|\./g,"").length&&(a=a.split("."),a[1]=E(a[1]||"",b-a[0].replace(/^0+/,"").length,
!0),a=a.join("."));return a},aa=/^(('([^']|'')*'|[^*#@0,.E])*)(\*.)?((([#,]*[0,]*0+)(\.0*[0-9]*#*)?)|([#,]*@+#*))(E\+?0+)?(('[^']+'|''|[^*#@0,.E])*)$/,L=function(a){return"''"!==a[0]+a[a.length-1]?a:"''"===a?"":a.replace(/''/g,"'").slice(1,-1)},ba=function(a,b,c){var d,e,x,f,g,k,n,p,t,u,l,v,y,q,A;k=b[2];g=b[3];x=b[4];n=b[5];f=b[6];y=b[7];u=b[8];q=b[9];v=b[15];e=b[16];p=b[17];A=b[18];t=b[19];d=b[20];if(isNaN(a))return p;0>a?(l=b[12],p=b[13],b=b[14]):(l=b[11],p=b[0],b=b[10]);if(!isFinite(a))return p+
e+b;-1!==l.indexOf("%")?a*=100:-1!==l.indexOf("\u2030")&&(a*=1E3);var m,z;d&&(z=Math.abs(Math.floor(a)).toString().length-1,z=Math.min(z,d.maxExponent),3<=z&&(m=d[z]&&d[z].other),"0"===m?m=null:m&&(e=m.split("0").length-1,a/=Math.pow(10,z-(e-1))));a=isNaN(n*f)?Y(a,k,g,x,v,y):Z(a,n,f,v);d&&m&&(c=c?c(+a):"other",m=d[z][c]||m,d=m.match(W),p+=d[1],b=d[3]+b);a=a.replace(/^-/,"");u&&(a=X(a,u,q));a=p+a+b;return a.replace(/('([^']|'')+'|'')|./g,function(a,b){if(b)return L(b);a=a.replace(/[.,\-+E%\u2030]/,
function(a){return A[a]});t&&(a=a.replace(/[0-9]/,function(a){return t[+a]}));return a})},ca=function(a,b){return function(c){G(c,"value");J(c,"value");return ba(c,a,b)}},C=function(a){var b=a.attributes["u-nu"];return b?("traditio"===b&&(b="traditional"),-1!==["native","traditional","finance"].indexOf(b)?a.main(["numbers/otherNumberingSystems",b]):b):a.main("numbers/defaultNumberingSystem")},da=function(a,b){var c=0,d=b.main(["numbers/decimalFormats-numberSystem-"+C(b),a,"decimalFormat"]),d=Object.keys(d).reduce(function(a,
b){var e=b.split("0").length-1,f=b.split("-")[2];a[e]=a[e]||{};a[e][f]=d[b];c=Math.max(e,c);return a},{});d.maxExponent=c;return d},R=function(a){var b=C(a);if("latn"!==b){a=a.supplemental(["numberingSystems",b]);if("numeric"!==a._type)throw r("`"+a._type+"` numbering system");return a._digits}},S=function(a){var b,c,d,e,f,h,g,k,n,p,t,u,l,v;a=a.match(aa);if(!a)throw Error("Invalid pattern: "+a);n=a[1];k=a[4];d=a[5];l=a[9];b=a[10];v=a[11];l?l.replace(/(@+)(#*)/,function(a,b,c){g=b.length;e=g+c.length}):
(c=a[8],a=a[7],c?(c.replace(/[0-9]+/,function(a){f=a}),f?(t=+("0."+f),f=f.length):f=0,c=c.length-1):c=f=0,a.replace(/0+$/,function(a){h=a.length}));if(b)throw r({feature:"scientific notation (not implemented)"});if(k)throw r({feature:"padding (not implemented)"});-1!==(b=d.lastIndexOf(","))&&(a=d.split(".")[0],p=a.length-b-1,-1!==(a=d.lastIndexOf(",",b-1))&&(u=b-1-a));return[n,k,h,f,c,g,e,t,p,u,v]},D=function(a,b){return b.main(["numbers/symbols-numberSystem-"+C(b),a])},H={".":"decimal",",":"group",
"%":"percentSign","+":"plusSign","-":"minusSign",E:"exponential","\u2030":"perMille"},ea=function(a){var b,c={};for(b in H)c[b]=D(H[b],a);return c},fa=function(a){return isNaN(a)?NaN:Math[0>a?"ceil":"floor"](a)},ga=function(a){a=a||"round";a="truncate"===a?fa:Math[a];return function(b,c){var d;b=+b;if(isNaN(b))return NaN;if("object"===typeof c&&c.exponent){c=+c.exponent;d=1;if(0===c)return a(b);if("number"!==typeof c||0!==c%1)return NaN}else{d=+c||1;if(1===d)return a(b);if(isNaN(d))return NaN;d=d.toExponential().split("e");
c=+d[1];d=+d[0]}b=b.toString().split("e");b[0]=+b[0]/d;b[1]=b[1]?+b[1]-c:-c;b=a(+(b[0]+"e"+b[1]));b=b.toString().split("e");b[0]=+b[0]*d;b[1]=b[1]?+b[1]+c:c;return+(b[0]+"e"+b[1])}},T=function(a,b,c){function d(a,b){a in c&&(g[b]=c[a])}var e,f,h,g;c=c||{};a=a.split(";");f=a[0];e=S(a[1]||"-"+f);a=e[0];e=e[10];h=ga(c.round);h.generatorString=function(){return"numberRound("+(c.round?'"'+c.round+'"':"")+")"};g=S(f).concat([f,a+f+e,a,e,h,D("infinity",b),D("nan",b),ea(b),R(b)]);c.compact&&(g[2]=e[2]=1,
g[3]=e[3]=0,g[4]=e[4]=0,g[5]=e[5]=g[6]=e[6]=void 0,g[20]=da(c.compact,b));d("minimumIntegerDigits",2);d("minimumFractionDigits",3);d("maximumFractionDigits",4);d("minimumSignificantDigits",5);d("maximumSignificantDigits",6);!1===c.useGrouping&&(g[8]=null);"minimumFractionDigits"in c&&!("maximumFractionDigits"in c)?g[4]=Math.max(g[3],g[4]):!("minimumFractionDigits"in c)&&"maximumFractionDigits"in c&&(g[3]=Math.min(g[3],g[4]));return g},ha=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804\uDCBD|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/g,
ia=/[\-\u058A\u05BE\u1400\u1806\u2010-\u2015\u2E17\u2E1A\u2E3A\u2E3B\u2E40\u301C\u3030\u30A0\uFE31\uFE32\uFE58\uFE63\uFF0D\u2212]/g,ja=/[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/g,q=function(a){return a.replace(ha,"").replace(ia,"-").replace(ja," ")},ka=function(a,b){function c(a){return function(b){b=b.split("").map(function(a){return e[a]||d[a]||a}).join("");switch(a){case "infinity":h=Infinity;break;case "nan":h=NaN;break;case "number":b=b.replace(/,/g,"");h=+b;break;case "prefix":case "negativePrefix":g=
b;break;case "suffix":k=b;break;case "negativeSuffix":k=b;f=!0;break;default:throw Error("Internal error");}return""}}var d,e,f,h,g,k,n;e=b[0];d=b[1]||{};n=b[2];a=q(a);if(!function(a,b){return b.some(function(b){var d=a;return b.every(function(a){if(null===d.match(n[a]))return!1;d=d.replace(n[a],c(a));return!0})&&!d.length})}(a,[["nan"],["prefix","infinity","suffix"],["prefix","number","suffix"],["negativePrefix","infinity","negativeSuffix"],["negativePrefix","number","negativeSuffix"]])||isNaN(h))return NaN;
a=""+g+k;-1!==a.indexOf("%")?h/=100:-1!==a.indexOf("\u2030")&&(h/=1E3);f&&(h*=-1);return h},la=function(a){return function(b){G(b,"value");K(b,"value");return ka(b,a)}},ma=function(a){var b,c={};for(b in H)c[D(H[b],a)]=b;return c},U=function(a,b){return Object.keys(a).map(function(c){return b([c,a[c]])}).reduce(function(a,b){a[b[0]]=b[1];return a},{})},na=function(a,b,c){var d,e,f,h,g,k,n,p,t,u,l,v,y,r,A,m;e=T(a,b,c);v=q(e[0]);c=e[4];n=e[5];k=e[6];y=e[8];r=e[9];A=q(e[10]);t=q(e[13]);u=q(e[14]);a=
q(e[16]);p=q(e[17]);m=U(e[18],function(a){return[a[0],q(a[1])]});d=e[19];g=U(ma(b),function(a){return[q(a[0]),a[1]]});e=d?"["+d+"]":"\\d";f=w(m[","]);b=w(m["."]);d&&(h=d.split("").reduce(function(a,b,c){a[b]=String(c);return a},{}));d=[v,A,t,u].map(function(a){return a.replace(/('([^']|'')+'|'')|./g,function(a,b){return b?L(b):a=a.replace(/[\-+E%\u2030]/,function(a){return m[a]})})});v=d[0];A=d[1];t=d[2];u=d[3];l=e+"+";y&&(l="("+(r?e+"{1,"+r+"}(("+f+e+"{"+r+"})*("+f+e+"{"+y+"}))":e+"{1,"+y+"}("+f+
e+"{"+y+"})+")+"|"+l+")");if(!isNaN(n*k)||c)d=b+e+"+",l="("+(l+"("+d+"|"+b+")?|("+l+")?"+d)+")";return[g,h,{infinity:new RegExp("^"+w(a)),nan:new RegExp("^"+w(p)),negativePrefix:new RegExp("^"+w(t)),negativeSuffix:new RegExp("^"+w(u)),number:new RegExp("^"+l),prefix:new RegExp("^"+w(v)),suffix:new RegExp("^"+w(A))}]},M=function(a,b){if("decimal"!==a&&"percent"!==a)throw Error("Invalid style");return b.main(["numbers",a+"Formats-numberSystem-"+C(b),"standard"])};f.numberFormatter=f.prototype.numberFormatter=
function(a){var b,c,d,e;Q(a,"options");a=a||{};c=this.cldr;b=[a];O(c);c.on("get",F);d=a.raw?a.raw:M(a.style||"decimal",c);e=T(d,c,a);d=[e];c.off("get",F);var f=e[2],h=e[3],g=e[4],k=e[5];e=e[6];if(isNaN(k*e))if(isNaN(k)&&isNaN(e))B(f,"minimumIntegerDigits",1,21),B(h,"minimumFractionDigits",0,20),B(g,"maximumFractionDigits",h,20);else throw Error("Neither or both the minimum and maximum significant digits must be present");else B(k,"minimumSignificantDigits",1,21),B(e,"maximumSignificantDigits",k,21);
a.compact&&d.push(this.pluralGenerator());a=ca.apply(null,d);N(b,c,a,d);return a};f.numberParser=f.prototype.numberParser=function(a){var b,c,d;Q(a,"options");a=a||{};c=this.cldr;b=[a];O(c);if(a.compact)throw r({feature:"compact number parsing (not implemented)"});c.on("get",F);d=a.raw?a.raw:M(a.style||"decimal",c);a=na(d,c,a);c.off("get",F);d=la(a);N(b,c,d,[a]);return d};f.formatNumber=f.prototype.formatNumber=function(a,b){G(a,"value");J(a,"value");return this.numberFormatter(b)(a)};f.parseNumber=
f.prototype.parseNumber=function(a,b){G(a,"value");K(a,"value");return this.numberParser(b)(a)};f._createErrorUnsupportedFeature=r;f._numberNumberingSystem=C;f._numberNumberingSystemDigitsMap=R;f._numberPattern=M;f._numberSymbol=D;f._looseMatching=q;f._removeLiteralQuotes=L;f._stringPad=E;f._validateParameterTypeNumber=J;f._validateParameterTypeString=K;return f});