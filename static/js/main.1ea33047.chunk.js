(this["webpackJsonpreaktor-assignment"]=this["webpackJsonpreaktor-assignment"]||[]).push([[0],{134:function(e,t,a){},135:function(e,t,a){},141:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(12),c=a.n(r),i=(a(134),a.p,a(135),a(24)),o=a(21),h=a(22),l=a(27),g=a(26),j=(a(84),a(195)),u=a(198),d=a(193),b=a(194),O=a(196),p=a(197),P=a(109),x=a(152),v=a(5),m=function(e){Object(l.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={status:""},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://calm-temple-69565.herokuapp.com/ava/".concat(this.props.id)).then((function(e){return e.json()})).then((function(t){e.setState({status:t.status})}))}},{key:"render",value:function(){return Object(v.jsx)("div",{children:this.state.status})}}]),a}(n.Component),f=function(e){Object(l.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).ismounted=!1,n.handleChangePage=function(e,t){n.setState({page:t})},n.handleChangeRowsPerPage=function(e){n.setState({rowsPerPage:parseInt(e.target.value,10)}),n.setState({page:0})},n.state={gloves:[],page:0,rowsPerPage:15},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://calm-temple-69565.herokuapp.com/gloves").then((function(e){return e.json()})).then((function(t){e.setState({gloves:t},(function(){console.log(e.state.gloves)}))}))}},{key:"render",value:function(){var e;return Object(v.jsxs)("div",{children:[Object(v.jsx)(b.a,{component:P.a,children:Object(v.jsxs)(j.a,{size:"small","aria-label":"a dense table",children:[Object(v.jsx)(O.a,{children:Object(v.jsxs)(p.a,{children:[Object(v.jsx)(d.a,{children:"Name"}),Object(v.jsx)(d.a,{align:"right",children:"manufacturer"}),Object(v.jsx)(d.a,{align:"right",children:"type"}),Object(v.jsx)(d.a,{align:"right",children:"price"}),Object(v.jsx)(d.a,{align:"right",children:"color"}),Object(v.jsx)(d.a,{align:"right",children:"stock"})]})}),Object(v.jsx)(u.a,{children:this.state.gloves.slice(this.state.page*this.state.rowsPerPage,this.state.page*this.state.rowsPerPage+this.state.rowsPerPage).map((function(e){return Object(v.jsxs)(p.a,{children:[Object(v.jsx)(d.a,{component:"th",scope:"row",children:e.name}),Object(v.jsx)(d.a,{align:"right",children:e.manufacturer}),Object(v.jsx)(d.a,{align:"right",children:e.type}),Object(v.jsx)(d.a,{align:"right",children:e.price}),Object(v.jsx)(d.a,{align:"right",children:e.color}),Object(v.jsx)(d.a,{align:"right",children:Object(v.jsx)(m,{id:e.id.toUpperCase()})})]},e.name)}))})]})}),Object(v.jsx)(x.a,(e={component:"div",rowsPerPageOptions:[10,15,20],count:this.state.gloves.length,rowsPerPage:this.state.rowsPerPage,page:this.state.page,onChangePage:this.handleChangePage},Object(i.a)(e,"rowsPerPage",this.state.rowsPerPage),Object(i.a)(e,"onChangeRowsPerPage",this.handleChangeRowsPerPage),e))]})}}]),a}(n.Component),w=a(58),C=a(200),k=a(199),y=function(e){Object(l.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).ismounted=!1,n.handleChangePage=function(e,t){n.setState({page:t})},n.handleChangeRowsPerPage=function(e){n.setState({rowsPerPage:parseInt(e.target.value,10)}),n.setState({page:0})},n.state={gloves:[],page:0,rowsPerPage:15},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://calm-temple-69565.herokuapp.com/beanies").then((function(e){return e.json()})).then((function(t){e.setState({gloves:t},(function(){console.log(e.state.gloves)}))}))}},{key:"render",value:function(){var e;return Object(v.jsxs)("div",{children:[Object(v.jsx)(b.a,{component:P.a,children:Object(v.jsxs)(j.a,{size:"small","aria-label":"a dense table",children:[Object(v.jsx)(O.a,{children:Object(v.jsxs)(p.a,{children:[Object(v.jsx)(d.a,{children:"Name"}),Object(v.jsx)(d.a,{align:"right",children:"manufacturer"}),Object(v.jsx)(d.a,{align:"right",children:"type"}),Object(v.jsx)(d.a,{align:"right",children:"price"}),Object(v.jsx)(d.a,{align:"right",children:"color"}),Object(v.jsx)(d.a,{align:"right",children:"stock"})]})}),Object(v.jsx)(u.a,{children:this.state.gloves.slice(this.state.page*this.state.rowsPerPage,this.state.page*this.state.rowsPerPage+this.state.rowsPerPage).map((function(e){return Object(v.jsxs)(p.a,{children:[Object(v.jsx)(d.a,{component:"th",scope:"row",children:e.name}),Object(v.jsx)(d.a,{align:"right",children:e.manufacturer}),Object(v.jsx)(d.a,{align:"right",children:e.type}),Object(v.jsx)(d.a,{align:"right",children:e.price}),Object(v.jsx)(d.a,{align:"right",children:e.color}),Object(v.jsx)(d.a,{align:"right",children:Object(v.jsx)(m,{id:e.id.toUpperCase()})})]},e.name)}))})]})}),Object(v.jsx)(x.a,(e={component:"div",rowsPerPageOptions:[10,15,20],count:this.state.gloves.length,rowsPerPage:this.state.rowsPerPage,page:this.state.page,onChangePage:this.handleChangePage},Object(i.a)(e,"rowsPerPage",this.state.rowsPerPage),Object(i.a)(e,"onChangeRowsPerPage",this.handleChangeRowsPerPage),e))]})}}]),a}(n.Component),S=function(e){Object(l.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).ismounted=!1,n.handleChangePage=function(e,t){n.setState({page:t})},n.handleChangeRowsPerPage=function(e){n.setState({rowsPerPage:parseInt(e.target.value,10)}),n.setState({page:0})},n.state={gloves:[],page:0,rowsPerPage:15},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://calm-temple-69565.herokuapp.com/facemasks").then((function(e){return e.json()})).then((function(t){e.setState({gloves:t},(function(){console.log(e.state.gloves)}))}))}},{key:"render",value:function(){var e;return Object(v.jsxs)("div",{children:[Object(v.jsx)(b.a,{component:P.a,children:Object(v.jsxs)(j.a,{size:"small","aria-label":"a dense table",children:[Object(v.jsx)(O.a,{children:Object(v.jsxs)(p.a,{children:[Object(v.jsx)(d.a,{children:"Name"}),Object(v.jsx)(d.a,{align:"right",children:"manufacturer"}),Object(v.jsx)(d.a,{align:"right",children:"type"}),Object(v.jsx)(d.a,{align:"right",children:"price"}),Object(v.jsx)(d.a,{align:"right",children:"color"}),Object(v.jsx)(d.a,{align:"right",children:"stock"})]})}),Object(v.jsx)(u.a,{children:this.state.gloves.slice(this.state.page*this.state.rowsPerPage,this.state.page*this.state.rowsPerPage+this.state.rowsPerPage).map((function(e){return Object(v.jsxs)(p.a,{children:[Object(v.jsx)(d.a,{component:"th",scope:"row",children:e.name}),Object(v.jsx)(d.a,{align:"right",children:e.manufacturer}),Object(v.jsx)(d.a,{align:"right",children:e.type}),Object(v.jsx)(d.a,{align:"right",children:e.price}),Object(v.jsx)(d.a,{align:"right",children:e.color}),Object(v.jsx)(d.a,{align:"right",children:Object(v.jsx)(m,{id:e.id.toUpperCase()})})]},e.name)}))})]})}),Object(v.jsx)(x.a,(e={component:"div",rowsPerPageOptions:[10,15,20],count:this.state.gloves.length,rowsPerPage:this.state.rowsPerPage,page:this.state.page,onChangePage:this.handleChangePage},Object(i.a)(e,"rowsPerPage",this.state.rowsPerPage),Object(i.a)(e,"onChangeRowsPerPage",this.handleChangeRowsPerPage),e))]})}}]),a}(n.Component),R=function(e){Object(l.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={value:null,username:null},n.handleChange=n.handleChange.bind(Object(w.a)(n)),n.handleRedirect=n.handleRedirect.bind(Object(w.a)(n)),n}return Object(h.a)(a,[{key:"handleChange",value:function(e,t){this.setState({value:t})}},{key:"handleRedirect",value:function(){return 0===this.state.value?Object(v.jsx)(f,{}):1===this.state.value?Object(v.jsx)(y,{}):2===this.state.value?Object(v.jsx)(S,{}):Object(v.jsx)(f,{})}},{key:"render",value:function(){return Object(v.jsxs)(P.a,{square:!0,children:[Object(v.jsxs)(C.a,{value:void 0|this.state.value,indicatorColor:"primary",textColor:"primary",onChange:this.handleChange,scrollButtons:"on",variant:"scrollable",children:[Object(v.jsx)(k.a,{label:"gloves"}),Object(v.jsx)(k.a,{label:"beanies"}),Object(v.jsx)(k.a,{label:"facemasks"})]}),this.handleRedirect()]})}}]),a}(n.Component);var D=function(){return Object(v.jsx)(R,{})},I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,202)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),r(e),c(e)}))};c.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(D,{})}),document.getElementById("root")),I()}},[[141,1,2]]]);
//# sourceMappingURL=main.1ea33047.chunk.js.map