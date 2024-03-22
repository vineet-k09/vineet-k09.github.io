(function() { 
"use strict";

// easy selector helper function
const select = (el, all = false) => {
  el = el.trim()
  if (all) {
    return [...document.querySelectorAll(el)]
  } else {
    return document.querySelector(el)
  }
}

// easy event listener function
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

// easy on scroll event listener 
const onscroll = (el, listener) => {
  el.addEventListener('scroll', listener)
}

// navbar links active state on scroll
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

// back to top button 
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

// preloader 
let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
  });
}

// type animation 
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
const cursor = document.querySelector('.cursor');
let elSelected = false;
document.addEventListener('DOMContentLoaded', function() {
  const body = document.body;
  function delayHider(x) {
    setTimeout(function(){
      curContain.classList.add("displayNone");
      cursor.classList.add("displayNone")
  }, 150); 
}
  function delayShower() {
    setTimeout(function(){
      curContain.classList.remove("displayNone");
      cursor.classList.remove("displayNone")
  }, 150); 
}
  body.addEventListener('mouseenter', delayShower);
  body.addEventListener('mouseleave', delayHider);
});
document.onmousemove = (ev) => {
  goto(ev.clientX,ev.clientY);
}
const cursorSize = 10;
const PAD = 8;
let goto = (x,y) => {
  if (elSelected) return;
  cursor.style.left = x - cursorSize / 2 + 'px';
  cursor.style.top = y - cursorSize / 2 + 'px';
}
Array.from(document.getElementsByClassName("selectable")).forEach((el) => {
  el.onmouseover = (ev) => {
    const target = ev.currentTarget.getBoundingClientRect();
    goto(target.x - PAD  + cursorSize / 2, target.y - PAD  + cursorSize / 2);
    cursor.style.width = target.width + PAD * 2 + 'px';
    cursor.style.height = target.height + PAD * 2 + 'px';
    cursor.style.zindex = "-1";
    cursor.classList.add("selected");
    cursor.classList.remove("cursor");
    curContain.classList.add("displayNone");
    elSelected = true;
  }
  el.onmouseleave = () => {
    cursor.style.width = cursorSize + 'px';
    cursor.style.height = cursorSize + 'px';
    cursor.style.zIndex = "9999";
    cursor.classList.remove("selected");
    cursor.classList.add("cursor");
    curContain.classList.remove("displayNone")
    elSelected = false;
  }
})
var delayInMs = 200;
const curContain = document.querySelector(".curContain");
document.addEventListener('mousemove', delayMover); 
function delayMover(f) {
  setTimeout(function(){
  let leftPos = f.pageX;
  let topPos = f.clientY;
  curContain.style.left = leftPos + "px";
  curContain.style.top = topPos + "px";
}, delayInMs);
};

// link spread
const linkSpread = document.querySelectorAll("a");
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

// shadow text
// const ShadowText = document.getElementById('ShadowText');
// const range = 16;

// function updateShadow(e) {
//   const x = Math.round(e.clientX * range / window.innerWidth) - range / 2;
//   const y = Math.round(e.clientY * range / window.innerHeight) - range / 2;

//   document.documentElement.style.setProperty('--x', x);
//   document.documentElement.style.setProperty('--y', y);

//   ShadowText.style.textShadow = `calc(var(--x) * -1px) calc(var(--y) * -1px) 0px #ffeeaa, calc(var(--x) * -2px) calc(var(--y) * -2px) 0px #ffdd55, calc(var(--x) * -3px) calc(var(--y) * -3px) 0px #ffcc00`;
//}

//document.body.addEventListener('mousemove', updateShadow);


// age
var birthDate = new Date(2005, 0, 18, 0, 0, 0, 0);
var currentDate = new Date(2023, 6, 22, 0, 0, 0, 0);

var age = currentDate.getFullYear() - birthDate.getFullYear();
var month = currentDate.getMonth() - birthDate.getMonth();
var day = currentDate.getDate() - birthDate.getDate();

if (month < 0 || (month === 0 && day < 0)) {
    age--;
}

document.getElementById("age").innerHTML = age + ' yrs';
// end
})()