window.Commontator={},Commontator._=window._.noConflict(),Commontator.initMentions=function(){$(".comment_form_field textarea:not(.mentions-added)").each(function(e,t){$textarea=$(t),$form=$textarea.parents("form"),threadId=$textarea.parents(".thread").attr("id").match(/[\d]+/)[0],$textarea.addClass("mentions-added"),currentValue=$textarea.val(),$textarea.mentionsInput({elastic:!1,showAvatars:!1,allowRepeat:!0,minChars:3,onDataRequest:function(e,t,n){$.getJSON("/commontator/threads/"+threadId+"/mentions.json",{q:t},function(e){n.call(this,e.mentions)})}}),$textarea.val(currentValue),$textarea.on("focusout",function(){$textarea.mentionsInput("getMentions",function(e){$form.find('input[name="mentioned_ids[]"]').remove(),$(e).each(function(e,t){$input=$("<input>",{type:"hidden",name:"mentioned_ids[]",value:t.id}),$form.append($input)})})})})};