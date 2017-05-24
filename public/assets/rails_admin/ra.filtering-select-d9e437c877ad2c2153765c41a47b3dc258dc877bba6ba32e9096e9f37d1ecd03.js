!function(e){"use strict";e.widget("ra.filteringSelect",{options:{createQuery:function(e){return{query:e}},minLength:0,searchDelay:200,remote_source:null,source:null,xhr:!1},button:null,input:null,select:null,_create:function(){var e=this.element.siblings('[data-input-for="'+this.element.attr("id")+'"]');return e.size()>0?(this.input=e.children("input"),this.button=e.children(".input-group-btn")):(this.element.hide(),e=this._inputGroup(this.element.attr("id")),this.input=this._inputField(),this.button=this._buttonField()),this._setOptionsSource(),this._initAutocomplete(),this._initKeyEvent(),this._overloadRenderItem(),this._autocompleteDropdownEvent(this.button),e.append(this.input).append(this.button).insertAfter(this.element)},_getResultSet:function(t,n,i){var r=new RegExp(e.ui.autocomplete.escapeRegex(t.term),"i"),o=function(t){return e("<span>").text(t).html()},s=function(t,n){return n.length?e.map(t.split(n),function(e){return o(e)}).join(e("<strong>").text(n)[0].outerHTML):o(t)};return e.map(n,function(e){var n=e.id||e.value,o=e.label||e.id;if(n&&(i||r.test(e.label)))return{html:s(o,t.term),value:o,id:n}})},_getSourceFunction:function(t){var n=this,i=0;return e.isArray(t)?function(e,i){i(n._getResultSet(e,t,!1))}:"string"==typeof t?function(r,o){this.xhr&&this.xhr.abort(),this.xhr=e.ajax({url:t,data:n.options.createQuery(r.term),dataType:"json",autocompleteRequest:++i,success:function(e){this.autocompleteRequest===i&&o(n._getResultSet(r,e,!0))},error:function(){this.autocompleteRequest===i&&o([])}})}:t},_setOptionsSource:function(){this.options.xhr?this.options.source=this.options.remote_source:this.options.source=this.element.children("option").map(function(){return{label:e(this).text(),value:this.value}}).toArray()},_buttonField:function(){return e('<span class="input-group-btn"><label class="btn btn-info dropdown-toggle" data-toggle="dropdown" aria-expanded="false" title="Show All Items" role="button"><span class="caret"></span><span class="ui-button-text">&nbsp;</span></label></span>')},_autocompleteDropdownEvent:function(e){var t=this;return e.click(function(){return t.input.autocomplete("widget").is(":visible")?void t.input.autocomplete("close"):(t.input.autocomplete("search",""),void t.input.focus())})},_inputField:function(){var t,n=this.element.children(":selected"),i=n.val()?n.text():"";return t=e('<input type="text">').val(i).addClass("form-control ra-filtering-select-input").attr("style",this.element.attr("style")).show(),this.element.attr("placeholder")&&t.attr("placeholder",this.element.attr("placeholder")),t},_inputGroup:function(t){return e("<div>").addClass("input-group filtering-select col-sm-2").attr("data-input-for",t).css("float","left")},_initAutocomplete:function(){var t=this;return this.input.autocomplete({delay:this.options.searchDelay,minLength:this.options.minLength,source:this._getSourceFunction(this.options.source),select:function(n,i){var r=e("<option>").attr("value",i.item.id).attr("selected","selected").text(i.item.value);t.element.html(r).trigger("change",i.item.id),t._trigger("selected",n,{item:r}),e(t.element.parents(".controls")[0]).find(".update").removeClass("disabled")},change:function(n,i){if(!i.item){var r=new RegExp("^"+e.ui.autocomplete.escapeRegex(e(this).val())+"$","i"),o=!1;if(t.element.children("option").each(function(){if(e(this).text().match(r))return o=!0,!1}),!o&&""===e(this).val())return e(this).val(null),t.element.html(e('<option value="" selected="selected"></option>')),t.input.data("ui-autocomplete").term="",e(t.element.parents(".controls")[0]).find(".update").addClass("disabled"),!1}}})},_initKeyEvent:function(){var t=this;return this.input.keyup(function(){if(!e(this).val().length)return t.element.html(e('<option value="" selected="selected"></option>')).trigger("change")})},_overloadRenderItem:function(){this.input.data("ui-autocomplete")._renderItem=function(t,n){return e("<li></li>").data("ui-autocomplete-item",n).append(e("<a></a>").html(n.html||n.id)).appendTo(t)}},destroy:function(){this.input.remove(),this.button.remove(),this.element.show(),e.Widget.prototype.destroy.call(this)}})}(jQuery);