document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded in memory");

    let API_URL = "https://newsapi.org/v2/everything?q=TaylorSwift&from=2024-09-03&sortBy=publishedAt&apiKey=bfa6f384b791498ca7abfeded122ec25";
    fetch(API_URL)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error status: ${response.status}`);
            }
            return response.json();
        })
        .then((news) => {
            console.log("API Response: ", news);

            let ul = document.createElement("ul");
            ul.setAttribute("id", "news");
            document.body.appendChild(ul);

            const newsFeed = news.articles;

            if (!newsFeed) {
                console.log("No articles found.");
                return;
            }

            newsFeed.forEach(article => {
                let li = document.createElement("li");
                let p = document.createElement("p");
                let img = document.createElement("img");
                li.innerHTML = `<div class="title">${article.title}</div>`;
                p.innerHTML = `<div class="description">${article.description}</div>`;
                img.innerHTML = `<div class="image">${article.urlToImage}</div>`;
                ul.appendChild(li);
                ul.appendChild(p);
                ul.appendChild(img);
            });
        })
        .catch((error) => {
            console.log("Error fetching JSON", error);
        });
});
