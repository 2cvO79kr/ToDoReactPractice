(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],[,,,,function(t,e,a){t.exports={notCompliteTask:"TodoList_notCompliteTask__1aEO-",compliteTask:"TodoList_compliteTask__1ogGJ"}},,,,function(t,e,a){t.exports={App:"App_App__3TcqO","App-logo":"App_App-logo__2BSSo","App-logo-spin":"App_App-logo-spin__3-Cdi","App-header":"App_App-header__1mQh8","App-link":"App_App-link__1aylY",container:"App_container__23H9O"}},,function(t,e,a){t.exports=a(16)},,,,,function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),c=a(7),r=a.n(c),i=(a(15),a(9)),l=function(t){return o.a.createElement("div",{className:"toDoForm"},o.a.createElement("input",{type:"text",onChange:t.inputChange,placeholder:"Your task",value:t.state.inputValue}),o.a.createElement("button",{onClick:t.pushTask},"add"),o.a.createElement("button",{onClick:t.cleanReadyTask},"clean"))},u=a(4),p=a.n(u),s=function(t){return o.a.createElement("div",{className:p.a.listContainer},t.state.toDoData.map((function(e){return o.a.createElement("div",{key:t.state.toDoData.indexOf(e),className:e.complited?p.a.compliteTask:p.a.notCompliteTask},e.task,o.a.createElement("button",{onClick:t.complite},"com"),o.a.createElement("button",{onClick:t.delete},"del"))})))},m=a(5),d=a(1),D=function(t,e){switch(e.type){case"ADD_POS":var a={task:t.inputValue,complited:!1};return 0==a.task.length||t.toDoData.some((function(t){return t.task===a.task}))?Object(d.a)(Object(d.a)({},t),{},{toDoData:Object(m.a)(t.toDoData),inputValue:""}):Object(d.a)(Object(d.a)({},t),{},{toDoData:[].concat(Object(m.a)(t.toDoData),[a]),inputValue:""});case"COM_POS":return Object(d.a)(Object(d.a)({},t),{},{toDoData:Object(m.a)(t.toDoData.map((function(t){return t.task===e.value?{task:t.task,complited:!t.complited}:t}))),inputValue:""});case"DEL_POS":return Object(d.a)(Object(d.a)({},t),{},{toDoData:t.toDoData.filter((function(t){return t.task!=e.value})),inputValue:""});case"INPUT_VAL":return Object(d.a)(Object(d.a)({},t),{},{inputValue:e.text});case"CLEAN_COMPLITE":return Object(d.a)(Object(d.a)({},t),{},{toDoData:t.toDoData.filter((function(t){return 0==t.complited})),inputValue:""});default:return t}},_=a(8),k=a.n(_),O=function(){var t=Object(n.useReducer)(D,{inputValue:"",toDoData:[]}),e=Object(i.a)(t,2),a=e[0],c=e[1];return o.a.createElement("div",{className:k.a.container},o.a.createElement(l,{state:a,pushTask:function(){c({type:"ADD_POS"})},cleanReadyTask:function(){c({type:"CLEAN_COMPLITE"})},inputChange:function(t){var e=t.currentTarget.value;c(function(t){return{type:"INPUT_VAL",text:t}}(e))}}),o.a.createElement(s,{state:a,delete:function(t){var e=t.currentTarget.parentNode.firstChild.data;c({type:"DEL_POS",value:e})},complite:function(t){var e=t.currentTarget.parentNode.firstChild.data;c({type:"COM_POS",value:e})}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.010a0c5c.chunk.js.map