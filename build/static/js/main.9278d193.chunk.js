(this.webpackJsonpcounter=this.webpackJsonpcounter||[]).push([[0],{22:function(t,e,n){},23:function(t,e,n){},45:function(t,e,n){"use strict";n.r(e);var i=n(2),o=n.n(i),s=n(17),c=n.n(s),a=(n(22),n(3)),r=n(4),u=n(6),d=n(5),h=(n(23),n(24),n(0)),l=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(t){var i;return Object(a.a)(this,n),(i=e.call(this,t)).handleKeyDown=function(t){"Enter"===t.key&&(i.setState({count:i.state.count}),i.setState({isEditing:!1}))},i.handleIncrement=function(t){var e=i.state.count+1;1e3!=i.state.count&&i.setState({count:e})},i.handleDecrement=function(t){0!=i.state.count&&i.setState({count:i.state.count-1})},i.state={count:1,load:!1,isEditing:!1},i}return Object(r.a)(n,[{key:"componentDidMount",value:function(){}},{key:"handleChange",value:function(t){this.setState({count:t.target.value})}},{key:"render",value:function(){var t=this;return Object(h.jsx)("div",{className:"container",style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"},children:Object(h.jsxs)("div",{style:{padding:"10px",height:"56px",width:"180px",backgroundColor:"white"},children:[this.state.load?Object(h.jsx)("span",{}):Object(h.jsx)("div",{style:{textAlign:"left",marginBottom:"5px",height:"16px",fontSize:"12px",fontWeight:"500"},children:"Saving counter value"}),Object(h.jsxs)("div",{className:"row",style:{border:"1px solid #B24242",borderBottomLeftRadius:"8px",borderBottomRightRadius:"8px",borderTopRightRadius:"8px",borderTopLeftRadius:"8px",height:"100%",display:"flex"},children:[Object(h.jsx)("button",{id:"button3",style:{fontSize:"21px",fontWeight:"900",width:"60px",height:"56px",borderBottomLeftRadius:"8px",borderTopLeftRadius:"8px"},onClick:this.handleDecrement,children:"-"}),this.state.isEditing?Object(h.jsx)("input",{style:{textAlign:"center",width:"70px",color:"red"},type:"text",defaultValue:this.state.count,onChange:this.handleChange.bind(this),onKeyDown:this.handleKeyDown}):Object(h.jsx)("button",{id:"button2",style:{textAlign:"center",width:"60px",height:"56px"},onClick:function(){return t.setState({isEditing:!0})},children:Object(h.jsx)("span",{style:{fontSize:"21px",fontWeight:"900"},children:this.state.count})}),Object(h.jsx)("button",{id:"button1",style:{fontSize:"21px",fontWeight:"900",width:"60px",height:"56px",borderBottomRightRadius:"8px",borderTopRightRadius:"8px"},onClick:this.handleIncrement,children:"+"})]}),Object(h.jsxs)("div",{style:{textAlign:"left",marginTop:"5px",height:"16px",fontSize:"12px",fontWeight:"500"},children:["Counter Value: ",this.state.count]})]})})}}]),n}(i.Component),p=function(t){Object(u.a)(n,t);var e=Object(d.a)(n);function n(){return Object(a.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(l,{})})}}]),n}(i.Component),x=p,b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(e){var n=e.getCLS,i=e.getFID,o=e.getFCP,s=e.getLCP,c=e.getTTFB;n(t),i(t),o(t),s(t),c(t)}))};c.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root")),b()}},[[45,1,2]]]);
//# sourceMappingURL=main.9278d193.chunk.js.map