(this.webpackJsonpreact_18=this.webpackJsonpreact_18||[]).push([[0],{21:function(e,t,a){e.exports=a(40)},26:function(e,t,a){},27:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(18),l=a.n(r),s=(a(26),a(10)),i=a(9),m=a(3),o=a(4),u=a(5),f=a(6),p=(a(27),function(e){Object(f.a)(a,e);var t=Object(u.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("header",null,c.a.createElement("ul",{className:"nav"},c.a.createElement("li",null,c.a.createElement(s.b,{to:"/"},"Home")),c.a.createElement("li",null,c.a.createElement(s.b,{to:"/post"},"Post")),c.a.createElement("li",null,c.a.createElement(s.b,{to:"/images"},"Images")),c.a.createElement("li",null,c.a.createElement(s.b,{to:"/contacts"},"Contacts"))))}}]),a}(n.Component)),h=function(e){Object(f.a)(a,e);var t=Object(u.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(p,null),this.props.children)}}]),a}(n.Component);var d=function(){return c.a.createElement("div",{className:"footer"},c.a.createElement("div",{className:"cont"},c.a.createElement("i",{className:"far fa-comment"}),c.a.createElement("div",{className:"number white__"},"482")),c.a.createElement("div",{className:"cont"},c.a.createElement("i",{className:"fas fa-retweet"}),c.a.createElement("span",{className:"number white__"},"146")),c.a.createElement("div",{className:"cont"},c.a.createElement("i",{className:"far fa-heart"}),c.a.createElement("span",{className:"number white__"},"887")),c.a.createElement("div",{className:"cont"},c.a.createElement("i",{class:"fas fa-upload"})))};var E=function(e){return c.a.createElement("div",{className:"content"},c.a.createElement("img",{src:e.image,className:"img1"}))};var v=function(e){return c.a.createElement("div",{className:"header"},c.a.createElement("img",{src:e.info.author.photo,className:"img_logo"}),c.a.createElement("div",{className:"info"},c.a.createElement("div",{className:"name"},c.a.createElement("div",{className:"white"},e.info.author.name),c.a.createElement("div",{className:"white__ ml5"},e.info.author.nickname),c.a.createElement("div",{className:"white__ ml5"},e.info.date)),c.a.createElement("span",{className:"white"},e.info.content)),c.a.createElement("div",{className:"down white__"},">"))};a(33);var g=function(e){return c.a.createElement("div",{className:"box1"},c.a.createElement(v,{info:e}),c.a.createElement(E,{image:e.image}),c.a.createElement(d,null))},b=(a(34),function(){return c.a.createElement("div",{className:"Images"},c.a.createElement("h2",null,"Images"),c.a.createElement("img",{src:"https://images.unsplash.com/photo-1585856230908-b07a232d1bc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"}),c.a.createElement("img",{src:"https://images.unsplash.com/photo-1586115176276-3f7fe651ccf2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMDk0fQ&auto=format&fit=crop&w=600&q=60"}),c.a.createElement("img",{src:"https://images.unsplash.com/photo-1545559054-8f4f9e855781?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"}))}),N=(a(35),function(){return c.a.createElement("div",{className:"Home"},c.a.createElement("h2",null,"Here mast be text"),c.a.createElement("img",{src:"https://images.unsplash.com/photo-1585194329142-2d0fcb38813e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",alt:""}))}),k=(a(36),function(e){Object(f.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={isOpen:!1,gender:e.props.user.gender},e.clickContact=function(){e.setState({isOpen:!e.state.isOpen})},e}return Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{onClick:this.clickContact,className:"contact"},c.a.createElement("div",{className:"contact__item"},c.a.createElement("h3",null,this.props.user.lastName),c.a.createElement("i",{className:{male:"fas fa-mars",female:"fas fa-venus"}[this.state.gender]+" img"})),this.state.isOpen?c.a.createElement("div",{className:"info"},c.a.createElement("p",null,"\u0406\u043c'\u044f: ",this.props.user.firstName),c.a.createElement("p",null,"\u043d\u043e\u043c\u0435\u0440: ",this.props.user.phone),c.a.createElement("p",null,"\u0441\u0442\u0430\u0442\u044c: ",this.props.user.gender)):"")}}]),a}(n.Component)),y=(a(37),function(e){Object(f.a)(a,e);var t=Object(u.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.updateStateMale,a=e.updateStateFemale,n=e.updateStateUnknow;return c.a.createElement("div",{className:"checkbox"},"Male",c.a.createElement("input",{type:"checkbox",defaultChecked:!0,onChange:t}),"Female",c.a.createElement("input",{type:"checkbox",defaultChecked:!0,onChange:a}),"Unknow",c.a.createElement("input",{type:"checkbox",defaultChecked:!0,onChange:n}))}}]),a}(n.Component)),w=(a(38),a(39),function(e){Object(f.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={value:"",contacts:e.props.contacts,male:!0,female:!0,unknow:!0},e.changeValueInput=function(t){e.setState({value:t.target.value})},e.checkedArray=function(){return[!0===e.state.male?e.state.contacts.filter((function(e){return"male"===e.gender})):[],!0===e.state.female?e.state.contacts.filter((function(e){return"female"===e.gender})):[],!0===e.state.unknow?e.state.contacts.filter((function(e){return"\u0410\u043d\u043e\u043d\u0438\u043c\u0443\u0441"===e.lastName})):[]].flat()},e.searchWithCheckBox=function(){return"\u043e\u043d"===e.state.value?e.checkedArray().filter((function(e){return"male"===e.gender})):"\u043e\u043d\u0430"===e.state.value?e.checkedArray().filter((function(e){return"female"===e.gender})):e.checkedArray().filter((function(t){return!0===t.lastName.toLowerCase().includes(e.state.value)||!0===t.firstName.toLowerCase().includes(e.state.value)||!0===t.phone.includes(e.state.value)}))},e.updateStateMale=function(){e.setState({male:!e.state.male})},e.updateStateFemale=function(){e.setState({female:!e.state.female})},e.updateStateUnknow=function(){e.setState({unknow:!e.state.unknow})},e}return Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"input"},c.a.createElement("input",{className:"input__item",placeholder:"\u043f\u043e\u0448\u0443\u043a",onChange:this.changeValueInput,value:this.state.value}),c.a.createElement(y,{updateStateMale:this.updateStateMale,updateStateUnknow:this.updateStateUnknow,updateStateFemale:this.updateStateFemale}),c.a.createElement("div",{className:"contacts"},this.searchWithCheckBox().map((function(e){return c.a.createElement(k,{key:e.lastName,user:e})}))))}}]),a}(n.Component)),O=function(e){Object(f.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={contacts:[{firstName:"\u0411\u0430\u0440\u043d\u0435\u0439",lastName:"\u0421\u0442\u0438\u043d\u0441\u043e\u0432\u0441\u043a\u0438\u0439",phone:"+380956319521",gender:"male"},{firstName:"\u0420\u043e\u0431\u0438\u043d",lastName:"\u0429\u0435\u0440\u0431\u0430\u0442\u0441\u043a\u0430\u044f",phone:"+380931460123",gender:"female"},{firstName:"\u0410\u043d\u043e\u043c\u043d\u044b\u0439",lastName:"\u0410\u043d\u043e\u043d\u0438\u043c\u0443\u0441",phone:"+380666666666",gender:""},{firstName:"\u041b\u0438\u043b\u0438\u044f",lastName:"\u041e\u043b\u0434\u0440\u043e\u0432\u043d\u0430",phone:"+380504691254",gender:"female"},{firstName:"\u041c\u0430\u0440\u0448\u044d\u043d",lastName:"\u042d\u0440\u0438\u043a\u0441\u043e\u043d\u044f\u043d",phone:"+380739432123",gender:"male"},{firstName:"\u0422\u0435\u043e\u0434\u043e\u0440",lastName:"\u041c\u043e\u0442\u0441\u0431\u044d\u0441",phone:"+380956319521",gender:"male"}]},e}return Object(o.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"box"},c.a.createElement("h2",{className:"title"},"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0438:"),c.a.createElement(w,{contacts:this.state.contacts}))}}]),a}(n.Component);function j(){return c.a.createElement(s.a,null,c.a.createElement(h,null,c.a.createElement(i.c,null,c.a.createElement(i.a,{path:"/post"},c.a.createElement(g,{author:{name:"Anakin Skywalker",photo:"https://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/220px-Anakin-Jedi.jpg",nickname:"@dart_vader"},content:"WTF? Who is Ray? Why she is Skywalker? Luke...?",image:"https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale",date:"26 \u0444\u0435\u0432\u0440."})),c.a.createElement(i.a,{path:"/images"},c.a.createElement(b,null)),c.a.createElement(i.a,{path:"/contacts"},c.a.createElement(O,null)),c.a.createElement(i.a,{path:"/"},c.a.createElement(N,null)))))}l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(j,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.25effaa0.chunk.js.map