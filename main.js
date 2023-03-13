import "./style.css";
import nav from "./components/nav";
import { category, setupCategory } from "./components/category";

document.querySelector("#app").innerHTML = /* HTML */ `
  <div class="h-screen">
    ${nav()}
    <div class="2xl:px-56 px-40 font-light">${category()}</div>
  </div>
`;

setupCategory();
