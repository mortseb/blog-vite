import "./style.css";
import data from "/public/data.json";
import { nav } from "./nav";

document.querySelector("#app").innerHTML = `
  <main >
    ${nav}

    <div class="mx-8">
      <div class="">
        <a href="/news/" class="bg-stone-900 hover:text-slate-400 text-zinc-100 transition-colors px-4 py-2  rounded-md">Voir Articles</a>
      </div>
    </div>
  </main>
`;
