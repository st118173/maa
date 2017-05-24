!function(e,t){"function"==typeof define&&define.amd?define(["jquery"],function(e){return t(e)}):"object"==typeof exports?module.exports=t(require("jquery")):t(jQuery)}(this,function(e){!function(e){"use strict";function t(t){var n=[{re:/[\xC0-\xC6]/g,ch:"A"},{re:/[\xE0-\xE6]/g,ch:"a"},{re:/[\xC8-\xCB]/g,ch:"E"},{re:/[\xE8-\xEB]/g,ch:"e"},{re:/[\xCC-\xCF]/g,ch:"I"},{re:/[\xEC-\xEF]/g,ch:"i"},{re:/[\xD2-\xD6]/g,ch:"O"},{re:/[\xF2-\xF6]/g,ch:"o"},{re:/[\xD9-\xDC]/g,ch:"U"},{re:/[\xF9-\xFC]/g,ch:"u"},{re:/[\xC7-\xE7]/g,ch:"c"},{re:/[\xD1]/g,ch:"N"},{re:/[\xF1]/g,ch:"n"}];return e.each(n,function(){t=t.replace(this.re,this.ch)}),t}function n(e){var t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},n="(?:"+Object.keys(t).join("|")+")",i=new RegExp(n),r=new RegExp(n,"g"),o=null==e?"":""+e;return i.test(o)?o.replace(r,function(e){return t[e]}):o}function i(t,n){var i=arguments,o=t,s=n;[].shift.apply(i);var a,l=this.each(function(){var t=e(this);if(t.is("select")){var n=t.data("selectpicker"),l="object"==typeof o&&o;if(n){if(l)for(var u in l)l.hasOwnProperty(u)&&(n.options[u]=l[u])}else{var d=e.extend({},r.DEFAULTS,e.fn.selectpicker.defaults||{},t.data(),l);d.template=e.extend({},r.DEFAULTS.template,e.fn.selectpicker.defaults?e.fn.selectpicker.defaults.template:{},t.data().template,l.template),t.data("selectpicker",n=new r(this,d,s))}"string"==typeof o&&(a=n[o]instanceof Function?n[o].apply(n,i):n.options[o])}});return"undefined"!=typeof a?a:l}String.prototype.includes||!function(){var e={}.toString,t=function(){try{var e={},t=Object.defineProperty,n=t(e,e,e)&&t}catch(e){}return n}(),n="".indexOf,i=function(t){if(null==this)throw new TypeError;var i=String(this);if(t&&"[object RegExp]"==e.call(t))throw new TypeError;var r=i.length,o=String(t),s=o.length,a=arguments.length>1?arguments[1]:void 0,l=a?Number(a):0;l!=l&&(l=0);var u=Math.min(Math.max(l,0),r);return!(s+u>r)&&-1!=n.call(i,o,l)};t?t(String.prototype,"includes",{value:i,configurable:!0,writable:!0}):String.prototype.includes=i}(),String.prototype.startsWith||!function(){var e=function(){try{var e={},t=Object.defineProperty,n=t(e,e,e)&&t}catch(e){}return n}(),t={}.toString,n=function(e){if(null==this)throw new TypeError;var n=String(this);if(e&&"[object RegExp]"==t.call(e))throw new TypeError;var i=n.length,r=String(e),o=r.length,s=arguments.length>1?arguments[1]:void 0,a=s?Number(s):0;a!=a&&(a=0);var l=Math.min(Math.max(a,0),i);if(o+l>i)return!1;for(var u=-1;++u<o;)if(n.charCodeAt(l+u)!=r.charCodeAt(u))return!1;return!0};e?e(String.prototype,"startsWith",{value:n,configurable:!0,writable:!0}):String.prototype.startsWith=n}(),Object.keys||(Object.keys=function(e,t,n){n=[];for(t in e)n.hasOwnProperty.call(e,t)&&n.push(t);return n}),e.fn.triggerNative=function(e){var t,n=this[0];n.dispatchEvent?("function"==typeof Event?t=new Event(e,{bubbles:!0}):(t=document.createEvent("Event"),t.initEvent(e,!0,!1)),n.dispatchEvent(t)):(n.fireEvent&&(t=document.createEventObject(),t.eventType=e,n.fireEvent("on"+e,t)),this.trigger(e))},e.expr[":"].icontains=function(t,n,i){var r=e(t),o=(r.data("tokens")||r.text()).toUpperCase();return o.includes(i[3].toUpperCase())},e.expr[":"].ibegins=function(t,n,i){var r=e(t),o=(r.data("tokens")||r.text()).toUpperCase();return o.startsWith(i[3].toUpperCase())},e.expr[":"].aicontains=function(t,n,i){var r=e(t),o=(r.data("tokens")||r.data("normalizedText")||r.text()).toUpperCase();return o.includes(i[3].toUpperCase())},e.expr[":"].aibegins=function(t,n,i){var r=e(t),o=(r.data("tokens")||r.data("normalizedText")||r.text()).toUpperCase();return o.startsWith(i[3].toUpperCase())};var r=function(t,n,i){i&&(i.stopPropagation(),i.preventDefault()),this.$element=e(t),this.$newElement=null,this.$button=null,this.$menu=null,this.$lis=null,this.options=n,null===this.options.title&&(this.options.title=this.$element.attr("title")),this.val=r.prototype.val,this.render=r.prototype.render,this.refresh=r.prototype.refresh,this.setStyle=r.prototype.setStyle,this.selectAll=r.prototype.selectAll,this.deselectAll=r.prototype.deselectAll,this.destroy=r.prototype.destroy,this.remove=r.prototype.remove,this.show=r.prototype.show,this.hide=r.prototype.hide,this.init()};r.VERSION="1.10.0",r.DEFAULTS={noneSelectedText:"Nothing selected",noneResultsText:"No results matched {0}",countSelectedText:function(e){return 1==e?"{0} item selected":"{0} items selected"},maxOptionsText:function(e,t){return[1==e?"Limit reached ({n} item max)":"Limit reached ({n} items max)",1==t?"Group limit reached ({n} item max)":"Group limit reached ({n} items max)"]},selectAllText:"Select All",deselectAllText:"Deselect All",doneButton:!1,doneButtonText:"Close",multipleSeparator:", ",styleBase:"btn",style:"btn-default",size:"auto",title:null,selectedTextFormat:"values",width:!1,container:!1,hideDisabled:!1,showSubtext:!1,showIcon:!0,showContent:!0,dropupAuto:!0,header:!1,liveSearch:!1,liveSearchPlaceholder:null,liveSearchNormalize:!1,liveSearchStyle:"contains",actionsBox:!1,iconBase:"glyphicon",tickIcon:"glyphicon-ok",showTick:!1,template:{caret:'<span class="caret"></span>'},maxOptions:!1,mobile:!1,selectOnTab:!1,dropdownAlignRight:!1},r.prototype={constructor:r,init:function(){var t=this,n=this.$element.attr("id");this.$element.addClass("bs-select-hidden"),this.liObj={},this.multiple=this.$element.prop("multiple"),this.autofocus=this.$element.prop("autofocus"),this.$newElement=this.createView(),this.$element.after(this.$newElement).appendTo(this.$newElement),this.$button=this.$newElement.children("button"),this.$menu=this.$newElement.children(".dropdown-menu"),this.$menuInner=this.$menu.children(".inner"),this.$searchbox=this.$menu.find("input"),this.$element.removeClass("bs-select-hidden"),this.options.dropdownAlignRight&&this.$menu.addClass("dropdown-menu-right"),"undefined"!=typeof n&&(this.$button.attr("data-id",n),e('label[for="'+n+'"]').click(function(e){e.preventDefault(),t.$button.focus()})),this.checkDisabled(),this.clickListener(),this.options.liveSearch&&this.liveSearchListener(),this.render(),this.setStyle(),this.setWidth(),this.options.container&&this.selectPosition(),this.$menu.data("this",this),this.$newElement.data("this",this),this.options.mobile&&this.mobile(),this.$newElement.on({"hide.bs.dropdown":function(e){t.$element.trigger("hide.bs.select",e)},"hidden.bs.dropdown":function(e){t.$element.trigger("hidden.bs.select",e)},"show.bs.dropdown":function(e){t.$element.trigger("show.bs.select",e)},"shown.bs.dropdown":function(e){t.$element.trigger("shown.bs.select",e)}}),t.$element[0].hasAttribute("required")&&this.$element.on("invalid",function(){t.$button.addClass("bs-invalid").focus(),t.$element.on({"focus.bs.select":function(){t.$button.focus(),t.$element.off("focus.bs.select")},"shown.bs.select":function(){t.$element.val(t.$element.val()).off("shown.bs.select")},"rendered.bs.select":function(){this.validity.valid&&t.$button.removeClass("bs-invalid"),t.$element.off("rendered.bs.select")}})}),setTimeout(function(){t.$element.trigger("loaded.bs.select")})},createDropdown:function(){var t=this.multiple||this.options.showTick?" show-tick":"",i=this.$element.parent().hasClass("input-group")?" input-group-btn":"",r=this.autofocus?" autofocus":"",o=this.options.header?'<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>'+this.options.header+"</div>":"",s=this.options.liveSearch?'<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"'+(null===this.options.liveSearchPlaceholder?"":' placeholder="'+n(this.options.liveSearchPlaceholder)+'"')+"></div>":"",a=this.multiple&&this.options.actionsBox?'<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default">'+this.options.selectAllText+'</button><button type="button" class="actions-btn bs-deselect-all btn btn-default">'+this.options.deselectAllText+"</button></div></div>":"",l=this.multiple&&this.options.doneButton?'<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default">'+this.options.doneButtonText+"</button></div></div>":"",u='<div class="btn-group bootstrap-select'+t+i+'"><button type="button" class="'+this.options.styleBase+' dropdown-toggle" data-toggle="dropdown"'+r+'><span class="filter-option pull-left"></span>&nbsp;<span class="bs-caret">'+this.options.template.caret+'</span></button><div class="dropdown-menu open">'+o+s+a+'<ul class="dropdown-menu inner" role="menu"></ul>'+l+"</div></div>";return e(u)},createView:function(){var e=this.createDropdown(),t=this.createLi();return e.find("ul")[0].innerHTML=t,e},reloadLi:function(){this.destroyLi();var e=this.createLi();this.$menuInner[0].innerHTML=e},destroyLi:function(){this.$menu.find("li").remove()},createLi:function(){var i=this,r=[],o=0,s=document.createElement("option"),a=-1,l=function(e,t,n,i){return"<li"+("undefined"!=typeof n&""!==n?' class="'+n+'"':"")+("undefined"!=typeof t&null!==t?' data-original-index="'+t+'"':"")+("undefined"!=typeof i&null!==i?'data-optgroup="'+i+'"':"")+">"+e+"</li>"},u=function(e,r,o,s){return'<a tabindex="0"'+("undefined"!=typeof r?' class="'+r+'"':"")+("undefined"!=typeof o?' style="'+o+'"':"")+(i.options.liveSearchNormalize?' data-normalized-text="'+t(n(e))+'"':"")+("undefined"!=typeof s||null!==s?' data-tokens="'+s+'"':"")+">"+e+'<span class="'+i.options.iconBase+" "+i.options.tickIcon+' check-mark"></span></a>'};if(this.options.title&&!this.multiple&&(a--,!this.$element.find(".bs-title-option").length)){var d=this.$element[0];s.className="bs-title-option",s.appendChild(document.createTextNode(this.options.title)),s.value="",d.insertBefore(s,d.firstChild),void 0===e(d.options[d.selectedIndex]).attr("selected")&&(s.selected=!0)}return this.$element.find("option").each(function(t){var n=e(this);if(a++,!n.hasClass("bs-title-option")){var s=this.className||"",d=this.style.cssText,c=n.data("content")?n.data("content"):n.html(),h=n.data("tokens")?n.data("tokens"):null,p="undefined"!=typeof n.data("subtext")?'<small class="text-muted">'+n.data("subtext")+"</small>":"",f="undefined"!=typeof n.data("icon")?'<span class="'+i.options.iconBase+" "+n.data("icon")+'"></span> ':"",m="OPTGROUP"===this.parentNode.tagName,g=this.disabled||m&&this.parentNode.disabled;if(""!==f&&g&&(f="<span>"+f+"</span>"),i.options.hideDisabled&&g&&!m)return void a--;if(n.data("content")||(c=f+'<span class="text">'+c+p+"</span>"),m&&n.data("divider")!==!0){var v=" "+this.parentNode.className||"";if(0===n.index()){o+=1;var y=this.parentNode.label,b="undefined"!=typeof n.parent().data("subtext")?'<small class="text-muted">'+n.parent().data("subtext")+"</small>":"",_=n.parent().data("icon")?'<span class="'+i.options.iconBase+" "+n.parent().data("icon")+'"></span> ':"";y=_+'<span class="text">'+y+b+"</span>",0!==t&&r.length>0&&(a++,r.push(l("",null,"divider",o+"div"))),a++,r.push(l(y,null,"dropdown-header"+v,o))}if(i.options.hideDisabled&&g)return void a--;r.push(l(u(c,"opt "+s+v,d,h),t,"",o))}else n.data("divider")===!0?r.push(l("",t,"divider")):n.data("hidden")===!0?r.push(l(u(c,s,d,h),t,"hidden is-hidden")):(this.previousElementSibling&&"OPTGROUP"===this.previousElementSibling.tagName&&(a++,r.push(l("",null,"divider",o+"div"))),r.push(l(u(c,s,d,h),t)));i.liObj[t]=a}}),this.multiple||0!==this.$element.find("option:selected").length||this.options.title||this.$element.find("option").eq(0).prop("selected",!0).attr("selected","selected"),r.join("")},findLis:function(){return null==this.$lis&&(this.$lis=this.$menu.find("li")),this.$lis},render:function(t){var n,i=this;t!==!1&&this.$element.find("option").each(function(e){var t=i.findLis().eq(i.liObj[e]);i.setDisabled(e,this.disabled||"OPTGROUP"===this.parentNode.tagName&&this.parentNode.disabled,t),i.setSelected(e,this.selected,t)}),this.tabIndex();var r=this.$element.find("option").map(function(){if(this.selected){if(i.options.hideDisabled&&(this.disabled||"OPTGROUP"===this.parentNode.tagName&&this.parentNode.disabled))return;var t,n=e(this),r=n.data("icon")&&i.options.showIcon?'<i class="'+i.options.iconBase+" "+n.data("icon")+'"></i> ':"";return t=i.options.showSubtext&&n.data("subtext")&&!i.multiple?' <small class="text-muted">'+n.data("subtext")+"</small>":"","undefined"!=typeof n.attr("title")?n.attr("title"):n.data("content")&&i.options.showContent?n.data("content"):r+n.html()+t}}).toArray(),o=this.multiple?r.join(this.options.multipleSeparator):r[0];if(this.multiple&&this.options.selectedTextFormat.indexOf("count")>-1){var s=this.options.selectedTextFormat.split(">");if(s.length>1&&r.length>s[1]||1==s.length&&r.length>=2){n=this.options.hideDisabled?", [disabled]":"";var a=this.$element.find("option").not('[data-divider="true"], [data-hidden="true"]'+n).length,l="function"==typeof this.options.countSelectedText?this.options.countSelectedText(r.length,a):this.options.countSelectedText;o=l.replace("{0}",r.length.toString()).replace("{1}",a.toString())}}void 0==this.options.title&&(this.options.title=this.$element.attr("title")),"static"==this.options.selectedTextFormat&&(o=this.options.title),o||(o="undefined"!=typeof this.options.title?this.options.title:this.options.noneSelectedText),this.$button.attr("title",e.trim(o.replace(/<[^>]*>?/g,""))),this.$button.children(".filter-option").html(o),this.$element.trigger("rendered.bs.select")},setStyle:function(e,t){this.$element.attr("class")&&this.$newElement.addClass(this.$element.attr("class").replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi,""));var n=e?e:this.options.style;"add"==t?this.$button.addClass(n):"remove"==t?this.$button.removeClass(n):(this.$button.removeClass(this.options.style),this.$button.addClass(n))},liHeight:function(t){if(t||this.options.size!==!1&&!this.sizeInfo){var n=document.createElement("div"),i=document.createElement("div"),r=document.createElement("ul"),o=document.createElement("li"),s=document.createElement("li"),a=document.createElement("a"),l=document.createElement("span"),u=this.options.header&&this.$menu.find(".popover-title").length>0?this.$menu.find(".popover-title")[0].cloneNode(!0):null,d=this.options.liveSearch?document.createElement("div"):null,c=this.options.actionsBox&&this.multiple&&this.$menu.find(".bs-actionsbox").length>0?this.$menu.find(".bs-actionsbox")[0].cloneNode(!0):null,h=this.options.doneButton&&this.multiple&&this.$menu.find(".bs-donebutton").length>0?this.$menu.find(".bs-donebutton")[0].cloneNode(!0):null;if(l.className="text",n.className=this.$menu[0].parentNode.className+" open",i.className="dropdown-menu open",r.className="dropdown-menu inner",o.className="divider",l.appendChild(document.createTextNode("Inner text")),a.appendChild(l),s.appendChild(a),r.appendChild(s),r.appendChild(o),u&&i.appendChild(u),d){var p=document.createElement("span");d.className="bs-searchbox",p.className="form-control",d.appendChild(p),i.appendChild(d)}c&&i.appendChild(c),i.appendChild(r),h&&i.appendChild(h),n.appendChild(i),document.body.appendChild(n);var f=a.offsetHeight,m=u?u.offsetHeight:0,g=d?d.offsetHeight:0,v=c?c.offsetHeight:0,y=h?h.offsetHeight:0,b=e(o).outerHeight(!0),_="function"==typeof getComputedStyle&&getComputedStyle(i),w=_?null:e(i),x=parseInt(_?_.paddingTop:w.css("paddingTop"))+parseInt(_?_.paddingBottom:w.css("paddingBottom"))+parseInt(_?_.borderTopWidth:w.css("borderTopWidth"))+parseInt(_?_.borderBottomWidth:w.css("borderBottomWidth")),k=x+parseInt(_?_.marginTop:w.css("marginTop"))+parseInt(_?_.marginBottom:w.css("marginBottom"))+2;document.body.removeChild(n),this.sizeInfo={liHeight:f,headerHeight:m,searchHeight:g,actionsHeight:v,doneButtonHeight:y,dividerHeight:b,menuPadding:x,menuExtras:k}}},setSize:function(){if(this.findLis(),this.liHeight(),this.options.header&&this.$menu.css("padding-top",0),this.options.size!==!1){var t,n,i,r,o=this,s=this.$menu,a=this.$menuInner,l=e(window),u=this.$newElement[0].offsetHeight,d=this.sizeInfo.liHeight,c=this.sizeInfo.headerHeight,h=this.sizeInfo.searchHeight,p=this.sizeInfo.actionsHeight,f=this.sizeInfo.doneButtonHeight,m=this.sizeInfo.dividerHeight,g=this.sizeInfo.menuPadding,v=this.sizeInfo.menuExtras,y=this.options.hideDisabled?".disabled":"",b=function(){i=o.$newElement.offset().top-l.scrollTop(),r=l.height()-i-u};if(b(),"auto"===this.options.size){var _=function(){var l,u=function(t,n){return function(i){return n?i.classList?i.classList.contains(t):e(i).hasClass(t):!(i.classList?i.classList.contains(t):e(i).hasClass(t))}},m=o.$menuInner[0].getElementsByTagName("li"),y=Array.prototype.filter?Array.prototype.filter.call(m,u("hidden",!1)):o.$lis.not(".hidden"),_=Array.prototype.filter?Array.prototype.filter.call(y,u("dropdown-header",!0)):y.filter(".dropdown-header");b(),t=r-v,o.options.container?(s.data("height")||s.data("height",s.height()),n=s.data("height")):n=s.height(),o.options.dropupAuto&&o.$newElement.toggleClass("dropup",i>r&&n>t-v),o.$newElement.hasClass("dropup")&&(t=i-v),l=y.length+_.length>3?3*d+v-2:0,s.css({"max-height":t+"px",overflow:"hidden","min-height":l+c+h+p+f+"px"}),a.css({"max-height":t-c-h-p-f-g+"px","overflow-y":"auto","min-height":Math.max(l-g,0)+"px"})};_(),this.$searchbox.off("input.getSize propertychange.getSize").on("input.getSize propertychange.getSize",_),l.off("resize.getSize scroll.getSize").on("resize.getSize scroll.getSize",_)}else if(this.options.size&&"auto"!=this.options.size&&this.$lis.not(y).length>this.options.size){var w=this.$lis.not(".divider").not(y).children().slice(0,this.options.size).last().parent().index(),x=this.$lis.slice(0,w+1).filter(".divider").length;t=d*this.options.size+x*m+g,o.options.container?(s.data("height")||s.data("height",s.height()),n=s.data("height")):n=s.height(),o.options.dropupAuto&&this.$newElement.toggleClass("dropup",i>r&&n>t-v),s.css({"max-height":t+c+h+p+f+"px",overflow:"hidden","min-height":""}),a.css({"max-height":t-g+"px","overflow-y":"auto","min-height":""})}}},setWidth:function(){if("auto"===this.options.width){this.$menu.css("min-width","0");var e=this.$menu.parent().clone().appendTo("body"),t=this.options.container?this.$newElement.clone().appendTo("body"):e,n=e.children(".dropdown-menu").outerWidth(),i=t.css("width","auto").children("button").outerWidth();e.remove(),t.remove(),this.$newElement.css("width",Math.max(n,i)+"px")}else"fit"===this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width","").addClass("fit-width")):this.options.width?(this.$menu.css("min-width",""),this.$newElement.css("width",this.options.width)):(this.$menu.css("min-width",""),this.$newElement.css("width",""));this.$newElement.hasClass("fit-width")&&"fit"!==this.options.width&&this.$newElement.removeClass("fit-width")},selectPosition:function(){this.$bsContainer=e('<div class="bs-container" />');var t,n,i=this,r=function(e){i.$bsContainer.addClass(e.attr("class").replace(/form-control|fit-width/gi,"")).toggleClass("dropup",e.hasClass("dropup")),t=e.offset(),n=e.hasClass("dropup")?0:e[0].offsetHeight,i.$bsContainer.css({top:t.top+n,left:t.left,width:e[0].offsetWidth})};this.$button.on("click",function(){var t=e(this);i.isDisabled()||(r(i.$newElement),i.$bsContainer.appendTo(i.options.container).toggleClass("open",!t.hasClass("open")).append(i.$menu))}),e(window).on("resize scroll",function(){r(i.$newElement)}),this.$element.on("hide.bs.select",function(){i.$menu.data("height",i.$menu.height()),i.$bsContainer.detach()})},setSelected:function(e,t,n){n||(n=this.findLis().eq(this.liObj[e])),n.toggleClass("selected",t)},setDisabled:function(e,t,n){n||(n=this.findLis().eq(this.liObj[e])),t?n.addClass("disabled").children("a").attr("href","#").attr("tabindex",-1):n.removeClass("disabled").children("a").removeAttr("href").attr("tabindex",0)},isDisabled:function(){return this.$element[0].disabled},checkDisabled:function(){var e=this;this.isDisabled()?(this.$newElement.addClass("disabled"),this.$button.addClass("disabled").attr("tabindex",-1)):(this.$button.hasClass("disabled")&&(this.$newElement.removeClass("disabled"),this.$button.removeClass("disabled")),-1!=this.$button.attr("tabindex")||this.$element.data("tabindex")||this.$button.removeAttr("tabindex")),this.$button.click(function(){return!e.isDisabled()})},tabIndex:function(){this.$element.data("tabindex")!==this.$element.attr("tabindex")&&-98!==this.$element.attr("tabindex")&&"-98"!==this.$element.attr("tabindex")&&(this.$element.data("tabindex",this.$element.attr("tabindex")),this.$button.attr("tabindex",this.$element.data("tabindex"))),this.$element.attr("tabindex",-98)},clickListener:function(){var t=this,n=e(document);this.$newElement.on("touchstart.dropdown",".dropdown-menu",function(e){e.stopPropagation()}),n.data("spaceSelect",!1),this.$button.on("keyup",function(e){/(32)/.test(e.keyCode.toString(10))&&n.data("spaceSelect")&&(e.preventDefault(),n.data("spaceSelect",!1))}),this.$button.on("click",function(){t.setSize()}),this.$element.on("shown.bs.select",function(){if(t.options.liveSearch||t.multiple){if(!t.multiple){var e=t.liObj[t.$element[0].selectedIndex];if("number"!=typeof e||t.options.size===!1)return;var n=t.$lis.eq(e)[0].offsetTop-t.$menuInner[0].offsetTop;n=n-t.$menuInner[0].offsetHeight/2+t.sizeInfo.liHeight/2,t.$menuInner[0].scrollTop=n}}else t.$menuInner.find(".selected a").focus()}),this.$menuInner.on("click","li a",function(n){var i=e(this),r=i.parent().data("originalIndex"),o=t.$element.val(),s=t.$element.prop("selectedIndex");if(t.multiple&&n.stopPropagation(),n.preventDefault(),!t.isDisabled()&&!i.parent().hasClass("disabled")){var a=t.$element.find("option"),l=a.eq(r),u=l.prop("selected"),d=l.parent("optgroup"),c=t.options.maxOptions,h=d.data("maxOptions")||!1;if(t.multiple){if(l.prop("selected",!u),t.setSelected(r,!u),i.blur(),c!==!1||h!==!1){var p=c<a.filter(":selected").length,f=h<d.find("option:selected").length;if(c&&p||h&&f)if(c&&1==c)a.prop("selected",!1),l.prop("selected",!0),t.$menuInner.find(".selected").removeClass("selected"),t.setSelected(r,!0);else if(h&&1==h){d.find("option:selected").prop("selected",!1),l.prop("selected",!0);var m=i.parent().data("optgroup");t.$menuInner.find('[data-optgroup="'+m+'"]').removeClass("selected"),t.setSelected(r,!0)}else{var g="function"==typeof t.options.maxOptionsText?t.options.maxOptionsText(c,h):t.options.maxOptionsText,v=g[0].replace("{n}",c),y=g[1].replace("{n}",h),b=e('<div class="notify"></div>');g[2]&&(v=v.replace("{var}",g[2][c>1?0:1]),y=y.replace("{var}",g[2][h>1?0:1])),l.prop("selected",!1),t.$menu.append(b),c&&p&&(b.append(e("<div>"+v+"</div>")),t.$element.trigger("maxReached.bs.select")),h&&f&&(b.append(e("<div>"+y+"</div>")),t.$element.trigger("maxReachedGrp.bs.select")),setTimeout(function(){t.setSelected(r,!1)},10),b.delay(750).fadeOut(300,function(){e(this).remove()})}}}else a.prop("selected",!1),l.prop("selected",!0),t.$menuInner.find(".selected").removeClass("selected"),t.setSelected(r,!0);t.multiple?t.options.liveSearch&&t.$searchbox.focus():t.$button.focus(),(o!=t.$element.val()&&t.multiple||s!=t.$element.prop("selectedIndex")&&!t.multiple)&&t.$element.trigger("changed.bs.select",[r,l.prop("selected"),u]).triggerNative("change")}}),this.$menu.on("click","li.disabled a, .popover-title, .popover-title :not(.close)",function(n){n.currentTarget==this&&(n.preventDefault(),n.stopPropagation(),t.options.liveSearch&&!e(n.target).hasClass("close")?t.$searchbox.focus():t.$button.focus())}),this.$menuInner.on("click",".divider, .dropdown-header",function(e){e.preventDefault(),e.stopPropagation(),t.options.liveSearch?t.$searchbox.focus():t.$button.focus()}),this.$menu.on("click",".popover-title .close",function(){t.$button.click()}),this.$searchbox.on("click",function(e){e.stopPropagation()}),this.$menu.on("click",".actions-btn",function(n){t.options.liveSearch?t.$searchbox.focus():t.$button.focus(),n.preventDefault(),n.stopPropagation(),e(this).hasClass("bs-select-all")?t.selectAll():t.deselectAll()}),this.$element.change(function(){t.render(!1)})},liveSearchListener:function(){var i=this,r=e('<li class="no-results"></li>');this.$button.on("click.dropdown.data-api touchstart.dropdown.data-api",function(){i.$menuInner.find(".active").removeClass("active"),i.$searchbox.val()&&(i.$searchbox.val(""),i.$lis.not(".is-hidden").removeClass("hidden"),r.parent().length&&r.remove()),i.multiple||i.$menuInner.find(".selected").addClass("active"),setTimeout(function(){i.$searchbox.focus()},10)}),this.$searchbox.on("click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api",function(e){e.stopPropagation()}),this.$searchbox.on("input propertychange",function(){if(i.$searchbox.val()){var o=i.$lis.not(".is-hidden").removeClass("hidden").children("a");o=i.options.liveSearchNormalize?o.not(":a"+i._searchStyle()+'("'+t(i.$searchbox.val())+'")'):o.not(":"+i._searchStyle()+'("'+i.$searchbox.val()+'")'),o.parent().addClass("hidden"),i.$lis.filter(".dropdown-header").each(function(){var t=e(this),n=t.data("optgroup");0===i.$lis.filter("[data-optgroup="+n+"]").not(t).not(".hidden").length&&(t.addClass("hidden"),i.$lis.filter("[data-optgroup="+n+"div]").addClass("hidden"))});var s=i.$lis.not(".hidden");s.each(function(t){var n=e(this);n.hasClass("divider")&&(n.index()===s.first().index()||n.index()===s.last().index()||s.eq(t+1).hasClass("divider"))&&n.addClass("hidden")}),i.$lis.not(".hidden, .no-results").length?r.parent().length&&r.remove():(r.parent().length&&r.remove(),r.html(i.options.noneResultsText.replace("{0}",'"'+n(i.$searchbox.val())+'"')).show(),i.$menuInner.append(r))}else i.$lis.not(".is-hidden").removeClass("hidden"),r.parent().length&&r.remove();i.$lis.filter(".active").removeClass("active"),i.$searchbox.val()&&i.$lis.not(".hidden, .divider, .dropdown-header").eq(0).addClass("active").children("a").focus(),e(this).focus()})},_searchStyle:function(){var e={begins:"ibegins",startsWith:"ibegins"};return e[this.options.liveSearchStyle]||"icontains"},val:function(e){return"undefined"!=typeof e?(this.$element.val(e),this.render(),this.$element):this.$element.val()},changeAll:function(t){"undefined"==typeof t&&(t=!0),this.findLis();for(var n=this.$element.find("option"),i=this.$lis.not(".divider, .dropdown-header, .disabled, .hidden").toggleClass("selected",t),r=i.length,o=[],s=0;r>s;s++){var a=i[s].getAttribute("data-original-index");o[o.length]=n.eq(a)[0]}e(o).prop("selected",t),this.render(!1),this.$element.trigger("changed.bs.select").triggerNative("change")},selectAll:function(){return this.changeAll(!0)},deselectAll:function(){return this.changeAll(!1)},toggle:function(e){e=e||window.event,e&&e.stopPropagation(),this.$button.trigger("click")},keydown:function(n){var i,r,o,s,a,l,u,d,c,h=e(this),p=h.is("input")?h.parent().parent():h.parent(),f=p.data("this"),m=":not(.disabled, .hidden, .dropdown-header, .divider)",g={32:" ",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9"};if(f.options.liveSearch&&(p=h.parent().parent()),f.options.container&&(p=f.$menu),i=e("[role=menu] li",p),c=f.$newElement.hasClass("open"),!c&&(n.keyCode>=48&&n.keyCode<=57||n.keyCode>=96&&n.keyCode<=105||n.keyCode>=65&&n.keyCode<=90)&&(f.options.container?f.$button.trigger("click"):(f.setSize(),f.$menu.parent().addClass("open"),c=!0),f.$searchbox.focus()),f.options.liveSearch&&(/(^9$|27)/.test(n.keyCode.toString(10))&&c&&0===f.$menu.find(".active").length&&(n.preventDefault(),f.$menu.parent().removeClass("open"),f.options.container&&f.$newElement.removeClass("open"),f.$button.focus()),i=e("[role=menu] li"+m,p),h.val()||/(38|40)/.test(n.keyCode.toString(10))||0===i.filter(".active").length&&(i=f.$menuInner.find("li"),i=f.options.liveSearchNormalize?i.filter(":a"+f._searchStyle()+"("+t(g[n.keyCode])+")"):i.filter(":"+f._searchStyle()+"("+g[n.keyCode]+")"))),i.length){if(/(38|40)/.test(n.keyCode.toString(10)))r=i.index(i.find("a").filter(":focus").parent()),s=i.filter(m).first().index(),a=i.filter(m).last().index(),o=i.eq(r).nextAll(m).eq(0).index(),l=i.eq(r).prevAll(m).eq(0).index(),u=i.eq(o).prevAll(m).eq(0).index(),f.options.liveSearch&&(i.each(function(t){e(this).hasClass("disabled")||e(this).data("index",t)}),r=i.index(i.filter(".active")),s=i.first().data("index"),a=i.last().data("index"),o=i.eq(r).nextAll().eq(0).data("index"),l=i.eq(r).prevAll().eq(0).data("index"),u=i.eq(o).prevAll().eq(0).data("index")),d=h.data("prevIndex"),38==n.keyCode?(f.options.liveSearch&&r--,r!=u&&r>l&&(r=l),s>r&&(r=s),r==d&&(r=a)):40==n.keyCode&&(f.options.liveSearch&&r++,-1==r&&(r=0),r!=u&&o>r&&(r=o),r>a&&(r=a),r==d&&(r=s)),h.data("prevIndex",r),f.options.liveSearch?(n.preventDefault(),h.hasClass("dropdown-toggle")||(i.removeClass("active").eq(r).addClass("active").children("a").focus(),h.focus())):i.eq(r).children("a").focus();else if(!h.is("input")){var v,y,b=[];i.each(function(){e(this).hasClass("disabled")||e.trim(e(this).children("a").text().toLowerCase()).substring(0,1)==g[n.keyCode]&&b.push(e(this).index())}),v=e(document).data("keycount"),v++,e(document).data("keycount",v),y=e.trim(e(":focus").text().toLowerCase()).substring(0,1),y!=g[n.keyCode]?(v=1,e(document).data("keycount",v)):v>=b.length&&(e(document).data("keycount",0),v>b.length&&(v=1)),i.eq(b[v-1]).children("a").focus()}if((/(13|32)/.test(n.keyCode.toString(10))||/(^9$)/.test(n.keyCode.toString(10))&&f.options.selectOnTab)&&c){if(/(32)/.test(n.keyCode.toString(10))||n.preventDefault(),f.options.liveSearch)/(32)/.test(n.keyCode.toString(10))||(f.$menuInner.find(".active a").click(),h.focus());else{var _=e(":focus");_.click(),_.focus(),n.preventDefault(),e(document).data("spaceSelect",!0)}e(document).data("keycount",0)}(/(^9$|27)/.test(n.keyCode.toString(10))&&c&&(f.multiple||f.options.liveSearch)||/(27)/.test(n.keyCode.toString(10))&&!c)&&(f.$menu.parent().removeClass("open"),f.options.container&&f.$newElement.removeClass("open"),f.$button.focus())}},mobile:function(){this.$element.addClass("mobile-device")},refresh:function(){this.$lis=null,this.liObj={},this.reloadLi(),this.render(),this.checkDisabled(),this.liHeight(!0),this.setStyle(),this.setWidth(),this.$lis&&this.$searchbox.trigger("propertychange"),this.$element.trigger("refreshed.bs.select")},hide:function(){this.$newElement.hide()},show:function(){this.$newElement.show()},remove:function(){this.$newElement.remove(),this.$element.remove()},destroy:function(){this.$newElement.before(this.$element).remove(),this.$bsContainer?this.$bsContainer.remove():this.$menu.remove(),this.$element.off(".bs.select").removeData("selectpicker").removeClass("bs-select-hidden selectpicker")}};var o=e.fn.selectpicker;e.fn.selectpicker=i,e.fn.selectpicker.Constructor=r,e.fn.selectpicker.noConflict=function(){return e.fn.selectpicker=o,this},e(document).data("keycount",0).on("keydown.bs.select",'.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input',r.prototype.keydown).on("focusin.modal",'.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input',function(e){e.stopPropagation()}),e(window).on("load.bs.select.data-api",function(){e(".selectpicker").each(function(){var t=e(this);i.call(t,t.data())})})}(e)});