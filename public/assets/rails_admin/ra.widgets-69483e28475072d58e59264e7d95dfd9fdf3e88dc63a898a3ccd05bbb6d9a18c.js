(function(){$(document).on("rails_admin.dom_ready",function(e,t){var n,i,r,o,s,a,l,u;if(t=t?t:$("form"),t.length&&(t.find("[data-color]").each(function(){var e;return e=this,$(this).ColorPicker({color:$(e).val(),onShow:function(e){return $(e).fadeIn(500),!1},onHide:function(e){return $(e).fadeOut(500),!1},onChange:function(t,n){return $(e).val(n),$(e).css("backgroundColor","#"+n)}})}),$.fn.datetimepicker.defaults.icons={time:"fa fa-clock-o",date:"fa fa-calendar",up:"fa fa-chevron-up",down:"fa fa-chevron-down",previous:"fa fa-angle-double-left",next:"fa fa-angle-double-right",today:"fa fa-dot-circle-o",clear:"fa fa-trash",close:"fa fa-times"},t.find("[data-datetimepicker]").each(function(){var e;return e=$(this).data("options"),$.extend(e,{locale:RailsAdmin.I18n.locale}),$(this).datetimepicker(e)}),t.find("[data-enumeration]").each(function(){return $(this).is("[multiple]")?$(this).filteringMultiselect($(this).data("options")):$(this).filteringSelect($(this).data("options"))}),t.find("[data-fileupload]").each(function(){var e;return e=this,$(this).on("click",".delete input[type='checkbox']",function(){return $(e).children(".toggle").toggle("slow")})}),t.find("[data-fileupload]").change(function(){var e,t,n,i;return n=this,t=$("#"+n.id).parent().children(".preview"),t.length||(t=$("#"+n.id).parent().prepend($("<img />").addClass("preview").addClass("img-thumbnail")).find("img.preview"),t.parent().find("img:not(.preview)").hide()),e=$("#"+n.id).val().split(".").pop().toLowerCase(),n.files&&n.files[0]&&$.inArray(e,["gif","png","jpg","jpeg","bmp"])!==-1?(i=new FileReader,i.onload=function(e){return t.attr("src",e.target.result)},i.readAsDataURL(n.files[0]),t.show()):t.hide()}),t.find("[data-filteringmultiselect]").each(function(){return $(this).filteringMultiselect($(this).data("options")),$(this).parents("#modal").length?$(this).siblings(".btn").remove():$(this).parents(".control-group").first().remoteForm()}),t.find("[data-filteringselect]").each(function(){return $(this).filteringSelect($(this).data("options")),$(this).parents("#modal").length?$(this).siblings(".btn").remove():$(this).parents(".control-group").first().remoteForm()}),t.find("[data-nestedmany]").each(function(){var e,t,n,i;return e=$(this).parents(".control-group").first(),t=e.find("> .controls > .nav"),n=e.find("> .tab-content"),i=e.find("> .controls > .btn-group > .toggler"),n.children(".fields:not(.tab-pane)").addClass("tab-pane").each(function(){return $(this).attr("id","unique-id-"+(new Date).getTime()+Math.floor(1e5*Math.random())),t.append('<li><a data-toggle="tab" href="#'+this.id+'">'+$(this).children(".object-infos").data("object-label")+"</a></li>")}),0===t.find("> li.active").length&&t.find("> li > a[data-toggle='tab']:first").tab("show"),0===t.children().length?(t.hide(),n.hide(),i.addClass("disabled").removeClass("active").children("i").addClass("icon-chevron-right")):i.hasClass("active")?(t.show(),n.show(),i.children("i").addClass("icon-chevron-down")):(t.hide(),n.hide(),i.children("i").addClass("icon-chevron-right"))}),t.find("[data-nestedone]").each(function(){var e,t,n,i,r;return e=$(this).parents(".control-group").first(),n=e.find("> .controls > .nav"),i=e.find("> .tab-content"),r=e.find("> .controls > .btn-group > .toggler"),i.children(".fields:not(.tab-pane)").addClass("tab-pane active").each(function(){return e.find("> .controls .add_nested_fields").removeClass("add_nested_fields").html($(this).children(".object-infos").data("object-label")),n.append('<li><a data-toggle="tab" href="#'+this.id+'">'+$(this).children(".object-infos").data("object-label")+"</a></li>")}),t=n.find("> li > a[data-toggle='tab']:first"),t.tab("show"),e.find("> .controls > [data-target]:first").html('<i class="icon-white"></i> '+t.html()),n.hide(),0===n.children().length?(n.hide(),i.hide(),r.addClass("disabled").removeClass("active").children("i").addClass("icon-chevron-right")):r.hasClass("active")?(r.children("i").addClass("icon-chevron-down"),i.show()):(r.children("i").addClass("icon-chevron-right"),i.hide())}),t.find("[data-polymorphic]").each(function(){var e,t,n,i;return n=$(this),e=n.parents(".control-group").first(),t=e.find("select").last(),i=n.data("urls"),n.on("change",function(){return""===$(this).val()?t.html('<option value=""></option>'):$.ajax({url:i[n.val()],data:{compact:!0,all:!0},beforeSend:function(e){return e.setRequestHeader("Accept","application/json")},success:function(e){var n;return n=$("<option></option>"),$(e).each(function(e,t){var i;return i=$("<option></option>"),i.attr("value",t.id),i.text(t.label),n=n.add(i)}),t.html(n)}})})}),s=function(){return t.find("[data-richtext=ckeditor]").not(".ckeditored").each(function(){var e;try{(e=window.CKEDITOR.instances[this.id])&&e.destroy(!0)}catch(e){}return window.CKEDITOR.replace(this,$(this).data("options")),$(this).addClass("ckeditored")})},n=t.find("[data-richtext=ckeditor]").not(".ckeditored"),n.length&&(window.CKEDITOR?s():(u=n.first().data("options"),window.CKEDITOR_BASEPATH=u.base_location,$.getScript(u.jspath,function(){return function(){return s()}}(this)))),a=function(){return function(e){return e.each(function(){var e;return u=$(this).data("options"),e=this,$.getScript(u.locations.mode,function(){return $("head").append('<link href="'+u.locations.theme+'" rel="stylesheet" media="all" type="text/css">'),CodeMirror.fromTextArea(e,u.options),$(e).addClass("codemirrored")})})}}(this),i=t.find("[data-richtext=codemirror]").not(".codemirrored"),i.length&&(this.array=i,window.CodeMirror?a(this.array):(u=$(i[0]).data("options"),$("head").append('<link href="'+u.csspath+'" rel="stylesheet" media="all" type="text/css">'),$.getScript(u.jspath,function(e){return function(){return a(e.array)}}(this)))),o=function(){return function(e,t){return e.each(function(){return $(this).addClass("bootstrap-wysihtml5ed"),$(this).closest(".controls").addClass("well"),$(this).wysihtml5(t)})}}(this),i=t.find("[data-richtext=bootstrap-wysihtml5]").not(".bootstrap-wysihtml5ed"),i.length&&(this.array=i,u=$(i[0]).data("options"),r=$.parseJSON(u.config_options),window.wysihtml5?o(this.array,r):($("head").append('<link href="'+u.csspath+'" rel="stylesheet" media="all" type="text/css">'),$.getScript(u.jspath,function(e){return function(){return o(e.array,r)}}(this)))),l=function(){return function(e){return e.each(function(){var e;if(u=$(this).data("options"),r=$.parseJSON(u.config_options),r?r.inlineMode||(r.inlineMode=!1):r={inlineMode:!1},e=r.imageUploadURL?r.imageUploadParams={authenticity_token:$("meta[name=csrf-token]").attr("content")}:void 0,$(this).addClass("froala-wysiwyged"),$(this).editable(r),e)return $(this).on("editable.imageError",function(e,t,n){alert("error uploading image: "+n.message),0===n.code||1===n.code||2===n.code||3===n.code||4===n.code||5===n.code||6===n.code||7===n.code}).on("editable.afterRemoveImage",function(e,t,n){t.options.imageDeleteParams={src:n.attr("src"),authenticity_token:$("meta[name=csrf-token]").attr("content")},t.deleteImage(n)}).on("editable.imageDeleteSuccess",function(){}).on("editable.imageDeleteError",function(e,t,n){return alert("error deleting image: "+n.message)})})}}(this),i=t.find("[data-richtext=froala-wysiwyg]").not(".froala-wysiwyged"),i.length))return u=$(i[0]).data("options"),$.isFunction($.fn.editable)?l(i):($("head").append('<link href="'+u.csspath+'" rel="stylesheet" media="all" type="text/css">'),$.getScript(u.jspath,function(){return function(){return l(i)}}(this)))})}).call(this);