(this["webpackJsonpone-click-test"]=this["webpackJsonpone-click-test"]||[]).push([[30],{373:function(e,t,n){"use strict";n.r(t),n.d(t,"amplify_select_mfa_type",(function(){return f}));var i=n(9),a=n(33),s=n(7),r=n(26),o=n(63),u=n(6),l=n(14),c=function(e,t,n,i){return new(n||(n=Promise))((function(a,s){function r(e){try{u(i.next(e))}catch(t){s(t)}}function o(e){try{u(i.throw(e))}catch(t){s(t)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,o)}u((i=i.apply(e,t||[])).next())}))},h=function(e,t){var n,i,a,s,r={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:o(0),throw:o(1),return:o(2)},"function"===typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function o(s){return function(o){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,i&&(a=2&s[0]?i.return:s[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,s[1])).done)return a;switch(i=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return r.label++,{value:s[1],done:!1};case 5:r.label++,i=s[1],s=[0];continue;case 7:s=r.ops.pop(),r.trys.pop();continue;default:if(!(a=(a=r.trys).length>0&&a[a.length-1])&&(6===s[0]||2===s[0])){r=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){r.label=s[1];break}if(6===s[0]&&r.label<a[1]){r.label=a[1],a=s;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(s);break}a[2]&&r.ops.pop(),r.trys.pop();continue}s=t.call(e,r)}catch(o){s=[6,o],i=0}finally{n=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,o])}}},T=new a.a("SelectMFAType"),f=function(){function e(e){var t=this;Object(i.k)(this,e),this.handleSubmit=function(e){return t.verify(e)},this.TOTPSetup=!1,this.selectMessage=null,this.MFAMethod=null,this.isTOTP=!1,this.isNoMFA=!1,this.isSMS=!1,this.loading=!1}return e.prototype.handleRadioButtonChange=function(e){this.TOTPSetup=!1,this.selectMessage=null,this.isNoMFA=!1,this.isTOTP=!1,this.isSMS=!1;var t=e.target,n=t.value,i=t.type,a=t.checked,s=["radio","checkbox"].includes(i);n===r.c.SMS&&s&&(this.isSMS=a),n===r.c.TOTP&&s&&(this.isTOTP=a),n===r.c.NOMFA&&s&&(this.isNoMFA=a)},e.prototype.verify=function(e){return c(this,void 0,void 0,(function(){var t,n,i,a;return h(this,(function(c){switch(c.label){case 0:if(e&&e.preventDefault(),T.debug("MFA Type Values",{TOTP:this.isTOTP,SMS:this.isSMS,"No MFA":this.isNoMFA}),this.isTOTP?this.MFAMethod=r.c.TOTP:this.isSMS?this.MFAMethod=r.c.SMS:this.isNoMFA&&(this.MFAMethod=r.c.NOMFA),t=this.authData,!o.a||"function"!==typeof o.a.setPreferredMFA)throw new Error(l.d);this.loading=!0,c.label=1;case 1:return c.trys.push([1,3,4,5]),[4,o.a.setPreferredMFA(t,this.MFAMethod)];case 2:return n=c.sent(),T.debug("Set Preferred MFA Succeeded",n),this.selectMessage=s.a.get(u.a.SUCCESS_MFA_TYPE)+" "+this.MFAMethod,[3,5];case 3:return i=c.sent(),(a=i.message)===l.o||a===l.p?(this.TOTPSetup=!0,this.selectMessage=s.a.get(u.a.SETUP_TOTP_REQUIRED)):(T.debug("Set Preferred MFA failed",i),this.selectMessage=s.a.get(u.a.UNABLE_TO_SETUP_MFA_AT_THIS_TIME)),[3,5];case 4:return this.loading=!1,[7];case 5:return[2]}}))}))},e.prototype.contentBuilder=function(){var e=this;if(!this.MFATypes||Object.keys(this.MFATypes).length<2)return T.debug(s.a.get(u.a.LESS_THAN_TWO_MFA_VALUES_MESSAGE)),Object(i.i)("div",null,Object(i.i)("a",null,s.a.get(u.a.LESS_THAN_TWO_MFA_VALUES_MESSAGE)));var t=this.MFATypes,n=t.SMS,a=t.TOTP,r=t.Optional;return Object(i.i)("amplify-form-section",{submitButtonText:s.a.get(u.a.SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT),headerText:s.a.get(u.a.SELECT_MFA_TYPE_HEADER_TEXT),handleSubmit:function(t){return e.handleSubmit(t)},loading:this.loading},n?Object(i.i)("amplify-radio-button",{key:"sms",name:"MFAType",value:"SMS",label:"SMS",handleInputChange:function(t){return e.handleRadioButtonChange(t)}}):null,a?Object(i.i)("amplify-radio-button",{key:"totp",name:"MFAType",value:"TOTP",label:"TOTP",handleInputChange:function(t){return e.handleRadioButtonChange(t)}}):null,r?Object(i.i)("amplify-radio-button",{key:"noMFA",name:"MFAType",value:"NOMFA",label:"No MFA",handleInputChange:function(t){return e.handleRadioButtonChange(t)}}):null)},e.prototype.render=function(){return Object(i.i)("div",null,this.contentBuilder(),this.TOTPSetup?Object(i.i)("amplify-totp-setup",{user:this.authData}):null)},e}()}}]);
//# sourceMappingURL=30.242e6bd8.chunk.js.map