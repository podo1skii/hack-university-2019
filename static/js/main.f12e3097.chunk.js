(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{142:function(e,t,a){},143:function(e,t,a){},170:function(e,t){},173:function(e,t,a){"use strict";a.r(t);a(95),a(120);var n=a(0),l=a.n(n),r=a(27),c=a.n(r),i=a(28),s=a.n(i),o=a(7),u=a(8),m=a(10),d=a(9),v=a(11),h=a(6),f=a(1),E=(a(26),a(86)),p=a.n(E),b=a(87),y=a.n(b),g=a(88),C=a.n(g),S=a(93);function O(e){console.log(e);var t=new Date,a=new Date(e.split(".")[2],e.split(".")[1],e.split(".")[0]);return Math.round((t.valueOf()-a.valueOf())/1e3/60/60/24/365.25)}function j(e,t){switch(!0){case e<=10:return"\u0414\u043e\u043c\u043e\u0441\u0435\u0434";case e<=30:return"\u0424\u0430\u043d\u0430\u0442";case e<=50:return"\u041f\u0430\u0442\u0438\u043c\u0435\u0439\u043a\u0435\u0440";default:return 2===t?"\u041a\u043e\u0440\u043e\u043b\u044c \u0432\u0435\u0447\u0435\u0440\u0438\u043d\u043e\u043a":"\u041a\u043e\u0440\u043e\u043b\u0435\u0432\u0430 \u0432\u0435\u0447\u0435\u0440\u0438\u043d\u043e\u043a"}}function P(e){switch(!0){case e<=10:return"#228B22";case e<=30:return"#5281b7";case e<=50:return"#FF7F50";default:return"#FF0000"}}var x=a(89),k=a.n(x),T=a(90),z=a.n(T),U=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={activePanel:"profile",city:"\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433",gameCount:"",team:""},a.onChangePanel=a.onChangePanel.bind(Object(h.a)(Object(h.a)(a))),a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"onChangePanel",value:function(e){this.setState({activePanel:e.currentTarget.dataset.panel})}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e,t,a={flexShrink:0,width:80,height:80,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12};return l.a.createElement(f.View,{id:"profile",activePanel:this.state.activePanel},l.a.createElement(f.Panel,{id:"profile"},l.a.createElement(f.PanelHeader,null,"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),this.props.fetchedUser&&l.a.createElement(l.a.Fragment,null,l.a.createElement(f.Group,null,l.a.createElement(f.Cell,{before:this.props.fetchedUser.photo_200?l.a.createElement(f.Avatar,{size:60,src:this.props.fetchedUser.photo_200}):null,size:"l",description:(t=O(this.props.fetchedUser.bdate),(t>9&&t<21?t+" \u043b\u0435\u0442":t%10===1?t+" \u0433\u043e\u0434":t%10<5?t+" \u0433\u043e\u0434\u0430":t%10>=5?t+" \u043b\u0435\u0442":void 0)+", "+(this.props.fetchedUser.city&&this.props.fetchedUser.city.title?this.props.fetchedUser.city.title:"")),bottomContent:l.a.createElement("div",{style:{display:"flex"}},l.a.createElement(z.a,{style:{color:P(30)}}),l.a.createElement("div",{style:{lineHeight:"14px",fontSize:"14px",color:P(30),paddingLeft:"6px"}},j(1,"\u041f\u0430\u0440\u0435\u043d\u0435\u043a")," ",(e=1,e+" \u0443\u0440.")))},"".concat(this.props.fetchedUser.first_name," ").concat(this.props.fetchedUser.last_name))),l.a.createElement(f.Group,null,l.a.createElement(f.List,null,l.a.createElement(f.Cell,{before:l.a.createElement(k.a,null)},this.state.city))),l.a.createElement(f.Group,{title:"\u0414\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u044f"},l.a.createElement(f.List,null,l.a.createElement(f.HorizontalScroll,null,l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("div",{style:Object(S.a)({},a,{paddingLeft:4})},l.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/1601/1601634.svg",alt:"archieve",style:{height:"64px",width:"64px"}})),l.a.createElement("div",{style:a},l.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/1490/1490546.svg",alt:"archieve",style:{height:"64px",width:"64px"}})),l.a.createElement("div",{style:a},l.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/1490/1490542.svg",alt:"archieve",style:{height:"64px",width:"64px"}})))))))))}}]),t}(l.a.Component),w=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={value:""},a.handleChange=a.handleChange.bind(Object(h.a)(Object(h.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(Object(h.a)(a))),a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){alert("A name was submitted: "+this.state.value),e.preventDefault()}},{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("label",null,"Name:",l.a.createElement("input",{type:"text",value:this.state.value,onChange:this.handleChange})),l.a.createElement("input",{type:"submit",value:"Submit"}))}}]),t}(l.a.Component),G=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={activePanel:"events"},a.onChangePanel=a.onChangePanel.bind(Object(h.a)(Object(h.a)(a))),a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"onChangePanel",value:function(e){this.setState({activePanel:e.currentTarget.dataset.panel})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(w,null),l.a.createElement("div",{className:"grid-images"},l.a.createElement("div",{className:"box"},"123"),l.a.createElement("div",{className:"box"},"123"),l.a.createElement("div",{className:"box"},"123"),l.a.createElement("div",{className:"box"},"123"),l.a.createElement("div",{className:"box"},"123"),l.a.createElement("div",{className:"box"},"123"),l.a.createElement("div",{className:"box"},"123"),l.a.createElement("div",{className:"box"},"123")))}}]),t}(l.a.Component),F=(a(142),a(91)),I=a.n(F),_=a(50),L=a.n(_),A=a(51),H=a.n(A),N=a(92),V=a.n(N);var W=Object(f.platform)(),B=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={order_id:"",number_str:"",activePanel:"events",popout:null},a.onChangePanel=a.onChangePanel.bind(Object(h.a)(Object(h.a)(a))),a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"onChangePanel",value:function(e){this.setState({activePanel:e.currentTarget.dataset.panel})}},{key:"onCheckEvent",value:function(e){if("Good job"!==function(e){var t=new XMLHttpRequest;if(t.open("GET",e,!0),t.send(),200===t.status){var a=t.responseText;return a=JSON.parse(a)}console.log(t.status+": "+t.statusText)}((a=this.props.fetchedUser.id,n=this.state.order_id,r=this.state.number_str,"https://playground24.ru/APP/get_by_order_id.php?user_id="+a+"&order_id="+n+"&number_str="+r))){var t=l.a.createElement(f.FormStatus,{title:"\u041e\u0448\u0438\u0431\u043a\u0430",state:"error"},"\u0422\u0430\u043a\u043e\u0433\u043e \u0431\u0438\u043b\u0435\u0442\u0430 \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442");c.a.render(t,document.getElementById("statusForm"))}var a,n,r}},{key:"render",value:function(){var e=this;return l.a.createElement(f.View,{id:"events",activePanel:this.state.activePanel},l.a.createElement(f.Panel,{id:"events"},l.a.createElement(f.PanelHeader,{left:l.a.createElement(f.HeaderButton,{onClick:function(){return e.setState({activePanel:"create"})}},(f.IOS,l.a.createElement(H.a,null)))},"\u041c\u043e\u0438 \u0441\u043e\u0431\u044b\u0442\u0438\u044f"),l.a.createElement(l.a.Fragment,null,l.a.createElement(f.Group,null,l.a.createElement(f.List,null,l.a.createElement(f.Cell,{before:l.a.createElement(f.Avatar,{size:64}),size:"l",description:l.a.createElement("div",null,"\u041a\u043e\u043d\u0446\u0435\u0440\u0442, \u0410\u043b\u044c\u043f\u0435\u043d\u0445\u0430\u0443\u0441"),onClick:function(){return e.setState({activePanel:"eventinfo"})},asideContent:l.a.createElement("div",{style:{fontSize:"14px"}},l.a.createElement("div",null,"19 \u043c\u0430\u044f"),l.a.createElement("div",null,"20:00"))},l.a.createElement("div",null,l.a.createElement("div",null,"Guthrie Govan"),l.a.createElement("div",{style:{color:"#9ea1a5",fontWeight:"500",fontSize:"14px"}},"Gone Fludd"))))),l.a.createElement(f.Group,null,l.a.createElement(f.List,null,l.a.createElement(f.Cell,{before:l.a.createElement(f.Avatar,{size:64}),size:"l",description:l.a.createElement("div",null,"\u041a\u043e\u043d\u0446\u0435\u0440\u0442, ZAL"),onClick:function(){return e.setState({activePanel:"eventinfo"})},asideContent:l.a.createElement("div",{style:{fontSize:"14px"}},l.a.createElement("div",null,"28 \u043c\u0430\u0440\u0442\u0430"),l.a.createElement("div",null,"20:00"))},l.a.createElement("div",null,l.a.createElement("div",null,"Tommy Cash"),l.a.createElement("div",{style:{color:"#9ea1a5",fontWeight:"500",fontSize:"14px"}},"Gone Fludd"))))),l.a.createElement(f.Group,null,l.a.createElement(f.List,null,l.a.createElement(f.Cell,{before:l.a.createElement(f.Avatar,{size:64}),size:"l",description:l.a.createElement("div",null,"\u041a\u043e\u043d\u0446\u0435\u0440\u0442, \u041a\u043b\u0443\u0431 \u041c\u043e\u0440\u0437\u0435"),onClick:function(){return e.setState({activePanel:"eventinfo"})},asideContent:l.a.createElement("div",{style:{fontSize:"14px"}},l.a.createElement("div",null,"30 \u0430\u0432\u0433\u0443\u0441\u0442\u0430"),l.a.createElement("div",null,"20:00"))},l.a.createElement("div",null,l.a.createElement("div",null,"\u041c\u0430\u044f\u0442\u043d\u0438\u043a \u0424\u0443\u043a\u043e"),l.a.createElement("div",{style:{color:"#9ea1a5",fontWeight:"500",fontSize:"14px"}},"Gone Fludd"))))),l.a.createElement(f.Group,null,l.a.createElement(f.List,null,l.a.createElement(f.Cell,{before:l.a.createElement(f.Avatar,{size:64}),size:"l",description:l.a.createElement("div",null,"\u041a\u043e\u043d\u0446\u0435\u0440\u0442, \u0421\u0438\u0431\u0443\u0440 \u0430\u0440\u0435\u043d\u0430"),onClick:function(){return e.setState({activePanel:"eventinfo"})},asideContent:l.a.createElement("div",{style:{fontSize:"14px"}},l.a.createElement("div",null,"5 \u0430\u043f\u0440\u0435\u043b\u044f"),l.a.createElement("div",null,"20:00"))},l.a.createElement("div",null,l.a.createElement("div",null,"\u041c\u0430\u044f\u0442\u043d\u0438\u043a \u0424\u0443\u043a\u043e"),l.a.createElement("div",{style:{color:"#9ea1a5",fontWeight:"500",fontSize:"14px"}},"Gone Fludd"))))),l.a.createElement(f.Group,null,l.a.createElement(f.List,null,l.a.createElement(f.Cell,{before:l.a.createElement(f.Avatar,{size:64}),size:"l",description:l.a.createElement("div",null,"\u041a\u043e\u043d\u0446\u0435\u0440\u0442, \u041b\u0435\u0434\u043e\u0432\u044b\u0439 \u0414\u0432\u043e\u0440\u0435\u0446"),onClick:function(){return e.setState({activePanel:"eventinfo"})},asideContent:l.a.createElement("div",{style:{fontSize:"14px"}},l.a.createElement("div",null,"11 \u0438\u044e\u043d\u044f"),l.a.createElement("div",null,"20:00"))},l.a.createElement("div",null,l.a.createElement("div",null,"KISS"),l.a.createElement("div",{style:{color:"#9ea1a5",fontWeight:"500",fontSize:"14px"}},"Gone Fludd"))))))),l.a.createElement(f.Panel,{id:"eventinfo"},l.a.createElement(f.PanelHeader,{left:l.a.createElement(f.HeaderButton,{onClick:function(){return e.setState({activePanel:"events"})}},W===f.IOS?l.a.createElement(I.a,null):l.a.createElement(L.a,null))},"\u042d\u043c\u043e\u0446\u0438\u0438"),l.a.createElement(G,null)),l.a.createElement(f.Panel,{id:"create"},l.a.createElement(f.PanelHeader,{left:l.a.createElement(f.HeaderButton,{key:"filter",onClick:function(){return e.setState({activePanel:"events"})}},l.a.createElement(V.a,null))},"\u042d\u043c\u043e\u0446\u0438\u0438"),l.a.createElement(f.FormLayout,null,l.a.createElement(f.FormLayoutGroup,null,l.a.createElement("div",{id:"statusForm"}),l.a.createElement(f.Input,{type:"number",defaultValue:"\u041d\u043e\u043c\u0435\u0440 \u0437\u0430\u043a\u0430\u0437\u0430",onChange:function(t){e.setState({order_id:t.target.value})}}),l.a.createElement(f.Input,{type:"text",defaultValue:"\u041d\u043e\u043c\u0435\u0440 \u0431\u043b\u0430\u043d\u043a\u0430",onChange:function(t){e.setState({number_str:t.target.value})}})),l.a.createElement(f.Button,{size:"xl",level:"primary",onClick:this.onCheckEvent},"\u041f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c \u043d\u0430\u043b\u0438\u0447\u0438\u0435 \u0431\u0438\u043b\u0435\u0442\u0430"))))}}]),t}(l.a.Component),D=(a(143),a(144),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={activeTab:a.props.activeTab},a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement(f.Panel,{id:"connect"},"connect"===this.state.activeTab&&l.a.createElement("img",{src:"https://img.icons8.com/nolan/512/000000/mts.png",id:"connect-round"}))}}]),t}(l.a.Component)),K=Object(f.platform)(),M=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={fetchedUser:a.props.fetchedUser,activePanel:"feed",activeTab:"connect"},a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"onChangePanel",value:function(e){this.setState({activePanel:e.currentTarget.dataset.panel})}},{key:"render",value:function(){var e=this;return l.a.createElement(f.View,{id:"feed",activePanel:this.state.activePanel},l.a.createElement(f.Panel,{id:"feed"},l.a.createElement(f.PanelHeader,{noShadow:!0},K===f.IOS?l.a.createElement(f.Tabs,{theme:"header",style:{width:200}},l.a.createElement(f.TabsItem,{onClick:function(){return e.setState({activeTab:"connect"})},selected:"connect"===this.state.activeTab},"\u0417\u043d\u0430\u043a\u043e\u043c\u0441\u0442\u0432\u0430"),l.a.createElement(f.TabsItem,{onClick:function(){return e.setState({activeTab:"shop"})},selected:"shop"===this.state.activeTab},"\u041c\u0430\u0433\u0430\u0437\u0438\u043d")):"Tabs"),"connect"===this.state.activeTab&&l.a.createElement(D,{activeTab:this.state.activeTab,fetchedUser:this.props.fetchedUser})))}}]),t}(l.a.Component),J=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={activeStory:"events",fetchedUser:null},a.onStoryChange=a.onStoryChange.bind(Object(h.a)(Object(h.a)(a))),a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"onStoryChange",value:function(e){this.setState({activeStory:e.currentTarget.dataset.story})}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return s.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data})}}),s.a.send("VKWebAppGetUserInfo",{}),l.a.createElement(f.Epic,{activeStory:this.state.activeStory,tabbar:l.a.createElement(f.Tabbar,null,l.a.createElement(f.TabbarItem,{onClick:this.onStoryChange,selected:"feed"===this.state.activeStory,"data-story":"feed"},l.a.createElement(y.a,null)),l.a.createElement(f.TabbarItem,{onClick:this.onStoryChange,selected:"events"===this.state.activeStory,"data-story":"events"},l.a.createElement(C.a,null)),l.a.createElement(f.TabbarItem,{onClick:this.onStoryChange,selected:"profile"===this.state.activeStory,"data-story":"profile"},l.a.createElement(p.a,null)))},l.a.createElement(U,{id:"profile",fetchedUser:this.state.fetchedUser}),l.a.createElement(B,{id:"events",fetchedUser:this.state.fetchedUser}),l.a.createElement(M,{id:"feed",fetchedUser:this.state.fetchedUser}))}}]),t}(l.a.Component);s.a.send("VKWebAppInit",{}),c.a.render(l.a.createElement(J,null),document.getElementById("root"))},94:function(e,t,a){e.exports=a(173)}},[[94,1,2]]]);
//# sourceMappingURL=main.f12e3097.chunk.js.map