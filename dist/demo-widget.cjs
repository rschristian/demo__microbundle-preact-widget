var e,_,n,t,l,o,r,u,i,s,c={},f=[],p=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,d=Array.isArray;function a(e,_){for(var n in _)e[n]=_[n];return e}function h(e){var _=e.parentNode;_&&_.removeChild(e)}function v(_,n,t){var l,o,r,u={};for(r in n)"key"==r?l=n[r]:"ref"==r?o=n[r]:u[r]=n[r];if(arguments.length>2&&(u.children=arguments.length>3?e.call(arguments,2):t),"function"==typeof _&&null!=_.defaultProps)for(r in _.defaultProps)void 0===u[r]&&(u[r]=_.defaultProps[r]);return y(_,u,l,o,null)}function y(e,t,l,o,r){var u={type:e,props:t,key:l,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==r?++n:r,__i:-1,__u:0};return null==r&&null!=_.vnode&&_.vnode(u),u}function m(e){return e.children}function g(e,_){this.props=e,this.context=_}function k(e,_){if(null==_)return e.__?k(e.__,e.__i+1):null;for(var n;_<e.__k.length;_++)if(null!=(n=e.__k[_])&&null!=n.__e)return n.__e;return"function"==typeof e.type?k(e):null}function b(e){var _,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,_=0;_<e.__k.length;_++)if(null!=(n=e.__k[_])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return b(e)}}function x(e){(!e.__d&&(e.__d=!0)&&t.push(e)&&!S.__r++||l!==_.debounceRendering)&&((l=_.debounceRendering)||o)(S)}function S(){var e,n,l,o,u,i,s,c;for(t.sort(r);e=t.shift();)e.__d&&(n=t.length,o=void 0,i=(u=(l=e).__v).__e,s=[],c=[],l.__P&&((o=a({},u)).__v=u.__v+1,_.vnode&&_.vnode(o),M(l.__P,o,u,l.__n,void 0!==l.__P.ownerSVGElement,32&u.__u?[i]:null,s,null==i?k(u):i,!!(32&u.__u),c),o.__v=u.__v,o.__.__k[o.__i]=o,L(s,o,c),o.__e!=i&&b(o)),t.length>n&&t.sort(r));S.__r=0}function w(e,_,n,t,l,o,r,u,i,s,p){var d,a,h,v,y,m=t&&t.__k||f,g=_.length;for(n.__d=i,P(n,_,m),i=n.__d,d=0;d<g;d++)null!=(h=n.__k[d])&&"boolean"!=typeof h&&"function"!=typeof h&&(a=-1===h.__i?c:m[h.__i]||c,h.__i=d,M(e,h,a,l,o,r,u,i,s,p),v=h.__e,h.ref&&a.ref!=h.ref&&(a.ref&&F(a.ref,null,h),p.push(h.ref,h.__c||v,h)),null==y&&null!=v&&(y=v),65536&h.__u||a.__k===h.__k?(i&&!i.isConnected&&(i=k(a)),i=C(h,i,e)):"function"==typeof h.type&&void 0!==h.__d?i=h.__d:v&&(i=v.nextSibling),h.__d=void 0,h.__u&=-196609);n.__d=i,n.__e=y}function P(e,_,n){var t,l,o,r,u,i=_.length,s=n.length,c=s,f=0;for(e.__k=[],t=0;t<i;t++)r=t+f,null!=(l=e.__k[t]=null==(l=_[t])||"boolean"==typeof l||"function"==typeof l?null:"string"==typeof l||"number"==typeof l||"bigint"==typeof l||l.constructor==String?y(null,l,null,null,null):d(l)?y(m,{children:l},null,null,null):void 0===l.constructor&&l.__b>0?y(l.type,l.props,l.key,l.ref?l.ref:null,l.__v):l)?(l.__=e,l.__b=e.__b+1,u=E(l,n,r,c),l.__i=u,o=null,-1!==u&&(c--,(o=n[u])&&(o.__u|=131072)),null==o||null===o.__v?(-1==u&&f--,"function"!=typeof l.type&&(l.__u|=65536)):u!==r&&(u===r+1?f++:u>r?c>i-r?f+=u-r:f--:u<r?u==r-1&&(f=u-r):f=0,u!==t+f&&(l.__u|=65536))):(o=n[r])&&null==o.key&&o.__e&&!(131072&o.__u)&&(o.__e==e.__d&&(e.__d=k(o)),H(o,o,!1),n[r]=null,c--);if(c)for(t=0;t<s;t++)null!=(o=n[t])&&!(131072&o.__u)&&(o.__e==e.__d&&(e.__d=k(o)),H(o,o))}function C(e,_,n){var t,l;if("function"==typeof e.type){for(t=e.__k,l=0;t&&l<t.length;l++)t[l]&&(t[l].__=e,_=C(t[l],_,n));return _}e.__e!=_&&(n.insertBefore(e.__e,_||null),_=e.__e);do{_=_&&_.nextSibling}while(null!=_&&8===_.nodeType);return _}function E(e,_,n,t){var l=e.key,o=e.type,r=n-1,u=n+1,i=_[n];if(null===i||i&&l==i.key&&o===i.type&&!(131072&i.__u))return n;if(t>(null==i||131072&i.__u?0:1))for(;r>=0||u<_.length;){if(r>=0){if((i=_[r])&&!(131072&i.__u)&&l==i.key&&o===i.type)return r;r--}if(u<_.length){if((i=_[u])&&!(131072&i.__u)&&l==i.key&&o===i.type)return u;u++}}return-1}function T(e,_,n){"-"===_[0]?e.setProperty(_,null==n?"":n):e[_]=null==n?"":"number"!=typeof n||p.test(_)?n:n+"px"}function D(e,_,n,t,l){var o;e:if("style"===_)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof t&&(e.style.cssText=t=""),t)for(_ in t)n&&_ in n||T(e.style,_,"");if(n)for(_ in n)t&&n[_]===t[_]||T(e.style,_,n[_])}else if("o"===_[0]&&"n"===_[1])o=_!==(_=_.replace(/(PointerCapture)$|Capture$/i,"$1")),_=_.toLowerCase()in e||"onFocusOut"===_||"onFocusIn"===_?_.toLowerCase().slice(2):_.slice(2),e.l||(e.l={}),e.l[_+o]=n,n?t?n.u=t.u:(n.u=u,e.addEventListener(_,o?s:i,o)):e.removeEventListener(_,o?s:i,o);else{if(l)_=_.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=_&&"height"!=_&&"href"!=_&&"list"!=_&&"form"!=_&&"tabIndex"!=_&&"download"!=_&&"rowSpan"!=_&&"colSpan"!=_&&"role"!=_&&_ in e)try{e[_]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null==n||!1===n&&"-"!==_[4]?e.removeAttribute(_):e.setAttribute(_,n))}}function U(e){return function(n){if(this.l){var t=this.l[n.type+e];if(null==n.t)n.t=u++;else if(n.t<t.u)return;return t(_.event?_.event(n):n)}}}function M(e,n,t,l,o,r,u,i,s,c){var f,p,h,v,y,k,b,x,S,P,C,E,T,D,U,M=n.type;if(void 0!==n.constructor)return null;128&t.__u&&(s=!!(32&t.__u),r=[i=n.__e=t.__e]),(f=_.__b)&&f(n);e:if("function"==typeof M)try{if(x=n.props,S=(f=M.contextType)&&l[f.__c],P=f?S?S.props.value:f.__:l,t.__c?b=(p=n.__c=t.__c).__=p.__E:("prototype"in M&&M.prototype.render?n.__c=p=new M(x,P):(n.__c=p=new g(x,P),p.constructor=M,p.render=N),S&&S.sub(p),p.props=x,p.state||(p.state={}),p.context=P,p.__n=l,h=p.__d=!0,p.__h=[],p._sb=[]),null==p.__s&&(p.__s=p.state),null!=M.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=a({},p.__s)),a(p.__s,M.getDerivedStateFromProps(x,p.__s))),v=p.props,y=p.state,p.__v=n,h)null==M.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==M.getDerivedStateFromProps&&x!==v&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(x,P),!p.__e&&(null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(x,p.__s,P)||n.__v===t.__v)){for(n.__v!==t.__v&&(p.props=x,p.state=p.__s,p.__d=!1),n.__e=t.__e,n.__k=t.__k,n.__k.forEach(function(e){e&&(e.__=n)}),C=0;C<p._sb.length;C++)p.__h.push(p._sb[C]);p._sb=[],p.__h.length&&u.push(p);break e}null!=p.componentWillUpdate&&p.componentWillUpdate(x,p.__s,P),null!=p.componentDidUpdate&&p.__h.push(function(){p.componentDidUpdate(v,y,k)})}if(p.context=P,p.props=x,p.__P=e,p.__e=!1,E=_.__r,T=0,"prototype"in M&&M.prototype.render){for(p.state=p.__s,p.__d=!1,E&&E(n),f=p.render(p.props,p.state,p.context),D=0;D<p._sb.length;D++)p.__h.push(p._sb[D]);p._sb=[]}else do{p.__d=!1,E&&E(n),f=p.render(p.props,p.state,p.context),p.state=p.__s}while(p.__d&&++T<25);p.state=p.__s,null!=p.getChildContext&&(l=a(a({},l),p.getChildContext())),h||null==p.getSnapshotBeforeUpdate||(k=p.getSnapshotBeforeUpdate(v,y)),w(e,d(U=null!=f&&f.type===m&&null==f.key?f.props.children:f)?U:[U],n,t,l,o,r,u,i,s,c),p.base=n.__e,n.__u&=-161,p.__h.length&&u.push(p),b&&(p.__E=p.__=null)}catch(e){n.__v=null,s||null!=r?(n.__e=i,n.__u|=s?160:32,r[r.indexOf(i)]=null):(n.__e=t.__e,n.__k=t.__k),_.__e(e,n,t)}else null==r&&n.__v===t.__v?(n.__k=t.__k,n.__e=t.__e):n.__e=W(t.__e,n,t,l,o,r,u,s,c);(f=_.diffed)&&f(n)}function L(e,n,t){n.__d=void 0;for(var l=0;l<t.length;l++)F(t[l],t[++l],t[++l]);_.__c&&_.__c(n,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(e){e.call(n)})}catch(e){_.__e(e,n.__v)}})}function W(_,n,t,l,o,r,u,i,s){var f,p,a,v,y,m,g,b=t.props,x=n.props,S=n.type;if("svg"===S&&(o=!0),null!=r)for(f=0;f<r.length;f++)if((y=r[f])&&"setAttribute"in y==!!S&&(S?y.localName===S:3===y.nodeType)){_=y,r[f]=null;break}if(null==_){if(null===S)return document.createTextNode(x);_=o?document.createElementNS("http://www.w3.org/2000/svg",S):document.createElement(S,x.is&&x),r=null,i=!1}if(null===S)b===x||i&&_.data===x||(_.data=x);else{if(r=r&&e.call(_.childNodes),b=t.props||c,!i&&null!=r)for(b={},f=0;f<_.attributes.length;f++)b[(y=_.attributes[f]).name]=y.value;for(f in b)y=b[f],"children"==f||("dangerouslySetInnerHTML"==f?a=y:"key"===f||f in x||D(_,f,null,y,o));for(f in x)y=x[f],"children"==f?v=y:"dangerouslySetInnerHTML"==f?p=y:"value"==f?m=y:"checked"==f?g=y:"key"===f||i&&"function"!=typeof y||b[f]===y||D(_,f,y,b[f],o);if(p)i||a&&(p.__html===a.__html||p.__html===_.innerHTML)||(_.innerHTML=p.__html),n.__k=[];else if(a&&(_.innerHTML=""),w(_,d(v)?v:[v],n,t,l,o&&"foreignObject"!==S,r,u,r?r[0]:t.__k&&k(t,0),i,s),null!=r)for(f=r.length;f--;)null!=r[f]&&h(r[f]);i||(f="value",void 0!==m&&(m!==_[f]||"progress"===S&&!m||"option"===S&&m!==b[f])&&D(_,f,m,b[f],!1),f="checked",void 0!==g&&g!==_[f]&&D(_,f,g,b[f],!1))}return _}function F(e,n,t){try{"function"==typeof e?e(n):e.current=n}catch(e){_.__e(e,t)}}function H(e,n,t){var l,o;if(_.unmount&&_.unmount(e),(l=e.ref)&&(l.current&&l.current!==e.__e||F(l,null,n)),null!=(l=e.__c)){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(e){_.__e(e,n)}l.base=l.__P=null}if(l=e.__k)for(o=0;o<l.length;o++)l[o]&&H(l[o],n,t||"function"!=typeof e.type);t||null==e.__e||h(e.__e),e.__c=e.__=e.__e=e.__d=void 0}function N(e,_,n){return this.constructor(e,n)}e=f.slice,_={__e:function(e,_,n,t){for(var l,o,r;_=_.__;)if((l=_.__c)&&!l.__)try{if((o=l.constructor)&&null!=o.getDerivedStateFromError&&(l.setState(o.getDerivedStateFromError(e)),r=l.__d),null!=l.componentDidCatch&&(l.componentDidCatch(e,t||{}),r=l.__d),r)return l.__E=l}catch(_){e=_}throw e}},n=0,g.prototype.setState=function(e,_){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=a({},this.state),"function"==typeof e&&(e=e(a({},n),this.props)),e&&a(n,e),null!=e&&this.__v&&(_&&this._sb.push(_),x(this))},g.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),x(this))},g.prototype.render=m,t=[],o="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,r=function(e,_){return e.__v.__b-_.__v.__b},S.__r=0,u=0,i=U(!1),s=U(!0);var A=document.createElement("style");function I(){return v("h1",null,"Hello World")}A.innerText="h1{color:#639}",document.head.appendChild(A),function(n,t,l){var o,r,u;_.__&&_.__(n,t),o=t.__k,r=[],u=[],M(t,n=t.__k=v(m,null,[n]),o||c,c,void 0!==t.ownerSVGElement,o?null:t.firstChild?e.call(t.childNodes):null,r,o?o.__e:t.firstChild,!1,u),L(r,n,u)}(v(I,null),document.getElementById("demo-widget")),exports.MyComponent=I;