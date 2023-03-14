export function product(product) {
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
  if (
    sessionStorage.products &&
    JSON.parse(sessionStorage.products).includes(`${product.id}`)
  ) {
    addCartBtn.classList.add("bg-blue-800", "text-white");
    addCartBtn.innerText = "Remove from Cart";
  } else {
    addCartBtn.innerText = "Add to Cart";
  }
  addCartBtn.dataset.product_id = product.id;
  addCartBtn.addEventListener("click", (e) => handleAddCart(e));

  el.appendChild(addCartBtn);

  return el;
}

function handleAddCart(e) {
  let product_id = e.target.dataset.product_id;
  let productsArr;
  if (!sessionStorage.products) {
    sessionStorage.products = JSON.stringify([]);
  }
  if (e.target.innerText == "Add to Cart") {
    e.target.classList.add("bg-blue-800", "text-white");
    e.target.innerText = "Remove from Cart";
    productsArr = JSON.parse(sessionStorage.products);
    sessionStorage.products = JSON.stringify([...productsArr, product_id]);
  } else {
    e.target.classList.remove("bg-blue-800", "text-white");
    e.target.innerText = "Add to Cart";
    productsArr = JSON.parse(sessionStorage.products);
    let index = productsArr.indexOf(product_id);
    productsArr.splice(index, 1);
    sessionStorage.products = JSON.stringify(productsArr);
  }
  console.log(JSON.parse(sessionStorage.products));
}
