(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{124:function(e,t,a){},125:function(e,t,a){"use strict";a.r(t);a(71),a(96);var n=a(0),l=a.n(n),c=a(40),r=a.n(c),i=a(8),s=a.n(i),o=a(9),d=a(10),m=a(12),u=a(11),h=a(13),v=a(6),p=a(1),E=(a(28),a(64)),f=a.n(E),b=(a(118),a(119),a(65)),g=a.n(b),y=a(66),x=a.n(y),O=a(69);function j(e){console.log(e);var t=new Date,a=new Date(e.split(".")[2],e.split(".")[1],e.split(".")[0]);return Math.round((t.valueOf()-a.valueOf())/1e3/60/60/24/365.25)}function C(e,t){switch(!0){case e<=10:return"\u0414\u043e\u043c\u043e\u0441\u0435\u0434";case e<=30:return"\u0424\u0430\u043d\u0430\u0442";case e<=50:return"\u041f\u0430\u0442\u0438\u043c\u0435\u0439\u043a\u0435\u0440";default:return 2===t?"\u041a\u043e\u0440\u043e\u043b\u044c \u0432\u0435\u0447\u0435\u0440\u0438\u043d\u043e\u043a":"\u041a\u043e\u0440\u043e\u043b\u0435\u0432\u0430 \u0432\u0435\u0447\u0435\u0440\u0438\u043d\u043e\u043a"}}function P(e){switch(!0){case e<=10:return"#228B22";case e<=30:return"#5281b7";case e<=50:return"#FF7F50";default:return"#FF0000"}}a(120);var S=a(67),w=a.n(S),k=a(41),U=a.n(k),z=a(29),G=a.n(z),F=(a(121),a(122),a(123),a(68)),I=a.n(F),T=(Object(p.platform)(),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={activePanel:"profile",city:"\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433",gameCount:"",team:""},a.onChangePanel=a.onChangePanel.bind(Object(v.a)(Object(v.a)(a))),a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"onChangePanel",value:function(e){this.setState({activePanel:e.currentTarget.dataset.panel})}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e,t={flexShrink:0,width:80,height:80,display:"flex",flexDirection:"column",alignItems:"center",fontSize:12};return l.a.createElement(p.View,{id:"profile",activePanel:this.state.activePanel},l.a.createElement(p.Panel,{id:"profile"},l.a.createElement(p.PanelHeader,null,"1\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),this.props.fetchedUser&&l.a.createElement(l.a.Fragment,null,l.a.createElement(p.Group,null,l.a.createElement(p.Cell,{before:this.props.fetchedUser.photo_200?l.a.createElement(p.Avatar,{size:60,src:this.props.fetchedUser.photo_200}):null,size:"l",description:(e=j(this.props.fetchedUser.bdate),(e>9&&e<21?e+" \u043b\u0435\u0442":e%10===1?e+" \u0433\u043e\u0434":e%10<5?e+" \u0433\u043e\u0434\u0430":e%10>=5?e+" \u043b\u0435\u0442":void 0)+", "+(this.props.fetchedUser.city&&this.props.fetchedUser.city.title?this.props.fetchedUser.city.title:"")),bottomContent:l.a.createElement("div",{style:{display:"flex"}},l.a.createElement(I.a,{style:{color:P(30)}}),l.a.createElement("div",{style:{lineHeight:"14px",fontSize:"14px",color:P(30),paddingLeft:"6px"}},C(1,"\u041d\u043e\u0432\u0435\u043d\u044c\u043a\u0438\u0439")))},"".concat(this.props.fetchedUser.first_name," ").concat(this.props.fetchedUser.last_name))),l.a.createElement(p.Group,null,l.a.createElement(p.List,null,l.a.createElement(p.Cell,{before:l.a.createElement(w.a,null)},this.state.city))),l.a.createElement(p.Group,{title:"\u0414\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u044f"},l.a.createElement(p.List,null,l.a.createElement(p.HorizontalScroll,null,l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("div",{style:Object(O.a)({},t,{paddingLeft:4})},l.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/1601/1601634.svg",style:{height:"64px",width:"64px"}})),l.a.createElement("div",{style:t},l.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/1490/1490546.svg",style:{height:"64px",width:"64px"}})),l.a.createElement("div",{style:t},l.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/1490/1490542.svg",style:{height:"64px",width:"64px"}})),l.a.createElement("div",{style:t},l.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/1490/1490543.svg",style:{height:"64px",width:"64px"}})),l.a.createElement("div",{style:t},l.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/610/610333.svg",style:{height:"64px",width:"64px"}})),l.a.createElement("div",{style:t},l.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/1541/1541393.svg",style:{height:"64px",width:"64px"}})),l.a.createElement("div",{style:t},l.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/610/610333.svg",style:{height:"64px",width:"64px"}})))))))))}}]),t}(l.a.Component)),A=(a(39),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={activePanel:"events"},a.onChangePanel=a.onChangePanel.bind(Object(v.a)(Object(v.a)(a))),a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"onChangePanel",value:function(e){this.setState({activePanel:e.currentTarget.dataset.panel})}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{class:"grid-images"},l.a.createElement("div",{class:"box"},"123"),l.a.createElement("div",{class:"box"},"123"),l.a.createElement("div",{class:"box"},"123"),l.a.createElement("div",{class:"box"},"123"),l.a.createElement("div",{class:"box"},"123"),l.a.createElement("div",{class:"box"},"123"),l.a.createElement("div",{class:"box"},"123"),l.a.createElement("div",{class:"box"},"123"),l.a.createElement("div",{class:"box"},"123"),l.a.createElement("div",{class:"box"},"123"),l.a.createElement("div",{class:"box"},"123"),l.a.createElement("div",{class:"box"},"123"),l.a.createElement("div",{class:"box"},"123"),l.a.createElement("div",{class:"box"},"123"),l.a.createElement("div",{class:"box"},"123"),l.a.createElement("div",{class:"box"},"123")),l.a.createElement("button",{id:"addEmotion"},"+"))}}]),t}(l.a.Component)),V=(a(124),Object(p.platform)()),H=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={activePanel:"events"},a.onChangePanel=a.onChangePanel.bind(Object(v.a)(Object(v.a)(a))),a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"onChangePanel",value:function(e){this.setState({activePanel:e.currentTarget.dataset.panel})}},{key:"render",value:function(){var e=this;return l.a.createElement(p.View,{id:"events",activePanel:this.state.activePanel},l.a.createElement(p.Panel,{id:"events"},l.a.createElement(p.PanelHeader,null,"\u041c\u043e\u0438 \u0441\u043e\u0431\u044b\u0442\u0438\u044f"),l.a.createElement(l.a.Fragment,null,l.a.createElement(p.Group,null,l.a.createElement(p.List,null,l.a.createElement(p.Cell,{before:l.a.createElement(p.Avatar,{size:60}),size:"l",description:l.a.createElement("div",null,"\u041a\u043e\u043d\u0446\u0435\u0440\u0442, \u0411\u0430\u043b\u0442\u0438\u0439\u0441\u043a\u0430\u044f \u0443\u043b 66"),onClick:function(){return e.setState({activePanel:"eventinfo"})},asideContent:l.a.createElement("div",{style:{fontSize:"14px"}},l.a.createElement("div",null,"22 \u043c\u0430\u0440\u0442\u0430"),l.a.createElement("div",null,"18:00"))},l.a.createElement("div",null,l.a.createElement("div",null,"\u041c\u0430\u044f\u0442\u043d\u0438\u043a \u0424\u0443\u043a\u043e"),l.a.createElement("div",{style:{color:"#9ea1a5",fontWeight:"500",fontSize:"14px"}},"Gone Fludd"))))))),l.a.createElement(p.Panel,{id:"eventinfo"},l.a.createElement(p.PanelHeader,{left:l.a.createElement(p.HeaderButton,{onClick:function(){return e.setState({activePanel:"events"})}},V===p.IOS?l.a.createElement(U.a,null):l.a.createElement(G.a,null))},"\u042d\u043c\u043e\u0446\u0438\u0438"),l.a.createElement(A,null)))}}]),t}(l.a.Component),W=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={activePanel:"feed"},a.onChangePanel=a.onChangePanel.bind(Object(v.a)(Object(v.a)(a))),a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"onChangePanel",value:function(e){this.setState({activePanel:e.currentTarget.dataset.panel})}},{key:"render",value:function(){return l.a.createElement(p.View,{id:"feed",activePanel:this.state.activePanel},l.a.createElement(p.Panel,{id:"feed"},l.a.createElement(p.PanelHeader,null,"\u041b\u0435\u043d\u0442\u0430"),l.a.createElement(l.a.Fragment,null,l.a.createElement(p.Group,null,l.a.createElement(p.List,null,l.a.createElement(p.Cell,{before:l.a.createElement(p.Avatar,{size:60}),size:"l",description:l.a.createElement("div",null,"\u041a\u043e\u043d\u0446\u0435\u0440\u0442, \u0411\u0430\u043b\u0442\u0438\u0439\u0441\u043a\u0430\u044f \u0443\u043b 66"),asideContent:l.a.createElement("div",{style:{fontSize:"14px"}},l.a.createElement("div",null,"22 \u043c\u0430\u0440\u0442\u0430"),l.a.createElement("div",null,"18:00"))},l.a.createElement("div",null,l.a.createElement("div",null,"\u041c\u0430\u044f\u0442\u043d\u0438\u043a \u0424\u0443\u043a\u043e"),l.a.createElement("div",{style:{color:"#9ea1a5",fontWeight:"500",fontSize:"14px"}},"Gone Fludd"))))))))}}]),t}(l.a.Component),L=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(m.a)(this,Object(u.a)(t).call(this,e))).state={activeStory:"events",fetchedUser:null},a.onStoryChange=a.onStoryChange.bind(Object(v.a)(Object(v.a)(a))),a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"onStoryChange",value:function(e){this.setState({activeStory:e.currentTarget.dataset.story})}},{key:"componentDidMount",value:function(){var e=this;s.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data})}}),s.a.send("VKWebAppGetUserInfo",{}),s.a.subscribe(function(t){switch(console.log(t.detail),t.detail.type){case"VKWebAppGeodataResult":e.setState({locationUser:t.detail.data});break;default:console.log(t.detail.type)}}),s.a.send("VKWebAppGetGeodata",{})}},{key:"render",value:function(){return l.a.createElement(p.Epic,{activeStory:this.state.activeStory,tabbar:l.a.createElement(p.Tabbar,null,l.a.createElement(p.TabbarItem,{onClick:this.onStoryChange,selected:"feed"===this.state.activeStory,"data-story":"feed"},l.a.createElement(g.a,null)),l.a.createElement(p.TabbarItem,{onClick:this.onStoryChange,selected:"events"===this.state.activeStory,"data-story":"events"},l.a.createElement(x.a,null)),l.a.createElement(p.TabbarItem,{onClick:this.onStoryChange,selected:"profile"===this.state.activeStory,"data-story":"profile"},l.a.createElement(f.a,null)))},l.a.createElement(T,{id:"profile",fetchedUser:this.state.fetchedUser}),l.a.createElement(H,{id:"events",fetchedUser:this.state.fetchedUser}),l.a.createElement(W,{id:"feed",fetchedUser:this.state.fetchedUser}))}}]),t}(l.a.Component);s.a.send("VKWebAppInit",{}),r.a.render(l.a.createElement(L,null),document.getElementById("root"))},70:function(e,t,a){e.exports=a(125)}},[[70,1,2]]]);
//# sourceMappingURL=main.87e0f9a8.chunk.js.map