import { mountProducts } from "./products";
import shopLogo from "/Logo.svg";

export default function setupNav() {
  const parent = document.querySelector("#nav-container");
  const nav = document.createElement("nav");
  nav.classList = "flex justify-between h-22 items-center px-4 py-6";
  nav.innerHTML = /* HTML */ `<div>
      <a href="/" class="flex gap-3 items-end"
        ><img src="${shopLogo}" class="h-10" />
        <h1 class="text-3xl">Shopdrink</h1></a
      >
    </div>
    <input
      type="text"
      placeholder="Your search..."
      class="bg-gray-100 rounded-full focus:outline-gray-200 px-11 py-2 w-full max-w-xl text-gray-600"
    />`;

  setupCart(nav);

  parent.appendChild(nav);
}

function setupCart(nav) {
  const cartBtn = document.createElement("button");
  cartBtn.classList =
    "border-blue-300 border px-3 py-2 text-blue-600 font-bold rounded-md hover:bg-blue-600 hover:text-white";
  cartBtn.innerText = "My Cart";
  cartBtn.addEventListener("click", () => {
    mountProducts(null, JSON.parse(sessionStorage.products));
  });

  nav.appendChild(cartBtn);
}
