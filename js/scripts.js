function hasTouch(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}if(hasTouch())try{for(var si in document.styleSheets){var styleSheet=document.styleSheets[si];if(styleSheet.rules)for(var ri=styleSheet.rules.length-1;ri>=0;ri--)styleSheet.rules[ri].selectorText&&styleSheet.rules[ri].selectorText.match(":hover")&&styleSheet.deleteRule(ri)}}catch(ex){}var referenceSlider=function(){function a(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth}function b(a){for(var b=a.querySelector(".reference-slider"),c=b.querySelector(".reference-slider-box"),d=b.querySelector(".reference-slider-container"),e=d.querySelectorAll("ul li"),f=e.length,g=c.offsetWidth,h=0;f>h;h++)e[h].style.width=g+"px",e[h].classList.contains("element")&&e[h].setAttribute("data-id",h);var i=g*f;d.style.width=i+"px";for(var j=b.querySelector(".reference-dots"),k=j.querySelector("ul.dots"),l=k.querySelectorAll("li"),m=l.length,n=b.offsetWidth/3,o=0;m>o;o++)window.matchMedia("only screen and (max-width: 599px)").matches?l[o].style.width=n-15+"px":l[o].style.width="";var i=n*m;window.matchMedia("only screen and (max-width: 599px)").matches?j.style.width=i+"px":j.style.width=""}function c(a){var b=a.querySelector(".reference-dots ul.dots li.active");b&&(b.classList.remove("active"),setTimeout(function(){b.classList.add("active")},100))}function d(a){var b=a.querySelector(".reference-slider"),c=b.querySelector(".reference-slider-box"),d=b.querySelector(".reference-slider-container ul"),e=d.querySelectorAll("li");e[0].classList.add("active");var f=e[0].innerHTML,g=e[0].style.backgroundImage,h=e[e.length-1].innerHTML,i=e[e.length-1].style.backgroundImage,j=document.createElement("LI");j.setAttribute("class","clone-last"),d.insertBefore(j,d.firstChild);var k=document.createElement("LI");k.setAttribute("class","clone-first"),d.insertBefore(k,d.lastChild);var l=d.querySelector(".clone-last");l.innerHTML=h,l.style.backgroundImage=i;var m=d.querySelector(".clone-first");m.innerHTML=f,m.style.backgroundImage=g,d.style.marginLeft="-"+c.offsetWidth+"px"}function e(a){var b=a.querySelector(".reference-slider .reference-slider-container ul"),c=b.querySelector("li.element.active"),d=parseFloat(c.getAttribute("data-id")),e=parseFloat(c.style.width,10);b.style.marginLeft="-"+e*d+"px"}function f(a,b){a.classList.add("disabled-click"),setTimeout(function(){a.classList.remove("disabled-click")},b.slideTime)}function g(b,c){function d(a){var d=b.querySelector(".reference-slider"),e=d.querySelector(".reference-slider-box"),g=d.querySelector(".reference-slider-container ul"),h=g.querySelectorAll("li"),i=g.querySelector("li.element.active");f(d,c);var j=parseFloat(i.style.width,10),k=-1*parseFloat(g.style.marginLeft,10),l=b.querySelector(".reference-dots"),m=l.querySelector("ul.dots"),n=m.querySelectorAll("li");if(void 0===a&&(a=0),k<=(h.length-3)*j){i.classList.remove("active");var o=i.nextElementSibling;o.classList.add("active"),g.style.transition="all "+c.slideTime+"ms ease-out",a?g.style.marginLeft="-"+(k+j+a)+"px":g.style.marginLeft="-"+(k+j)+"px",setTimeout(function(){g.style.transition=""},c.slideTime);for(var p=(parseFloat(o.getAttribute("data-id")),parseFloat(i.getAttribute("data-id"))),q=0,r=n.length;r>q;q++){var s=n[q],t=parseFloat(s.getAttribute("data-id"));if(p==t){s.classList.remove("active");var u=s.nextElementSibling;u&&u.classList.add("active")}}}else if(k==(h.length-2)*j)n[0].classList.add("active"),n[n.length-1].classList.remove("active"),g.style.transition="all "+c.slideTime+"ms ease-out",g.style.marginLeft="-"+(k+j)+"px",setTimeout(function(){g.style.transition="",i.classList.remove("active"),h[1].classList.add("active"),g.style.marginLeft="-"+e.offsetWidth+"px"},c.slideTime);else{i.classList.remove("active");var o=i.nextElementSibling;o.classList.add("active");var v=d.querySelector(".reference-dots ul.dots li.active");v.classList.remove("active");var w=v.nextElementSibling;w&&w.classList.add("active"),g.style.transition="all "+c.slideTime+"ms ease-out",a?g.style.marginLeft="-"+(k+j+a)+"px":g.style.marginLeft="-"+(k+j)+"px",k>(h.length-2)*j&&(n[0].classList.add("active"),n[n.length-2].classList.remove("active"),setTimeout(function(){g.style.transition="",i.classList.remove("active"),h[1].classList.add("active"),g.style.marginLeft="-"+e.offsetWidth+"px"},c.slideTime))}}function e(a){function d(){o[0].classList.remove("active"),o[o.length-1].classList.add("active"),h.style.marginLeft="0px",h.style.transition="all "+c.slideTime+"ms ease-out",h.style.marginLeft="0px",setTimeout(function(){h.style.transition="",j.classList.remove("active"),i[i.length-2].classList.add("active"),h.style.marginLeft="-"+g.offsetWidth*(i.length-2)+"px"},c.slideTime)}var e=b.querySelector(".reference-slider"),g=e.querySelector(".reference-slider-box"),h=e.querySelector(".reference-slider-container ul"),i=h.querySelectorAll("li"),j=h.querySelector("li.element.active");f(e,c);var k=parseFloat(j.style.width,10),l=-1*parseFloat(h.style.marginLeft,10),m=b.querySelector(".reference-dots"),n=m.querySelector("ul.dots"),o=n.querySelectorAll("li");if(void 0===a&&(a=0),l>k){j.classList.remove("active");var p=j.previousElementSibling;p.classList.add("active"),h.style.transition="all "+c.slideTime+"ms ease-out",a?h.style.marginLeft="-"+(l-k+a)+"px":h.style.marginLeft="-"+(l-k)+"px",setTimeout(function(){h.style.transition=""},c.slideTime);for(var q=(parseFloat(p.getAttribute("data-id")),parseFloat(j.getAttribute("data-id"))),r=0,s=o.length;s>r;r++){var t=o[r],u=parseFloat(t.getAttribute("data-id"));q==u&&(t.classList.remove("active"),t.previousElementSibling.classList.add("active"))}}else l==k,d()}var g=b.querySelector(".reference-slider-right"),h=b.querySelector(".reference-slider-left");if(1==c.autoPlay)var i=setInterval(d,c.playTime);h.addEventListener("click",function(){e(),1==c.autoPlay&&(clearInterval(i),i=setInterval(d,c.playTime))},!1),g.addEventListener("click",function(){d(),1==c.autoPlay&&(clearInterval(i),i=setInterval(d,c.playTime))},!1);var j=a();window.addEventListener("resize",function(){var b=a();b!==j&&1==c.autoPlay&&(clearInterval(i),i=setInterval(d,c.playTime))},!1);var k=b.querySelector(".reference-slider-box"),l=k.querySelector(".reference-slider-container ul"),m=l.querySelectorAll("li"),n=0,o=0,p=15,q=15;k&&(k.addEventListener("touchstart",function(a){var b=a.changedTouches[0];n=parseInt(b.clientX),o=parseInt(b.clientY),sliderUlGet=-1*parseFloat(l.style.marginLeft,10),sliderLiWidth=parseFloat(m[0].style.width,10)},!1),k.addEventListener("touchmove",function(a){function b(a){sliderUlGet==sliderLiWidth*m.length-sliderLiWidth?l.style.marginLeft="-"+(sliderUlGet-a)+"px":sliderUlGet==sliderLiWidth?l.style.marginLeft="-"+(sliderUlGet-a)+"px":l.style.marginLeft="-"+(sliderUlGet-a)+"px"}var c=a.changedTouches[0],d=parseInt(c.clientX)-n,e=parseInt(c.clientY)-o;d>1.5*p&&Math.abs(e)<q?(d=parseInt(c.clientX)-p-n,b(d)):1.5*-p>d&&Math.abs(e)<q&&(d=parseInt(c.clientX)+p-n,b(d))},!1),k.addEventListener("touchend",function(a){var f=a.changedTouches[0],g=parseInt(f.clientX)-n,h=parseInt(f.clientY)-o;if(g>1.5*p&&Math.abs(h)<q)g-=p,e(g),1==c.autoPlay&&(clearInterval(i),i=setInterval(d,c.playTime));else if(1.5*-p>g&&Math.abs(h)<q)g+=p,d(g),1==c.autoPlay&&(clearInterval(i),i=setInterval(d,c.playTime));else{var j=b.querySelector(".reference-slider");l=j.querySelector(".reference-slider-container ul"),sliderLiActive=l.querySelector("li.element.active");var k=parseFloat(sliderLiActive.getAttribute("data-id"),10)*parseFloat(sliderLiActive.style.width,10);l.style.transition="all "+c.slideTime+"ms",setTimeout(function(){l.style.transition=""},c.slideTime),l.style.marginLeft="-"+k+"px"}},!1));var r=b.querySelector(".reference-slider"),k=r.querySelector(".reference-slider-box"),l=r.querySelector(".reference-slider-container ul"),m=l.querySelectorAll("li.element"),s=b.querySelector(".reference-slider .reference-dots ul.dots"),t=s.querySelectorAll("li");t[0].classList.add("active"),s.classList.add("delay-none"),setTimeout(function(){s.classList.remove("delay-none"),s.classList.add("delay")},c.playTime),1==c.autoPlay?s.classList.add("play"):s.classList.add("stop");for(var u=[],v=0,w=t.length;w>v;v++){var x=t[v];u.push(x),x.setAttribute("data-id",v+1),x.addEventListener("click",function(){1==c.autoPlay&&(clearInterval(i),i=setInterval(d,c.playTime)),f(r,c);for(var a=this,b=0;b<u.length,b<m.length;b++){var e=m[b],g=u[b];if(parseFloat(a.getAttribute("data-id"))==parseFloat(e.getAttribute("data-id"))?e.classList.add("active"):e.classList.remove("active"),a==g){g.classList.add("active");var h=parseFloat(a.getAttribute("data-id"));l.style.transition="all "+c.slideTime+"ms ease-out",l.style.marginLeft="-"+h*k.offsetWidth+"px",setTimeout(function(){l.style.transition=""},c.slideTime)}else g.classList.remove("active")}},!1)}}function h(a){setTimeout(function(){a.classList.remove("show"),setTimeout(function(){a.classList.remove("loading")},1e3)},1e3)}function i(f){var i=document.querySelector(".reference."+f.namespace);if(i){d(i),b(i),g(i,f);var j=a();window.addEventListener("resize",function(){var d=a();d!==j&&(b(i),e(i),c(i))},!1),h(i)}}return{app:i}}();