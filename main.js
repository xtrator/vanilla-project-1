import "./style.css";
import setupCategories from "./components/utils.js/categories";
import nav from "./components/nav";

document.querySelector("#app").innerHTML = `
  <div class="h-screen px-4 py-6">
    ${nav()}
  </div>
`;

// setupCategories(document.querySelector("#categories"));

/*
<h1 class="text-8xl text-teal-500">Tienda</h1>
    <div class="flex bg-red-400 h-full">
      <div id="categories" class="h-full bg-red-400"></div>
      <div><h2>Tienda</h2></div>
    </div>


    <div class="flex">
      <div class="">Categories</div>
      <div class="">Tienda</div>
    </div>
*/
