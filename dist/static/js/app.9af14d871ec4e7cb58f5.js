webpackJsonp([1],{"2sbK":function(e,t){},I9xx:function(e,t){},NHnr:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("7+uW"),a=s("mtWM"),n=s.n(a),c={headers:{"Content-Type":"application/json"}},i={name:"ItemResearch",data:function(){return{searchResults:[],searchText:"",errorMessage:""}},methods:{performSearch:function(){var e=this;this.errorMessage="",console.log("Hello, "+this.searchText+"!");var t="https://salesforcesdb.herokuapp.com/search?searchtoken="+this.searchText;n.a.get(t,c).then(function(t){e.searchResults=t.data.risultati}).catch(function(t){console.log(t),e.errorMessage="Errore nella connessione al Server"})}}},o={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"research"},[s("div",{staticStyle:{color:"red"}},[e._v(e._s(e.errorMessage))]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.searchText,expression:"searchText"}],attrs:{type:"text",placeholder:"codice qui"},domProps:{value:e.searchText},on:{input:function(t){t.target.composing||(e.searchText=t.target.value)}}}),e._v(" "),s("button",{on:{click:e.performSearch}},[e._v("SEARCH")]),e._v(" "),s("div",{staticClass:"tablecontainer"},[s("table",[e._m(0),e._v(" "),s("tbody",e._l(e.searchResults,function(t){return s("tr",{key:t.id},[s("td",[e._v(e._s(t.id))]),e._v(" "),s("td",[e._v(e._s(t.subject))]),e._v(" "),s("td",[e._v(e._s(t.description))]),e._v(" "),s("td",[e._v(e._s(t.priority))])])}))])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("tr",[t("th",[this._v("Case ID")]),this._v(" "),t("th",[this._v("Case Subject")]),this._v(" "),t("th",[this._v("Case Description")]),this._v(" "),t("th",[this._v("Case Priority")])])])}]};var h={name:"App",components:{ItemResearch:s("VU/8")(i,o,!1,function(e){s("I9xx")},"data-v-30f0b80e",null).exports}},l={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("ItemResearch")],1)},staticRenderFns:[]};var u=s("VU/8")(h,l,!1,function(e){s("2sbK")},null,null).exports;r.a.config.productionTip=!1,new r.a({el:"#app",components:{App:u},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.9af14d871ec4e7cb58f5.js.map