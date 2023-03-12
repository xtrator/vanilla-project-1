import "./style.css";
import setupCategories from "./components/utils.js/categories";

document.querySelector("#app").innerHTML = `
  <div class="h-screen">
    <h1 class="text-8xl text-teal-500">Tienda</h1>
    <div class="flex bg-red-400 h-full">
      <div id="categories" class="h-full bg-red-400"></div>
      <div><h2>Tienda</h2></div>
    </div>
  </div>
`;

setupCategories(document.querySelector("#categories"));
