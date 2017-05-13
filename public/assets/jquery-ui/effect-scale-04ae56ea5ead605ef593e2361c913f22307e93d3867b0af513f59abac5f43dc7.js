!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){var t="ui-effects-",i=e;return e.effects={effect:{}},function(e,t){function i(e,t,i){var n=c[t.type]||{};return null==e?i||!t.def?null:t.def:(e=n.floor?~~e:parseFloat(e),isNaN(e)?t.def:n.mod?(e+n.mod)%n.mod:0>e?0:n.max<e?n.max:e)}function n(t){var i=u(),n=i._rgba=[];return t=t.toLowerCase(),h(l,function(e,r){var o,s=r.re.exec(t),a=s&&r.parse(s),l=r.space||"rgba";if(a)return o=i[l](a),i[d[l].cache]=o[d[l].cache],n=i._rgba=o._rgba,!1}),n.length?("0,0,0,0"===n.join()&&e.extend(n,o.transparent),i):o[t]}function r(e,t,i){return i=(i+1)%1,6*i<1?e+(t-e)*i*6:2*i<1?t:3*i<2?e+(t-e)*(2/3-i)*6:e}var o,s="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",a=/^([\-+])=\s*(\d+\.?\d*)/,l=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[2.55*e[1],2.55*e[2],2.55*e[3],e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],u=e.Color=function(t,i,n,r){return new e.Color.fn.parse(t,i,n,r)},d={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},c={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},p=u.support={},f=e("<p>")[0],h=e.each;f.style.cssText="background-color:rgba(1,1,1,.5)",p.rgba=f.style.backgroundColor.indexOf("rgba")>-1,h(d,function(e,t){t.cache="_"+e,t.props.alpha={idx:3,type:"percent",def:1}}),u.fn=e.extend(u.prototype,{parse:function(r,s,a,l){if(r===t)return this._rgba=[null,null,null,null],this;(r.jquery||r.nodeType)&&(r=e(r).css(s),s=t);var c=this,p=e.type(r),f=this._rgba=[];return s!==t&&(r=[r,s,a,l],p="array"),"string"===p?this.parse(n(r)||o._default):"array"===p?(h(d.rgba.props,function(e,t){f[t.idx]=i(r[t.idx],t)}),this):"object"===p?(r instanceof u?h(d,function(e,t){r[t.cache]&&(c[t.cache]=r[t.cache].slice())}):h(d,function(t,n){var o=n.cache;h(n.props,function(e,t){if(!c[o]&&n.to){if("alpha"===e||null==r[e])return;c[o]=n.to(c._rgba)}c[o][t.idx]=i(r[e],t,!0)}),c[o]&&e.inArray(null,c[o].slice(0,3))<0&&(c[o][3]=1,n.from&&(c._rgba=n.from(c[o])))}),this):void 0},is:function(e){var t=u(e),i=!0,n=this;return h(d,function(e,r){var o,s=t[r.cache];return s&&(o=n[r.cache]||r.to&&r.to(n._rgba)||[],h(r.props,function(e,t){if(null!=s[t.idx])return i=s[t.idx]===o[t.idx]})),i}),i},_space:function(){var e=[],t=this;return h(d,function(i,n){t[n.cache]&&e.push(i)}),e.pop()},transition:function(e,t){var n=u(e),r=n._space(),o=d[r],s=0===this.alpha()?u("transparent"):this,a=s[o.cache]||o.to(s._rgba),l=a.slice();return n=n[o.cache],h(o.props,function(e,r){var o=r.idx,s=a[o],u=n[o],d=c[r.type]||{};null!==u&&(null===s?l[o]=u:(d.mod&&(u-s>d.mod/2?s+=d.mod:s-u>d.mod/2&&(s-=d.mod)),l[o]=i((u-s)*t+s,r)))}),this[r](l)},blend:function(t){if(1===this._rgba[3])return this;var i=this._rgba.slice(),n=i.pop(),r=u(t)._rgba;return u(e.map(i,function(e,t){return(1-n)*r[t]+n*e}))},toRgbaString:function(){var t="rgba(",i=e.map(this._rgba,function(e,t){return null==e?t>2?1:0:e});return 1===i[3]&&(i.pop(),t="rgb("),t+i.join()+")"},toHslaString:function(){var t="hsla(",i=e.map(this.hsla(),function(e,t){return null==e&&(e=t>2?1:0),t&&t<3&&(e=Math.round(100*e)+"%"),e});return 1===i[3]&&(i.pop(),t="hsl("),t+i.join()+")"},toHexString:function(t){var i=this._rgba.slice(),n=i.pop();return t&&i.push(~~(255*n)),"#"+e.map(i,function(e){return e=(e||0).toString(16),1===e.length?"0"+e:e}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),u.fn.parse.prototype=u.fn,d.hsla.to=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t,i,n=e[0]/255,r=e[1]/255,o=e[2]/255,s=e[3],a=Math.max(n,r,o),l=Math.min(n,r,o),u=a-l,d=a+l,c=.5*d;return t=l===a?0:n===a?60*(r-o)/u+360:r===a?60*(o-n)/u+120:60*(n-r)/u+240,i=0===u?0:c<=.5?u/d:u/(2-d),[Math.round(t)%360,i,c,null==s?1:s]},d.hsla.from=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t=e[0]/360,i=e[1],n=e[2],o=e[3],s=n<=.5?n*(1+i):n+i-n*i,a=2*n-s;return[Math.round(255*r(a,s,t+1/3)),Math.round(255*r(a,s,t)),Math.round(255*r(a,s,t-1/3)),o]},h(d,function(n,r){var o=r.props,s=r.cache,l=r.to,d=r.from;u.fn[n]=function(n){if(l&&!this[s]&&(this[s]=l(this._rgba)),n===t)return this[s].slice();var r,a=e.type(n),c="array"===a||"object"===a?n:arguments,p=this[s].slice();return h(o,function(e,t){var n=c["object"===a?e:t.idx];null==n&&(n=p[t.idx]),p[t.idx]=i(n,t)}),d?(r=u(d(p)),r[s]=p,r):u(p)},h(o,function(t,i){u.fn[t]||(u.fn[t]=function(r){var o,s=e.type(r),l="alpha"===t?this._hsla?"hsla":"rgba":n,u=this[l](),d=u[i.idx];return"undefined"===s?d:("function"===s&&(r=r.call(this,d),s=e.type(r)),null==r&&i.empty?this:("string"===s&&(o=a.exec(r),o&&(r=d+parseFloat(o[2])*("+"===o[1]?1:-1))),u[i.idx]=r,this[l](u)))})})}),u.hook=function(t){var i=t.split(" ");h(i,function(t,i){e.cssHooks[i]={set:function(t,r){var o,s,a="";if("transparent"!==r&&("string"!==e.type(r)||(o=n(r)))){if(r=u(o||r),!p.rgba&&1!==r._rgba[3]){for(s="backgroundColor"===i?t.parentNode:t;(""===a||"transparent"===a)&&s&&s.style;)try{a=e.css(s,"backgroundColor"),s=s.parentNode}catch(e){}r=r.blend(a&&"transparent"!==a?a:"_default")}r=r.toRgbaString()}try{t.style[i]=r}catch(e){}}},e.fx.step[i]=function(t){t.colorInit||(t.start=u(t.elem,i),t.end=u(t.end),t.colorInit=!0),e.cssHooks[i].set(t.elem,t.start.transition(t.end,t.pos))}})},u.hook(s),e.cssHooks.borderColor={expand:function(e){var t={};return h(["Top","Right","Bottom","Left"],function(i,n){t["border"+n+"Color"]=e}),t}},o=e.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(i),function(){function t(t){var i,n,r=t.ownerDocument.defaultView?t.ownerDocument.defaultView.getComputedStyle(t,null):t.currentStyle,o={};if(r&&r.length&&r[0]&&r[r[0]])for(n=r.length;n--;)i=r[n],"string"==typeof r[i]&&(o[e.camelCase(i)]=r[i]);else for(i in r)"string"==typeof r[i]&&(o[i]=r[i]);return o}function n(t,i){var n,r,s={};for(n in i)r=i[n],t[n]!==r&&(o[n]||!e.fx.step[n]&&isNaN(parseFloat(r))||(s[n]=r));return s}var r=["add","remove","toggle"],o={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,n){e.fx.step[n]=function(e){("none"!==e.end&&!e.setAttr||1===e.pos&&!e.setAttr)&&(i.style(e.elem,n,e.end),e.setAttr=!0)}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e.effects.animateClass=function(i,o,s,a){var l=e.speed(o,s,a);return this.queue(function(){var o,s=e(this),a=s.attr("class")||"",u=l.children?s.find("*").addBack():s;u=u.map(function(){var i=e(this);return{el:i,start:t(this)}}),o=function(){e.each(r,function(e,t){i[t]&&s[t+"Class"](i[t])})},o(),u=u.map(function(){return this.end=t(this.el[0]),this.diff=n(this.start,this.end),this}),s.attr("class",a),u=u.map(function(){var t=this,i=e.Deferred(),n=e.extend({},l,{queue:!1,complete:function(){i.resolve(t)}});return this.el.animate(this.diff,n),i.promise()}),e.when.apply(e,u.get()).done(function(){o(),e.each(arguments,function(){var t=this.el;e.each(this.diff,function(e){t.css(e,"")})}),l.complete.call(s[0])})})},e.fn.extend({addClass:function(t){return function(i,n,r,o){return n?e.effects.animateClass.call(this,{add:i},n,r,o):t.apply(this,arguments)}}(e.fn.addClass),removeClass:function(t){return function(i,n,r,o){return arguments.length>1?e.effects.animateClass.call(this,{remove:i},n,r,o):t.apply(this,arguments)}}(e.fn.removeClass),toggleClass:function(t){return function(i,n,r,o,s){return"boolean"==typeof n||void 0===n?r?e.effects.animateClass.call(this,n?{add:i}:{remove:i},r,o,s):t.apply(this,arguments):e.effects.animateClass.call(this,{toggle:i},n,r,o)}}(e.fn.toggleClass),switchClass:function(t,i,n,r,o){return e.effects.animateClass.call(this,{add:i,remove:t},n,r,o)}})}(),function(){function i(t,i,n,r){return e.isPlainObject(t)&&(i=t,t=t.effect),t={effect:t},null==i&&(i={}),e.isFunction(i)&&(r=i,n=null,i={}),("number"==typeof i||e.fx.speeds[i])&&(r=n,n=i,i={}),e.isFunction(n)&&(r=n,n=null),i&&e.extend(t,i),n=n||i.duration,t.duration=e.fx.off?0:"number"==typeof n?n:n in e.fx.speeds?e.fx.speeds[n]:e.fx.speeds._default,t.complete=r||i.complete,t}function n(t){return!(t&&"number"!=typeof t&&!e.fx.speeds[t])||("string"==typeof t&&!e.effects.effect[t]||(!!e.isFunction(t)||"object"==typeof t&&!t.effect))}e.extend(e.effects,{version:"1.11.4",save:function(e,i){for(var n=0;n<i.length;n++)null!==i[n]&&e.data(t+i[n],e[0].style[i[n]])},restore:function(e,i){var n,r;for(r=0;r<i.length;r++)null!==i[r]&&(n=e.data(t+i[r]),void 0===n&&(n=""),e.css(i[r],n))},setMode:function(e,t){return"toggle"===t&&(t=e.is(":hidden")?"show":"hide"),t},getBaseline:function(e,t){var i,n;switch(e[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=e[0]/t.height}switch(e[1]){case"left":n=0;break;case"center":n=.5;break;case"right":n=1;break;default:n=e[1]/t.width}return{x:n,y:i}},createWrapper:function(t){if(t.parent().is(".ui-effects-wrapper"))return t.parent();var i={width:t.outerWidth(!0),height:t.outerHeight(!0),"float":t.css("float")},n=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),r={width:t.width(),height:t.height()},o=document.activeElement;try{o.id}catch(e){o=document.body}return t.wrap(n),(t[0]===o||e.contains(t[0],o))&&e(o).focus(),n=t.parent(),"static"===t.css("position")?(n.css({position:"relative"}),t.css({position:"relative"})):(e.extend(i,{position:t.css("position"),zIndex:t.css("z-index")}),e.each(["top","left","bottom","right"],function(e,n){i[n]=t.css(n),isNaN(parseInt(i[n],10))&&(i[n]="auto")}),t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),t.css(r),n.css(i).show()},removeWrapper:function(t){var i=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),(t[0]===i||e.contains(t[0],i))&&e(i).focus()),t},setTransition:function(t,i,n,r){return r=r||{},e.each(i,function(e,i){var o=t.cssUnit(i);o[0]>0&&(r[i]=o[0]*n+o[1])}),r}}),e.fn.extend({effect:function(){function t(t){function i(){e.isFunction(o)&&o.call(r[0]),e.isFunction(t)&&t()}var r=e(this),o=n.complete,a=n.mode;(r.is(":hidden")?"hide"===a:"show"===a)?(r[a](),i()):s.call(r[0],n,i)}var n=i.apply(this,arguments),r=n.mode,o=n.queue,s=e.effects.effect[n.effect];return e.fx.off||!s?r?this[r](n.duration,n.complete):this.each(function(){n.complete&&n.complete.call(this)}):o===!1?this.each(t):this.queue(o||"fx",t)},show:function(e){return function(t){if(n(t))return e.apply(this,arguments);var r=i.apply(this,arguments);return r.mode="show",this.effect.call(this,r)}}(e.fn.show),hide:function(e){return function(t){if(n(t))return e.apply(this,arguments);var r=i.apply(this,arguments);return r.mode="hide",this.effect.call(this,r)}}(e.fn.hide),toggle:function(e){return function(t){if(n(t)||"boolean"==typeof t)return e.apply(this,arguments);var r=i.apply(this,arguments);return r.mode="toggle",this.effect.call(this,r)}}(e.fn.toggle),cssUnit:function(t){var i=this.css(t),n=[];return e.each(["em","px","%","pt"],function(e,t){i.indexOf(t)>0&&(n=[parseFloat(i),t])}),n}})}(),function(){var t={};e.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,i){t[i]=function(t){return Math.pow(t,e+2)}}),e.extend(t,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return 0===e||1===e?e:-Math.pow(2,8*(e-1))*Math.sin((80*(e-1)-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){for(var t,i=4;e<((t=Math.pow(2,--i))-1)/11;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*t-2)/22-e,2)}}),e.each(t,function(t,i){e.easing["easeIn"+t]=i,e.easing["easeOut"+t]=function(e){return 1-i(1-e)},e.easing["easeInOut"+t]=function(e){return e<.5?i(2*e)/2:1-i(e*-2+2)/2}})}(),e.effects}),function(e){"function"==typeof define&&define.amd?define(["jquery","./effect"],e):e(jQuery)}(function(e){return e.effects.effect.size=function(t,i){var n,r,o,s=e(this),a=["position","top","bottom","left","right","width","height","overflow","opacity"],l=["position","top","bottom","left","right","overflow","opacity"],u=["width","height","overflow"],d=["fontSize"],c=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],p=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],f=e.effects.setMode(s,t.mode||"effect"),h=t.restore||"effect"!==f,g=t.scale||"both",m=t.origin||["middle","center"],v=s.css("position"),b=h?a:l,y={height:0,width:0,outerHeight:0,outerWidth:0};"show"===f&&s.show(),n={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()},"toggle"===t.mode&&"show"===f?(s.from=t.to||y,s.to=t.from||n):(s.from=t.from||("show"===f?y:n),s.to=t.to||("hide"===f?y:n)),o={from:{y:s.from.height/n.height,x:s.from.width/n.width},to:{y:s.to.height/n.height,x:s.to.width/n.width}},"box"!==g&&"both"!==g||(o.from.y!==o.to.y&&(b=b.concat(c),s.from=e.effects.setTransition(s,c,o.from.y,s.from),s.to=e.effects.setTransition(s,c,o.to.y,s.to)),o.from.x!==o.to.x&&(b=b.concat(p),s.from=e.effects.setTransition(s,p,o.from.x,s.from),s.to=e.effects.setTransition(s,p,o.to.x,s.to))),"content"!==g&&"both"!==g||o.from.y!==o.to.y&&(b=b.concat(d).concat(u),s.from=e.effects.setTransition(s,d,o.from.y,s.from),s.to=e.effects.setTransition(s,d,o.to.y,s.to)),e.effects.save(s,b),s.show(),e.effects.createWrapper(s),s.css("overflow","hidden").css(s.from),m&&(r=e.effects.getBaseline(m,n),s.from.top=(n.outerHeight-s.outerHeight())*r.y,s.from.left=(n.outerWidth-s.outerWidth())*r.x,s.to.top=(n.outerHeight-s.to.outerHeight)*r.y,s.to.left=(n.outerWidth-s.to.outerWidth)*r.x),s.css(s.from),"content"!==g&&"both"!==g||(c=c.concat(["marginTop","marginBottom"]).concat(d),p=p.concat(["marginLeft","marginRight"]),u=a.concat(c).concat(p),s.find("*[width]").each(function(){var i=e(this),n={height:i.height(),width:i.width(),outerHeight:i.outerHeight(),outerWidth:i.outerWidth()};h&&e.effects.save(i,u),i.from={height:n.height*o.from.y,width:n.width*o.from.x,outerHeight:n.outerHeight*o.from.y,outerWidth:n.outerWidth*o.from.x},i.to={height:n.height*o.to.y,width:n.width*o.to.x,outerHeight:n.height*o.to.y,outerWidth:n.width*o.to.x},o.from.y!==o.to.y&&(i.from=e.effects.setTransition(i,c,o.from.y,i.from),i.to=e.effects.setTransition(i,c,o.to.y,i.to)),o.from.x!==o.to.x&&(i.from=e.effects.setTransition(i,p,o.from.x,i.from),i.to=e.effects.setTransition(i,p,o.to.x,i.to)),i.css(i.from),i.animate(i.to,t.duration,t.easing,function(){h&&e.effects.restore(i,u)})})),s.animate(s.to,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){0===s.to.opacity&&s.css("opacity",s.from.opacity),"hide"===f&&s.hide(),e.effects.restore(s,b),h||("static"===v?s.css({position:"relative",top:s.to.top,left:s.to.left}):e.each(["top","left"],function(e,t){s.css(t,function(t,i){var n=parseInt(i,10),r=e?s.to.left:s.to.top;return"auto"===i?r+"px":n+r+"px"})})),e.effects.removeWrapper(s),i()}})}}),function(e){"function"==typeof define&&define.amd?define(["jquery","./effect","./effect-size"],e):e(jQuery)}(function(e){return e.effects.effect.scale=function(t,i){var n=e(this),r=e.extend(!0,{},t),o=e.effects.setMode(n,t.mode||"effect"),s=parseInt(t.percent,10)||(0===parseInt(t.percent,10)?0:"hide"===o?0:100),a=t.direction||"both",l=t.origin,u={height:n.height(),width:n.width(),outerHeight:n.outerHeight(),outerWidth:n.outerWidth()},d={y:"horizontal"!==a?s/100:1,x:"vertical"!==a?s/100:1};r.effect="size",r.queue=!1,r.complete=i,"effect"!==o&&(r.origin=l||["middle","center"],r.restore=!0),r.from=t.from||("show"===o?{height:0,width:0,outerHeight:0,outerWidth:0}:u),r.to={height:u.height*d.y,width:u.width*d.x,outerHeight:u.outerHeight*d.y,outerWidth:u.outerWidth*d.x},r.fade&&("show"===o&&(r.from.opacity=0,r.to.opacity=1),"hide"===o&&(r.from.opacity=1,r.to.opacity=0)),n.effect(r)}});