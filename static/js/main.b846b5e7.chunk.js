(this.webpackJsonpmooglee=this.webpackJsonpmooglee||[]).push([[0],[,,,,,function(e,t,s){e.exports={mainContainer:"styles_mainContainer__1Dusc",closingIcon:"styles_closingIcon__a2sb_",inputWrapper:"styles_inputWrapper__3JC2K",buttons:"styles_buttons__13sfU",button:"styles_button__36qWO",text:"styles_text__3qazu",textLink:"styles_textLink__1Cw_2",buttonsColumn:"styles_buttonsColumn__3nhU5",mainWrapper:"styles_mainWrapper__2iZ_k"}},,,,,function(e,t,s){e.exports={header:"styles_header__in2rG",headerItem:"styles_headerItem__2qjnV",closeButton:"styles_closeButton__3_eNl",headerLinks:"styles_headerLinks__2Sxhf",userLink:"styles_userLink__1Os7u"}},function(e,t,s){e.exports={footer:"styles_footer__2B1Oo",footerLineContainer:"styles_footerLineContainer__21o5e",footerElement:"styles_footerElement__1iGlu"}},function(e,t,s){e.exports={header:"styles_header__2nIaP",headerItem:"styles_headerItem__2G1OM",headerLinks:"styles_headerLinks__EKpUS",userLink:"styles_userLink__3xvI0"}},,,,function(e,t,s){e.exports={rectangle:"styles_rectangle__1KSFu",iconButton:"styles_iconButton__XI3Tb",randomNumber:"styles_randomNumber__2vSGn",green:"styles_green__2ncg4",yellow:"styles_yellow__2XQAb",red:"styles_red__1vmRV"}},,,,function(e,t,s){e.exports={articleWrapper:"styles_articleWrapper__1R-U6",homeButton:"styles_homeButton__2f_A5",articleTitle:"styles_articleTitle__2BTzh",articleDescription:"styles_articleDescription__1-xMP"}},,,function(e,t,s){e.exports={searchResultTitle:"styles_searchResultTitle__2RxuY",searchResultDescription:"styles_searchResultDescription__AKHzd",seachResult:"styles_seachResult__3jUkI"}},,,function(e,t,s){e.exports={wrapper:"styles_wrapper__2TozV",container:"styles_container__B4raN"}},function(e,t,s){e.exports={regular:"styles_regular__1voeC",small:"styles_small__2A5tP"}},,,function(e,t,s){e.exports={searchResultsWrapper:"styles_searchResultsWrapper__2wlmU",seachResult:"styles_seachResult__23hMI",searchResultsNumber:"styles_searchResultsNumber__2pOux",searchResultTitle:"styles_searchResultTitle__3Bnu9",searchResultDescription:"styles_searchResultDescription__1pic7"}},,,function(e,t,s){e.exports={input:"styles_input__2yW0f"}},,,,,,function(e,t,s){},,,,,,,,,function(e,t,s){"use strict";s.r(t);var a=s(1),n=s.n(a),c=s(32),r=s.n(c),i=(s(39),s(13)),l=s(3),o=s(26),u=s.n(o),j=s(12),d=s.n(j),h=s(0),b=function(e){var t=e.user;return Object(h.jsxs)("header",{className:d.a.header,children:[Object(h.jsx)("div",{className:d.a.headerItem}),Object(h.jsxs)("div",{className:d.a.headerItem,children:[Object(h.jsx)("div",{className:d.a.headerLinks,children:Object(h.jsx)("a",{href:"../App/App.js",children:"\u041f\u043e\u0447\u0442\u0430"})}),Object(h.jsx)("div",{className:d.a.headerLinks,children:Object(h.jsx)("a",{href:"../App/App.js",children:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0438"})}),Object(h.jsx)("div",{className:"".concat(d.a.headerLinks," ").concat(d.a.userLink),children:Object(h.jsx)("a",{href:"../App/App.js",children:t[0]})})]})]})},p=s(17),_=s(10),m=s.n(_),x=s(18),O=s(14),f=s(22),v=s.n(f),y=s(27),N=s.n(y),g=s.p+"static/media/logo.722ef4fa.png",S=function(e){var t,s=e.size,a=void 0===s?"regular":s,n=v()((t={},Object(O.a)(t,N.a.regular,"regular"===a),Object(O.a)(t,N.a.small,"small"===a),t));return Object(h.jsx)("img",{className:n,src:g,alt:"Logo"})},k=s(33),C=s.n(k),R=function(e){var t=e.value,s=e.onInput;return Object(h.jsx)("input",{value:t,onInput:s,className:C.a.input})},M=function(){return Object(h.jsx)(p.a,{icon:x.c})},L=function(e){var t=e.user,s=e.disableSearchMode,a=e.searchText;return Object(h.jsxs)("header",{className:m.a.header,children:[Object(h.jsxs)("div",{className:m.a.headerItem,children:[Object(h.jsx)(S,{size:"small"}),Object(h.jsx)(R,{value:a,onInput:function(){}}),Object(h.jsx)("button",{onClick:s,className:m.a.closeButton,children:Object(h.jsx)(M,{})})]}),Object(h.jsxs)("div",{className:m.a.headerItem,children:[Object(h.jsx)("div",{className:m.a.headerLinks,children:Object(h.jsx)(p.a,{icon:x.a})}),Object(h.jsx)("div",{className:m.a.headerLinks,children:Object(h.jsx)(p.a,{icon:x.b})}),Object(h.jsx)("div",{className:"".concat(m.a.headerLinks," ").concat(m.a.userLink),children:Object(h.jsx)("a",{href:"../App/App.js",children:t[0]})})]})]})},B=function(e){var t=e.user,s=e.isSearchModeEnabled,a=e.disableSearchMode,n=e.searchText;return s?Object(h.jsx)(L,{user:t,disableSearchMode:a,searchText:n}):Object(h.jsx)(b,{user:t})},w=s(5),I=s.n(w),T=s(16),E=s.n(T),A=function(e){var t,s=e.value,a=e.onHide,n=e.show,c=v()(E.a.rectangle,(t={},Object(O.a)(t,E.a.green,s>=700),Object(O.a)(t,E.a.yellow,s>300&&s<700),Object(O.a)(t,E.a.red,s<=300),t));return Object(h.jsx)("div",{children:n&&Object(h.jsxs)("div",{className:c,children:[Object(h.jsx)("span",{className:E.a.randomNumber,children:s}),Object(h.jsx)("button",{className:E.a.iconButton,onClick:a,children:Object(h.jsx)(M,{})})]})})},W=s(9),J=function(e){var t=e.enableSearchMode,s=(e.isSearchModeEnabled,e.search),n=Object(a.useState)(null),c=Object(W.a)(n,2),r=c[0],i=c[1],l=Object(a.useState)(!1),o=Object(W.a)(l,2),u=o[0],j=o[1],d=Object(a.useState)(!1),h=Object(W.a)(d,2),b=h[0],p=h[1],_=Object(a.useState)(""),m=Object(W.a)(_,2),x=m[0],O=m[1];return{rectangleContent:r,setRectangleContent:i,isButtonClicked:u,onButtonClick:function(){j(!0),setTimeout((function(){j(!1),i(Math.floor(1e3*Math.random())+1)}),5e3)},buttonText:u?"\u0425\u043c\u043c...":"\u041c\u043d\u0435 \u043f\u043e\u0432\u0435\u0437\u0435\u0442!",isCloseButtonClicked:b,onCloseButtonClick:function(){p(!0)},inputValue:x,setInputValue:O,onSearchButtonClick:function(){t(),s(x)},onInput:function(e){O(e.target.value)},enableSearchMode:t,search:s}},D=function(e){var t=e.enableSearchMode,s=e.search,a=J({enableSearchMode:t,search:s}),n=a.rectangleContent,c=a.setRectangleContent,r=a.isButtonClicked,i=a.onButtonClick,l=a.buttonText,o=a.inputValue,u=a.onSearchButtonClick,j=a.onInput;return Object(h.jsx)("div",{className:I.a.mainWrapper,children:Object(h.jsxs)("main",{className:I.a.mainContainer,children:[Object(h.jsx)(S,{size:"regular"}),Object(h.jsx)("div",{className:I.a.inputWrapper,children:Object(h.jsx)(R,{inputValue:o,onInput:j})}),Object(h.jsxs)("div",{className:I.a.buttons,children:[Object(h.jsx)("div",{className:I.a.buttonsColumn}),Object(h.jsx)("div",{className:I.a.buttonsColumn,children:Object(h.jsx)("button",{className:I.a.button,onClick:u,children:"\u041f\u043e\u0438\u0441\u043a Moogle"})}),Object(h.jsx)("div",{className:I.a.buttonsColumn,children:Object(h.jsx)("button",{className:I.a.button,disabled:r,onClick:i,children:l})}),Object(h.jsx)("div",{className:I.a.buttonsColumn,children:Object(h.jsx)(A,{value:n,show:Boolean(n),onHide:function(){return c(null)}})})]}),Object(h.jsxs)("p",{className:I.a.text,children:["\u0421\u0435\u0440\u0432\u0438\u0441\u044b Moogle \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u043d\u0430 \u0440\u0430\u0437\u043d\u044b\u0445 \u044f\u0437\u044b\u043a\u0430\u0445:",Object(h.jsx)("a",{className:I.a.textLink,href:"../App/App.js",children:"English"}),Object(h.jsx)("a",{className:I.a.textLink,href:"../App/App.js",children:"Spain"})]})]})})},z=s(23),V=s.n(z),U=function(e){var t=e.item;return Object(h.jsxs)("div",{className:V.a.seachResult,children:[Object(h.jsx)(i.b,{to:"/article/".concat(t.id),className:V.a.searchResultTitle,children:t.title}),Object(h.jsx)("p",{className:V.a.searchResultDescription,children:t.description})]})},F=s(30),P=s.n(F),q=function(e){var t=e.searchResult;return Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:P.a.searchResultsWrapper,children:[Object(h.jsxs)("p",{className:P.a.searchResultsNumber,children:["\u041d\u0430\u0439\u0434\u0435\u043d\u043e \u0441\u0441\u044b\u043b\u043e\u043a: ",t.length]}),t.map((function(e,t){return Object(h.jsx)(U,{item:e},t)}))]})})},G=function(e){var t=e.enableSearchMode,s=e.isSearchModeEnabled,a=e.search,n=e.searchResult;return s?Object(h.jsx)(q,{searchResult:n}):Object(h.jsx)(D,{enableSearchMode:t,search:a})},H=s(11),K=s.n(H),X=function(e){return Object(h.jsxs)("footer",{className:K.a.footer,children:[Object(h.jsx)("div",{className:K.a.footerLineContainer,children:Object(h.jsx)("span",{className:K.a.footerElement,children:e.country})}),Object(h.jsxs)("div",{className:K.a.footerLineContainer,children:[Object(h.jsx)("span",{className:K.a.footerElement,children:"\u0420\u0435\u043a\u043b\u0430\u043c\u0430"}),Object(h.jsx)("span",{className:K.a.footerElement,children:"\u0414\u043b\u044f \u0411\u0438\u0437\u043d\u0435\u0441\u0430"}),Object(h.jsx)("span",{className:K.a.footerElement,children:"\u0412\u0441\u0435 \u043e Moogle"}),Object(h.jsx)("span",{className:K.a.footerElement,children:"\u041a\u0430\u043a \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442 \u041f\u043e\u0438\u0441\u043a"})]})]})},Q=[{id:"1",link:"https://www.javascript.com/",title:"JavaScript.com",description:"Ready to try JavaScript? Begin learning here by typing in your first name surrounded by quotation marks and ending ..."},{id:"2",link:"https://ru.wikipedia.org/wiki/JavaScript",title:"JavaScript - Wikipedia",description:"JavaScript (/\u02c8d\u0292\u0251\u02d0v\u0259\u02ccskr\u026apt/), often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm ..."},{id:"3",link:"https://www.w3schools.com/js/",title:"JavaScript Tutorial - W3Schools",description:"JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web. JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced ..."}],Y=function(){var e=Object(a.useState)(!1),t=Object(W.a)(e,2),s=t[0],n=t[1],c=Object(a.useState)([]),r=Object(W.a)(c,2),i=r[0],l=r[1],o=Object(a.useState)(""),u=Object(W.a)(o,2),j=u[0],d=u[1];return{isSearchModeEnabled:s,enableSearchMode:function(){n(!0)},disableSearchMode:function(){n(!1),l([])},searchResult:i,search:function(e){d(e),"javascript"===e.toLowerCase()?l(Q):l([])},searchText:j}},Z=function(){var e=Y(),t=e.isSearchModeEnabled,s=e.disableSearchMode,a=e.enableSearchMode,n=e.searchResult,c=e.search,r=e.searchText;return Object(h.jsxs)("div",{className:u.a.wrapper,children:[Object(h.jsxs)("div",{className:u.a.container,children:[Object(h.jsx)(B,{user:"\u0418\u0440\u0438\u043d\u0430",isSearchModeEnabled:t,disableSearchMode:s,searchText:r}),Object(h.jsx)(G,{enableSearchMode:a,isSearchModeEnabled:t,search:c,searchResult:n})]}),Object(h.jsx)(X,{country:"\u0411\u0435\u043b\u0430\u0440\u0443\u0441\u044c"})]})},$=function(){var e=Object(l.f)().id,t=Object(a.useState)(null),s=Object(W.a)(t,2),n=s[0],c=s[1];return Object(a.useEffect)((function(){var t=function(e){return Q.filter((function(t){return t.id===e}))[0]}(e);c(t)}),[e]),{item:n}},ee=s(20),te=s.n(ee),se=function(){var e=$().item;return e?Object(h.jsxs)("div",{className:te.a.articleWrapper,children:[Object(h.jsx)(i.b,{to:"/",className:te.a.homeButton,children:"Home"}),Object(h.jsx)("h3",{className:te.a.articleTitle,children:e.title}),Object(h.jsx)("p",{className:te.a.articleDescription,children:e.description})]}):Object(h.jsx)("p",{children:"Loading ..."})},ae=function(){return Object(h.jsx)(i.a,{children:Object(h.jsxs)(l.c,{children:[Object(h.jsx)(l.a,{exact:!0,path:"/",children:Object(h.jsx)(Z,{})}),Object(h.jsx)(l.a,{path:"/article/:id",children:Object(h.jsx)(se,{})})]})})},ne=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,49)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;s(e),a(e),n(e),c(e),r(e)}))};r.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(ae,{})}),document.getElementById("root")),ne()}],[[48,1,2]]]);
//# sourceMappingURL=main.b846b5e7.chunk.js.map