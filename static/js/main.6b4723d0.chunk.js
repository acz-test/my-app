(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(3),i=n.n(c),l=(n(15),n(4)),s=n(5),d=n(7),r=n(6),u=n(8),m=n(1),p=(n(16),n(17),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(d.a)(this,Object(r.a)(t).call(this,e))).state={sequence:[]},n.addSound=n.addSound.bind(Object(m.a)(Object(m.a)(n))),n.play=n.play.bind(Object(m.a)(Object(m.a)(n))),n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"addSound",value:function(e){console.log(e.target.id),this.setState({sequence:this.state.sequence.concat(e.target.id)})}},{key:"play",value:function(){for(var e=0;e<this.state.sequence.length;e++)switch(this.state.sequence[e]){case"1":new Audio("gentlelaborer.mp3").play();case"2":case"3":case"4":default:console.log("default")}}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("h2",null,"Test App"),o.a.createElement("source",{src:"mp3/mayonnaise.mp3",type:"audio/mpeg"}),o.a.createElement("div",null,o.a.createElement("button",{id:"1",onClick:this.addSound},"1"),o.a.createElement("button",{id:"2",onClick:this.addSound},"2")),o.a.createElement("div",null,o.a.createElement("button",{id:"3",onClick:this.addSound},"3"),o.a.createElement("button",{id:"4",onClick:this.addSound},"4"),o.a.createElement("div",{id:"sequence"},this.state.sequence.map(function(e,t){return e+" "})),o.a.createElement("div",null,o.a.createElement("button",{id:"play",onClick:this.play},"Play")))))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.6b4723d0.chunk.js.map