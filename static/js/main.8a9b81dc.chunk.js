(this.webpackJsonpmemorycardgame=this.webpackJsonpmemorycardgame||[]).push([[0],{13:function(e,c,t){},14:function(e,c,t){"use strict";t.r(c);var s=t(0),a=t(1),n=t.n(a),i=t(6),r=t.n(i),j=t(7),o=t(2),b=(t(13),function(e){return Object(s.jsxs)("nav",{className:"navContainer",children:[Object(s.jsx)("h1",{className:"title",children:"Memory Game"}),Object(s.jsxs)("p",{className:"rules",children:["Click each card only once! ",Object(s.jsx)("br",{})," if you click the same ",Object(s.jsx)("br",{}),"card twice you lose!"]}),Object(s.jsxs)("p",{className:"score",children:["Score: ",e.score]}),Object(s.jsxs)("p",{className:"bestScore",children:["Best Score: ",e.bestScore]})]})}),d=function(e){return Object(s.jsx)("div",{className:"imageContainer",children:e.shuffle.map((function(c,t){return Object(s.jsx)("img",{name:c,src:e.shuffle[t],onClick:e.mixit,alt:""})}))})},l=[t.p+"static/media/broly1.671c42b2.png",t.p+"static/media/broly2.8982ee28.png",t.p+"static/media/buu1.d0f2a8d7.png",t.p+"static/media/buu2.471140c8.png",t.p+"static/media/buu3.fa8dc3d4.png",t.p+"static/media/cell1.ea050640.png",t.p+"static/media/cell2.63513ede.png",t.p+"static/media/freezer2.2cc4d9b5.png",t.p+"static/media/freezer3.096d8b34.png",t.p+"static/media/gohan1.404c6547.png",t.p+"static/media/gohan2.8437d397.png",t.p+"static/media/goku1.021d7835.png",t.p+"static/media/goku2.cda06b86.png",t.p+"static/media/goku3.74f3df19.png",t.p+"static/media/piccolo1.fd8778f0.png",t.p+"static/media/piccolo2.7364beb5.png",t.p+"static/media/vegeta1.13164974.png",t.p+"static/media/vegeta2.f9537efd.png"],u=function(e){return Object(s.jsxs)("div",{className:"winnerScreen",children:[Object(s.jsx)("h1",{id:"winner",className:"winner",children:"You Win!"}),Object(s.jsx)("p",{className:"winnerMessage",children:"Congratulations!!"}),Object(s.jsx)("button",{onClick:e.playAgain,children:"Play Again!"})]})},p=function(e){return Object(s.jsxs)("div",{className:"winnerScreen",children:[Object(s.jsx)("h1",{className:"loser",children:"You Lose!"}),Object(s.jsxs)("p",{className:"loserMessage",children:["You Best Score is: ",e.bestScore]}),Object(s.jsx)("button",{onClick:e.playAgain,children:"Try Again ?"})]})},m=function(e){var c=Object(a.useState)(l),t=Object(o.a)(c,2),n=t[0],i=(t[1],Object(a.useState)(0)),r=Object(o.a)(i,2),m=r[0],O=r[1],g=Object(a.useState)(0),f=Object(o.a)(g,2),h=f[0],x=f[1],S=Object(a.useState)([]),y=Object(o.a)(S,2),v=y[0],N=y[1],k=Object(a.useState)(!0),w=Object(o.a)(k,2),C=w[0],A=w[1],M=Object(a.useRef)(!0),B=Object(a.useState)(!1),Y=Object(o.a)(B,2),z=Y[0],E=Y[1],G=Object(a.useState)(!1),J=Object(o.a)(G,2),I=J[0],L=J[1],P=n.sort((function(){return.5-Math.random()})).slice(0,12);Object(a.useEffect)((function(){M.current?M.current=!1:12===m&&(E(!0),A(!1))}),[v,I]);var R=function(){console.log("GO"),E(!1),L(!1),A(!0),O(0),N([])};return Object(s.jsx)("div",{children:z?Object(s.jsxs)("div",{children:[Object(s.jsx)(b,{score:m,bestScore:h}),Object(s.jsx)(u,{playAgain:R})]}):I?Object(s.jsxs)("div",{children:[Object(s.jsx)(b,{score:m,bestScore:h}),Object(s.jsx)(p,{playAgain:R,bestScore:h})]}):Object(s.jsxs)("div",{children:[Object(s.jsx)(b,{score:m,bestScore:h}),Object(s.jsx)(d,{shuffle:P,mixit:C?function(e){-1===v.indexOf(e.target.name)&&!0===C?(N((function(c){return[].concat(Object(j.a)(c),[e.target.name])})),O(m+1),m>=h&&x(m+1)):(L(!0),A(!1))}:null})]})})};r.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(m,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.8a9b81dc.chunk.js.map