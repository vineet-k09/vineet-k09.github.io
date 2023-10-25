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
    
const articles = [
    { title: "Article 1", url: "article1.html" },
    { title: "Article 2", url: "article2.html" },
];

function createArticleList() {
    const articleList = document.getElementById("article-list");

    articles.forEach((article, index) => {
        const articleDiv = document.createElement("div");
        articleDiv.className = "article";
        
        fetch(article.url)
            .then((response) => response.text())
            .then((html) => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, "text/html");
                const HeadImg = doc.querySelector("headimg");
                const HeadLine = doc.querySelector("headline");

                if (HeadImg || HeadLine) {
                    let additionalContent = "";
                    for (let i = 0; i < HeadImg.children.length; i++) {
                        const child = HeadImg.children[i];
                        if (child.tagName === "IMG") {
                            const imgSrc = child.getAttribute("src");
                            additionalContent += `<img src="${imgSrc}" alt="Image">`;
                        }
                    }
                    articleDiv.innerHTML = `
                        <h2 class="center">${article.title}</h2>
                        ${additionalContent}
                        <p class="headline">${HeadLine.innerHTML}
                        <br>
                        <a id="a" href="${article.url}">Read more <i class="bx bx-link selectable" style="top: 1.7px; position: relative"></i></a></p>
                    `;
                }
            })
            .catch((error) => {
                console.error(`Error fetching ${article.title}: ${error}`);
            });
        articleList.appendChild(articleDiv);
    });
}
window.onload = createArticleList();



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
// selected and selectable
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

// red changes
const toggleButton = document.getElementById("toggle-button");
const mainCssLink = document.getElementById("main-css");
toggleButton.addEventListener("click", function() {
    if (mainCssLink.href.endsWith("arApp.css")) {
        // Remove main.css and add app.css
        mainCssLink.href = "../assestsTred/red.css";
    } else {
        // Remove app.css and add main.css
        mainCssLink.href = "arApp.css";
    }
});

// goBack
const goBack = document.getElementById("goBack");
goBack.addEventListener("click", () => {
    if (document.referrer.includes("arList.html")) {
        window.location.href = "/index.html";
    } else {
        window.location.href = "arList.html";
    }
});

})();