(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{27:function(t,e,n){"use strict";var o,r=n(4),i=(n(39),n(12)),c=function(t){return function(t){return function(e){return console.log(e),t(e)}}},l=n(6),a=n(5),u=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},p=Object(l.b)(((o={})[a.a.Type.ADD_TODO]=function(t,e){return e.payload&&e.payload.text?[{id:t.reduce(function(t,e){return Math.max(e.id||1,t)},0)+1,completed:!1,text:e.payload.text}].concat(t):t},o[a.a.Type.DELETE_TODO]=function(t,e){return t.filter(function(t){return t.id!==e.payload})},o[a.a.Type.EDIT_TODO]=function(t,e){return t.map(function(t){return t&&e&&e.payload&&(t.id||0)===e.payload.id?u({},t,{text:e.payload.text}):t})},o[a.a.Type.COMPLETE_TODO]=function(t,e){return t.map(function(t){return t.id===e.payload?u({},t,{completed:!t.completed}):t})},o[a.a.Type.COMPLETE_ALL]=function(t,e){return t.map(function(t){return u({},t,{completed:!0})})},o[a.a.Type.CLEAR_COMPLETED]=function(t,e){return t.filter(function(t){return!1===t.completed})},o),[{id:1,text:"Use Redux",completed:!1}]),d=Object(r.combineReducers)({todos:p,router:i.c});function s(t,e){var n=Object(r.applyMiddleware)(c,Object(i.b)(t));return Object(r.createStore)(d,e,n)}n.d(e,"a",function(){return s})},28:function(t,e,n){"use strict";var o,r=n(0),i=n(71),c=n(19),l=n(4),a=n(5);!function(t){!function(t){t.SHOW_ALL="all",t.SHOW_ACTIVE="active",t.SHOW_COMPLETED="completed"}(t.Filter||(t.Filter={}))}(o||(o={}));var u,p,d=n(66),s=n(13),f=(u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},function(t,e){function n(){this.constructor=t}u(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}),h=((p={})[o.Filter.SHOW_ALL]="All",p[o.Filter.SHOW_ACTIVE]="Active",p[o.Filter.SHOW_COMPLETED]="Completed",p),_=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return f(e,t),e.prototype.renderTodoCount=function(){var t=this.props.activeCount,e=1===t?"item":"items";return r.createElement("span",{className:d.count},r.createElement("strong",null,t||"No")," ",e," left")},e.prototype.renderFilterLink=function(t){var e,n=this.props,o=n.filter,i=n.onClickFilter;return r.createElement("a",{className:s((e={},e[d.selected]=t===o,e)),style:{cursor:"pointer"},onClick:function(){return i(t)},children:h[t]})},e.prototype.renderClearButton=function(){var t=this.props,e=t.completedCount,n=t.onClickClearCompleted;if(e>0)return r.createElement("button",{className:d.clearCompleted,onClick:n,children:"Clear completed"})},e.prototype.render=function(){var t=this;return r.createElement("footer",{className:d.normal},this.renderTodoCount(),r.createElement("ul",{className:d.filters},Object.keys(o.Filter).map(function(e){return r.createElement("li",{key:e,children:t.renderFilterLink(o.Filter[e])})})),this.renderClearButton())},e.defaultProps={activeCount:0,completedCount:0},e}(r.Component),m=n(64),O=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),y=function(t){function e(e,n){var o=t.call(this,e,n)||this;return o.state={text:o.props.text||""},o.handleBlur=o.handleBlur.bind(o),o.handleSubmit=o.handleSubmit.bind(o),o.handleChange=o.handleChange.bind(o),o}return O(e,t),e.prototype.handleSubmit=function(t){var e=t.currentTarget.value.trim();13===t.which&&(this.props.onSave(e),this.props.newTodo&&this.setState({text:""}))},e.prototype.handleChange=function(t){this.setState({text:t.target.value})},e.prototype.handleBlur=function(t){var e=t.target.value.trim();this.props.newTodo||this.props.onSave(e)},e.prototype.render=function(){var t,e=s(((t={})[m.edit]=this.props.editing,t[m.new]=this.props.newTodo,t),m.normal);return r.createElement("input",{className:e,type:"text",autoFocus:!0,placeholder:this.props.placeholder,value:this.state.text,onBlur:this.handleBlur,onChange:this.handleChange,onKeyDown:this.handleSubmit})},e}(r.Component),E=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),C=function(t){function e(e,n){var o=t.call(this,e,n)||this;return o.handleSave=o.handleSave.bind(o),o}return E(e,t),e.prototype.handleSave=function(t){t.length&&this.props.addTodo({text:t})},e.prototype.render=function(){return r.createElement("header",null,r.createElement("h1",null,"Todos"),r.createElement(y,{newTodo:!0,onSave:this.handleSave,placeholder:"What needs to be done?"}))},e}(r.Component),T=n(62),v=n(60),g=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),b=function(t){function e(e,n){var o=t.call(this,e,n)||this;return o.state={editing:!1},o}return g(e,t),e.prototype.handleDoubleClick=function(){this.setState({editing:!0})},e.prototype.handleSave=function(t,e){0===e.length?this.props.deleteTodo(t):this.props.editTodo({id:t,text:e}),this.setState({editing:!1})},e.prototype.render=function(){var t,e=this,n=this.props,o=n.todo,i=n.completeTodo,c=n.deleteTodo;t=this.state.editing?r.createElement(y,{text:o.text,editing:this.state.editing,onSave:function(t){return o.id&&e.handleSave(o.id,t)}}):r.createElement("div",{className:v.view},r.createElement("input",{className:v.toggle,type:"checkbox",checked:o.completed,onChange:function(){return o.id&&i(o.id)}}),r.createElement("label",{onDoubleClick:this.handleDoubleClick},o.text),r.createElement("button",{className:v.destroy,onClick:function(){o.id&&c(o.id)}}));var l,a=s(((l={})[v.completed]=o.completed,l[v.editing]=this.state.editing,l[v.normal]=!this.state.editing,l));return r.createElement("li",{className:a},t)},e}(r.Component),L=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),D=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return L(e,t),e.prototype.renderToggleAll=function(){var t=this.props,e=t.todos,n=t.actions;if(e.length>0){var o=e.some(function(t){return!t.completed});return r.createElement("input",{className:T.toggleAll,type:"checkbox",checked:o,onChange:n.completeAll})}},e.prototype.render=function(){var t=this.props,e=t.todos,n=t.actions;return r.createElement("section",{className:T.main},this.renderToggleAll(),r.createElement("ul",{className:T.normal},e.map(function(t){return r.createElement(b,{key:t.id,todo:t,completeTodo:n.completeTodo,deleteTodo:n.deleteTodo,editTodo:n.editTodo})})))},e}(r.Component);n.d(e,"a",function(){return x});var j,A=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),w=function(t,e,n,o){var r,i=arguments.length,c=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,o);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(c=(i<3?r(c):i>3?r(e,n,c):r(e,n))||c);return i>3&&c&&Object.defineProperty(e,n,c),c},P=Object.keys(o.Filter).map(function(t){return o.Filter[t]}),S=((j={})[o.Filter.SHOW_ALL]=function(){return!0},j[o.Filter.SHOW_ACTIVE]=function(t){return!t.completed},j[o.Filter.SHOW_COMPLETED]=function(t){return t.completed},j),x=function(t){function e(e,n){var o=t.call(this,e,n)||this;return o.handleClearCompleted=o.handleClearCompleted.bind(o),o.handleFilterChange=o.handleFilterChange.bind(o),o}return A(e,t),e.prototype.handleClearCompleted=function(){this.props.todos.some(function(t){return t.completed||!1})&&this.props.actions.clearCompleted()},e.prototype.handleFilterChange=function(t){this.props.history.push("#"+t)},e.prototype.render=function(){var t=this.props,e=t.todos,n=t.actions,o=t.filter,c=e.length-e.filter(function(t){return t.completed}).length,l=o?e.filter(S[o]):e,a=e.reduce(function(t,e){return e.completed?t+1:t},0);return r.createElement("div",{className:i.normal},r.createElement(C,{addTodo:n.addTodo}),r.createElement(D,{todos:l,actions:n}),r.createElement(_,{filter:o,activeCount:c,completedCount:a,onClickClearCompleted:this.handleClearCompleted,onClickFilter:this.handleFilterChange}))},e.defaultProps={filter:o.Filter.SHOW_ALL},e=w([Object(c.b)(function(t){var e=t.router.location&&t.router.location.hash.replace("#",""),n=P.find(function(t){return t===e})||o.Filter.SHOW_ALL;return{todos:t.todos,filter:n}},function(t){return{actions:Object(l.bindActionCreators)(function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return Object.keys(t).reduce(function(n,o){return e.includes(o)||(n[o]=t[o]),n},{})}(a.a,"Type"),t)}})],e)}(r.Component)},5:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var o,r=n(6);!function(t){var e;!function(t){t.ADD_TODO="ADD_TODO",t.EDIT_TODO="EDIT_TODO",t.DELETE_TODO="DELETE_TODO",t.COMPLETE_TODO="COMPLETE_TODO",t.COMPLETE_ALL="COMPLETE_ALL",t.CLEAR_COMPLETED="CLEAR_COMPLETED"}(e=t.Type||(t.Type={})),t.addTodo=Object(r.a)(e.ADD_TODO),t.editTodo=Object(r.a)(e.EDIT_TODO),t.deleteTodo=Object(r.a)(e.DELETE_TODO),t.completeTodo=Object(r.a)(e.COMPLETE_TODO),t.completeAll=Object(r.a)(e.COMPLETE_ALL),t.clearCompleted=Object(r.a)(e.CLEAR_COMPLETED)}(o||(o={}))},57:function(t,e,n){"use strict";n.r(e),function(t){var e=n(0),o=n(34),r=n(33),i=n(19),c=n(11),l=n(12),a=n(14),u=n(27),p=n(28),d=Object(a.a)(),s=Object(u.a)(d),f=Object(r.hot)(t)(function(){return e.createElement(i.a,{store:s},e.createElement(l.a,{history:d},e.createElement(c.c,null,e.createElement(c.a,{path:"/",component:p.a}))))});o.render(e.createElement(f,null),document.getElementById("root"))}.call(this,n(18)(t))},60:function(t,e){t.exports={normal:"normal__3Ivjf",toggle:"toggle__gyYcA",destroy:"destroy__6oXTL",edit:"edit__Dlke2",editing:"editing__atkUq normal__3Ivjf",view:"view__R2I1d",completed:"completed__2d4Cr"}},62:function(t,e){t.exports={main:"main__1MAoA",normal:"normal__l9hMg",editing:"editing__2LE8Z",edit:"edit__3IEu8",view:"view__cswuJ",toggle:"toggle__1euYG",completed:"completed__1VEnC",destroy:"destroy__3_fjc",toggleAll:"toggleAll__1L1bM"}},64:function(t,e){t.exports={new:"new__1LCq9",edit:"edit__2TStV"}},66:function(t,e){t.exports={normal:"normal__11G5b",filters:"filters__2Rdg5",selected:"selected__KA4tP",count:"count__2aiYj",clearCompleted:"clearCompleted__2VhED"}},71:function(t,e){t.exports={normal:"normal__1XP1U"}}},[[57,0,1]]]);