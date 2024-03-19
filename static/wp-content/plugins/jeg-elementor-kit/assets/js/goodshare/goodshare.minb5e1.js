"use strict";!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function n(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}function a(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function r(t,e){return r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(t,e)}function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function c(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n=o(t);if(e){var a=o(this).constructor;n=Reflect.construct(n,arguments,a)}else n=n.apply(this,arguments);return n=!n||"object"!=typeof n&&"function"!=typeof n?i(this):n}}function l(t){var e=Array.isArray(t)?d(t):void 0;if(e||(e="undefined"!=typeof Symbol&&Symbol.iterator in Object(t)?Array.from(t):void 0),!e)t:{if(t){if("string"==typeof t){e=d(t,void 0);break t}if("Object"===(e=Object.prototype.toString.call(t).slice(8,-1))&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e){e=Array.from(t);break t}if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)){e=d(t,void 0);break t}}e=void 0}if(!(t=e))throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");return t}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=Array(e);n<e;n++)a[n]=t[n];return a}var u=function(){function e(){t(this,e),this.handlers={}}return n(e,[{key:"addEventListener",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:document,e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"click";this.handlers[e]={func:2<arguments.length?arguments[2]:void 0,target:t};var n=e.split(".")[0];t.addEventListener(n,this.handlers[e].func)}},{key:"removeEventListener",value:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"click",e=t.split(".")[0],n=this.handlers[t];n.target.removeEventListener(e,n.func),delete this.handlers[t]}},{key:"removeAll",value:function(){for(var t in this.handlers)this.removeEventListener(t)}}]),e}(),s=function(){function e(){t(this,e),this.events=new u,this.callback=function(){},this.updateInstanceId()}return n(e,[{key:"eventHandler",value:function(t,e){var n=this,a=e.share_url,o=e.windowTitle,r=e.windowWidth,i=e.windowHeight;t.preventDefault(),e=Math.round((window.outerHeight||window.document.documentElement.offsetHeight)/2-i/2);var c=Math.round((window.outerWidth||window.document.documentElement.offsetWidth)/2-r/2);r="width=".concat(r,",height=").concat(i),e="left=".concat(c,",top=").concat(e);var l="".concat(r,",").concat(e,",location=no,toolbar=no,menubar=no"),d=window.open(a,o,l),u=setInterval((function(){d.closed&&(n.callback(t,{share_url:a,windowTitle:o,windowOptions:l},d),clearInterval(u))}),10);return d}},{key:"setShareCallback",value:function(t){this.callback=t}},{key:"createEvents",value:function(t){var e=this;l(t).forEach((function(t){var n=e.getPreparedData(t);e.events.addEventListener(t,"click.".concat(e.instanceId),(function(t){return e.eventHandler.call(e,t,n)}))}))}},{key:"getInstance",value:function(){return"function"==typeof this.shareWindow&&this.shareWindow(),"function"==typeof this.getCounter&&this.getCounter(),this}},{key:"updateInstanceId",value:function(){this.instanceId=function(){return"".concat(0<arguments.length&&void 0!==arguments[0]?arguments[0]:"id","-").concat(Math.random().toString(36).substr(2,8))}()}},{key:"reNewInstance",value:function(){return this.events.removeAll(),this.updateInstanceId(),this.getInstance()}}]),e}(),h=function(e){function o(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:document.location.href,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document.title,a=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document.querySelector('link[rel="apple-touch-icon"]');t(this,o);var c=r.call(this);return c.url=encodeURIComponent(e),c.title=encodeURIComponent(n),c.image=a?encodeURIComponent(a.href):"",c.createEvents=c.createEvents.bind(i(c)),c}a(o,e);var r=c(o);return n(o,[{key:"getPreparedData",value:function(t){var e=t.dataset.url?encodeURIComponent(t.dataset.url):this.url,n=t.dataset.title?encodeURIComponent(t.dataset.title):this.title;return t=t.dataset.image?encodeURIComponent(t.dataset.image):this.image,e="https://vk.com/share.php?url=".concat(e,"&title=").concat(n,"&image=").concat(t),{callback:this.callback,share_url:e,windowTitle:"Share this",windowWidth:640,windowHeight:480}}},{key:"shareWindow",value:function(){var t=document.querySelectorAll('[data-social="vkontakte"]');return this.createEvents(t)}},{key:"getCounter",value:function(){var t=document.createElement("script"),e=document.querySelectorAll('[data-counter="vkontakte"]'),n="https://vk.com/share.php?act=count&index=1&url=".concat(this.url);window.VK=Object.assign({},{Share:{}},window.VK),0<e.length&&(window.VK.Share.count=function(n,a){l(e).forEach((function(t){t.innerHTML=a})),null!==t.parentNode&&t.parentNode.removeChild(t)},t.src=n,document.body.appendChild(t))}}]),o}(s),v=function(e){function o(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:document.location.href,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document.title;t(this,o);var a=r.call(this);return a.url=encodeURIComponent(e),a.title=encodeURIComponent(n),a.createEvents=a.createEvents.bind(i(a)),a}a(o,e);var r=c(o);return n(o,[{key:"getPreparedData",value:function(t){var e=t.dataset.url?encodeURIComponent(t.dataset.url):this.url;return t=t.dataset.title?encodeURIComponent(t.dataset.title):this.title,e="https://facebook.com/sharer/sharer.php?u=".concat(e,"&t=").concat(t),{callback:this.callback,share_url:e,windowTitle:"Share this",windowWidth:640,windowHeight:480}}},{key:"shareWindow",value:function(){var t=document.querySelectorAll('[data-social="facebook"]');return this.createEvents(t)}},{key:"getCounter",value:function(){var t=document.createElement("script"),e=("goodshare_"+Math.random()).replace(".",""),n=document.querySelectorAll('[data-counter="facebook"]'),a="https://graph.facebook.com/?id=".concat(this.url,"&callback=").concat(e);0<n.length&&(window[e]=function(e){l(n).forEach((function(t){t.innerHTML=e.share?e.share.share_count:0})),null!==t.parentNode&&t.parentNode.removeChild(t)},t.src=a,document.body.appendChild(t))}}]),o}(s),p=function(e){function o(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:document.location.href,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document.title;t(this,o);var a=r.call(this);return a.url=encodeURIComponent(e),a.title=encodeURIComponent(n),a.createEvents=a.createEvents.bind(i(a)),a}a(o,e);var r=c(o);return n(o,[{key:"getPreparedData",value:function(t){var e=t.dataset.url?encodeURIComponent(t.dataset.url):this.url;return t=t.dataset.title?encodeURIComponent(t.dataset.title):this.title,e="https://connect.ok.ru/offer?url=".concat(e,"&title=").concat(t),{callback:this.callback,share_url:e,windowTitle:"Share this",windowWidth:640,windowHeight:480}}},{key:"shareWindow",value:function(){var t=document.querySelectorAll('[data-social="odnoklassniki"]');return this.createEvents(t)}},{key:"getCounter",value:function(){var t=document.createElement("script"),e=document.querySelectorAll('[data-counter="odnoklassniki"]'),n="https://connect.ok.ru/dk?st.cmd=extLike&uid=1&ref=".concat(this.url);window.ODKL={},0<e.length&&(window.ODKL.updateCount=function(n,a){l(e).forEach((function(t){t.innerHTML=a})),null!==t.parentNode&&t.parentNode.removeChild(t)},t.src=n,document.body.appendChild(t))}}]),o}(s),m=function(e){function o(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:document.location.href,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document.title,a=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document.querySelector('meta[name="description"]'),c=3<arguments.length&&void 0!==arguments[3]?arguments[3]:document.querySelector('link[rel="apple-touch-icon"]');t(this,o);var l=r.call(this);return l.url=encodeURIComponent(e),l.title=encodeURIComponent(n),l.description=a?encodeURIComponent(a.content):"",l.image=c?encodeURIComponent(c.href):"",l.createEvents=l.createEvents.bind(i(l)),l}a(o,e);var r=c(o);return n(o,[{key:"getPreparedData",value:function(t){var e=t.dataset.url?encodeURIComponent(t.dataset.url):this.url,n=t.dataset.title?encodeURIComponent(t.dataset.title):this.title,a=t.dataset.description?encodeURIComponent(t.dataset.description):this.description;return t=t.dataset.image?encodeURIComponent(t.dataset.image):this.image,e="https://connect.mail.ru/share?url=".concat(e,"&title=").concat(n,"&description=").concat(a,"&imageurl=").concat(t),{callback:this.callback,share_url:e,windowTitle:"Share this",windowWidth:640,windowHeight:480}}},{key:"shareWindow",value:function(){var t=document.querySelectorAll('[data-social="moimir"]');return this.createEvents(t)}},{key:"getCounter",value:function(){var t=document.createElement("script"),e=encodeURIComponent(this.url.replace(/^.*?:\/\//,"")),n=("goodshare_"+Math.random()).replace(".",""),a=document.querySelectorAll('[data-counter="moimir"]');0<a.length&&(window[n]=function(e){l(a).forEach((function(t){t.innerHTML=e.share_mm})),null!==t.parentNode&&t.parentNode.removeChild(t)},t.src="https://appsmail.ru/share/count/"+e+"?callback="+n,document.body.appendChild(t))}}]),o}(s),w=function(e){function o(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:document.location.href,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document.title,a=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document.querySelector('meta[name="description"]');t(this,o);var c=r.call(this);return c.url=encodeURIComponent(e),c.title=encodeURIComponent(n),c.description=a?encodeURIComponent(a.content):"",c.createEvents=c.createEvents.bind(i(c)),c}a(o,e);var r=c(o);return n(o,[{key:"getPreparedData",value:function(t){var e=t.dataset.url?encodeURIComponent(t.dataset.url):this.url,n=t.dataset.title?encodeURIComponent(t.dataset.title):this.title;return t=t.dataset.description?encodeURIComponent(t.dataset.description):this.description,e="https://www.tumblr.com/widgets/share/tool?canonicalUrl=".concat(e,"&title=").concat(n,"&caption=").concat(t,"&posttype=link"),{callback:this.callback,share_url:e,windowTitle:"Share this",windowWidth:640,windowHeight:480}}},{key:"shareWindow",value:function(){var t=document.querySelectorAll('[data-social="tumblr"]');return this.createEvents(t)}},{key:"getCounter",value:function(){var t=document.createElement("script"),e=("goodshare_"+Math.random()).replace(".",""),n=document.querySelectorAll('[data-counter="tumblr"]'),a="https://api.tumblr.com/v2/share/stats?url=".concat(this.url,"&callback=").concat(e);0<n.length&&(window[e]=function(e){l(n).forEach((function(t){t.innerHTML=e.response.note_count})),null!==t.parentNode&&t.parentNode.removeChild(t)},t.src=a,document.body.appendChild(t))}}]),o}(s),f=function(e){function o(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:document.location.href,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document.querySelector('meta[name="description"]'),a=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document.querySelector('link[rel="apple-touch-icon"]');t(this,o);var c=r.call(this);return c.url=encodeURIComponent(e),c.description=n?encodeURIComponent(n.content):"",c.image=a?encodeURIComponent(a.href):"",c.createEvents=c.createEvents.bind(i(c)),c}a(o,e);var r=c(o);return n(o,[{key:"getPreparedData",value:function(t){var e=t.dataset.url?encodeURIComponent(t.dataset.url):this.url,n=t.dataset.description?encodeURIComponent(t.dataset.description):this.description;return t=t.dataset.image?encodeURIComponent(t.dataset.image):this.image,e="https://www.pinterest.com/pin/create/button/?url=".concat(e,"&description=").concat(n,"&media=").concat(t),{callback:this.callback,share_url:e,windowTitle:"Share this",windowWidth:640,windowHeight:480}}},{key:"shareWindow",value:function(){var t=document.querySelectorAll('[data-social="pinterest"]');return this.createEvents(t)}},{key:"getCounter",value:function(){var t=document.createElement("script"),e=("goodshare_"+Math.random()).replace(".",""),n=document.querySelectorAll('[data-counter="pinterest"]'),a="https://api.pinterest.com/v1/urls/count.json?url=".concat(this.url,"&callback=").concat(e);0<n.length&&(window[e]=function(e){l(n).forEach((function(t){t.innerHTML=0<e.length?e.count:0})),null!==t.parentNode&&t.parentNode.removeChild(t)},t.src=a,document.body.appendChild(t))}}]),o}(s),g=function(e){function o(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:document.location.href,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document.title;t(this,o);var a=r.call(this);return a.url=encodeURIComponent(e),a.title=encodeURIComponent(n),a.createEvents=a.createEvents.bind(i(a)),a}a(o,e);var r=c(o);return n(o,[{key:"getPreparedData",value:function(t){var e=t.dataset.url?encodeURIComponent(t.dataset.url):this.url;return t=t.dataset.title?encodeURIComponent(t.dataset.title):this.title,e="https://reddit.com/submit?url=".concat(e,"&title=").concat(t),{callback:this.callback,share_url:e,windowTitle:"Share this",windowWidth:640,windowHeight:480}}},{key:"shareWindow",value:function(){var t=document.querySelectorAll('[data-social="reddit"]');return this.createEvents(t)}}]),o}(s),k=function(e){function o(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:document.location.href,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document.title;t(this,o);var a=r.call(this);return a.url=encodeURIComponent(e),a.title=encodeURIComponent(n),a.createEvents=a.createEvents.bind(i(a)),a}a(o,e);var r=c(o);return n(o,[{key:"getPreparedData",value:function(t){var e=t.dataset.url?encodeURIComponent(t.dataset.url):this.url;return t=t.dataset.title?encodeURIComponent(t.dataset.title):this.title,e="https://buffer.com/add?url=".concat(e,"&text=").concat(t),{callback:this.callback,share_url:e,windowTitle:"Share this",windowWidth:640,windowHeight:480}}},{key:"shareWindow",value:function(){var t=document.querySelectorAll('[data-social="buffer"]');return this.createEvents(t)}},{key:"getCounter",value:function(){var t=document.createElement("script"),e=("goodshare_"+Math.random()).replace(".",""),n=document.querySelectorAll('[data-counter="buffer"]'),a="https://api.bufferapp.com/1/links/shares.json?url=".concat(this.url,"&callback=").concat(e);0<n.length&&(window[e]=function(e){l(n).forEach((function(t){t.innerHTML=e?e.shares:0})),t.parentNode.removeChild(t)},t.src=a,document.body.appendChild(t))}}]),o}(s),b=function(e){function o(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:document.location.href,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document.title;t(this,o);var a=r.call(this);return a.url=encodeURIComponent(e),a.title=encodeURIComponent(n),a.createEvents=a.createEvents.bind(i(a)),a}a(o,e);var r=c(o);return n(o,[{key:"getPreparedData",value:function(t){var e=t.dataset.url?encodeURIComponent(t.dataset.url):this.url;return t=t.dataset.title?encodeURIComponent(t.dataset.title):this.title,e="https://twitter.com/share?url=".concat(e,"&text=").concat(t),{callback:this.callback,share_url:e,windowTitle:"Share this",windowWidth:640,windowHeight:480}}},{key:"shareWindow",value:function(){var t=document.querySelectorAll('[data-social="twitter"]');return this.createEvents(t)}}]),o}(s),y=function(e){function o(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:document.location.href,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document.title;t(this,o);var a=r.call(this);return a.url=encodeURIComponent(e),a.title=encodeURIComponent(n),a.createEvents=a.createEvents.bind(i(a)),a}a(o,e);var r=c(o);return n(o,[{key:"getPreparedData",value:function(t){var e=t.dataset.url?encodeURIComponent(t.dataset.url):this.url;return t=t.dataset.title?encodeURIComponent(t.dataset.title):this.title,e="https://livejournal.com/update.bml?event=".concat(e,"&subject=").concat(t),{callback:this.callback,share_url:e,windowTitle:"Share this",windowWidth:640,windowHeight:480}}},{key:"shareWindow",value:function(){var t=document.querySelectorAll('[data-social="livejournal"]');return this.createEvents(t)}}]),o}(s),C=function(e){function o(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:document.location.href,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document.title,a=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document.querySelector('meta[name="description"]');t(this,o);var c=r.call(this);return c.url=encodeURIComponent(e),c.title=encodeURIComponent(n),c.description=a?encodeURIComponent(a.content):"",c.createEvents=c.createEvents.bind(i(c)),c}a(o,e);var r=c(o);return n(o,[{key:"getPreparedData",value:function(t){var e=t.dataset.url?encodeURIComponent(t.dataset.url):this.url,n=t.dataset.title?encodeURIComponent(t.dataset.title):this.title;return t=t.dataset.description?encodeURIComponent(t.dataset.description):this.description,e="https://www.linkedin.com/shareArticle?url=".concat(e,"&text=").concat(n,"&summary=").concat(t,"&mini=true"),{callback:this.callback,share_url:e,windowTitle:"Share this",windowWidth:640,windowHeight:480}}},{key:"shareWindow",value:function(){var t=document.querySelectorAll('[data-social="linkedin"]');return this.createEvents(t)}}]),o}(s),I=function(e){function o(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:document.location.href,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document.title,a=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document.querySelector('meta[name="description"]');t(this,o);var c=r.call(this);return c.url=encodeURIComponent(e),c.title=encodeURIComponent(n),c.description=a?encodeURIComponent(a.content):"",c.createEvents=c.createEvents.bind(i(c)),c}a(o,e);var r=c(o);return n(o,[{key:"getPreparedData",value:function(t){var e=t.dataset.url?encodeURIComponent(t.dataset.url):this.url,n=t.dataset.title?encodeURIComponent(t.dataset.title):this.title;return t=t.dataset.description?encodeURIComponent(t.dataset.description):this.description,e="https://www.evernote.com/clip.action?url=".concat(e,"&title=").concat(n,"&body=").concat(t),{callback:this.callback,share_url:e,windowTitle:"Share this",windowWidth:640,windowHeight:480}}},{key:"shareWindow",value:function(){var t=document.querySelectorAll('[data-social="evernote"]');return this.createEvents(t)}}]),o}(s),R=function(e){function o(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:document.location.href,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document.title;t(this,o);var a=r.call(this);return a.url=encodeURIComponent(e),a.title=encodeURIComponent(n),a.createEvents=a.createEvents.bind(i(a)),a}a(o,e);var r=c(o);return n(o,[{key:"getPreparedData",value:function(t){var e=t.dataset.url?encodeURIComponent(t.dataset.url):this.url;return t=t.dataset.title?encodeURIComponent(t.dataset.title):this.title,e="https://del.icio.us/save?url=".concat(e,"&title=").concat(t),{callback:this.callback,share_url:e,windowTitle:"Share this",windowWidth:640,windowHeight:480}}},{key:"shareWindow",value:function(){var t=document.querySelectorAll('[data-social="delicious"]');return this.createEvents(t)}}]),o}(s),U=function(e){function o(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:document.location.href,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document.title;t(this,o);var a=r.call(this);return a.url=encodeURIComponent(e),a.title=encodeURIComponent(n),a.createEvents=a.createEvents.bind(i(a)),a}a(o,e);var r=c(o);return n(o,[{key:"getPreparedData",value:function(t){var e=t.dataset.url?encodeURIComponent(t.dataset.url):this.url;return t=t.dataset.title?encodeURIComponent(t.dataset.title):this.title,e="https://share.flipboard.com/bookmarklet/popout?ext=sharethis&title=".concat(t,"&url=").concat(e,"&v=2"),{callback:this.callback,share_url:e,windowTitle:"Share this",windowWidth:640,windowHeight:480}}},{key:"shareWindow",value:function(){var t=document.querySelectorAll('[data-social="flipboard"]');return this.createEvents(t)}}]),o}(s),E=function(e){function o(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:document.location.href;t(this,o);var n=r.call(this);return n.url=encodeURIComponent(e),n.createEvents=n.createEvents.bind(i(n)),n}a(o,e);var r=c(o);return n(o,[{key:"getPreparedData",value:function(t){return t=t.dataset.url?encodeURIComponent(t.dataset.url):this.url,t="https://mix.com/mixit?su=submit&url=".concat(t),{callback:this.callback,share_url:t,windowTitle:"Share this",windowWidth:640,windowHeight:480}}},{key:"shareWindow",value:function(){var t=document.querySelectorAll('[data-social="mix"]');return this.createEvents(t)}}]),o}(s),S=function(e){function o(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:document.location.href;t(this,o);var n=r.call(this);return n.url=encodeURIComponent(e),n.createEvents=n.createEvents.bind(i(n)),n}a(o,e);var r=c(o);return n(o,[{key:"getPreparedData",value:function(t){return t=t.dataset.url?encodeURIComponent(t.dataset.url):this.url,t="https://www.meneame.net/submit?url=".concat(t),{callback:this.callback,share_url:t,windowTitle:"Share this",windowWidth:640,windowHeight:480}}},{key:"shareWindow",value:function(){var t=document.querySelectorAll('[data-social="meneame"]');return this.createEvents(t)}}]),o}(s),W=function(e){function o(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:document.location.href,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document.title;t(this,o);var a=r.call(this);return a.url=encodeURIComponent(e),a.title=encodeURIComponent(n),a.createEvents=a.createEvents.bind(i(a)),a}a(o,e);var r=c(o);return n(o,[{key:"getPreparedData",value:function(t){var e=t.dataset.url?encodeURIComponent(t.dataset.url):this.url;return t=t.dataset.title?encodeURIComponent(t.dataset.title):this.title,e="https://www.blogger.com/blog-this.g?u=".concat(e,"&n=").concat(t),{callback:this.callback,share_url:e,windowTitle:"Share this",windowWidth:640,windowHeight:480}}},{key:"shareWindow",value:function(){var t=document.querySelectorAll('[data-social="blogger"]');return this.createEvents(t)}}]),o}(s),_=function(e){function o(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:document.location.href,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document.title;t(this,o);var a=r.call(this);return a.url=encodeURIComponent(e),a.title=encodeURIComponent(n),a.createEvents=a.createEvents.bind(i(a)),a}a(o,e);var r=c(o);return n(o,[{key:"getPreparedData",value:function(t){var e=t.dataset.url?encodeURIComponent(t.dataset.url):this.url;return t=t.dataset.title?encodeURIComponent(t.dataset.title):this.title,e="https://getpocket.com/save?url=".concat(e,"&title=").concat(t),{callback:this.callback,share_url:e,windowTitle:"Share this",windowWidth:640,windowHeight:480}}},{key:"shareWindow",value:function(){var t=document.querySelectorAll('[data-social="pocket"]');return this.createEvents(t)}}]),o}(s),q=function(e){function o(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:document.location.href,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document.title;t(this,o);var a=r.call(this);return a.url=encodeURIComponent(e),a.title=encodeURIComponent(n),a.createEvents=a.createEvents.bind(i(a)),a}a(o,e);var r=c(o);return n(o,[{key:"getPreparedData",value:function(t){var e=t.dataset.url?encodeURIComponent(t.dataset.url):this.url;return t=t.dataset.title?encodeURIComponent(t.dataset.title):this.title,e="https://www.instapaper.com/edit?url=".concat(e,"&title=").concat(t),{callback:this.callback,share_url:e,windowTitle:"Share this",windowWidth:640,windowHeight:480}}},{key:"shareWindow",value:function(){var t=document.querySelectorAll('[data-social="instapaper"]');return this.createEvents(t)}}]),o}(s),A=function(e){function o(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:document.location.href,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document.title;t(this,o);var a=r.call(this);return a.url=encodeURIComponent(e),a.title=encodeURIComponent(n),a.createEvents=a.createEvents.bind(i(a)),a}a(o,e);var r=c(o);return n(o,[{key:"getPreparedData",value:function(t){var e=t.dataset.url?encodeURIComponent(t.dataset.url):this.url;return t=t.dataset.title?encodeURIComponent(t.dataset.title):this.title,e="https://digg.com/submit?url=".concat(e,"&title=").concat(t),{callback:this.callback,share_url:e,windowTitle:"Share this",windowWidth:640,windowHeight:480}}},{key:"shareWindow",value:function(){var t=document.querySelectorAll('[data-social="digg"]');return this.createEvents(t)}}]),o}(s),H=function(e){function o(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:document.location.href,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document.title;t(this,o);var a=r.call(this);return a.url=encodeURIComponent(e),a.title=encodeURIComponent(n),a.createEvents=a.createEvents.bind(i(a)),a}a(o,e);var r=c(o);return n(o,[{key:"getPreparedData",value:function(t){var e=t.dataset.url?encodeURIComponent(t.dataset.url):this.url;return t=t.dataset.title?encodeURIComponent(t.dataset.title):this.title,e="http://www.liveinternet.ru/journal_post.php?action=n_add&cnurl=".concat(e,"&cntitle=").concat(t),{callback:this.callback,share_url:e,windowTitle:"Share this",windowWidth:640,windowHeight:480}}},{key:"shareWindow",value:function(){var t=document.querySelectorAll('[data-social="liveinternet"]');return this.createEvents(t)}}]),o}(s),T=function(e){function o(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:document.location.href,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document.title,a=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document.querySelector('meta[name="description"]');t(this,o);var c=r.call(this);return c.url=encodeURIComponent(e),c.title=encodeURIComponent(n),c.description=a?encodeURIComponent(a.content):"",c.createEvents=c.createEvents.bind(i(c)),c}a(o,e);var r=c(o);return n(o,[{key:"getPreparedData",value:function(t){var e=t.dataset.url?encodeURIComponent(t.dataset.url):this.url,n=t.dataset.title?encodeURIComponent(t.dataset.title):this.title;return t=t.dataset.description?encodeURIComponent(t.dataset.description):this.description,e="https://surfingbird.ru/share?url=".concat(e,"&title=").concat(n,"&description=").concat(t),{callback:this.callback,share_url:e,windowTitle:"Share this",windowWidth:640,windowHeight:480}}},{key:"shareWindow",value:function(){var t=document.querySelectorAll('[data-social="surfingbird"]');return this.createEvents(t)}}]),o}(s),P=function(e){function o(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:document.location.href;t(this,o);var n=r.call(this);return n.url=encodeURIComponent(e),n.createEvents=n.createEvents.bind(i(n)),n}a(o,e);var r=c(o);return n(o,[{key:"getPreparedData",value:function(t){return t=t.dataset.url?encodeURIComponent(t.dataset.url):this.url,t="https://www.xing.com/spi/shares/new?url=".concat(t),{callback:this.callback,share_url:t,windowTitle:"Share this",windowWidth:640,windowHeight:480}}},{key:"shareWindow",value:function(){var t=document.querySelectorAll('[data-social="xing"]');return this.createEvents(t)}}]),o}(s),D=function(e){function o(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:document.location.href,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document.title,a=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document.querySelector('meta[name="description"]'),c=3<arguments.length&&void 0!==arguments[3]?arguments[3]:document.querySelector('link[rel="apple-touch-icon"]');t(this,o);var l=r.call(this);return l.url=encodeURIComponent(e),l.title=encodeURIComponent(n),l.description=a?encodeURIComponent(a.content):"",l.image=c?encodeURIComponent(c.href):"",l.createEvents=l.createEvents.bind(i(l)),l}a(o,e);var r=c(o);return n(o,[{key:"getPreparedData",value:function(t){var e=t.dataset.url?encodeURIComponent(t.dataset.url):this.url,n=t.dataset.title?encodeURIComponent(t.dataset.title):this.title,a=t.dataset.description?encodeURIComponent(t.dataset.description):this.description;return t=t.dataset.image?encodeURIComponent(t.dataset.image):this.image,e="https://wordpress.com/wp-admin/press-this.php?u=".concat(e,"&t=").concat(n,"&s=").concat(a,"&i=").concat(t,"&v=2"),{callback:this.callback,share_url:e,windowTitle:"Share this",windowWidth:640,windowHeight:480}}},{key:"shareWindow",value:function(){var t=document.querySelectorAll('[data-social="wordpress"]');return this.createEvents(t)}}]),o}(s),j=function(e){function o(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:document.location.href,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document.title,a=2<arguments.length&&void 0!==arguments[2]?arguments[2]:document.querySelector('meta[name="description"]');t(this,o);var c=r.call(this);return c.url=encodeURIComponent(e),c.title=encodeURIComponent(n),c.description=a?encodeURIComponent(a.content):"",c.createEvents=c.createEvents.bind(i(c)),c}a(o,e);var r=c(o);return n(o,[{key:"getPreparedData",value:function(t){var e=t.dataset.url?encodeURIComponent(t.dataset.url):this.url,n=t.dataset.title?encodeURIComponent(t.dataset.title):this.title;return t=t.dataset.description?encodeURIComponent(t.dataset.description):this.description,e="https://cang.baidu.com/do/add?iu=".concat(e,"&it=").concat(n,"&dc=").concat(t,"&fr=ien"),{callback:this.callback,share_url:e,windowTitle:"Share this",windowWidth:640,windowHeight:480}}},{key:"shareWindow",value:function(){var t=document.querySelectorAll('[data-social="baidu"]');return this.createEvents(t)}}]),o}(s),x=function(e){function o(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:document.location.href,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document.title;t(this,o);var a=r.call(this);return a.url=encodeURIComponent(e),a.title=encodeURIComponent(n),a.createEvents=a.createEvents.bind(i(a)),a}a(o,e);var r=c(o);return n(o,[{key:"getPreparedData",value:function(t){var e=t.dataset.url?encodeURIComponent(t.dataset.url):this.url;return t=t.dataset.title?encodeURIComponent(t.dataset.title):this.title,e="http://share.renren.com/share/buttonshare.do?url=".concat(e,"&title=").concat(t),{callback:this.callback,share_url:e,windowTitle:"Share this",windowWidth:640,windowHeight:480}}},{key:"shareWindow",value:function(){var t=document.querySelectorAll('[data-social="renren"]');return this.createEvents(t)}}]),o}(s),O=function(e){function o(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:document.location.href,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document.title;t(this,o);var a=r.call(this);return a.url=encodeURIComponent(e),a.title=encodeURIComponent(n),a.createEvents=a.createEvents.bind(i(a)),a}a(o,e);var r=c(o);return n(o,[{key:"getPreparedData",value:function(t){var e=t.dataset.url?encodeURIComponent(t.dataset.url):this.url;return t=t.dataset.title?encodeURIComponent(t.dataset.title):this.title,e="https://service.weibo.com/share/share.php?url=".concat(e,"&title=").concat(t),{callback:this.callback,share_url:e,windowTitle:"Share this",windowWidth:640,windowHeight:480}}},{key:"shareWindow",value:function(){var t=document.querySelectorAll('[data-social="weibo"]');return this.createEvents(t)}}]),o}(s),L=function(e){function o(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:document.location.href;t(this,o);var n=r.call(this);return n.url=encodeURIComponent(e),n.createEvents=n.createEvents.bind(i(n)),n}a(o,e);var r=c(o);return n(o,[{key:"getPreparedData",value:function(t){return t=t.dataset.url?encodeURIComponent(t.dataset.url):this.url,t="sms:?&body=".concat(t),{callback:this.callback,share_url:t,windowTitle:"Share this",windowWidth:640,windowHeight:480}}},{key:"shareWindow",value:function(){var t=document.querySelectorAll('[data-social="sms"]');return this.createEvents(t)}}]),o}(s),M=function(e){function o(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:document.location.href;t(this,o);var n=r.call(this);return n.url=encodeURIComponent(e),n.createEvents=n.createEvents.bind(i(n)),n}a(o,e);var r=c(o);return n(o,[{key:"getPreparedData",value:function(t){return t=t.dataset.url?encodeURIComponent(t.dataset.url):this.url,t="https://web.skype.com/share?".concat(t),{callback:this.callback,share_url:t,windowTitle:"Share this",windowWidth:640,windowHeight:480}}},{key:"shareWindow",value:function(){var t=document.querySelectorAll('[data-social="skype"]');return this.createEvents(t)}}]),o}(s),N=function(e){function o(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:document.location.href;t(this,o);var n=r.call(this);return n.url=encodeURIComponent(e),n.createEvents=n.createEvents.bind(i(n)),n}a(o,e);var r=c(o);return n(o,[{key:"getPreparedData",value:function(t){var e=t.dataset.url?encodeURIComponent(t.dataset.url):this.url;t=t.dataset.rhash?t.dataset.rhash:null;var n="https://t.me/share/url?url=".concat(e);return null!==t&&(n="https://t.me/iv?url=".concat(e,"&rhash=").concat(t)),{callback:this.callback,share_url:n,windowTitle:"Share this",windowWidth:640,windowHeight:480}}},{key:"shareWindow",value:function(){var t=document.querySelectorAll('[data-social="telegram"]');return this.createEvents(t)}}]),o}(s),K=function(e){function o(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:document.location.href;t(this,o);var n=r.call(this);return n.url=encodeURIComponent(e),n.createEvents=n.createEvents.bind(i(n)),n}a(o,e);var r=c(o);return n(o,[{key:"getPreparedData",value:function(t){return t=t.dataset.url?encodeURIComponent(t.dataset.url):this.url,t="viber://forward?text=".concat(t),{callback:this.callback,share_url:t,windowTitle:"Share this",windowWidth:640,windowHeight:480}}},{key:"shareWindow",value:function(){var t=document.querySelectorAll('[data-social="viber"]');return this.createEvents(t)}}]),o}(s),V=function(e){function o(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:document.location.href;t(this,o);var n=r.call(this);return n.url=encodeURIComponent(e),n.createEvents=n.createEvents.bind(i(n)),n}a(o,e);var r=c(o);return n(o,[{key:"getPreparedData",value:function(t){return t=t.dataset.url?encodeURIComponent(t.dataset.url):this.url,t="https://api.whatsapp.com/send?text=".concat(t),{callback:this.callback,share_url:t,windowTitle:"Share this",windowWidth:640,windowHeight:480}}},{key:"shareWindow",value:function(){var t=document.querySelectorAll('[data-social="whatsapp"]');return this.createEvents(t)}}]),o}(s),Q=function(e){function o(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:document.location.href;t(this,o);var n=r.call(this);return n.url=encodeURIComponent(e),n.createEvents=n.createEvents.bind(i(n)),n}a(o,e);var r=c(o);return n(o,[{key:"getPreparedData",value:function(t){return t=t.dataset.url?encodeURIComponent(t.dataset.url):this.url,t="https://chart.apis.google.com/chart?cht=qr&chs=196x196&chld=Q%7C0&chl=".concat(t),{callback:this.callback,share_url:t,windowTitle:"Share this",windowWidth:640,windowHeight:480}}},{key:"shareWindow",value:function(){var t=document.querySelectorAll('[data-social="wechat"]');return this.createEvents(t)}}]),o}(s);s=function(e){function o(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:document.location.href;t(this,o);var n=r.call(this);return n.url=encodeURIComponent(e),n.createEvents=n.createEvents.bind(i(n)),n}a(o,e);var r=c(o);return n(o,[{key:"getPreparedData",value:function(t){return t=t.dataset.url?encodeURIComponent(t.dataset.url):this.url,t="line://msg/text/".concat(t),{callback:this.callback,share_url:t,windowTitle:"Share this",windowWidth:640,windowHeight:480}}},{key:"shareWindow",value:function(){var t=document.querySelectorAll('[data-social="line"]');return this.createEvents(t)}}]),o}(s);var $=[h,v,p,m,C,w,f,g,k,b,y,I,R,U,_,E,S,W,q,A,H,T,P,D,j,x,O,L,M,N,K,V,Q,s];h=function(){function e(){t(this,e),this.providers=$,this.getProviders()}return n(e,[{key:"setShareCallback",value:function(t){this.providers=this.providers.map((function(e){return e.setShareCallback(t)}))}},{key:"getProviders",value:function(){return this.providers=this.providers.map((function(t){return(new t).getInstance()}))}},{key:"reNewAllInstance",value:function(){this.providers=this.providers.map((function(t){return t.reNewInstance()}))}}]),e}(),window._goodshare=new h}();