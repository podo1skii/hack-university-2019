(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{119:function(e,t,a){},120:function(e,t,a){"use strict";a.r(t);a(71),a(96);var n=a(0),r=a.n(n),c=a(39),l=a.n(c),i=a(18),s=a.n(i),o=a(25),p=a(26),u=a(28),h=a(27),m=a(29),d=(a(102),a(1)),f=a(66),b=a.n(f),E=a(67),y=a.n(E),v=a(68),C=a.n(v),g=(a(64),a(40)),j=a.n(g),O=(a(24),a(17),a(41)),U=a.n(O),k=(a(65),a(69),a(119),Object(d.platform)(),a(19)),P=(Object(d.platform)(),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={activePanel:"profile",city:"\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433",gameCount:"",team:""},a.onChangePanel=a.onChangePanel.bind(Object(k.a)(Object(k.a)(a))),a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"onChangePanel",value:function(e){this.setState({activePanel:e.currentTarget.dataset.panel})}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement(d.View,{id:"profile",activePanel:this.state.activePanel},r.a.createElement(d.Panel,{id:"profile"},r.a.createElement(d.PanelHeader,null,"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),this.props.fetchedUser&&r.a.createElement(r.a.Fragment,null,r.a.createElement(d.Group,null,r.a.createElement(d.ListItem,{before:this.props.fetchedUser.photo_200?r.a.createElement(d.Avatar,{src:this.props.fetchedUser.photo_200}):null,description:this.props.fetchedUser.city&&this.props.fetchedUser.city.title?this.props.fetchedUser.city.title:""},"".concat(this.props.fetchedUser.first_name," ").concat(this.props.fetchedUser.last_name))),r.a.createElement(d.Group,null,r.a.createElement(d.List,null,r.a.createElement(d.Cell,{expandable:!0,onClick:this.onChangePanel,"data-panel":"choose\u0421ity",before:r.a.createElement(j.a,null)},this.state.city))),r.a.createElement(d.Group,{title:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0438\u0433\u0440"},r.a.createElement(d.List,null,r.a.createElement(d.Cell,{before:r.a.createElement(U.a,null)},this.state.gameCount))))))}}]),t}(r.a.Component)),S=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={activePanel:"home",fetchedUser:null},a}return Object(m.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;s.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data});break;default:console.log(t.detail.type)}}),s.a.send("VKWebAppGetUserInfo",{})}},{key:"render",value:function(){return r.a.createElement(d.Epic,{activeStory:this.state.activeStory,tabbar:r.a.createElement(d.Tabbar,null,r.a.createElement(d.TabbarItem,{onClick:this.onStoryChange,selected:"events"===this.state.activeStory,"data-story":"events"},r.a.createElement(C.a,null)),r.a.createElement(d.TabbarItem,{onClick:this.onStoryChange,selected:"map"===this.state.activeStory,"data-story":"map"},r.a.createElement(y.a,null)),r.a.createElement(d.TabbarItem,{onClick:this.onStoryChange,selected:"profile"===this.state.activeStory,"data-story":"profile"},r.a.createElement(b.a,null)))},r.a.createElement(P,{id:"profile",fetchedUser:this.state.fetchedUser}))}}]),t}(r.a.Component);s.a.send("VKWebAppInit",{}),l.a.render(r.a.createElement(S,null),document.getElementById("root"))},69:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},70:function(e,t,a){e.exports=a(120)}},[[70,1,2]]]);
//# sourceMappingURL=main.945c4f06.chunk.js.map