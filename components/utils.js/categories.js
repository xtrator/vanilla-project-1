export default async function setupCategories(element) {
  let categories = [];
  categories = await fetch("http://localhost:3333/products")
    .then((res) => res.json())
    .then((res) => res.categories)
    .catch((e) => ["<li>Failed to Fetch</li>"]);

  categories = categories.map((category) => {
    const className =
      "bg-amber-500 text-white hover:text-amber-200 hover:bg-white h-full flex justify-center items-center";
    return `<li class="${className}">${category.name}</li>`;
  });

  element.innerHTML = `
    <ul class=" text-4xl bg-yellow-200 h-full flex flex-col justify-around text-center">
        ${categories.join("")}
    </ul>
  `;
}
