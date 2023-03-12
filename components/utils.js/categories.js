export default async function setupCategories(element) {
  let categories = [];
  categories = await fetch("http://localhost:3333/products")
    .then((res) => res.json())
    .then((res) => res.categories)
    .catch((e) => ["<li>Failed to Fetch</li>"]);

  categories = categories.map((category) => {
    return `<li>${category.name}</li>`;
  });

  element.innerHTML = `
    <ul class="gap-4 text-4xl bg-yellow-200 h-full">
        ${categories.join("")}
    </ul>
  `;
}
