// Smartresize

!function(t,i){"use strict";jQuery.fn[i]=function(t){return t?this.bind("resize",(e=t,function(){var t=this,i=arguments;u?clearTimeout(u):n&&e.apply(t,i),u=setTimeout(function(){n||(e.apply(t,i),u=null)},r||100)})):this.trigger(i);var e,r,n,u}}(jQuery,"smartresize");