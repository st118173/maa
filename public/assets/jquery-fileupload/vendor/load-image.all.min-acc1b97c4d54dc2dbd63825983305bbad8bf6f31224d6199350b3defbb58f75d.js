!function(e){"use strict";var t=function(e,i,n){var r,o,s=document.createElement("img");if(s.onerror=i,s.onload=function(){!o||n&&n.noRevoke||t.revokeObjectURL(o),i&&i(t.scale(s,n))},t.isInstanceOf("Blob",e)||t.isInstanceOf("File",e))r=o=t.createObjectURL(e),s._type=e.type;else{if("string"!=typeof e)return!1;r=e,n&&n.crossOrigin&&(s.crossOrigin=n.crossOrigin)}return r?(s.src=r,s):t.readFile(e,function(e){var t=e.target;t&&t.result?s.src=t.result:i&&i(e)})},i=window.createObjectURL&&window||window.URL&&URL.revokeObjectURL&&URL||window.webkitURL&&webkitURL;t.isInstanceOf=function(e,t){return Object.prototype.toString.call(t)==="[object "+e+"]"},t.transformCoordinates=function(){},t.getTransformedOptions=function(e,t){var i,n,r,o,s=t.aspectRatio;if(!s)return t;i={};for(n in t)t.hasOwnProperty(n)&&(i[n]=t[n]);return i.crop=!0,r=e.naturalWidth||e.width,o=e.naturalHeight||e.height,r/o>s?(i.maxWidth=o*s,i.maxHeight=o):(i.maxWidth=r,i.maxHeight=r/s),i},t.renderImageToCanvas=function(e,t,i,n,r,o,s,a,l,u){return e.getContext("2d").drawImage(t,i,n,r,o,s,a,l,u),e},t.hasCanvasOption=function(e){return e.canvas||e.crop||!!e.aspectRatio},t.scale=function(e,i){function n(){var e=Math.max((a||_)/_,(l||w)/w);e>1&&(_*=e,w*=e)}function r(){var e=Math.min((o||_)/_,(s||w)/w);1>e&&(_*=e,w*=e)}i=i||{};var o,s,a,l,u,d,c,p,f,h,g,m=document.createElement("canvas"),v=e.getContext||t.hasCanvasOption(i)&&m.getContext,b=e.naturalWidth||e.width,y=e.naturalHeight||e.height,_=b,w=y;if(v&&(i=t.getTransformedOptions(e,i),c=i.left||0,p=i.top||0,i.sourceWidth?(u=i.sourceWidth,void 0!==i.right&&void 0===i.left&&(c=b-u-i.right)):u=b-c-(i.right||0),i.sourceHeight?(d=i.sourceHeight,void 0!==i.bottom&&void 0===i.top&&(p=y-d-i.bottom)):d=y-p-(i.bottom||0),_=u,w=d),o=i.maxWidth,s=i.maxHeight,a=i.minWidth,l=i.minHeight,v&&o&&s&&i.crop?(_=o,w=s,g=u/d-o/s,0>g?(d=s*u/o,void 0===i.top&&void 0===i.bottom&&(p=(y-d)/2)):g>0&&(u=o*d/s,void 0===i.left&&void 0===i.right&&(c=(b-u)/2))):((i.contain||i.cover)&&(a=o=o||a,l=s=s||l),i.cover?(r(),n()):(n(),r())),v){if(f=i.pixelRatio,f>1&&(m.style.width=_+"px",m.style.height=w+"px",_*=f,w*=f,m.getContext("2d").scale(f,f)),h=i.downsamplingRatio,h>0&&1>h&&u>_&&d>w)for(;u*h>_;)m.width=u*h,m.height=d*h,t.renderImageToCanvas(m,e,c,p,u,d,0,0,m.width,m.height),u=m.width,d=m.height,e=document.createElement("canvas"),e.width=u,e.height=d,t.renderImageToCanvas(e,m,0,0,u,d,0,0,u,d);return m.width=_,m.height=w,t.transformCoordinates(m,i),t.renderImageToCanvas(m,e,c,p,u,d,0,0,_,w)}return e.width=_,e.height=w,e},t.createObjectURL=function(e){return!!i&&i.createObjectURL(e)},t.revokeObjectURL=function(e){return!!i&&i.revokeObjectURL(e)},t.readFile=function(e,t,i){if(window.FileReader){var n=new FileReader;if(n.onload=n.onerror=t,i=i||"readAsDataURL",n[i])return n[i](e),n}return!1},"function"==typeof define&&define.amd?define(function(){return t}):"object"==typeof module&&module.exports?module.exports=t:e.loadImage=t}(window),function(e){"use strict";"function"==typeof define&&define.amd?define(["./load-image"],e):e("object"==typeof module&&module.exports?require("./load-image"):window.loadImage)}(function(e){"use strict";var t=e.hasCanvasOption,i=e.transformCoordinates,n=e.getTransformedOptions;e.hasCanvasOption=function(i){return!!i.orientation||t.call(e,i)},e.transformCoordinates=function(t,n){i.call(e,t,n);var r=t.getContext("2d"),o=t.width,s=t.height,a=t.style.width,l=t.style.height,u=n.orientation;if(u&&!(u>8))switch(u>4&&(t.width=s,t.height=o,t.style.width=l,t.style.height=a),u){case 2:r.translate(o,0),r.scale(-1,1);break;case 3:r.translate(o,s),r.rotate(Math.PI);break;case 4:r.translate(0,s),r.scale(1,-1);break;case 5:r.rotate(.5*Math.PI),r.scale(1,-1);break;case 6:r.rotate(.5*Math.PI),r.translate(0,-s);break;case 7:r.rotate(.5*Math.PI),r.translate(o,-s),r.scale(-1,1);break;case 8:r.rotate(-.5*Math.PI),r.translate(-o,0)}},e.getTransformedOptions=function(t,i){var r,o,s=n.call(e,t,i),a=s.orientation;if(!a||a>8||1===a)return s;r={};for(o in s)s.hasOwnProperty(o)&&(r[o]=s[o]);switch(s.orientation){case 2:r.left=s.right,r.right=s.left;break;case 3:r.left=s.right,r.top=s.bottom,r.right=s.left,r.bottom=s.top;break;case 4:r.top=s.bottom,r.bottom=s.top;break;case 5:r.left=s.top,r.top=s.left,r.right=s.bottom,r.bottom=s.right;break;case 6:r.left=s.top,r.top=s.right,r.right=s.bottom,r.bottom=s.left;break;case 7:r.left=s.bottom,r.top=s.right,r.right=s.top,r.bottom=s.left;break;case 8:r.left=s.bottom,r.top=s.left,r.right=s.top,r.bottom=s.right}return s.orientation>4&&(r.maxWidth=s.maxHeight,r.maxHeight=s.maxWidth,r.minWidth=s.minHeight,r.minHeight=s.minWidth,r.sourceWidth=s.sourceHeight,r.sourceHeight=s.sourceWidth),r}}),function(e){"use strict";"function"==typeof define&&define.amd?define(["./load-image"],e):e("object"==typeof module&&module.exports?require("./load-image"):window.loadImage)}(function(e){"use strict";var t=window.Blob&&(Blob.prototype.slice||Blob.prototype.webkitSlice||Blob.prototype.mozSlice);e.blobSlice=t&&function(){var e=this.slice||this.webkitSlice||this.mozSlice;return e.apply(this,arguments)},e.metaDataParsers={jpeg:{65505:[]}},e.parseMetaData=function(t,i,n){n=n||{};var r=this,o=n.maxMetaDataSize||262144,s={},a=!(window.DataView&&t&&t.size>=12&&"image/jpeg"===t.type&&e.blobSlice);(a||!e.readFile(e.blobSlice.call(t,0,o),function(t){if(t.target.error)return console.log(t.target.error),void i(s);var o,a,l,u,d=t.target.result,c=new DataView(d),p=2,f=c.byteLength-4,h=p;if(65496===c.getUint16(0)){for(;f>p&&(o=c.getUint16(p),o>=65504&&65519>=o||65534===o);){if(a=c.getUint16(p+2)+2,p+a>c.byteLength){console.log("Invalid meta data: Invalid segment size.");break}if(l=e.metaDataParsers.jpeg[o])for(u=0;u<l.length;u+=1)l[u].call(r,c,p,a,s,n);p+=a,h=p}!n.disableImageHead&&h>6&&(d.slice?s.imageHead=d.slice(0,h):s.imageHead=new Uint8Array(d).subarray(0,h))}else console.log("Invalid JPEG file: Missing JPEG marker.");i(s)},"readAsArrayBuffer"))&&i(s)}}),function(e){"use strict";"function"==typeof define&&define.amd?define(["./load-image","./load-image-meta"],e):"object"==typeof module&&module.exports?e(require("./load-image"),require("./load-image-meta")):e(window.loadImage)}(function(e){"use strict";e.ExifMap=function(){return this},e.ExifMap.prototype.map={Orientation:274},e.ExifMap.prototype.get=function(e){return this[e]||this[this.map[e]]},e.getExifThumbnail=function(e,t,i){var n,r,o;if(!i||t+i>e.byteLength)return void console.log("Invalid Exif data: Invalid thumbnail data.");for(n=[],r=0;i>r;r+=1)o=e.getUint8(t+r),n.push((16>o?"0":"")+o.toString(16));return"data:image/jpeg,%"+n.join("%")},e.exifTagTypes={1:{getValue:function(e,t){return e.getUint8(t)},size:1},2:{getValue:function(e,t){return String.fromCharCode(e.getUint8(t))},size:1,ascii:!0},3:{getValue:function(e,t,i){return e.getUint16(t,i)},size:2},4:{getValue:function(e,t,i){return e.getUint32(t,i)},size:4},5:{getValue:function(e,t,i){return e.getUint32(t,i)/e.getUint32(t+4,i)},size:8},9:{getValue:function(e,t,i){return e.getInt32(t,i)},size:4},10:{getValue:function(e,t,i){return e.getInt32(t,i)/e.getInt32(t+4,i)},size:8}},e.exifTagTypes[7]=e.exifTagTypes[1],e.getExifValue=function(t,i,n,r,o,s){var a,l,u,d,c,p,f=e.exifTagTypes[r];if(!f)return void console.log("Invalid Exif data: Invalid tag type.");if(a=f.size*o,l=a>4?i+t.getUint32(n+8,s):n+8,l+a>t.byteLength)return void console.log("Invalid Exif data: Invalid data offset.");if(1===o)return f.getValue(t,l,s);for(u=[],d=0;o>d;d+=1)u[d]=f.getValue(t,l+d*f.size,s);if(f.ascii){for(c="",d=0;d<u.length&&(p=u[d],"\0"!==p);d+=1)c+=p;return c}return u},e.parseExifTag=function(t,i,n,r,o){var s=t.getUint16(n,r);o.exif[s]=e.getExifValue(t,i,n,t.getUint16(n+2,r),t.getUint32(n+4,r),r)},e.parseExifTags=function(e,t,i,n,r){var o,s,a;if(i+6>e.byteLength)return void console.log("Invalid Exif data: Invalid directory offset.");if(o=e.getUint16(i,n),s=i+2+12*o,s+4>e.byteLength)return void console.log("Invalid Exif data: Invalid directory size.");for(a=0;o>a;a+=1)this.parseExifTag(e,t,i+2+12*a,n,r);return e.getUint32(s,n)},e.parseExifData=function(t,i,n,r,o){if(!o.disableExif){var s,a,l,u=i+10;if(1165519206===t.getUint32(i+4)){if(u+8>t.byteLength)return void console.log("Invalid Exif data: Invalid segment size.");if(0!==t.getUint16(i+8))return void console.log("Invalid Exif data: Missing byte alignment offset.");switch(t.getUint16(u)){case 18761:s=!0;break;case 19789:s=!1;break;default:return void console.log("Invalid Exif data: Invalid byte alignment marker.")}if(42!==t.getUint16(u+2,s))return void console.log("Invalid Exif data: Missing TIFF marker.");a=t.getUint32(u+4,s),r.exif=new e.ExifMap,a=e.parseExifTags(t,u,u+a,s,r),a&&!o.disableExifThumbnail&&(l={exif:{}},a=e.parseExifTags(t,u,u+a,s,l),l.exif[513]&&(r.exif.Thumbnail=e.getExifThumbnail(t,u+l.exif[513],l.exif[514]))),r.exif[34665]&&!o.disableExifSub&&e.parseExifTags(t,u,u+r.exif[34665],s,r),r.exif[34853]&&!o.disableExifGps&&e.parseExifTags(t,u,u+r.exif[34853],s,r)}}},e.metaDataParsers.jpeg[65505].push(e.parseExifData)}),function(e){"use strict";"function"==typeof define&&define.amd?define(["./load-image","./load-image-exif"],e):"object"==typeof module&&module.exports?e(require("./load-image"),require("./load-image-exif")):e(window.loadImage)}(function(e){"use strict";e.ExifMap.prototype.tags={256:"ImageWidth",257:"ImageHeight",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer",40965:"InteroperabilityIFDPointer",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",274:"Orientation",277:"SamplesPerPixel",284:"PlanarConfiguration",530:"YCbCrSubSampling",531:"YCbCrPositioning",282:"XResolution",283:"YResolution",296:"ResolutionUnit",273:"StripOffsets",278:"RowsPerStrip",279:"StripByteCounts",513:"JPEGInterchangeFormat",514:"JPEGInterchangeFormatLength",301:"TransferFunction",318:"WhitePoint",319:"PrimaryChromaticities",529:"YCbCrCoefficients",532:"ReferenceBlackWhite",306:"DateTime",270:"ImageDescription",271:"Make",272:"Model",305:"Software",315:"Artist",33432:"Copyright",36864:"ExifVersion",40960:"FlashpixVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",42240:"Gamma",37121:"ComponentsConfiguration",37122:"CompressedBitsPerPixel",37500:"MakerNote",37510:"UserComment",40964:"RelatedSoundFile",36867:"DateTimeOriginal",36868:"DateTimeDigitized",37520:"SubSecTime",37521:"SubSecTimeOriginal",37522:"SubSecTimeDigitized",33434:"ExposureTime",33437:"FNumber",34850:"ExposureProgram",34852:"SpectralSensitivity",34855:"PhotographicSensitivity",34856:"OECF",34864:"SensitivityType",34865:"StandardOutputSensitivity",34866:"RecommendedExposureIndex",34867:"ISOSpeed",34868:"ISOSpeedLatitudeyyy",34869:"ISOSpeedLatitudezzz",37377:"ShutterSpeedValue",37378:"ApertureValue",37379:"BrightnessValue",37380:"ExposureBias",37381:"MaxApertureValue",37382:"SubjectDistance",37383:"MeteringMode",37384:"LightSource",37385:"Flash",37396:"SubjectArea",37386:"FocalLength",41483:"FlashEnergy",41484:"SpatialFrequencyResponse",41486:"FocalPlaneXResolution",41487:"FocalPlaneYResolution",41488:"FocalPlaneResolutionUnit",41492:"SubjectLocation",41493:"ExposureIndex",41495:"SensingMethod",41728:"FileSource",41729:"SceneType",41730:"CFAPattern",41985:"CustomRendered",41986:"ExposureMode",41987:"WhiteBalance",41988:"DigitalZoomRatio",41989:"FocalLengthIn35mmFilm",41990:"SceneCaptureType",41991:"GainControl",41992:"Contrast",41993:"Saturation",41994:"Sharpness",41995:"DeviceSettingDescription",41996:"SubjectDistanceRange",42016:"ImageUniqueID",42032:"CameraOwnerName",42033:"BodySerialNumber",42034:"LensSpecification",42035:"LensMake",42036:"LensModel",42037:"LensSerialNumber",0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude",5:"GPSAltitudeRef",6:"GPSAltitude",7:"GPSTimeStamp",8:"GPSSatellites",9:"GPSStatus",10:"GPSMeasureMode",11:"GPSDOP",12:"GPSSpeedRef",13:"GPSSpeed",14:"GPSTrackRef",15:"GPSTrack",16:"GPSImgDirectionRef",17:"GPSImgDirection",18:"GPSMapDatum",19:"GPSDestLatitudeRef",20:"GPSDestLatitude",21:"GPSDestLongitudeRef",22:"GPSDestLongitude",23:"GPSDestBearingRef",24:"GPSDestBearing",25:"GPSDestDistanceRef",26:"GPSDestDistance",27:"GPSProcessingMethod",28:"GPSAreaInformation",29:"GPSDateStamp",30:"GPSDifferential",31:"GPSHPositioningError"},e.ExifMap.prototype.stringValues={ExposureProgram:{0:"Undefined",1:"Manual",2:"Normal program",3:"Aperture priority",4:"Shutter priority",5:"Creative program",6:"Action program",7:"Portrait mode",8:"Landscape mode"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{0:"Unknown",1:"Daylight",2:"Fluorescent",3:"Tungsten (incandescent light)",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 - 5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire",1:"Flash fired",5:"Strobe return light not detected",7:"Strobe return light detected",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},SensingMethod:{1:"Undefined",2:"One-chip color area sensor",3:"Two-chip color area sensor",4:"Three-chip color area sensor",5:"Color sequential area sensor",7:"Trilinear sensor",8:"Color sequential linear sensor"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},SceneType:{1:"Directly photographed"},CustomRendered:{0:"Normal process",1:"Custom process"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},GainControl:{0:"None",1:"Low gain up",2:"High gain up",3:"Low gain down",4:"High gain down"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},SubjectDistanceRange:{0:"Unknown",1:"Macro",2:"Close view",3:"Distant view"},FileSource:{3:"DSC"},ComponentsConfiguration:{0:"",1:"Y",2:"Cb",3:"Cr",4:"R",5:"G",6:"B"},Orientation:{1:"top-left",2:"top-right",3:"bottom-right",4:"bottom-left",5:"left-top",6:"right-top",7:"right-bottom",8:"left-bottom"}},e.ExifMap.prototype.getText=function(e){var t=this.get(e);switch(e){case"LightSource":case"Flash":case"MeteringMode":case"ExposureProgram":case"SensingMethod":case"SceneCaptureType":case"SceneType":case"CustomRendered":case"WhiteBalance":case"GainControl":case"Contrast":case"Saturation":case"Sharpness":case"SubjectDistanceRange":case"FileSource":case"Orientation":return this.stringValues[e][t];case"ExifVersion":case"FlashpixVersion":return String.fromCharCode(t[0],t[1],t[2],t[3]);case"ComponentsConfiguration":return this.stringValues[e][t[0]]+this.stringValues[e][t[1]]+this.stringValues[e][t[2]]+this.stringValues[e][t[3]];case"GPSVersionID":return t[0]+"."+t[1]+"."+t[2]+"."+t[3]}return String(t)},function(e){var t,i=e.tags,n=e.map;for(t in i)i.hasOwnProperty(t)&&(n[i[t]]=t)}(e.ExifMap.prototype),e.ExifMap.prototype.getAll=function(){var e,t,i={};for(e in this)this.hasOwnProperty(e)&&(t=this.tags[e],t&&(i[t]=this.getText(t)));return i}});