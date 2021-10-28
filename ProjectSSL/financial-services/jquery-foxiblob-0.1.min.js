/**
 * name:          jquery-foxiblob-0.1.min.js
 * author:        Stefan Benicke - www.opusonline.at
 * version:       0.1
 * last update:   19.08.2009
 * category:      jQuery plugin
 * copyright:     (c) 2009 Stefan Benicke (www.opusonline.at)
 * license:       GNU GPLv3 <http://www.gnu.org/licenses/>.
 * documentation: http://www.opusonline.at/foxitools/foxiblob/
 */
(function(a){a.fn.foxiblob=function(h){h=jQuery.extend({active:"active",opacity:0.3,speed:"normal",className:"foxiblob",callback:function(){}},h);var l="";var d=0;var j;var g;var m;var n;var c;var f;a("body").find('div[id^="foxiblob"]').each(function(){d++});var e="#foxiblob"+d;a("body").append('<div id="foxiblob'+d+'" class="'+h.className+'"></div>');a(this).attr("rel",e);var b=parseInt(a(e).css("z-index"))+1;a(this).find("li").each(function(){a(this).bind("mouseenter",function(){i(a(a(this).parent().attr("rel")),a(this))}).css({position:"relative","z-index":b})});a(this).find("li."+h.active).each(function(){l=a(this)});if(!l){l=a(a(this).find("li:first"))}l.addClass("foxiblob_active");k(a(a(this).attr("rel")));a(e).css({top:l.offset().top-j,left:l.offset().left-g,width:l.outerWidth()-n-c,height:l.outerHeight()-m-f});if(a.browser.msie&&a.browser.version<=6){}else{a(e).css("opacity",h.opacity)}a(this).bind("mouseleave",function(){i(a(a(this).attr("rel")),a(this).find("li.foxiblob_active"))});function i(q,p){k(q);var t=p.offset().top-j;var r=p.offset().left-g;var o=p.outerWidth()-n-c;var s=p.outerHeight()-m-f;q.animate({top:t,left:r,width:o,height:s},{queue:false},h.speed)}function k(o){j=parseInt(o.css("paddingTop"));g=parseInt(o.css("paddingLeft"));m=parseInt(o.css("borderTopWidth"));n=parseInt(o.css("borderLeftWidth"));c=parseInt(o.css("borderRightWidth"));f=parseInt(o.css("borderBottomWidth"));if(!m){m=0}if(!n){n=0}if(!f){f=0}if(!c){c=0}}}})(jQuery);
