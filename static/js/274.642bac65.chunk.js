"use strict";(self.webpackChunktest=self.webpackChunktest||[]).push([[274],{473:function(e,n,t){var r=t(1413),o=t(5987),a=t(2007),i=t.n(a),s=t(2791),c=t(1694),u=t.n(c),l=t(184),d=["className","variant"],f={"aria-label":i().string,onClick:i().func,variant:i().oneOf(["white"])},v=s.forwardRef((function(e,n){var t=e.className,a=e.variant,i=(0,o.Z)(e,d);return(0,l.jsx)("button",(0,r.Z)({ref:n,type:"button",className:u()("btn-close",a&&"btn-close-".concat(a),t)},i))}));v.displayName="CloseButton",v.propTypes=f,v.defaultProps={"aria-label":"Close"},n.Z=v},2274:function(e,n,t){t.d(n,{Z:function(){return Ue}});var r=t(885),o=t(5987),a=t(1413),i=t(1694),s=t.n(i),c=!("undefined"===typeof window||!window.document||!window.document.createElement),u=!1,l=!1;try{var d={get passive(){return u=!0},get once(){return l=u=!0}};c&&(window.addEventListener("test",d,d),window.removeEventListener("test",d,!0))}catch($e){}var f=function(e,n,t,r){if(r&&"boolean"!==typeof r&&!l){var o=r.once,a=r.capture,i=t;!l&&o&&(i=t.__once||function e(r){this.removeEventListener(n,e,a),t.call(this,r)},t.__once=i),e.addEventListener(n,i,u?r:a)}e.addEventListener(n,t,r)};function v(e){return e&&e.ownerDocument||document}var m,p=function(e,n,t,r){var o=r&&"boolean"!==typeof r?r.capture:r;e.removeEventListener(n,t,o),t.__once&&e.removeEventListener(n,t.__once,o)};function h(e){if((!m&&0!==m||e)&&c){var n=document.createElement("div");n.style.position="absolute",n.style.top="-9999px",n.style.width="50px",n.style.height="50px",n.style.overflow="scroll",document.body.appendChild(n),m=n.offsetWidth-n.clientWidth,document.body.removeChild(n)}return m}var g=t(2791);var y=function(e){var n=(0,g.useRef)(e);return(0,g.useEffect)((function(){n.current=e}),[e]),n};function E(e){var n=y(e);return(0,g.useCallback)((function(){return n.current&&n.current.apply(n,arguments)}),[n])}var b=function(e){return e&&"function"!==typeof e?function(n){e.current=n}:e};var x=function(e,n){return(0,g.useMemo)((function(){return function(e,n){var t=b(e),r=b(n);return function(e){t&&t(e),r&&r(e)}}(e,n)}),[e,n])};function w(e){var n=function(e){var n=(0,g.useRef)(e);return n.current=e,n}(e);(0,g.useEffect)((function(){return function(){return n.current()}}),[])}function k(e,n){return function(e){var n=v(e);return n&&n.defaultView||window}(e).getComputedStyle(e,n)}var N=/([A-Z])/g;var Z=/^ms-/;function C(e){return function(e){return e.replace(N,"-$1").toLowerCase()}(e).replace(Z,"-ms-")}var R=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var j=function(e,n){var t="",r="";if("string"===typeof n)return e.style.getPropertyValue(C(n))||k(e).getPropertyValue(C(n));Object.keys(n).forEach((function(o){var a=n[o];a||0===a?!function(e){return!(!e||!R.test(e))}(o)?t+=C(o)+": "+a+";":r+=o+"("+a+") ":e.style.removeProperty(C(o))})),r&&(t+="transform: "+r+";"),e.style.cssText+=";"+t};var O=function(e,n,t,r){return f(e,n,t,r),function(){p(e,n,t,r)}};function L(e,n,t){void 0===t&&(t=5);var r=!1,o=setTimeout((function(){r||function(e,n,t,r){if(void 0===t&&(t=!1),void 0===r&&(r=!0),e){var o=document.createEvent("HTMLEvents");o.initEvent(n,t,r),e.dispatchEvent(o)}}(e,"transitionend",!0)}),n+t),a=O(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(o),a()}}function T(e,n,t,r){null==t&&(t=function(e){var n=j(e,"transitionDuration")||"",t=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*t}(e)||0);var o=L(e,t,r),a=O(e,"transitionend",n);return function(){o(),a()}}function F(e){void 0===e&&(e=v());try{var n=e.activeElement;return n&&n.nodeName?n:null}catch($e){return e.body}}function S(e,n){return e.contains?e.contains(n):e.compareDocumentPosition?e===n||!!(16&e.compareDocumentPosition(n)):void 0}var D=t(4164);var P=t(2982),A=t(4942),B=t(5671),M=t(3144);var H,W=(H="modal-open","".concat("data-rr-ui-").concat(H)),_=function(){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.ownerDocument,r=n.handleContainerOverflow,o=void 0===r||r,a=n.isRTL,i=void 0!==a&&a;(0,B.Z)(this,e),this.handleContainerOverflow=o,this.isRTL=i,this.modals=[],this.ownerDocument=t}return(0,M.Z)(e,[{key:"getScrollbarWidth",value:function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,n=e.defaultView;return Math.abs(n.innerWidth-e.documentElement.clientWidth)}(this.ownerDocument)}},{key:"getElement",value:function(){return(this.ownerDocument||document).body}},{key:"setModalAttributes",value:function(e){}},{key:"removeModalAttributes",value:function(e){}},{key:"setContainerStyle",value:function(e){var n={overflow:"hidden"},t=this.isRTL?"paddingLeft":"paddingRight",r=this.getElement();e.style=(0,A.Z)({overflow:r.style.overflow},t,r.style[t]),e.scrollBarWidth&&(n[t]="".concat(parseInt(j(r,t)||"0",10)+e.scrollBarWidth,"px")),r.setAttribute(W,""),j(r,n)}},{key:"reset",value:function(){var e=this;(0,P.Z)(this.modals).forEach((function(n){return e.remove(n)}))}},{key:"removeContainerStyle",value:function(e){var n=this.getElement();n.removeAttribute(W),Object.assign(n.style,e.style)}},{key:"add",value:function(e){var n=this.modals.indexOf(e);return-1!==n?n:(n=this.modals.length,this.modals.push(e),this.setModalAttributes(e),0!==n||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),n)}},{key:"remove",value:function(e){var n=this.modals.indexOf(e);-1!==n&&(this.modals.splice(n,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}},{key:"isTopModal",value:function(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}}]),e}(),I=_,V=(0,g.createContext)(c?window:void 0);V.Provider;function K(){return(0,g.useContext)(V)}var z=function(e,n){return c?null==e?(n||v()).body:("function"===typeof e&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect)?e:null):null};var U,$=t(184),X=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","backdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function Y(e){var n=K(),t=e||function(e){return U||(U=new I({ownerDocument:null==e?void 0:e.document})),U}(n),r=(0,g.useRef)({dialog:null,backdrop:null});return Object.assign(r.current,{add:function(){return t.add(r.current)},remove:function(){return t.remove(r.current)},isTopModal:function(){return t.isTopModal(r.current)},setDialogRef:(0,g.useCallback)((function(e){r.current.dialog=e}),[]),setBackdropRef:(0,g.useCallback)((function(e){r.current.backdrop=e}),[])})}var q=(0,g.forwardRef)((function(e,n){var t=e.show,o=void 0!==t&&t,a=e.role,i=void 0===a?"dialog":a,s=e.className,u=e.style,l=e.children,d=e.backdrop,f=void 0===d||d,v=e.keyboard,m=void 0===v||v,p=e.onBackdropClick,h=e.onEscapeKeyDown,y=e.transition,b=e.backdropTransition,x=e.autoFocus,k=void 0===x||x,N=e.enforceFocus,Z=void 0===N||N,C=e.restoreFocus,R=void 0===C||C,j=e.restoreFocusOptions,L=e.renderDialog,T=e.renderBackdrop,P=void 0===T?function(e){return(0,$.jsx)("div",Object.assign({},e))}:T,A=e.manager,B=e.container,M=e.onShow,H=e.onHide,W=void 0===H?function(){}:H,_=e.onExit,I=e.onExited,V=e.onExiting,U=e.onEnter,q=e.onEntering,G=e.onEntered,J=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,X),Q=function(e,n){var t=K(),o=(0,g.useState)((function(){return z(e,null==t?void 0:t.document)})),a=(0,r.Z)(o,2),i=a[0],s=a[1];if(!i){var c=z(e);c&&s(c)}return(0,g.useEffect)((function(){n&&i&&n(i)}),[n,i]),(0,g.useEffect)((function(){var n=z(e);n!==i&&s(n)}),[e,i]),i}(B),ee=Y(A),ne=function(){var e=(0,g.useRef)(!0),n=(0,g.useRef)((function(){return e.current}));return(0,g.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),n.current}(),te=function(e){var n=(0,g.useRef)(null);return(0,g.useEffect)((function(){n.current=e})),n.current}(o),re=(0,g.useState)(!o),oe=(0,r.Z)(re,2),ae=oe[0],ie=oe[1],se=(0,g.useRef)(null);(0,g.useImperativeHandle)(n,(function(){return ee}),[ee]),c&&!te&&o&&(se.current=F()),y||o||ae?o&&ae&&ie(!1):ie(!0);var ce=E((function(){if(ee.add(),me.current=O(document,"keydown",fe),ve.current=O(document,"focus",(function(){return setTimeout(le)}),!0),M&&M(),k){var e=F(document);ee.dialog&&e&&!S(ee.dialog,e)&&(se.current=e,ee.dialog.focus())}})),ue=E((function(){var e;(ee.remove(),null==me.current||me.current(),null==ve.current||ve.current(),R)&&(null==(e=se.current)||null==e.focus||e.focus(j),se.current=null)}));(0,g.useEffect)((function(){o&&Q&&ce()}),[o,Q,ce]),(0,g.useEffect)((function(){ae&&ue()}),[ae,ue]),w((function(){ue()}));var le=E((function(){if(Z&&ne()&&ee.isTopModal()){var e=F();ee.dialog&&e&&!S(ee.dialog,e)&&ee.dialog.focus()}})),de=E((function(e){e.target===e.currentTarget&&(null==p||p(e),!0===f&&W())})),fe=E((function(e){m&&27===e.keyCode&&ee.isTopModal()&&(null==h||h(e),e.defaultPrevented||W())})),ve=(0,g.useRef)(),me=(0,g.useRef)(),pe=y;if(!Q||!(o||pe&&!ae))return null;var he=Object.assign({role:i,ref:ee.setDialogRef,"aria-modal":"dialog"===i||void 0},J,{style:u,className:s,tabIndex:-1}),ge=L?L(he):(0,$.jsx)("div",Object.assign({},he,{children:g.cloneElement(l,{role:"document"})}));pe&&(ge=(0,$.jsx)(pe,{appear:!0,unmountOnExit:!0,in:!!o,onExit:_,onExiting:V,onExited:function(){ie(!0),null==I||I.apply(void 0,arguments)},onEnter:U,onEntering:q,onEntered:G,children:ge}));var ye=null;if(f){var Ee=b;ye=P({ref:ee.setBackdropRef,onClick:de}),Ee&&(ye=(0,$.jsx)(Ee,{appear:!0,in:!!o,children:ye}))}return(0,$.jsx)($.Fragment,{children:D.createPortal((0,$.jsxs)($.Fragment,{children:[ye,ge]}),Q)})}));q.displayName="Modal";var G=Object.assign(q,{Manager:I}),J=t(1120);function Q(e,n){for(;!Object.prototype.hasOwnProperty.call(e,n)&&null!==(e=(0,J.Z)(e)););return e}function ee(){return ee="undefined"!==typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,n,t){var r=Q(e,n);if(r){var o=Object.getOwnPropertyDescriptor(r,n);return o.get?o.get.call(arguments.length<3?e:t):o.value}},ee.apply(this,arguments)}var ne=t(136),te=t(7277);var re=Function.prototype.bind.call(Function.prototype.call,[].slice);function oe(e,n){return re(e.querySelectorAll(n))}function ae(e,n){return e.replace(new RegExp("(^|\\s)"+n+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var ie,se=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",ce=".sticky-top",ue=".navbar-toggler",le=function(e){(0,ne.Z)(t,e);var n=(0,te.Z)(t);function t(){return(0,B.Z)(this,t),n.apply(this,arguments)}return(0,M.Z)(t,[{key:"adjustAndStore",value:function(e,n,t){var r=n.style[e];n.dataset[e]=r,j(n,(0,A.Z)({},e,"".concat(parseFloat(j(n,e))+t,"px")))}},{key:"restore",value:function(e,n){var t=n.dataset[e];void 0!==t&&(delete n.dataset[e],j(n,(0,A.Z)({},e,t)))}},{key:"setContainerStyle",value:function(e){var n=this;ee((0,J.Z)(t.prototype),"setContainerStyle",this).call(this,e);var r,o,a=this.getElement();if(o="modal-open",(r=a).classList?r.classList.add(o):function(e,n){return e.classList?!!n&&e.classList.contains(n):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+n+" ")}(r,o)||("string"===typeof r.className?r.className=r.className+" "+o:r.setAttribute("class",(r.className&&r.className.baseVal||"")+" "+o)),e.scrollBarWidth){var i=this.isRTL?"paddingLeft":"paddingRight",s=this.isRTL?"marginLeft":"marginRight";oe(a,se).forEach((function(t){return n.adjustAndStore(i,t,e.scrollBarWidth)})),oe(a,ce).forEach((function(t){return n.adjustAndStore(s,t,-e.scrollBarWidth)})),oe(a,ue).forEach((function(t){return n.adjustAndStore(s,t,e.scrollBarWidth)}))}}},{key:"removeContainerStyle",value:function(e){var n=this;ee((0,J.Z)(t.prototype),"removeContainerStyle",this).call(this,e);var r,o,a=this.getElement();o="modal-open",(r=a).classList?r.classList.remove(o):"string"===typeof r.className?r.className=ae(r.className,o):r.setAttribute("class",ae(r.className&&r.className.baseVal||"",o));var i=this.isRTL?"paddingLeft":"paddingRight",s=this.isRTL?"marginLeft":"marginRight";oe(a,se).forEach((function(e){return n.restore(i,e)})),oe(a,ce).forEach((function(e){return n.restore(s,e)})),oe(a,ue).forEach((function(e){return n.restore(s,e)}))}}]),t}(I);var de=t(5090);function fe(e,n){var t=j(e,n)||"",r=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*r}function ve(e,n){var t=fe(e,"transitionDuration"),r=fe(e,"transitionDelay"),o=T(e,(function(t){t.target===e&&(o(),n(t))}),t+r)}var me,pe=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children","childRef"],he=g.forwardRef((function(e,n){var t=e.onEnter,r=e.onEntering,i=e.onEntered,s=e.onExit,c=e.onExiting,u=e.onExited,l=e.addEndListener,d=e.children,f=e.childRef,v=(0,o.Z)(e,pe),m=(0,g.useRef)(null),p=x(m,f),h=function(e){var n;p((n=e)&&"setState"in n?D.findDOMNode(n):null!=n?n:null)},y=function(e){return function(n){e&&m.current&&e(m.current,n)}},E=(0,g.useCallback)(y(t),[t]),b=(0,g.useCallback)(y(r),[r]),w=(0,g.useCallback)(y(i),[i]),k=(0,g.useCallback)(y(s),[s]),N=(0,g.useCallback)(y(c),[c]),Z=(0,g.useCallback)(y(u),[u]),C=(0,g.useCallback)(y(l),[l]);return(0,$.jsx)(de.ZP,(0,a.Z)((0,a.Z)({ref:n},v),{},{onEnter:E,onEntered:w,onEntering:b,onExit:k,onExited:Z,onExiting:N,addEndListener:C,nodeRef:m,children:"function"===typeof d?function(e,n){return d(e,(0,a.Z)((0,a.Z)({},n),{},{ref:h}))}:g.cloneElement(d,{ref:h})}))})),ge=["className","children","transitionClasses"],ye=(me={},(0,A.Z)(me,de.d0,"show"),(0,A.Z)(me,de.cn,"show"),me),Ee=g.forwardRef((function(e,n){var t=e.className,r=e.children,i=e.transitionClasses,c=void 0===i?{}:i,u=(0,o.Z)(e,ge),l=(0,g.useCallback)((function(e,n){!function(e){e.offsetHeight}(e),null==u.onEnter||u.onEnter(e,n)}),[u]);return(0,$.jsx)(he,(0,a.Z)((0,a.Z)({ref:n,addEndListener:ve},u),{},{onEnter:l,childRef:r.ref,children:function(e,n){return g.cloneElement(r,(0,a.Z)((0,a.Z)({},n),{},{className:s()("fade",t,r.props.className,ye[e],c[e])}))}}))}));Ee.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},Ee.displayName="Fade";var be=Ee,xe=/-(.)/g;var we=t(162),ke=["className","bsPrefix","as"],Ne=function(e){return e[0].toUpperCase()+(n=e,n.replace(xe,(function(e,n){return n.toUpperCase()}))).slice(1);var n};function Ze(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.displayName,r=void 0===t?Ne(e):t,i=n.Component,c=n.defaultProps,u=g.forwardRef((function(n,t){var r=n.className,c=n.bsPrefix,u=n.as,l=void 0===u?i||"div":u,d=(0,o.Z)(n,ke),f=(0,we.vE)(c,e);return(0,$.jsx)(l,(0,a.Z)({ref:t,className:s()(r,f)},d))}));return u.defaultProps=c,u.displayName=r,u}var Ce=Ze("modal-body"),Re=g.createContext({onHide:function(){}}),je=["bsPrefix","className","contentClassName","centered","size","fullscreen","children","scrollable"],Oe=g.forwardRef((function(e,n){var t=e.bsPrefix,r=e.className,i=e.contentClassName,c=e.centered,u=e.size,l=e.fullscreen,d=e.children,f=e.scrollable,v=(0,o.Z)(e,je);t=(0,we.vE)(t,"modal");var m="".concat(t,"-dialog"),p="string"===typeof l?"".concat(t,"-fullscreen-").concat(l):"".concat(t,"-fullscreen");return(0,$.jsx)("div",(0,a.Z)((0,a.Z)({},v),{},{ref:n,className:s()(m,r,u&&"".concat(t,"-").concat(u),c&&"".concat(m,"-centered"),f&&"".concat(m,"-scrollable"),l&&p),children:(0,$.jsx)("div",{className:s()("".concat(t,"-content"),i),children:d})}))}));Oe.displayName="ModalDialog";var Le=Oe,Te=Ze("modal-footer"),Fe=t(473),Se=["closeLabel","closeVariant","closeButton","onHide","children"],De=g.forwardRef((function(e,n){var t=e.closeLabel,r=e.closeVariant,i=e.closeButton,s=e.onHide,c=e.children,u=(0,o.Z)(e,Se),l=(0,g.useContext)(Re),d=E((function(){null==l||l.onHide(),null==s||s()}));return(0,$.jsxs)("div",(0,a.Z)((0,a.Z)({ref:n},u),{},{children:[c,i&&(0,$.jsx)(Fe.Z,{"aria-label":t,variant:r,onClick:d})]}))}));De.defaultProps={closeLabel:"Close",closeButton:!1};var Pe=De,Ae=["bsPrefix","className"],Be=g.forwardRef((function(e,n){var t=e.bsPrefix,r=e.className,i=(0,o.Z)(e,Ae);return t=(0,we.vE)(t,"modal-header"),(0,$.jsx)(Pe,(0,a.Z)((0,a.Z)({ref:n},i),{},{className:s()(r,t)}))}));Be.displayName="ModalHeader",Be.defaultProps={closeLabel:"Close",closeButton:!1};var Me,He=Be,We=Ze("modal-title",{Component:(Me="h4",g.forwardRef((function(e,n){return(0,$.jsx)("div",(0,a.Z)((0,a.Z)({},e),{},{ref:n,className:s()(e.className,Me)}))})))}),_e=["bsPrefix","className","style","dialogClassName","contentClassName","children","dialogAs","aria-labelledby","aria-describedby","aria-label","show","animation","backdrop","keyboard","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager"],Ie={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:Le};function Ve(e){return(0,$.jsx)(be,(0,a.Z)((0,a.Z)({},e),{},{timeout:null}))}function Ke(e){return(0,$.jsx)(be,(0,a.Z)((0,a.Z)({},e),{},{timeout:null}))}var ze=g.forwardRef((function(e,n){var t=e.bsPrefix,i=e.className,u=e.style,l=e.dialogClassName,d=e.contentClassName,m=e.children,y=e.dialogAs,b=e["aria-labelledby"],k=e["aria-describedby"],N=e["aria-label"],Z=e.show,C=e.animation,R=e.backdrop,j=e.keyboard,O=e.onEscapeKeyDown,L=e.onShow,F=e.onHide,S=e.container,D=e.autoFocus,P=e.enforceFocus,A=e.restoreFocus,B=e.restoreFocusOptions,M=e.onEntered,H=e.onExit,W=e.onExiting,_=e.onEnter,I=e.onEntering,V=e.onExited,K=e.backdropClassName,z=e.manager,U=(0,o.Z)(e,_e),X=(0,g.useState)({}),Y=(0,r.Z)(X,2),q=Y[0],J=Y[1],Q=(0,g.useState)(!1),ee=(0,r.Z)(Q,2),ne=ee[0],te=ee[1],re=(0,g.useRef)(!1),oe=(0,g.useRef)(!1),ae=(0,g.useRef)(null),se=(0,g.useState)(null),ce=(0,r.Z)(se,2),ue=ce[0],de=ce[1],fe=x(n,de),ve=E(F),me=(0,we.SC)();t=(0,we.vE)(t,"modal");var pe=(0,g.useMemo)((function(){return{onHide:ve}}),[ve]);function he(){return z||function(e){return ie||(ie=new le(e)),ie}({isRTL:me})}function ge(e){if(c){var n=he().getScrollbarWidth()>0,t=e.scrollHeight>v(e).documentElement.clientHeight;J({paddingRight:n&&!t?h():void 0,paddingLeft:!n&&t?h():void 0})}}var ye=E((function(){ue&&ge(ue.dialog)}));w((function(){p(window,"resize",ye),null==ae.current||ae.current()}));var Ee=function(){re.current=!0},be=function(e){re.current&&ue&&e.target===ue.dialog&&(oe.current=!0),re.current=!1},xe=function(){te(!0),ae.current=T(ue.dialog,(function(){te(!1)}))},ke=function(e){"static"!==R?oe.current||e.target!==e.currentTarget?oe.current=!1:null==F||F():function(e){e.target===e.currentTarget&&xe()}(e)},Ne=(0,g.useCallback)((function(e){return(0,$.jsx)("div",(0,a.Z)((0,a.Z)({},e),{},{className:s()("".concat(t,"-backdrop"),K,!C&&"show")}))}),[C,K,t]),Ze=(0,a.Z)((0,a.Z)({},u),q);Ze.display="block";return(0,$.jsx)(Re.Provider,{value:pe,children:(0,$.jsx)(G,{show:Z,ref:fe,backdrop:R,container:S,keyboard:!0,autoFocus:D,enforceFocus:P,restoreFocus:A,restoreFocusOptions:B,onEscapeKeyDown:function(e){j||"static"!==R?j&&O&&O(e):(e.preventDefault(),xe())},onShow:L,onHide:F,onEnter:function(e,n){e&&ge(e),null==_||_(e,n)},onEntering:function(e,n){null==I||I(e,n),f(window,"resize",ye)},onEntered:M,onExit:function(e){null==ae.current||ae.current(),null==H||H(e)},onExiting:W,onExited:function(e){e&&(e.style.display=""),null==V||V(e),p(window,"resize",ye)},manager:he(),transition:C?Ve:void 0,backdropTransition:C?Ke:void 0,renderBackdrop:Ne,renderDialog:function(e){return(0,$.jsx)("div",(0,a.Z)((0,a.Z)({role:"dialog"},e),{},{style:Ze,className:s()(i,t,ne&&"".concat(t,"-static"),!C&&"show"),onClick:R?ke:void 0,onMouseUp:be,"aria-label":N,"aria-labelledby":b,"aria-describedby":k,children:(0,$.jsx)(y,(0,a.Z)((0,a.Z)({},U),{},{onMouseDown:Ee,className:l,contentClassName:d,children:m}))}))}})})}));ze.displayName="Modal",ze.defaultProps=Ie;var Ue=Object.assign(ze,{Body:Ce,Header:He,Title:We,Footer:Te,Dialog:Le,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150})}}]);
//# sourceMappingURL=274.642bac65.chunk.js.map