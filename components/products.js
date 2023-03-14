import { product } from "./product";

export default function setupProducts() {
  const parent = document.querySelector("#products");
  const products = document.createElement("div");
  products.innerHTML = /* HTML */ `<div class="flex flex-col gap-10">
    <div>
      <label class="text-gray-400 relative bottom-5 left-16 bg-white z-10">
        Sort by
      </label>
      <select
        class="px-3 py-2 outline-none w-32 border border-gray-300 rounded-md"
      >
        <option disabled selected value></option>
        <option>Price</option>
        <option></option>
        <option></option>
      </select>
    </div>
    <div
      id="fetched-products"
      class="flex flex-wrap gap-4 justify-center"
    ></div>
  </div>`;
  parent.appendChild(products);
  mountProducts(1);
  return null;
}

async function mountProducts(id) {
  const parent = document.querySelector("#fetched-products");
  const [productsJSON, error] = await fetch(
    `http://localhost:3333/products/${id}`
  )
    .then((res) => res.json())
    .then((res) => [res.products, res.error])
    .catch((e) => console.log("errorr: " + e));

  if (error) {
    alert(error);
    return;
  }

  let products = productsJSON.map((prod) => {
    return product(prod);
  });

  parent.innerHTML = ``;
  parent.append(...products);
}

export { mountProducts };

/* category int
discount int
id int 
name string
price int
url_image string */
