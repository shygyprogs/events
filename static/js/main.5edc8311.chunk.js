(this["webpackJsonpevents.toughlovearena.com"]=this["webpackJsonpevents.toughlovearena.com"]||[]).push([[0],{57:function(e,t,n){"use strict";n.r(t);var r,i,a=n(2),c=n.n(a),o=n(19),s=n.n(o),l=n(7),u=n.n(l),d=n(9),b=n(8),j=n(5),m=n(6),h=n(11),f=n(20),g=n.n(f);!function(e){e.Stream="stream",e.Tournament="tournament",e.Meetup="meetup"}(i||(i={}));var p=(r={},Object(h.a)(r,i.Stream,"#6441a5"),Object(h.a)(r,i.Tournament,"#aa6c39"),Object(h.a)(r,i.Meetup,"#ed1c40"),r);function v(e){var t;return null!==(t=p[e])&&void 0!==t?t:"black"}function x(e){return t=e.concat(),n=function(e){return e.start.getTime()},t.sort((function(e,t){return function(e,t){return e<t?-1:e>t?1:0}(n(e),n(t))})),t;var t,n}function O(e){return e.when.map((function(t){var n=t.date.split("/").map((function(e){return parseFloat(e)})),r=Object(b.a)(n,3),i=r[0],a=r[1],c=r[2],o=t.time.split(":").map((function(e){return parseFloat(e)})),s=Object(b.a)(o,2),l=function(e,t,n,r,i,a,c){var o=new Date(Date.UTC(t,n-1,r,i,a,c)),s=new Date(o.toLocaleString("en-US",{timeZone:"UTC"})),l=new Date(o.toLocaleString("en-US",{timeZone:e})),u=s.getTime()-l.getTime();return o.setTime(o.getTime()+u),o}("America/New_York",i,a,c,s[0],s[1],0),u=new Date(l.getTime()+60*t.hours*60*1e3);return{title:e.title,type:e.type,description:e.description,image:e.image,twitch:e.twitch,challonge:e.challonge,start:l,end:u}}))}function w(){return y.apply(this,arguments)}function y(){return(y=Object(d.a)(u.a.mark((function e(){var t,n,r,i,a,c,o,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("events.yaml");case 2:return t=e.sent,e.next=5,t.text();case 5:return n=e.sent,e.next=8,g.a.parse(n);case 8:return r=e.sent,i=r.events,a=x(i.map(O).flat()),c=new Date,o=a.filter((function(e){return e.end>c})),s={upcoming:o,all:a},console.log(s),e.abrupt("return",s);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var k,T,S,F,z,C,D,L,M,U,_,A,E,B,I,J=n(12),P=n(3),Z=m.a.div(k||(k=Object(j.a)(["\n  margin: 1rem 0;\n  padding: 0.5rem 1rem;\n  border-radius: 1rem 0 1rem 1rem;\n  ","\n\n  /* image */\n  position: relative;\n  background: none;\n  z-index: 2;\n\n  text-align: left;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: stretch;\n"])),(function(e){return"\n    border: 0.5em solid ".concat(v(e.type),";\n  ")})),G=m.a.div(T||(T=Object(j.a)(["\n  font-size: 1.5em;\n  text-decoration: underline;\n  margin: 0.5rem 0;\n"]))),H=m.a.img(S||(S=Object(j.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: auto;\n  height: 3.5rem;\n  z-index: 1;\n"]))),N=m.a.div(F||(F=Object(j.a)(["\n"]))),W=m.a.div(z||(z=Object(j.a)(["\n"]))),Y=m.a.div(C||(C=Object(j.a)(["\n  text-align: right;\n"]))),q=m.a.div(D||(D=Object(j.a)(["\n  font-size: 1.3em;\n"])));function K(e){var t=e.event,n=[],r=t.description?t.description+"\n\n":"";if(t.challonge){var i="https://challonge.com/"+t.challonge;n.push({name:"challonge",url:i}),r+="challonge: ".concat(i," \n")}if(t.twitch){var a="https://twitch.tv/"+t.twitch;n.push({name:"twitch",url:a}),r+="twitch: ".concat(a," \n")}var c={title:t.title,description:r,start:t.start,end:t.end};return Object(P.jsxs)(Z,{type:t.type,children:[Object(P.jsx)(G,{children:t.title}),Object(P.jsx)(N,{children:t.description}),n.length&&Object(P.jsx)(W,{children:n.map((function(e,t){return Object(P.jsxs)("span",{children:[t>0&&" / ",Object(P.jsx)("a",{rel:"noreferrer",target:"_blank",href:e.url,children:e.name})]},t)}))}),Object(P.jsxs)(Y,{children:[Object(P.jsx)(q,{children:t.start.toLocaleString()}),Object(P.jsxs)("div",{children:[Object(P.jsx)("a",{rel:"noreferrer",target:"_blank",href:J.google(c),children:"gcal"}),"\xa0/\xa0",Object(P.jsx)("a",{rel:"noreferrer",target:"_blank",href:J.ics(c),children:"ics"}),"\xa0/\xa0",Object(P.jsx)("a",{rel:"noreferrer",target:"_blank",href:J.outlook(c),children:"outlook"})]})]}),t.image&&Object(P.jsx)(H,{src:"images/"+t.image})]})}var Q=m.a.div(L||(L=Object(j.a)(["\n  max-width: 600px;\n  min-height: 100vh;\n  margin: 0 auto;\n  padding: 1em;\n  border: 1px solid black;\n  border-top-width: 0;\n  border-bottom-width: 0;\n  box-sizing: border-box;\n  background-color: white;\n\n\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: stretch;\n"]))),R=m.a.div(M||(M=Object(j.a)(["\n  margin: 1em;\n"]))),V=m.a.img(U||(U=Object(j.a)(["\n  width: 95%;\n  height: auto;\n"]))),X=m.a.div(_||(_=Object(j.a)(["\n  font-size: 1.5em;\n  margin-bottom: 0.2em;\n"]))),$=m.a.div(A||(A=Object(j.a)(["\n"]))),ee=(m.a.div(E||(E=Object(j.a)(["\n  font-size: 2em;\n  margin-bottom: 0.2em;\n"]))),m.a.div(B||(B=Object(j.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n"])))),te=m.a.div(I||(I=Object(j.a)(["\n  cursor: pointer;\n  margin: 0.3em;\n  padding: 0.5em;\n  box-sizing: border-box;\n  width: 7em;\n  ","\n\n"])),(function(e){return"\n    border: 0.5em solid ".concat(e.color,";\n    border-radius: ").concat(e.selected?"0":"1","em;\n    ").concat(e.selected?"\n      background-color: #ffa;\n    ":"","\n  ")}));function ne(e){var t=e.filter,n=e.setFilter,r=e.eventType,i=e.label;return Object(P.jsx)(te,{selected:t===r,color:r?v(r):"black",onClick:function(){return n(r)},children:i})}function re(){var e=Object(a.useState)(void 0),t=Object(b.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(void 0),o=Object(b.a)(c,2),s=o[0],l=o[1],j=Object(a.useCallback)(Object(d.a)(u.a.mark((function e(){var t,r,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:t=e.sent,r=t.upcoming,i=n?r.filter((function(e){return e.type===n})):r,l(i);case 6:case"end":return e.stop()}}),e)}))),[n]);return Object(a.useEffect)((function(){j()}),[j]),Object(P.jsxs)(Q,{children:[Object(P.jsxs)(R,{children:[Object(P.jsx)(V,{src:"logo.png"}),Object(P.jsx)(X,{children:"Upcoming Tough Love Arena Events"}),Object(P.jsxs)("div",{children:["Want to submit your own event? Check the ",Object(P.jsx)("a",{href:"https://github.com/toughlovearena/events",children:"GitHub"})," for instructions"]})]}),Object(P.jsxs)($,{children:[Object(P.jsxs)(ee,{children:[Object(P.jsx)(ne,{filter:n,setFilter:r,eventType:void 0,label:"All"}),Object(P.jsx)(ne,{filter:n,setFilter:r,eventType:i.Tournament,label:"Tournament"}),Object(P.jsx)(ne,{filter:n,setFilter:r,eventType:i.Stream,label:"Stream"}),Object(P.jsx)(ne,{filter:n,setFilter:r,eventType:i.Meetup,label:"Meetup"})]}),s?Object(P.jsx)("div",{children:s.map((function(e,t){return Object(P.jsx)(K,{event:e},t)}))}):Object(P.jsx)("div",{children:"loading..."})]})]})}var ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,59)).then((function(t){var n=t.getCLS,r=t.getFID,i=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),r(e),i(e),a(e),c(e)}))};s.a.render(Object(P.jsx)(c.a.StrictMode,{children:Object(P.jsx)(re,{})}),document.getElementById("root")),ie()}},[[57,1,2]]]);
//# sourceMappingURL=main.5edc8311.chunk.js.map