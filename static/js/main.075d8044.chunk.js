(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{1:function(t,e,s){t.exports={feedbacksCounter:"Feedback_feedbacksCounter__2f7be",statisticsList:"Feedback_statisticsList__27tlX",button:"Feedback_button__3J46g"}},16:function(t,e,s){"use strict";s.r(e);var a=s(2),n=s.n(a),c=s(4),i=s.n(c),r=s(5),o=s(6),l=s(7),d=s(9),b=s(8),j=s(1),u=s.n(j),h=s(0),O=function(t){var e=t.message;return Object(h.jsx)("div",{children:Object(h.jsx)("p",{children:e})})},x=function(t){var e=t.good,s=t.neutral,a=t.bad,n=t.getTotal,c=t.getPositive;return n?Object(h.jsxs)("div",{className:u.a.statistics,children:[Object(h.jsxs)("ul",{className:u.a.statisticsList,children:[Object(h.jsxs)("li",{className:u.a.statisticsItem,children:["Good: ",Object(h.jsx)("span",{children:e})]}),Object(h.jsxs)("li",{className:u.a.statisticsItem,children:["Neutral: ",Object(h.jsx)("span",{children:s})]}),Object(h.jsxs)("li",{className:u.a.statisticsItem,children:["Bad: ",Object(h.jsx)("span",{children:a})]})]}),Object(h.jsxs)("p",{children:["Total ",n]}),Object(h.jsxs)("p",{children:["Positive feedback: ",c,"%"]})]}):Object(h.jsx)(O,{message:"No feedback given"})};function g(t){var e=t.handleIncrement;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("button",{name:"good",type:"button",className:u.a.button,onClick:e,children:["Good"," "]}),Object(h.jsx)("button",{name:"neutral",type:"button",className:u.a.button,onClick:e,children:"Neutral"}),Object(h.jsx)("button",{name:"bad",type:"button",className:u.a.button,onClick:e,children:"Bad"})]})}var m=function(t){var e=t.title,s=t.children;return Object(h.jsxs)("section",{children:[Object(h.jsx)("h2",{children:e}),s]})},f=function(t){Object(d.a)(s,t);var e=Object(b.a)(s);function s(){var t;Object(o.a)(this,s);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).state={good:0,neutral:0,bad:0},t.handleIncrement=function(e){var s=e.target.name;t.setState((function(t){return Object(r.a)({},s,t[s]+1)}))},t.getTotal=function(){return t.state.good+t.state.neutral+t.state.bad},t.getPositive=function(){return t.getTotal()?(t.state.good/t.getTotal()*100).toFixed():0},t}return Object(l.a)(s,[{key:"render",value:function(){var t=this.state,e=t.good,s=t.bad,a=t.neutral;return Object(h.jsxs)("div",{className:u.a.feedbacksCounter,children:[Object(h.jsx)(m,{title:"Please leave feedback",children:Object(h.jsx)("div",{className:u.a.feedbacksChoice,children:Object(h.jsx)(g,{handleIncrement:this.handleIncrement})})}),Object(h.jsx)(m,{title:"Statistics",children:Object(h.jsx)(x,{good:e,neutral:a,bad:s,getTotal:this.getTotal(),getPositive:this.getPositive()})})]})}}]),s}(a.Component),v=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(f,{})})};s(15);i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.075d8044.chunk.js.map