(this["webpackJsonpreaktor-assignment"]=this["webpackJsonpreaktor-assignment"]||[]).push([[0],{141:function(e,t,a){},142:function(e,t,a){},150:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(12),i=a.n(r),c=(a(141),a.p,a(142),a(89)),o=a(17),h=a(27),l=a(24),g=a(25),j=a(31),u=a(30),b=(a(87),a(204)),d=a(207),O=a(202),p=a(203),x=a(205),P=a(206),m=a(117),v=a(161),f=a(4),w=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={status:""},n}return Object(g.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://calm-temple-69565.herokuapp.com/ava/".concat(this.props.id)).then((function(e){return e.json()})).then((function(t){e.setState({status:t.status})}))}},{key:"render",value:function(){return Object(f.jsx)("div",{children:this.state.status})}}]),a}(n.Component),k=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).ismounted=!1,n.handleChangePage=function(e,t){n.setState({page:t})},n.handleChangeRowsPerPage=function(e){n.setState({rowsPerPage:parseInt(e.target.value,10)}),n.setState({page:0})},n.state={gloves:[],page:0,rowsPerPage:15},n}return Object(g.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://calm-temple-69565.herokuapp.com/gloves").then((function(e){return e.json()})).then((function(t){e.setState({gloves:t},(function(){console.log(e.state.gloves)}))}))}},{key:"render",value:function(){var e;return Object(f.jsxs)("div",{children:[Object(f.jsx)(p.a,{component:m.a,children:Object(f.jsxs)(b.a,{size:"small","aria-label":"a dense table",children:[Object(f.jsx)(x.a,{children:Object(f.jsxs)(P.a,{children:[Object(f.jsx)(O.a,{children:"Dessert (100g serving)"}),Object(f.jsx)(O.a,{align:"right",children:"name"}),Object(f.jsx)(O.a,{align:"right",children:"manufacturer"}),Object(f.jsx)(O.a,{align:"right",children:"type"}),Object(f.jsx)(O.a,{align:"right",children:"price"}),Object(f.jsx)(O.a,{align:"right",children:"color"}),Object(f.jsx)(O.a,{align:"right",children:"stock"})]})}),Object(f.jsx)(d.a,{children:this.state.gloves.slice(this.state.page*this.state.rowsPerPage,this.state.page*this.state.rowsPerPage+this.state.rowsPerPage).map((function(e){return Object(f.jsxs)(P.a,{children:[Object(f.jsx)(O.a,{component:"th",scope:"row",children:e.name}),Object(f.jsx)(O.a,{align:"right",children:e.name}),Object(f.jsx)(O.a,{align:"right",children:e.manufacturer}),Object(f.jsx)(O.a,{align:"right",children:e.type}),Object(f.jsx)(O.a,{align:"right",children:e.price}),Object(f.jsx)(O.a,{align:"right",children:e.color}),Object(f.jsx)(O.a,{align:"right",children:Object(f.jsx)(w,{id:e.id.toUpperCase()})})]},e.name)}))})]})}),Object(f.jsx)(v.a,(e={component:"div",rowsPerPageOptions:[10,15,20],count:this.state.gloves.length,rowsPerPage:this.state.rowsPerPage,page:this.state.page,onChangePage:this.handleChangePage},Object(h.a)(e,"rowsPerPage",this.state.rowsPerPage),Object(h.a)(e,"onChangeRowsPerPage",this.handleChangeRowsPerPage),e))]})}}]),a}(n.Component),C=a(90),y=a.n(C),S=a(114),R=a(61),D=a(209),M=a(208),I=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={value:null,username:null},n.handleChange=n.handleChange.bind(Object(R.a)(n)),n.handleRedirect=n.handleRedirect.bind(Object(R.a)(n)),n}return Object(g.a)(a,[{key:"componentDidMount",value:function(){var e=Object(S.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"/reaktor-assignment/gloves"===window.location.pathname?this.setState({value:0}):"/reaktor-assignment/beanies"===window.location.pathname?this.setState({value:1}):"/reaktor-assignment/facemasks"===window.location.pathname&&this.setState({value:2});case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleChange",value:function(e,t){this.setState({value:t})}},{key:"handleRedirect",value:function(){return 0===this.state.value?Object(f.jsx)(o.a,{to:"/reaktor-assignment/gloves"}):1===this.state.value?Object(f.jsx)(o.a,{to:"/reaktor-assignment/beanies"}):2===this.state.value?Object(f.jsx)(o.a,{to:"/reaktor-assignment/facemasks"}):null}},{key:"render",value:function(){return Object(f.jsxs)(m.a,{square:!0,children:[Object(f.jsxs)(D.a,{value:void 0|this.state.value,indicatorColor:"primary",textColor:"primary",onChange:this.handleChange,scrollButtons:"on",variant:"scrollable",children:[Object(f.jsx)(M.a,{label:"gloves"}),Object(f.jsx)(M.a,{label:"beanies"}),Object(f.jsx)(M.a,{label:"facemasks"})]}),this.handleRedirect()]})}}]),a}(n.Component),F=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).ismounted=!1,n.handleChangePage=function(e,t){n.setState({page:t})},n.handleChangeRowsPerPage=function(e){n.setState({rowsPerPage:parseInt(e.target.value,10)}),n.setState({page:0})},n.state={gloves:[],page:0,rowsPerPage:15},n}return Object(g.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://calm-temple-69565.herokuapp.com/facemasks").then((function(e){return e.json()})).then((function(t){e.setState({gloves:t},(function(){console.log(e.state.gloves)}))}))}},{key:"render",value:function(){var e;return Object(f.jsxs)("div",{children:[Object(f.jsx)(p.a,{component:m.a,children:Object(f.jsxs)(b.a,{size:"small","aria-label":"a dense table",children:[Object(f.jsx)(x.a,{children:Object(f.jsxs)(P.a,{children:[Object(f.jsx)(O.a,{children:"Dessert (100g serving)"}),Object(f.jsx)(O.a,{align:"right",children:"name"}),Object(f.jsx)(O.a,{align:"right",children:"manufacturer"}),Object(f.jsx)(O.a,{align:"right",children:"type"}),Object(f.jsx)(O.a,{align:"right",children:"price"}),Object(f.jsx)(O.a,{align:"right",children:"color"}),Object(f.jsx)(O.a,{align:"right",children:"stock"})]})}),Object(f.jsx)(d.a,{children:this.state.gloves.slice(this.state.page*this.state.rowsPerPage,this.state.page*this.state.rowsPerPage+this.state.rowsPerPage).map((function(e){return Object(f.jsxs)(P.a,{children:[Object(f.jsx)(O.a,{component:"th",scope:"row",children:e.name}),Object(f.jsx)(O.a,{align:"right",children:e.name}),Object(f.jsx)(O.a,{align:"right",children:e.manufacturer}),Object(f.jsx)(O.a,{align:"right",children:e.type}),Object(f.jsx)(O.a,{align:"right",children:e.price}),Object(f.jsx)(O.a,{align:"right",children:e.color}),Object(f.jsx)(O.a,{align:"right",children:Object(f.jsx)(w,{id:e.id.toUpperCase()})})]},e.name)}))})]})}),Object(f.jsx)(v.a,(e={component:"div",rowsPerPageOptions:[10,15,20],count:this.state.gloves.length,rowsPerPage:this.state.rowsPerPage,page:this.state.page,onChangePage:this.handleChangePage},Object(h.a)(e,"rowsPerPage",this.state.rowsPerPage),Object(h.a)(e,"onChangeRowsPerPage",this.handleChangeRowsPerPage),e))]})}}]),a}(n.Component),z=function(e){Object(j.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).ismounted=!1,n.handleChangePage=function(e,t){n.setState({page:t})},n.handleChangeRowsPerPage=function(e){n.setState({rowsPerPage:parseInt(e.target.value,10)}),n.setState({page:0})},n.state={gloves:[],page:0,rowsPerPage:15},n}return Object(g.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://calm-temple-69565.herokuapp.com/beanies").then((function(e){return e.json()})).then((function(t){e.setState({gloves:t},(function(){console.log(e.state.gloves)}))}))}},{key:"render",value:function(){var e;return Object(f.jsxs)("div",{children:[Object(f.jsx)(p.a,{component:m.a,children:Object(f.jsxs)(b.a,{size:"small","aria-label":"a dense table",children:[Object(f.jsx)(x.a,{children:Object(f.jsxs)(P.a,{children:[Object(f.jsx)(O.a,{children:"Dessert (100g serving)"}),Object(f.jsx)(O.a,{align:"right",children:"name"}),Object(f.jsx)(O.a,{align:"right",children:"manufacturer"}),Object(f.jsx)(O.a,{align:"right",children:"type"}),Object(f.jsx)(O.a,{align:"right",children:"price"}),Object(f.jsx)(O.a,{align:"right",children:"color"}),Object(f.jsx)(O.a,{align:"right",children:"stock"})]})}),Object(f.jsx)(d.a,{children:this.state.gloves.slice(this.state.page*this.state.rowsPerPage,this.state.page*this.state.rowsPerPage+this.state.rowsPerPage).map((function(e){return Object(f.jsxs)(P.a,{children:[Object(f.jsx)(O.a,{component:"th",scope:"row",children:e.name}),Object(f.jsx)(O.a,{align:"right",children:e.name}),Object(f.jsx)(O.a,{align:"right",children:e.manufacturer}),Object(f.jsx)(O.a,{align:"right",children:e.type}),Object(f.jsx)(O.a,{align:"right",children:e.price}),Object(f.jsx)(O.a,{align:"right",children:e.color}),Object(f.jsx)(O.a,{align:"right",children:Object(f.jsx)(w,{id:e.id.toUpperCase()})})]},e.name)}))})]})}),Object(f.jsx)(v.a,(e={component:"div",rowsPerPageOptions:[10,15,20],count:this.state.gloves.length,rowsPerPage:this.state.rowsPerPage,page:this.state.page,onChangePage:this.handleChangePage},Object(h.a)(e,"rowsPerPage",this.state.rowsPerPage),Object(h.a)(e,"onChangeRowsPerPage",this.handleChangeRowsPerPage),e))]})}}]),a}(n.Component);var B=function(){return Object(f.jsxs)(c.a,{children:[Object(f.jsx)(I,{}),Object(f.jsx)(o.b,{exact:!0,path:"/reaktor-assignment/gloves",component:k}),Object(f.jsx)(o.b,{exact:!0,path:"/reaktor-assignment/facemasks",component:F}),Object(f.jsx)(o.b,{exact:!0,path:"/reaktor-assignment/beanies",component:z})]})},U=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,211)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),r(e),i(e)}))};i.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(B,{})}),document.getElementById("root")),U()}},[[150,1,2]]]);
//# sourceMappingURL=main.20efe3f4.chunk.js.map