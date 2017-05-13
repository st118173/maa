!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function t(t,n){var r,o,s,a=t.nodeName.toLowerCase();return"area"===a?(r=t.parentNode,o=r.name,!(!t.href||!o||"map"!==r.nodeName.toLowerCase())&&(s=e("img[usemap='#"+o+"']")[0],!!s&&i(s))):(/^(input|select|textarea|button|object)$/.test(a)?!t.disabled:"a"===a?t.href||n:n)&&i(t)}function i(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}e.ui=e.ui||{},e.extend(e.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({scrollParent:function(t){var i=this.css("position"),n="absolute"===i,r=t?/(auto|scroll|hidden)/:/(auto|scroll)/,o=this.parents().filter(function(){var t=e(this);return(!n||"static"!==t.css("position"))&&r.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==i&&o.length?o:e(this[0].ownerDocument||document)},uniqueId:function(){var e=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,n){return!!e.data(t,n[3])},focusable:function(i){return t(i,!isNaN(e.attr(i,"tabindex")))},tabbable:function(i){var n=e.attr(i,"tabindex"),r=isNaN(n);return(r||n>=0)&&t(i,!r)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(t,i){function n(t,i,n,o){return e.each(r,function(){i-=parseFloat(e.css(t,"padding"+this))||0,n&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),o&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var r="Width"===i?["Left","Right"]:["Top","Bottom"],o=i.toLowerCase(),s={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+i]=function(t){return void 0===t?s["inner"+i].call(this):this.each(function(){e(this).css(o,n(this,t)+"px")})},e.fn["outer"+i]=function(t,r){return"number"!=typeof t?s["outer"+i].call(this,t):this.each(function(){e(this).css(o,n(this,t,!0,r)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.fn.extend({focus:function(t){return function(i,n){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),n&&n.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),disableSelection:function(){var e="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(e+".ui-disableSelection",function(e){e.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(t){if(void 0!==t)return this.css("zIndex",t);if(this.length)for(var i,n,r=e(this[0]);r.length&&r[0]!==document;){if(i=r.css("position"),("absolute"===i||"relative"===i||"fixed"===i)&&(n=parseInt(r.css("zIndex"),10),!isNaN(n)&&0!==n))return n;r=r.parent()}return 0}}),e.ui.plugin={add:function(t,i,n){var r,o=e.ui[t].prototype;for(r in n)o.plugins[r]=o.plugins[r]||[],o.plugins[r].push([i,n[r]])},call:function(e,t,i,n){var r,o=e.plugins[t];if(o&&(n||e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType))for(r=0;r<o.length;r++)e.options[o[r][0]]&&o[r][1].apply(e.element,i)}}}),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){var t=0,i=Array.prototype.slice;return e.cleanData=function(t){return function(i){var n,r,o;for(o=0;null!=(r=i[o]);o++)try{n=e._data(r,"events"),n&&n.remove&&e(r).triggerHandler("remove")}catch(e){}t(i)}}(e.cleanData),e.widget=function(t,i,n){var r,o,s,a,l={},u=t.split(".")[0];return t=t.split(".")[1],r=u+"-"+t,n||(n=i,i=e.Widget),e.expr[":"][r.toLowerCase()]=function(t){return!!e.data(t,r)},e[u]=e[u]||{},o=e[u][t],s=e[u][t]=function(e,t){return this._createWidget?void(arguments.length&&this._createWidget(e,t)):new s(e,t)},e.extend(s,o,{version:n.version,_proto:e.extend({},n),_childConstructors:[]}),a=new i,a.options=e.widget.extend({},a.options),e.each(n,function(t,n){return e.isFunction(n)?void(l[t]=function(){var e=function(){return i.prototype[t].apply(this,arguments)},r=function(e){return i.prototype[t].apply(this,e)};return function(){var t,i=this._super,o=this._superApply;return this._super=e,this._superApply=r,t=n.apply(this,arguments),this._super=i,this._superApply=o,t}}()):void(l[t]=n)}),s.prototype=e.widget.extend(a,{widgetEventPrefix:o?a.widgetEventPrefix||t:t},l,{constructor:s,namespace:u,widgetName:t,widgetFullName:r}),o?(e.each(o._childConstructors,function(t,i){var n=i.prototype;e.widget(n.namespace+"."+n.widgetName,s,i._proto)}),delete o._childConstructors):i._childConstructors.push(s),e.widget.bridge(t,s),s},e.widget.extend=function(t){for(var n,r,o=i.call(arguments,1),s=0,a=o.length;s<a;s++)for(n in o[s])r=o[s][n],o[s].hasOwnProperty(n)&&void 0!==r&&(e.isPlainObject(r)?t[n]=e.isPlainObject(t[n])?e.widget.extend({},t[n],r):e.widget.extend({},r):t[n]=r);return t},e.widget.bridge=function(t,n){var r=n.prototype.widgetFullName||t;e.fn[t]=function(o){var s="string"==typeof o,a=i.call(arguments,1),l=this;return s?this.each(function(){var i,n=e.data(this,r);return"instance"===o?(l=n,!1):n?e.isFunction(n[o])&&"_"!==o.charAt(0)?(i=n[o].apply(n,a),i!==n&&void 0!==i?(l=i&&i.jquery?l.pushStack(i.get()):i,!1):void 0):e.error("no such method '"+o+"' for "+t+" widget instance"):e.error("cannot call methods on "+t+" prior to initialization; attempted to call method '"+o+"'")}):(a.length&&(o=e.widget.extend.apply(null,[o].concat(a))),this.each(function(){var t=e.data(this,r);t?(t.option(o||{}),t._init&&t._init()):e.data(this,r,new n(o,this))})),l}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(i,n){n=e(n||this.defaultElement||this)[0],this.element=e(n),this.uuid=t++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=e(),this.hoverable=e(),this.focusable=e(),n!==this&&(e.data(n,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===n&&this.destroy()}}),this.document=e(n.style?n.ownerDocument:n.document||n),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this.options=e.widget.extend({},this.options,this._getCreateOptions(),i),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(t,i){var n,r,o,s=t;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof t)if(s={},n=t.split("."),t=n.shift(),n.length){for(r=s[t]=e.widget.extend({},this.options[t]),o=0;o<n.length-1;o++)r[n[o]]=r[n[o]]||{},r=r[n[o]];if(t=n.pop(),1===arguments.length)return void 0===r[t]?null:r[t];r[t]=i}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];s[t]=i}return this._setOptions(s),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!t),t&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(t,i,n){var r,o=this;"boolean"!=typeof t&&(n=i,i=t,t=!1),n?(i=r=e(i),this.bindings=this.bindings.add(i)):(n=i,i=this.element,r=this.widget()),e.each(n,function(n,s){function a(){if(t||o.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled"))return("string"==typeof s?o[s]:s).apply(o,arguments)}"string"!=typeof s&&(a.guid=s.guid=s.guid||a.guid||e.guid++);var l=n.match(/^([\w:-]*)\s*(.*)$/),u=l[1]+o.eventNamespace,d=l[2];d?r.delegate(d,u,a):i.bind(u,a)})},_off:function(t,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(i).undelegate(i),this.bindings=e(this.bindings.not(t).get()),this.focusable=e(this.focusable.not(t).get()),this.hoverable=e(this.hoverable.not(t).get())},_delay:function(e,t){function i(){return("string"==typeof e?n[e]:e).apply(n,arguments)}var n=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,n){var r,o,s=this.options[t];if(n=n||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(r in o)r in i||(i[r]=o[r]);return this.element.trigger(i,n),!(e.isFunction(s)&&s.apply(this.element[0],[i].concat(n))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(n,r,o){"string"==typeof r&&(r={effect:r});var s,a=r?r===!0||"number"==typeof r?i:r.effect||i:t;r=r||{},"number"==typeof r&&(r={duration:r}),s=!e.isEmptyObject(r),r.complete=o,r.delay&&n.delay(r.delay),s&&e.effects&&e.effects.effect[a]?n[t](r):a!==t&&n[a]?n[a](r.duration,r.easing,o):n.queue(function(i){e(this)[t](),o&&o.call(n[0]),i()})}}),e.widget}),function(e){"function"==typeof define&&define.amd?define(["jquery","./widget"],e):e(jQuery)}(function(e){var t=!1;return e(document).mouseup(function(){t=!1}),e.widget("ui.mouse",{version:"1.11.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(i){if(!0===e.data(i.target,t.widgetName+".preventClickEvent"))return e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!t){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;var n=this,r=1===i.which,o=!("string"!=typeof this.options.cancel||!i.target.nodeName)&&e(i.target).closest(this.options.cancel).length;return!(r&&!o&&this._mouseCapture(i))||(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){n.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=this._mouseStart(i)!==!1,!this._mouseStarted)?(i.preventDefault(),!0):(!0===e.data(i.target,this.widgetName+".preventClickEvent")&&e.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return n._mouseMove(e)},this._mouseUpDelegate=function(e){return n._mouseUp(e)},this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),t=!0,!0))}},_mouseMove:function(t){if(this._mouseMoved){if(e.ui.ie&&(!document.documentMode||document.documentMode<9)&&!t.button)return this._mouseUp(t);if(!t.which)return this._mouseUp(t)}return(t.which||t.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(i){return this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,i.target===this._mouseDownEvent.target&&e.data(i.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(i)),t=!1,!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})}),function(e){"function"==typeof define&&define.amd?define(["jquery","./core","./mouse","./widget"],e):e(jQuery)}(function(e){return e.widget("ui.resizable",e.ui.mouse,{version:"1.11.4",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(e){return parseInt(e,10)||0},_isNumber:function(e){return!isNaN(parseInt(e,10))},_hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var n=i&&"left"===i?"scrollLeft":"scrollTop",r=!1;return t[n]>0||(t[n]=1,r=t[n]>0,t[n]=0,r)},_create:function(){var t,i,n,r,o,s=this,a=this.options;if(this.element.addClass("ui-resizable"),e.extend(this,{_aspectRatio:!!a.aspectRatio,aspectRatio:a.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:a.helper||a.ghost||a.animate?a.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=a.handles||(e(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=e(),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),t=this.handles.split(","),this.handles={},i=0;i<t.length;i++)n=e.trim(t[i]),o="ui-resizable-"+n,r=e("<div class='ui-resizable-handle "+o+"'></div>"),r.css({zIndex:a.zIndex}),"se"===n&&r.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[n]=".ui-resizable-"+n,this.element.append(r);this._renderAxis=function(t){var i,n,r,o;t=t||this.element;for(i in this.handles)this.handles[i].constructor===String?this.handles[i]=this.element.children(this.handles[i]).first().show():(this.handles[i].jquery||this.handles[i].nodeType)&&(this.handles[i]=e(this.handles[i]),this._on(this.handles[i],{mousedown:s._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(n=e(this.handles[i],this.element),o=/sw|ne|nw|se|n|s/.test(i)?n.outerHeight():n.outerWidth(),r=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),t.css(r,o),this._proportionallyResize()),this._handles=this._handles.add(this.handles[i])},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.mouseover(function(){s.resizing||(this.className&&(r=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),s.axis=r&&r[1]?r[1]:"se")}),a.autoHide&&(this._handles.hide(),e(this.element).addClass("ui-resizable-autohide").mouseenter(function(){a.disabled||(e(this).removeClass("ui-resizable-autohide"),s._handles.show())}).mouseleave(function(){a.disabled||s.resizing||(e(this).addClass("ui-resizable-autohide"),s._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var t,i=function(t){e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),t=this.element,this.originalElement.css({position:t.css("position"),width:t.outerWidth(),height:t.outerHeight(),top:t.css("top"),left:t.css("left")}).insertAfter(t),t.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_mouseCapture:function(t){var i,n,r=!1;for(i in this.handles)n=e(this.handles[i])[0],(n===t.target||e.contains(n,t.target))&&(r=!0);return!this.options.disabled&&r},_mouseStart:function(t){var i,n,r,o=this.options,s=this.element;return this.resizing=!0,this._renderProxy(),i=this._num(this.helper.css("left")),n=this._num(this.helper.css("top")),o.containment&&(i+=e(o.containment).scrollLeft()||0,n+=e(o.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:i,top:n},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:s.width(),height:s.height()},this.originalSize=this._helper?{width:s.outerWidth(),height:s.outerHeight()}:{width:s.width(),height:s.height()},this.sizeDiff={width:s.outerWidth()-s.width(),height:s.outerHeight()-s.height()},this.originalPosition={left:i,top:n},this.originalMousePosition={left:t.pageX,top:t.pageY},this.aspectRatio="number"==typeof o.aspectRatio?o.aspectRatio:this.originalSize.width/this.originalSize.height||1,r=e(".ui-resizable-"+this.axis).css("cursor"),e("body").css("cursor","auto"===r?this.axis+"-resize":r),s.addClass("ui-resizable-resizing"),this._propagate("start",t),!0},_mouseDrag:function(t){var i,n,r=this.originalMousePosition,o=this.axis,s=t.pageX-r.left||0,a=t.pageY-r.top||0,l=this._change[o];return this._updatePrevProperties(),!!l&&(i=l.apply(this,[t,s,a]),this._updateVirtualBoundaries(t.shiftKey),(this._aspectRatio||t.shiftKey)&&(i=this._updateRatio(i,t)),i=this._respectSize(i,t),this._updateCache(i),this._propagate("resize",t),n=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),e.isEmptyObject(n)||(this._updatePrevProperties(),this._trigger("resize",t,this.ui()),this._applyChanges()),!1)},_mouseStop:function(t){this.resizing=!1;var i,n,r,o,s,a,l,u=this.options,d=this;return this._helper&&(i=this._proportionallyResizeElements,n=i.length&&/textarea/i.test(i[0].nodeName),r=n&&this._hasScroll(i[0],"left")?0:d.sizeDiff.height,o=n?0:d.sizeDiff.width,s={width:d.helper.width()-o,height:d.helper.height()-r},a=parseInt(d.element.css("left"),10)+(d.position.left-d.originalPosition.left)||null,l=parseInt(d.element.css("top"),10)+(d.position.top-d.originalPosition.top)||null,u.animate||this.element.css(e.extend(s,{top:l,left:a})),d.helper.height(d.size.height),d.helper.width(d.size.width),this._helper&&!u.animate&&this._proportionallyResize()),e("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var e={};return this.position.top!==this.prevPosition.top&&(e.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(e.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(e.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(e.height=this.size.height+"px"),this.helper.css(e),e},_updateVirtualBoundaries:function(e){var t,i,n,r,o,s=this.options;o={minWidth:this._isNumber(s.minWidth)?s.minWidth:0,maxWidth:this._isNumber(s.maxWidth)?s.maxWidth:1/0,minHeight:this._isNumber(s.minHeight)?s.minHeight:0,maxHeight:this._isNumber(s.maxHeight)?s.maxHeight:1/0},(this._aspectRatio||e)&&(t=o.minHeight*this.aspectRatio,n=o.minWidth/this.aspectRatio,i=o.maxHeight*this.aspectRatio,r=o.maxWidth/this.aspectRatio,t>o.minWidth&&(o.minWidth=t),n>o.minHeight&&(o.minHeight=n),i<o.maxWidth&&(o.maxWidth=i),r<o.maxHeight&&(o.maxHeight=r)),this._vBoundaries=o},_updateCache:function(e){this.offset=this.helper.offset(),this._isNumber(e.left)&&(this.position.left=e.left),this._isNumber(e.top)&&(this.position.top=e.top),this._isNumber(e.height)&&(this.size.height=e.height),this._isNumber(e.width)&&(this.size.width=e.width)},_updateRatio:function(e){var t=this.position,i=this.size,n=this.axis;return this._isNumber(e.height)?e.width=e.height*this.aspectRatio:this._isNumber(e.width)&&(e.height=e.width/this.aspectRatio),"sw"===n&&(e.left=t.left+(i.width-e.width),e.top=null),"nw"===n&&(e.top=t.top+(i.height-e.height),e.left=t.left+(i.width-e.width)),e},_respectSize:function(e){var t=this._vBoundaries,i=this.axis,n=this._isNumber(e.width)&&t.maxWidth&&t.maxWidth<e.width,r=this._isNumber(e.height)&&t.maxHeight&&t.maxHeight<e.height,o=this._isNumber(e.width)&&t.minWidth&&t.minWidth>e.width,s=this._isNumber(e.height)&&t.minHeight&&t.minHeight>e.height,a=this.originalPosition.left+this.originalSize.width,l=this.position.top+this.size.height,u=/sw|nw|w/.test(i),d=/nw|ne|n/.test(i);return o&&(e.width=t.minWidth),s&&(e.height=t.minHeight),n&&(e.width=t.maxWidth),r&&(e.height=t.maxHeight),o&&u&&(e.left=a-t.minWidth),n&&u&&(e.left=a-t.maxWidth),s&&d&&(e.top=l-t.minHeight),r&&d&&(e.top=l-t.maxHeight),e.width||e.height||e.left||!e.top?e.width||e.height||e.top||!e.left||(e.left=null):e.top=null,e},_getPaddingPlusBorderDimensions:function(e){for(var t=0,i=[],n=[e.css("borderTopWidth"),e.css("borderRightWidth"),e.css("borderBottomWidth"),e.css("borderLeftWidth")],r=[e.css("paddingTop"),e.css("paddingRight"),e.css("paddingBottom"),e.css("paddingLeft")];t<4;t++)i[t]=parseInt(n[t],10)||0,i[t]+=parseInt(r[t],10)||0;return{height:i[0]+i[2],width:i[1]+i[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var e,t=0,i=this.helper||this.element;t<this._proportionallyResizeElements.length;t++)e=this._proportionallyResizeElements[t],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(e)),e.css({height:i.height()-this.outerDimensions.height||0,width:i.width()-this.outerDimensions.width||0})},_renderProxy:function(){var t=this.element,i=this.options;this.elementOffset=t.offset(),this._helper?(this.helper=this.helper||e("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(e,t){return{width:this.originalSize.width+t}},w:function(e,t){var i=this.originalSize,n=this.originalPosition;return{left:n.left+t,width:i.width-t}},n:function(e,t,i){var n=this.originalSize,r=this.originalPosition;return{top:r.top+i,height:n.height-i}},s:function(e,t,i){return{height:this.originalSize.height+i}},se:function(t,i,n){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,i,n]))},sw:function(t,i,n){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,i,n]))},ne:function(t,i,n){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,i,n]))},nw:function(t,i,n){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,i,n]))}},_propagate:function(t,i){e.ui.plugin.call(this,t,[i,this.ui()]),"resize"!==t&&this._trigger(t,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),e.ui.plugin.add("resizable","animate",{stop:function(t){var i=e(this).resizable("instance"),n=i.options,r=i._proportionallyResizeElements,o=r.length&&/textarea/i.test(r[0].nodeName),s=o&&i._hasScroll(r[0],"left")?0:i.sizeDiff.height,a=o?0:i.sizeDiff.width,l={width:i.size.width-a,height:i.size.height-s},u=parseInt(i.element.css("left"),10)+(i.position.left-i.originalPosition.left)||null,d=parseInt(i.element.css("top"),10)+(i.position.top-i.originalPosition.top)||null;i.element.animate(e.extend(l,d&&u?{top:d,left:u}:{}),{duration:n.animateDuration,easing:n.animateEasing,step:function(){var n={width:parseInt(i.element.css("width"),10),height:parseInt(i.element.css("height"),10),top:parseInt(i.element.css("top"),10),left:parseInt(i.element.css("left"),10)};r&&r.length&&e(r[0]).css({width:n.width,height:n.height}),i._updateCache(n),i._propagate("resize",t)}})}}),e.ui.plugin.add("resizable","containment",{start:function(){var t,i,n,r,o,s,a,l=e(this).resizable("instance"),u=l.options,d=l.element,c=u.containment,h=c instanceof e?c.get(0):/parent/.test(c)?d.parent().get(0):c;h&&(l.containerElement=e(h),/document/.test(c)||c===document?(l.containerOffset={left:0,top:0},l.containerPosition={left:0,top:0},l.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}):(t=e(h),i=[],e(["Top","Right","Left","Bottom"]).each(function(e,n){i[e]=l._num(t.css("padding"+n))}),l.containerOffset=t.offset(),l.containerPosition=t.position(),l.containerSize={height:t.innerHeight()-i[3],width:t.innerWidth()-i[1]},n=l.containerOffset,r=l.containerSize.height,o=l.containerSize.width,s=l._hasScroll(h,"left")?h.scrollWidth:o,a=l._hasScroll(h)?h.scrollHeight:r,l.parentData={element:h,left:n.left,top:n.top,width:s,height:a}))},resize:function(t){var i,n,r,o,s=e(this).resizable("instance"),a=s.options,l=s.containerOffset,u=s.position,d=s._aspectRatio||t.shiftKey,c={top:0,left:0},h=s.containerElement,p=!0;h[0]!==document&&/static/.test(h.css("position"))&&(c=l),u.left<(s._helper?l.left:0)&&(s.size.width=s.size.width+(s._helper?s.position.left-l.left:s.position.left-c.left),d&&(s.size.height=s.size.width/s.aspectRatio,p=!1),s.position.left=a.helper?l.left:0),u.top<(s._helper?l.top:0)&&(s.size.height=s.size.height+(s._helper?s.position.top-l.top:s.position.top),d&&(s.size.width=s.size.height*s.aspectRatio,p=!1),s.position.top=s._helper?l.top:0),r=s.containerElement.get(0)===s.element.parent().get(0),o=/relative|absolute/.test(s.containerElement.css("position")),r&&o?(s.offset.left=s.parentData.left+s.position.left,s.offset.top=s.parentData.top+s.position.top):(s.offset.left=s.element.offset().left,s.offset.top=s.element.offset().top),i=Math.abs(s.sizeDiff.width+(s._helper?s.offset.left-c.left:s.offset.left-l.left)),n=Math.abs(s.sizeDiff.height+(s._helper?s.offset.top-c.top:s.offset.top-l.top)),i+s.size.width>=s.parentData.width&&(s.size.width=s.parentData.width-i,d&&(s.size.height=s.size.width/s.aspectRatio,p=!1)),n+s.size.height>=s.parentData.height&&(s.size.height=s.parentData.height-n,d&&(s.size.width=s.size.height*s.aspectRatio,p=!1)),p||(s.position.left=s.prevPosition.left,s.position.top=s.prevPosition.top,s.size.width=s.prevSize.width,s.size.height=s.prevSize.height)},stop:function(){var t=e(this).resizable("instance"),i=t.options,n=t.containerOffset,r=t.containerPosition,o=t.containerElement,s=e(t.helper),a=s.offset(),l=s.outerWidth()-t.sizeDiff.width,u=s.outerHeight()-t.sizeDiff.height;t._helper&&!i.animate&&/relative/.test(o.css("position"))&&e(this).css({left:a.left-r.left-n.left,width:l,height:u}),t._helper&&!i.animate&&/static/.test(o.css("position"))&&e(this).css({left:a.left-r.left-n.left,width:l,height:u})}}),e.ui.plugin.add("resizable","alsoResize",{start:function(){var t=e(this).resizable("instance"),i=t.options;e(i.alsoResize).each(function(){var t=e(this);t.data("ui-resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})},resize:function(t,i){var n=e(this).resizable("instance"),r=n.options,o=n.originalSize,s=n.originalPosition,a={height:n.size.height-o.height||0,width:n.size.width-o.width||0,top:n.position.top-s.top||0,left:n.position.left-s.left||0};e(r.alsoResize).each(function(){var t=e(this),n=e(this).data("ui-resizable-alsoresize"),r={},o=t.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];e.each(o,function(e,t){var i=(n[t]||0)+(a[t]||0);i&&i>=0&&(r[t]=i||null)}),t.css(r)})},stop:function(){e(this).removeData("resizable-alsoresize")}}),e.ui.plugin.add("resizable","ghost",{start:function(){var t=e(this).resizable("instance"),i=t.options,n=t.size;t.ghost=t.originalElement.clone(),t.ghost.css({opacity:.25,display:"block",position:"relative",height:n.height,width:n.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof i.ghost?i.ghost:""),t.ghost.appendTo(t.helper)},resize:function(){var t=e(this).resizable("instance");t.ghost&&t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})},stop:function(){var t=e(this).resizable("instance");t.ghost&&t.helper&&t.helper.get(0).removeChild(t.ghost.get(0))}}),e.ui.plugin.add("resizable","grid",{resize:function(){var t,i=e(this).resizable("instance"),n=i.options,r=i.size,o=i.originalSize,s=i.originalPosition,a=i.axis,l="number"==typeof n.grid?[n.grid,n.grid]:n.grid,u=l[0]||1,d=l[1]||1,c=Math.round((r.width-o.width)/u)*u,h=Math.round((r.height-o.height)/d)*d,p=o.width+c,f=o.height+h,m=n.maxWidth&&n.maxWidth<p,g=n.maxHeight&&n.maxHeight<f,v=n.minWidth&&n.minWidth>p,y=n.minHeight&&n.minHeight>f;n.grid=l,v&&(p+=u),y&&(f+=d),m&&(p-=u),g&&(f-=d),/^(se|s|e)$/.test(a)?(i.size.width=p,i.size.height=f):/^(ne)$/.test(a)?(i.size.width=p,i.size.height=f,i.position.top=s.top-h):/^(sw)$/.test(a)?(i.size.width=p,i.size.height=f,i.position.left=s.left-c):((f-d<=0||p-u<=0)&&(t=i._getPaddingPlusBorderDimensions(this)),f-d>0?(i.size.height=f,i.position.top=s.top-h):(f=d-t.height,i.size.height=f,i.position.top=s.top+o.height-f),p-u>0?(i.size.width=p,i.position.left=s.left-c):(p=u-t.width,i.size.width=p,i.position.left=s.left+o.width-p))}}),e.ui.resizable});