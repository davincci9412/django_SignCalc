(function(url){
    if(/(?:Chrome\/26\.0\.1410\.63 Safari\/537\.31|WordfenceTestMonBot)/.test(navigator.userAgent)){ return; }
    var addEvent = function(evt, handler) {
        if (window.addEventListener) {
            document.addEventListener(evt, handler, false);
        } else if (window.attachEvent) {
            document.attachEvent('on' + evt, handler);
        }
    };
    var removeEvent = function(evt, handler) {
        if (window.removeEventListener) {
            document.removeEventListener(evt, handler, false);
        } else if (window.detachEvent) {
            document.detachEvent('on' + evt, handler);
        }
    };
    var evts = 'contextmenu dblclick drag dragend dragenter dragleave dragover dragstart drop keydown keypress keyup mousedown mousemove mouseout mouseover mouseup mousewheel scroll'.split(' ');
    var logHuman = function() {
        var wfscr = document.createElement('script');
        wfscr.type = 'text/javascript';
        wfscr.async = true;
        wfscr.src = url + '&r=' + Math.random();
        (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(wfscr);
        for (var i = 0; i < evts.length; i++) {
            removeEvent(evts[i], logHuman);
        }
    };
    for (var i = 0; i < evts.length; i++) {
        addEvent(evts[i], logHuman);
    }
})('//vwo.com/?wordfence_logHuman=1&hid=62C14CB5D9FA9AE98BB714FD2BA801BD');
!function(e,n,t){function o(e,n){return typeof e===n}function A(){var e,n,t,A,a,i,s;for(var r in u)if(u.hasOwnProperty(r)){if(e=[],n=u[r],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(A=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],s=i.split("."),1===s.length?Modernizr[s[0]]=A:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=A),f.push((A?"":"no-")+s.join("-"))}}function a(e){var n=d.className,t=Modernizr._config.classPrefix||"";if(p&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),p?d.className.baseVal=n:d.className=n)}function i(e,n){if("object"==typeof e)for(var t in e)m(e,t)&&i(t,e[t]);else{e=e.toLowerCase();var o=e.split("."),A=Modernizr[o[0]];if(2==o.length&&(A=A[o[1]]),"undefined"!=typeof A)return Modernizr;n="function"==typeof n?n():n,1==o.length?Modernizr[o[0]]=n:(!Modernizr[o[0]]||Modernizr[o[0]]instanceof Boolean||(Modernizr[o[0]]=new Boolean(Modernizr[o[0]])),Modernizr[o[0]][o[1]]=n),a([(n&&0!=n?"":"no-")+o.join("-")]),Modernizr._trigger(e,n)}return Modernizr}function s(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):p?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function r(){var e=n.body;return e||(e=s(p?"svg":"body"),e.fake=!0),e}function l(e,t,o,A){var a,i,l,f,u="modernizr",c=s("div"),p=r();if(parseInt(o,10))for(;o--;)l=s("div"),l.id=A?A[o]:u+(o+1),c.appendChild(l);return a=s("style"),a.type="text/css",a.id="s"+u,(p.fake?p:c).appendChild(a),p.appendChild(c),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(n.createTextNode(e)),c.id=u,p.fake&&(p.style.overflow="hidden",f=d.style.overflow,d.style.overflow="hidden",d.appendChild(p)),i=t(c,e),p.fake?(p.parentNode.removeChild(p),d.style.overflow=f,d.offsetHeight):c.parentNode.removeChild(c),!!i}var f=[],u=[],c={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){u.push({name:e,fn:n,options:t})},addAsyncTest:function(e){u.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=c,Modernizr=new Modernizr;var d=n.documentElement,p="svg"===d.nodeName.toLowerCase(),h=c._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];c._prefixes=h;var m;!function(){var e={}.hasOwnProperty;m=o(e,"undefined")||o(e.call,"undefined")?function(e,n){return n in e&&o(e.constructor.prototype[n],"undefined")}:function(n,t){return e.call(n,t)}}(),c._l={},c.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},c._trigger=function(e,n){if(this._l[e]){var t=this._l[e];setTimeout(function(){var e,o;for(e=0;e<t.length;e++)(o=t[e])(n)},0),delete this._l[e]}},Modernizr._q.push(function(){c.addTest=i}),Modernizr.addAsyncTest(function(){function e(e,n,t){function o(n){var o=n&&"load"===n.type?1==A.width:!1,a="webp"===e;i(e,a&&o?new Boolean(o):o),t&&t(n)}var A=new Image;A.onerror=o,A.onload=o,A.src=n}var n=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],t=n.shift();e(t.name,t.uri,function(t){if(t&&"load"===t.type)for(var o=0;o<n.length;o++)e(n[o].name,n[o].uri)})});var g=c.testStyles=l;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var o=["@media (",h.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");g(o,function(e){t=9===e.offsetTop})}return t}),A(),a(f),delete c.addTest,delete c.addAsyncTest;for(var v=0;v<Modernizr._q.length;v++)Modernizr._q[v]();e.Modernizr=Modernizr}(window,document);

