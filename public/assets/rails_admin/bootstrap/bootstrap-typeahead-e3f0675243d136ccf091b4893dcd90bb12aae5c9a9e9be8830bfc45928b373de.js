!function(e){var t=function(){"use strict";return{isMsie:function(){return!!/(msie|trident)/i.test(navigator.userAgent)&&navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2]},isBlankString:function(e){return!e||/^\s*$/.test(e)},escapeRegExChars:function(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isArray:e.isArray,isFunction:e.isFunction,isObject:e.isPlainObject,isUndefined:function(e){return"undefined"==typeof e},toStr:function(e){return t.isUndefined(e)||null===e?"":e+""},bind:e.proxy,each:function(t,n){function i(e,t){return n(t,e)}e.each(t,i)},map:e.map,filter:e.grep,every:function(t,n){var i=!0;return t?(e.each(t,function(e,r){if(!(i=n.call(null,r,e,t)))return!1}),!!i):i},some:function(t,n){var i=!1;return t?(e.each(t,function(e,r){if(i=n.call(null,r,e,t))return!1}),!!i):i},mixin:e.extend,getUniqueId:function(){var e=0;return function(){return e++}}(),templatify:function(t){function n(){return String(t)}return e.isFunction(t)?t:n},defer:function(e){setTimeout(e,0)},debounce:function(e,t,n){var i,r;return function(){var o,s,a=this,l=arguments;return o=function(){i=null,n||(r=e.apply(a,l))},s=n&&!i,clearTimeout(i),i=setTimeout(o,t),s&&(r=e.apply(a,l)),r}},throttle:function(e,t){var n,i,r,o,s,a;return s=0,a=function(){s=new Date,r=null,o=e.apply(n,i)},function(){var l=new Date,u=t-(l-s);return n=this,i=arguments,u<=0?(clearTimeout(r),r=null,s=l,o=e.apply(n,i)):r||(r=setTimeout(a,u)),o}},noop:function(){}}}(),n="0.10.5",i=function(){"use strict";function e(e){return e=t.toStr(e),e?e.split(/\s+/):[]}function n(e){return e=t.toStr(e),e?e.split(/\W+/):[]}function i(e){return function(){var n=[].slice.call(arguments,0);return function(i){var r=[];return t.each(n,function(n){r=r.concat(e(t.toStr(i[n])))}),r}}}return{nonword:n,whitespace:e,obj:{nonword:i(n),whitespace:i(e)}}}(),r=function(){"use strict";function n(n){this.maxSize=t.isNumber(n)?n:100,this.reset(),this.maxSize<=0&&(this.set=this.get=e.noop)}function i(){this.head=this.tail=null}function r(e,t){this.key=e,this.val=t,this.prev=this.next=null}return t.mixin(n.prototype,{set:function(e,t){var n,i=this.list.tail;this.size>=this.maxSize&&(this.list.remove(i),delete this.hash[i.key]),(n=this.hash[e])?(n.val=t,this.list.moveToFront(n)):(n=new r(e,t),this.list.add(n),this.hash[e]=n,this.size++)},get:function(e){var t=this.hash[e];if(t)return this.list.moveToFront(t),t.val},reset:function(){this.size=0,this.hash={},this.list=new i}}),t.mixin(i.prototype,{add:function(e){this.head&&(e.next=this.head,this.head.prev=e),this.head=e,this.tail=this.tail||e},remove:function(e){e.prev?e.prev.next=e.next:this.head=e.next,e.next?e.next.prev=e.prev:this.tail=e.prev},moveToFront:function(e){this.remove(e),this.add(e)}}),n}(),o=function(){"use strict";function e(e){this.prefix=["__",e,"__"].join(""),this.ttlKey="__ttl__",this.keyMatcher=new RegExp("^"+t.escapeRegExChars(this.prefix))}function n(){return(new Date).getTime()}function i(e){return JSON.stringify(t.isUndefined(e)?null:e)}function r(e){return JSON.parse(e)}var o,s;try{o=window.localStorage,o.setItem("~~~","!"),o.removeItem("~~~")}catch(e){o=null}return s=o&&window.JSON?{_prefix:function(e){return this.prefix+e},_ttlKey:function(e){return this._prefix(e)+this.ttlKey},get:function(e){return this.isExpired(e)&&this.remove(e),r(o.getItem(this._prefix(e)))},set:function(e,r,s){return t.isNumber(s)?o.setItem(this._ttlKey(e),i(n()+s)):o.removeItem(this._ttlKey(e)),o.setItem(this._prefix(e),i(r))},remove:function(e){return o.removeItem(this._ttlKey(e)),o.removeItem(this._prefix(e)),this},clear:function(){var e,t,n=[],i=o.length;for(e=0;e<i;e++)(t=o.key(e)).match(this.keyMatcher)&&n.push(t.replace(this.keyMatcher,""));for(e=n.length;e--;)this.remove(n[e]);return this},isExpired:function(e){var i=r(o.getItem(this._ttlKey(e)));return!!(t.isNumber(i)&&n()>i)}}:{get:t.noop,set:t.noop,remove:t.noop,clear:t.noop,isExpired:t.noop},t.mixin(e.prototype,s),e}(),s=function(){"use strict";function n(t){t=t||{},this.cancelled=!1,this.lastUrl=null,this._send=t.transport?i(t.transport):e.ajax,this._get=t.rateLimiter?t.rateLimiter(this._get):this._get,this._cache=t.cache===!1?new r(0):l}function i(n){return function(i,r){function o(e){t.defer(function(){a.resolve(e)})}function s(e){t.defer(function(){a.reject(e)})}var a=e.Deferred();return n(i,r,o,s),a}}var o=0,s={},a=6,l=new r(10);return n.setMaxPendingRequests=function(e){a=e},n.resetCache=function(){l.reset()},t.mixin(n.prototype,{_get:function(e,t,n){function i(t){n&&n(null,t),d._cache.set(e,t)}function r(){n&&n(!0)}function l(){o--,delete s[e],d.onDeckRequestArgs&&(d._get.apply(d,d.onDeckRequestArgs),d.onDeckRequestArgs=null)}var u,d=this;this.cancelled||e!==this.lastUrl||((u=s[e])?u.done(i).fail(r):o<a?(o++,s[e]=this._send(e,t).done(i).fail(r).always(l)):this.onDeckRequestArgs=[].slice.call(arguments,0))},get:function(e,n,i){var r;return t.isFunction(n)&&(i=n,n={}),this.cancelled=!1,this.lastUrl=e,(r=this._cache.get(e))?t.defer(function(){i&&i(null,r)}):this._get(e,n,i),!!r},cancel:function(){this.cancelled=!0}}),n}(),a=function(){"use strict";function n(t){t=t||{},t.datumTokenizer&&t.queryTokenizer||e.error("datumTokenizer and queryTokenizer are both required"),this.datumTokenizer=t.datumTokenizer,this.queryTokenizer=t.queryTokenizer,this.reset()}function i(e){return e=t.filter(e,function(e){return!!e}),e=t.map(e,function(e){return e.toLowerCase()})}function r(){return{ids:[],children:{}}}function o(e){for(var t={},n=[],i=0,r=e.length;i<r;i++)t[e[i]]||(t[e[i]]=!0,n.push(e[i]));return n}function s(e,t){function n(e,t){return e-t}var i=0,r=0,o=[];e=e.sort(n),t=t.sort(n);for(var s=e.length,a=t.length;i<s&&r<a;)e[i]<t[r]?i++:e[i]>t[r]?r++:(o.push(e[i]),i++,r++);return o}return t.mixin(n.prototype,{bootstrap:function(e){this.datums=e.datums,this.trie=e.trie},add:function(e){var n=this;e=t.isArray(e)?e:[e],t.each(e,function(e){var o,s;o=n.datums.push(e)-1,s=i(n.datumTokenizer(e)),t.each(s,function(e){var t,i,s;for(t=n.trie,i=e.split("");s=i.shift();)t=t.children[s]||(t.children[s]=r()),t.ids.push(o)})})},get:function(e){var n,r,a=this;return n=i(this.queryTokenizer(e)),t.each(n,function(e){var t,n,i,o;if(r&&0===r.length)return!1;for(t=a.trie,n=e.split("");t&&(i=n.shift());)t=t.children[i];return t&&0===n.length?(o=t.ids.slice(0),void(r=r?s(r,o):o)):(r=[],!1)}),r?t.map(o(r),function(e){return a.datums[e]}):[]},reset:function(){this.datums=[],this.trie=r()},serialize:function(){return{datums:this.datums,trie:this.trie}}}),n}(),l=function(){"use strict";function i(e){return e.local||null}function r(i){var r,o;return o={url:null,thumbprint:"",ttl:864e5,filter:null,ajax:{}},(r=i.prefetch||null)&&(r=t.isString(r)?{url:r}:r,r=t.mixin(o,r),r.thumbprint=n+r.thumbprint,r.ajax.type=r.ajax.type||"GET",r.ajax.dataType=r.ajax.dataType||"json",!r.url&&e.error("prefetch requires url to be set")),r}function o(n){function i(e){return function(n){return t.debounce(n,e)}}function r(e){return function(n){return t.throttle(n,e)}}var o,s;return s={url:null,cache:!0,wildcard:"%QUERY",replace:null,rateLimitBy:"debounce",rateLimitWait:300,send:null,filter:null,ajax:{}},(o=n.remote||null)&&(o=t.isString(o)?{url:o}:o,o=t.mixin(s,o),o.rateLimiter=/^throttle$/i.test(o.rateLimitBy)?r(o.rateLimitWait):i(o.rateLimitWait),o.ajax.type=o.ajax.type||"GET",o.ajax.dataType=o.ajax.dataType||"json",delete o.rateLimitBy,delete o.rateLimitWait,!o.url&&e.error("remote requires url to be set")),o}return{local:i,prefetch:r,remote:o}}();!function(n){"use strict";function r(t){t&&(t.local||t.prefetch||t.remote)||e.error("one of local, prefetch, or remote is required"),this.limit=t.limit||5,this.sorter=u(t.sorter),this.dupDetector=t.dupDetector||d,this.local=l.local(t),this.prefetch=l.prefetch(t),this.remote=l.remote(t),this.cacheKey=this.prefetch?this.prefetch.cacheKey||this.prefetch.url:null,this.index=new a({datumTokenizer:t.datumTokenizer,queryTokenizer:t.queryTokenizer}),this.storage=this.cacheKey?new o(this.cacheKey):null}function u(e){function n(t){return t.sort(e)}function i(e){return e}return t.isFunction(e)?n:i}function d(){return!1}var c,p;return c=n.Bloodhound,p={data:"data",protocol:"protocol",thumbprint:"thumbprint"},n.Bloodhound=r,r.noConflict=function(){return n.Bloodhound=c,r},r.tokenizers=i,t.mixin(r.prototype,{_loadPrefetch:function(t){function n(e){o.clear(),o.add(t.filter?t.filter(e):e),o._saveToStorage(o.index.serialize(),t.thumbprint,t.ttl)}var i,r,o=this;return(i=this._readFromStorage(t.thumbprint))?(this.index.bootstrap(i),r=e.Deferred().resolve()):r=e.ajax(t.url,t.ajax).done(n),r},_getFromRemote:function(e,t){function n(e,n){t(e?[]:o.remote.filter?o.remote.filter(n):n)}var i,r,o=this;if(this.transport)return e=e||"",r=encodeURIComponent(e),i=this.remote.replace?this.remote.replace(this.remote.url,e):this.remote.url.replace(this.remote.wildcard,r),this.transport.get(i,this.remote.ajax,n)},_cancelLastRemoteRequest:function(){this.transport&&this.transport.cancel()},_saveToStorage:function(e,t,n){this.storage&&(this.storage.set(p.data,e,n),this.storage.set(p.protocol,location.protocol,n),this.storage.set(p.thumbprint,t,n))},_readFromStorage:function(e){var t,n={};return this.storage&&(n.data=this.storage.get(p.data),n.protocol=this.storage.get(p.protocol),n.thumbprint=this.storage.get(p.thumbprint)),t=n.thumbprint!==e||n.protocol!==location.protocol,n.data&&!t?n.data:null},_initialize:function(){function n(){r.add(t.isFunction(o)?o():o)}var i,r=this,o=this.local;return i=this.prefetch?this._loadPrefetch(this.prefetch):e.Deferred().resolve(),o&&i.done(n),this.transport=this.remote?new s(this.remote):null,this.initPromise=i.promise()},initialize:function(e){return!this.initPromise||e?this._initialize():this.initPromise},add:function(e){this.index.add(e)},get:function(e,n){function i(e){var i=o.slice(0);t.each(e,function(e){var n;return n=t.some(i,function(t){return r.dupDetector(e,t)}),!n&&i.push(e),i.length<r.limit}),n&&n(r.sorter(i))}var r=this,o=[],s=!1;o=this.index.get(e),o=this.sorter(o).slice(0,this.limit),o.length<this.limit?s=this._getFromRemote(e,i):this._cancelLastRemoteRequest(),s||(o.length>0||!this.transport)&&n&&n(o)},clear:function(){this.index.reset()},clearPrefetchCache:function(){this.storage&&this.storage.clear()},clearRemoteCache:function(){this.transport&&s.resetCache()},ttAdapter:function(){return t.bind(this.get,this)}}),r}(this);var u=function(){return{wrapper:'<span class="twitter-typeahead"></span>',dropdown:'<span class="tt-dropdown-menu"></span>',dataset:'<div class="tt-dataset-%CLASS%"></div>',suggestions:'<span class="tt-suggestions"></span>',suggestion:'<div class="tt-suggestion"></div>'}}(),d=function(){"use strict";var e={wrapper:{position:"relative",display:"inline-block"},hint:{position:"absolute",top:"0",left:"0",borderColor:"transparent",boxShadow:"none",opacity:"1"},input:{position:"relative",verticalAlign:"top",backgroundColor:"transparent"},inputWithNoHint:{position:"relative",verticalAlign:"top"},dropdown:{position:"absolute",top:"100%",left:"0",zIndex:"100",display:"none"},suggestions:{display:"block"},suggestion:{whiteSpace:"nowrap",cursor:"pointer"},suggestionChild:{whiteSpace:"normal"},ltr:{left:"0",right:"auto"},rtl:{left:"auto",right:" 0"}};return t.isMsie()&&t.mixin(e.input,{backgroundImage:"url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"}),t.isMsie()&&t.isMsie()<=7&&t.mixin(e.input,{marginTop:"-1px"}),e}(),c=function(){"use strict";function n(t){t&&t.el||e.error("EventBus initialized without el"),this.$el=e(t.el)}var i="typeahead:";return t.mixin(n.prototype,{trigger:function(e){var t=[].slice.call(arguments,1);this.$el.trigger(i+e,t)}}),n}(),p=function(){"use strict";function e(e,t,n,i){var r;if(!n)return this;for(t=t.split(l),n=i?a(n,i):n,this._callbacks=this._callbacks||{};r=t.shift();)this._callbacks[r]=this._callbacks[r]||{sync:[],async:[]},this._callbacks[r][e].push(n);return this}function t(t,n,i){return e.call(this,"async",t,n,i)}function n(t,n,i){return e.call(this,"sync",t,n,i)}function i(e){var t;if(!this._callbacks)return this;for(e=e.split(l);t=e.shift();)delete this._callbacks[t];return this}function r(e){var t,n,i,r,s;if(!this._callbacks)return this;for(e=e.split(l),i=[].slice.call(arguments,1);(t=e.shift())&&(n=this._callbacks[t]);)r=o(n.sync,this,[t].concat(i)),s=o(n.async,this,[t].concat(i)),r()&&u(s);return this}function o(e,t,n){function i(){for(var i,r=0,o=e.length;!i&&r<o;r+=1)i=e[r].apply(t,n)===!1;return!i}return i}function s(){var e;return e=window.setImmediate?function(e){setImmediate(function(){e()})}:function(e){setTimeout(function(){e()},0)}}function a(e,t){return e.bind?e.bind(t):function(){e.apply(t,[].slice.call(arguments,0))}}var l=/\s+/,u=s();return{onSync:n,onAsync:t,off:i,trigger:r}}(),h=function(e){"use strict";function n(e,n,i){for(var r,o=[],s=0,a=e.length;s<a;s++)o.push(t.escapeRegExChars(e[s]));return r=i?"\\b("+o.join("|")+")\\b":"("+o.join("|")+")",n?new RegExp(r):new RegExp(r,"i")}var i={node:null,pattern:null,tagName:"strong",className:null,wordsOnly:!1,caseSensitive:!1};return function(r){function o(t){var n,i,o;return(n=a.exec(t.data))&&(o=e.createElement(r.tagName),r.className&&(o.className=r.className),i=t.splitText(n.index),i.splitText(n[0].length),o.appendChild(i.cloneNode(!0)),t.parentNode.replaceChild(o,i)),!!n}function s(e,t){for(var n,i=3,r=0;r<e.childNodes.length;r++)n=e.childNodes[r],n.nodeType===i?r+=t(n)?1:0:s(n,t)}var a;r=t.mixin({},i,r),r.node&&r.pattern&&(r.pattern=t.isArray(r.pattern)?r.pattern:[r.pattern],a=n(r.pattern,r.caseSensitive,r.wordsOnly),s(r.node,o))}}(window.document),f=function(){"use strict";function n(n){var r,o,a,l,u=this;n=n||{},n.input||e.error("input is missing"),r=t.bind(this._onBlur,this),o=t.bind(this._onFocus,this),a=t.bind(this._onKeydown,this),l=t.bind(this._onInput,this),this.$hint=e(n.hint),this.$input=e(n.input).on("blur.tt",r).on("focus.tt",o).on("keydown.tt",a),0===this.$hint.length&&(this.setHint=this.getHint=this.clearHint=this.clearHintIfInvalid=t.noop),t.isMsie()?this.$input.on("keydown.tt keypress.tt cut.tt paste.tt",function(e){s[e.which||e.keyCode]||t.defer(t.bind(u._onInput,u,e))}):this.$input.on("input.tt",l),this.query=this.$input.val(),this.$overflowHelper=i(this.$input)}function i(t){return e('<pre aria-hidden="true"></pre>').css({position:"absolute",visibility:"hidden",whiteSpace:"pre",fontFamily:t.css("font-family"),fontSize:t.css("font-size"),fontStyle:t.css("font-style"),fontVariant:t.css("font-variant"),fontWeight:t.css("font-weight"),wordSpacing:t.css("word-spacing"),letterSpacing:t.css("letter-spacing"),textIndent:t.css("text-indent"),textRendering:t.css("text-rendering"),textTransform:t.css("text-transform")}).insertAfter(t)}function r(e,t){return n.normalizeQuery(e)===n.normalizeQuery(t)}function o(e){return e.altKey||e.ctrlKey||e.metaKey||e.shiftKey}var s;return s={9:"tab",27:"esc",37:"left",39:"right",13:"enter",38:"up",40:"down"},n.normalizeQuery=function(e){return(e||"").replace(/^\s*/g,"").replace(/\s{2,}/g," ")},t.mixin(n.prototype,p,{_onBlur:function(){this.resetInputValue(),this.trigger("blurred")},_onFocus:function(){this.trigger("focused")},_onKeydown:function(e){var t=s[e.which||e.keyCode];this._managePreventDefault(t,e),t&&this._shouldTrigger(t,e)&&this.trigger(t+"Keyed",e)},_onInput:function(){this._checkInputValue()},_managePreventDefault:function(e,t){var n,i,r;switch(e){case"tab":i=this.getHint(),r=this.getInputValue(),n=i&&i!==r&&!o(t);break;case"up":case"down":n=!o(t);break;default:n=!1}n&&t.preventDefault()},_shouldTrigger:function(e,t){var n;switch(e){case"tab":n=!o(t);break;default:n=!0}return n},_checkInputValue:function(){var e,t,n;e=this.getInputValue(),t=r(e,this.query),n=!!t&&this.query.length!==e.length,this.query=e,t?n&&this.trigger("whitespaceChanged",this.query):this.trigger("queryChanged",this.query)},focus:function(){this.$input.focus()},blur:function(){this.$input.blur()},getQuery:function(){return this.query},setQuery:function(e){this.query=e},getInputValue:function(){return this.$input.val()},setInputValue:function(e,t){this.$input.val(e),t?this.clearHint():this._checkInputValue()},resetInputValue:function(){this.setInputValue(this.query,!0)},getHint:function(){return this.$hint.val()},setHint:function(e){this.$hint.val(e)},clearHint:function(){this.setHint("")},clearHintIfInvalid:function(){var e,t,n,i;e=this.getInputValue(),t=this.getHint(),n=e!==t&&0===t.indexOf(e),i=""!==e&&n&&!this.hasOverflow(),!i&&this.clearHint()},getLanguageDirection:function(){return(this.$input.css("direction")||"ltr").toLowerCase()},hasOverflow:function(){var e=this.$input.width()-2;return this.$overflowHelper.text(this.getInputValue()),this.$overflowHelper.width()>=e},isCursorAtEnd:function(){var e,n,i;return e=this.$input.val().length,n=this.$input[0].selectionStart,t.isNumber(n)?n===e:!document.selection||(i=document.selection.createRange(),i.moveStart("character",-e),e===i.text.length)},destroy:function(){this.$hint.off(".tt"),this.$input.off(".tt"),this.$hint=this.$input=this.$overflowHelper=null}}),n}(),m=function(){"use strict";function n(n){n=n||{},n.templates=n.templates||{},n.source||e.error("missing source"),n.name&&!o(n.name)&&e.error("invalid dataset name: "+n.name),this.query=null,this.highlight=!!n.highlight,this.name=n.name||t.getUniqueId(),this.source=n.source,this.displayFn=i(n.display||n.displayKey),this.templates=r(n.templates,this.displayFn),this.$el=e(u.dataset.replace("%CLASS%",this.name))}function i(e){function n(t){return t[e]}return e=e||"value",t.isFunction(e)?e:n}function r(e,n){function i(e){return"<p>"+n(e)+"</p>"}return{empty:e.empty&&t.templatify(e.empty),header:e.header&&t.templatify(e.header),footer:e.footer&&t.templatify(e.footer),suggestion:e.suggestion||i}}function o(e){return/^[_a-zA-Z0-9-]+$/.test(e)}var s="ttDataset",a="ttValue",l="ttDatum";return n.extractDatasetName=function(t){return e(t).data(s)},n.extractValue=function(t){return e(t).data(a)},n.extractDatum=function(t){return e(t).data(l)},t.mixin(n.prototype,p,{_render:function(n,i){function r(){return m.templates.empty({query:n,isEmpty:!0})}function o(){function r(t){var n;return n=e(u.suggestion).append(m.templates.suggestion(t)).data(s,m.name).data(a,m.displayFn(t)).data(l,t),n.children().each(function(){e(this).css(d.suggestionChild)}),n}var o,c;return o=e(u.suggestions).css(d.suggestions),c=t.map(i,r),o.append.apply(o,c),m.highlight&&h({className:"tt-highlight",node:o[0],pattern:n}),o}function c(){return m.templates.header({query:n,isEmpty:!f})}function p(){return m.templates.footer({query:n,isEmpty:!f})}if(this.$el){var f,m=this;this.$el.empty(),f=i&&i.length,!f&&this.templates.empty?this.$el.html(r()).prepend(m.templates.header?c():null).append(m.templates.footer?p():null):f&&this.$el.html(o()).prepend(m.templates.header?c():null).append(m.templates.footer?p():null),this.trigger("rendered")}},getRoot:function(){return this.$el},update:function(e){function t(t){n.canceled||e!==n.query||n._render(e,t)}var n=this;this.query=e,this.canceled=!1,this.source(e,t)},cancel:function(){this.canceled=!0},clear:function(){this.cancel(),this.$el.empty(),this.trigger("rendered")},isEmpty:function(){return this.$el.is(":empty")},destroy:function(){this.$el=null}}),n}(),g=function(){"use strict";function n(n){var r,o,s,a=this;n=n||{},n.menu||e.error("menu is required"),this.isOpen=!1,this.isEmpty=!0,this.datasets=t.map(n.datasets,i),r=t.bind(this._onSuggestionClick,this),o=t.bind(this._onSuggestionMouseEnter,this),s=t.bind(this._onSuggestionMouseLeave,this),this.$menu=e(n.menu).on("click.tt",".tt-suggestion",r).on("mouseenter.tt",".tt-suggestion",o).on("mouseleave.tt",".tt-suggestion",s),t.each(this.datasets,function(e){a.$menu.append(e.getRoot()),e.onSync("rendered",a._onRendered,a)})}function i(e){return new m(e)}return t.mixin(n.prototype,p,{_onSuggestionClick:function(t){this.trigger("suggestionClicked",e(t.currentTarget))},_onSuggestionMouseEnter:function(t){this._removeCursor(),this._setCursor(e(t.currentTarget),!0)},_onSuggestionMouseLeave:function(){this._removeCursor()},_onRendered:function(){function e(e){return e.isEmpty()}this.isEmpty=t.every(this.datasets,e),this.isEmpty?this._hide():this.isOpen&&this._show(),this.trigger("datasetRendered")},_hide:function(){this.$menu.hide()},_show:function(){this.$menu.css("display","block")},_getSuggestions:function(){return this.$menu.find(".tt-suggestion")},_getCursor:function(){return this.$menu.find(".tt-cursor").first()},_setCursor:function(e,t){e.first().addClass("tt-cursor"),!t&&this.trigger("cursorMoved")},_removeCursor:function(){this._getCursor().removeClass("tt-cursor")},_moveCursor:function(e){var t,n,i,r;if(this.isOpen){if(n=this._getCursor(),t=this._getSuggestions(),this._removeCursor(),i=t.index(n)+e,i=(i+1)%(t.length+1)-1,i===-1)return void this.trigger("cursorRemoved");i<-1&&(i=t.length-1),this._setCursor(r=t.eq(i)),this._ensureVisible(r)}},_ensureVisible:function(e){var t,n,i,r;t=e.position().top,n=t+e.outerHeight(!0),i=this.$menu.scrollTop(),r=this.$menu.height()+parseInt(this.$menu.css("paddingTop"),10)+parseInt(this.$menu.css("paddingBottom"),10),t<0?this.$menu.scrollTop(i+t):r<n&&this.$menu.scrollTop(i+(n-r))},close:function(){this.isOpen&&(this.isOpen=!1,this._removeCursor(),this._hide(),this.trigger("closed"))},open:function(){this.isOpen||(this.isOpen=!0,!this.isEmpty&&this._show(),this.trigger("opened"))},setLanguageDirection:function(e){this.$menu.css("ltr"===e?d.ltr:d.rtl)},moveCursorUp:function(){this._moveCursor(-1)},moveCursorDown:function(){this._moveCursor(1)},getDatumForSuggestion:function(e){var t=null;return e.length&&(t={raw:m.extractDatum(e),value:m.extractValue(e),datasetName:m.extractDatasetName(e)}),t},getDatumForCursor:function(){return this.getDatumForSuggestion(this._getCursor().first())},getDatumForTopSuggestion:function(){return this.getDatumForSuggestion(this._getSuggestions().first())},update:function(e){function n(t){t.update(e)}t.each(this.datasets,n)},empty:function(){function e(e){e.clear()}t.each(this.datasets,e),this.isEmpty=!0},isVisible:function(){return this.isOpen&&!this.isEmpty},destroy:function(){function e(e){e.destroy()}this.$menu.off(".tt"),this.$menu=null,t.each(this.datasets,e)}}),n}(),v=function(){"use strict";function n(n){var r,o,s;n=n||{},n.input||e.error("missing input"),this.isActivated=!1,this.autoselect=!!n.autoselect,this.minLength=t.isNumber(n.minLength)?n.minLength:1,this.$node=i(n.input,n.withHint),r=this.$node.find(".tt-dropdown-menu"),o=this.$node.find(".tt-input"),s=this.$node.find(".tt-hint"),o.on("blur.tt",function(e){var n,i,s;n=document.activeElement,i=r.is(n),s=r.has(n).length>0,t.isMsie()&&(i||s)&&(e.preventDefault(),e.stopImmediatePropagation(),t.defer(function(){o.focus()}))}),r.on("mousedown.tt",function(e){e.preventDefault()}),this.eventBus=n.eventBus||new c({el:o}),this.dropdown=new g({menu:r,datasets:n.datasets}).onSync("suggestionClicked",this._onSuggestionClicked,this).onSync("cursorMoved",this._onCursorMoved,this).onSync("cursorRemoved",this._onCursorRemoved,this).onSync("opened",this._onOpened,this).onSync("closed",this._onClosed,this).onAsync("datasetRendered",this._onDatasetRendered,this),this.input=new f({input:o,hint:s}).onSync("focused",this._onFocused,this).onSync("blurred",this._onBlurred,this).onSync("enterKeyed",this._onEnterKeyed,this).onSync("tabKeyed",this._onTabKeyed,this).onSync("escKeyed",this._onEscKeyed,this).onSync("upKeyed",this._onUpKeyed,this).onSync("downKeyed",this._onDownKeyed,this).onSync("leftKeyed",this._onLeftKeyed,this).onSync("rightKeyed",this._onRightKeyed,this).onSync("queryChanged",this._onQueryChanged,this).onSync("whitespaceChanged",this._onWhitespaceChanged,this),this._setLanguageDirection()}function i(t,n){var i,o,a,l;i=e(t),o=e(u.wrapper).css(d.wrapper),a=e(u.dropdown).css(d.dropdown),l=i.clone().css(d.hint).css(r(i)),l.val("").removeData().addClass("tt-hint").removeAttr("id name placeholder required").prop("readonly",!0).attr({autocomplete:"off",spellcheck:"false",tabindex:-1}),i.data(s,{dir:i.attr("dir"),autocomplete:i.attr("autocomplete"),spellcheck:i.attr("spellcheck"),style:i.attr("style")}),i.addClass("tt-input").attr({autocomplete:"off",spellcheck:!1}).css(n?d.input:d.inputWithNoHint);try{!i.attr("dir")&&i.attr("dir","auto")}catch(e){}return i.wrap(o).parent().prepend(n?l:null).append(a)}function r(e){return{backgroundAttachment:e.css("background-attachment"),backgroundClip:e.css("background-clip"),backgroundColor:e.css("background-color"),backgroundImage:e.css("background-image"),backgroundOrigin:e.css("background-origin"),backgroundPosition:e.css("background-position"),backgroundRepeat:e.css("background-repeat"),backgroundSize:e.css("background-size")}}function o(e){var n=e.find(".tt-input");t.each(n.data(s),function(e,i){t.isUndefined(e)?n.removeAttr(i):n.attr(i,e)}),n.detach().removeData(s).removeClass("tt-input").insertAfter(e),e.remove()}var s="ttAttrs";return t.mixin(n.prototype,{_onSuggestionClicked:function(e,t){var n;(n=this.dropdown.getDatumForSuggestion(t))&&this._select(n)},_onCursorMoved:function(){var e=this.dropdown.getDatumForCursor();this.input.setInputValue(e.value,!0),this.eventBus.trigger("cursorchanged",e.raw,e.datasetName)},_onCursorRemoved:function(){this.input.resetInputValue(),this._updateHint()},_onDatasetRendered:function(){this._updateHint()},_onOpened:function(){this._updateHint(),this.eventBus.trigger("opened")},_onClosed:function(){this.input.clearHint(),this.eventBus.trigger("closed")},_onFocused:function(){this.isActivated=!0,this.dropdown.open()},_onBlurred:function(){this.isActivated=!1,this.dropdown.empty(),this.dropdown.close()},_onEnterKeyed:function(e,t){var n,i;n=this.dropdown.getDatumForCursor(),i=this.dropdown.getDatumForTopSuggestion(),n?(this._select(n),t.preventDefault()):this.autoselect&&i&&(this._select(i),t.preventDefault())},_onTabKeyed:function(e,t){var n;(n=this.dropdown.getDatumForCursor())?(this._select(n),t.preventDefault()):this._autocomplete(!0)},_onEscKeyed:function(){this.dropdown.close(),this.input.resetInputValue()},_onUpKeyed:function(){var e=this.input.getQuery();this.dropdown.isEmpty&&e.length>=this.minLength?this.dropdown.update(e):this.dropdown.moveCursorUp(),this.dropdown.open()},_onDownKeyed:function(){var e=this.input.getQuery();this.dropdown.isEmpty&&e.length>=this.minLength?this.dropdown.update(e):this.dropdown.moveCursorDown(),this.dropdown.open()},_onLeftKeyed:function(){"rtl"===this.dir&&this._autocomplete()},_onRightKeyed:function(){"ltr"===this.dir&&this._autocomplete()},_onQueryChanged:function(e,t){this.input.clearHintIfInvalid(),t.length>=this.minLength?this.dropdown.update(t):this.dropdown.empty(),this.dropdown.open(),this._setLanguageDirection()},_onWhitespaceChanged:function(){this._updateHint(),this.dropdown.open()},_setLanguageDirection:function(){var e;this.dir!==(e=this.input.getLanguageDirection())&&(this.dir=e,this.$node.css("direction",e),this.dropdown.setLanguageDirection(e))},_updateHint:function(){var e,n,i,r,o,s;e=this.dropdown.getDatumForTopSuggestion(),e&&this.dropdown.isVisible()&&!this.input.hasOverflow()?(n=this.input.getInputValue(),i=f.normalizeQuery(n),r=t.escapeRegExChars(i),o=new RegExp("^(?:"+r+")(.+$)","i"),s=o.exec(e.value),s?this.input.setHint(n+s[1]):this.input.clearHint()):this.input.clearHint()},_autocomplete:function(e){var t,n,i,r;t=this.input.getHint(),n=this.input.getQuery(),i=e||this.input.isCursorAtEnd(),t&&n!==t&&i&&(r=this.dropdown.getDatumForTopSuggestion(),r&&this.input.setInputValue(r.value),this.eventBus.trigger("autocompleted",r.raw,r.datasetName))},_select:function(e){this.input.setQuery(e.value),this.input.setInputValue(e.value,!0),this._setLanguageDirection(),this.eventBus.trigger("selected",e.raw,e.datasetName),this.dropdown.close(),t.defer(t.bind(this.dropdown.empty,this.dropdown))},open:function(){this.dropdown.open()},close:function(){this.dropdown.close()},setVal:function(e){e=t.toStr(e),this.isActivated?this.input.setInputValue(e):(this.input.setQuery(e),this.input.setInputValue(e,!0)),this._setLanguageDirection()},getVal:function(){return this.input.getQuery()},destroy:function(){this.input.destroy(),this.dropdown.destroy(),o(this.$node),this.$node=null}}),n}();!function(){"use strict";var n,i,r;n=e.fn.typeahead,i="ttTypeahead",r={initialize:function(n,r){function o(){var o,s,a=e(this);t.each(r,function(e){e.highlight=!!n.highlight}),s=new v({input:a,eventBus:o=new c({el:a}),withHint:!!t.isUndefined(n.hint)||!!n.hint,minLength:n.minLength,autoselect:n.autoselect,datasets:r}),a.data(i,s)}return r=t.isArray(r)?r:[].slice.call(arguments,1),n=n||{},this.each(o)},open:function(){function t(){var t,n=e(this);(t=n.data(i))&&t.open()}return this.each(t)},close:function(){function t(){var t,n=e(this);(t=n.data(i))&&t.close()}return this.each(t)},val:function(t){function n(){var n,r=e(this);(n=r.data(i))&&n.setVal(t)}function r(e){var t,n;return(t=e.data(i))&&(n=t.getVal()),n}return arguments.length?this.each(n):r(this.first())},destroy:function(){function t(){var t,n=e(this);(t=n.data(i))&&(t.destroy(),n.removeData(i))}return this.each(t)}},e.fn.typeahead=function(t){var n;return r[t]&&"initialize"!==t?(n=this.filter(function(){return!!e(this).data(i)}),r[t].apply(n,[].slice.call(arguments,1))):r.initialize.apply(this,arguments)},e.fn.typeahead.noConflict=function(){return e.fn.typeahead=n,this}}()}(window.jQuery);