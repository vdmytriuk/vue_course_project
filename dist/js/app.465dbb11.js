(function(t){function e(e){for(var s,r,c=e[0],o=e[1],l=e[2],d=0,p=[];d<c.length;d++)r=c[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&p.push(n[r][0]),n[r]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(e);while(p.length)p.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],s=!0,c=1;c<i.length;c++){var o=i[c];0!==n[o]&&(s=!1)}s&&(a.splice(e--,1),t=r(r.s=i[0]))}return t}var s={},n={app:0},a=[];function r(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=s,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(i,s,function(e){return t[e]}.bind(null,s));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"06ba":function(t,e,i){t.exports=i.p+"img/home_dec2.29e2f9e4.png"},"26c6":function(t,e,i){"use strict";i("fd19")},"33f6":function(t,e,i){t.exports=i.p+"img/gear_2.151470b7.png"},"38cf":function(t,e,i){"use strict";i("3b2b")},"3b2b":function(t,e,i){},"43ee":function(t,e,i){"use strict";i("a8a6")},"4f93":function(t,e,i){t.exports=i.p+"img/home_dec1.2d6f03ce.png"},"4ffd":function(t,e,i){t.exports=i.p+"img/logo.f385568b.png"},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("Header"),i("div",{staticClass:"container"},[i("transition",{attrs:{name:"moveInLeft"}},[i("router-view")],1)],1)],1)},a=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"header"},[i("div",{staticClass:"container"},[t._m(0),i("nav",[i("ul",[i("li",[i("router-link",{attrs:{to:"/"}},[t._v("Головна")])],1),i("li",[i("router-link",{attrs:{to:"/start"}},[t._v("Інсталяція")])],1),i("li",[i("router-link",{attrs:{to:"/about"}},[t._v("Про нас")])],1)])])])])},c=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header__logo"},[s("img",{attrs:{src:i("4ffd"),alt:""}})])}],o={name:"Header"},l=o,u=(i("cfbc"),i("2877")),d=Object(u["a"])(l,r,c,!1,null,"3a98d1d9",null),p=d.exports,v={name:"App",components:{Header:p}},_=v,f=(i("5c0b"),Object(u["a"])(_,n,a,!1,null,null,null)),m=f.exports,g=i("8c4f"),h=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("h1",[t._v("Delta T")]),s("h2",[t._v("Delta T - це додаток для платформи Android! ")]),s("section",{staticClass:"section"},[s("kinesis-container",[s("div",{staticClass:"section__inner"},[s("div",{staticClass:"section__description"},[s("h3",[t._v("Коротко про головне:")]),s("p",[t._v("Смартфон з операційною системою Android можна перетворити на IP-камеру для відеоспостереження за об'єктами за допомогою Wi-Fi-з'єднання. У цьому вам допоможе наш додаток Delta T. Delta T - використовує камеру смартфона і робить знімок коли у полі зору камери з'являється будь-який рух. Всі знімки додаток відправляє в Телеграм користувача.")]),s("Button")],1),s("div",{staticClass:"section__decoration"},[s("kinesis-element",{attrs:{strength:30,axis:"y"}},[s("img",{staticClass:"parallax-img right",attrs:{src:i("06ba")}})]),s("kinesis-element",{attrs:{strength:-30,axis:"y"}},[s("img",{staticClass:"parallax-img left",attrs:{src:i("4f93")}})])],1)])])],1),s("section",{staticClass:"section"},[s("kinesis-container",[s("div",{staticClass:"section__inner"},[s("div",{staticClass:"section__description"},[s("h3",[t._v("Основні переваги:")]),s("p",[t._v("Програма добре оптимізована , що надає змогу використовувати її навіть на технічно слабких пристроях . Задля відправки даних ми не дарма з'язуємо пристрої між Телеграм , адже це дуже популярний та надзвичайно швидкий месенджер сьогодення.")]),s("Button")],1),s("div",{staticClass:"section__decoration"},[s("kinesis-element",{attrs:{strength:100,axis:"x"}},[s("img",{staticClass:"parallax-img right__2",attrs:{src:i("a2f9")}})]),s("kinesis-element",{attrs:{strength:-30,axis:"x"}},[s("img",{staticClass:"parallax-img left",attrs:{src:i("64ee")}})])],1)])])],1)])},b=[],C=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("router-link",{attrs:{to:"/start"}},[i("button",[i("span",{staticClass:"circle",attrs:{"aria-hidden":"true"}},[i("span",{staticClass:"icon arrow"})]),i("span",{staticClass:"button-text"},[t._v("Інсталяція")])])])},x=[],y={name:"button"},w=y,k=(i("26c6"),Object(u["a"])(w,C,x,!1,null,"13aa7ec3",null)),O=k.exports,j={name:"home",components:{Button:O}},T=j,S=(i("ff9a"),Object(u["a"])(T,h,b,!1,null,"b530f39e",null)),$=S.exports,E=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"blog"},[i("h1",[t._v(t._s(t.title))])])},P=[],D={name:"blog",data:function(){return{title:"Blog"}}},M=D,A=Object(u["a"])(M,E,P,!1,null,"0c01873c",null),B=A.exports,H=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"services"},[s("h1",[t._v("Інсталяція")]),s("h2",[t._v("Тут зібрана загальна інформація задля корреткного використаня додатку")]),s("section",{staticClass:"section"},[s("kinesis-container",{staticStyle:{width:"100%"}},[s("div",{staticClass:"section__inner"},[s("div",{staticClass:"section__description"},[s("h3",[t._v("Інструкція:")]),s("ejs-accordion",{attrs:{expandMode:"Single"}},[s("div",[s("div",[s("div",[t._v("Завантаження додатку:")])]),s("div",[s("div",[s("ul",{staticClass:"accordion__list"},[s("li",[t._v("Завантажте додаток з нашого сайту по посиланню.")]),s("li",[t._v("Встановіть додаток на свій смартфон.")])])])])]),s("div",[s("div",[s("div",[t._v("Прив’язка програми до акаунту Telegram:")])]),s("div",[s("div",[s("ul",{staticClass:"accordion__list"},[s("li",[t._v("Відкрийте додаток. На головному екрані потрібно ввести свій номер телефону до якого прив’язаний акаунт Telegram. Обов’язково потрібно вказувати код країни (для України 380).")]),s("li",[t._v("Після введення номера потрібно ввести код підтвердження від Telegram, після чого програма успішно з’єднається з Вашим акаунтом.")])])])])]),s("div",[s("div",[s("div",[t._v("Користування програмую:")])]),s("div",[s("div",[s("ul",{staticClass:"accordion__list"},[s("li",[t._v("Прив’язавши програму до акаунту Telegram Вас зустрічає головна сторінка додатку. Натиснувши кнопку Power програма відразу починає свою роботу. ")]),s("li",[t._v("З головного сторінки Ви можете перейти до налаштувань додатку.")])])])])]),s("div",[s("div",[s("div",[t._v("Рекомендації щодо використання додатку:")])]),s("div",[s("div",[s("ul",{staticClass:"accordion__list"},[s("li",[t._v("Додаток може працювати у фоні, тому коли у відеоспостереженні більше немає потреби бажано вимикати додаток, щоб не використовувати заряд акумулятора. ")]),s("li",[t._v("нажимати на кнопку необхідно коли смартфон вже встановлено і зафіксовано в місці де буде вестися спостереження, так як камера буде фіксувати будь-які зміни в полі видимості камери.")])])])])])])],1),s("div",{staticClass:"section__decoration"},[s("kinesis-element",{attrs:{strength:5,type:"depth"}},[s("img",{staticClass:"parallax-img instruction",attrs:{src:i("c490")}})])],1)])])],1),s("section",{staticClass:"section"},[s("kinesis-container",{staticStyle:{width:"100%"}},[s("div",{staticClass:"section__inner"},[s("div",{staticClass:"section__description"},[s("h3",[t._v("Системні вимоги:")]),s("ul",[s("li",[t._v("Версія Android: 4.0.")]),s("li",[t._v("Мінімальний об’єм ОЗУ: 512мб.")]),s("li",[t._v("Об’єм ПЗУ: 30мб.")]),s("li",[t._v("Стабільне інтернет з’єднання.")]),s("li",[t._v("Надання всіх необхідних дозволів.")])])]),s("div",{staticClass:"section__decoration"},[s("kinesis-element",{attrs:{strength:5,type:"depth"}},[s("img",{staticClass:"parallax-img gear__1",attrs:{src:i("ff68")}})]),s("kinesis-element",{attrs:{strength:10,type:"depth_inv"}},[s("img",{staticClass:"parallax-img gear__2",attrs:{src:i("33f6")}})])],1)])])],1),s("section",{staticClass:"section"},[s("kinesis-container",{staticStyle:{width:"100%"}},[s("div",{staticClass:"section__inner"},[s("div",{staticClass:"section__description"},[s("h3",[t._v("Налаштування додатку:")]),s("ul",[s("li",[t._v("Вибрати положення камери.")]),s("li",[t._v("Вибрати розмір зображення.")]),s("li",[t._v("Вибрати ISO (чутливість матриці камери).")]),s("li",[t._v("Вибрати баланс білого.")]),s("li",[t._v("Вибрати періодичність надсилання фото в Telegram.")])])]),s("div",{staticClass:"section__decoration"},[s("kinesis-element",{attrs:{strength:5,type:"depth"}},[s("img",{staticClass:"parallax-img",attrs:{src:i("b738")}})])],1)])])],1),s("h2",[t._v("Завантажити")]),s("section",{staticClass:"section",staticStyle:{height:"auto"}},[s("Download")],1)])},I=[],J=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},F=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"download"},[i("div",{staticClass:"download__button"},[i("label",{attrs:{for:"ms-download"}},[i("div",{staticClass:"ms-content"},[i("div",{staticClass:"ms-content-inside"},[i("input",{attrs:{type:"checkbox",id:"ms-download"}}),i("div",{staticClass:"ms-line-down-container"},[i("div",{staticClass:"ms-line-down"})]),i("div",{staticClass:"ms-line-point"})])])])]),i("p",[t._v("Delta T v5.0.41 stable.apk")])])}],L={name:"download"},W=L,q=(i("38cf"),Object(u["a"])(W,J,F,!1,null,"0cee6385",null)),z=q.exports,G={name:"blog",components:{Download:z}},K=G,N=(i("43ee"),Object(u["a"])(K,H,I,!1,null,"5b4eb815",null)),Q=N.exports;s["a"].use(g["a"]);var R=new g["a"]({mode:"history",routes:[{path:"/",name:"home",component:$},{path:"/home",name:"home",component:$},{path:"/about",name:"about",component:B},{path:"/start",name:"start",component:Q}]}),U=i("94b3"),V=i("5673");s["a"].use(V["a"]),s["a"].use(U["a"]),s["a"].config.productionTip=!1,new s["a"]({router:R,render:function(t){return t(m)}}).$mount("#app")},"5ba5":function(t,e,i){},"5c0b":function(t,e,i){"use strict";i("9c0c")},"64ee":function(t,e,i){t.exports=i.p+"img/android.5357063e.png"},"9c0c":function(t,e,i){},a2f9:function(t,e,i){t.exports=i.p+"img/telegram.312af923.png"},a8a6:function(t,e,i){},b738:function(t,e,i){t.exports=i.p+"img/key.e943b835.png"},c490:function(t,e,i){t.exports=i.p+"img/instruction.265085ef.png"},cfbc:function(t,e,i){"use strict";i("5ba5")},d574:function(t,e,i){},fd19:function(t,e,i){},ff68:function(t,e,i){t.exports=i.p+"img/gear_1.06135996.png"},ff9a:function(t,e,i){"use strict";i("d574")}});
//# sourceMappingURL=app.465dbb11.js.map