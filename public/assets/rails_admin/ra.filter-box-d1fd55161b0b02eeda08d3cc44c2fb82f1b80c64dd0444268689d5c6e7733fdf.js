!function(e){var t;e.filters=t={append:function(t){t=t||{};var n=t.label,i=t.name,r=t.type,o=t.value,s=t.operator,a=t.select_options,l=t.index,u="f["+i+"]["+l+"][v]",d="f["+i+"]["+l+"][o]",c=null,p=null;switch(r){case"boolean":var c='<select class="input-sm form-control" name="'+u+'"><option value="_discard">...</option><option value="true"'+("true"==o?'selected="selected"':"")+">"+RailsAdmin.I18n.t("true")+'</option><option value="false"'+("false"==o?'selected="selected"':"")+">"+RailsAdmin.I18n.t("false")+'</option><option disabled="disabled">---------</option><option '+("_present"==o?'selected="selected"':"")+' value="_present">'+RailsAdmin.I18n.t("is_present")+"</option><option "+("_blank"==o?'selected="selected"':"")+' value="_blank"  >'+RailsAdmin.I18n.t("is_blank")+"</option></select>";break;case"date":p='<input size="20" class="date additional-fieldset default input-sm form-control" style="display:'+(s&&"default"!=s?"none":"inline-block")+';" type="text" name="'+u+'[]" value="'+(o[0]||"")+'" /> <input size="20" placeholder="-\u221e" class="date additional-fieldset between input-sm form-control" style="display:'+("between"==s?"inline-block":"none")+';" type="text" name="'+u+'[]" value="'+(o[1]||"")+'" /> <input size="20" placeholder="\u221e" class="date additional-fieldset between input-sm form-control" style="display:'+("between"==s?"inline-block":"none")+';" type="text" name="'+u+'[]" value="'+(o[2]||"")+'" />';case"datetime":case"timestamp":c=c||'<select class="switch-additionnal-fieldsets input-sm form-control" name="'+d+'"><option '+("default"==s?'selected="selected"':"")+' data-additional-fieldset="default" value="default">'+RailsAdmin.I18n.t("date")+"</option><option "+("between"==s?'selected="selected"':"")+' data-additional-fieldset="between" value="between">'+RailsAdmin.I18n.t("between_and_")+"</option><option "+("today"==s?'selected="selected"':"")+' value="today">'+RailsAdmin.I18n.t("today")+"</option><option "+("yesterday"==s?'selected="selected"':"")+' value="yesterday">'+RailsAdmin.I18n.t("yesterday")+"</option><option "+("this_week"==s?'selected="selected"':"")+' value="this_week">'+RailsAdmin.I18n.t("this_week")+"</option><option "+("last_week"==s?'selected="selected"':"")+' value="last_week">'+RailsAdmin.I18n.t("last_week")+'</option><option disabled="disabled">---------</option><option '+("_not_null"==s?'selected="selected"':"")+' value="_not_null">'+RailsAdmin.I18n.t("is_present")+"</option><option "+("_null"==s?'selected="selected"':"")+' value="_null" >'+RailsAdmin.I18n.t("is_blank")+"</option></select>",p=p||'<input size="25" class="datetime additional-fieldset default input-sm form-control" style="display:'+(s&&"default"!=s?"none":"inline-block")+';" type="text" name="'+u+'[]" value="'+(o[0]||"")+'" /> <input size="25" placeholder="-\u221e" class="datetime additional-fieldset between input-sm form-control" style="display:'+("between"==s?"inline-block":"none")+';" type="text" name="'+u+'[]" value="'+(o[1]||"")+'" /> <input size="25" placeholder="\u221e" class="datetime additional-fieldset between input-sm form-control" style="display:'+("between"==s?"inline-block":"none")+';" type="text" name="'+u+'[]" value="'+(o[2]||"")+'" />';break;case"enum":var h=o instanceof Array;c='<select style="display:'+(h?"none":"inline-block")+'" '+(h?"":'name="'+u+'"')+' data-name="'+u+'" class="select-single input-sm form-control"><option value="_discard">...</option><option '+("_present"==o?'selected="selected"':"")+' value="_present">'+RailsAdmin.I18n.t("is_present")+"</option><option "+("_blank"==o?'selected="selected"':"")+' value="_blank">'+RailsAdmin.I18n.t("is_blank")+'</option><option disabled="disabled">---------</option>'+a+'</select><select multiple="multiple" style="display:'+(h?"inline-block":"none")+'" '+(h?'name="'+u+'[]"':"")+' data-name="'+u+'[]" class="select-multiple input-sm form-control">'+a+'</select> <a href="#" class="switch-select"><i class="icon-'+(h?"minus":"plus")+'"></i></a>';break;case"string":case"text":case"belongs_to_association":c='<select class="switch-additionnal-fieldsets input-sm form-control" value="'+s+'" name="'+d+'"><option data-additional-fieldset="additional-fieldset"'+("like"==s?'selected="selected"':"")+' value="like">'+RailsAdmin.I18n.t("contains")+'</option><option data-additional-fieldset="additional-fieldset"'+("is"==s?'selected="selected"':"")+' value="is">'+RailsAdmin.I18n.t("is_exactly")+'</option><option data-additional-fieldset="additional-fieldset"'+("starts_with"==s?'selected="selected"':"")+' value="starts_with">'+RailsAdmin.I18n.t("starts_with")+'</option><option data-additional-fieldset="additional-fieldset"'+("ends_with"==s?'selected="selected"':"")+' value="ends_with">'+RailsAdmin.I18n.t("ends_with")+'</option><option disabled="disabled">---------</option><option '+("_not_null"==s?'selected="selected"':"")+' value="_not_null">'+RailsAdmin.I18n.t("is_present")+"</option><option "+("_null"==s?'selected="selected"':"")+' value="_null">'+RailsAdmin.I18n.t("is_blank")+"</option></select>",p='<input class="additional-fieldset input-sm form-control" style="display:'+("_blank"==s||"_present"==s?"none":"inline-block")+';" type="text" name="'+u+'" value="'+o+'" /> ';break;case"integer":case"decimal":case"float":c='<select class="switch-additionnal-fieldsets input-sm form-control" name="'+d+'"><option '+("default"==s?'selected="selected"':"")+' data-additional-fieldset="default" value="default">'+RailsAdmin.I18n.t("number")+"</option><option "+("between"==s?'selected="selected"':"")+' data-additional-fieldset="between" value="between">'+RailsAdmin.I18n.t("between_and_")+'</option><option disabled="disabled">---------</option><option '+("_not_null"==s?'selected="selected"':"")+' value="_not_null">'+RailsAdmin.I18n.t("is_present")+"</option><option "+("_null"==s?'selected="selected"':"")+' value="_null" >'+RailsAdmin.I18n.t("is_blank")+"</option></select>",p='<input class="additional-fieldset default input-sm form-control" style="display:'+(s&&"default"!=s?"none":"inline-block")+';" type="'+r+'" name="'+u+'[]" value="'+(o[0]||"")+'" /> <input placeholder="-\u221e" class="additional-fieldset between input-sm form-control" style="display:'+("between"==s?"inline-block":"none")+';" type="'+r+'" name="'+u+'[]" value="'+(o[1]||"")+'" /> <input placeholder="\u221e" class="additional-fieldset between input-sm form-control" style="display:'+("between"==s?"inline-block":"none")+';" type="'+r+'" name="'+u+'[]" value="'+(o[2]||"")+'" />';break;default:c='<input type="text" class="input-sm form-control" name="'+u+'" value="'+o+'"/> '}var f=e("<p>").addClass("filter form-search").append('<span class="label label-info form-label"><a href="#delete" class="delete"><i class="fa fa-trash-o fa-fw icon-white"></i>'+n+"</a></span>").append("&nbsp;"+c+"&nbsp;"+(p||""));e("#filters_box").append(f),f.find(".date, .datetime").datetimepicker({locale:RailsAdmin.I18n.locale,showTodayButton:!0,format:t.datetimepicker_format}),e("hr.filters_box:hidden").show("slow")}},e(document).on("click","#filters a",function(t){t.preventDefault(),e.filters.append({label:e(this).data("field-label"),name:e(this).data("field-name"),type:e(this).data("field-type"),value:e(this).data("field-value"),operator:e(this).data("field-operator"),select_options:e(this).data("field-options"),index:e.now().toString().slice(6,11),datetimepicker_format:e(this).data("field-datetimepicker-format")})}),e(document).on("click","#filters_box .delete",function(t){t.preventDefault(),form=e(this).parents("form"),e(this).parents(".filter").remove(),!e("#filters_box").children().length&&e("hr.filters_box:visible").hide("slow")}),e(document).on("click","#filters_box .switch-select",function(t){t.preventDefault();var n=e(this).siblings("select:visible"),i=e(this).siblings("select:hidden");i.attr("name",i.data("name")).show("slow"),n.attr("name",null).hide("slow"),e(this).find("i").toggleClass("icon-plus icon-minus")}),e(document).on("change","#filters_box .switch-additionnal-fieldsets",function(){var t=e(this).find("option:selected");(klass=e(t).data("additional-fieldset"))?(e(this).siblings(".additional-fieldset:not(."+klass+")").hide("slow"),e(this).siblings("."+klass).show("slow")):e(this).siblings(".additional-fieldset").hide("slow")})}(jQuery);