(this.webpackJsonpblackfriday=this.webpackJsonpblackfriday||[]).push([[0],{12:function(e,n,t){e.exports={input:"Input_input__36-jb",errorInput:"Input_errorInput__2rogf",error:"Input_error__2Og4c"}},13:function(e,n,t){e.exports={button:"Button_button__ZnXwo",red:"Button_red__Uhwm9"}},16:function(e,n,t){e.exports={spanClassName:"Checkbox_spanClassName__1SriJ",checkboxBox:"Checkbox_checkboxBox___iALz",innerCbx:"Checkbox_innerCbx__3F-bb",check:"Checkbox_check__3y_pr"}},25:function(e,n,t){e.exports={span:"EditableSpan_span__3awm8"}},26:function(e,n,t){e.exports={header:"Header_header__6YiQj"}},27:function(e,n,t){e.exports={footer:"Footer_footer__31Vzg"}},34:function(e,n,t){},35:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var c=t(0),r=t.n(c),a=t(17),s=t.n(a),o=(t(34),t(35),t(11)),i=t(3),j=t(5),b=t(1),u=function(e){return Object(j.a)(e),Object(b.jsx)("div",{children:"Login"})},l=function(e){return Object(j.a)(e),Object(b.jsx)("div",{children:"Main Page"})},d=function(e){return Object(j.a)(e),Object(b.jsx)("div",{children:"Profile"})},h=function(e){return Object(j.a)(e),Object(b.jsx)("div",{children:"Sign Up"})},x=function(e){return Object(j.a)(e),Object(b.jsx)("div",{children:"Pass Recovery"})},O=function(e){return Object(j.a)(e),Object(b.jsx)("div",{children:"Enter New Pass"})},p=t(19),f=function(){var e=Object(c.useState)("\u2014\u2014\u2014\u2014\u2014\u2014"),n=Object(p.a)(e,2),t=n[0],r=n[1];return setTimeout((function(){return r("\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014")}),1e3),Object(b.jsxs)("div",{style:{margin:"5% 5%",fontWeight:"bold",minHeight:"65vmin",fontSize:"40px"},children:[Object(b.jsx)("div",{children:"404"}),Object(b.jsx)("div",{children:"Page not found!"}),Object(b.jsx)("div",{children:t})]})},v=t(4),_=t(7),g=t(12),m=t.n(g),C=function(e){e.type;var n=e.onChange,t=e.onChangeText,c=e.onKeyPress,r=e.onEnter,a=e.error,s=e.className,o=e.spanClassName,i=Object(_.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(m.a.error," ").concat(o||""),u="".concat(m.a.input," ").concat(a?m.a.errorInput:"");return Object(b.jsxs)("div",{children:[Object(b.jsx)("input",Object(v.a)({placeholder:"Enter text here",type:"text",onChange:function(e){n&&n(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){c&&c(e),r&&"Enter"===e.key&&r()},className:"".concat(s," + ").concat(u," ")},i)),a&&Object(b.jsx)("div",{className:j,children:a})]})},N=function(e){e.type;var n=e.onChange,t=e.error,c=Object(_.a)(e,["type","onChange","error"]);return Object(b.jsxs)("div",{children:[Object(b.jsx)("input",Object(v.a)({type:"text",onChange:function(e){n&&n(e)},className:m.a.input},c)),t&&Object(b.jsxs)("div",{className:m.a.error,children:[" ",t," "]})]})},k=t(13),y=t.n(k),w=function(e){var n=e.red,t=(e.className,Object(_.a)(e,["red","className"])),c="".concat(n?y.a.red:y.a.default," ").concat(y.a.button);return Object(b.jsx)("div",{children:Object(b.jsx)("button",Object(v.a)({className:c},t))})},P=function(e){var n=e.red,t=e.children,c=e.onClick,r=e.disabled,a=e.value,s=Object(_.a)(e,["red","children","onClick","disabled","value"]);return Object(b.jsxs)("button",Object(v.a)(Object(v.a)({onClick:c,disabled:r,className:"".concat(n?y.a.red:""," ").concat(y.a.button),value:a},s),{},{children:[" ",t," "]}))},E=t(16),T=t.n(E),B=function(e){e.type;var n=e.onChange,t=e.onChangeChecked,c=(e.className,e.spanClassName,e.alt),r=e.children,a=Object(_.a)(e,["type","onChange","onChangeChecked","className","spanClassName","alt","children"]),s="".concat(T.a.innerCbx),o="".concat(T.a.checkboxBox," ").concat(c&&!a.checked?c:"");return Object(b.jsxs)("label",{className:o,children:[Object(b.jsx)("input",Object(v.a)({type:"checkbox",onChange:function(e){e.currentTarget.checked&&(t&&t(e.currentTarget.checked),n&&n(e))},className:s,id:"cbx"},a)),Object(b.jsx)("label",{htmlFor:"cbx",className:T.a.check,children:Object(b.jsxs)("svg",{width:"18px",height:"18px",viewBox:"0 0 18 18",children:[Object(b.jsx)("path",{d:"M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z",children:" "}),Object(b.jsx)("polyline",{points:"1 9 7 14 15 4",children:" "})]})}),r&&Object(b.jsx)("span",{className:T.a.spanClassName,children:r})]})},F=t(25),L=t.n(F),S=function(e){e.autoFocus;var n=e.onBlur,t=e.onEnter,r=e.spanProps,a=e.setError,s=Object(_.a)(e,["autoFocus","onBlur","onEnter","spanProps","setError"]),o=Object(c.useState)(!0),i=Object(p.a)(o,2),j=i[0],u=i[1],l=r||{},d=l.children,h=l.onDoubleClick,x=l.className,O=Object(_.a)(l,["children","onDoubleClick","className"]),f="".concat(L.a.span," ").concat(x);return Object(b.jsx)(b.Fragment,{children:j?Object(b.jsx)(C,Object(v.a)({autoFocus:!0,onBlur:function(e){u(!1),n&&n(e)},onEnter:function(){u(!1),t&&t()},className:""},s)):Object(b.jsx)("span",Object(v.a)(Object(v.a)({onDoubleClick:function(e){u(!0),a&&a(""),h&&h(e)},className:f},O),{},{children:d||s.value}))})},I=function(e){return Object(j.a)(e),Object(b.jsxs)("div",{style:{display:"flex",flexDirection:"column",width:"200px"},children:[Object(b.jsx)(C,{}),Object(b.jsx)(N,{}),Object(b.jsx)(w,{children:" Tap "}),Object(b.jsx)(P,{children:" Tap-Tap "}),Object(b.jsx)(B,{}),Object(b.jsx)(S,{})]})},D=function(){return Object(b.jsx)("div",{children:Object(b.jsxs)(i.d,{children:[Object(b.jsx)(i.b,{exact:!0,path:"/",render:function(){return Object(b.jsx)(i.a,{to:"/main"})}}),Object(b.jsx)(i.b,{path:"/main",render:function(){return Object(b.jsx)(l,{})}}),Object(b.jsx)(i.b,{path:"/profile",render:function(){return Object(b.jsx)(d,{})}}),Object(b.jsx)(i.b,{path:"/login",render:function(){return Object(b.jsx)(u,{})}}),Object(b.jsx)(i.b,{path:"/signup",render:function(){return Object(b.jsx)(h,{})}}),Object(b.jsx)(i.b,{path:"/password_recovery",render:function(){return Object(b.jsx)(x,{})}}),Object(b.jsx)(i.b,{path:"/enter_new_password",render:function(){return Object(b.jsx)(O,{})}}),Object(b.jsx)(i.b,{path:"/not_found",render:function(){return Object(b.jsx)(f,{})}}),Object(b.jsx)(i.b,{path:"/test",render:function(){return Object(b.jsx)(I,{})}}),Object(b.jsx)(i.a,{from:"*",to:"/not_found"})]})})},M=t(26),z=t.n(M),J=function(){return Object(b.jsxs)("header",{className:z.a.header,children:[Object(b.jsx)(o.b,{to:"/main",children:"Main"}),Object(b.jsx)(o.b,{to:"/profile",children:"Profile"}),Object(b.jsx)(o.b,{to:"/login",children:"Login"}),Object(b.jsx)(o.b,{to:"/signup",children:"Sign up"}),Object(b.jsx)(o.b,{to:"/password_recovery",children:"Password recovery"}),Object(b.jsx)(o.b,{to:"/enter_new_password",children:"New password"}),Object(b.jsx)(o.b,{to:"/test",children:"Test"})]})},K=t(27),A=t.n(K),H=function(){return Object(b.jsx)("footer",{className:A.a.footer})},R=function(){return Object(b.jsx)(o.a,{children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(J,{}),Object(b.jsx)(D,{}),Object(b.jsx)(H,{})]})})},U=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,43)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,a=n.getLCP,s=n.getTTFB;t(e),c(e),r(e),a(e),s(e)}))},Z=t(29),Q=t(20),V=t(28),W={},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W;return e},Y={},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y;return e},G={},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G;return e},ee={},ne=Object(Q.b)({app:q,profile:X,auth:$,passRecovery:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee;return e}}),te=Object(Q.c)(ne,Object(Q.a)(V.a));s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(Z.a,{store:te,children:Object(b.jsx)(R,{})})}),document.getElementById("root")),U()}},[[42,1,2]]]);