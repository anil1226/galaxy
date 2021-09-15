/*
 * jQuery.appear
 * http://code.google.com/p/jquery-appear/
 *
 * Copyright (c) 2009 Michael Hixson
 * Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
*/
!function(e){e.fn.appear=function(a,r){var n=e.extend({one:!0},r);return this.each(function(){var r=e(this);if(r.appeared=!1,!a)return void r.trigger("appear",n.data);var p=e(window),t=function(){if(!r.is(":visible"))return void(r.appeared=!1);var e=p.scrollLeft(),a=p.scrollTop(),t=r.offset(),i=t.left,o=t.top;o+r.height()>=a&&o<=a+p.height()&&i+r.width()>=e&&i<=e+p.width()?r.appeared||r.trigger("appear",n.data):r.appeared=!1},i=function(){if(r.appeared=!0,n.one){p.unbind("scroll",t);var i=e.inArray(t,e.fn.appear.checks);i>=0&&e.fn.appear.checks.splice(i,1)}a.apply(this,arguments)};n.one?r.one("appear",n.data,i):r.bind("appear",n.data,i),p.scroll(t),e.fn.appear.checks.push(t),t()})},e.extend(e.fn.appear,{checks:[],timeout:null,checkAll:function(){var a=e.fn.appear.checks.length;if(a>0)for(;a--;)e.fn.appear.checks[a]()},run:function(){e.fn.appear.timeout&&clearTimeout(e.fn.appear.timeout),e.fn.appear.timeout=setTimeout(e.fn.appear.checkAll,20)}}),e.each(["append","prepend","after","before","attr","removeAttr","addClass","removeClass","toggleClass","remove","css","show","hide"],function(a,r){var n=e.fn[r];n&&(e.fn[r]=function(){var a=n.apply(this,arguments);return e.fn.appear.run(),a})})}(jQuery);