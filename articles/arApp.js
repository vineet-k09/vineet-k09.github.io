const articles = [
    { title: "Article 1", url: "article1.html" },
    { title: "Article 2", url: "article2.html" },
    { title: "Article 3", url: "article3.html" },
    { title: "Article 4", url: "article4.html" },
    { title: "Article 5", url: "article5.html" },
    { title: "Article 6", url: "article6.html" },
    { title: "Article 7", url: "article7.html" },
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
                const customHeadline = doc.querySelector("headline");

                if (customHeadline) {
                    articleDiv.innerHTML = `
                        <h2>${article.title}</h2>
                        <p>${customHeadline.textContent}</p>
                        <a href="${article.url}">Read more</a>
                    `;
                }
            })
            .catch((error) => {
                console.error(`Error fetching ${article.title}: ${error}`);
            });

        articleList.appendChild(articleDiv);
    });
}
window.onload = createArticleList;
const goBack = document.getElementById("goBack");
goBack.addEventListener("click", () => {
    if (document.referrer.includes("arList.html")) {
        window.location.href = "/index.html";
    } else {
        window.location.href = "arList.html";
    }
});

