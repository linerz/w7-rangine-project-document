(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77e73437"],{"0390":function(e,t,a){"use strict";var r=a("02f4")(!0);e.exports=function(e,t,a){return t+(a?r(e,t).length:1)}},"214f":function(e,t,a){"use strict";a("b0c5");var r=a("2aba"),n=a("32e9"),i=a("79e5"),o=a("be13"),s=a("2b4c"),l=a("520a"),c=s("species"),u=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),_=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var a="ab".split(e);return 2===a.length&&"a"===a[0]&&"b"===a[1]}();e.exports=function(e,t,a){var d=s(e),p=!i((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),f=p?!i((function(){var t=!1,a=/a/;return a.exec=function(){return t=!0,null},"split"===e&&(a.constructor={},a.constructor[c]=function(){return a}),a[d](""),!t})):void 0;if(!p||!f||"replace"===e&&!u||"split"===e&&!_){var g=/./[d],v=a(o,d,""[e],(function(e,t,a,r,n){return t.exec===l?p&&!n?{done:!0,value:g.call(t,a,r)}:{done:!0,value:e.call(a,t,r)}:{done:!1}})),h=v[0],m=v[1];r(String.prototype,e,h),n(RegExp.prototype,d,2==t?function(e,t){return m.call(e,this,t)}:function(e){return m.call(e,this)})}}},"28a5":function(e,t,a){"use strict";var r=a("aae3"),n=a("cb7c"),i=a("ebd6"),o=a("0390"),s=a("9def"),l=a("5f1b"),c=a("520a"),u=a("79e5"),_=Math.min,d=[].push,p="split",f="length",g="lastIndex",v=4294967295,h=!u((function(){RegExp(v,"y")}));a("214f")("split",2,(function(e,t,a,u){var m;return m="c"=="abbc"[p](/(b)*/)[1]||4!="test"[p](/(?:)/,-1)[f]||2!="ab"[p](/(?:ab)*/)[f]||4!="."[p](/(.?)(.?)/)[f]||"."[p](/()()/)[f]>1||""[p](/.?/)[f]?function(e,t){var n=String(this);if(void 0===e&&0===t)return[];if(!r(e))return a.call(n,e,t);var i,o,s,l=[],u=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),_=0,p=void 0===t?v:t>>>0,h=new RegExp(e.source,u+"g");while(i=c.call(h,n)){if(o=h[g],o>_&&(l.push(n.slice(_,i.index)),i[f]>1&&i.index<n[f]&&d.apply(l,i.slice(1)),s=i[0][f],_=o,l[f]>=p))break;h[g]===i.index&&h[g]++}return _===n[f]?!s&&h.test("")||l.push(""):l.push(n.slice(_)),l[f]>p?l.slice(0,p):l}:"0"[p](void 0,0)[f]?function(e,t){return void 0===e&&0===t?[]:a.call(this,e,t)}:a,[function(a,r){var n=e(this),i=void 0==a?void 0:a[t];return void 0!==i?i.call(a,n,r):m.call(String(n),a,r)},function(e,t){var r=u(m,e,this,t,m!==a);if(r.done)return r.value;var c=n(e),d=String(this),p=i(c,RegExp),f=c.unicode,g=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(h?"y":"g"),b=new p(h?c:"^(?:"+c.source+")",g),x=void 0===t?v:t>>>0;if(0===x)return[];if(0===d.length)return null===l(b,d)?[d]:[];var w=0,D=0,E=[];while(D<d.length){b.lastIndex=h?D:0;var C,k=l(b,h?d:d.slice(D));if(null===k||(C=_(s(b.lastIndex+(h?0:D)),d.length))===w)D=o(d,D,f);else{if(E.push(d.slice(w,D)),E.length===x)return E;for(var y=1;y<=k.length-1;y++)if(E.push(k[y]),E.length===x)return E;D=w=C}}return E.push(d.slice(w)),E}]}))},"3b2b":function(e,t,a){var r=a("7726"),n=a("5dbc"),i=a("86cc").f,o=a("9093").f,s=a("aae3"),l=a("0bfb"),c=r.RegExp,u=c,_=c.prototype,d=/a/g,p=/a/g,f=new c(d)!==d;if(a("9e1e")&&(!f||a("79e5")((function(){return p[a("2b4c")("match")]=!1,c(d)!=d||c(p)==p||"/a/i"!=c(d,"i")})))){c=function(e,t){var a=this instanceof c,r=s(e),i=void 0===t;return!a&&r&&e.constructor===c&&i?e:n(f?new u(r&&!i?e.source:e,t):u((r=e instanceof c)?e.source:e,r&&i?l.call(e):t),a?this:_,c)};for(var g=function(e){e in c||i(c,e,{configurable:!0,get:function(){return u[e]},set:function(t){u[e]=t}})},v=o(u),h=0;v.length>h;)g(v[h++]);_.constructor=c,c.prototype=_,a("2aba")(r,"RegExp",c)}a("7a56")("RegExp")},4917:function(e,t,a){"use strict";var r=a("cb7c"),n=a("9def"),i=a("0390"),o=a("5f1b");a("214f")("match",1,(function(e,t,a,s){return[function(a){var r=e(this),n=void 0==a?void 0:a[t];return void 0!==n?n.call(a,r):new RegExp(a)[t](String(r))},function(e){var t=s(a,e,this);if(t.done)return t.value;var l=r(e),c=String(this);if(!l.global)return o(l,c);var u=l.unicode;l.lastIndex=0;var _,d=[],p=0;while(null!==(_=o(l,c))){var f=String(_[0]);d[p]=f,""===f&&(l.lastIndex=i(c,n(l.lastIndex),u)),p++}return 0===p?null:d}]}))},"520a":function(e,t,a){"use strict";var r=a("0bfb"),n=RegExp.prototype.exec,i=String.prototype.replace,o=n,s="lastIndex",l=function(){var e=/a/,t=/b*/g;return n.call(e,"a"),n.call(t,"a"),0!==e[s]||0!==t[s]}(),c=void 0!==/()??/.exec("")[1],u=l||c;u&&(o=function(e){var t,a,o,u,_=this;return c&&(a=new RegExp("^"+_.source+"$(?!\\s)",r.call(_))),l&&(t=_[s]),o=n.call(_,e),l&&o&&(_[s]=_.global?o.index+o[0].length:t),c&&o&&o.length>1&&i.call(o[0],a,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(o[u]=void 0)})),o}),e.exports=o},"5f1b":function(e,t,a){"use strict";var r=a("23c6"),n=RegExp.prototype.exec;e.exports=function(e,t){var a=e.exec;if("function"===typeof a){var i=a.call(e,t);if("object"!==typeof i)throw new TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(e))throw new TypeError("RegExp#exec called on incompatible receiver");return n.call(e,t)}},"7b79":function(e,t,a){"use strict";var r=a("903e"),n=a.n(r);n.a},"903e":function(e,t,a){},a481:function(e,t,a){"use strict";var r=a("cb7c"),n=a("4bf8"),i=a("9def"),o=a("4588"),s=a("0390"),l=a("5f1b"),c=Math.max,u=Math.min,_=Math.floor,d=/\$([$&`']|\d\d?|<[^>]*>)/g,p=/\$([$&`']|\d\d?)/g,f=function(e){return void 0===e?e:String(e)};a("214f")("replace",2,(function(e,t,a,g){return[function(r,n){var i=e(this),o=void 0==r?void 0:r[t];return void 0!==o?o.call(r,i,n):a.call(String(i),r,n)},function(e,t){var n=g(a,e,this,t);if(n.done)return n.value;var _=r(e),d=String(this),p="function"===typeof t;p||(t=String(t));var h=_.global;if(h){var m=_.unicode;_.lastIndex=0}var b=[];while(1){var x=l(_,d);if(null===x)break;if(b.push(x),!h)break;var w=String(x[0]);""===w&&(_.lastIndex=s(d,i(_.lastIndex),m))}for(var D="",E=0,C=0;C<b.length;C++){x=b[C];for(var k=String(x[0]),y=c(u(o(x.index),d.length),0),P=[],I=1;I<x.length;I++)P.push(f(x[I]));var j=x.groups;if(p){var M=[k].concat(P,y,d);void 0!==j&&M.push(j);var O=String(t.apply(void 0,M))}else O=v(k,d,y,P,j,t);y>=E&&(D+=d.slice(E,y)+O,E=y+k.length)}return D+d.slice(E)}];function v(e,t,r,i,o,s){var l=r+e.length,c=i.length,u=p;return void 0!==o&&(o=n(o),u=d),a.call(s,u,(function(a,n){var s;switch(n.charAt(0)){case"$":return"$";case"&":return e;case"`":return t.slice(0,r);case"'":return t.slice(l);case"<":s=o[n.slice(1,-1)];break;default:var u=+n;if(0===u)return a;if(u>c){var d=_(u/10);return 0===d?a:d<=c?void 0===i[d-1]?n.charAt(1):i[d-1]+n.charAt(1):a}s=i[u-1]}return void 0===s?"":s}))}}))},aae3:function(e,t,a){var r=a("d3f4"),n=a("2d95"),i=a("2b4c")("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==n(e))}},b0c5:function(e,t,a){"use strict";var r=a("520a");a("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})},b56e:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"page-head"},[e._v("我的文档管理")]),a("div",{staticClass:"container-box"},[a("div",{staticClass:"search-box"},[a("div",{staticClass:"search-box-input"},[a("el-input",{staticClass:"demo-input-suffix",attrs:{placeholder:"请输入文档名称",clearable:""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getAllProject(t)}},model:{value:e.listQuery.keyword,callback:function(t){e.$set(e.listQuery,"keyword",t)},expression:"listQuery.keyword"}},[a("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"suffix"},on:{click:e.getAllProject},slot:"suffix"})]),a("el-select",{on:{change:e.getAllProject},model:{value:e.listQuery.is_public,callback:function(t){e.$set(e.listQuery,"is_public",t)},expression:"listQuery.is_public"}},[a("el-option",{attrs:{label:"全部",value:""}}),a("el-option",{attrs:{label:"公有",value:"1"}}),a("el-option",{attrs:{label:"私有",value:"2"}})],1),a("el-select",{on:{change:e.getAllProject},model:{value:e.listQuery.role,callback:function(t){e.$set(e.listQuery,"role",t)},expression:"listQuery.role"}},[a("el-option",{attrs:{label:"全部",value:""}}),a("el-option",{attrs:{label:"我创建的",value:"1"}}),a("el-option",{attrs:{label:"我操作的",value:"2"}})],1)],1)]),a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"card-box"},[a("div",{staticClass:"card-warpper"},[e._l(e.docList,(function(t,r){return a("div",{key:r,staticClass:"w7-card",class:{"has-cover":t.cover},style:{backgroundImage:"url("+t.cover+")"},on:{click:function(a){return e.goChapter(t)}}},[t.cover?a("div",{staticClass:"mask"}):e._e(),a("div",{staticClass:"mask-content"},[a("div",{staticClass:"w7-card-title"},[e._v("\n              "+e._s(t.name)+"\n            ")]),a("div",{staticClass:"time-wrap"},[t.is_public?e._e():a("i",{staticClass:"wi wi-lock"}),a("div",{staticClass:"w7-card-time"},[e._v(e._s(e.format(t.operator.time))+" "+e._s(t.operator.name))])]),a("div",{staticClass:"icon-box"},[t.acl.has_manage?a("el-tooltip",{attrs:{effect:"dark",content:"转让项目",placement:"bottom"}},[a("i",{staticClass:"wi wi-transfer",on:{click:function(a){return a.stopPropagation(),e.transferDoc(t.id)}}})]):e._e(),a("el-tooltip",{attrs:{effect:"dark",content:"预览",placement:"bottom"}},[a("i",{staticClass:"wq wq-chakan",on:{click:function(a){return a.stopPropagation(),e.readDoc(t)}}})]),t.acl.has_manage?a("el-tooltip",{attrs:{effect:"dark",content:"进入管理",placement:"bottom"}},[a("i",{staticClass:"wi wi-guanli",on:{click:function(a){return a.stopPropagation(),e.settingDoc(t.id)}}})]):e._e()],1),a("div",{staticClass:"line"})])])})),a("div",{staticClass:"w7-card add-project",on:{click:e.dialogDocShow}},[a("div",{staticClass:"add-text"},[e._v("新建项目")]),a("i",{staticClass:"el-icon-circle-plus"}),a("div",{staticClass:"line"})])],2)]),a("div",{staticClass:"pagination-wrap"},[a("el-pagination",{attrs:{background:"","hide-on-single-page":e.total<=11,"current-page":e.listQuery.page,"page-sizes":[11,23,35],"page-size":e.listQuery.page_size,layout:e.paginationLayouts,total:e.total},on:{"update:currentPage":function(t){return e.$set(e.listQuery,"page",t)},"update:current-page":function(t){return e.$set(e.listQuery,"page",t)},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),a("el-dialog",{staticClass:"w7-dialog",attrs:{title:"创建项目",visible:e.dialogDocInfoVisible,"close-on-click-modal":!1,center:""},on:{"update:visible":function(t){e.dialogDocInfoVisible=t}}},[a("el-form",{attrs:{"label-width":"105px","label-position":"left"}},[a("el-form-item",{attrs:{label:"项目名称"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),a("el-radio-group",{staticClass:"ownership",model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[a("el-radio",{attrs:{label:"1"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("公开项目")]),a("el-radio",{attrs:{label:"2"},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[e._v("私有项目")])],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.createDoc}},[e._v("确 定")]),a("el-button",{on:{click:function(t){e.dialogDocInfoVisible=!1}}},[e._v("取 消")])],1)],1),a("el-dialog",{staticClass:"w7-dialog",attrs:{title:"管理员转让",visible:e.dialogTransferDoc,"close-on-click-modal":!1,center:""},on:{"update:visible":function(t){e.dialogTransferDoc=t}}},[a("div",{staticClass:"transfer-tip"},[a("i",{staticClass:"el-icon-warning"}),e._v("转让管理员权限后您将成为操作员，不再是管理员，请谨慎操作。\n      ")]),a("el-form",{attrs:{"label-width":"115px","label-position":"left"}},[a("el-form-item",{attrs:{label:"选择新的管理员"}},[a("el-input",{attrs:{autocomplete:"off"},model:{value:e.transferUsername,callback:function(t){e.transferUsername=t},expression:"transferUsername"}})],1)],1),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.transfer}},[e._v("确 定")]),a("el-button",{on:{click:function(t){e.dialogTransferDoc=!1}}},[e._v("取 消")])],1)],1)],1),a("el-dialog",{staticClass:"we7-dialog dialog-setting",attrs:{title:"项目设置",width:"1000px",visible:e.showSetting,"close-on-click-modal":!1,"before-close":e.handleClose},on:{"update:visible":function(t){e.showSetting=t}}},[a("setting",{attrs:{id:e.settingDocId}})],1)],1)},n=[],i=(a("ac6a"),a("7f7f"),a("fa7d")),o=a("4ec3"),s=a("49f7"),l={name:"documentIndex",components:{setting:s["a"]},data:function(){return{listQuery:{page:1,page_size:11,keyword:"",role:"",is_public:""},radio:"1",loading:!1,docList:[],currentPage:0,page_size:19,pageCount:0,total:0,name:"",dialogDocInfoVisible:!1,actClass:"actClass",dialogTransferDoc:!1,transferUsername:"",selectDocId:"",showSetting:!1,settingDocId:""}},computed:{paginationLayouts:function(){return this.total&&this.total/this.listQuery.page_size>1?"total, sizes, prev, pager, next, jumper":"total, sizes"}},created:function(){this.getAllProject()},methods:{dialogDocShow:function(){this.dialogDocInfoVisible=!0,this.name=""},getAllProject:function(){var e=this;this.loading=!0,Object(o["d"])(this.listQuery).then((function(t){200==t.code&&(e.docList=t.data.data,e.pageCount=t.data.page_count,e.total=t.data.total,e.loading=!1)})).catch((function(t){e.loading=!1}))},createDoc:function(){var e=this;Object(o["b"])({name:this.name,is_public:this.radio}).then((function(t){e.$message("创建成功！"),e.dialogDocInfoVisible=!1,e.getAllProject()}))},removeDoc:function(e){var t=this;this.$confirm("确定删除该文档吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.$post("/admin/document/delete",{id:e}).then((function(){t.getAllProject(),t.$message("删除成功！")}))}))},updateDoc:function(e,t){var a=this;this.$post("/admin/document/update",{id:e,is_show:1==t?2:1}).then((function(){a.docList.forEach((function(a){a.id!=e||(a.is_show=1==t?2:1)}))}))},readDoc:function(e){var t=this.$router.resolve({path:"/chapter/"+e.id});localStorage.projectName=e.name,window.open(t.href,"_blank")},settingDoc:function(e){this.settingDocId=e,this.showSetting=!0},transferDoc:function(e){this.selectDocId=e,this.transferUsername="",this.dialogTransferDoc=!0},transfer:function(){var e=this;this.$post("/admin/document/change-founder",{document_id:this.selectDocId,username:this.transferUsername}).then((function(){e.getAllProject(),e.$message("转让成功！"),e.dialogTransferDoc=!1}))},goChapter:function(e,t){var a={name:"chapter",params:{id:e.id}};t&&(a["query"]={type:"add",documentType:1}),localStorage.projectName=e.name,this.$router.push(a)},format:function(e){if(e){var t=Object(i["a"])(e);return t.length>8?Object(i["a"])(e).slice(5):Object(i["a"])(e)}},handleClose:function(){this.getAllProject(),this.showSetting=!1},handleSizeChange:function(e){this.listQuery.page_size=e,this.getAllProject()},handleCurrentChange:function(e){this.listQuery.page=e,this.getAllProject()}}},c=l,u=(a("7b79"),a("2877")),_=Object(u["a"])(c,r,n,!1,null,"99835010",null);t["default"]=_.exports},fa7d:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return timestampFormat}));var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("a481"),core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("6b54"),core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("4917"),core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("28a5"),core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("3b2b"),core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es6_regexp_constructor__WEBPACK_IMPORTED_MODULE_4__);function getUrlParam(e,t){var a=new RegExp("(^|&)"+t+"=([^&]*)(&|$)");if(e&&e.split("?")[1]){var r=e.split("?")[1].match(a);return null!=r?unescape(r[2]):null}}function replaceParamVal(url,paramName,replaceVal){var oUrl=url.toString(),re=eval("/("+paramName+"=)([^&]*)/gi"),nUrl=oUrl.replace(re,paramName+"="+replaceVal);return nUrl}function timestampFormat(e){var t=Date.parse(e)/1e3;function a(e){return(1==String(e).length?"0":"")+e}var r=parseInt((new Date).getTime()/1e3),n=r-t,i=new Date(1e3*r),o=new Date(1e3*t),s=o.getFullYear(),l=o.getMonth()+1,c=o.getDate(),u=o.getHours(),_=o.getMinutes();if(n<60)return"刚刚";if(n<3600)return Math.floor(n/60)+"分钟前";if(i.getFullYear()==s&&i.getMonth()+1==l&&i.getDate()==c)return"今天"+a(u)+":"+a(_);var d=new Date(1e3*(r-86400));return d.getFullYear()==s&&d.getMonth()+1==l&&d.getDate()==c?"昨天"+a(u)+":"+a(_):s+"年"+a(l)+"月"+a(c)+"日 "+a(u)+":"+a(_)}}}]);