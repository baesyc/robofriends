(this["webpackJsonprf-final"]=this["webpackJsonprf-final"]||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),o=a.n(c),s=(a(12),a(3)),l=a(4),i=a(6),u=a(5),m=function(e){var t=e.changeInput;return r.a.createElement("div",{className:"search-box"},r.a.createElement("input",{type:"serach",className:"search-bar",placeholder:"search",onChange:t}))},h=function(e){e.id;var t=e.name,a=e.email;return r.a.createElement("div",{className:"card tc dib ma3 pa2 grow shadow-5 bg-light-green"},r.a.createElement("img",{src:"https://robohash.org/".concat(t,"?size=200x200"),alt:"robots"}),r.a.createElement("h4",{className:"name"},t),r.a.createElement("p",{className:"email"},a))},d=function(e){var t=e.robots;return r.a.createElement("div",{className:"card-list"},t.map((function(e){return r.a.createElement(h,Object.assign({key:e.id},e))})))},p=function(e){return r.a.createElement("div",{className:"scroll",style:{overflowY:"scroll",border:"1px solid black",height:"700px"}},e.children)},f=(a(13),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(s.a)(this,a),(e=t.call(this)).changeInput=function(t){e.setState({query:t.target.value})},e.componentDidMount=function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))},e.state={query:"",robots:[]},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.state,t=e.query,a=e.robots.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return r.a.createElement("div",{className:"app tc"},r.a.createElement("div",{className:"title"},"RoboFriends"),r.a.createElement(m,{changeInput:this.changeInput}),r.a.createElement(p,null,r.a.createElement("div",{className:"card-list"},r.a.createElement(d,{robots:a}))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.a7c7f23e.chunk.js.map