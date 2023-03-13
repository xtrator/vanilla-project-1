import "./style.css";
import nav from "./components/nav";
import { category, setupCategory } from "./components/category";

document.querySelector("#app").innerHTML = /* HTML */ `
  <div class="h-screen">
    ${nav()}
    <div class="px-56 font-light">${category()}</div>
  </div>
`;

setupCategory();
