{"source":"webpackJsonp([7],{277:function(e,t,s){var a=s(5)(s(311),s(312),null,null);e.exports=a.exports},311:function(e,t,s){\"use strict\";Object.defineProperty(t,\"__esModule\",{value:!0});var a=s(10);t.default={name:\"setting\",components:{},data:function(){return{isLoading:!1,fillForm:{email:\"\",password:\"\"},tipMessageObj:{message:\"\",type:\"\"},operateFun:{\"/forgot-pwd\":\"requestResetPwd\",\"/reset-pwd\":\"launchResetPwd\"}}},methods:{requestResetPwd:function(){var e=this,t={email:this.fillForm.email};a.a.requestResetPwd(t).then(function(t){e.tipMessageObj={message:t.message,type:\"success\"}}).catch(function(t){e.isLoading=!1,e.tipMessageObj={message:t,type:\"error\"}})},launchResetPwd:function(){},onResetClick:function(){this[this.operateFun[this.$route.path]]()}},locales:{zh:{resetPwd:\"重设密码\",registeredMailbox:\"注册邮箱\"},en:{resetPwd:\"Reset Password  \",registeredMailbox:\"Registered Mailbox\"}}}},312:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s(\"div\",{staticClass:\"wrapper\"},[s(\"div\",{directives:[{name:\"loading\",rawName:\"v-loading.body\",value:e.isLoading,expression:\"isLoading\",modifiers:{body:!0}}],staticClass:\"panel-default\"},[s(\"div\",{staticClass:\"panel-body\"},[s(\"div\",{staticClass:\"main-container\"},[s(\"div\",{staticClass:\"entry-list\"},[s(\"el-card\",{staticClass:\"box-card\"},[s(\"div\",{staticClass:\"clearfix\",slot:\"header\"},[s(\"el-breadcrumb\",{attrs:{separator:\"/\"}},[s(\"el-breadcrumb-item\",{attrs:{to:{path:\"/\"}}},[e._v(e._s(e.$t(\"homePage\")))]),e._v(\" \"),s(\"el-breadcrumb-item\",[e._v(e._s(e.$t(\"resetPwd\")))])],1)],1),e._v(\" \"),e.tipMessageObj.message?s(\"div\",{staticClass:\"form-group\"},[s(\"el-alert\",{attrs:{title:e.tipMessageObj.message,type:e.tipMessageObj.type}})],1):e._e(),e._v(\" \"),s(\"div\",{staticClass:\"form-group\"},[s(\"label\",{staticClass:\"col-sm-3 control-label\"},[e._v(e._s(e.$t(\"registeredMailbox\"))+\":\")]),e._v(\" \"),s(\"div\",{staticClass:\"col-sm-9\"},[s(\"el-input\",{directives:[{name:\"model\",rawName:\"v-model.trim\",value:e.fillForm.email,expression:\"fillForm.email\",modifiers:{trim:!0}}],attrs:{placeholder:\"\"},domProps:{value:e.fillForm.email},on:{input:function(t){e.fillForm.email=\"string\"==typeof t?t.trim():t},blur:function(t){e.$forceUpdate()}}})],1)]),e._v(\" \"),s(\"div\",{staticClass:\"form-group\"},[s(\"div\",{staticClass:\"col-sm-offset-3 col-sm-9\"},[s(\"el-button\",{attrs:{type:\"primary\"},on:{click:e.onResetClick}},[e._v(e._s(e.$t(\"resetPwd\")))])],1)])])],1),e._v(\" \"),s(\"aside-list\")],1)])])])},staticRenderFns:[]}}});"}