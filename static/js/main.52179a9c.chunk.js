(this["webpackJsonpregistration-form"]=this["webpackJsonpregistration-form"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(7),l=a.n(r),s=(a(14),a(9)),c=a(8),i=a(4),o=a(3),u=a(5),b=a(2),m=a.n(b),j=(a(15),a(0)),d=function(e){var t=e.label,a=e.name,n=e.type,r=e.value,l=e.onChange,s=e.validate,c=e.error,i=e.className,o=e.message,u=m()("field",i);return Object(j.jsxs)("label",{className:u,children:[t&&Object(j.jsxs)("span",{className:"field__label",children:[t,":"]}),Object(j.jsx)("input",{type:n,name:a,value:r,onChange:l,onBlur:s,onFocus:s,className:"field__input field__input_dark"}),c&&Object(j.jsx)("span",{className:"field__info field__info_error",children:c}),o&&!c&&Object(j.jsx)("span",{className:"field__info field__info_message",children:o})]})};d.defaultProps={type:"text",value:""};var f=Object(n.memo)(d),O=function(e){var t=e.values,a=e.errors,n=e.handleChange,r=e.validate;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(f,{label:"\u041b\u043e\u0433\u0438\u043d",name:"login",value:t.login,error:a.login,onChange:n,validate:r}),Object(j.jsx)(f,{label:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",value:t.password,type:"password",error:a.password,onChange:n,validate:r}),Object(j.jsx)(f,{label:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",name:"phoneNumber",value:t.phoneNumber,type:"tel",error:a.phoneNumber,onChange:n,validate:r,message:"\u043d\u0430 \u0441\u043b\u0443\u0447\u0430\u0439, \u0435\u0441\u043b\u0438 \u0432\u044b \u0437\u0430\u0431\u0443\u0434\u0435\u0442\u0435 \u0441\u0432\u043e\u0439 \u043f\u0430\u0440\u043e\u043b\u044c"})]})},p=Object(n.memo)(O),v=function(e){var t=e.values,a=e.errors,n=e.handleChange,r=e.validate;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(f,{label:"\u0418\u043c\u044f",name:"firstName",value:t.firstName,error:a.firstName,onChange:n,validate:r}),Object(j.jsx)(f,{label:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",name:"lastName",value:t.lastName,error:a.lastName,onChange:n,validate:r}),Object(j.jsx)(f,{label:"E-mail",name:"email",value:t.email,type:"email",error:a.email,onChange:n,validate:r,message:"\u0431\u0443\u0434\u0435\u043c \u043f\u0440\u0438\u0441\u044b\u043b\u0430\u0442\u044c \u043a\u0440\u0443\u0442\u044b\u0435 \u043e\u0442\u043a\u0440\u044b\u0442\u043a\u0438 \u043f\u043e \u043f\u0440\u0430\u0437\u0434\u043d\u0438\u043a\u0430\u043c"})]})},h=Object(n.memo)(v),g=(a(17),function(e){var t=e.className,a=e.children,n=e.title,r=e.onSubmit,l=m()("form",t);return Object(j.jsxs)("form",{className:l,onSubmit:r,children:[n&&Object(j.jsx)("h1",{className:"form__title",children:n}),a]})}),x=(a(18),function(e){var t=e.type,a=e.onClick,n=e.disabled,r=e.text,l=e.className,s=m()("button",l);return Object(j.jsx)("button",{type:t,onClick:a,disabled:n,className:s,children:r})});x.defaultProps={type:"button",text:"",disabled:!1};var N=Object(n.memo)(x),_="\u043f\u043e\u043b\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043f\u0443\u0441\u0442\u044b\u043c",C=new RegExp(/\S+@\S+\.\S+/),k=new RegExp(/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/),w=function(e){return""===e.trim()?_:null},y={login:"",password:"",phoneNumber:"",firstName:"",lastName:"",email:""},S=["login","password","phoneNumber"],F=["firstName","lastName","email"],E={login:w,password:function(e){var t=e.trim();return t.length>=8?null:""===t?_:"\u043f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 8 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"},phoneNumber:function(e){return k.test(e)?null:""===e.trim()?_:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 \u0442\u0435\u043b\u0435\u0444\u043e\u043d"},firstName:w,lastName:w,email:function(e){return C.test(e)?null:""===e.trim()?_:"\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439 email"}},P=function(){var e=Object(n.useState)(0),t=Object(u.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)({0:!1,1:!1}),b=Object(u.a)(l,2),d=b[0],f=b[1],O=Object(n.useState)(y),v=Object(u.a)(O,2),x=v[0],_=v[1],C=Object(n.useState)({}),k=Object(u.a)(C,2),w=k[0],P=k[1],B=0===a?S:F,D=m()({form_second:1===a}),I=Object(n.useCallback)((function(e){e.preventDefault(),console.log(x)}),[x]),J=Object(n.useCallback)((function(e){var t=e.target,a=t.value,n=t.name;_((function(e){return Object(o.a)(Object(o.a)({},e),{},Object(i.a)({},n,a.trim()))}))}),[]),L=Object(n.useCallback)((function(e){var t=e.target,n=t.value,r=t.name,l=E[r](n),u=(w[r],Object(s.a)(w,[r].map(c.a))),b=Object(o.a)(Object(o.a)({},u),l&&Object(i.a)({},r,l));P(b),f((function(e){var t=function(e,t,a){return a.every((function(a){return""!==t[a]&&!e[a]}))}(b,x,B);return Object(o.a)(Object(o.a)({},e),Object(i.a)({},a,t))}))}),[d,w]),R=Object(n.useCallback)((function(){return r(+!a)}),[a]);return Object(j.jsx)(g,{className:D,onSubmit:I,title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",children:Object(j.jsxs)(j.Fragment,{children:[0===a?Object(j.jsx)(p,{values:x,errors:w,validate:L,handleChange:J}):Object(j.jsx)(h,{values:x,errors:w,validate:L,handleChange:J}),0===a?Object(j.jsx)(N,{className:"button_purple",text:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c",disabled:!d[0],onClick:R}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(N,{className:"button_purple form__button",text:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f",type:"submit",disabled:!d[1]}),Object(j.jsx)(N,{className:"button-link form__link",type:"submit",text:"< \u041d\u0430\u0437\u0430\u0434",onClick:R})]})]})})};var B=function(){return Object(j.jsx)("div",{className:"wrapper wrapper_dark",children:Object(j.jsx)(P,{})})},D=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,20)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,l=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),l(e),s(e)}))};l.a.render(Object(j.jsx)(B,{}),document.getElementById("root")),D()}},[[19,1,2]]]);
//# sourceMappingURL=main.52179a9c.chunk.js.map