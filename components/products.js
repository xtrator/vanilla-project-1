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
  console.log(productsJSON);

  let products = productsJSON.map((prod) => {
    return product(prod);
  });

  parent.innerHTML = ``;
  parent.append(...products);
}

function product(product) {
  if (product.url_image == "") {
    product.url_image =
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/2048px-No_image_available.svg.png";
  }

  const el = document.createElement("div");
  el.classList =
    "p-4 hover:outline hover:outline-blue-200 cursor-pointer w-64 h-96 flex flex-col items-start gap-2";
  el.innerHTML = /* HTML */ ` <img
      class="w-56 h-56"
      src="${product.url_image}"
    />
    <p class="text h-12">${product.name}</p>
    <p class="text-xl font-bold flex gap-1 justify-between items-center">
      $${Math.floor(product.price / 100)}.${product.price % 100}
      <span class="bg-green-100 text-green-800 font-light text-sm"
        >${product.discount > 0 ? `${product.discount}% OFF` : ""}</span
      >
    </p>`;

  const addCartBtn = document.createElement("button");
  addCartBtn.classList =
    "text-blue-700 border border-blue-300 rounded-md px-4 py-1 hover:bg-blue-700 hover:text-white";
  addCartBtn.innerText = "Add to Cart";
  addCartBtn.dataset.product_id = product.id;
  addCartBtn.addEventListener("click", (e) =>
    console.log(e.target.dataset.product_id)
  );

  el.appendChild(addCartBtn);

  return el;
}

export { mountProducts };

/* category int
discount int
id int 
name string
price int
url_image string */
