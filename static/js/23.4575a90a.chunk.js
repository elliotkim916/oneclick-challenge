(this["webpackJsonpone-click-test"]=this["webpackJsonpone-click-test"]||[]).push([[23],{359:function(t,i,e){"use strict";e.r(i),e.d(i,"amplify_form_field",(function(){return r})),e.d(i,"amplify_hint",(function(){return n})),e.d(i,"amplify_input",(function(){return l})),e.d(i,"amplify_label",(function(){return a}));var o=e(9),r=function(){function t(t){Object(o.k)(this,t),this.type="text",this.required=!1,this.placeholder=""}return t.prototype.render=function(){return Object(o.i)("div",{class:"form-field"},this.label&&Object(o.i)("div",{class:"form-field-label"},Object(o.i)("amplify-label",{htmlFor:this.fieldId},this.label)),this.description&&Object(o.i)("div",{id:this.fieldId+"-description",class:"form-field-description","data-test":"form-field-description"},this.description),Object(o.i)("div",null,Object(o.i)("slot",{name:"input"},Object(o.i)("amplify-input",{fieldId:this.fieldId,description:this.description,type:this.type,handleInputChange:this.handleInputChange,placeholder:this.placeholder,name:this.name,value:this.value,inputProps:this.inputProps,disabled:this.disabled}))),this.hint&&Object(o.i)("amplify-hint",{id:this.fieldId+"-hint"},this.hint))},t}();r.style=":host{--label-font-size:var(--amplify-text-md);--description-font-size:var(--amplify-text-sm)}.form-field{margin-bottom:15px}.form-field-label{display:block;font-size:var(--label-font-size);padding-bottom:0.5em}.form-field-description{font-size:var(--description-font-size);padding-top:0.5em}";var n=function(){function t(t){Object(o.k)(this,t)}return t.prototype.render=function(){return Object(o.i)("div",{class:"hint"},Object(o.i)("slot",null))},t}();n.style=":host{--color:var(--amplify-grey);--font-family:var(--amplify-font-family);--font-size:var(--amplify-text-xs);--font-weight:var(--amplify-font-weight)}.hint{color:var(--color);font-family:var(--font-family);font-weight:var(--font-weight);font-size:var(--font-size);margin-bottom:2.625rem}";var l=function(){function t(t){Object(o.k)(this,t),this.type="text",this.handleInputChange=function(){},this.placeholder="",this.formSubmit=Object(o.f)(this,"formSubmit",7)}return t.prototype.handleKeyDown=function(t){"Enter"===t.key&&this.formSubmit.emit(t)},t.prototype.render=function(){var t=this;return Object(o.i)(o.b,{class:"input-host"},Object(o.i)("input",Object.assign({id:this.fieldId,"aria-describedby":this.fieldId&&this.description?this.fieldId+"-description":null,type:this.type,onInput:function(i){return t.handleInputChange(i)},placeholder:this.placeholder,name:this.name,class:"input",value:this.value,disabled:this.disabled},this.inputProps)))},t}();l.style=":host{--color:var(--amplify-secondary-color);--background-color:var(--amplify-secondary-contrast);--border-color:var(--amplify-light-grey);--border-color-focus:var(--amplify-primary-color);--border:1px solid var(--border-color);--margin:0 0 0.625rem 0}.input-host{width:100%}.input{display:block;width:100%;padding:1rem;font-size:var(--amplify-text-sm);color:var(--color);background-color:var(--background-color);background-image:none;border:var(--border);border-radius:3px;-webkit-box-sizing:border-box;box-sizing:border-box;margin:var(--margin);height:3.125rem;line-height:1.1}.input:focus{outline:none;border-color:var(--border-color-focus)}.input:disabled{opacity:0.5}";var a=function(){function t(t){Object(o.k)(this,t)}return t.prototype.render=function(){return Object(o.i)("label",{class:"label",htmlFor:this.htmlFor},Object(o.i)("slot",null))},t}();a.style=":host{--label-color:var(--amplify-secondary-color)}.label{color:var(--label-color);font-size:var(--amplify-text-sm);margin-bottom:16px}"}}]);
//# sourceMappingURL=23.4575a90a.chunk.js.map