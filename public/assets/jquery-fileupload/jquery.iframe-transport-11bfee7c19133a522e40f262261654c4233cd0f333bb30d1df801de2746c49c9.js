!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):window.jQuery)}(function(e){"use strict";var t=0;e.ajaxTransport("iframe",function(i){if(i.async){var n,r,o,s=i.initialIframeSrc||"javascript:false;";return{send:function(a,l){n=e('<form style="display:none;"></form>'),n.attr("accept-charset",i.formAcceptCharset),o=/\?/.test(i.url)?"&":"?","DELETE"===i.type?(i.url=i.url+o+"_method=DELETE",i.type="POST"):"PUT"===i.type?(i.url=i.url+o+"_method=PUT",i.type="POST"):"PATCH"===i.type&&(i.url=i.url+o+"_method=PATCH",i.type="POST"),t+=1,r=e('<iframe src="'+s+'" name="iframe-transport-'+t+'"></iframe>').bind("load",function(){var t,o=e.isArray(i.paramName)?i.paramName:[i.paramName];r.unbind("load").bind("load",function(){var t;try{if(t=r.contents(),!t.length||!t[0].firstChild)throw new Error}catch(e){t=void 0}l(200,"success",{iframe:t}),e('<iframe src="'+s+'"></iframe>').appendTo(n),window.setTimeout(function(){n.remove()},0)}),n.prop("target",r.prop("name")).prop("action",i.url).prop("method",i.type),i.formData&&e.each(i.formData,function(t,i){e('<input type="hidden"/>').prop("name",i.name).val(i.value).appendTo(n)}),i.fileInput&&i.fileInput.length&&"POST"===i.type&&(t=i.fileInput.clone(),i.fileInput.after(function(e){return t[e]}),i.paramName&&i.fileInput.each(function(t){e(this).prop("name",o[t]||i.paramName)}),n.append(i.fileInput).prop("enctype","multipart/form-data").prop("encoding","multipart/form-data"),i.fileInput.removeAttr("form")),n.submit(),t&&t.length&&i.fileInput.each(function(i,n){var r=e(t[i]);e(n).prop("name",r.prop("name")).attr("form",r.attr("form")),r.replaceWith(n)})}),n.append(r).appendTo(document.body)},abort:function(){r&&r.unbind("load").prop("src",s),n&&n.remove()}}}}),e.ajaxSetup({converters:{"iframe text":function(t){return t&&e(t[0].body).text()},"iframe json":function(t){return t&&e.parseJSON(e(t[0].body).text())},"iframe html":function(t){return t&&e(t[0].body).html()},"iframe xml":function(t){var i=t&&t[0];return i&&e.isXMLDoc(i)?i:e.parseXML(i.XMLDocument&&i.XMLDocument.xml||e(i.body).html())},"iframe script":function(t){return t&&e.globalEval(e(t[0].body).text())}}})});