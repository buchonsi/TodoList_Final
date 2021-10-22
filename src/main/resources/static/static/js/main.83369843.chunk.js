(this["webpackJsonpreact-todolist-app"]=this["webpackJsonpreact-todolist-app"]||[]).push([[0],{23:function(e,t,n){e.exports=n(56)},28:function(e,t,n){},35:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(8),r=n.n(c),l=(n(28),n(3)),i=n(4),u=n(6),s=n(5),d=n(2),h=(n(35),n(7)),p=n.n(h),f="http://localhost:8083/api/todos",m=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={input:""},e.handleChange=function(t){e.setState({input:t.target.value})},e.handleCreate=function(){var t={text:e.state.input,checked:!1};e.props.addTodo(t),e.setState({input:""})},e.handleKeyPress=function(t){"Enter"===t.key&&e.handleCreate()},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state.input,t=this.handleChange,n=this.handleCreate,a=this.handleKeyPress;return o.a.createElement("div",{className:"form"},o.a.createElement("input",{value:e,onChange:t,onKeyPress:a}),o.a.createElement("div",{className:"create-button",onClick:n},"\ucd94\uac00"))}}]),n}(a.Component),v=Object(d.b)(null,{addTodo:function(e){return function(t){p.a.post(f,e).then((function(e){t({type:"ADD_TODO",payload:e.data})})).catch((function(e){throw console.error(e),e}))}}})(m),O=(n(54),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).handleRemove=function(t){e.props.removeTodo(t)},e.handleToggle=function(t){e.props.toggleTodo(t)},e}return Object(i.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return this.props.checked!==e.checked}},{key:"render",value:function(){var e=this.props,t=e.text,n=e.checked,a=e.id,c=this.handleRemove,r=this.handleToggle;return o.a.createElement("div",{className:"todo-item",onClick:function(){var e={id:a,text:t,checked:n};e.checked=!e.checked,r(e)}},o.a.createElement("div",{className:"remove",onClick:function(e){e.stopPropagation(),c(a)}},"\xd7"),o.a.createElement("div",{className:"todo-text ".concat(n&&"checked")},o.a.createElement("div",null,t)),n&&o.a.createElement("div",{className:"check-mark"},"\u2713"))}}]),n}(a.Component)),E=Object(d.b)(null,{removeTodo:function(e){return function(t){p.a.delete("".concat(f,"/").concat(e)).then((function(e){t({type:"REMOVE_TODO",payload:e.data})})).catch((function(e){throw console.error(e),e}))}},toggleTodo:function(e){return function(t){p.a.put("".concat(f,"/").concat(e.id),e).then((function(e){t({type:"TOGGLE_TODO",payload:e.data})})).catch((function(e){throw console.error(e),e}))}}})(O),y=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchAllTodos()}},{key:"shouldComponentUpdate",value:function(e,t){return this.props.todos!==e.todos}},{key:"render",value:function(){var e=this.props.todos.map((function(e){var t=e.id,n=e.text,a=e.checked;return o.a.createElement(E,{id:t,text:n,checked:a,key:t})}));return o.a.createElement("div",null,e)}}]),n}(a.Component),b=Object(d.b)((function(e){return{todos:e.todos}}),{fetchAllTodos:function(){return function(e){p.a.get(f).then((function(t){e({type:"FETCH_TODOS",payload:t.data})})).catch((function(e){throw console.error(e),e}))}}})(y),k=(n(55),function(e){var t=e.form,n=e.children;return o.a.createElement("main",{className:"todo-list-template"},o.a.createElement("div",{className:"title"},"\uc624\ub298\uc758 \ud560 \uc77c (","Prod\ubaa8\ub4dc",")"),o.a.createElement("section",{className:"form-wrapper"},t),o.a.createElement("section",{className:"todos-wrapper"},n))}),g=function(){return o.a.createElement("div",null,o.a.createElement(k,{form:o.a.createElement(v,null)},o.a.createElement(b,null)))},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,57)).then((function(t){var n=t.getCLS,a=t.getFID,o=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),o(e),c(e),r(e)}))},j=n(9),C=n(21),D={todos:[{id:0,text:"",checked:!1}]},w=n(22),N=Object(j.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":case"REMOVE_TODO":case"TOGGLE_TODO":case"FETCH_TODOS":return Object.assign({},e,{todos:t.payload});default:return e}}),Object(w.composeWithDevTools)(Object(j.applyMiddleware)(C.a)));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(d.a,{store:N},o.a.createElement(g,null))),document.getElementById("root")),T()}},[[23,1,2]]]);
//# sourceMappingURL=main.83369843.chunk.js.map