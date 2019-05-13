/*
Reference slider - Code by Zsolt Király
v1.0.2 - 2017-12-07
*/

function hasTouch() {
    return 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}

if (hasTouch()) {
    try {
        for (var si in document.styleSheets) {
            var styleSheet = document.styleSheets[si];
            if (!styleSheet.rules) continue;

            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                if (!styleSheet.rules[ri].selectorText) continue;

                if (styleSheet.rules[ri].selectorText.match(':hover')) {
                    styleSheet.deleteRule(ri);
                }
            }
        }
    } catch (ex) {}
}

var referenceSlider = function() {

    function signatura() {
        if (window['console']) {
            const text = {
                black: '%c     ',
                blue: '%c   ',
                author: '%c  Zsolt Király  ',
                github: '%c  https://zsoltkiraly.com/'
            }

            const style = {
                black: 'background: #282c34',
                blue: 'background: #61dafb',
                author: 'background: black; color: white',
                github: ''
            }

            console.log(text.black + text.blue + text.author + text.github, style.black, style.blue, style.author, style.github);
        }
    }

    signatura();

    function getWidth() {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    }

    function sliderWidth(rS) {
        var slider = rS.querySelector('.reference-slider'),
            sliderBox = slider.querySelector('.reference-slider-box'),
            sliderContainer = slider.querySelector('.reference-slider-container'),
            sliderLis = sliderContainer.querySelectorAll('ul li');

        var lenSlider = sliderLis.length,
            sliderLiWidth = sliderBox.offsetWidth;

        var i = 0;

        for (; i < lenSlider; i++) {
            sliderLis[i].style.width = sliderLiWidth + 'px';

            if (sliderLis[i].classList.contains('element')) {

                sliderLis[i].setAttribute('data-id', i);
            }
        }

        var sliderFullWidth = sliderLiWidth * lenSlider;
        sliderContainer.style.width = sliderFullWidth + 'px';

        
        var referenceDots = slider.querySelector('.reference-dots'),
            referenceDotsUl = referenceDots.querySelector('ul.dots'),
            referenceDotsLis = referenceDotsUl.querySelectorAll('li');

        var lenreferenceDotsLis = referenceDotsLis.length,
            referenceDotsLiWidth = slider.offsetWidth / 3;

        var j = 0;

        for (; j < lenreferenceDotsLis; j++) {

            if (window.matchMedia('only screen and (max-width: 599px)').matches) {
                referenceDotsLis[j].style.width = (referenceDotsLiWidth - 15) + 'px';

            } else {
                referenceDotsLis[j].style.width = '';
            }
        }

        var sliderFullWidth = referenceDotsLiWidth * lenreferenceDotsLis;
        if (window.matchMedia('only screen and (max-width: 599px)').matches) {
            referenceDots.style.width = sliderFullWidth + 'px';

        } else {
           referenceDots.style.width = ''; 
        }
    }

    function restartAnimation(rS) {
        var dotsUlLi = rS.querySelector('.reference-dots ul.dots li.active');

        if(dotsUlLi) {
            dotsUlLi.classList.remove('active');

            setTimeout(function() {
                dotsUlLi.classList.add('active');
            }, 100);
        }
    }

    function clone(rS) {
        var slider = rS.querySelector('.reference-slider'),
            sliderBox = slider.querySelector('.reference-slider-box'),
            sliderUl = slider.querySelector('.reference-slider-container ul'),
            sliderLis = sliderUl.querySelectorAll('li');

        sliderLis[0].classList.add('active');

        var sliderLiFirstHTML = sliderLis[0].innerHTML;
        var sliderLiFirstBackgroundImage = sliderLis[0].style.backgroundImage;

        var sliderLiLastHTML = sliderLis[sliderLis.length - 1].innerHTML;
        var sliderLiLastBackgroundImage = sliderLis[sliderLis.length - 1].style.backgroundImage;

        var cloneLiFirst = document.createElement('LI');
        cloneLiFirst.setAttribute('class', 'clone-last');
        sliderUl.insertBefore(cloneLiFirst, sliderUl.firstChild);

        var cloneLiLast = document.createElement('LI');
        cloneLiLast.setAttribute('class', 'clone-first');
        sliderUl.insertBefore(cloneLiLast, sliderUl.lastChild);

        var cloneLast = sliderUl.querySelector('.clone-last');
        cloneLast.innerHTML = sliderLiLastHTML;
        cloneLast.style.backgroundImage = sliderLiLastBackgroundImage;

        var cloneFirst = sliderUl.querySelector('.clone-first');
        cloneFirst.innerHTML = sliderLiFirstHTML;
        cloneFirst.style.backgroundImage = sliderLiFirstBackgroundImage;

        sliderUl.style.marginLeft = '-' + sliderBox.offsetWidth + 'px';
    }

    function setWidthResize(rS) {
        var sliderUl = rS.querySelector('.reference-slider .reference-slider-container ul'),
            sliderLi = sliderUl.querySelector('li.element.active');

        var sliderLiDataId = parseFloat(sliderLi.getAttribute('data-id'));
        var sliderLiWidth = parseFloat(sliderLi.style.width, 10);

        sliderUl.style.marginLeft = '-' + (sliderLiWidth * sliderLiDataId) + 'px';
    }

    function disabled(disParam, cParam) {
        disParam.classList.add('disabled-click');

        setTimeout(function() {
            disParam.classList.remove('disabled-click');
        }, cParam.slideTime);
    }

    function navigation(rS, cParam) {
        var nextButton = rS.querySelector('.reference-slider-right'),
            prevButton = rS.querySelector('.reference-slider-left');

        function nextSlide(dI) {
            var slider = rS.querySelector('.reference-slider'),
                sliderBox = slider.querySelector('.reference-slider-box'),
                sliderUl = slider.querySelector('.reference-slider-container ul'),
                sliderLi = sliderUl.querySelectorAll('li'),
                sliderLiActive = sliderUl.querySelector('li.element.active');

            disabled(slider, cParam);

            var sliderLiWidth = parseFloat(sliderLiActive.style.width, 10),
                sliderUlGet = (parseFloat(sliderUl.style.marginLeft, 10) * -1);

            var referenceDots = rS.querySelector('.reference-dots');
            var referenceDotsUl = referenceDots.querySelector('ul.dots');
            var dotsUlLi = referenceDotsUl.querySelectorAll('li');

            if (dI === undefined) {
                dI = 0;
            }

            if (sliderUlGet <= (sliderLi.length - 3) * sliderLiWidth) {
                sliderLiActive.classList.remove('active');

                var nextElement = sliderLiActive.nextElementSibling;
                nextElement.classList.add('active');

                sliderUl.style.transition = 'all ' + cParam.slideTime + 'ms ease-out';

                if (dI) {
                    sliderUl.style.marginLeft = '-' + (sliderUlGet + sliderLiWidth + dI) + 'px';
                    
                } else {
                    sliderUl.style.marginLeft = '-' + (sliderUlGet + sliderLiWidth) + 'px';
                }

                setTimeout(function() {
                    sliderUl.style.transition = '';
                }, cParam.slideTime);

                var nextElementId = parseFloat(nextElement.getAttribute('data-id')),
                    activeElementId = parseFloat(sliderLiActive.getAttribute('data-id'));

                var i = 0,
                    len = dotsUlLi.length;
                for (; i < len; i++) {

                    var dotsUlLis = dotsUlLi[i],
                        dotsUlLisId = parseFloat(dotsUlLis.getAttribute('data-id'));

                    if (activeElementId == dotsUlLisId) {
                        dotsUlLis.classList.remove('active');

                        var nextActive = dotsUlLis.nextElementSibling;

                        if(nextActive) {
                            nextActive.classList.add('active');
                        }
                    }
                }

            } else {

                if (sliderUlGet == (sliderLi.length - 2) * sliderLiWidth) {
                    dotsUlLi[0].classList.add('active');
                    dotsUlLi[dotsUlLi.length - 1].classList.remove('active');

                    sliderUl.style.transition = 'all ' + cParam.slideTime + 'ms ease-out';
                    sliderUl.style.marginLeft = '-' + (sliderUlGet + sliderLiWidth) + 'px';

                    setTimeout(function() {
                        sliderUl.style.transition = '';
                        sliderLiActive.classList.remove('active');

                        sliderLi[1].classList.add('active');

                        sliderUl.style.marginLeft = '-' + sliderBox.offsetWidth + 'px';

                    }, cParam.slideTime);

                } else {

                    sliderLiActive.classList.remove('active');

                    var nextElement = sliderLiActive.nextElementSibling;
                    nextElement.classList.add('active');

                    var activeDots = slider.querySelector('.reference-dots ul.dots li.active');

                    activeDots.classList.remove('active');

                    var nextDots = activeDots.nextElementSibling;

                    if(nextDots) {
                        nextDots.classList.add('active');
                    }

                    sliderUl.style.transition = 'all ' + cParam.slideTime + 'ms ease-out';

                    if (dI) {
                        sliderUl.style.marginLeft = '-' + (sliderUlGet + sliderLiWidth + dI) + 'px';
                        
                    } else {
                        sliderUl.style.marginLeft = '-' + (sliderUlGet + sliderLiWidth) + 'px';
                    }

                    if (sliderUlGet > (sliderLi.length - 2) * sliderLiWidth) {

                        dotsUlLi[0].classList.add('active');
                        dotsUlLi[dotsUlLi.length - 2].classList.remove('active');

                        setTimeout(function() {
                            sliderUl.style.transition = '';
                            sliderLiActive.classList.remove('active');

                            sliderLi[1].classList.add('active');

                            sliderUl.style.marginLeft = '-' + sliderBox.offsetWidth + 'px';

                        }, cParam.slideTime);
                    }
                }
            }
        }

        function prevSlide(dI) {
            var slider = rS.querySelector('.reference-slider'),
                sliderBox = slider.querySelector('.reference-slider-box'),
                sliderUl = slider.querySelector('.reference-slider-container ul'),
                sliderLi = sliderUl.querySelectorAll('li'),
                sliderLiActive = sliderUl.querySelector('li.element.active');

            disabled(slider, cParam);

            var sliderLiWidth = parseFloat(sliderLiActive.style.width, 10),
                sliderUlGet = (parseFloat(sliderUl.style.marginLeft, 10) * -1);

            var referenceDots = rS.querySelector('.reference-dots');
            var referenceDotsUl = referenceDots.querySelector('ul.dots');
            var dotsUlLi = referenceDotsUl.querySelectorAll('li');

            if (dI === undefined) {
                dI = 0;
            }

            if (sliderUlGet > sliderLiWidth) {

                sliderLiActive.classList.remove('active');

                var previousElement = sliderLiActive.previousElementSibling;
                previousElement.classList.add('active');

                sliderUl.style.transition = 'all ' + cParam.slideTime + 'ms ease-out';

                if (dI) {
                    sliderUl.style.marginLeft = '-' + (sliderUlGet - sliderLiWidth + dI) + 'px';

                } else {
                    sliderUl.style.marginLeft = '-' + (sliderUlGet - sliderLiWidth) + 'px';
                }

                setTimeout(function() {
                    sliderUl.style.transition = '';
                }, cParam.slideTime);

                var previousElementId = parseFloat(previousElement.getAttribute('data-id'));
                var activeElementId = parseFloat(sliderLiActive.getAttribute('data-id'));

                var i = 0,
                    len = dotsUlLi.length;
                for (; i < len; i++) {

                    var dotsUlLis = dotsUlLi[i];

                    var dotsUlLisId = parseFloat(dotsUlLis.getAttribute('data-id'));

                    if (activeElementId == dotsUlLisId) {
                        dotsUlLis.classList.remove('active');
                        dotsUlLis.previousElementSibling.classList.add('active');
                    }
                }

            } else {
                function setLast() {
                    dotsUlLi[0].classList.remove('active');
                    dotsUlLi[dotsUlLi.length - 1].classList.add('active');

                    sliderUl.style.marginLeft = '0px';

                    sliderUl.style.transition = 'all ' + cParam.slideTime + 'ms ease-out';
                    sliderUl.style.marginLeft = '0px';

                    setTimeout(function() {
                        sliderUl.style.transition = '';
                        sliderLiActive.classList.remove('active');

                        sliderLi[sliderLi.length - 2].classList.add('active');

                        sliderUl.style.marginLeft = '-' + (sliderBox.offsetWidth * (sliderLi.length - 2)) + 'px';
                    }, cParam.slideTime);
                }

                if (sliderUlGet == sliderLiWidth) {
                    setLast();
                } else {
                    setLast();
                }
            }
        }

        if (cParam.autoPlay == true) {
            var autoplay = setInterval(nextSlide, cParam.playTime);
        }

        prevButton.addEventListener('click', function() {
            prevSlide();

            if (cParam.autoPlay == true) {
                clearInterval(autoplay);
                autoplay = setInterval(nextSlide, cParam.playTime);
            }
        }, false);

        nextButton.addEventListener('click', function() {
            nextSlide();

            if (cParam.autoPlay == true) {
                clearInterval(autoplay);
                autoplay = setInterval(nextSlide, cParam.playTime);
            }
        }, false);

        var cachedWidth = getWidth();

        window.addEventListener('resize', function() {
            var newWidth = getWidth();

            if(newWidth !== cachedWidth) {
                if (cParam.autoPlay == true) {
                    clearInterval(autoplay);
                    autoplay = setInterval(nextSlide, cParam.playTime);
                }
            }
        }, false);

        var sliderBox = rS.querySelector('.reference-slider-box');

        var sliderUl = sliderBox.querySelector('.reference-slider-container ul'),
            sliderLi = sliderUl.querySelectorAll('li'),
            startx = 0,
            starty = 0,
            distx = 0,
            disty = 0,
            gap = 15,
            yMax = 15;

        if (sliderBox) {
            sliderBox.addEventListener('touchstart', function(e) {
                var touchobj = e.changedTouches[0];
                    startx = parseInt(touchobj.clientX);
                    starty = parseInt(touchobj.clientY);

                sliderUlGet = (parseFloat(sliderUl.style.marginLeft, 10) * -1);
                sliderLiWidth = parseFloat(sliderLi[0].style.width, 10);
            }, false);

            sliderBox.addEventListener('touchmove', function(e) {
                var touchobj = e.changedTouches[0],
                    distx = parseInt(touchobj.clientX) - startx,
                    disty = parseInt(touchobj.clientY) - starty;

                function gapSlide(d) {
                    if (sliderUlGet == (sliderLiWidth * sliderLi.length - (sliderLiWidth))) {
                        sliderUl.style.marginLeft = '-' + (sliderUlGet - d) + 'px';

                    } else {

                        if (sliderUlGet == sliderLiWidth) {
                            sliderUl.style.marginLeft = '-' + (sliderUlGet - d) + 'px';

                        } else {
                            sliderUl.style.marginLeft = '-' + (sliderUlGet - d) + 'px';
                        }
                    }
                }

                if(distx > gap*1.5 && Math.abs(disty) < yMax) {
                    distx = parseInt(touchobj.clientX) - gap - startx;

                    gapSlide(distx);

                } else if(distx < -gap*1.5 && Math.abs(disty) < yMax) {
                    distx = parseInt(touchobj.clientX) + gap - startx;

                    gapSlide(distx);
                }
            }, false);

            sliderBox.addEventListener('touchend', function(e) {
                var touchobj = e.changedTouches[0],
                    distx = parseInt(touchobj.clientX) - startx,
                    disty = parseInt(touchobj.clientY) - starty;

                if (distx > gap*1.5 && Math.abs(disty) < yMax) {
                    distx = distx - gap;
                    prevSlide(distx);

                    if (cParam.autoPlay == true) {
                        clearInterval(autoplay);
                        autoplay = setInterval(nextSlide, cParam.playTime);
                    }

                } else if (distx < -gap*1.5 && Math.abs(disty) < yMax) {
                    distx = distx + gap;
                    nextSlide(distx);

                    if (cParam.autoPlay == true) {
                        clearInterval(autoplay);
                        autoplay = setInterval(nextSlide, cParam.playTime);
                    }

                } else {

                    var slider = rS.querySelector('.reference-slider')
                        sliderUl = slider.querySelector('.reference-slider-container ul')
                        sliderLiActive = sliderUl.querySelector('li.element.active');

                    var sliderActiveDistance = parseFloat(sliderLiActive.getAttribute('data-id'), 10) * parseFloat(sliderLiActive.style.width, 10);

                    sliderUl.style.transition = 'all ' + cParam.slideTime + 'ms';

                    setTimeout(function() {
                        sliderUl.style.transition = '';
                    }, cParam.slideTime);

                    sliderUl.style.marginLeft = '-' + sliderActiveDistance + 'px';
                }
            }, false);
        }

        var slider = rS.querySelector('.reference-slider'),
            sliderBox = slider.querySelector('.reference-slider-box'),
            sliderUl = slider.querySelector('.reference-slider-container ul'),
            sliderLi = sliderUl.querySelectorAll('li.element');

        var dotsUl = rS.querySelector('.reference-slider .reference-dots ul.dots');
        var dotsUlLi = dotsUl.querySelectorAll('li');

        dotsUlLi[0].classList.add('active');

        dotsUl.classList.add('delay-none'); 

        setTimeout(function() {
            dotsUl.classList.remove('delay-none');
            dotsUl.classList.add('delay');
        }, cParam.playTime);

        if (cParam.autoPlay == true) {
            dotsUl.classList.add('play');
        } else {
            dotsUl.classList.add('stop');
        }

        var dotsArray = [];

        var i = 0,
            len = dotsUlLi.length;

        for (; i < len; i++) {

            var dotsUlLis = dotsUlLi[i];

            dotsArray.push(dotsUlLis);
            dotsUlLis.setAttribute('data-id', i + 1);
            dotsUlLis.addEventListener('click', function() {

                if (cParam.autoPlay == true) {
                    clearInterval(autoplay);
                    autoplay = setInterval(nextSlide, cParam.playTime);
                }

                disabled(slider, cParam);

                var obj = this;

                var i = 0;
                for (; i < dotsArray.length, i < sliderLi.length; i++) {
                    var sliderLis = sliderLi[i];
                    var dotsList = dotsArray[i];

                    if (parseFloat(obj.getAttribute('data-id')) == parseFloat(sliderLis.getAttribute('data-id'))) {
                        sliderLis.classList.add('active');
                    } else {
                        sliderLis.classList.remove('active');
                    }

                    if (obj == dotsList) {
                        dotsList.classList.add('active');

                        var objId = parseFloat(obj.getAttribute('data-id'));

                        sliderUl.style.transition = 'all ' + cParam.slideTime + 'ms ease-out';
                        sliderUl.style.marginLeft = '-' + (objId * sliderBox.offsetWidth) + 'px';

                        setTimeout(function() {
                            sliderUl.style.transition = '';
                        }, cParam.slideTime);

                    } else {
                        dotsList.classList.remove('active');
                    }
                }

            }, false);
        }
    }

    function loading(container) {
        setTimeout(function() {
            container.classList.remove('show');

            setTimeout(function() {
                container.classList.remove('loading');
            }, 1000);

        }, 1000);
    }

    function app(config) {
        var refSlider = document.querySelector('.reference.' + config.namespace + '');

        if(refSlider) {
            clone(refSlider);
            sliderWidth(refSlider);
            navigation(refSlider, config);

            var cachedWidth = getWidth();

            window.addEventListener('resize', function() {
                var newWidth = getWidth();

                if(newWidth !== cachedWidth) {
                    sliderWidth(refSlider);
                    setWidthResize(refSlider);
                    restartAnimation(refSlider);
                }
            }, false);

            loading(refSlider);
        }
    }

    return {
        app: app
    }
}();