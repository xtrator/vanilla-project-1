import rightChevronUrl from "/chevron-right.svg";
import downChevronUrl from "/chevron-down.svg";
import { mountProducts } from "./products";

export function category() {
  return /* HTML */ `
    <div class="flex flex-col items-start pt-6 gap-10">
      <p
        class="text-2xl text-blue-600 border border-blue-400 px-5 py-2 rounded-md"
      >
        Collection of Drinks
      </p>
      <p
        class="flex gap-2 px-4 py-2 cursor-pointer font-bold "
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
  categories = await fetch(
    import.meta.env.VITE_API_URL + "/products/categories"
  )
    .then((res) => res.json())
    .then((res) => res.categories)
    .catch((e) => console.error(e));

  function handleClick(e) {
    e.stopPropagation();
    let li = e.target;
    mountProducts(li.id);
  }

  const listItemStyles =
    "flex gap-2 px-4 py-2 cursor-pointer font-thin hover:text-lg";
  if (categories.length == 0) {
    categories = [
      /* HTML*/ `<li class="${listItemStyles}"><img src="${rightChevronUrl}"/>Failed to fetch</li>`,
    ];
  } else {
    categories = categories.map((category) => {
      let li = document.createElement("li");
      li.innerHTML = /* HTML */ `<img
          src="${rightChevronUrl}"
        />${category.name}`;
      li.className = listItemStyles;
      li.id = category.id;
      li.addEventListener("click", (e) => handleClick(e));
      return li;
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
    categoriesNode.append(...categories);
    allCategoriesChevronNode.src = downChevronUrl;
  }
}
