var DEBUG=!0,isAndroidStockBrowser=function(){var n=window.navigator.userAgent.match(/Android.*AppleWebKit\/([\d.]+)/);return n&&n[1]<537}();!function(n){var e,a=["webkit","moz"],i=0;for(e=0;e<a.length&&!n.requestAnimationFrame;++e)n.requestAnimationFrame=n[a[e]+"RequestAnimationFrame"],n.cancelAnimationFrame=n[a[e]+"CancelAnimationFrame"]||n[a[e]+"CancelRequestAnimationFrame"];n.requestAnimationFrame||(n.requestAnimationFrame=function(e){var a=Date.now(),t=Math.max(0,16-(a-i)),r=n.setTimeout(function(){e(a+t)},t);return i=a+t,r}),n.cancelAnimationFrame||(n.cancelAnimationFrame=function(e){n.clearTimeout(e)})}(window);