import "./style.css";
import setupCategories from "./components/utils.js/categories";

document.querySelector("#app").innerHTML = `
  <div>
    <h1 class="text-2xl text-teal-500">Tienda</h1>
    <div id="categories"></div>
  </div>
`;

setupCategories(document.querySelector("#categories"));
