(this.webpackJsonpmooglee=this.webpackJsonpmooglee||[]).push([[0],{12:function(e,t,s){e.exports={wrapper:"styles_wrapper__CQtzq"}},2:function(e,t,s){e.exports={logo:"styles_logo__1c_gd",input:"styles_input__1E_lA",buttons:"styles_buttons__3FjoS",button:"styles_button__2DGpJ",text:"styles_text__2FCDJ",textLink:"styles_textLink__1g8Uv",rectangle:"styles_rectangle__1VSt-",green:"styles_green__2bYtj",yellow:"styles_yellow__3Xtlo",red:"styles_red__NH46u"}},20:function(e,t,s){},27:function(e,t,s){"use strict";s.r(t);var n=s(3),c=s.n(n),a=s(11),o=s.n(a),r=(s(20),s(12)),l=s.n(r),i=s(5),j=s.n(i),d=s(0),b=function(e){var t=e.user;return Object(d.jsxs)("header",{className:j.a.header,children:[Object(d.jsx)("div",{className:j.a.headerLinks,children:Object(d.jsx)("a",{href:"../App/App.js",children:"\u041f\u043e\u0447\u0442\u0430"})}),Object(d.jsx)("div",{className:j.a.headerLinks,children:Object(d.jsx)("a",{href:"../App/App.js",children:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0438"})}),Object(d.jsx)("div",{className:"".concat(j.a.headerLinks," ").concat(j.a.userLink),children:Object(d.jsx)("a",{href:"../App/App.js",children:t[0]})})]})},u=s(10),h=s(7),_=s(13),p=s.n(_),x=s(14),O=s(15),f=s(2),m=s.n(f),g=s.p+"static/media/logo.722ef4fa.png",N=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(x.a,{icon:O.a})})},y=function(e){var t,s=e.value,n=e.onHide,c=e.show,a=p()(m.a.rectangle,(t={},Object(h.a)(t,m.a.green,s>=700),Object(h.a)(t,m.a.yellow,s>300&&s<700),Object(h.a)(t,m.a.red,s<=300),t));return Object(d.jsx)("div",{children:c&&Object(d.jsxs)("div",{className:a,children:[Object(d.jsx)("button",{onClick:n,children:Object(d.jsx)(N,{})}),Object(d.jsx)("span",{children:s})]})})},L=function(){var e=Object(n.useState)(null),t=Object(u.a)(e,2),s=t[0],c=t[1],a=Object(n.useState)(!1),o=Object(u.a)(a,2),r=o[0],l=o[1];return console.log("Render component"),Object(d.jsxs)("main",{children:[Object(d.jsx)("img",{className:m.a.logo,src:g,alt:"Logo"}),Object(d.jsx)("input",{className:m.a.input}),Object(d.jsxs)("div",{className:m.a.buttons,children:[Object(d.jsx)("button",{className:m.a.button,children:"\u041f\u043e\u0438\u0441\u043a Moogle"}),Object(d.jsx)("button",{className:m.a.button,disabled:r,onClick:function(){l(!0),setTimeout((function(){l(!1),c(Math.floor(1e3*Math.random())+1)}),5e3)},children:r?"\u0425\u043c\u043c...":"\u041c\u043d\u0435 \u043f\u043e\u0432\u0435\u0437\u0451\u0442!"}),Object(d.jsx)(y,{value:s,show:Boolean(s),onHide:function(){return c(null)}})]}),Object(d.jsxs)("p",{className:m.a.text,children:["\u0421\u0435\u0440\u0432\u0438\u0441\u044b Moogle \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u043d\u0430 \u0440\u0430\u0437\u043d\u044b\u0445 \u044f\u0437\u044b\u043a\u0430\u0445:",Object(d.jsx)("a",{className:m.a.textLink,href:"../App/App.js",children:"English"}),Object(d.jsx)("a",{className:m.a.textLink,href:"../App/App.js",children:"Spain"})]})]})},v=s(4),k=s.n(v),A=function(e){return Object(d.jsxs)("footer",{className:k.a.footer,children:[Object(d.jsx)("div",{className:k.a.footerLineContainer,children:Object(d.jsx)("span",{className:k.a.footerElement,children:e.country})}),Object(d.jsxs)("div",{className:k.a.footerLineContainer,children:[Object(d.jsx)("span",{className:k.a.footerElement,children:"\u0420\u0435\u043a\u043b\u0430\u043c\u0430"}),Object(d.jsx)("span",{className:k.a.footerElement,children:"\u0414\u043b\u044f \u0411\u0438\u0437\u043d\u0435\u0441\u0430"}),Object(d.jsx)("span",{className:k.a.footerElement,children:"\u0412\u0441\u0435 \u043e Moogle"}),Object(d.jsx)("span",{className:k.a.footerElement,children:"\u041a\u0430\u043a \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u041f\u043e\u0438\u0441\u043a"})]})]})},C=function(){return Object(d.jsxs)("div",{className:l.a.wrapper,children:[Object(d.jsx)(b,{user:"\u0418\u0440\u0438\u043d\u0430"}),Object(d.jsx)(L,{}),Object(d.jsx)(A,{country:"\u0411\u0435\u043b\u0430\u0440\u0443\u0441\u044c"})]})},w=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,28)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;s(e),n(e),c(e),a(e),o(e)}))};o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(C,{})}),document.getElementById("root")),w()},4:function(e,t,s){e.exports={footer:"styles_footer__2B1Oo",footerLineContainer:"styles_footerLineContainer__21o5e",footerElement:"styles_footerElement__1iGlu"}},5:function(e,t,s){e.exports={header:"styles_header__zqo0N",headerLinks:"styles_headerLinks__lqXnX",userLink:"styles_userLink__3-Ulx"}}},[[27,1,2]]]);
//# sourceMappingURL=main.df79955b.chunk.js.map