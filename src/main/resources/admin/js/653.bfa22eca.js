"use strict";(self["webpackChunkhalo_admin"]=self["webpackChunkhalo_admin"]||[]).push([[653],{71473:function(t,e,n){n.r(e),n.d(e,{default:function(){return I}});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("page-view",[n("a-row",[n("a-col",{attrs:{span:24}},[n("div",{staticClass:"card-container"},[n("a-tabs",{attrs:{type:"card"},model:{value:t.activeKey,callback:function(e){t.activeKey=e},expression:"activeKey"}},t._l(t.panes,(function(e){return n("a-tab-pane",{key:e.key},[n("span",{attrs:{slot:"tab"},slot:"tab"},[n("a-icon",{attrs:{type:e.icon}}),t._v(t._s(e.title)+" ")],1),n(e.component,{tag:"component"})],1)})),1)],1)])],1)],1)},s=[],i=n(4899),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.isMobile()?n("a-list",{attrs:{dataSource:t.independentSheets,loading:t.loading,pagination:!1,itemLayout:"vertical",size:"large"},scopedSlots:t._u([{key:"renderItem",fn:function(e,a){return n("a-list-item",{key:a},[n("template",{slot:"actions"},[n("span",[n("router-link",{attrs:{to:{name:e.routeName}}},[n("a-icon",{attrs:{type:"edit"}})],1)],1)]),n("template",{slot:"extra"},[e.available?n("span",[t._v("可用")]):n("span",[t._v("不可用 "),n("a-tooltip",{attrs:{slot:"action",title:"当前主题没有对应模板"},slot:"action"},[n("a-icon",{attrs:{type:"info-circle-o"}})],1)],1)]),n("a-list-item-meta",[n("span",{staticStyle:{"max-width":"300px",display:"block","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"},attrs:{slot:"title"},slot:"title"},[e.available?n("a",{attrs:{href:e.fullPath,target:"_blank"}},[t._v(t._s(e.title))]):n("a",{attrs:{href:e.fullPath,disabled:"",target:"_blank"}},[t._v(t._s(e.title))])])])],2)}}],null,!1,490164655)}):n("a-table",{attrs:{columns:t.independentColumns,dataSource:t.independentSheets,loading:t.loading,pagination:!1,rowKey:function(t){return t.id}},scopedSlots:t._u([{key:"available",fn:function(e){return[e?n("span",[t._v("可用")]):n("span",[t._v(" 不可用 "),n("a-tooltip",{attrs:{slot:"action",title:"当前主题没有对应模板"},slot:"action"},[n("a-icon",{attrs:{type:"info-circle-o"}})],1)],1)]}},{key:"action",fn:function(e,a){return n("span",{},[n("router-link",{attrs:{to:{name:a.routeName}}},[n("a-button",{staticClass:"!p-0",attrs:{type:"link"}},[t._v("管理")])],1),n("a-divider",{attrs:{type:"vertical"}}),a.available?n("a",{attrs:{href:a.fullPath,target:"_blank"}},[t._v("访问")]):n("a",{attrs:{href:a.fullPath,disabled:"",target:"_blank"}},[t._v("访问")])],1)}}])})],1)},o=[],l=n(46307),c=(n(70315),n(1300)),u=n(52187),d=[{title:"页面名称",dataIndex:"title"},{title:"访问地址",dataIndex:"fullPath"},{title:"状态",dataIndex:"available",scopedSlots:{customRender:"available"}},{title:"操作",dataIndex:"action",width:"150px",scopedSlots:{customRender:"action"}}],h={name:"IndependentSheetList",mixins:[c.jB,c.KT],data:function(){return{independentColumns:d,independentSheets:[],loading:!1}},created:function(){this.handleListIndependentSheets()},methods:{handleListIndependentSheets:function(){var t=this;return(0,l.Z)(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.sheet.listIndependents();case 3:n=e.sent,a=n.data,t.independentSheets=a,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.$log.error(e.t0);case 11:return e.prev=11,t.loading=!1,e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})))()}}},p=h,f=n(48172),m=(0,f.Z)(p,r,o,!1,null,null,null),g=m.exports,v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.isMobile()?n("a-list",{attrs:{dataSource:t.list.data,loading:t.list.loading,pagination:!1,itemLayout:"vertical",size:"large"},scopedSlots:t._u([{key:"renderItem",fn:function(e,a){return[n("a-list-item",{key:a,scopedSlots:t._u([{key:"actions",fn:function(){return[n("span",[n("a-icon",{attrs:{type:"eye"}}),t._v(" "+t._s(e.visits)+" ")],1),n("span",{on:{click:function(n){return t.handleOpenSheetComments(e)}}},[n("a-icon",{attrs:{type:"message"}}),t._v(" "+t._s(e.commentCount)+" ")],1),n("a-dropdown",{attrs:{trigger:["click"],placement:"topLeft"},scopedSlots:t._u([{key:"overlay",fn:function(){return[n("a-menu",["PUBLISHED"===e.status||"DRAFT"===e.status?n("a-menu-item",{on:{click:function(n){return t.handleEditClick(e)}}},[t._v(" 编辑 ")]):"RECYCLE"===e.status?n("a-menu-item",[n("a-popconfirm",{attrs:{title:"你确定要发布【"+e.title+"】页面？",cancelText:"取消",okText:"确定"},on:{confirm:function(n){return t.handleChangeStatus(e.id,"PUBLISHED")}}},[t._v(" 还原 ")])],1):t._e(),"PUBLISHED"===e.status||"DRAFT"===e.status?n("a-menu-item",[n("a-popconfirm",{attrs:{title:"你确定要删除【"+e.title+"】页面？",cancelText:"取消",okText:"确定"},on:{confirm:function(n){return t.handleChangeStatus(e.id,"RECYCLE")}}},[t._v(" 删除 ")])],1):"RECYCLE"===e.status?n("a-menu-item",[n("a-popconfirm",{attrs:{title:"你确定要永久删除【"+e.title+"】页面？",cancelText:"取消",okText:"确定"},on:{confirm:function(n){return t.handleDelete(e.id)}}},[t._v(" 永久删除 ")])],1):t._e(),n("a-menu-item",{on:{click:function(n){return t.handleOpenSheetSettings(e)}}},[t._v("设置")])],1)]},proxy:!0}],null,!0)},[n("span",[n("a-icon",{attrs:{type:"bars"}})],1)])]},proxy:!0},{key:"extra",fn:function(){return[n("a-badge",{attrs:{status:t.sheetStatuses[e.status].status,text:t._f("statusText")(e.status)}})]},proxy:!0}],null,!0)},[n("a-list-item-meta",{scopedSlots:t._u([{key:"description",fn:function(){return[t._v(" "+t._s(t._f("moment")(e.createTime))+" ")]},proxy:!0},{key:"title",fn:function(){return[n("div",{staticStyle:{"max-width":"300px",display:"block","white-space":"nowrap",overflow:"hidden","text-overflow":"ellipsis"}},[e.inProgress?n("a-tooltip",{attrs:{placement:"top",title:"当前有内容已保存，但还未发布。"}},[n("a-icon",{staticClass:"cursor-pointer",staticStyle:{"margin-right":"3px"},attrs:{theme:"twoTone",twoToneColor:"#52c41a",type:"info-circle"},on:{click:function(n){return t.handleEditClick(e)}}})],1):t._e(),"PUBLISHED"===e.status?n("a-tooltip",{attrs:{title:"点击访问【"+e.title+"】",placement:"top"}},[n("a",{staticClass:"no-underline",attrs:{href:e.fullPath,target:"_blank"}},[t._v(" "+t._s(e.title)+" ")])]):"DRAFT"===e.status?n("a-tooltip",{attrs:{title:"点击预览【"+e.title+"】",placement:"top"}},[n("a",{staticClass:"no-underline",attrs:{href:"javascript:void(0);"},on:{click:function(n){return t.handlePreview(e.id)}}},[t._v(" "+t._s(e.title)+" ")])]):n("a",{staticClass:"no-underline",attrs:{href:"javascript:void(0);",disabled:""}},[t._v(" "+t._s(e.title)+" ")])],1)]},proxy:!0}],null,!0)}),e.summary?n("div",{staticClass:"block"},[n("span",[t._v(" "+t._s(e.summary)+"... ")])]):t._e()],1)]}}],null,!1,1626759435)}):n("a-table",{attrs:{columns:t.customColumns,dataSource:t.list.data,loading:t.list.loading,pagination:!1,rowKey:function(t){return t.id},scrollToFirstRowOnChange:!0},scopedSlots:t._u([{key:"sheetTitle",fn:function(e,a){return[a.inProgress?n("a-tooltip",{attrs:{placement:"top",title:"当前有内容已保存，但还未发布。"}},[n("a-icon",{staticClass:"cursor-pointer",staticStyle:{"margin-right":"3px"},attrs:{theme:"twoTone",twoToneColor:"#52c41a",type:"info-circle"},on:{click:function(e){return t.handleEditClick(a)}}})],1):t._e(),"PUBLISHED"===a.status?n("a-tooltip",{attrs:{title:"点击访问【"+e+"】",placement:"top"}},[n("a",{staticClass:"no-underline",attrs:{href:a.fullPath,target:"_blank"}},[t._v(" "+t._s(e)+" ")])]):"DRAFT"===a.status?n("a-tooltip",{attrs:{title:"点击预览【"+e+"】",placement:"top"}},[n("a",{staticClass:"no-underline",attrs:{href:"javascript:void(0);"},on:{click:function(e){return t.handlePreview(a.id)}}},[t._v(" "+t._s(e)+" ")])]):n("a",{staticClass:"no-underline",attrs:{href:"javascript:void(0);",disabled:""}},[t._v(" "+t._s(e)+" ")])]}},{key:"status",fn:function(e){return[n("a-badge",{attrs:{status:t.sheetStatuses[e].status,text:t._f("statusText")(e)}})]}},{key:"commentCount",fn:function(e,a){return[n("a-badge",{staticClass:"cursor-pointer",attrs:{count:a.commentCount,numberStyle:{backgroundColor:"#f38181"},overflowCount:999,showZero:!0},on:{click:function(e){return t.handleOpenSheetComments(a)}}})]}},{key:"visits",fn:function(t){return[n("a-badge",{attrs:{count:t,numberStyle:{backgroundColor:"#00e0ff"},overflowCount:9999,showZero:!0}})]}},{key:"createTime",fn:function(e){return[n("a-tooltip",{attrs:{placement:"top"},scopedSlots:t._u([{key:"title",fn:function(){return[t._v(" "+t._s(t._f("moment")(e))+" ")]},proxy:!0}],null,!0)},[t._v(" "+t._s(t._f("timeAgo")(e))+" ")])]}},{key:"action",fn:function(e,a){return["PUBLISHED"===a.status||"DRAFT"===a.status?n("a-button",{staticClass:"!p-0",attrs:{type:"link"},on:{click:function(e){return t.handleEditClick(a)}}},[t._v(" 编辑 ")]):"RECYCLE"===a.status?n("a-popconfirm",{attrs:{title:"你确定要发布【"+a.title+"】？",cancelText:"取消",okText:"确定"},on:{confirm:function(e){return t.handleChangeStatus(a.id,"PUBLISHED")}}},[n("a-button",{staticClass:"!p-0",attrs:{type:"link"}},[t._v("还原")])],1):t._e(),n("a-divider",{attrs:{type:"vertical"}}),"PUBLISHED"===a.status||"DRAFT"===a.status?n("a-popconfirm",{attrs:{title:"你确定要删除【"+a.title+"】页面？",cancelText:"取消",okText:"确定"},on:{confirm:function(e){return t.handleChangeStatus(a.id,"RECYCLE")}}},[n("a-button",{staticClass:"!p-0",attrs:{type:"link"}},[t._v("删除")])],1):"RECYCLE"===a.status?n("a-popconfirm",{attrs:{title:"你确定要永久删除【"+a.title+"】页面？",cancelText:"取消",okText:"确定"},on:{confirm:function(e){return t.handleDelete(a.id)}}},[n("a-button",{staticClass:"!p-0",attrs:{type:"link"}},[t._v("永久删除")])],1):t._e(),n("a-divider",{attrs:{type:"vertical"}}),n("a-button",{staticClass:"!p-0",attrs:{type:"link"},on:{click:function(e){return t.handleOpenSheetSettings(a)}}},[t._v("设置")])]}}])}),n("div",{staticClass:"page-wrapper"},[n("a-pagination",{staticClass:"pagination",attrs:{current:t.pagination.page,defaultPageSize:t.pagination.size,pageSizeOptions:["10","20","50","100"],total:t.pagination.total,showLessItems:"",showSizeChanger:""},on:{change:t.handlePageChange,showSizeChange:t.handlePageSizeChange}})],1),n("SheetSettingModal",{attrs:{loading:t.sheetSettingLoading,savedCallback:t.onSheetSavedCallback,sheet:t.list.selected,visible:t.sheetSettingVisible},on:{"update:visible":function(e){t.sheetSettingVisible=e},onClose:function(e){t.list.selected={}}},scopedSlots:t._u([{key:"extraFooter",fn:function(){return[n("a-button",{attrs:{disabled:t.selectPreviousButtonDisabled},on:{click:t.handleSelectPrevious}},[t._v(" 上一篇")]),n("a-button",{attrs:{disabled:t.selectNextButtonDisabled},on:{click:t.handleSelectNext}},[t._v(" 下一篇")])]},proxy:!0}])}),n("TargetCommentListModal",{attrs:{"target-id":t.list.selected.id,title:"「"+t.list.selected.title+"」的评论",visible:t.sheetCommentVisible,target:"sheet"},on:{"update:visible":function(e){t.sheetCommentVisible=e},close:t.onSheetCommentsClose},scopedSlots:t._u([{key:"extraFooter",fn:function(){return[n("a-button",{attrs:{disabled:t.selectPreviousButtonDisabled},on:{click:t.handleSelectPrevious}},[t._v(" 上一篇")]),n("a-button",{attrs:{disabled:t.selectNextButtonDisabled},on:{click:t.handleSelectNext}},[t._v(" 下一篇")])]},proxy:!0}])})],1)},S=[],x=(n(15928),n(41479),n(52904)),k=n(90722),b=n(96671),_=[{title:"标题",dataIndex:"title",ellipsis:!0,scopedSlots:{customRender:"sheetTitle"}},{title:"状态",dataIndex:"status",scopedSlots:{customRender:"status"}},{title:"评论量",dataIndex:"commentCount",scopedSlots:{customRender:"commentCount"}},{title:"访问量",dataIndex:"visits",scopedSlots:{customRender:"visits"}},{title:"发布时间",dataIndex:"createTime",scopedSlots:{customRender:"createTime"}},{title:"操作",width:"200px",scopedSlots:{customRender:"action"}}],C={name:"CustomSheetList",mixins:[c.jB,c.KT],components:{SheetSettingModal:x.Z,TargetCommentListModal:k.Z},data:function(){return{customColumns:_,sheetStatuses:b.Zi,list:{data:[],loading:!1,total:0,hasPrevious:!1,hasNext:!1,params:{page:0,size:10},selected:{}},sheetSettingVisible:!1,sheetSettingLoading:!1,sheetCommentVisible:!1}},computed:{pagination:function(){return{page:this.list.params.page+1,size:this.list.params.size,total:this.list.total}},selectPreviousButtonDisabled:function(){var t=this,e=this.list.data.findIndex((function(e){return e.id===t.list.selected.id}));return 0===e&&!this.list.hasPrevious},selectNextButtonDisabled:function(){var t=this,e=this.list.data.findIndex((function(e){return e.id===t.list.selected.id}));return e===this.list.data.length-1&&!this.list.hasNext}},created:function(){this.handleListSheets()},methods:{handleListSheets:function(){var t=arguments,e=this;return(0,l.Z)(regeneratorRuntime.mark((function n(){var a,s,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=!(t.length>0&&void 0!==t[0])||t[0],n.prev=1,a&&(e.list.loading=!0),n.next=5,u.Z.sheet.list(e.list.params);case 5:if(s=n.sent,i=s.data,!(0===i.content.length&&e.list.params.page>0)){n.next=12;break}return e.list.params.page--,n.next=11,e.handleListSheets();case 11:return n.abrupt("return");case 12:e.list.data=i.content,e.list.total=i.total,e.list.hasPrevious=i.hasPrevious,e.list.hasNext=i.hasNext,n.next=21;break;case 18:n.prev=18,n.t0=n["catch"](1),e.$log.error(n.t0);case 21:return n.prev=21,e.list.loading=!1,n.finish(21);case 24:case"end":return n.stop()}}),n,null,[[1,18,21,24]])})))()},handleEditClick:function(t){this.$router.push({name:"SheetEdit",query:{sheetId:t.id}})},handleChangeStatus:function(t,e){var n=this;return(0,l.Z)(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,u.Z.sheet.updateStatusById(t,e);case 3:n.$message.success("操作成功！"),a.next=9;break;case 6:a.prev=6,a.t0=a["catch"](0),n.$log.error("Failed to change sheet status",a.t0);case 9:return a.prev=9,a.next=12,n.handleListSheets();case 12:return a.finish(9);case 13:case"end":return a.stop()}}),a,null,[[0,6,9,13]])})))()},handleDelete:function(t){var e=this;return(0,l.Z)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Z.sheet["delete"](t);case 3:e.$message.success("删除成功！"),n.next=9;break;case 6:n.prev=6,n.t0=n["catch"](0),e.$log.error("Failed to delete sheet",n.t0);case 9:return n.prev=9,n.next=12,e.handleListSheets();case 12:return n.finish(9);case 13:case"end":return n.stop()}}),n,null,[[0,6,9,13]])})))()},handleOpenSheetSettings:function(t){var e=this;return(0,l.Z)(regeneratorRuntime.mark((function n(){var a,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,e.sheetSettingVisible=!0,e.sheetSettingLoading=!0,n.next=5,u.Z.sheet.get(t.id);case 5:a=n.sent,s=a.data,e.list.selected=s,n.next=13;break;case 10:n.prev=10,n.t0=n["catch"](0),e.$log.error("Failed to open sheet settings",n.t0);case 13:return n.prev=13,e.sheetSettingLoading=!1,n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,10,13,16]])})))()},handleOpenSheetComments:function(t){this.list.selected=t,this.sheetCommentVisible=!0},handlePreview:function(t){u.Z.sheet.getPreviewLinkById(t).then((function(t){window.open(t,"_blank")}))},handlePageChange:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.list.params.page=t-1,this.handleListSheets()},handlePageSizeChange:function(t,e){this.$log.debug("Current: ".concat(t,", PageSize: ").concat(e)),this.list.params.page=0,this.list.params.size=e,this.handleListSheets()},onSheetCommentsClose:function(){this.sheetCommentVisible=!1,this.list.selected={},this.handleListSheets(!1)},onSheetSavedCallback:function(){this.handleListSheets(!1)},handleSelectPrevious:function(){var t=this;return(0,l.Z)(regeneratorRuntime.mark((function e(){var n,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.list.data.findIndex((function(e){return e.id===t.list.selected.id})),!(n>0)){e.next=9;break}return t.sheetSettingLoading=!0,e.next=5,u.Z.sheet.get(t.list.data[n-1].id);case 5:return a=e.sent,t.list.selected=a.data,t.sheetSettingLoading=!1,e.abrupt("return");case 9:if(0!==n||!t.list.hasPrevious){e.next=19;break}return t.list.params.page--,e.next=13,t.handleListPosts();case 13:return t.sheetSettingLoading=!0,e.next=16,u.Z.sheet.get(t.list.data[t.list.data.length-1].id);case 16:s=e.sent,t.list.selected=s.data,t.sheetSettingLoading=!1;case 19:case"end":return e.stop()}}),e)})))()},handleSelectNext:function(){var t=this;return(0,l.Z)(regeneratorRuntime.mark((function e(){var n,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.list.data.findIndex((function(e){return e.id===t.list.selected.id})),!(n<t.list.data.length-1)){e.next=9;break}return t.sheetSettingLoading=!0,e.next=5,u.Z.sheet.get(t.list.data[n+1].id);case 5:return a=e.sent,t.list.selected=a.data,t.sheetSettingLoading=!1,e.abrupt("return");case 9:if(n!==t.list.data.length-1||!t.list.hasNext){e.next=19;break}return t.list.params.page++,e.next=13,t.handleListPosts();case 13:return t.sheetSettingLoading=!0,e.next=16,u.Z.sheet.get(t.list.data[0].id);case 16:s=e.sent,t.list.selected=s.data,t.sheetSettingLoading=!1;case 19:case"end":return e.stop()}}),e)})))()}},filters:{statusText:function(t){return t?b.Zi[t].text:""}}},y=C,w=(0,f.Z)(y,v,S,!1,null,null,null),L=w.exports,P={components:{PageView:i.B4,IndependentSheetList:g,CustomSheetList:L},data:function(){var t=[{title:"独立页面",icon:"paper-clip",component:"IndependentSheetList",key:"independent"},{title:"自定义页面",icon:"fork",component:"CustomSheetList",key:"custom"}];return{activeKey:t[0].key,panes:t}},beforeRouteEnter:function(t,e,n){var a=t.query.activeKey;n((function(t){a&&(t.activeKey=a)}))},watch:{activeKey:function(t){if(t){var e=this.$router.history.current.path;this.$router.push({path:e,query:{activeKey:t}}).catch((function(t){return t}))}}}},R=P,T=(0,f.Z)(R,a,s,!1,null,null,null),I=T.exports}}]);