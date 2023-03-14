import "./style.css";
import setupNav from "./components/nav";
import { category, setupCategory } from "./components/category";
import setupProducts from "./components/products";

document.querySelector("#app").innerHTML = /* HTML */ `
  <div class="h-screen">
    <div id="nav-container"></div>
    <div class="px-[13%] font-light flex gap-[10%]">
      ${category()}
      <div
        id="products"
        class=" border-x-2 w-full px-4 py-10 rounded-md mt-6"
      ></div>
    </div>
  </div>
`;

setupCategory();
setupProducts();
setupNav();
