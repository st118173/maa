(function(){var e,t,n,i,r,s,o,a,l=[].slice,u={}.hasOwnProperty,d=function(e,t){function n(){this.constructor=e}for(var i in t)u.call(t,i)&&(e[i]=t[i]);return n.prototype=t.prototype,e.prototype=new n,e.__super__=t.prototype,e};o=function(){},t=function(){function e(){}return e.prototype.addEventListener=e.prototype.on,e.prototype.on=function(e,t){return this._callbacks=this._callbacks||{},this._callbacks[e]||(this._callbacks[e]=[]),this._callbacks[e].push(t),this},e.prototype.emit=function(){var e,t,n,i,r,s;if(i=arguments[0],e=2<=arguments.length?l.call(arguments,1):[],this._callbacks=this._callbacks||{},n=this._callbacks[i])for(r=0,s=n.length;r<s;r++)t=n[r],t.apply(this,e);return this},e.prototype.removeListener=e.prototype.off,e.prototype.removeAllListeners=e.prototype.off,e.prototype.removeEventListener=e.prototype.off,e.prototype.off=function(e,t){var n,i,r,s,o;if(!this._callbacks||0===arguments.length)return this._callbacks={},this;if(i=this._callbacks[e],!i)return this;if(1===arguments.length)return delete this._callbacks[e],this;for(r=s=0,o=i.length;s<o;r=++s)if(n=i[r],n===t){i.splice(r,1);break}return this},e}(),e=function(e){function n(e,t){var r,s,o;if(this.element=e,this.version=n.version,this.defaultOptions.previewTemplate=this.defaultOptions.previewTemplate.replace(/\n*/g,""),this.clickableElements=[],this.listeners=[],this.files=[],"string"==typeof this.element&&(this.element=document.querySelector(this.element)),!this.element||null==this.element.nodeType)throw new Error("Invalid dropzone element.");if(this.element.dropzone)throw new Error("Dropzone already attached.");if(n.instances.push(this),this.element.dropzone=this,r=null!=(o=n.optionsForElement(this.element))?o:{},this.options=i({},this.defaultOptions,r,null!=t?t:{}),this.options.forceFallback||!n.isBrowserSupported())return this.options.fallback.call(this);if(null==this.options.url&&(this.options.url=this.element.getAttribute("action")),!this.options.url)throw new Error("No URL provided.");if(this.options.acceptedFiles&&this.options.acceptedMimeTypes)throw new Error("You can't provide both 'acceptedFiles' and 'acceptedMimeTypes'. 'acceptedMimeTypes' is deprecated.");this.options.acceptedMimeTypes&&(this.options.acceptedFiles=this.options.acceptedMimeTypes,delete this.options.acceptedMimeTypes),this.options.method=this.options.method.toUpperCase(),(s=this.getExistingFallback())&&s.parentNode&&s.parentNode.removeChild(s),this.options.previewsContainer!==!1&&(this.options.previewsContainer?this.previewsContainer=n.getElement(this.options.previewsContainer,"previewsContainer"):this.previewsContainer=this.element),this.options.clickable&&(this.options.clickable===!0?this.clickableElements=[this.element]:this.clickableElements=n.getElements(this.options.clickable,"clickable")),this.init()}var i,r;return d(n,e),n.prototype.Emitter=t,n.prototype.events=["drop","dragstart","dragend","dragenter","dragover","dragleave","addedfile","addedfiles","removedfile","thumbnail","error","errormultiple","processing","processingmultiple","uploadprogress","totaluploadprogress","sending","sendingmultiple","success","successmultiple","canceled","canceledmultiple","complete","completemultiple","reset","maxfilesexceeded","maxfilesreached","queuecomplete"],n.prototype.defaultOptions={url:null,method:"post",withCredentials:!1,parallelUploads:2,uploadMultiple:!1,maxFilesize:256,paramName:"file",createImageThumbnails:!0,maxThumbnailFilesize:10,thumbnailWidth:120,thumbnailHeight:120,filesizeBase:1e3,maxFiles:null,params:{},clickable:!0,ignoreHiddenFiles:!0,acceptedFiles:null,acceptedMimeTypes:null,autoProcessQueue:!0,autoQueue:!0,addRemoveLinks:!1,previewsContainer:null,hiddenInputContainer:"body",capture:null,renameFilename:null,dictDefaultMessage:"Drop files here to upload",dictFallbackMessage:"Your browser does not support drag'n'drop file uploads.",dictFallbackText:"Please use the fallback form below to upload your files like in the olden days.",dictFileTooBig:"File is too big ({{filesize}}MiB). Max filesize: {{maxFilesize}}MiB.",dictInvalidFileType:"You can't upload files of this type.",dictResponseError:"Server responded with {{statusCode}} code.",dictCancelUpload:"Cancel upload",dictCancelUploadConfirmation:"Are you sure you want to cancel this upload?",dictRemoveFile:"Remove file",dictRemoveFileConfirmation:null,dictMaxFilesExceeded:"You can not upload any more files.",accept:function(e,t){return t()},init:function(){return o},forceFallback:!1,fallback:function(){var e,t,i,r,s,o;for(this.element.className=""+this.element.className+" dz-browser-not-supported",o=this.element.getElementsByTagName("div"),r=0,s=o.length;r<s;r++)e=o[r],/(^| )dz-message($| )/.test(e.className)&&(t=e,e.className="dz-message");return t||(t=n.createElement('<div class="dz-message"><span></span></div>'),this.element.appendChild(t)),i=t.getElementsByTagName("span")[0],i&&(null!=i.textContent?i.textContent=this.options.dictFallbackMessage:null!=i.innerText&&(i.innerText=this.options.dictFallbackMessage)),this.element.appendChild(this.getFallbackForm())},resize:function(e){var t,n,i;return t={srcX:0,srcY:0,srcWidth:e.width,srcHeight:e.height},n=e.width/e.height,t.optWidth=this.options.thumbnailWidth,t.optHeight=this.options.thumbnailHeight,null==t.optWidth&&null==t.optHeight?(t.optWidth=t.srcWidth,t.optHeight=t.srcHeight):null==t.optWidth?t.optWidth=n*t.optHeight:null==t.optHeight&&(t.optHeight=1/n*t.optWidth),i=t.optWidth/t.optHeight,e.height<t.optHeight||e.width<t.optWidth?(t.trgHeight=t.srcHeight,t.trgWidth=t.srcWidth):n>i?(t.srcHeight=e.height,t.srcWidth=t.srcHeight*i):(t.srcWidth=e.width,t.srcHeight=t.srcWidth/i),t.srcX=(e.width-t.srcWidth)/2,t.srcY=(e.height-t.srcHeight)/2,t},drop:function(){return this.element.classList.remove("dz-drag-hover")},dragstart:o,dragend:function(){return this.element.classList.remove("dz-drag-hover")},dragenter:function(){return this.element.classList.add("dz-drag-hover")},dragover:function(){return this.element.classList.add("dz-drag-hover")},dragleave:function(){return this.element.classList.remove("dz-drag-hover")},paste:o,reset:function(){return this.element.classList.remove("dz-started")},addedfile:function(e){var t,i,r,s,o,a,l,u,d,c,h,p,f;if(this.element===this.previewsContainer&&this.element.classList.add("dz-started"),this.previewsContainer){for(e.previewElement=n.createElement(this.options.previewTemplate.trim()),e.previewTemplate=e.previewElement,this.previewsContainer.appendChild(e.previewElement),c=e.previewElement.querySelectorAll("[data-dz-name]"),s=0,l=c.length;s<l;s++)t=c[s],t.textContent=this._renameFilename(e.name);for(h=e.previewElement.querySelectorAll("[data-dz-size]"),o=0,u=h.length;o<u;o++)t=h[o],t.innerHTML=this.filesize(e.size);for(this.options.addRemoveLinks&&(e._removeLink=n.createElement('<a class="dz-remove" href="javascript:undefined;" data-dz-remove>'+this.options.dictRemoveFile+"</a>"),e.previewElement.appendChild(e._removeLink)),i=function(t){return function(i){return i.preventDefault(),i.stopPropagation(),e.status===n.UPLOADING?n.confirm(t.options.dictCancelUploadConfirmation,function(){return t.removeFile(e)}):t.options.dictRemoveFileConfirmation?n.confirm(t.options.dictRemoveFileConfirmation,function(){return t.removeFile(e)}):t.removeFile(e)}}(this),p=e.previewElement.querySelectorAll("[data-dz-remove]"),f=[],a=0,d=p.length;a<d;a++)r=p[a],f.push(r.addEventListener("click",i));return f}},removedfile:function(e){var t;return e.previewElement&&null!=(t=e.previewElement)&&t.parentNode.removeChild(e.previewElement),this._updateMaxFilesReachedClass()},thumbnail:function(e,t){var n,i,r,s;if(e.previewElement){for(e.previewElement.classList.remove("dz-file-preview"),s=e.previewElement.querySelectorAll("[data-dz-thumbnail]"),i=0,r=s.length;i<r;i++)n=s[i],n.alt=e.name,n.src=t;return setTimeout(function(){return function(){return e.previewElement.classList.add("dz-image-preview")}}(this),1)}},error:function(e,t){var n,i,r,s,o;if(e.previewElement){for(e.previewElement.classList.add("dz-error"),"String"!=typeof t&&t.error&&(t=t.error),s=e.previewElement.querySelectorAll("[data-dz-errormessage]"),o=[],i=0,r=s.length;i<r;i++)n=s[i],o.push(n.textContent=t);return o}},errormultiple:o,processing:function(e){if(e.previewElement&&(e.previewElement.classList.add("dz-processing"),e._removeLink))return e._removeLink.textContent=this.options.dictCancelUpload},processingmultiple:o,uploadprogress:function(e,t){var n,i,r,s,o;if(e.previewElement){for(s=e.previewElement.querySelectorAll("[data-dz-uploadprogress]"),o=[],i=0,r=s.length;i<r;i++)n=s[i],"PROGRESS"===n.nodeName?o.push(n.value=t):o.push(n.style.width=""+t+"%");return o}},totaluploadprogress:o,sending:o,sendingmultiple:o,success:function(e){if(e.previewElement)return e.previewElement.classList.add("dz-success")},successmultiple:o,canceled:function(e){return this.emit("error",e,"Upload canceled.")},canceledmultiple:o,complete:function(e){if(e._removeLink&&(e._removeLink.textContent=this.options.dictRemoveFile),e.previewElement)return e.previewElement.classList.add("dz-complete")},completemultiple:o,maxfilesexceeded:o,maxfilesreached:o,queuecomplete:o,addedfiles:o,previewTemplate:'<div class="dz-preview dz-file-preview">\n  <div class="dz-image"><img data-dz-thumbnail /></div>\n  <div class="dz-details">\n    <div class="dz-size"><span data-dz-size></span></div>\n    <div class="dz-filename"><span data-dz-name></span></div>\n  </div>\n  <div class="dz-progress"><span class="dz-upload" data-dz-uploadprogress></span></div>\n  <div class="dz-error-message"><span data-dz-errormessage></span></div>\n  <div class="dz-success-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Check</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <path d="M23.5,31.8431458 L17.5852419,25.9283877 C16.0248253,24.3679711 13.4910294,24.366835 11.9289322,25.9289322 C10.3700136,27.4878508 10.3665912,30.0234455 11.9283877,31.5852419 L20.4147581,40.0716123 C20.5133999,40.1702541 20.6159315,40.2626649 20.7218615,40.3488435 C22.2835669,41.8725651 24.794234,41.8626202 26.3461564,40.3106978 L43.3106978,23.3461564 C44.8771021,21.7797521 44.8758057,19.2483887 43.3137085,17.6862915 C41.7547899,16.1273729 39.2176035,16.1255422 37.6538436,17.6893022 L23.5,31.8431458 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" stroke-opacity="0.198794158" stroke="#747474" fill-opacity="0.816519475" fill="#FFFFFF" sketch:type="MSShapeGroup"></path>\n      </g>\n    </svg>\n  </div>\n  <div class="dz-error-mark">\n    <svg width="54px" height="54px" viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns">\n      <title>Error</title>\n      <defs></defs>\n      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">\n        <g id="Check-+-Oval-2" sketch:type="MSLayerGroup" stroke="#747474" stroke-opacity="0.198794158" fill="#FFFFFF" fill-opacity="0.816519475">\n          <path d="M32.6568542,29 L38.3106978,23.3461564 C39.8771021,21.7797521 39.8758057,19.2483887 38.3137085,17.6862915 C36.7547899,16.1273729 34.2176035,16.1255422 32.6538436,17.6893022 L27,23.3431458 L21.3461564,17.6893022 C19.7823965,16.1255422 17.2452101,16.1273729 15.6862915,17.6862915 C14.1241943,19.2483887 14.1228979,21.7797521 15.6893022,23.3461564 L21.3431458,29 L15.6893022,34.6538436 C14.1228979,36.2202479 14.1241943,38.7516113 15.6862915,40.3137085 C17.2452101,41.8726271 19.7823965,41.8744578 21.3461564,40.3106978 L27,34.6568542 L32.6538436,40.3106978 C34.2176035,41.8744578 36.7547899,41.8726271 38.3137085,40.3137085 C39.8758057,38.7516113 39.8771021,36.2202479 38.3106978,34.6538436 L32.6568542,29 Z M27,53 C41.3594035,53 53,41.3594035 53,27 C53,12.6405965 41.3594035,1 27,1 C12.6405965,1 1,12.6405965 1,27 C1,41.3594035 12.6405965,53 27,53 Z" id="Oval-2" sketch:type="MSShapeGroup"></path>\n        </g>\n      </g>\n    </svg>\n  </div>\n</div>'},i=function(){var e,t,n,i,r,s,o;for(i=arguments[0],n=2<=arguments.length?l.call(arguments,1):[],s=0,o=n.length;s<o;s++){t=n[s];for(e in t)r=t[e],i[e]=r}return i},n.prototype.getAcceptedFiles=function(){var e,t,n,i,r;for(i=this.files,r=[],t=0,n=i.length;t<n;t++)e=i[t],e.accepted&&r.push(e);return r},n.prototype.getRejectedFiles=function(){var e,t,n,i,r;for(i=this.files,r=[],t=0,n=i.length;t<n;t++)e=i[t],e.accepted||r.push(e);return r},n.prototype.getFilesWithStatus=function(e){var t,n,i,r,s;for(r=this.files,s=[],n=0,i=r.length;n<i;n++)t=r[n],t.status===e&&s.push(t);return s},n.prototype.getQueuedFiles=function(){return this.getFilesWithStatus(n.QUEUED)},n.prototype.getUploadingFiles=function(){return this.getFilesWithStatus(n.UPLOADING)},n.prototype.getAddedFiles=function(){return this.getFilesWithStatus(n.ADDED)},n.prototype.getActiveFiles=function(){var e,t,i,r,s;for(r=this.files,s=[],t=0,i=r.length;t<i;t++)e=r[t],e.status!==n.UPLOADING&&e.status!==n.QUEUED||s.push(e);return s},n.prototype.init=function(){var e,t,i,r,s,o,a;for("form"===this.element.tagName&&this.element.setAttribute("enctype","multipart/form-data"),this.element.classList.contains("dropzone")&&!this.element.querySelector(".dz-message")&&this.element.appendChild(n.createElement('<div class="dz-default dz-message"><span>'+this.options.dictDefaultMessage+"</span></div>")),this.clickableElements.length&&(i=function(e){return function(){return e.hiddenFileInput&&e.hiddenFileInput.parentNode.removeChild(e.hiddenFileInput),e.hiddenFileInput=document.createElement("input"),e.hiddenFileInput.setAttribute("type","file"),(null==e.options.maxFiles||e.options.maxFiles>1)&&e.hiddenFileInput.setAttribute("multiple","multiple"),e.hiddenFileInput.className="dz-hidden-input",null!=e.options.acceptedFiles&&e.hiddenFileInput.setAttribute("accept",e.options.acceptedFiles),null!=e.options.capture&&e.hiddenFileInput.setAttribute("capture",e.options.capture),e.hiddenFileInput.style.visibility="hidden",e.hiddenFileInput.style.position="absolute",e.hiddenFileInput.style.top="0",e.hiddenFileInput.style.left="0",e.hiddenFileInput.style.height="0",e.hiddenFileInput.style.width="0",document.querySelector(e.options.hiddenInputContainer).appendChild(e.hiddenFileInput),e.hiddenFileInput.addEventListener("change",function(){var t,n,r,s;if(n=e.hiddenFileInput.files,n.length)for(r=0,s=n.length;r<s;r++)t=n[r],e.addFile(t);return e.emit("addedfiles",n),i()})}}(this))(),this.URL=null!=(o=window.URL)?o:window.webkitURL,a=this.events,r=0,s=a.length;r<s;r++)e=a[r],this.on(e,this.options[e]);return this.on("uploadprogress",function(e){return function(){return e.updateTotalUploadProgress()}}(this)),this.on("removedfile",function(e){return function(){return e.updateTotalUploadProgress()}}(this)),this.on("canceled",function(e){return function(t){return e.emit("complete",t)}}(this)),this.on("complete",function(e){return function(){if(0===e.getAddedFiles().length&&0===e.getUploadingFiles().length&&0===e.getQueuedFiles().length)return setTimeout(function(){return e.emit("queuecomplete")},0)}}(this)),t=function(e){return e.stopPropagation(),e.preventDefault?e.preventDefault():e.returnValue=!1},this.listeners=[{element:this.element,events:{dragstart:function(e){return function(t){return e.emit("dragstart",t)}}(this),dragenter:function(e){return function(n){return t(n),e.emit("dragenter",n)}}(this),dragover:function(e){return function(n){var i;try{i=n.dataTransfer.effectAllowed}catch(e){}return n.dataTransfer.dropEffect="move"===i||"linkMove"===i?"move":"copy",t(n),e.emit("dragover",n)}}(this),dragleave:function(e){return function(t){return e.emit("dragleave",t)}}(this),drop:function(e){return function(n){return t(n),e.drop(n)}}(this),dragend:function(e){return function(t){return e.emit("dragend",t)}}(this)}}],this.clickableElements.forEach(function(e){return function(t){return e.listeners.push({element:t,events:{click:function(i){return(t!==e.element||i.target===e.element||n.elementInside(i.target,e.element.querySelector(".dz-message")))&&e.hiddenFileInput.click(),!0}}})}}(this)),this.enable(),this.options.init.call(this)},n.prototype.destroy=function(){var e;return this.disable(),this.removeAllFiles(!0),(null!=(e=this.hiddenFileInput)?e.parentNode:void 0)&&(this.hiddenFileInput.parentNode.removeChild(this.hiddenFileInput),this.hiddenFileInput=null),delete this.element.dropzone,n.instances.splice(n.instances.indexOf(this),1)},n.prototype.updateTotalUploadProgress=function(){var e,t,n,i,r,s,o,a;if(i=0,n=0,e=this.getActiveFiles(),e.length){for(a=this.getActiveFiles(),s=0,o=a.length;s<o;s++)t=a[s],i+=t.upload.bytesSent,n+=t.upload.total;r=100*i/n}else r=100;return this.emit("totaluploadprogress",r,n,i)},n.prototype._getParamName=function(e){return"function"==typeof this.options.paramName?this.options.paramName(e):""+this.options.paramName+(this.options.uploadMultiple?"["+e+"]":"")},n.prototype._renameFilename=function(e){return"function"!=typeof this.options.renameFilename?e:this.options.renameFilename(e)},n.prototype.getFallbackForm=function(){var e,t,i,r;return(e=this.getExistingFallback())?e:(i='<div class="dz-fallback">',this.options.dictFallbackText&&(i+="<p>"+this.options.dictFallbackText+"</p>"),i+='<input type="file" name="'+this._getParamName(0)+'" '+(this.options.uploadMultiple?'multiple="multiple"':void 0)+' /><input type="submit" value="Upload!"></div>',t=n.createElement(i),"FORM"!==this.element.tagName?(r=n.createElement('<form action="'+this.options.url+'" enctype="multipart/form-data" method="'+this.options.method+'"></form>'),r.appendChild(t)):(this.element.setAttribute("enctype","multipart/form-data"),this.element.setAttribute("method",this.options.method)),null!=r?r:t)},n.prototype.getExistingFallback=function(){var e,t,n,i,r,s;for(t=function(e){var t,n,i;for(n=0,i=e.length;n<i;n++)if(t=e[n],/(^| )fallback($| )/.test(t.className))return t},s=["div","form"],i=0,r=s.length;i<r;i++)if(n=s[i],e=t(this.element.getElementsByTagName(n)))return e},n.prototype.setupEventListeners=function(){var e,t,n,i,r,s,o;for(s=this.listeners,o=[],i=0,r=s.length;i<r;i++)e=s[i],o.push(function(){var i,r;i=e.events,r=[];for(t in i)n=i[t],r.push(e.element.addEventListener(t,n,!1));return r}());return o},n.prototype.removeEventListeners=function(){var e,t,n,i,r,s,o;for(s=this.listeners,o=[],i=0,r=s.length;i<r;i++)e=s[i],o.push(function(){var i,r;i=e.events,r=[];for(t in i)n=i[t],r.push(e.element.removeEventListener(t,n,!1));return r}());return o},n.prototype.disable=function(){var e,t,n,i,r;for(this.clickableElements.forEach(function(e){return e.classList.remove("dz-clickable")}),this.removeEventListeners(),i=this.files,r=[],t=0,n=i.length;t<n;t++)e=i[t],r.push(this.cancelUpload(e));return r},n.prototype.enable=function(){return this.clickableElements.forEach(function(e){return e.classList.add("dz-clickable")}),this.setupEventListeners()},n.prototype.filesize=function(e){var t,n,i,r,s,o,a,l;if(i=0,r="b",e>0){for(o=["TB","GB","MB","KB","b"],n=a=0,l=o.length;a<l;n=++a)if(s=o[n],t=Math.pow(this.options.filesizeBase,4-n)/10,e>=t){i=e/Math.pow(this.options.filesizeBase,4-n),r=s;break}i=Math.round(10*i)/10}return"<strong>"+i+"</strong> "+r},n.prototype._updateMaxFilesReachedClass=function(){return null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(this.getAcceptedFiles().length===this.options.maxFiles&&this.emit("maxfilesreached",this.files),this.element.classList.add("dz-max-files-reached")):this.element.classList.remove("dz-max-files-reached")},n.prototype.drop=function(e){var t,n;e.dataTransfer&&(this.emit("drop",e),t=e.dataTransfer.files,this.emit("addedfiles",t),t.length&&(n=e.dataTransfer.items,n&&n.length&&null!=n[0].webkitGetAsEntry?this._addFilesFromItems(n):this.handleFiles(t)))},n.prototype.paste=function(e){var t,n;if(null!=(null!=e&&null!=(n=e.clipboardData)?n.items:void 0))return this.emit("paste",e),t=e.clipboardData.items,t.length?this._addFilesFromItems(t):void 0},n.prototype.handleFiles=function(e){var t,n,i,r;for(r=[],n=0,i=e.length;n<i;n++)t=e[n],r.push(this.addFile(t));return r},n.prototype._addFilesFromItems=function(e){var t,n,i,r,s;for(s=[],i=0,r=e.length;i<r;i++)n=e[i],null!=n.webkitGetAsEntry&&(t=n.webkitGetAsEntry())?t.isFile?s.push(this.addFile(n.getAsFile())):t.isDirectory?s.push(this._addFilesFromDirectory(t,t.name)):s.push(void 0):null!=n.getAsFile&&(null==n.kind||"file"===n.kind)?s.push(this.addFile(n.getAsFile())):s.push(void 0);return s},n.prototype._addFilesFromDirectory=function(e,t){var n,i,r;return n=e.createReader(),i=function(e){return"undefined"!=typeof console&&null!==console&&"function"==typeof console.log?console.log(e):void 0},(r=function(e){return function(){return n.readEntries(function(n){var i,s,o;if(n.length>0){for(s=0,o=n.length;s<o;s++)i=n[s],i.isFile?i.file(function(n){if(!e.options.ignoreHiddenFiles||"."!==n.name.substring(0,1))return n.fullPath=""+t+"/"+n.name,e.addFile(n)}):i.isDirectory&&e._addFilesFromDirectory(i,""+t+"/"+i.name);r()}return null},i)}}(this))()},n.prototype.accept=function(e,t){return e.size>1024*this.options.maxFilesize*1024?t(this.options.dictFileTooBig.replace("{{filesize}}",Math.round(e.size/1024/10.24)/100).replace("{{maxFilesize}}",this.options.maxFilesize)):n.isValidFile(e,this.options.acceptedFiles)?null!=this.options.maxFiles&&this.getAcceptedFiles().length>=this.options.maxFiles?(t(this.options.dictMaxFilesExceeded.replace("{{maxFiles}}",this.options.maxFiles)),this.emit("maxfilesexceeded",e)):this.options.accept.call(this,e,t):t(this.options.dictInvalidFileType)},n.prototype.addFile=function(e){return e.upload={progress:0,total:e.size,bytesSent:0},this.files.push(e),e.status=n.ADDED,this.emit("addedfile",e),this._enqueueThumbnail(e),this.accept(e,function(t){return function(n){return n?(e.accepted=!1,t._errorProcessing([e],n)):(e.accepted=!0,t.options.autoQueue&&t.enqueueFile(e)),t._updateMaxFilesReachedClass()}}(this))},n.prototype.enqueueFiles=function(e){var t,n,i;for(n=0,i=e.length;n<i;n++)t=e[n],this.enqueueFile(t);return null},n.prototype.enqueueFile=function(e){if(e.status!==n.ADDED||e.accepted!==!0)throw new Error("This file can't be queued because it has already been processed or was rejected.");if(e.status=n.QUEUED,this.options.autoProcessQueue)return setTimeout(function(e){return function(){return e.processQueue()}}(this),0)},n.prototype._thumbnailQueue=[],n.prototype._processingThumbnail=!1,n.prototype._enqueueThumbnail=function(e){if(this.options.createImageThumbnails&&e.type.match(/image.*/)&&e.size<=1024*this.options.maxThumbnailFilesize*1024)return this._thumbnailQueue.push(e),setTimeout(function(e){return function(){return e._processThumbnailQueue()}}(this),0)},n.prototype._processThumbnailQueue=function(){if(!this._processingThumbnail&&0!==this._thumbnailQueue.length)return this._processingThumbnail=!0,this.createThumbnail(this._thumbnailQueue.shift(),function(e){return function(){return e._processingThumbnail=!1,e._processThumbnailQueue()}}(this))},n.prototype.removeFile=function(e){if(e.status===n.UPLOADING&&this.cancelUpload(e),this.files=a(this.files,e),this.emit("removedfile",e),0===this.files.length)return this.emit("reset")},n.prototype.removeAllFiles=function(e){var t,i,r,s;for(null==e&&(e=!1),s=this.files.slice(),i=0,r=s.length;i<r;i++)t=s[i],(t.status!==n.UPLOADING||e)&&this.removeFile(t);return null},n.prototype.createThumbnail=function(e,t){var n;return n=new FileReader,n.onload=function(i){return function(){return"image/svg+xml"===e.type?(i.emit("thumbnail",e,n.result),void(null!=t&&t())):i.createThumbnailFromUrl(e,n.result,t)}}(this),n.readAsDataURL(e)},n.prototype.createThumbnailFromUrl=function(e,t,n,i){var r;return r=document.createElement("img"),i&&(r.crossOrigin=i),r.onload=function(t){return function(){var i,o,a,l,u,d,c,h;if(e.width=r.width,e.height=r.height,a=t.options.resize.call(t,e),null==a.trgWidth&&(a.trgWidth=a.optWidth),null==a.trgHeight&&(a.trgHeight=a.optHeight),i=document.createElement("canvas"),o=i.getContext("2d"),i.width=a.trgWidth,i.height=a.trgHeight,s(o,r,null!=(u=a.srcX)?u:0,null!=(d=a.srcY)?d:0,a.srcWidth,a.srcHeight,null!=(c=a.trgX)?c:0,null!=(h=a.trgY)?h:0,a.trgWidth,a.trgHeight),l=i.toDataURL("image/png"),t.emit("thumbnail",e,l),null!=n)return n()}}(this),null!=n&&(r.onerror=n),r.src=t},n.prototype.processQueue=function(){var e,t,n,i;if(t=this.options.parallelUploads,n=this.getUploadingFiles().length,e=n,!(n>=t)&&(i=this.getQueuedFiles(),i.length>0)){if(this.options.uploadMultiple)return this.processFiles(i.slice(0,t-n));for(;e<t;){if(!i.length)return;this.processFile(i.shift()),e++}}},n.prototype.processFile=function(e){return this.processFiles([e])},n.prototype.processFiles=function(e){var t,i,r;for(i=0,r=e.length;i<r;i++)t=e[i],t.processing=!0,t.status=n.UPLOADING,this.emit("processing",t);return this.options.uploadMultiple&&this.emit("processingmultiple",e),this.uploadFiles(e)},n.prototype._getFilesWithXhr=function(e){var t,n;return n=function(){var n,i,r,s;for(r=this.files,s=[],n=0,i=r.length;n<i;n++)t=r[n],t.xhr===e&&s.push(t);return s}.call(this)},n.prototype.cancelUpload=function(e){var t,i,r,s,o,a,l;if(e.status===n.UPLOADING){for(i=this._getFilesWithXhr(e.xhr),r=0,o=i.length;r<o;r++)t=i[r],t.status=n.CANCELED;for(e.xhr.abort(),s=0,a=i.length;s<a;s++)t=i[s],this.emit("canceled",t);this.options.uploadMultiple&&this.emit("canceledmultiple",i)}else(l=e.status)!==n.ADDED&&l!==n.QUEUED||(e.status=n.CANCELED,this.emit("canceled",e),this.options.uploadMultiple&&this.emit("canceledmultiple",[e]));if(this.options.autoProcessQueue)return this.processQueue()},r=function(){var e,t;return t=arguments[0],e=2<=arguments.length?l.call(arguments,1):[],"function"==typeof t?t.apply(this,e):t},n.prototype.uploadFile=function(e){return this.uploadFiles([e])},n.prototype.uploadFiles=function(e){var t,s,o,a,l,u,d,c,h,p,f,m,g,v,y,b,_,w,x,k,M,T,L,S,E,D,C,q,Y,j,A,I,P,F;for(x=new XMLHttpRequest,k=0,S=e.length;k<S;k++)t=e[k],t.xhr=x;m=r(this.options.method,e),_=r(this.options.url,e),x.open(m,_,!0),x.withCredentials=!!this.options.withCredentials,y=null,o=function(n){return function(){var i,r,s;for(s=[],i=0,r=e.length;i<r;i++)t=e[i],s.push(n._errorProcessing(e,y||n.options.dictResponseError.replace("{{statusCode}}",x.status),x));return s}}(this),b=function(n){return function(i){var r,s,o,a,l,u,d,c,h;if(null!=i)for(s=100*i.loaded/i.total,o=0,u=e.length;o<u;o++)t=e[o],t.upload={progress:s,total:i.total,bytesSent:i.loaded};else{for(r=!0,s=100,a=0,d=e.length;a<d;a++)t=e[a],100===t.upload.progress&&t.upload.bytesSent===t.upload.total||(r=!1),t.upload.progress=s,t.upload.bytesSent=t.upload.total;if(r)return}for(h=[],l=0,c=e.length;l<c;l++)t=e[l],h.push(n.emit("uploadprogress",t,s,t.upload.bytesSent));return h}}(this),x.onload=function(t){return function(i){var r;if(e[0].status!==n.CANCELED&&4===x.readyState){if(y=x.responseText,x.getResponseHeader("content-type")&&~x.getResponseHeader("content-type").indexOf("application/json"))try{y=JSON.parse(y)}catch(e){i=e,y="Invalid JSON response from server."}return b(),200<=(r=x.status)&&r<300?t._finished(e,y,i):o()}}}(this),x.onerror=function(){return function(){if(e[0].status!==n.CANCELED)return o()}}(this),v=null!=(Y=x.upload)?Y:x,v.onprogress=b,u={Accept:"application/json","Cache-Control":"no-cache","X-Requested-With":"XMLHttpRequest"},this.options.headers&&i(u,this.options.headers);for(a in u)l=u[a],l&&x.setRequestHeader(a,l);if(s=new FormData,this.options.params){j=this.options.params;for(f in j)w=j[f],s.append(f,w)}for(M=0,E=e.length;M<E;M++)t=e[M],this.emit("sending",t,x,s);if(this.options.uploadMultiple&&this.emit("sendingmultiple",e,x,s),"FORM"===this.element.tagName)for(A=this.element.querySelectorAll("input, textarea, select, button"),T=0,D=A.length;T<D;T++)if(c=A[T],h=c.getAttribute("name"),p=c.getAttribute("type"),"SELECT"===c.tagName&&c.hasAttribute("multiple"))for(I=c.options,L=0,C=I.length;L<C;L++)g=I[L],g.selected&&s.append(h,g.value);else(!p||"checkbox"!==(P=p.toLowerCase())&&"radio"!==P||c.checked)&&s.append(h,c.value);for(d=q=0,F=e.length-1;0<=F?q<=F:q>=F;d=0<=F?++q:--q)s.append(this._getParamName(d),e[d],this._renameFilename(e[d].name));return this.submitRequest(x,s,e)},n.prototype.submitRequest=function(e,t){return e.send(t)},n.prototype._finished=function(e,t,i){var r,s,o;for(s=0,o=e.length;s<o;s++)r=e[s],r.status=n.SUCCESS,this.emit("success",r,t,i),this.emit("complete",r);if(this.options.uploadMultiple&&(this.emit("successmultiple",e,t,i),this.emit("completemultiple",e)),this.options.autoProcessQueue)return this.processQueue()},n.prototype._errorProcessing=function(e,t,i){var r,s,o;for(s=0,o=e.length;s<o;s++)r=e[s],r.status=n.ERROR,this.emit("error",r,t,i),this.emit("complete",r);if(this.options.uploadMultiple&&(this.emit("errormultiple",e,t,i),this.emit("completemultiple",e)),this.options.autoProcessQueue)return this.processQueue()},n}(t),e.version="4.3.0",e.options={},e.optionsForElement=function(t){return t.getAttribute("id")?e.options[n(t.getAttribute("id"))]:void 0},e.instances=[],e.forElement=function(e){if("string"==typeof e&&(e=document.querySelector(e)),null==(null!=e?e.dropzone:void 0))throw new Error("No Dropzone found for given element. This is probably because you're trying to access it before Dropzone had the time to initialize. Use the `init` option to setup any additional observers on your Dropzone.");return e.dropzone},e.autoDiscover=!0,e.discover=function(){var t,n,i,r,s,o;for(document.querySelectorAll?i=document.querySelectorAll(".dropzone"):(i=[],t=function(e){var t,n,r,s;for(s=[],n=0,r=e.length;n<r;n++)t=e[n],/(^| )dropzone($| )/.test(t.className)?s.push(i.push(t)):s.push(void 0);return s},t(document.getElementsByTagName("div")),t(document.getElementsByTagName("form"))),o=[],r=0,s=i.length;r<s;r++)n=i[r],e.optionsForElement(n)!==!1?o.push(new e(n)):o.push(void 0);return o},e.blacklistedBrowsers=[/opera.*Macintosh.*version\/12/i],e.isBrowserSupported=function(){var t,n,i,r,s;if(t=!0,window.File&&window.FileReader&&window.FileList&&window.Blob&&window.FormData&&document.querySelector)if("classList"in document.createElement("a"))for(s=e.blacklistedBrowsers,i=0,r=s.length;i<r;i++)n=s[i],n.test(navigator.userAgent)&&(t=!1);else t=!1;else t=!1;return t},a=function(e,t){var n,i,r,s;for(s=[],i=0,r=e.length;i<r;i++)n=e[i],n!==t&&s.push(n);return s},n=function(e){return e.replace(/[\-_](\w)/g,function(e){return e.charAt(1).toUpperCase()})},e.createElement=function(e){var t;return t=document.createElement("div"),t.innerHTML=e,t.childNodes[0]},e.elementInside=function(e,t){if(e===t)return!0;for(;e=e.parentNode;)if(e===t)return!0;return!1},e.getElement=function(e,t){var n;if("string"==typeof e?n=document.querySelector(e):null!=e.nodeType&&(n=e),null==n)throw new Error("Invalid `"+t+"` option provided. Please provide a CSS selector or a plain HTML element.");return n},e.getElements=function(e,t){var n,i,r,s,o,a,l,u;if(e instanceof Array){r=[];try{for(s=0,a=e.length;s<a;s++)i=e[s],r.push(this.getElement(i,t))}catch(e){n=e,r=null}}else if("string"==typeof e)for(r=[],u=document.querySelectorAll(e),o=0,l=u.length;o<l;o++)i=u[o],r.push(i);else null!=e.nodeType&&(r=[e]);if(null==r||!r.length)throw new Error("Invalid `"+t+"` option provided. Please provide a CSS selector, a plain HTML element or a list of those.");return r},e.confirm=function(e,t,n){return window.confirm(e)?t():null!=n?n():void 0},e.isValidFile=function(e,t){var n,i,r,s,o;if(!t)return!0;for(t=t.split(","),i=e.type,n=i.replace(/\/.*$/,""),s=0,o=t.length;s<o;s++)if(r=t[s],r=r.trim(),"."===r.charAt(0)){if(e.name.toLowerCase().indexOf(r.toLowerCase(),e.name.length-r.length)!==-1)return!0}else if(/\/\*$/.test(r)){if(n===r.replace(/\/.*$/,""))return!0}else if(i===r)return!0;return!1},"undefined"!=typeof jQuery&&null!==jQuery&&(jQuery.fn.dropzone=function(t){return this.each(function(){return new e(this,t)})}),"undefined"!=typeof module&&null!==module?module.exports=e:window.Dropzone=e,e.ADDED="added",e.QUEUED="queued",e.ACCEPTED=e.QUEUED,e.UPLOADING="uploading",e.PROCESSING=e.UPLOADING,e.CANCELED="canceled",e.ERROR="error",e.SUCCESS="success",r=function(e){var t,n,i,r,s,o,a,l,u,d;for(a=e.naturalWidth,o=e.naturalHeight,n=document.createElement("canvas"),n.width=1,n.height=o,i=n.getContext("2d"),i.drawImage(e,0,0),r=i.getImageData(0,0,1,o).data,d=0,s=o,l=o;l>d;)t=r[4*(l-1)+3],0===t?s=l:d=l,l=s+d>>1;return u=l/o,0===u?1:u},s=function(e,t,n,i,s,o,a,l,u,d){var c;return c=r(t),
e.drawImage(t,n,i,s,o,a,l,u,d/c)},i=function(e,t){var n,i,r,s,o,a,l,u,d;if(r=!1,d=!0,i=e.document,u=i.documentElement,n=i.addEventListener?"addEventListener":"attachEvent",l=i.addEventListener?"removeEventListener":"detachEvent",a=i.addEventListener?"":"on",s=function(n){if("readystatechange"!==n.type||"complete"===i.readyState)return("load"===n.type?e:i)[l](a+n.type,s,!1),!r&&(r=!0)?t.call(e,n.type||n):void 0},o=function(){var e;try{u.doScroll("left")}catch(t){return e=t,void setTimeout(o,50)}return s("poll")},"complete"!==i.readyState){if(i.createEventObject&&u.doScroll){try{d=!e.frameElement}catch(e){}d&&o()}return i[n](a+"DOMContentLoaded",s,!1),i[n](a+"readystatechange",s,!1),e[n](a+"load",s,!1)}},e._autoDiscoverFunction=function(){if(e.autoDiscover)return e.discover()},i(window,e._autoDiscoverFunction)}).call(this);