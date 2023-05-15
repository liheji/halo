"use strict";(self["webpackChunkhalo_admin"]=self["webpackChunkhalo_admin"]||[]).push([[896],{60896:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("page-view",[a("a-row",{attrs:{gutter:12}},[a("a-col",{staticClass:"pb-3",attrs:{lg:10,md:10,sm:24,xl:10,xs:24}},[a("a-card",{attrs:{bodyStyle:{padding:"16px"},title:e.title}},[a("a-form-model",{ref:"tagForm",attrs:{model:e.form.model,rules:e.form.rules,layout:"horizontal"}},[a("a-form-model-item",{attrs:{help:"* 页面上所显示的名称",label:"名称：",prop:"name"}},[a("a-input",{model:{value:e.form.model.name,callback:function(t){e.$set(e.form.model,"name",t)},expression:"form.model.name"}})],1),a("a-form-model-item",{attrs:{help:"* 一般为单个标签页面的标识，最好为英文",label:"别名：",prop:"slug"}},[a("a-input",{model:{value:e.form.model.slug,callback:function(t){e.$set(e.form.model,"slug",t)},expression:"form.model.slug"}})],1),a("a-form-model-item",{attrs:{label:"颜色：",prop:"color"}},[a("a-input",{scopedSlots:e._u([{key:"addonAfter",fn:function(){return[a("verte",{staticStyle:{cursor:"pointer"},attrs:{model:"hex",picker:"square"},model:{value:e.form.model.color,callback:function(t){e.$set(e.form.model,"color",t)},expression:"form.model.color"}})]},proxy:!0}]),model:{value:e.form.model.color,callback:function(t){e.$set(e.form.model,"color",t)},expression:"form.model.color"}})],1),a("a-form-model-item",{attrs:{help:"* 在标签页面可展示，需要主题支持",label:"封面图：",prop:"thumbnail"}},[a("AttachmentInput",{attrs:{title:"选择封面图"},model:{value:e.form.model.thumbnail,callback:function(t){e.$set(e.form.model,"thumbnail",t)},expression:"form.model.thumbnail"}})],1),a("a-form-model-item",[e.isUpdateMode?a("a-button-group",[a("ReactiveButton",{attrs:{errored:e.form.errored,loading:e.form.saving,erroredText:"更新失败",loadedText:"更新成功",text:"更新",type:"primary"},on:{callback:e.handleSavedCallback,click:e.handleCreateOrUpdateTag}}),a("a-button",{attrs:{type:"dashed"},on:{click:function(t){e.form.model={}}}},[e._v("返回添加")])],1):a("ReactiveButton",{attrs:{errored:e.form.errored,loading:e.form.saving,erroredText:"保存失败",loadedText:"保存成功",text:"保存",type:"primary"},on:{callback:e.handleSavedCallback,click:e.handleCreateOrUpdateTag}}),e.isUpdateMode?a("a-popconfirm",{attrs:{title:"你确定要删除【"+e.form.model.name+"】标签？",cancelText:"取消",okText:"确定"},on:{confirm:function(t){return e.handleDeleteTag(e.form.model.id)}}},[a("a-button",{staticClass:"float-right",attrs:{type:"danger"}},[e._v("删除")])],1):e._e()],1)],1)],1)],1),a("a-col",{staticClass:"pb-3",attrs:{lg:14,md:14,sm:24,xl:14,xs:24}},[a("a-card",{attrs:{bodyStyle:{padding:"16px"},title:"所有标签"},scopedSlots:e._u([{key:"extra",fn:function(){return[a("a",{staticClass:"p-0 m-0",attrs:{href:"javascript:void(0)"},on:{click:e.handleCleanup}},[e._v("清理未使用标签")])]},proxy:!0}])},[a("a-spin",{attrs:{spinning:e.list.loading}},[0===e.list.data.length?a("a-empty"):e._e(),e._l(e.list.data,(function(t){return a("post-tag",{key:t.id,staticStyle:{"margin-bottom":"8px",cursor:"pointer"},attrs:{tag:t},nativeOn:{click:function(a){return e.handleEdit(t)}}})}))],2)],1)],1)],1)],1)},o=[],n=a(46307),l=(a(70315),a(31875),a(90195),a(82395),a(29888),a(45107),a(4899)),i=a(52187),s=a(4138),d=a(43154),m={components:{PageView:l.B4,Verte:d.Z},data:function(){return{list:{data:[],loading:!1},form:{model:{color:"#cfd3d7"},saving:!1,errored:!1,rules:{name:[{required:!0,message:"* 标签名称不能为空",trigger:["change"]},{max:255,message:"* 标签名称的字符长度不能超过 255",trigger:["change"]}],slug:[{max:255,message:"* 标签别名的字符长度不能超过 255",trigger:["change"]}],thumbnail:[{max:1023,message:"* 封面图链接的字符长度不能超过 1023",trigger:["change"]}],color:[{max:7,pattern:s.aX,message:"仅支持 hex 颜色值"}]}}}},computed:{title:function(){return this.isUpdateMode?"修改标签":"添加标签"},isUpdateMode:function(){return!!this.form.model.id}},created:function(){this.handleListTags()},methods:{handleEdit:function(e){this.form.model=e,this.$refs.tagForm.clearValidate()},handleListTags:function(){var e=this;this.list.loading=!0,i.Z.tag.list({more:!0}).then((function(t){e.list.data=t.data})).finally((function(){e.list.loading=!1}))},handleDeleteTag:function(e){var t=this;i.Z.tag["delete"](e).finally((function(){t.form.model={color:"#cfd3d7"},t.handleListTags()}))},handleCreateOrUpdateTag:function(){var e=this,t=this;t.$refs.tagForm.validate((function(a){a&&(e.form.saving=!0,t.isUpdateMode?i.Z.tag.update(t.form.model.id,t.form.model).catch((function(){e.form.errored=!0})).finally((function(){setTimeout((function(){t.form.saving=!1}),400)})):i.Z.tag.create(t.form.model).catch((function(){e.form.errored=!0})).finally((function(){setTimeout((function(){t.form.saving=!1}),400)})))}))},handleSavedCallback:function(){var e=this;e.form.errored?e.form.errored=!1:(e.form.model={color:"#cfd3d7"},e.handleListTags())},handleCleanup:function(){var e=this,t=this.list.data.filter((function(e){return 0===e.postCount}));this.$confirm({title:"提示",content:"是否确认清理没有使用的标签？",okText:"确认",cancelText:"取消",onOk:function(){var a=(0,n.Z)(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,r=t.map((function(e){return i.Z.tag["delete"](e.id)})),a.next=4,Promise.all(r);case 4:a.next=9;break;case 6:a.prev=6,a.t0=a["catch"](0),e.$log.error("Failed to cleanup tags:",a.t0);case 9:return a.prev=9,e.handleListTags(),a.finish(9);case 12:case"end":return a.stop()}}),a,null,[[0,6,9,12]])})));function r(){return a.apply(this,arguments)}return r}()})}}},c=m,u=a(48172),f=(0,u.Z)(c,r,o,!1,null,null,null),p=f.exports}}]);