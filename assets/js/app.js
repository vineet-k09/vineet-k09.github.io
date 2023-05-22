(function() { 
"use strict";
/* Easy selector helper function*/ 
const select = (el, all = false) => {
  el = el.trim()
  if (all) {
    return [...document.querySelectorAll(el)]
  } else {
    return document.querySelector(el)
  }
}
/* Easy event listener function*/ 
const on = (type, el, listener, all = false) => {
  let selectEl = select(el, all)
  if (selectEl) {
    if (all) {
      selectEl.forEach(e => e.addEventListener(type, listener))
    } else {
      selectEl.addEventListener(type, listener)
    }
  }
}
/* Easy on scroll event listener */ 
const onscroll = (el, listener) => {
  el.addEventListener('scroll', listener)
}

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

/* Back to top button*/ 
let backtotop = select('.back-to-top')
if (backtotop) {
  const toggleBacktotop = () => {
    if (window.scrollY > 100) {
      backtotop.classList.add('active')
    } else {
      backtotop.classList.remove('active')
    }
  }
  window.addEventListener('load', toggleBacktotop)
  onscroll(document, toggleBacktotop)
}

/* Preloader*/ 
let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
  });
}

/*type animation*/ 
document.addEventListener('DOMContentLoaded', function(){
  var typed = new Typed('.typed', {
  strings: ['Kushwaha'],
  typeSpeed: 100,
  loop: true,
  backDelay: 2000,
  shuffle: true,
  cursorChar: '.',
  showCursor: true,
  contentType: 'html',
  });
});

// aos
AOS.init({
  duration: 1400,
  offset: 0, 
  easing: 'ease-in',
  delay: 50, 
  once: true
});

// custom cursor
var cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', function(e) {
cursor.style.left = e.clientX - 5 + 'px';
cursor.style.top = e.clientY - 5 + 'px';
});
var delayInMs = 50;
const linkSpread = document.querySelectorAll("a");
const curContain = document.querySelector(".curContain");
document.addEventListener('mousemove', curMover); 
function curMover(f) {
  setTimeout(function(){
  let leftPos = f.pageX;
  let topPos = f.clientY;
  curContain.style.left = leftPos + "px";
  curContain.style.top = topPos + "px";
}, delayInMs);
};
linkSpread.forEach(linkSpread => {
  linkSpread.addEventListener('mouseenter', () => {
    curContain.classList.add("large");
  })
})
linkSpread.forEach(linkSpread => {
  linkSpread.addEventListener('mouseleave', () => {
    curContain.classList.remove("large");
  })
})
// end
})()