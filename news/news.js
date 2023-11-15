import "../style.css";
import { nav } from "/nav";
import data from "/public/data.json";

console.log(data);

const listeArticles = () => {
  let html = "";

  for (let i = 0; i < data.length; i++) {
    const articles = data[i];
    let articlePost = `
      <a class="flex border-2 shadow-md border-orange-500/50" href="/news/news/?id=${articles.id}">
        <img src="${articles.avatar}" class="aspect-square bg-cover bg-center h-48" alt="">
        <div class="p-4">
          <h5 class="text-xl">${articles.nom}</h5>
          
          <h6 class=""> ${articles.type}</h6>
        </div>
      </a>
    `;
    html += articlePost;
  }
  return html;
};

document.querySelector("#app").innerHTML = `
  <main>
    ${nav}

    <div class="mx-8">
      <div class="grid grid-cols-2 gap-4">
        ${listeArticles()}
      </div>
    </div>
    
  </main>
`;
