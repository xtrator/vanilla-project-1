import "./style.css";
import todo from "./components/todo";
import { setupCounter } from "./components/utils.js/counter";

document.querySelector("#app").innerHTML = `
  <div>
    <h1 class="text-2xl text-teal-500">Hello World</h1>
    ${todo()}
    <button id="counter"></button>
  </div>
`;

setupCounter(document.querySelector("#counter"));
