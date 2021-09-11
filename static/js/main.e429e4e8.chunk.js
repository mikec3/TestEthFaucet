(this.webpackJsonpTestEthFaucet=this.webpackJsonpTestEthFaucet||[]).push([[0],{213:function(t){t.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"donationValue","type":"uint256"},{"indexed":false,"internalType":"address","name":"sender","type":"address"}],"name":"emitDonation","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"outcome","type":"string"},{"indexed":false,"internalType":"uint256","name":"playerAttack","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"computerAttack","type":"uint256"},{"indexed":true,"internalType":"address","name":"player","type":"address"}],"name":"emitOutcome","type":"event"},{"inputs":[],"name":"donate","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"playerInput","type":"uint256"}],"name":"play","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}]')},220:function(t,e,n){},221:function(t,e,n){},222:function(t,e,n){},224:function(t,e,n){},225:function(t,e,n){},226:function(t,e,n){},238:function(t,e){},247:function(t,e){},265:function(t,e){},267:function(t,e){},288:function(t,e){},289:function(t,e){},350:function(t,e){},352:function(t,e){},385:function(t,e){},387:function(t,e){},388:function(t,e){},393:function(t,e){},395:function(t,e){},401:function(t,e){},403:function(t,e){},416:function(t,e){},428:function(t,e){},431:function(t,e){},436:function(t,e){},444:function(t,e){},453:function(t,e){},455:function(t,e){},524:function(t,e,n){"use strict";n.r(e);var c=n(15),a=n.n(c),i=n(209),o=n.n(i),s=(n(220),n(40)),u=n(27),r=(n(221),n(222),n(4));var l=function(t){var e=Object(c.useState)(null),n=Object(u.a)(e,2),a=n[0],i=n[1];return Object(r.jsxs)("div",{className:"DonateCard",children:[Object(r.jsxs)("div",{className:"Balance",children:[Object(r.jsx)("p",{children:" Contract Balance: "}),Object(r.jsx)("p",{children:t.contractBalance})]}),Object(r.jsx)("button",{onClick:function(){t.contract.methods.donate().send({from:t.defaultAccount,value:1e18}).on("receipt",(function(t){console.log(t),i("Thanks for donating!")})).on("error",(function(t){console.log(t),i("Probably gotta give a little more than that.")}))},children:" Donate 1 test Eth to the faucet "}),Object(r.jsx)("p",{children:a})]})},d=n.p+"static/media/Rock_img.323e1f11.png",j=n.p+"static/media/Paper_img.7d2a44f8.png",f=n.p+"static/media/Scissors_img.4d6a4442.png";n(224);var b=function(t){var e,n;switch(t.attackNum){case 0:e=d,n="Rock attack selector";break;case 1:e=j,n="Paper attack selector";break;case 2:e=f,n="Scissors attack selector"}return Object(r.jsx)("div",{className:"ImageWrapper",children:Object(r.jsx)("img",{className:"AttackImage",src:e,onClick:function(e){var n;n=t.attackNum,t.contract.methods.play(n).send({from:t.defaultAccount}).on("error",(function(t){alert("You had a winning hand, but I think the faucet is empty!")})).on("receipt",(function(t){}))},alt:n})})};n(225);var m=function(t){return Object(r.jsxs)("div",{className:"AttackCard",children:[Object(r.jsx)("h3",{children:"Select your hand "}),Object(r.jsx)(b,Object(s.a)({hand:"Rock",attackNum:0},t)),Object(r.jsx)(b,Object(s.a)({hand:"Paper",attackNum:1},t)),Object(r.jsx)(b,Object(s.a)({hand:"Scissors",attackNum:2},t))]})},h=n.p+"static/media/Rock_img_holder.598772e9.png";n(226);var p=function(t){var e;function n(t){var e;switch(t){case"0":e=d;break;case"1":e=j;break;case"2":e=f;break;default:e=h}return e}return"Player Wins"===t.outcome&&(e="Sending you 1M test Gwei!"),Object(r.jsxs)("div",{className:"OutcomeCard",children:[Object(r.jsxs)("div",{className:"Hand",children:[Object(r.jsx)("h3",{children:" Player "}),Object(r.jsx)("img",{src:n(t.playerAttack)})]}),Object(r.jsxs)("div",{className:"Outcome",children:[" ",Object(r.jsx)("h3",{children:"Match Outcome "}),Object(r.jsxs)("div",{children:[" ",Object(r.jsx)("h3",{children:t.outcome})," ",Object(r.jsxs)("p",{children:[" ",e]})," "]})]}),Object(r.jsxs)("div",{className:"Hand",children:[Object(r.jsx)("h3",{children:" Eth VM "}),Object(r.jsx)("img",{src:n(t.computerAttack)})]})]})};var O=function(t){return Object(r.jsx)(p,{outcome:t.outcome,playerAttack:t.playerAttack,computerAttack:t.computerAttack})},x=n(210),y=n.n(x),w=n(213);var k=function(){var t="0x266B6F8C7C823187d20FEBD47F684F348843501a",e=Object(c.useState)(null),n=Object(u.a)(e,2),a=n[0],i=n[1],o=Object(c.useState)(null),d=Object(u.a)(o,2),j=d[0],f=d[1],b=Object(c.useState)(null),h=Object(u.a)(b,2),p=h[0],x=h[1],k=Object(c.useState)(null),v=Object(u.a)(k,2),g=v[0],A=v[1],N=Object(c.useState)(null),S=Object(u.a)(N,2),T=S[0],F=S[1],B=Object(c.useState)(null),C=Object(u.a)(B,2),M=C[0],E=C[1];Object(c.useEffect)((function(){window.ethereum&&window.ethereum.isMetaMask?(console.log("MetaMask detected"),window.web3=new y.a(window.ethereum),window.ethereum.send("eth_requestAccounts").then((function(e){console.log(e.result[0]),i(e.result[0]),window.web3.eth.getBalance(t).then((function(t){f(window.web3.utils.fromWei(t))})),E(new window.web3.eth.Contract(w,t))}))):alert("You need to install MetaMask to interact with this app")}),[]),Object(c.useEffect)((function(){null!==M&&null!==a&&null!==window.web3&&(M.events.emitOutcome({filter:{player:a}},(function(t,e){x(e.returnValues.outcome),A(e.returnValues.playerAttack),F(e.returnValues.computerAttack)})),M.events.emitOutcome({},(function(e,n){window.web3.eth.getBalance(t).then((function(t){f(window.web3.utils.fromWei(t))}))})),M.events.emitDonation({},(function(e,n){window.web3.eth.getBalance(t).then((function(t){f(window.web3.utils.fromWei(t))}))})))}),[M,a]);var P={contract:M,defaultAccount:a};return Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"Title",children:[" ",Object(r.jsx)("h2",{children:" Play Rock Paper Scissors for Ropsten Test Eth! "})]}),Object(r.jsxs)("div",{className:"GameWrapper",children:[Object(r.jsx)(l,Object(s.a)({contractBalance:j},P)),Object(r.jsx)(O,{outcome:p,playerAttack:g,computerAttack:T}),Object(r.jsx)(m,Object(s.a)({},P))]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:" Donate to the creator: 0x07Fa7FBff22d6bBcC2f38A29F07B60ef5F4916b3 "}),Object(r.jsx)("a",{href:"https://github.com/mikec3/TestEthFaucet",children:"GitHub"})]})]})},v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,528)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),c(t),a(t),i(t),o(t)}))};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(k,{})}),document.getElementById("root")),v()}},[[524,1,2]]]);
//# sourceMappingURL=main.e429e4e8.chunk.js.map