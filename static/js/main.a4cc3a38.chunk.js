(this["webpackJsonpoffers-matcher"]=this["webpackJsonpoffers-matcher"]||[]).push([[0],{68:function(e,t,a){e.exports=a(80)},73:function(e,t,a){},74:function(e,t,a){},80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),i=a.n(l),o=(a(73),a(74),a(121)),c=a(124),m=a(126),s=a(43),u=a(128),d=a(127),p=a(58),f=a.n(p),h=a(18);var g=Object(o.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1,textAlign:"left"},weather:{display:"flex",alignItems:"center"}}}));function b(e){var t=e.weatherApi,a=e.title;b.testId="app-header-test";var l=g(),i=function(e){var t=Object(n.useState)(),a=Object(h.a)(t,2),r=a[0],l=a[1];return Object(n.useEffect)((function(){fetch(e).then((function(e){return e.json()})).then((function(e){e.name&&l({city:e.name,tempreature:Math.round(e.main.temp),icon:e.weather[0].icon})})).catch((function(){return l(!1)}))}),[]),r}(t);return r.a.createElement("div",{className:l.root,"data-testid":b.testId},r.a.createElement(c.a,{position:"static"},r.a.createElement(m.a,null,r.a.createElement(d.a,{edge:"start",className:l.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(f.a,{fontSize:"large"})),r.a.createElement(s.a,{variant:"h5",className:l.title},a),i?r.a.createElement("div",{className:l.weather},r.a.createElement(u.a,{color:"inherit",href:"https://openweathermap.org/city/2643743"},r.a.createElement("span",null," ",i.city)),!!i.icon&&r.a.createElement("img",{src:"http://openweathermap.org/img/wn/".concat(i.icon,".png"),alt:"weather-icon"}),r.a.createElement("span",null," ",i.tempreature," ","\xb0C")):r.a.createElement("span",null,"Loading ..."))))}var E=a(59),v=a(81),y=a(136),w=a(138),j=a(129);function O(e){var t=e.source,a=e.activeId,n=e.onClick;return O.testId="tabs-bar-test",r.a.createElement(w.a,{"data-testid":O.testId,value:a,indicatorColor:"secondary",textColor:"secondary",onChange:n,"aria-label":"disabled tabs example"},t.map((function(e){return r.a.createElement(j.a,{label:e.label,key:e.label})})))}var x=a(137),I=a(139),S=a(131),N=a(130),C=Object(o.a)((function(e){return{root:{margin:e.spacing(4),display:"flex",justifyContent:"center",flexDirection:"column",padding:e.spacing(4)},inputField:{margin:e.spacing(2),maxWidth:496,minWidth:296,alignSelf:"center"},submitButton:{margin:e.spacing(2),maxWidth:496,minWidth:296,alignSelf:"center"},alert:{margin:24}}}));function k(e){var t=e.offerValue,a=e.onInput,n=e.fieldLabel,l=e.fieldValue,i=e.onSubmit,o=e.title,c=C();return k.withoutValueTestId="offer-input-test",k.withValueTestId="offer-input-test-value",t?r.a.createElement("div",{className:c.alert,"data-testid":k.withValueTestId},r.a.createElement(I.a,{severity:"info"},r.a.createElement(N.a,null,r.a.createElement("strong",null,"Value entered")),"The entered value has beed saved for this user."," ")):r.a.createElement("div",{className:c.root,"data-testid":k.withoutValueTestId},r.a.createElement(s.a,{variant:"h6",align:"center"},o),r.a.createElement(x.a,{className:c.inputField,id:"standard-basic",type:"number",label:n,variant:"outlined",onChange:a,value:l,InputProps:{startAdornment:r.a.createElement(S.a,{position:"start"},"$ "),inputProps:{min:0,max:9999999999},placeholder:"enter value grater than 0"}}),r.a.createElement(u.a,{className:c.submitButton,variant:"contained",color:"primary",onClick:i},"Submit"))}var W=a(141),V=a(135),A=a(132),B=a(133),T=a(134),H=Object(o.a)((function(e){return{root:{margin:e.spacing(4),display:"flex",justifyContent:"center",flexDirection:"column",padding:e.spacing(4)},inputField:{margin:e.spacing(2),maxWidth:496,minWidth:296,alignSelf:"center"},submitButton:{margin:e.spacing(2),maxWidth:496,minWidth:296,alignSelf:"center"}}}));function F(e){var t=e.result,a=void 0===t?null:t,l=e.resetAction,i=e.offers,o=Object(n.useState)(!0),c=Object(h.a)(o,2),m=c[0],s=c[1],d=H();return r.a.createElement("div",{className:d.root},r.a.createElement(W.a,{open:m,keepMounted:!0,onClose:function(){s(!1)},onExit:l},r.a.createElement(A.a,null,a?"Success!":"Failure!"),r.a.createElement(B.a,null,r.a.createElement(T.a,null,r.a.createElement(I.a,{severity:a?"success":"error"},a?"Great, you got into an agreement!":"Unfortunately, the expectations didn't meet, try again!"),r.a.createElement("br",null),"Employer offers:"," ",r.a.createElement("strong",null,i.employer),r.a.createElement("br",null),"Employee wants:"," ",r.a.createElement("strong",null,i.employee))),r.a.createElement(V.a,null,r.a.createElement(u.a,{onClick:l,color:"primary"},"Reset"))))}var L=Object(o.a)({root:{minHeight:"100vh"},mainContainer:{minHeight:"100vh"},mainPaper:{minHeight:490,maxHeight:490,marginTop:48}});function P(e){var t=e.tabs,a=void 0===t?[]:t;P.testId="testId";var l=Object(n.useState)(a[0]),i=Object(h.a)(l,2),o=i[0],c=i[1],m=Object(n.useState)({employer:0,employee:0}),s=Object(h.a)(m,2),u=s[0],d=s[1],p=Object(n.useState)(""),f=Object(h.a)(p,2),g=f[0],b=f[1],w=Object(n.useState)(null),j=Object(h.a)(w,2),x=j[0],I=j[1],S=L();return r.a.createElement("div",{className:S.root,"data-testid":P.testId},r.a.createElement(y.a,{className:S.mainContainer},r.a.createElement(v.a,{className:S.mainPaper,elevation:3},r.a.createElement(O,{onClick:function(e,t){return c(a[t])},source:a,activeId:o.id}),r.a.createElement(k,{offerValue:u[o.name],onInput:function(e){return b(Number(e.target.value))},fieldLabel:o.label,fieldValue:g,onSubmit:function(){var e=Object.assign(u,Object(E.a)({},o.name,Number(g)));d(e),b(""),u.employer>0&&u.employee>0&&I(u.employee<=u.employer)},title:o.title}),null!==x&&r.a.createElement(F,{result:x,offers:u,resetAction:function(){c(a[0]),I(null),b(""),d({employer:0,employee:0})}}))))}var G=[{id:0,label:"Employer",name:"employer",title:"As an Employer, enter your maximum offer:"},{id:1,label:"Employee",name:"employee",title:"As an Employee, enter your minimum acceptable number:"}],M=Object(o.a)({root:{minHeight:"100vh"}});var D=function(){var e=M();return r.a.createElement("div",{className:e.root,"data-testid":"app-wrapper"},r.a.createElement(b,{weatherApi:"https://openweathermap.org/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02",title:"Offers matcher"}),r.a.createElement(P,{tabs:G}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[68,1,2]]]);
//# sourceMappingURL=main.a4cc3a38.chunk.js.map