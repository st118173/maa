+function(e){"use strict";function t(t){var i=t.attr("data-target");i||(i=t.attr("href"),i=i&&/#[A-Za-z]/.test(i)&&i.replace(/.*(?=#[^\s]*$)/,""));var n=i&&e(i);return n&&n.length?n:t.parent()}function i(i){i&&3===i.which||(e(r).remove(),e(o).each(function(){var n=e(this),r=t(n),o={relatedTarget:this};r.hasClass("open")&&(i&&"click"==i.type&&/input|textarea/i.test(i.target.tagName)&&e.contains(r[0],i.target)||(r.trigger(i=e.Event("hide.bs.dropdown",o)),i.isDefaultPrevented()||(n.attr("aria-expanded","false"),r.removeClass("open").trigger(e.Event("hidden.bs.dropdown",o)))))}))}function n(t){return this.each(function(){var i=e(this),n=i.data("bs.dropdown");n||i.data("bs.dropdown",n=new s(this)),"string"==typeof t&&n[t].call(i)})}var r=".dropdown-backdrop",o='[data-toggle="dropdown"]',s=function(t){e(t).on("click.bs.dropdown",this.toggle)};s.VERSION="3.3.7",s.prototype.toggle=function(n){var r=e(this);if(!r.is(".disabled, :disabled")){var o=t(r),s=o.hasClass("open");if(i(),!s){"ontouchstart"in document.documentElement&&!o.closest(".navbar-nav").length&&e(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(e(this)).on("click",i);var a={relatedTarget:this};if(o.trigger(n=e.Event("show.bs.dropdown",a)),n.isDefaultPrevented())return;r.trigger("focus").attr("aria-expanded","true"),o.toggleClass("open").trigger(e.Event("shown.bs.dropdown",a))}return!1}},s.prototype.keydown=function(i){if(/(38|40|27|32)/.test(i.which)&&!/input|textarea/i.test(i.target.tagName)){var n=e(this);if(i.preventDefault(),i.stopPropagation(),!n.is(".disabled, :disabled")){var r=t(n),s=r.hasClass("open");if(!s&&27!=i.which||s&&27==i.which)return 27==i.which&&r.find(o).trigger("focus"),n.trigger("click");var a=" li:not(.disabled):visible a",l=r.find(".dropdown-menu"+a);if(l.length){var u=l.index(i.target);38==i.which&&u>0&&u--,40==i.which&&u<l.length-1&&u++,~u||(u=0),l.eq(u).trigger("focus")}}}};var a=e.fn.dropdown;e.fn.dropdown=n,e.fn.dropdown.Constructor=s,e.fn.dropdown.noConflict=function(){return e.fn.dropdown=a,this},e(document).on("click.bs.dropdown.data-api",i).on("click.bs.dropdown.data-api",".dropdown form",function(e){e.stopPropagation()}).on("click.bs.dropdown.data-api",o,s.prototype.toggle).on("keydown.bs.dropdown.data-api",o,s.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",s.prototype.keydown)}(jQuery);