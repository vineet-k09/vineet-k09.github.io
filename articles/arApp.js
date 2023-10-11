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
                        <p class="headline">${HeadLine.innerHTML}<p>
                        <br> 
                        <a href="${article.url}">Read more <i class="bx bx-link" style="top: 1.7px; position: relative"></i></a>
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