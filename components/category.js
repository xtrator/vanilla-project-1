import rightChevronUrl from "/chevron-right.svg";
import downChevronUrl from "/chevron-down.svg";

export function category() {
  return /* HTML */ `
    <div>
      <p
        class="flex gap-2 px-4 py-2 cursor-pointer font-bold"
        id="categories-title"
      >
        <img src="${rightChevronUrl}" id="all-categories-chevron" /> All
        Categories
      </p>
      <ul id="categories" class="px-4"></ul>
    </div>
  `;
}

export async function setupCategory() {
  let allCategoriesNode = document.querySelector("#categories-title");
  let categories = [];
  categories = await fetch("http://localhost:3333/products")
    .then((res) => res.json())
    .then((res) => res.categories)
    .catch((e) => console.error(e));

  const listItemStyles = "flex gap-2 px-4 py-2 cursor-pointer font-thin";
  if (categories.length == 0) {
    categories = [
      /* HTML*/ `<li class="${listItemStyles}"><img src="${rightChevronUrl}"/>Failed to fetch</li>`,
    ];
  } else {
    categories = categories.map((category) => {
      return /* HTML */ ` <li class="${listItemStyles}">
        <img src="${rightChevronUrl}" />${category.name}
      </li>`;
    });
  }

  allCategoriesNode.addEventListener("click", () =>
    toggleCategories(categories, allCategoriesNode)
  );
}

function toggleCategories(categories) {
  const categoriesNode = document.querySelector("#categories");
  const allCategoriesChevronNode = document.querySelector(
    "#all-categories-chevron"
  );
  if (categoriesNode.innerHTML.length > 0) {
    categoriesNode.innerHTML = /* HTML */ ``;
    allCategoriesChevronNode.src = rightChevronUrl;
  } else {
    categoriesNode.innerHTML = /* HTML */ ` ${categories.join("")} `;
    allCategoriesChevronNode.src = downChevronUrl;
  }
}
