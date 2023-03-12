import shopLogo from "/Logo.svg";

export default function nav() {
  return `
    <nav class="flex justify-between">
      <div class="flex gap-3 items-end">
        <img src="${shopLogo}" class="h-10" />
        <h1 class="text-3xl">
          Shopdrink
        </h1>
      </div>
      <input 
        type="text" 
        placeholder="Your search..." 
        class="bg-gray-100 rounded-full focus:outline-gray-200 px-11 w-full max-w-xl text-gray-600"
      />
      <button
        class="border-blue-300 border px-3 py-2 text-blue-600 font-bold rounded-md"
      >
        My cart
      </button>
    </nav>
    `;
}
