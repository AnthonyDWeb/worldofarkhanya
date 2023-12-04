(()=>{var e={8730:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>re});var r=n(5861),i=n(9439),a=n(5004),o=n(7492),l=n(3426),s=n(9212),c=n(5222),u=n(4045),d=n(4942),f=n(2629);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var p=(0,a.createContext)({}),g=function(e){var t=(0,a.useState)({name:""}),n=(0,i.default)(t,2),r=n[0],o=n[1],l=(0,a.useState)({name:""}),s=(0,i.default)(l,2),c=s[0],u=s[1],g=(0,a.useState)(!1),m=(0,i.default)(g,2),y=m[0],b=m[1];(0,a.useEffect)((function(){"Menu"!==r.name&&setTimeout((function(){return b(!0)}),"Menu"===c.name?0:300)}),[r]);var v={page:r,setPage:o,lastPage:c,setLastPage:u,parchmentDisplay:y,setParchmentDisplay:b,updatePage:function(e,t){b(!1),u(r),o({name:e,data:t&&t})},getBack:function(){u(r),o(c)}};return(0,f.jsx)(p.Provider,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,d.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({value:v},e))},m=function(){return a.useContext(p)},y=n(1054),b=n(2010),v=n(9555);function j(){var e=(0,a.useState)({width:(0,v.default)().width,height:(0,v.default)().height}),t=(0,i.default)(e,2),n=t[0],r=t[1],o=n.height,l=n.width<764,s=n.width>=764&&n.width<1024,c=n.width>=1024,u={screenSize:n,height:o,isMobile:l,isTablet:s,isDesktop:c,device:l?"mobile":s?"tablet":c&&"desktop"};return(0,a.useEffect)((function(){var e,t=function(){return r({width:(0,v.default)().width,height:(0,v.default)().height})};return null==(e=window)||null==e.addEventListener||e.addEventListener("resize",t),function(){var e;return null==(e=window)||null==e.removeEventListener?void 0:e.removeEventListener("resize",t)}}),[]),u}function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var w=(0,a.createContext)({}),O=function(e){var t=j().device,n="mobile"===t?15:25,r=b.default.create({background:{width:"100%",height:"100%",justifyContent:"space-between"},maintitle:{fontFamily:"imf",fontSize:20},title:{fontFamily:"cookie",fontSize:"mobile"===t?40:55,textAlign:"center",textDecorationLine:"underline"},text:{fontFamily:"cookie",fontSize:20},navigation:{width:"100%",display:"flex",flexDirection:"row",alignItems:"flex-start",justifyContent:"mobile"===t?"center":"space-around"},navigationButton:{marginHorizontal:15,marginVertical:"mobile"===t?5:15},navigationBackgroundButton:{padding:.7,borderRadius:n},sampleButton:{position:"relative",justifyContent:"center",borderColor:"black",borderWidth:.7,borderRadius:n},sampleCalc:{width:"100%",height:"100%",alignSelf:"center",position:"absolute",borderRadius:n},sampleText:{fontFamily:"cookie",fontSize:"mobile"===t?22:35,paddingVertical:"mobile"!==t?5:0,paddingHorizontal:"mobile"===t?5:20},menuButton:{top:5,right:0,zIndex:20,position:"absolute"},menuButtonImage:{margin:3,width:"mobile"===t?20:30,height:"mobile"===t?20:30},parchment:{paddingBottom:5,paddingHorizontal:15,paddingTop:"mobile"===t?20:40},parchmentpaper:{flex:1,position:"relative"},parchmentRoll:{height:10,borderRadius:10,alignSelf:"center",position:"absolute"},parchmentRollBorder:{position:"absolute",top:-5,width:10,height:20,borderRadius:10},parchmentCacl:{position:"absolute",height:"15%",width:"100%",zIndex:0},scrollpage:{paddingHorizontal:10}});return(0,f.jsx)(w.Provider,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){(0,d.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({value:{styles:r}},e))},P=function(){return a.useContext(w)},k=n(6434);function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){var t=P().styles,r=n(4940);return(0,f.jsx)(k.default,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){(0,d.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({source:r,style:t.background},e))}function D(e){var t=e.children;return(0,f.jsx)(T,{children:t})}function B(){P().styles;return(0,f.jsx)(D,{children:(0,f.jsx)(y.default,{children:"Authentification"})})}var C=n(9385);function E(){var e=P().styles;return(0,f.jsx)(C.default,{children:(0,f.jsx)(y.default,{style:e.title,children:"Cr\xe9ation"})})}function z(){var e=P().styles;return(0,f.jsx)(C.default,{children:(0,f.jsx)(y.default,{style:e.title,children:"Biblioth\xe8que"})})}function _(){var e=P().styles;return(0,f.jsx)(C.default,{children:(0,f.jsx)(y.default,{style:e.title,children:"Profil"})})}var L=n(3287),R=n(6184),M=n(258),A=n(7994),I=n(3719),N=n(1236),F=n(2442),H=n(7375);function V(e){var t=e.pos,n=P().styles,r=j().screenSize.width,i=["#6c3f02","#d3913a","#a35f04","#a35f04","#6c3f02"],a=[n.parchmentRoll,(0,d.default)({width:r},t,-10)],o=[n.parchmentRollBorder,{left:5}],l=[n.parchmentRollBorder,{right:5}];return(0,f.jsxs)(H.LinearGradient,{colors:i,style:a,children:[(0,f.jsx)(H.LinearGradient,{colors:i,style:o}),(0,f.jsx)(H.LinearGradient,{colors:i,style:l})]})}var G=n(6264),J=n(1318);function q(e){var t=e.children,r=(e.rad,e.hide),i=P().styles,a=m().parchmentDisplay,o=[i.sampleButton,{opacity:a?1:.5}],l=n(7150),s=[i.sampleCalc,{top:0}],c=[i.sampleCalc,{bottom:0,transform:[{rotate:"180deg"}]}];return(0,f.jsxs)(H.LinearGradient,{colors:["#6c3f02","#9f6913","#fbcd76","#9f6913","#6c3f02"],style:o,children:[!r&&(0,f.jsx)(L.default,{source:l,style:s}),t,!r&&(0,f.jsx)(L.default,{source:l,style:c})]})}function U(){var e=m().updatePage,t=P().styles,r=(0,J.useNavigation)(),i=n(5694);return(0,f.jsx)(G.default,{style:t.menuButton,onPress:function(){e("Menu"),setTimeout((function(){return r.navigate("Menu")}),500)},children:(0,f.jsx)(q,{rad:50,hide:!0,children:(0,f.jsx)(L.default,{source:i,style:t.menuButtonImage})})})}var W={code:"function anonymous(){const{withTiming,height,config}=this._closure;return{height:withTiming(height.value,config)};}",location:"D:\\Code\\projet\\Javascript\\En cours\\JDR\\worldofarkhanya\\components\\parchment\\index.tsx"},K={code:"function anonymous(){const{withTiming,opacity,config,padding}=this._closure;return{opacity:withTiming(opacity.value,config),paddingTop:withTiming(padding.value,config),paddingBottom:withTiming(padding.value,config)};}",location:"D:\\Code\\projet\\Javascript\\En cours\\JDR\\worldofarkhanya\\components\\parchment\\index.tsx"};function Q(e){var t=e.children,r=m().parchmentDisplay,i=P().styles,o=j(),l=o.screenSize,s=o.isMobile,c=o.isTablet,u=s?l.height:c?.95*l.height:.93*l.height,d=n(6490),h=n(7150),p=(0,R.useSharedValue)(0),g=(0,R.useSharedValue)(0),y=(0,R.useSharedValue)(0),b={duration:300,easing:M.Easing.linear},v=(0,A.useAnimatedStyle)(function(){var e=function(){return{height:(0,I.withTiming)(p.value,b)}};return e._closure={withTiming:I.withTiming,height:p,config:b},e.__initData=W,e.__workletHash=0xd915767c048,e}()),x=(0,A.useAnimatedStyle)(function(){var e=function(){return{opacity:(0,I.withTiming)(g.value,b),paddingTop:(0,I.withTiming)(y.value,b),paddingBottom:(0,I.withTiming)(y.value,b)}};return e._closure={withTiming:I.withTiming,opacity:g,config:b,padding:y},e.__initData=K,e.__workletHash=4290579573207,e}()),w=[i.parchment,{height:u-45},v],O=[i.scrollpage,x],S=[i.parchmentCacl,{top:0}],T=[i.parchmentCacl,{bottom:0,transform:[{rotate:"180deg"}]}];return(0,a.useEffect)((function(){p.value=r?u-45:0,g.value=r?1:0,y.value=r?10:0}),[r]),(0,f.jsx)(N.default,{style:w,children:(0,f.jsxs)(k.default,{source:d,style:i.parchmentpaper,children:[(0,f.jsx)(V,{pos:"top"}),(0,f.jsx)(L.default,{source:h,style:S}),(0,f.jsxs)(F.default,{style:O,showsVerticalScrollIndicator:!1,children:[(0,f.jsx)(U,{}),r&&t]}),(0,f.jsx)(L.default,{source:h,style:T}),(0,f.jsx)(V,{pos:"bottom"})]})})}function X(e){var t=e.title,n=e.label,r=P().styles,i=m(),a=i.parchmentDisplay,o=i.updatePage;return(0,f.jsx)(G.default,{onPress:function(){return a&&o(n)},style:r.navigationButton,children:(0,f.jsx)(H.LinearGradient,{colors:["#6c3f02","#d3913a","#a35f04","#a35f04","#6c3f02"],style:r.navigationBackgroundButton,children:(0,f.jsx)(q,{children:(0,f.jsx)(y.default,{style:[r.sampleText],children:t})})})})}function Y(){var e=P().styles;return(0,f.jsxs)(C.default,{style:e.navigation,children:[(0,f.jsx)(X,{title:"Cr\xe9ation",label:"Creation"}),(0,f.jsx)(X,{title:"Biblioth\xe8que",label:"Library"}),(0,f.jsx)(X,{title:"Profil",label:"Profile"})]})}function Z(e){var t=e.children;return(0,f.jsxs)(T,{children:[(0,f.jsx)(Q,{children:t}),(0,f.jsx)(Y,{})]})}function $(){var e=m().page;return""===e.name?(0,f.jsx)(B,{}):(0,f.jsx)(Z,{children:"Creation"===e.name?(0,f.jsx)(E,{}):"Library"===e.name?(0,f.jsx)(z,{}):"Profile"===e.name&&(0,f.jsx)(_,{})})}function ee(){var e=m().getBack,t=P().styles,n=(0,J.useNavigation)();return(0,f.jsx)(D,{children:(0,f.jsx)(G.default,{onPress:function(){e(),n.navigate("Navigation")},children:(0,f.jsx)(y.default,{style:t.title,children:"Menu"})})})}function te(){return(0,f.jsx)(C.default,{children:(0,f.jsx)(y.default,{children:"Loading..."})})}function ne(){var e=(0,u.default)(),t=e.Navigator,r=e.Screen,i={screens:{Navigation:"worldofarkhanya/",Authentification:"worldofarkhanya/auth",Menu:"worldofarkhanya/menu",Privacy:"worldofarkhanya/privacy"}},a={prefixes:[s.createURL("/worldofarkhanya"),"https://anthonydweb.github.io/worldofarkhanya/"],config:i};return(0,f.jsx)(c.default,{linking:a,fallback:(0,f.jsx)(te,{}),children:(0,f.jsxs)(t,{initialRouteName:"Navigation",screenOptions:{headerTitleAlign:"center",headerTitleStyle:{fontSize:30},headerShown:!1,headerBackImageSource:n(4940)},children:[(0,f.jsx)(r,{name:"Navigation",component:$}),(0,f.jsx)(r,{name:"Authentification",component:B}),(0,f.jsx)(r,{name:"Menu",component:ee})]})})}function re(){var e=(0,a.useState)(!1),t=(0,i.default)(e,2),s=t[0],c=t[1];(0,a.useEffect)((function(){u()}),[]);var u=function(){var e=(0,r.default)((function*(){yield(0,o.loadAsync)({imf:n(7335),cookie:n(2697)}).then((function(){return c(!0)})).catch((function(e){console.log("error",e)}))}));return function(){return e.apply(this,arguments)}}();return s?(0,f.jsx)(g,{children:(0,f.jsxs)(O,{children:[(0,f.jsx)(l.default,{translucent:!0,hidden:!0}),(0,f.jsx)(ne,{})]})}):null}},2697:(e,t,n)=>{"use strict";e.exports=n.p+"static/media/Cookie.063fc3ec8398f168926a.ttf"},7335:(e,t,n)=>{"use strict";e.exports=n.p+"static/media/IMF.8e2b617ab67e81b80324.ttf"},4940:(e,t,n)=>{"use strict";e.exports=n.p+"static/media/background.d8ffb62567b9d0a96cda.jpg"},5694:(e,t,n)=>{"use strict";e.exports=n.p+"static/media/parameter.46223717b41bfbf9eed8.png"},7150:(e,t,n)=>{"use strict";e.exports=n.p+"static/media/calc-parchment.70eb7c244ee206f35cc0.png"},6490:(e,t,n)=>{"use strict";e.exports=n.p+"static/media/parchment.3b099245d29ee76e1255.jpg"},4654:()=>{}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,(()=>{var e=[];n.O=(t,r,i,a)=>{if(!r){var o=1/0;for(u=0;u<e.length;u++){for(var[r,i,a]=e[u],l=!0,s=0;s<r.length;s++)(!1&a||o>=a)&&Object.keys(n.O).every((e=>n.O[e](r[s])))?r.splice(s--,1):(l=!1,a<o&&(o=a));if(l){e.splice(u--,1);var c=i();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,i,a]}})(),n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/worldofarkhanya/",(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var i,a,[o,l,s]=r,c=0;if(o.some((t=>0!==e[t]))){for(i in l)n.o(l,i)&&(n.m[i]=l[i]);if(s)var u=s(n)}for(t&&t(r);c<o.length;c++)a=o[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},r=self.webpackChunkweb=self.webpackChunkweb||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n.O(void 0,[123],(()=>n(6271)));r=n.O(r)})();
//# sourceMappingURL=main.eeb0c042.js.map